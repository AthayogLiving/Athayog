const withImages = require('next-images');
const path = require('path');
const withPWA = require('next-pwa');

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

module.exports = withPWA({
     // other next config
});
