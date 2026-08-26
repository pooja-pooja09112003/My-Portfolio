/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AllProjectsView } from './components/AllProjectsView';
import { AllCertificatesView } from './components/AllCertificatesView';
import { CtaBanner } from './components/CtaBanner';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CertificateModal } from './components/CertificateModal';
import { Toast } from './components/Toast';
import { ProjectItem, CertificateItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'all-projects' | 'all-certificates'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<CertificateItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleNavigateToAllProjects = () => {
    setCurrentView('all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAllCertificates = () => {
    setCurrentView('all-certificates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1917] flex flex-col items-center justify-start antialiased selection:bg-[#4D5844] selection:text-white">
      
      {/* Centered Portfolio Editorial Container */}
      <main className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 py-4 sm:py-8 flex flex-col">
        
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section (Portfolio) */}
            <HeroSection 
              onOpenContact={() => {
                setSelectedServiceForContact('UI/UX');
                setIsContactOpen(true);
              }} 
            />

            {/* 2. Section 2 — My Education */}
            <EducationSection />

            {/* 3. Section 3 — Technical Skills */}
            <TechnicalSkillsSection />

            {/* 4 & 5. Section 4 (My Credentials) & Section 5 (Projects) Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 sm:mt-16 items-start">
              {/* Left Column: My Credentials (approx 60% width) */}
              <div className="lg:col-span-7 w-full">
                <CredentialsSection
                  onSelectCertificate={(cert) => setActiveCertificate(cert)}
                  onViewAllCertificates={handleNavigateToAllCertificates}
                />
              </div>

              {/* Right Column: Projects (approx 40% width) - 3 Projects with More Projects button */}
              <div className="lg:col-span-5 w-full">
                <ProjectsSection
                  onSelectProject={(project) => setActiveProject(project)}
                  onViewAllProjects={handleNavigateToAllProjects}
                />
              </div>
            </div>

            {/* 6. Call To Action Banner */}
            <CtaBanner 
              onOpenContact={() => {
                setSelectedServiceForContact('Full Stack Development');
                setIsContactOpen(true);
              }} 
            />
          </>
        )}

        {currentView === 'all-projects' && (
          <AllProjectsView
            onBackToHome={handleBackToHome}
            onSelectProject={(project) => setActiveProject(project)}
          />
        )}

        {currentView === 'all-certificates' && (
          <AllCertificatesView
            onBackToHome={handleBackToHome}
            onSelectCertificate={(cert) => setActiveCertificate(cert)}
          />
        )}

        {/* Footer Section */}
        <FooterSection 
          onOpenContact={() => {
            setSelectedServiceForContact('');
            setIsContactOpen(true);
          }} 
        />

      </main>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedServiceForContact}
        onSuccessToast={triggerToast}
      />

      <CertificateModal
        certificate={activeCertificate}
        isOpen={activeCertificate !== null}
        onClose={() => setActiveCertificate(null)}
      />

      <ProjectDetailModal
        project={activeProject}
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
      />

      {/* Notifications */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
