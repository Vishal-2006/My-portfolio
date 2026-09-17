import React from 'react';
import ShowcaseHero from '../components/ShowcaseHero';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ScrollZoomSection from '../components/ui/ScrollZoomSection';

const Home = () => (
  <div className="space-y-12">
    <ScrollZoomSection>
      <ShowcaseHero />
    </ScrollZoomSection>

    <ScrollZoomSection>
      <AboutSection />
    </ScrollZoomSection>

    <ScrollZoomSection>
      <ExperienceSection />
    </ScrollZoomSection>

    <ScrollZoomSection>
      <SkillsSection />
    </ScrollZoomSection>

    <ScrollZoomSection>
      <ProjectsSection />
    </ScrollZoomSection>

    <ScrollZoomSection>
      <ContactSection />
    </ScrollZoomSection>
  </div>
);

export default Home;
