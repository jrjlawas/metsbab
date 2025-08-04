// import PageMeta from "@/components/PageMeta.jsx";
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Blog from './components/Blog';
// import Cause from './components/Cause';
// import CtaArea from './components/CtaArea';
// import Event from './components/Event';
// import Footer from './components/Footer';
// import Testimonial from './components/Testimonial';
// import Volunteer from './components/Volunteer';
// import BackToTop from "@/components/BackToTop.jsx";
// import favLogo4 from '@/assets/img/logo/fav-logo4.png';
// const SeniorCitizenPage = () => {
//   return <>
//             <PageMeta title="Helpy 4" icon={favLogo4} />
//             <Header />
//             <Hero />
//             <About />
//             <Cause />
//             <Event />
//             <Testimonial />
//             <Volunteer />
//             <CtaArea />
//             <Blog />
//             <Footer />
//             <BackToTop />
//         </>;
// };
// export default SeniorCitizenPage;

import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import Hero from "../../metsbab-components/hero";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const HomePage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <Hero />
      <Footer />
      <BackToTop />
    </>
  );
};
export default HomePage;
