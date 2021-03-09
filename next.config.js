const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withPlugins(
     [
          [
               withImages,
               {
                    images: {
                         domains: ['firebasestorage.googleapis.com']
                    }
               }
          ],
          [
               withPWA,
               {
                    pwa: {
                         dest: 'public',
                         register: true
                    }
               }
          ]
     ],
     {
          /* global config here ... */
     }
);
