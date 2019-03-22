module.exports = {
  siteMetadata: {
    title: `JMParsons`,
    description: ``,
    author: `@jmparsons`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JMParsons`,
        short_name: `JMParsons`,
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
        ],
        start_url: `.`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1743605-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'jmparsons.com',
      },
    },
    'gatsby-plugin-offline',
  ],
};
