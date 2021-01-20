import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import Offerings from '@/components/home/Offerings';
import Schedule from '@/components/home/Schedule';
import Enquiry from '@/components/home/Enquiry';
import Footer from '@/components/shared/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Offerings />
            <Gallery />
            <Schedule />
            <Faq />
            <Enquiry />
            <Footer />
        </>
    );
}
