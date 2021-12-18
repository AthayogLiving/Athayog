const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withVideos = require('next-videos');

module.exports = withPlugins(
     [
          [
               withImages,
               {
                    images: {
                         domains: [
                              'firebasestorage.googleapis.com',
                              'images.unsplash.com'
                         ],
                         disableStaticImages: true
                    }
               }
          ],
          [withVideos],

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
     // {
     //      experimental: { nftTracing: true }
     // },
     {
          swcMinify: true
     }
);
