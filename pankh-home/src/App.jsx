import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import InternshipSection from "./components/InternshipSection ";
import WhoWeAreSection from "./components/WhoWeAreSection ";
import CoursesSection from "./components/CoursesSection ";
import RudraHeroBanner from "./components/RudraHeroBanner";
import CybersecurityServices from "./components/CybersecurityServices ";
import PankhWorkforceSolutions from "./components/PankhWorkforceSolutions";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InternshipSection />
      <WhoWeAreSection />
      <CoursesSection />
      <RudraHeroBanner />
      <CybersecurityServices />
      <PankhWorkforceSolutions />
      <CaseStudies />
      <Testimonials />
      <ContactForm />

      <Footer />

    </>
  );
}

export default App;
