import WelcomePage from "../Components/Container/WelcomePage"
import Prompts from "../Components/Container/Prompts"
import Experience from "../Components/Container/Experience"
import Projects from "../Components/Container/Projects"
import Goals from "../Components/Container/Goals"
import Profile from "../Components/Container/Profile"
import ContactInfo from "../Components/Container/ContactInfo"

const Home = () => {
  return (
    <div className="w-full bg-[#f0e68c]">
      
      {/* 1. Welcome Section (Added pt-24 so the absolute header text doesn't hide under the fixed navbar at the start) */}
      <section id="welcome" className="pt-12">
        <WelcomePage />
      </section>

      {/* 2. Profile Section */}
      <section id="profile" className="scroll-mt-24">
        <Profile />
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* 4. Prompts Section */}
      <section id="prompts" className="scroll-mt-24">
        <Prompts />
      </section>

      {/* 5. Goals Section (Accessible via the Contact Info Dropdown link) */}
      <section id="goals" className="scroll-mt-24">
        <Goals />
      </section>

      {/* 6. Experience Section (Accessible via the Contact Info Dropdown link) */}
      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      {/* 7. Contact Info Footer Section */}
      <section id="contact" className="scroll-mt-24">
        <ContactInfo />
      </section>

    </div>
  );
};

export default Home;
