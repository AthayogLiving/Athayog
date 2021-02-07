import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

function FormHeader({ siteLink }) {
     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Breadcrumb
               separator="/"
               bg={bg}
               padding={3}
               rounded="lg"
               boxShadow="base"
          >
               <BreadcrumbItem>
                    <Link href="/admin/forms">
                         <BreadcrumbLink href="#">Forms</BreadcrumbLink>
                    </Link>
               </BreadcrumbItem>

               <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{siteLink || ''}</BreadcrumbLink>
               </BreadcrumbItem>
          </Breadcrumb>
     );
}

export default FormHeader;
