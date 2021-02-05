import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import sharath from 'public/sharath.jpg';

const Employee = () => {
     return (
          <Flex justifyContent="space-between" flexDirection="row" width="60vw">
               <Image
                    src={sharath}
                    height="500px"
                    width="500px"
                    objectFit="cover"
                    layout="intrinsic"
               />
               <Box>
                    <Text>John Doe</Text>
                    <Text>
                         Lorem ipsum dolor sit amet consectetur, adipisicing
                         elit. Ipsam quo nisi libero cumque doloribus odio quia
                         tempore, eaque dignissimos eos numquam ea mollitia
                         voluptatum nam expedita sint minus doloremque culpa!
                         Minima iste pariatur rerum dolores. Alias cupiditate
                         ducimus, at ullam optio iusto, necessitatibus laborum
                         deleniti perferendis rem maxime. Distinctio ducimus cum
                         explicabo ipsum eaque odio dolor labore maiores esse
                         hic! Voluptatibus, nostrum explicabo at minus ad
                         dolorum cupiditate deserunt hic! Error recusandae rerum
                         veniam in assumenda debitis est necessitatibus
                         consequatur provident, porro neque voluptates nam alias
                         eveniet laudantium dolore tempore? Laudantium ipsam
                         ipsum saepe voluptatum quo! Iste sapiente vel
                         asperiores pariatur architecto autem maxime rem nisi
                         inventore suscipit laudantium eaque quaerat quibusdam
                         recusandae earum, voluptatibus quis fuga delectus nulla
                         minima. Amet, inventore nesciunt! Praesentium natus
                         eaque quasi cumque ipsam. Tempora voluptatibus, iste
                         impedit minima in repudiandae facere architecto
                         corporis deleniti sit distinctio repellendus obcaecati
                         iure beatae deserunt assumenda ducimus blanditiis?
                         Aliquid nam similique consequuntur veniam, eos, optio
                         explicabo laborum odio reprehenderit voluptatem,
                         quaerat eius cumque pariatur excepturi? Omnis
                         voluptates culpa itaque blanditiis. Consequuntur
                         corrupti facere error illum exercitationem commodi
                         temporibus. Cum porro ex atque doloribus! Repellendus
                         consectetur pariatur nesciunt, architecto excepturi,
                         deleniti enim labore ex facilis eum expedita, minima
                         voluptatibus dolorem ab quibusdam soluta optio quae
                         placeat obcaecati! Illo, eos. Praesentium magnam eos
                         minus tempore voluptates sunt ipsam error nihil
                         recusandae distinctio enim consequatur cum temporibus
                         optio nostrum quas, accusamus possimus hic nam? Magni
                         nihil eaque atque dolores sed ullam! Dolorum dolorem
                         corrupti architecto a cupiditate mollitia esse culpa,
                         consequuntur cum totam, eaque tempora accusantium,
                         laboriosam molestiae facere quia obcaecati atque harum
                         distinctio maiores veritatis ipsum! Pariatur ducimus
                         magni rerum! Suscipit, natus. Commodi recusandae
                         provident distinctio maiores praesentium labore,
                         voluptatum ipsum explicabo veniam repudiandae
                         blanditiis exercitationem quod, unde ullam ducimus
                         obcaecati doloremque laboriosam ipsa cumque molestiae
                         fugit rem. Tenetur, ea?{' '}
                    </Text>
               </Box>
          </Flex>
     );
};

export default Employee;
