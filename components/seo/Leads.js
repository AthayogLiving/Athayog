import React, { useEffect, useState } from 'react';
import LeadModal from '../home/LeadModal';
import cookie from 'js-cookie';
function Leads() {
     const [loadModules, setLoadModules] = useState(false);

     useEffect(() => {
          let getVisitorCookie = cookie.get('isUniqueVisitor');
          console.log('vicookie', getVisitorCookie);
          if (getVisitorCookie) {
               setLoadModules(false);
          } else {
               setLoadModules(true);
          }
     }, []);
     return <div>{loadModules && <LeadModal />}</div>;
}

export default Leads;
