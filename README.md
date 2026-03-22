# Портфолио разработчика | Developer Portfolio

Персональное портфолио (визитная карточка) разработчика, созданное на Next.js 16 с использованием TypeScript и Tailwind CSS v4.

## 🚀 Технологии

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Язык:** [TypeScript](https://www.typescriptlang.org/)
- **Стили:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Хостинг:** GitHub Pages

## 📋 Требования

- Node.js 18+ 
- npm или yarn

## 🛠️ Установка и запуск

### 1. Клонирование репозитория

```bash
git clone <ваш-repo-url>
cd portfolio
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка данных

Откройте файл `app/data/portfolio.ts` и заполните его своими данными:

- Личная информация (имя, должность, описание)
- Навыки
- Опыт работы
- Проекты
- Контакты

### 4. Добавление медиафайлов

Поместите ваши файлы в папку `public/`:

- `avatar.png` — ваше фото для главной страницы
- `project1.png`, `project2.png` — скриншоты проектов
- `og-image.png` — изображение для превью в соцсетях
- `favicon.ico` — иконка сайта

### 5. Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 6. Сборка для продакшена

```bash
npm run build
npm run start
```

## 📁 Структура проекта

```
app/
├── components/
│   ├── sections/          # Компоненты секций
│   │   ├── Hero.tsx       # Главный экран
│   │   ├── About.tsx      # Обо мне + опыт
│   │   ├── Skills.tsx     # Навыки
│   │   ├── Projects.tsx   # Проекты
│   │   └── Contacts.tsx   # Контакты
│   └── ui/                # Базовые UI компоненты
│       ├── Header.tsx     # Шапка с навигацией
│       ├── Footer.tsx     # Подвал
│       └── Section.tsx    # Обёртка секции
├── data/
│   └── portfolio.ts       # ⚠️ ДАННЫЕ ДЛЯ ЗАПОЛНЕНИЯ
├── types/
│   └── portfolio.ts       # Типы TypeScript
├── layout.tsx             # Layout с мета-тегами
├── page.tsx               # Главная страница
└── globals.css            # Глобальные стили
public/
├── avatar.png             # ⚠️ Ваше фото
├── project1.png           # ⚠️ Скриншоты проектов
├── og-image.png           # ⚠️ Превью для соцсетей
└── favicon.ico            # ⚠️ Иконка сайта
```

## ⚙️ Настройка SEO

Откройте `app/layout.tsx` и измените мета-теги:

```typescript
export const metadata: Metadata = {
  title: "Ваше Имя | Должность",
  description: "Ваше описание",
  // ...
};
```

## 🌐 Деплой на GitHub Pages

### 1. Установка пакета для экспорта

```bash
npm install --save-dev next-export-optimize-images
```

### 2. Настройка next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/<имя-репозитория>',
};

export default nextConfig;
```

### 3. Сборка и деплой

```bash
npm run build
```

### 4. Настройка GitHub Pages

1. Создайте репозиторий на GitHub
2. Запушьте проект:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <ваш-repo-url>
   git push -u origin main
   ```
3. В настройках репозитория: Settings → Pages → Source → GitHub Actions
4. Создайте файл `.github/workflows/nextjs.yml` с конфигом деплоя

## 📝 Файлы для редактирования

| Файл | Описание |
|------|----------|
| `app/data/portfolio.ts` | **Основные данные** (имя, навыки, проекты, контакты) |
| `app/layout.tsx` | SEO мета-теги, название сайта |
| `public/avatar.png` | Ваше фото |
| `public/project*.png` | Скриншоты проектов |
| `README.md` | Этот файл (информация о проекте) |

## 🎨 Особенности

- ✅ Адаптивный дизайн (mobile, tablet, desktop)
- ✅ **Стиль BMW M Performance** — красный/чёрный/белый
- ✅ **Тёмная/светлая тема** с переключателем в шапке
- ✅ **Выбор шрифта** (Sans, Mono, Serif) с сохранением в localStorage
- ✅ Премиальные шрифты и анимации
- ✅ M-полоса (BMW M stripe) в дизайне
- ✅ Плавные анимации и переходы
- ✅ SEO оптимизация
- ✅ Доступность (WCAG)
- ✅ Быстрая загрузка
- ✅ Чистый код на TypeScript

## ⚙️ Настройка темы и шрифта

В файле `app/data/portfolio.ts` можно настроить:

```typescript
settings: {
  // Тема по умолчанию: 'light' | 'dark' | 'system'
  defaultTheme: 'light',  // Светлая тема по умолчанию
  
  // Доступные темы для переключения
  availableThemes: ['light', 'dark'],
  
  // Шрифт по умолчанию: 'sans' | 'mono' | 'serif'
  defaultFont: 'sans',
  
  // Доступные шрифты
  availableFonts: ['sans', 'mono', 'serif'],
},
```

**Переключатели находятся в шапке сайта (справа):**
- 🌙/☀️ — переключение темы
- **T** — выбор шрифта (выпадающее меню)

## 🎨 Цветовая схема

**Светлая тема:**
- Фон: Белый (#ffffff)
- Текст: Чёрный (#0a0a0a)
- Акцент: BMW M Red (#dc143c)

**Тёмная тема:**
- Фон: Чёрный (#0a0a0a)
- Текст: Белый (#ffffff)
- Акцент: BMW M Red (#dc143c)

## 📄 Лицензия

MIT License — см. файл [LICENSE](LICENSE) (опционально).

## 👤 Автор

**Ваше Имя**

- Portfolio: [your-portfolio-url]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your@email.com

---

**Сделано с ❤️ на Next.js**
