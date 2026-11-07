# Personal Finance — historical screenshots

**Owner-authorized gallery materials, captured in Telegram Mini App and Bot, October–November 2026.**

The 9 images below are real historical screenshots. The owner explicitly requested **no redaction of outdated balances or dates**. They are published for product demonstration only and do not represent current balances. Do not use this directory for tokens, private API URLs, card numbers, account identifiers, initData or Google service credentials.

| File | Displayed section | Source supplied by owner |
| --- | --- | --- |
| `01-dashboard.webp` | Dashboard 2.0 | `29221.jpg` |
| `02-bank-cards.webp` | T-Bank & OTP Bank | `29227.jpg` |
| `03-cards-plus.webp` | Cards+ | `29233.jpg` |
| `04-spending-analytics.webp` | Spending Analytics 3.0 | `29212.jpg` |
| `05-calendar-heatmap.webp` | Monthly Calendar / Heatmap | `29230.jpg` |
| `06-history-trend.webp` | History Highlights / Trend | `29236.jpg` |
| `07-reliability-control.webp` | Reliability & Daily Control | `29224.jpg` |
| `08-telegram-morning.webp` | Telegram Morning Briefing | `29218.jpg` |
| `09-telegram-reminder.webp` | Telegram Smart Reminder | `29239.jpg` |

The optimized WebP images (800 px wide, no removal of financial figures) are contained in the owner-provided gallery asset pack generated for this release. The original `.jpg` files remain in the conversation. Upload these nine `.webp` files to this directory on branch `feature/real-screenshots-gallery-2026-11-08` **before merging to main**. The site is otherwise static HTML/CSS/JS and does not request live financial data.

**Gallery QA:** all nine `src` paths must return 200, thumbnails show fully in cards, lightbox opens/closes, arrows and ESC work, mobile layout does not overflow. Branch is not production until assets are present and PR is merged.
