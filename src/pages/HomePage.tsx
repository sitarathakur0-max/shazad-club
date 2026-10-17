import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  Facebook,
  MapPin,
  ChevronDown,
  Dumbbell,
  Target,
  Flame,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  HeartPulse,
} from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

// Image paths from batch generation
const HERO_BG_IMAGE = '/src/assets/images/hero_gym_training_1792220408786.jpg';
const EQUIPMENT_IMAGE = '/src/assets/images/strength_equipment_detail_1792220409451.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Where is Shahzad Fitness Gym located?',
      a: 'Shahzad Fitness Gym is situated at Factory Area Chowk, Sargodha, Pakistan. Visitors from across Sargodha can easily reach the gym for workouts and training enquiries.',
    },
    {
      q: 'How can I enquire about gym membership?',
      a: 'You can enquire about gym membership by calling +92 300 3526215, sending a message on WhatsApp to +92 300 3526215, or visiting the gym in person at Factory Area Chowk, Sargodha.',
    },
    {
      q: 'Is the gym suitable for beginners?',
      a: 'Yes, Shahzad Fitness Gym welcomes beginners. We encourage individuals who are new to fitness to visit or contact the gym to discuss suitable starting routines, safe machine usage, and foundational exercise techniques.',
    },
    {
      q: 'How can I ask about available training options?',
      a: 'You can directly contact trainer Malik Shahzad Ahmed and the gym staff via WhatsApp (+92 300 3526215) or phone call to discuss your fitness goals and ask what training arrangements and guidance are currently available.',
    },
    {
      q: 'Does the gym provide diet guidance?',
      a: 'General principles of balanced nutrition and recovery are encouraged for overall fitness progress. Please contact the gym directly to enquire whether customized diet guidance or advice is currently offered.',
    },
    {
      q: 'How can I contact the trainer?',
      a: 'You can speak directly with trainer Malik Shahzad Ahmed by calling the gym phone number (+92 300 3526215) or sending an enquiry on WhatsApp (+92 300 3526215).',
    },
    {
      q: "What are the gym's opening hours?",
      a: "Opening hours vary and may be updated seasonally. Please contact the gym via WhatsApp or phone call (+92 300 3526215) to confirm current operating hours before visiting.",
    },
    {
      q: 'How can I enquire about membership fees?',
      a: 'Membership fee structures and payment arrangements are provided upon direct enquiry. Please reach out via WhatsApp (+92 300 3526215) or telephone to get accurate, up-to-date membership fee information.',
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION A: HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#101114] overflow-hidden border-b border-[#303238]">
        {/* Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_IMAGE}
            alt="Strength training barbell and weights in atmospheric lighting"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/85 to-[#101114]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Location Label (clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#FF6B24] uppercase mb-4">
              <MapPin className="w-4 h-4 text-[#FF6B24]" />
              <span>Factory Area Chowk, Sargodha</span>
              <span aria-hidden="true" className="text-[#80838C]">·</span>
              <span className="text-[#B9BCC3]">Shahzad Fitness Gym</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F2] uppercase tracking-tight leading-[1.08] mb-6">
              BUILD STRENGTH.{' '}
              <span className="text-[#FF6B24]">DEVELOP DISCIPLINE.</span>{' '}
              MOVE FORWARD.
            </h1>

            {/* Supporting Heading */}
            <p className="font-display font-semibold text-lg sm:text-xl text-[#F5F5F2] mb-4">
              Your Fitness Journey Starts at Shahzad Fitness Gym, Sargodha.
            </p>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#B9BCC3] leading-relaxed mb-8 max-w-2xl">
              Whether you want to develop strength, improve your fitness, work towards a healthier
              lifestyle, or build a consistent workout routine, start by taking the first step.
              Connect with Shahzad Fitness Gym to enquire about available training options and
              guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(
                  'Hello Shahzad Fitness Gym, I would like to enquire about membership details and training options in Sargodha.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] active:bg-[#CC470E] rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24] text-center shadow-lg"
              >
                Enquire About Membership
              </a>
              <button
                onClick={() => onNavigate('/training')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24] text-center"
              >
                <span>Explore Training</span>
                <ArrowRight className="w-4 h-4 text-[#FF6B24]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: WELCOME TO SHAHZAD FITNESS GYM */}
      <section className="py-20 lg:py-24 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#FF6B24] uppercase">
                <span>Local Training Destination</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] tracking-tight uppercase">
                More Than a Workout.{' '}
                <span className="text-[#FF6B24]">A Commitment to Progress.</span>
              </h2>
              <div className="space-y-4 text-base text-[#B9BCC3] leading-relaxed">
                <p>
                  True physical fitness is not built on sudden shortcuts or quick fixes. It is
                  cultivated day by day through disciplined habits, proper exercise technique,
                  progressive overload, and purposeful recovery.
                </p>
                <p>
                  Located at Factory Area Chowk in Sargodha, Shahzad Fitness Gym provides an
                  environment where local residents can focus on their physical development, establish
                  healthy routines, and learn structured training practices under responsible
                  guidance.
                </p>
                <p>
                  Whether you are stepping into a gym for the first time or returning to rebuild your
                  strength, our goal is to help you cultivate consistency and develop exercise habits
                  that endure. Prospective members are invited to contact the gym to learn about our
                  available training arrangements, equipment options, and coaching guidance.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-[#F5F5F2]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B24]" />
                  <span>Proper Exercise Technique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B24]" />
                  <span>Realistic Goal-Setting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B24]" />
                  <span>Sustainable Workout Habits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#1B1D21] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-6">
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase tracking-wide border-b border-[#303238] pb-3">
                  Quick Business Information
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FF6B24] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[#F5F5F2] block">Location</span>
                      <span className="text-[#B9BCC3]">{GYM_INFO.address}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#FF6B24] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[#F5F5F2] block">Phone Enquiries</span>
                      <a
                        href={`tel:${GYM_INFO.phoneClean}`}
                        className="text-[#B9BCC3] hover:text-[#FF6B24] transition-colors"
                      >
                        {GYM_INFO.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-[#F5F5F2] block">WhatsApp Support</span>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#B9BCC3] hover:text-[#FF6B24] transition-colors"
                      >
                        {GYM_INFO.whatsappDisplay}
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="pt-2 border-t border-[#303238]">
                  <button
                    onClick={() => onNavigate('/about')}
                    className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#101114] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                  >
                    Read About Shahzad Fitness Gym
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: YOUR FITNESS GOALS */}
      <section className="py-20 lg:py-24 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-2">
              Foundational Pillars
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight mb-4">
              Your Fitness Goals
            </h2>
            <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              Every individual begins from a different baseline. These four core areas represent
              the general training goals people pursue when entering the gym.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Strength Development */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 flex flex-col justify-between hover:border-[#FF6B24]/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24] mb-5">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase mb-3">
                  Strength Development
                </h3>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  Consistent resistance training, appropriate exercise selection, progressive
                  overload, and ample recovery form the basis of developing functional muscle and
                  joint strength over time.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#303238]/60 text-xs text-[#80838C]">
                Progressive Resistance Focus
              </div>
            </div>

            {/* Card 2: Weight Management */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 flex flex-col justify-between hover:border-[#FF6B24]/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24] mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase mb-3">
                  Weight Management
                </h3>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  Sustainable weight management combines regular physical activity with balanced
                  everyday nutrition, adequate sleep, and consistent lifestyle habits rather than
                  unrealistic crash diets.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#303238]/60 text-xs text-[#80838C]">
                Sustainable Daily Habits
              </div>
            </div>

            {/* Card 3: Muscle Development */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 flex flex-col justify-between hover:border-[#FF6B24]/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24] mb-5">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase mb-3">
                  Muscle Development
                </h3>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  Muscular hypertrophy requires structured stimulus, correct execution across key
                  movement patterns, sufficient protein intake, and long-term training patience.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#303238]/60 text-xs text-[#80838C]">
                Hypertrophy & Form
              </div>
            </div>

            {/* Card 4: General Fitness */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 flex flex-col justify-between hover:border-[#FF6B24]/50 transition-colors">
              <div>
                <div className="w-12 h-12 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24] mb-5">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase mb-3">
                  General Fitness
                </h3>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  Regular physical activity improves cardiovascular health, preserves mobility,
                  boosts daily stamina, and supports physical resilience throughout your everyday
                  life.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#303238]/60 text-xs text-[#80838C]">
                Longevity & Vitality
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-[#80838C]">
            * Note: These descriptions represent general fitness goals. Specific individual coaching
            and equipment arrangements should be confirmed directly with the gym.
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppUrl(
                'Hello Shahzad Fitness Gym, I would like to discuss my fitness goals and find out what training options you offer.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors"
            >
              <span>Discuss Your Fitness Goals</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION D: TRAINING AND COACHING */}
      <section className="py-20 lg:py-24 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-[#303238]">
                <img
                  src={EQUIPMENT_IMAGE}
                  alt="Athletic dumbbells arranged in clean training rack"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#101114]/90 backdrop-blur-sm p-4 rounded border border-[#303238]">
                  <p className="text-xs text-[#B9BCC3]">
                    Focus on execution, control, and progressive development in a dedicated local
                    training setting.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FF6B24] uppercase">
                <span className="w-6 h-0.5 bg-[#FF6B24]" />
                <span>Responsible Instruction</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight">
                Train With Purpose.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                <p>
                  Training with purpose means knowing why you perform each exercise and executing it
                  with proper technique. Rushing through weights with compromised form invites injury
                  and stalls long-term progress.
                </p>
                <p>
                  At Shahzad Fitness Gym, guidance is provided by trainer{' '}
                  <span className="text-[#F5F5F2] font-semibold">Malik Shahzad Ahmed</span>, helping
                  members understand basic lifting mechanics, correct posture, and systematic
                  progression.
                </p>
                <p>
                  Whether you are seeking orientation with gym equipment or looking for advice on
                  organizing your training split, prospective members are welcome to enquire about
                  available training arrangements and coaching availability.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl(
                    'Hello trainer Malik Shahzad Ahmed, I want to enquire about coaching and training options at Shahzad Fitness Gym.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire With Trainer</span>
                </a>
                <button
                  onClick={() => onNavigate('/training')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                >
                  <span>View Training Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B24]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: A SMARTER APPROACH TO FITNESS */}
      <section className="py-20 lg:py-24 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-2">
              Essential Principles
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight mb-4">
              A Smarter Approach to Fitness
            </h2>
            <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              Sustainable progress relies on clear, grounded principles rather than fleeting
              motivation. Keep these four tenets at the center of your routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Principle 1 */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF6B24]">
                Principle 01
              </span>
              <h3 className="font-display font-bold text-xl text-[#F5F5F2]">
                1. Set Realistic Goals
              </h3>
              <p className="text-sm text-[#B9BCC3] leading-relaxed">
                Define measurable, gradual targets suitable to your current fitness level and weekly
                schedule. Expecting overnight transformations frequently leads to burnout, while
                attainable monthly goals build lasting momentum.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF6B24]">
                Principle 02
              </span>
              <h3 className="font-display font-bold text-xl text-[#F5F5F2]">
                2. Focus on Proper Technique
              </h3>
              <p className="text-sm text-[#B9BCC3] leading-relaxed">
                Prioritize movement quality, spinal alignment, and joint stability over heavy load.
                Mastering controlled range of motion ensures that targeted muscles do the work while
                minimizing the risk of strain.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF6B24]">
                Principle 03
              </span>
              <h3 className="font-display font-bold text-xl text-[#F5F5F2]">
                3. Stay Consistent With Your Routine
              </h3>
              <p className="text-sm text-[#B9BCC3] leading-relaxed">
                Consistency trumps sporadic intensity. Committing to a manageable 3-to-4 session
                routine each week produces vastly superior results compared to intensive bursts
                followed by weeks of inactivity.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="bg-[#101114] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-3">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF6B24]">
                Principle 04
              </span>
              <h3 className="font-display font-bold text-xl text-[#F5F5F2]">
                4. Give Your Body Adequate Recovery
              </h3>
              <p className="text-sm text-[#B9BCC3] leading-relaxed">
                Muscles adapt and rebuild during rest, not during the workout itself. Quality sleep,
                rest days between strenuous sessions, and proper hydration are mandatory components
                of any serious training regimen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: NUTRITION AND DIET GUIDANCE */}
      <section className="py-20 lg:py-24 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block">
                Foundational Nutrition
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight">
                Training Is Only One Part of the Journey.
              </h2>
              <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
                Physical effort in the gym requires nutritional support outside of it. A balanced diet
                provides the energy needed for workouts and the nutrients necessary for tissue repair
                and immune health.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-[#303238] bg-[#1B1D21] p-4 rounded">
                  <h4 className="font-display font-bold text-sm text-[#F5F5F2] mb-1">
                    Balanced Whole Foods
                  </h4>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Prioritize nutrient-dense staples: lean proteins, complex carbohydrates, and
                    healthy fats.
                  </p>
                </div>
                <div className="border border-[#303238] bg-[#1B1D21] p-4 rounded">
                  <h4 className="font-display font-bold text-sm text-[#F5F5F2] mb-1">
                    Adequate Protein
                  </h4>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Consume suitable protein sources throughout the day to support muscle repair and
                    recovery.
                  </p>
                </div>
                <div className="border border-[#303238] bg-[#1B1D21] p-4 rounded">
                  <h4 className="font-display font-bold text-sm text-[#F5F5F2] mb-1">
                    Hydration & Sleep
                  </h4>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Maintain continuous hydration and 7–8 hours of restorative sleep each night.
                  </p>
                </div>
                <div className="border border-[#303238] bg-[#1B1D21] p-4 rounded">
                  <h4 className="font-display font-bold text-sm text-[#F5F5F2] mb-1">
                    Avoid Extreme Fad Diets
                  </h4>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Reject crash diets or unsafe supplements; seek medical advice for personal
                    health conditions.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/fitness-guidance')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-colors"
                >
                  <span>Explore Complete Nutrition & Guidance</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B24]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#1B1D21] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-4">
                <div className="w-10 h-10 rounded bg-[#101114] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#F5F5F2] uppercase">
                  Diet Guidance Inquiries
                </h3>
                <p className="text-sm text-[#B9BCC3] leading-relaxed">
                  Have questions about aligning your daily meals with your training objectives?
                  Prospective and active members can enquire directly with the gym to discuss what
                  guidance is currently available.
                </p>
                <a
                  href={getWhatsAppUrl(
                    'Hello Shahzad Fitness Gym, I would like to ask whether diet guidance and nutritional advice are available.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors text-center"
                >
                  Enquire About Diet Guidance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: FITNESS FOR BEGINNERS */}
      <section className="py-20 lg:py-24 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-2">
              Beginner Friendly
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight mb-4">
              New to the Gym? Start With the Basics.
            </h2>
            <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              Stepping into a fitness gym can feel intimidating, but every experienced lifter once
              began as a novice. Follow these simple guidelines to build confidence and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                1. Start at Your Level
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                Begin with weights and exercises matching your current physical condition. Avoid
                comparing yourself with others in the gym.
              </p>
            </div>

            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                2. Learn Movement Technique
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                Master the fundamental mechanics of squats, hinges, presses, and pulls before
                attempting to add heavier resistance.
              </p>
            </div>

            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                3. Progress Gradually
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                Make small, incremental adjustments to reps, sets, or weights over weeks rather than
                making sharp, unmanageable jumps.
              </p>
            </div>

            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                4. Build a Weekly Habit
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                Schedule your workout days at realistic times you can stick to week after week. Three
                steady days outperform an erratic schedule.
              </p>
            </div>

            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                5. Ask for Guidance
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                If you are unfamiliar with a machine or exercise, ask trainer Malik Shahzad Ahmed or
                gym staff for instruction before attempting the lift.
              </p>
            </div>

            <div className="bg-[#101114] border border-[#303238] rounded p-6 space-y-2">
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                6. Listen to Your Body
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3] leading-relaxed">
                Distinguish normal muscle fatigue from sharp joint pain. Stop immediately and seek
                appropriate medical help if concerning symptoms occur.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-[#101114] border border-[#303238] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-base text-[#F5F5F2]">
                Ready to begin your training in Sargodha?
              </h4>
              <p className="text-xs sm:text-sm text-[#B9BCC3]">
                Contact Shahzad Fitness Gym to discuss how to start your beginner routine.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(
                'Hello Shahzad Fitness Gym, I am a beginner looking to get started with workouts in Sargodha.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors whitespace-nowrap shrink-0"
            >
              Get Started as a Beginner
            </a>
          </div>
        </div>
      </section>

      {/* SECTION H: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-24 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-2">
              Questions & Answers
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#B9BCC3]">
              Find clear, verified information regarding Shahzad Fitness Gym and how to get in touch.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#303238] bg-[#1B1D21] rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#F5F5F2] hover:text-[#FF6B24] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF6B24] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#B9BCC3] leading-relaxed border-t border-[#303238]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION I: CONTACT AND LOCATION */}
      <section className="py-20 lg:py-24 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-2">
              Connect With Us
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F5F2] uppercase tracking-tight mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              Contact Shahzad Fitness Gym to enquire about membership, available training options,
              and getting started with your fitness journey in Sargodha.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Information & Action Buttons */}
            <div className="lg:col-span-7 bg-[#101114] border border-[#303238] rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#F5F5F2] uppercase tracking-tight">
                  {GYM_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#FF6B24] uppercase tracking-wider mt-1">
                  {GYM_INFO.category}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B24] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#F5F5F2] block">Address:</span>
                    <span className="text-[#B9BCC3]">{GYM_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B24] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#F5F5F2] block">Phone:</span>
                    <a
                      href={`tel:${GYM_INFO.phoneClean}`}
                      className="text-[#B9BCC3] hover:text-[#FF6B24] transition-colors"
                    >
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#F5F5F2] block">WhatsApp:</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B9BCC3] hover:text-[#FF6B24] transition-colors"
                    >
                      {GYM_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B24] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#F5F5F2] block">Email:</span>
                    <a
                      href={`mailto:${GYM_INFO.email}`}
                      className="text-[#B9BCC3] hover:text-[#FF6B24] transition-colors break-all"
                    >
                      {GYM_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Functional Action Buttons */}
              <div className="pt-4 border-t border-[#303238] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-[#FF6B24]" />
                  <span>Call the Gym</span>
                </a>
                <a
                  href={getWhatsAppUrl(
                    'Hello Shahzad Fitness Gym, I would like to enquire about membership and training.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`mailto:${GYM_INFO.email}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                >
                  <Mail className="w-4 h-4 text-[#FF6B24]" />
                  <span>Send an Email</span>
                </a>
                <a
                  href={GYM_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#1B1D21] hover:bg-[#25282E] border border-[#303238] rounded transition-colors text-center"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Visit Facebook Page</span>
                </a>
              </div>
            </div>

            {/* Location Map View (Clean, visually secondary to details) */}
            <div className="lg:col-span-5 bg-[#101114] border border-[#303238] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-[#303238] flex items-center justify-between">
                <span className="font-display text-xs font-bold uppercase text-[#F5F5F2]">
                  Location Map
                </span>
                <span className="text-xs text-[#80838C]">Factory Area Chowk, Sargodha</span>
              </div>
              <div className="h-72 w-full bg-[#1B1D21] relative flex items-center justify-center">
                <iframe
                  title="Shahzad Fitness Gym Location at Factory Area Chowk, Sargodha"
                  src="https://maps.google.com/maps?q=Factory+Area+Chowk,+Sargodha,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert contrast-90 opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-xs text-[#80838C] bg-[#101114]">
                Conveniently accessible at Factory Area Chowk, Sargodha.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: FINAL CONVERSION CTA */}
      <section className="py-20 lg:py-24 bg-[#1B1D21] border-b border-[#303238] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block">
            Start Your Routine
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F5F5F2] uppercase tracking-tight">
            YOUR NEXT CHAPTER STARTS WITH ONE STEP.
          </h2>
          <p className="text-base sm:text-lg text-[#B9BCC3] max-w-2xl mx-auto leading-relaxed">
            Have questions about membership or training? Reach out to Shahzad Fitness Gym and discuss
            how to get started.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                'Hello Shahzad Fitness Gym, I want to discuss membership and starting my training routine in Sargodha.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F5F5F2] bg-[#101114] hover:bg-[#25282E] border border-[#303238] rounded transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF6B24]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
