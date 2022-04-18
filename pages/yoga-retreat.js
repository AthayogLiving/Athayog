import HomeLayout from '@/components/layout/HomeLayout';
import Hero from '@/components/retreat/Hero';
import Info from '@/components/retreat/Info';
import JoinBlock from '@/components/retreat/JoinBlock';
import UnplugBlock from '@/components/retreat/UnplugBlock';
import { getPlaiceholder } from 'plaiceholder';

export const getStaticProps = async () => {
     const { base64, img } = await getPlaiceholder(
          'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1219&q=80'
     );

     return {
          props: {
               imageProps: {
                    ...img,
                    blurDataURL: base64
               }
          }
     };
};
function YogaRetreat({ imageProps }) {
     return (
          <div>
               <Hero />
               <JoinBlock />
               <Info />
               <UnplugBlock imageProps={imageProps} />
          </div>
     );
}

export default YogaRetreat;
YogaRetreat.Layout = HomeLayout;
