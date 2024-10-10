import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../src/styles/index.scss';

import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: themes.dark,  // Темная тема для раздела "Docs"
    },
    // Добавляем темную тему глобально для интерфейса
    darkMode: {
      dark: themes.dark,
      light: themes.light,  // Можно добавить светлую тему для переключения
      current: 'dark',  // Указываем текущую тему
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

