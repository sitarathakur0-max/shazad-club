import React from 'react';
import {
  Dumbbell,
  Activity,
  UserCheck,
  Calendar,
  Shield,
  Moon,
  MessageSquare,
  ArrowRight,
  Info,
} from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

const HERO_IMAGE = '/src/assets/images/hero_gym_training_1792220408786.jpg';

interface TrainingPageProps {
  onNavigate: (path: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#101114] border-b border-[#303238] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-3">
              Fitness Training & Guidance
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#F5F5F2] uppercase tracking-tight mb-6">
              Training at Shahzad Fitness Gym
            </h1>
            <p className="text-base sm:text-lg text-[#B9BCC3] leading-relaxed">
              Explore the core foundations of physical conditioning, resistance training, and
              disciplined progression. Discover how proper mechanics and consistent habits drive
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Notice Banner */}
      <div className="bg-[#1B1D21] border-b border-[#303238] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs text-[#B9BCC3]">
          <Info className="w-4 h-4 text-[#FF6B24] shrink-0" />
          <p>
            Specific equipment access, session arrangements, and trainer coaching options should be
            confirmed directly with Shahzad Fitness Gym at Factory Area Chowk, Sargodha.
          </p>
        </div>
      </div>

      {/* Main Training Sections */}
      <section className="py-20 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Strength and Resistance Training */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 01
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Strength & Resistance Training
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Resistance training involves challenging muscles against an opposing force—such as
                free weights, cable machines, or bodyweight exercises—to stimulate neuromuscular
                adaptations. Over time, consistent resistance training increases bone density,
                strengthens connective tissues, and develops lean muscle mass.
              </p>
              <p>
                Effective strength work revolves around foundational multi-joint compound movement
                patterns: squats, hinges (deadlifts), horizontal and vertical pushes (bench and
                overhead presses), and pulling movements (rows and pull-downs). Training these
                fundamental movement patterns ensures balanced muscular development across the
                entire body.
              </p>
            </div>
          </div>

          {/* 2. General Fitness and Conditioning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 02
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                General Fitness & Conditioning
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Conditioning complements pure strength by developing cardiovascular endurance, work
                capacity, and metabolic efficiency. Sustained aerobic and interval conditioning
                supports heart health, enhances blood circulation, and helps maintain energy levels
                throughout demanding daily activities.
              </p>
              <p>
                A well-rounded physical program balances resistance workouts with cardiovascular
                conditioning and mobility drills to protect joint health and prevent postural
                stiffness associated with sedentary occupations.
              </p>
            </div>
          </div>

          {/* 3. Beginner Workout Preparation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 03
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Beginner Workout Preparation
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Entering a gym without a plan often leads to frustration or overexertion. Beginners
                should begin with a dynamic warmup to elevate heart rate and mobilize major joints
                before lifting any weights.
              </p>
              <p>
                During initial sessions, focus on becoming comfortable with gym equipment and
                practicing movement patterns using lighter loads or guided machine tracks.
                Acclimating gradually allows tendons and ligaments to adapt safely without severe
                muscle soreness.
              </p>
            </div>
          </div>

          {/* 4. Building Consistent Training Habits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 04
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Building Consistent Training Habits
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Fitness success is determined by the workouts you actually complete. Choosing an
                ambitious six-day split that falls apart after two weeks is counterproductive.
                Instead, choose a schedule you can honor year-round—such as 3 full-body sessions or a
                4-day upper/lower split.
              </p>
              <p>
                Track your attendance, treat workout times as non-negotiable personal appointments,
                and remember that even a brief 40-minute session maintains your training rhythm.
              </p>
            </div>
          </div>

          {/* 5. Exercise Technique and Responsible Progression */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 05
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Exercise Technique & Progression
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Progressive overload—gradually increasing the demands placed on the musculoskeletal
                system—is the fundamental stimulus for building muscle and strength. However,
                overload must never compromise form.
              </p>
              <p>
                Progression can take many safe forms: adding a single repetition, improving tempo
                control, shortening excessive rest intervals, or perfecting movement depth before
                increasing the load on the bar.
              </p>
            </div>
          </div>

          {/* 6. Recovery and Rest */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Moon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 06
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Recovery & Rest
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                When lifting weights, you create microscopic tears in muscle fibers. It is during
                deep sleep and passive rest periods that hormones synthesize protein to repair these
                tissues stronger than before.
              </p>
              <p>
                Without sufficient sleep (7 to 8 hours) and rest days between targeting the same
                muscle groups, the body enters a state of chronic fatigue, elevated cortisol, and
                diminished immune function. Prioritize sleep as an essential component of training.
              </p>
            </div>
          </div>

          {/* 7. How to Enquire About Available Coaching Options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Area 07
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Enquire About Coaching
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Coaching guidance is coordinated by trainer{' '}
                <span className="text-[#F5F5F2] font-semibold">Malik Shahzad Ahmed</span>. Because
                every individual arrives with specific background experience and schedule
                requirements, training options and session arrangements are discussed directly.
              </p>
              <p>
                Prospective members are invited to visit the gym at Factory Area Chowk, Sargodha, or
                reach out through WhatsApp to discuss available workout arrangements.
              </p>

              <div className="pt-4">
                <a
                  href={getWhatsAppUrl(
                    'Hello trainer Malik Shahzad Ahmed, I would like to enquire about coaching and training options at Shahzad Fitness Gym.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp With Trainer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent WhatsApp Enquiry CTA */}
      <section className="py-16 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
            Discuss Your Training Options in Sargodha
          </h2>
          <p className="text-sm text-[#B9BCC3] max-w-xl mx-auto">
            Contact Shahzad Fitness Gym directly to ask about equipment availability, membership, and
            exercise guidance.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(
                'Hello Shahzad Fitness Gym, I want to discuss membership and training in Sargodha.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#101114] hover:bg-[#25282E] border border-[#303238] rounded transition-colors"
            >
              Call {GYM_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
