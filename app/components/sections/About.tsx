/**
 * Секция About - информация о пользователе
 * Стиль: BMW M Performance
 */

import { Profile } from '../../types/portfolio';
import Section from '../ui/Section';
import { Star, Zap } from 'lucide-react';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <Section
      id="about"
      title="Обо мне"
      subtitle="Познакомьтесь со мной поближе"
      className="bg-gray-50 dark:bg-gray-950"
      showMStripe
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 dark:bg-blue-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto">
        {/* Описание */}
        <div className="animate-slide-in-left">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
            Немного обо мне
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line mb-8 text-lg animate-fade-in">
            {profile.about}
          </p>

          {/* Ключевые факты с анимацией */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-500/20 border-l-4 border-red-600 transition-all duration-300 transform hover:-translate-y-2 animate-scale-in">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-red-600 group-hover:scale-105 transition-transform">
                  {profile.experienceYears}+
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                месяцев опыта
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-red-500/20 border-l-4 border-black dark:border-white transition-all duration-300 transform hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-2">
                <Star className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-black dark:text-white group-hover:scale-105 transition-transform">
                  {profile.location}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Локация
              </div>
            </div>
          </div>

          {/* Дополнительные факты */}
          <div className="mt-6 flex gap-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow">
              <Star className="w-5 h-5 text-red-600" />
              <span className="font-medium text-sm">Открыт к предложениям</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
