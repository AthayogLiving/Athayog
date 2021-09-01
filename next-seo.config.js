const title = 'Athayog Living – A holistic yogic living';
const description = 'A holistic yogic living.';

const SEO = {
     title,
     description,
     canonical: 'https://athayogliving.com/',
     openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://athayogliving.com/',
          title,
          description,
          images: [
               {
                    url: 'https://athayogliving.com/og.png',
                    alt: title,
                    width: 1280,
                    height: 720
               }
          ]
     }
};

export default SEO;
