import Enquiry from '@/components/home/Enquiry';
import HomeLayout from '@/components/layout/HomeLayout';
import Hero from '@/components/retreat/Hero';
import Info from '@/components/retreat/Info';
import JoinBlock from '@/components/retreat/JoinBlock';
import UnplugBlock from '@/components/retreat/UnplugBlock';

function YogaRetreat({ imageProps }) {
     return (
          <div>
               <Hero />
               <JoinBlock />
               <Info />
               <UnplugBlock />
               <Enquiry />
          </div>
     );
}

export default YogaRetreat;
YogaRetreat.Layout = HomeLayout;
