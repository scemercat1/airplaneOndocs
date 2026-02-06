module.exports = {
  title: 'Still Watching',
  tagline: 'A private Discord moderation & notification bot',
  url: 'https://your-domain.railway.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'yourname',
  projectName: 'still-watching-docs',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Still Watching',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        {
          href: 'https://discord.com',
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
            { label: 'Intro', to: '/docs/intro' },
            { label: 'Commands', to: '/docs/commands' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Still Watching`,
    },
  },
};

