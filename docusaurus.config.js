// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const webpackConfigOverride = require('./docusaurus.webpack.config.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aircraft Games',
  tagline: 'Self-hosted Discord moderation bot',
  favicon: 'img/favicon.ico',

  url: 'https://example.com', 
  baseUrl: '/',

  organizationName: 'airplaneon',
  projectName: 'airplaneon-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'), 
        },
      }),
    ],
  ],

  plugins: [
    function progressPluginFix() {
      return {
        name: 'progress-plugin-fix',
        configureWebpack(config) {
          // Mutate ProgressPlugin instances in-place to strip invalid options,
          // then return an empty merge object so Docusaurus's webpack-merge
          // step is a no-op while our mutations are already applied.
          webpackConfigOverride(config);
          return {};
        },
      };
    },
  ],

  themeConfig: {
    navbar: {
      title: 'Aircraft Games',
      logo: {
        alt: 'AirplaneON Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/scemercat1/airplaneON',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/P4HVgMeGwS',
          label: 'Discord',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Self Hosting',
              to: '/self-hosting',
            },
            {
              label: 'Commands',
              to: '/commands',
            },
            {
              label: 'Terms Of Service',
              to: '/tos',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/P4HVgMeGwS',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AirplaneON`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
