// export const images = {
//   domains: ['countryflagsapi.com']
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'countryflagsapi.com',
        port: '',
        pathname: '/png/**',
      },
    ],
  },
}
