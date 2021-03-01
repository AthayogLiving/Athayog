const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins(
     [
          [
               withImages,
               {
                    images: {
                         domains: ['firebasestorage.googleapis.com']
                    }
               }
          ]
     ],
     {
          /* global config here ... */
     }
);
