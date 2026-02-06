// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AirplaneON',
  tagline: 'Self-hosted Discord moderation bot',
  favicon: 'img/favicon.ico',

  url: 'https://your-railway-domain.up.railway.app',
  baseUrl: '/',

  organizationName: 'airplaneon',
  projectName: 'airplaneon-docs',

  onBrokenLinks: 'throw',
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
          routeBasePath: '/', // docs direct pe homepage (ca zeppelin.gg)
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'AirplaneON',
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
          href: 'https://github.com/YOUR_GITHUB',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/YOUR_INVITE',
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
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/YOUR_INVITE',
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
