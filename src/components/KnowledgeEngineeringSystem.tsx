import { useState } from 'react';
import SectionCard from './SectionCard';

const KnowledgeEngineeringSystem = () => {
  const [expandedSection, setExpandedSection] = useState<'career' | 'developer' | null>(null);

  const handleExpand = (section: 'career' | 'developer') => {
    setExpandedSection(section);
  };

  const handleCollapse = () => {
    setExpandedSection(null);
  };

  return (
    <div className="min-h-screen bg-main-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-career-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-developer-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-glow" />
      </div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-3 h-3 bg-accent rounded-full animate-glow" />
            <span className="text-white/80 font-medium">Knowledge Engineering System</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI-Powered Career
            <span className="block text-accent">Guidance Platform</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore career paths and development opportunities through our intelligent knowledge base. 
            Choose your journey below to get personalized insights and recommendations.
          </p>
        </div>
      </div>

      {/* Main sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 h-[600px]">
          <SectionCard
            title="Career Guidance"
            description="Discover your ideal career path with personalized recommendations. Get insights into required skills, education pathways, and industry trends tailored to your interests and goals."
            icon={
              <svg className="w-8 h-8 text-career-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            }
            variant="career"
            isExpanded={expandedSection === 'career'}
            onExpand={() => handleExpand('career')}
            onCollapse={handleCollapse}
          />

          <SectionCard
            title="Developer Insights"
            description="Access comprehensive knowledge base datasets and technical documentation. Perfect for developers who need detailed information about career data structures and system capabilities."
            icon={
              <svg className="w-8 h-8 text-developer-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            variant="developer"
            isExpanded={expandedSection === 'developer'}
            onExpand={() => handleExpand('developer')}
            onCollapse={handleCollapse}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              University Knowledge Engineering Project
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-white/40">
              <span>AI-Powered Career Intelligence</span>
              <span>•</span>
              <span>Real-time Knowledge Base</span>
              <span>•</span>
              <span>Personalized Recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeEngineeringSystem;