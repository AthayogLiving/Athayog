const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
     extension: /\.mdx?$/
});

module.exports = withPlugins(
     [
          [
               withMDX,
               {
                    pageExtensions: ['js', 'jsx', 'mdx']
               }
          ],
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
