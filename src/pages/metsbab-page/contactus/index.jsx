import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import Hero from "./components/Hero";
import Contact from "../../metsbab-components/contact";
import IconArea from "./components/IconArea";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const ContactPage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <Hero />
      <Contact />
      <IconArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ContactPage;
