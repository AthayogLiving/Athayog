import React from 'react';
import axios from 'axios';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import HomeLayout from '@/components/layout/HomeLayout';

const complete = () => {
     const router = useRouter();
     const displayRazorpay = async (
          price,
          duration,
          description,
          name,
          courseId
     ) => {
          const result = await axios.post('/api/payment/link', {
               data: {
                    amount: 1000,
                    currency: 'INR',
                    accept_partial: false,
                    expire_by: 1691097057,
                    reference_id: uuidv4(),
                    description: 'Payment for policy no #23456',
                    customer: {
                         name: 'Harsim Kumar',
                         contact: '+919999999999',
                         email: 'gaurav.kumar@example.com'
                    },
                    notify: {
                         sms: true,
                         email: true
                    },
                    reminder_enable: true,
                    notes: {
                         policy_name: 'Jeevan Bima'
                    },
                    callback_url:
                         'http://7f50e1d3510c.ngrok.io/payment/callback',
                    callback_method: 'get'
               }
          });

          if (!result) {
               toast({
                    title: 'Error',
                    description: 'Are you online?',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               setButtonId('');

               return;
          }
          const { short_url } = result.data;
          router.push(short_url);
     };
     return <div></div>;
};

export default complete;
complete.Layout = HomeLayout;
