const withImages = require('next-images');
const path = require('path');

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
