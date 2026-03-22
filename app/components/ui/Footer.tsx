/**
 * Компонент подвала сайта
 * Стиль: BMW M Performance
 */

import { Contact } from '../../types/portfolio';

interface FooterProps {
  name: string;
  contacts: Contact[];
}

export default function Footer({ name, contacts }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 relative overflow-hidden">
      {/* M-полоса с анимацией */}
      <div className="bmw-m-stripe h-1 overflow-hidden">
        <div className="w-full h-full animate-bmw-flow" />
      </div>

      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-900/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Информация об авторе */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                {name}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Благодарю за внимание! Открыт для интересных предложений и сотрудничества.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600" />
              Навигация
            </h4>
            <ul className="space-y-2">
              {['Обо мне', 'Навыки', 'Проекты', 'Контакты'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-red-500 transition-all duration-300 text-sm font-medium inline-block hover:translate-x-2"
                  >
                    <span className="w-0 h-0.5 bg-red-600 inline-block mr-0 group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-red-600" />
              Контакты
            </h4>
            <ul className="space-y-2">
              {contacts.slice(0, 4).map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.type === 'email' ? `mailto:${contact.value}` : contact.value}
                    target={contact.type !== 'email' ? '_blank' : undefined}
                    rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-red-500 transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:scale-150 transition-transform" />
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {name}. Все права защищены.
          </p>

          {/* Декоративный элемент с анимацией */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
