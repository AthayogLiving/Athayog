const withImages = require('next-images');
const path = require('path');
const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
     extension: /\.mdx?$/
});

module.exports = withPWA({
     // other next config
});

module.exports = withMDX({
     pageExtensions: ['js', 'jsx', 'md', 'mdx']
});

module.exports = {
     sassOptions: {
          includePaths: [path.join(__dirname, 'styles')]
     }
};

module.exports = withImages({
     images: {
          domains: ['firebasestorage.googleapis.com']
     }
});
