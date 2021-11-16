const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

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
          experimental: { nftTracing: true }
     }
);
