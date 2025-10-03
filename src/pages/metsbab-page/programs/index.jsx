import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import Hero from "../../metsbab-components/programsHero";
import FilteredPrograms from "../../metsbab-components/filteredPrograms";
import Contact from "../../metsbab-components/contact";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const ProgramsPage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <Hero />
      <FilteredPrograms />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ProgramsPage;
