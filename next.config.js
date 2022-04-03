const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withVideos = require('next-videos');

module.exports = withPlugins(
     [
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
     {
          images: {
               domains: [
                    'firebasestorage.googleapis.com',
                    'images.unsplash.com'
               ]
          }
     },
     {
          eslint: {
               // Warning: This allows production builds to successfully complete even if
               // your project has ESLint errors.
               ignoreDuringBuilds: true
          }
     },
     {
          swcMinify: true
     }
);
