import React from 'react';

interface SkillIconProps {
  type: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.818 20.316L12 22.316L19.182 20.316L21 2H3Z" fill="#E34F26" />
          <path d="M12 20.485L17.657 18.915L19.167 3.824H12V20.485Z" fill="#EF652A" />
          <path d="M12 8.353H8.382L8.137 5.608H12V3.824H6.098L6.711 10.608H12V8.353ZM12 14.882L8.843 14.029L8.627 11.608H6.843L7.275 16.471L12 17.784V14.882Z" fill="#EBEBEB" />
          <path d="M11.99 8.353V10.608H15.422L15.108 14.029L11.99 14.882V17.784L16.716 16.471L17.294 10.01L17.343 9.422L17.471 8.353H11.99ZM12 3.824V5.608H17.725L17.882 3.824H12Z" fill="white" />
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2L4.818 20.316L12 22.316L19.182 20.316L21 2H3Z" fill="#1572B6" />
          <path d="M12 20.485L17.657 18.915L19.167 3.824H12V20.485Z" fill="#33A9DC" />
          <path d="M12 8.353H8.382L8.137 5.608H12V3.824H6.098L6.711 10.608H12V8.353ZM12 14.882L8.843 14.029L8.627 11.608H6.843L7.275 16.471L12 17.784V14.882Z" fill="#EBEBEB" />
          <path d="M12 8.353V10.608H15.422L15.108 14.029L11.99 14.882V17.784L16.716 16.471L17.294 10.01L17.471 8.353H12ZM12 3.824V5.608H17.725L17.882 3.824H12Z" fill="white" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M6 18.5V13.8H7.8V18.5C7.8 19.8 8.8 20.4 10.1 20.4C10.8 20.4 11.4 20.2 11.8 19.8L12.7 21C11.9 21.7 10.8 22 9.7 22C7.3 22 6 20.6 6 18.5ZM13.8 20.2L15.1 19.1C15.8 20.1 16.8 20.7 18 20.7C19.1 20.7 19.8 20.2 19.8 19.4C19.8 18.5 19.1 18.1 17.8 17.6L16.8 17.2C14.7 16.4 13.9 15.3 13.9 13.6C13.9 11.5 15.6 10 18.1 10C19.8 10 21.2 10.7 22.1 11.9L20.8 13.1C20.1 12.3 19.2 11.8 18.1 11.8C17.2 11.8 16.5 12.3 16.5 13C16.5 13.8 17.1 14.2 18.4 14.7L19.4 15.1C21.6 15.9 22.5 17 22.5 18.8C22.5 21.1 20.7 22.3 17.9 22.3C16.1 22.3 14.6 21.5 13.8 20.2Z" fill="#323330" />
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.914 2C8.324 2 8.544 3.555 8.544 3.555L8.548 5.166H12.002V5.688H5.152C5.152 5.688 2 5.334 2 8.918C2 12.502 4.757 12.329 4.757 12.329H6.402V9.988C6.402 7.288 8.766 7.378 8.766 7.378H12.188C14.542 7.378 14.542 5.099 14.542 5.099V3.465C14.542 3.465 14.828 2 11.914 2ZM10.239 3.097C10.675 3.097 11.028 3.45 11.028 3.886C11.028 4.322 10.675 4.675 10.239 4.675C9.803 4.675 9.45 4.322 9.45 3.886C9.45 3.45 9.803 3.097 10.239 3.097Z" fill="#3776AB" />
          <path d="M12.086 22C15.676 22 15.456 20.445 15.456 20.445L15.452 18.834H11.998V18.312H18.848C18.848 18.312 22 18.666 22 15.082C22 11.498 19.243 11.671 19.243 11.671H17.598V14.012C17.598 16.712 15.234 16.622 15.234 16.622H11.812C9.458 16.622 9.458 18.901 9.458 18.901V20.535C9.458 20.535 9.172 22 12.086 22ZM13.761 20.903C13.325 20.903 12.972 20.55 12.972 20.114C12.972 19.678 13.325 19.325 13.761 19.325C14.197 19.325 14.55 19.678 14.55 20.114C14.55 20.55 14.197 20.903 13.761 20.903Z" fill="#FFD43B" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.8 17.5C9.8 17.5 11.2 18.2 13.1 18.2C15.8 18.2 17.6 16.9 17.6 15C17.6 12.2 13.6 11.6 13.6 9.8C13.6 8.7 14.6 8 15.7 8C16.9 8 18.1 8.5 18.8 9.1L19.6 7.4C18.6 6.6 17.1 6.1 15.6 6.1C13.1 6.1 11.3 7.5 11.3 9.7C11.3 12.5 15.3 13 15.3 14.9C15.3 15.9 14.3 16.4 13.1 16.4C11.6 16.4 10.3 15.7 9.8 15.2L9.8 17.5Z" fill="#5382A1" />
          <path d="M4 19.5C6.5 21.2 17.5 21.2 20 19.5" stroke="#E76F00" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 22C8.5 23.2 15.5 23.2 18 22" stroke="#5382A1" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 2C10 4 10 5.5 12 7" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14.5 2C13 4 13 5.5 14.5 7" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'django':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2H16V17.5C14.7 17.9 13.5 18 12.4 18C8.5 18 6.5 16 6.5 12.5C6.5 9 8.6 6.8 12.5 6.8V2ZM12.5 10C10.2 10 9.5 11.1 9.5 12.5C9.5 14 10.2 15 12.5 15V10Z" fill="#092E20" />
          <path d="M17.5 7H20.5V18H17.5V7ZM17.5 2H20.5V5.5H17.5V2Z" fill="#092E20" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.7 10.9L13.1 2.3C12.7 1.9 12.1 1.9 11.7 2.3L9.9 4.1L12.2 6.4C12.7 6.3 13.2 6.4 13.6 6.8C14.1 7.3 14.2 8 13.9 8.6L16.2 10.9C16.8 10.6 17.5 10.7 18 11.2C18.6 11.8 18.6 12.8 18 13.4C17.4 14 16.4 14 15.8 13.4C15.3 12.9 15.2 12.2 15.5 11.6L13.3 9.4V14.7C13.5 14.9 13.6 15.2 13.6 15.5C13.6 16.3 12.9 17 12.1 17C11.3 17 10.6 16.3 10.6 15.5C10.6 14.9 11 14.4 11.5 14.2V8.9C11 8.7 10.6 8.2 10.6 7.6C10.6 7.1 10.8 6.6 11.2 6.3L8.9 4L2.3 10.6C1.9 11 1.9 11.6 2.3 12L10.9 20.6C11.3 21 11.9 21 12.3 20.6L21.7 11.2C22.1 10.8 22.1 10.2 21.7 10.9Z" fill="#F05032" />
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'frontend':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1A1917" strokeWidth="2" />
          <path d="M8 21H16" stroke="#1A1917" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 17V21" stroke="#1A1917" strokeWidth="2" />
          <circle cx="6" cy="7" r="1" fill="#4D5844" />
          <circle cx="9" cy="7" r="1" fill="#4D5844" />
          <circle cx="12" cy="7" r="1" fill="#4D5844" />
          <path d="M6 12L9 10V14L6 12Z" fill="#1A1917" />
          <path d="M18 12L15 10V14L18 12Z" fill="#1A1917" />
        </svg>
      );
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" />
          <path d="M21 5V12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12V5" stroke="#00758F" strokeWidth="2" fill="none" />
          <path d="M21 12V19C21 20.66 16.97 22 12 22C7.03 22 3 20.66 3 19V12" stroke="#00758F" strokeWidth="2" fill="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3" stroke="#00758F" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'word':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#2B579A" />
          <path d="M7 7.5L9.2 16.5H10.8L12.5 10.5L14.2 16.5H15.8L18 7.5H16.2L14.9 13.5L13.3 7.5H11.7L10.1 13.5L8.8 7.5H7Z" fill="white" />
        </svg>
      );
    case 'excel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#217346" />
          <path d="M8.2 7.5L10.8 11.8L8 16.5H10.1L11.8 13.4L13.5 16.5H15.6L12.8 11.8L15.4 7.5H13.3L11.8 10.3L10.3 7.5H8.2Z" fill="white" />
        </svg>
      );
    case 'chatgpt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 9.5C20.1 7.2 18.2 5.5 15.9 5.3C15.4 4 14.3 2.9 12.9 2.4C10.5 1.5 7.8 2.6 6.8 4.9C4.7 5.5 3.3 7.5 3.5 9.8C2.5 11.1 2.5 13 3.3 14.4C2.9 16.7 4.8 18.7 7.1 18.9C7.6 20.2 8.7 21.2 10.1 21.7C12.5 22.6 15.2 21.5 16.2 19.2C18.3 18.6 19.7 16.6 19.5 14.3C20.5 13 20.6 11 19.8 9.6L20.5 9.5Z" fill="#10A37F" />
          <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'gemini':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini_grad)" />
          <defs>
            <linearGradient id="gemini_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3" />
              <stop offset="0.5" stopColor="#5B68DF" />
              <stop offset="1" stopColor="#C4569B" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'claude':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="#D97706" />
          <circle cx="12" cy="10" r="2" fill="#78350F" />
        </svg>
      );
    case 'aistudio':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="#4285F4" />
          <path d="M18 3L19 6L22 7L19 8L18 11L17 8L14 7L17 6L18 3Z" fill="#EA4335" />
        </svg>
      );
    case 'deepseek':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM16.5 13.5C15.67 15.33 13.83 16.5 12 16.5C10.17 16.5 8.33 15.33 7.5 13.5C8.83 14.17 10.42 14.5 12 14.5C13.58 14.5 15.17 14.17 16.5 13.5ZM8.5 10C8.5 9.17 9.17 8.5 10 8.5C10.83 8.5 11.5 9.17 11.5 10C11.5 10.83 10.83 11.5 10 11.5C9.17 11.5 8.5 10.83 8.5 10ZM15.5 10C15.5 9.17 16.17 8.5 17 8.5C17.83 8.5 18.5 9.17 18.5 10C18.5 10.83 17.83 11.5 17 11.5C16.17 11.5 15.5 10.83 15.5 10Z" fill="#0284C7" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
};
