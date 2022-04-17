import HomeLayout from '@/components/layout/HomeLayout';
import Hero from '@/components/retreat/Hero';
import Info from '@/components/retreat/Info';
import Join from '@/components/retreat/Join';
import Unplug from '@/components/retreat/Unplug';
import Head from 'next/head';

function YogaRetreat() {
     return (
          <div>
               <Head>
                    <link
                         rel="preconnect"
                         href="https://fonts.googleapis.com"
                    />
                    <link
                         rel="preconnect"
                         href="https://fonts.gstatic.com"
                         crossorigin
                    />
                    <link
                         href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
                         rel="stylesheet"
                    ></link>
               </Head>
               <Hero />
               <Unplug />
               <Info />
               <Join />
          </div>
     );
}

export default YogaRetreat;
YogaRetreat.Layout = HomeLayout;
