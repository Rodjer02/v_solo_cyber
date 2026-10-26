# Cyber Club V SOLO — сайт

Лендинг игрового клуба на Next.js 16 (App Router), React 19, TypeScript, CSS Modules. Дизайн из `material/` перенесён один в один: глитч, сканлайны, aurora-фон, разделители «SECTOR», мокап чата WhatsApp.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
```

Продакшен: `npm run build && npm start`. Проверки: `npm run typecheck`, `npm run lint`.

## Что заполнить перед релизом

- `src/data/site.ts` — контакты, адрес и карта 2ГИС заполнены по карточке клуба. Осталась ссылка Instagram (`TODO`).
- `src/data/content.ts` — тарифы (цены VIP room — `null`, на сайте «[цена]»), бонусы, правила.
- `.env.local` → `NEXT_PUBLIC_SITE_URL` — канонический адрес сайта.

## Заявки

Бэкенда нет: все кнопки WhatsApp ведут на `wa.me` с предзаполненным приветствием. Текст — `src/lib/whatsapp.ts`.

## SEO

- Metadata API: title, description, canonical, Open Graph, Twitter, robots.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, OG-картинка и иконки генерируются из `src/app`.
- JSON-LD `LocalBusiness` с офферами — `src/components/JsonLd.tsx`; незаполненные поля не выводятся.
- Шрифты Russo One / Exo 2 / JetBrains Mono self-hosted через `next/font`.
