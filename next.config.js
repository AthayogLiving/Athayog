const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const withOffline = require('next-offline');

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
                         runtimeCaching
                    }
               }
          ]
     ],
     {
          /* global config here ... */
     }
);
