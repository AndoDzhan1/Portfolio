import type { Metadata } from "next";
import "./globals.css";

/**
 * ⚠️ SEO НАСТРОЙКИ - ОТРЕДАКТИРУЙТЕ ПОД СЕБЯ ⚠️
 *
 * Заполните мета-теги своими данными для SEO оптимизации
 */
export const metadata: Metadata = {
  // Название сайта (ваше имя)
  title: "Андрей Джансузян | Frontend Developer",

  // Описание для поисковых систем
  description: "Портфолио frontend-разработчика. Создание современных веб-приложений на React, Next.js, TypeScript.",

  // Ключевые слова
  keywords: ["frontend", "react", "nextjs", "typescript", "разработчик", "портфолио"],

  // Автор
  authors: [{ name: "Андрей Джансузян" }],

  // Создатель
  creator: "Андрей Джансузян",

  // Индексация
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph (для соцсетей)
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://yourusername.github.io/portfolio",
    siteName: "Портфолио",
    title: "Андрей Джансузян | Frontend Developer",
    description: "Портфолио frontend-разработчика. Создание современных веб-приложений на React, Next.js, TypeScript.",
    // Укажите путь к изображению для превью
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Портфолио Андрея Джансузяна",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Андрей Джансузян | Frontend Developer",
    description: "Портфолио frontend-разработчика. Создание современных веб-приложений на React, Next.js, TypeScript.",
    images: ["/og-image.png"],
  },

  // Иконки
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Манифест для PWA
  manifest: "/manifest.json",

  // Базовый URL для социальных изображений
  metadataBase: new URL('https://yourusername.github.io/portfolio'),
};

/**
 * Настройки viewport (адаптивность + тема)
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className="h-full antialiased"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
