import HomeLayout from '@/components/layout/HomeLayout';
import HeroSub from '@/components/shared/HeroSub';
const { Box, Heading, Text, Flex, Button } = require("@chakra-ui/react");
import s2 from 'public/shi_2-min.jpg';
import Link from 'next/link'

function Classes() {
    const data = [{ name: "Athayog Space",desc:`Elevate your Yogic practice at the AthaYog Space - a peaceful and hygienic environment to practice.`,url:"/classes/space" }, { name: "AthaYog Online" ,desc:`You may be looking to keep your practice going at a steady pace. You can continue from the comfort of your own space.`,url:"/classes/online"}, { name: "AthaYog Onsite",desc:`AthaYog Onsite is for people seeking Yogic education on their own personal time, from the comfort of their space.`,url:"/classes/onsite" }, { name: "AthaYog Personal Class" ,desc:`Eliminate the distractions and keep your focus intact on your Yogic practice as you welcome change and break the patterns.`,url:"/classes/personal"},{ name: "AthaYog Workshops" ,desc:`Experience a profound approach to Yogic knowledge and living. Explore the deeper, subtler and more authentic aspects of Yoga as we share our collective wisdom on specialized and focussed topics in the Yogic realm.`,url:"/classes/workshops"}]
    const pageData = {
        name: 'Classes',
        heroImage: s2,
        whatis: ``,

    };
    return (
        <Box bg='primaryWhite'>
            <HeroSub pageData={pageData} />
            <Box maxW="container.xl" margin="auto" py={10}  px={5}>
                <Flex justifyContent='center' flexDirection='row' width='100%' gridGap={5} flexWrap='wrap' >
                    {data.map((current) => {
                        return (
                            <Flex bg='white' boxShadow='base' padding={6} rounded='base' width='20rem' minWidth="10rem" height='xsm' direction='column' justifyContent='space-between'>
                                <Box>
                                <Heading textAlign='center' as='h4' size='md'fontWeight='normal'>{current.name}</Heading>
                                <Text textColor='aygray.700' mt={6}>{current.desc}</Text>
                                </Box>
                                <Link passHref={true} href={current.url}>

                                <Button mt={6} colorScheme='aygreen' size='sm' width='100%'>Check Now</Button>

                                </Link>
                            </Flex>
                        )
                    })}
                </Flex>
            </Box>
        </Box>

    );
}

export default Classes
Classes.Layout = HomeLayout;
