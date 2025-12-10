/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  sassOptions: {
    // Silence deprecation warnings from Bootstrap's internal SCSS
    // Our own code uses modern @use/@forward syntax
    silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
  },
}

module.exports = nextConfig
