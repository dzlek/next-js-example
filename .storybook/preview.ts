import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../src/styles/index.scss';

import { fn } from '@storybook/test';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    actions: {
      handles: ['onClick', 'onChange', 'onSubmit', 'onHover', 'onFocus'].map(event => ({ name: event, action: fn() }))
    },
    docs: {
      theme: themes.dark,  
    },

    darkMode: {
      dark: themes.dark,
      light: themes.light,  
      current: 'dark',  
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

