import { execSync } from 'node:child_process'
import path from 'node:path'
import * as clack from '@clack/prompts'
import SftpClient from 'ssh2-sftp-client'

const HOST = '92.53.106.114'
const USERNAME = 'cs21601'
const REMOTE_BASE = '/home/c/cs21601/quantum'
const LOCAL_DIST = path.resolve('./dist')
const LOCAL_SRC_ARCHIVE = path.resolve('./src.zip')
const DATE = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '');

(async () => {
  const spinner = clack.spinner()

  try {
    clack.intro(`Деплой на ${HOST}`)

    const password = await clack.text({ message: `Введите пароль для пользователя ${USERNAME}` })

    // 1) yarn build
    spinner.start('Собираем проект')
    execSync('yarn build --logLevel=silent', { stdio: 'inherit' })
    spinner.stop('Сборка выполнена')

    // 2) git archive
    spinner.start('Делаем архив с исходным кодом')
    execSync(`git archive --format=zip --output=${LOCAL_SRC_ARCHIVE} main`, { stdio: 'inherit' })
    spinner.stop('Архив с исходным кодом сохранен')

    const sftp = new SftpClient()

    spinner.start('Подключаемся к серверу')
    await sftp.connect({
      host: HOST,
      port: 22,
      username: USERNAME,
      password,
    })
    spinner.stop('Подключились к серверу')

    // 3) Переименование public_html
    try {
      spinner.start('Делаем бэкап public_html')
      await sftp.rename(`${REMOTE_BASE}/public_html`, `${REMOTE_BASE}/public_html_${DATE}`)
      spinner.stop('Папка public_html переименована')
    }
    catch {
      spinner.stop('public_html не найдена, пропускаю переименование')
    }

    // 4) Загрузка dist
    spinner.start('Загружаем dist в public_html')
    await sftp.mkdir(`${REMOTE_BASE}/public_html`, true)
    await sftp.uploadDir(LOCAL_DIST, `${REMOTE_BASE}/public_html`, undefined)
    spinner.stop('Статические файлы загружены')

    // 5) Загрузка src.zip
    spinner.start('Загружаем архива с исходным кодом')
    await sftp.mkdir(`${REMOTE_BASE}/src`, true)
    await sftp.put(LOCAL_SRC_ARCHIVE, `${REMOTE_BASE}/src.zip`)
    spinner.stop('Архив с исходным кодом загружен')

    await sftp.end()
    clack.outro('Деплой завершён успешно!')
  }
  catch (err) {
    spinner.stop()
    clack.cancel(`Ошибка: ${err.message}`)
    process.exit(0)
  }
})()
