import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TrainingPage } from './pages/TrainingPage';
import { GuidancePage } from './pages/GuidancePage';
import { ContactPage } from './pages/ContactPage';

function normalizePath(path: string): string {
  const clean = path.replace(/\/+$/, '') || '/';
  if (clean === '/about') return '/about';
  if (clean === '/training') return '/training';
  if (clean === '/fitness-guidance') return '/fitness-guidance';
  if (clean === '/contact') return '/contact';
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return normalizePath(window.location.pathname);
  });

  const navigate = (path: string) => {
    const target = normalizePath(path);
    setCurrentPath(target);
    window.history.pushState({}, '', target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update dynamic page titles and descriptions for enhanced SEO
  useEffect(() => {
    let title = 'Shahzad Fitness Gym | Fitness Training in Sargodha';
    let description =
      'Explore Shahzad Fitness Gym in Factory Area Chowk, Sargodha. Contact the gym to enquire about membership, available training options, and fitness guidance.';

    switch (currentPath) {
      case '/about':
        title = 'About Shahzad Fitness Gym | Strength & Discipline in Sargodha';
        description =
          'Learn about Shahzad Fitness Gym in Factory Area Chowk, Sargodha, our philosophy of consistent training, and guidance with trainer Malik Shahzad Ahmed.';
        break;
      case '/training':
        title = 'Fitness Training & Coaching | Shahzad Fitness Gym, Sargodha';
        description =
          'Discover resistance training, conditioning, beginner workout routines, and coaching options at Shahzad Fitness Gym in Sargodha.';
        break;
      case '/fitness-guidance':
        title = 'Fitness & Diet Guidance | Shahzad Fitness Gym, Sargodha';
        description =
          'Educational guidance on balanced nutrition, protein, hydration, sleep, and sustainable weight management habits from Shahzad Fitness Gym.';
        break;
      case '/contact':
        title = 'Contact Shahzad Fitness Gym | Factory Area Chowk, Sargodha';
        description =
          'Get in touch with Shahzad Fitness Gym via phone (+92 300 3526215), WhatsApp, or email to enquire about memberships and workout options.';
        break;
      default:
        title = 'Shahzad Fitness Gym | Fitness Training in Sargodha';
        description =
          'Explore Shahzad Fitness Gym in Factory Area Chowk, Sargodha. Contact the gym to enquire about membership, available training options, and fitness guidance.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/training':
        return <TrainingPage onNavigate={navigate} />;
      case '/fitness-guidance':
        return <GuidancePage onNavigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#101114] text-[#B9BCC3] flex flex-col font-sans selection:bg-[#FF6B24] selection:text-white">
      {/* Global Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Area */}
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Mandatory Floating WhatsApp Button fixed on the LEFT */}
      <FloatingWhatsApp />
    </div>
  );
}
