import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../metsbab-components/header";
import ReferralsHero from "../../metsbab-components/referralsHero";
import AboutReferral from "../../metsbab-components/aboutReferral";
import ReferralForm from "../../metsbab-components/referralsForm";
import Footer from "../../metsbab-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from "@/assets/img/logo/icon.png";

const ReferralsPage = () => {
  return (
    <>
      <PageMeta title="Metsbab Marketing Sltd." icon={favLogo4} />
      <Header />
      <ReferralsHero />
      <AboutReferral />
      <ReferralForm />
      <Footer />
      <BackToTop />
    </>
  );
};
export default ReferralsPage;
