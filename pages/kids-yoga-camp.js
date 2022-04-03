import BasicInfo from '@/components/kids/BasicInfo';
import EnrollKids from '@/components/kids/EnrollKids';
import KidsGallery from '@/components/kids/KidsGallery';
import KidsHero from '@/components/kids/KidsHero';
import KidsInfo from '@/components/kids/KidsInfo';
import RegisterNow from '@/components/kids/RegisterNow';
import HomeLayout from '@/components/layout/HomeLayout';
import KidsYogaForm from '@/components/shared/KidsYogaForm';
import NavbarHelper from '@/components/shared/NavbarHelper';
import React from 'react';
function KidsYogaCamp() {
     return (
          <>
               <NavbarHelper />
               <KidsHero />
               <RegisterNow />
               <BasicInfo />
               <EnrollKids />
               <KidsGallery />
               <KidsInfo />
               <KidsYogaForm />
          </>
     );
}

export default KidsYogaCamp;
KidsYogaCamp.Layout = HomeLayout;
