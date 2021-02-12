import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../helper/Capitalize';

function ScheduleHeader({ siteLink }) {
     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Breadcrumb bg={bg} padding={3} rounded="lg" boxShadow="base">
               <BreadcrumbItem>
                    <Link href="/admin/schedule">
                         <BreadcrumbLink href="#">Schedule</BreadcrumbLink>
                    </Link>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">
                         {capitalizeFirstLetter(siteLink) || ''}
                    </BreadcrumbLink>
               </BreadcrumbItem>
          </Breadcrumb>
     );
}

export default ScheduleHeader;
