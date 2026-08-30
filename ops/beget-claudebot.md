# ClaudeBot 403 — не чинится из public_html

`curl -A ClaudeBot https://www.quantumbot.kz/` отвечает nginx 403 до приложения.
robots.txt уже Allow. GPTBot и PerplexityBot проходят.

В панели Beget: защита от ботов / WAF — разрешите User-Agent:

- ClaudeBot
- anthropic-ai
- Claude-User
- Claude-SearchBot

Проверка:

```
curl -sI -A 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claude.com/bot)' https://www.quantumbot.kz/
```

Ожидание: HTTP 200 и те же security headers, что у обычного браузера.
