/**
 * Секция Skills - навыки разработчика
 * Стиль: BMW M Performance
 */

import { Skill } from '../../types/portfolio';
import Section from '../ui/Section';
import { Code, Database, Palette, Wrench, Server, Globe } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

// Иконки для категорий
const categoryIcons: Record<string, React.ComponentType<{ className: string }>> = {
  frontend: Globe,
  backend: Server,
  database: Database,
  tools: Wrench,
  design: Palette,
  other: Code,
};

const categoryNames: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Базы данных',
  tools: 'Инструменты',
  design: 'Дизайн',
  other: 'Другое',
};

export default function Skills({ skills }: SkillsProps) {
  // Группировка навыков по категориям
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Section
      id="skills"
      title="Навыки"
      subtitle="Технологии и инструменты, которыми я владею"
      className="bg-white dark:bg-black"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-100 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100 dark:bg-blue-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
          const IconComponent = categoryIcons[category] || categoryIcons.other;

          return (
            <div
              key={category}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-premium-lg hover:shadow-red-500/20 transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-red-600 dark:hover:border-red-600 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Заголовок категории с анимацией */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {categoryNames[category] || category}
                </h3>
              </div>

              {/* Список навыков */}
              <div className="space-y-5">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skill.name} className="animate-scale-in" style={{ animationDelay: `${(categoryIndex * 100 + skillIndex * 50)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-red-600 font-bold text-sm bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-md">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Прогресс-бар BMW M с анимацией */}
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 via-red-500 to-black rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
