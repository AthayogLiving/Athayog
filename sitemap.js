const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

async function getDynamicPaths() {
     const data = ['login', 'signup'];
     return data.map((item) => `/account/${item}`);
}

getDynamicPaths().then((paths) => {
     const Sitemap = configureSitemap({
          baseUrl: 'https://athayogliving.com',
          include: paths,
          exclude: [
               '/admin/*',
               '/api/*',
               '/account/',
               '/account/[accountType]',
               '/payment/*',
               '/register/*'
          ],
          excludeIndex: true,
          pagesConfig: {
               '/projects/*': {
                    priority: '0.5',
                    changefreq: 'daily'
               }
          },
          isTrailingSlashRequired: true,
          targetDirectory: __dirname + '/public',
          pagesDirectory: __dirname + '/pages'
     });
     Sitemap.generateSitemap();
});
