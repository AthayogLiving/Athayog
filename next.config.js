const withImages = require('next-images');
const path = require('path');
const withMDX = require('@next/mdx')({
     extension: /\.mdx?$/
});
module.exports = withMDX({
     pageExtensions: ['js', 'jsx', 'mdx']
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
