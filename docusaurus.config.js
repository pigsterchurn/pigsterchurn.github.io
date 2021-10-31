module.exports = {
  title: 'Pigster Churn',
  tagline: 'Just another pig who plays video games',
  url: 'https://pigsterchurn.github.io.',
  baseUrl: '/v2/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon4.ico',
  organizationName: 'pigsterchurn', // Usually your GitHub org/user name.
  projectName: 'v2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pigster Churn',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo3.png',
      },
      items: [
        {
          to: 'docs/pdmm/pdmm-preface',
          activeBasePath: 'docs/pdmm/',
          label: 'PDMM',
          position: 'left',
        },
        {
          to: 'docs/games',
          activeBasePath: 'docs/games',
          label: 'Games',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pigster Churn`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
