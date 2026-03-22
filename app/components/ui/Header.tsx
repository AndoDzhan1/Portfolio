'use client';

/**
 * Компонент шапки сайта с навигацией
 * Стиль: BMW M Performance
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  name: string;
  navItems: { label: string; href: string }[];
  transparent?: boolean;
  hideName?: boolean;
}

export default function Header({ name, navItems, transparent = false, hideName = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Плавный скролл к секции
  const scrollToSection = (href: string) => {
    // Извлекаем якорь из ссылки (например, '#about' из '/#about' или '#about')
    const selector = href.includes('#') ? '#' + href.split('#')[1] : href;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Проверка: ссылка ведет на текущую страницу (только якорь) или на другую страницу
  const isExternalLink = (href: string) => href.startsWith('/#');

  // Обработка клика по ссылке
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isExternalLink(href)) {
      // Переход на другую страницу с якорем
      window.location.href = href;
    } else {
      // Скролл на текущей странице
      scrollToSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? scrolled
            ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl border-b border-gray-200 dark:border-gray-800'
            : 'bg-transparent'
          : 'bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-2xl border-b border-gray-200 dark:border-gray-800'
      }`}
    >
      {/* M-полоса при скролле с анимацией */}
      {(transparent ? scrolled : true) && (
        <div className="absolute top-0 left-0 right-0 h-1 bmw-m-stripe overflow-hidden">
          <div className="w-full h-full bmw-m-stripe animate-bmw-flow" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип - имя */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`group ${hideName ? 'md:block hidden' : 'block'}`}
          >
            <span className="text-2xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-all duration-300 tracking-wide">
              {name}
            </span>
          </a>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group relative px-5 py-2.5 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-red-50 dark:bg-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Мобильная кнопка меню - в правом верхнем углу */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden fixed top-4 right-4 z-[60] p-2.5 bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg rounded-lg"
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Мобильное меню с анимацией и затемнением */}
        {isMenuOpen && (
          <>
            {/* Затемнение фона */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Меню - выезжает сверху */}
            <nav className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 shadow-2xl animate-slide-down border-b border-gray-200 dark:border-gray-800" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
              {/* Заголовок меню */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-bold text-black dark:text-white">Навигация</h2>
              </div>
              {/* Пункты меню */}
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="group px-4 py-4 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 font-medium rounded-xl transition-all duration-300 flex items-center gap-3"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-1 h-1 bg-red-600 rounded-full group-hover:scale-150 transition-transform" />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
