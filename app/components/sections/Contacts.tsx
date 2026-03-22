'use client';

/**
 * Секция Contacts - контактная информация
 * Стиль: BMW M Performance
 */

import { Contact } from '../../types/portfolio';
import Section from '../ui/Section';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Phone,
  Users,
  Music,
  Film,
  Star,
  MapPin,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';

interface ContactsProps {
  contacts: Contact[];
  location?: string;
}

// Маппинг иконок
const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  Mail,
  Send,
  Github,
  Linkedin,
  Phone,
  Users,
  Music,
  Film,
  Star,
};

export default function Contacts({ contacts, location }: ContactsProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Копирование в буфер обмена
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section
      id="contacts"
      title="Контакты"
      subtitle="Свяжитесь со мной любым удобным способом"
      className="bg-white dark:bg-black"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-100 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 dark:bg-blue-950/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in">
            Открыт для предложений по работе и интересных проектов.
            Не стесняйтесь писать по любому вопросу!
          </p>
        </div>

        {/* Контакты в виде сетки */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact, index) => {
            const IconComponent = iconMap[contact.icon] || Mail;
            const isEmail = contact.type === 'email';
            const href = isEmail ? `mailto:${contact.value}` : contact.value;

            return (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 border-2 border-transparent hover:border-red-600 dark:hover:border-red-600 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Градиентный фон при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-4">
                  {/* Иконка с анимацией */}
                  <div className="p-4 bg-red-600 rounded-xl shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Информация */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      {contact.label}
                    </div>
                    <a
                      href={href}
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      className="text-black dark:text-white font-semibold hover:text-red-600 dark:hover:text-red-500 transition-colors truncate block"
                    >
                      {contact.value}
                    </a>
                  </div>

                  {/* Кнопка копирования */}
                  <button
                    onClick={() => copyToClipboard(contact.value, index)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-all duration-300"
                    aria-label="Копировать"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Анимированная линия снизу */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Местоположение */}
        {location && (
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 shadow-lg animate-fade-in">
            <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-500/30">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-semibold">{location}</span>
          </div>
        )}
      </div>
    </Section>
  );
}
