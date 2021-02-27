module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:id/:slug',
        destination: 'https://arros-tramuntana.tumblr.com/post/:id/:slug',
        permanent: true,
      },
    ]
  },
}
