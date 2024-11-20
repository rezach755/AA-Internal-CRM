// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/hero";
import OutImpressiveStats from "../components/out-impressive-stats";
import ContactUs from "../components/about-us";
import RepresentationRequestForm from "../components/representation-requestform";
import Brands from "../components/projects";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function Campaign() {
  return (
    <>
      <ActiveSectionContextProvider>
        <Navbar />
        <Hero />
        <OutImpressiveStats />
        <Brands />
        <RepresentationRequestForm />
        <ContactUs />
        <Footer />
      </ActiveSectionContextProvider>
    </>
  );
}
