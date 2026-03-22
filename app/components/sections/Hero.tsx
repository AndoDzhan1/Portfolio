'use client';

/**
 * Секция Hero - главный экран с приветствием
 * Стиль: BMW M Performance
 */

import Image from 'next/image';
import { Profile } from '../../types/portfolio';
import { MapPin, Calendar } from 'lucide-react';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-white dark:bg-black">
      {/* Фоновые элементы BMW M с анимацией */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 dark:from-red-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100 dark:bg-gray-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Декоративная M-полоса */}
      <div className="absolute top-0 left-0 w-1 h-full bmw-m-stripe-vertical opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Бейдж должности с анимацией */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg shadow-red-500/30 animate-float">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {profile.title}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight tracking-tight animate-fade-in">
              Привет, я <br />
              <span className="text-red-600 inline-block animate-glow">
                {profile.name}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg animate-fade-in animation-delay-200">
              {profile.tagline}
            </p>

            {/* Мета-информация */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl animate-slide-in-left hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="font-medium">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-xl animate-slide-in-right hover:scale-105 transition-transform duration-300">
                <Calendar className="w-5 h-5 text-red-600" />
                <span className="font-medium">{profile.experienceYears}+ месяцев опыта</span>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in animation-delay-400">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex items-center gap-2 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">Смотреть проекты</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacts"
                className="group px-8 py-4 bg-white dark:bg-gray-900 text-black dark:text-white font-bold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">Связаться</span>
              </a>
            </div>
          </div>

          {/* Изображение */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              {/* Декоративная рамка BMW M с анимацией */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600 via-red-500 to-black dark:to-gray-900 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />

              <div className="relative">
                {/* M-полоса сверху */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-2 bmw-m-stripe rounded-full z-10" />

                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-premium-lg group-hover:shadow-red-500/30 transition-shadow duration-500">
                  {/* Эффект сканирования при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-10" />
                  
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 384px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Декоративные элементы */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-xl -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-4 border-red-600 rounded-xl -z-10 group-hover:rotate-45 transition-transform duration-500" />
                
                {/* Плавающие элементы */}
                <div className="absolute -right-8 top-1/2 w-12 h-12 bg-blue-600 rounded-lg -z-10 animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -left-6 bottom-1/4 w-8 h-8 bg-gray-800 dark:bg-gray-200 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
