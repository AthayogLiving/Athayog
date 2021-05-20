import HomeLayout from '@/components/layout/HomeLayout';
import {
     Box,
     Divider,
     Heading,
     ListItem,
     OrderedList,
     Text,
     UnorderedList,
     VStack
} from '@chakra-ui/layout';
import React from 'react';

function Refund(props) {
     return (
          <Box maxW="container.xl" margin="auto" py={20} mt={10} px={5}>
               <Heading textAlign="center">REFUND POLICY</Heading>
               <Divider my={6} />

               <VStack spacing={10} mt={5}>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              fontSize="2xl"
                              mb={5}
                         >
                              OVERVIEW
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              Certain aspects of the service may be provided for
                              a fee or other charges. If you elect to use paid
                              aspects of the service, you agree to the terms of
                              sale, pricing, payment and billing policies
                              applicable to such fees and charges. Athayog
                              Living may add new services for additional fees
                              and charges, or amend the same for existing
                              services, at any time in its sole discretion.
                         </Text>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              CANCELLATION
                         </Heading>

                         <Text mb={5} fontSize="xl">
                              You may cancel your personal training or course at
                              any time; however, there are no refunds for
                              cancellation. In the event that Athayog Living
                              suspends or terminates your account or this
                              agreement, you understand and agree that you shall
                              receive no refund or exchange for any unused time
                              on a subscription, any license or subscription
                              fees for any portion of the service, any content
                              or data associated with your account, or for
                              anything else.
                         </Text>
                         <OrderedList mt={3} fontSize="xl">
                              <ListItem>
                                   {' '}
                                   At Athayog Living, we have a clear ‘No Refund
                                   Policy’. Once yoga centre membership/course
                                   is purchased online on our platform, there
                                   will be no refund. Thus, the buyer is advised
                                   to make an informed decision while making a
                                   purchase on our platform.
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   Membership once purchased is not transferable
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   Please note that Athayog Living decision on
                                   any refund & cancellation policy shall be
                                   final & binding.
                              </ListItem>
                         </OrderedList>
                    </Box>
                    <Box width="100%" fontWeight="light" fontSize="lg">
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              REFUNDS (if applicable)
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              Membership/Course cancellation received before
                              said service has been used you may be eligible a
                              full refund. Cancellations received after the
                              stated deadline will not be eligible for a refund.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              Cancellations will be accepted via phone or
                              e-mail, and must be received by the stated
                              cancellation deadline. In addition:
                              <OrderedList mt={3} fontSize="xl">
                                   <ListItem>
                                        {' '}
                                        All refund requests must be made by the
                                        member or credit card holder.
                                   </ListItem>
                                   <ListItem>
                                        {' '}
                                        Refund requests must include the name of
                                        the member and/or transaction number.
                                   </ListItem>
                                   <ListItem>
                                        {' '}
                                        Refunds will be credited back to the
                                        original credit card used for payment.
                                   </ListItem>
                              </OrderedList>
                         </Text>
                         <Text mb={5} fontSize="xl">
                              We will also notify you of the approval or
                              rejection of your refund. If you are approved,
                              then your refund will be processed, and a credit
                              will automatically be applied to your credit card
                              or original method of payment, within a certain{' '}
                              <strong style={{ fontWeight: '500' }}>
                                   5 - 10 Buisness Days
                              </strong>
                         </Text>
                    </Box>

                    <Box width="100%" fontWeight="light" fontSize="lg">
                         {' '}
                         <Heading
                              fontSize="2xl"
                              _after={{
                                   content: "''",
                                   display: 'block',
                                   width: '50px',
                                   height: '4px',
                                   background: 'aygreen.500',
                                   marginTop: '16px'
                              }}
                              mb={5}
                         >
                              LATE OR MISSING REFUNDS (if applicable)
                         </Heading>
                         <Text mb={5} fontSize="xl">
                              If you haven’t received a refund yet, first check
                              your bank account again. Then contact your credit
                              card company, it may take some time before your
                              refund is officially posted.
                         </Text>
                         <Text mb={5} fontSize="xl">
                              Next contact your bank. There is often some
                              processing time before a refund is posted. If
                              you’ve done all of this and you still have not
                              received your refund yet, please contact us at{' '}
                              <strong style={{ fontWeight: '500' }}>
                                   {' '}
                                   info@athayogliving.com
                              </strong>
                         </Text>
                    </Box>
               </VStack>
               <Divider mt={10} />
          </Box>
     );
}

export default Refund;
Refund.Layout = HomeLayout;
