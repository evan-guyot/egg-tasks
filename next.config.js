module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:44357/:path*' // Proxy to Backend
      }
    ]
  }
}