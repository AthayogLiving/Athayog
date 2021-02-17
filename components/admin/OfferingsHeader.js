import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../helper/Capitalize';

function OfferringsHeader({ siteLink }) {
     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Breadcrumb bg={bg} padding={3} rounded="lg" boxShadow="base">
               <BreadcrumbItem>
                    <Link href="/admin/offerings">
                         <BreadcrumbLink href="#">Offerings</BreadcrumbLink>
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

export default OfferringsHeader;
