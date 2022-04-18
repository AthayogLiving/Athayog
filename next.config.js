const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withVideos = require('next-videos');
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlugins(
     [
          [withVideos],
          [withPlaiceholder],
          [
               (withPWA,
               {
                    pwa: {
                         dest: 'public',
                         runtimeCaching
                    }
               })
          ]
     ],
     {
          eslint: {
               // Warning: This allows production builds to successfully complete even if
               // your project has ESLint errors.
               ignoreDuringBuilds: true
          },
          images: {
               domains: [
                    'firebasestorage.googleapis.com',
                    'images.unsplash.com'
               ]
          }
     },

     {
          images: {
               domains: [
                    'firebasestorage.googleapis.com',
                    'images.unsplash.com'
               ]
          },
          swcMinify: true
     }
);
