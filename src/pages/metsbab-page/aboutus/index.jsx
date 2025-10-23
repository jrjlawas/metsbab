import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import Hero from "../../metsbab-components/aboutHero";
import About from "../../metsbab-components/aboutPage";
import AboutStory from "../../metsbab-components/aboutStory";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const AboutUsPage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <Hero />
      <About />
      <AboutStory />
      <Footer />
      <BackToTop />
    </>
  );
};
export default AboutUsPage;
