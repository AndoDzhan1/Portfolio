/**
 * Базовый компонент секции
 * Стиль: BMW M Performance
 */

import { ReactNode } from 'react';

interface SectionProps {
  /** ID секции для якорных ссылок */
  id: string;
  /** Заголовок секции */
  title: string;
  /** Подзаголовок/описание секции */
  subtitle?: string;
  /** Дочерние элементы */
  children: ReactNode;
  /** Классы для кастомизации */
  className?: string;
  /** Показывать декоративную полосу */
  showMStripe?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  showMStripe = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative overflow-hidden ${className}`}
    >
      {/* Декоративная M-полоса с анимацией */}
      {showMStripe && (
        <div className="absolute top-0 left-0 right-0 h-1 bmw-m-stripe overflow-hidden">
          <div className="w-full h-full animate-bmw-flow" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок секции с анимацией */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Декоративная линия с пульсацией */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-red-600 rounded-full animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight bg-gradient-to-r from-red-600 via-black to-red-600 dark:from-red-500 dark:via-white dark:to-red-500 bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full animate-pulse" />
          </div>

          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Контент секции */}
        {children}
      </div>
    </section>
  );
}
