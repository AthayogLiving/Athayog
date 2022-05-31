import HomeLayout from '@/components/layout/HomeLayout';
import React from 'react';
import EventRegister from '@/components/arambha/EventRegister';

function Register() {
     return (
          <div>
               <EventRegister />
          </div>
     );
}

export default Register;
Register.Layout = HomeLayout;
