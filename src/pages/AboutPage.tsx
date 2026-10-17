import React from 'react';
import { ArrowRight, MapPin, Phone, MessageSquare, Check, Target, Dumbbell, ShieldCheck } from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

const EQUIPMENT_IMAGE = '/src/assets/images/strength_equipment_detail_1792220409451.jpg';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Hero Header */}
      <section className="bg-[#101114] border-b border-[#303238] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FF6B24] uppercase mb-3">
              <MapPin className="w-4 h-4" />
              <span>Factory Area Chowk, Sargodha</span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#F5F5F2] uppercase tracking-tight mb-6">
              About Shahzad Fitness Gym
            </h1>
            <p className="text-base sm:text-lg text-[#B9BCC3] leading-relaxed">
              Founded on the values of discipline, patient progress, and grounded training guidance,
              Shahzad Fitness Gym provides an authentic training environment in Sargodha for
              individuals dedicated to developing strength and physical resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Content */}
      <section className="py-20 lg:py-24 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Primary Article */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block">
                  Our Identity
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
                  A Dedicated Fitness Destination in Sargodha
                </h2>
                <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                  Shahzad Fitness Gym is situated at Factory Area Chowk in Sargodha, Pakistan. The gym
                  was created to give local fitness enthusiasts and everyday people a reliable,
                  welcoming space where resistance exercise and fitness coaching are prioritized over
                  superficial trends.
                </p>
                <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                  We believe fitness is not a seasonal ambition but a lifestyle discipline. By
                  providing access to quality equipment and practical instruction, we strive to make
                  effective exercise accessible to anyone motivated to put in the work.
                </p>
              </div>

              {/* Coaching & Guidance */}
              <div className="space-y-4 pt-6 border-t border-[#303238]">
                <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block">
                  Trainer & Instruction
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
                  Guided by Trainer Malik Shahzad Ahmed
                </h2>
                <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                  Guidance at the gym is led by trainer{' '}
                  <span className="text-[#F5F5F2] font-semibold">Malik Shahzad Ahmed</span>. He works
                  with gym members to help them navigate equipment responsibly, understand lifting
                  technique, and maintain consistency in their routines.
                </p>
                <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                  Rather than making exaggerated transformation claims, training guidance emphasizes
                  solid fundamentals: ensuring safe body alignment during compound lifts, tailoring
                  repetition and load parameters to individual readiness, and respecting physical
                  limits.
                </p>
                <div className="p-4 bg-[#1B1D21] border border-[#303238] rounded text-xs text-[#B9BCC3] leading-relaxed">
                  Interested in discussing your training needs or exploring available coaching
                  options? Reach out to trainer Malik Shahzad Ahmed directly through WhatsApp or by
                  calling the gym.
                </div>
              </div>

              {/* Training Philosophy */}
              <div className="space-y-4 pt-6 border-t border-[#303238]">
                <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block">
                  Our Core Philosophy
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
                  The Pillars of Lasting Physical Progress
                </h2>
                <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                  Physical fitness is a gradual physiological process. We build our guidance around
                  four straightforward truths:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                    <h3 className="font-display font-bold text-base text-[#F5F5F2]">
                      1. Consistency Above Intensity
                    </h3>
                    <p className="text-xs text-[#B9BCC3] leading-relaxed">
                      Showing up regularly and executing structured workouts creates cumulative
                      adaptations that short bursts of extreme effort can never match.
                    </p>
                  </div>

                  <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                    <h3 className="font-display font-bold text-base text-[#F5F5F2]">
                      2. Technique Before Weight
                    </h3>
                    <p className="text-xs text-[#B9BCC3] leading-relaxed">
                      Ego-lifting leads to injury. Mastering controlled movement mechanics protects
                      joints and triggers maximum muscle fiber recruitment.
                    </p>
                  </div>

                  <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                    <h3 className="font-display font-bold text-base text-[#F5F5F2]">
                      3. Realistic Goal Setting
                    </h3>
                    <p className="text-xs text-[#B9BCC3] leading-relaxed">
                      Establishing sustainable milestones keeps you engaged and avoids the common
                      burnout cycles associated with unrealistic expectations.
                    </p>
                  </div>

                  <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                    <h3 className="font-display font-bold text-base text-[#F5F5F2]">
                      4. Recovery Is Mandatory
                    </h3>
                    <p className="text-xs text-[#B9BCC3] leading-relaxed">
                      Strength gains and muscle repairs happen during sleep and rest periods. Training
                      hard requires resting with equal seriousness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Location & Verification Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1B1D21] border border-[#303238] rounded-lg p-6 space-y-5">
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase tracking-wide border-b border-[#303238] pb-3">
                  Gym Overview
                </h3>

                <div className="space-y-4 text-xs text-[#B9BCC3]">
                  <div>
                    <span className="font-bold text-[#F5F5F2] block uppercase tracking-wider mb-1">
                      Business Name
                    </span>
                    <span>{GYM_INFO.name}</span>
                  </div>

                  <div>
                    <span className="font-bold text-[#F5F5F2] block uppercase tracking-wider mb-1">
                      Category
                    </span>
                    <span>{GYM_INFO.category}</span>
                  </div>

                  <div>
                    <span className="font-bold text-[#F5F5F2] block uppercase tracking-wider mb-1">
                      Location
                    </span>
                    <span>{GYM_INFO.address}</span>
                  </div>

                  <div>
                    <span className="font-bold text-[#F5F5F2] block uppercase tracking-wider mb-1">
                      Lead Trainer
                    </span>
                    <span>{GYM_INFO.trainerName}</span>
                  </div>

                  <div>
                    <span className="font-bold text-[#F5F5F2] block uppercase tracking-wider mb-1">
                      Direct Contact
                    </span>
                    <a
                      href={`tel:${GYM_INFO.phoneClean}`}
                      className="text-[#FF6B24] hover:underline"
                    >
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#303238] space-y-2">
                  <a
                    href={getWhatsAppUrl(
                      'Hello Shahzad Fitness Gym, I read your About page and want to enquire about joining.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#101114] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                  >
                    View Contact Details
                  </button>
                </div>
              </div>

              {/* Equipment Photo Card */}
              <div className="rounded-lg overflow-hidden border border-[#303238]">
                <img
                  src={EQUIPMENT_IMAGE}
                  alt="Strength training dumbbell rack in clean athletic setting"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-[#1B1D21] p-4 text-xs text-[#80838C]">
                  Dedicated strength and conditioning space at Factory Area Chowk, Sargodha.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
            Ready to Begin in Sargodha?
          </h2>
          <p className="text-sm text-[#B9BCC3]">
            Reach out directly to Shahzad Fitness Gym to enquire about memberships, training hours,
            and starting your workout routine.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors"
            >
              Enquire on WhatsApp
            </a>
            <button
              onClick={() => onNavigate('/training')}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#101114] hover:bg-[#25282E] border border-[#303238] rounded transition-colors"
            >
              Explore Training Options
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
