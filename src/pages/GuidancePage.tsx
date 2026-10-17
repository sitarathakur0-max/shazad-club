import React from 'react';
import {
  Apple,
  Droplets,
  Moon,
  Scale,
  Dumbbell,
  AlertTriangle,
  Compass,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl } from '../data/gymInfo';

interface GuidancePageProps {
  onNavigate: (path: string) => void;
}

export const GuidancePage: React.FC<GuidancePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#101114] border-b border-[#303238] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-wider text-[#FF6B24] uppercase block mb-3">
              Nutritional Education & Wellness
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-[#F5F5F2] uppercase tracking-tight mb-6">
              Fitness & Diet Guidance
            </h1>
            <p className="text-base sm:text-lg text-[#B9BCC3] leading-relaxed">
              Sustainable physical transformation is grounded in balanced nutrition, regular
              hydration, and restorative sleep. Discover responsible dietary principles that support
              your workouts.
            </p>
          </div>
        </div>
      </section>

      {/* Medical & Individual Disclaimer */}
      <div className="bg-[#1B1D21] border-b border-[#303238] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-[#B9BCC3]">
          <ShieldCheck className="w-4 h-4 text-[#FF6B24] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            Educational Guidance Notice: Individual nutritional requirements vary based on age,
            metabolism, and medical history. This content is provided for general education and does
            not replace licensed medical or clinical dietetic consultation.
          </p>
        </div>
      </div>

      {/* Educational Content Blocks */}
      <section className="py-20 bg-[#101114] border-b border-[#303238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Basic Principles of Balanced Nutrition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Apple className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 01
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Balanced Nutrition Principles
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                A nutritious diet centers on wholesome, minimally processed foods that supply steady
                energy and essential micronutrients. Rather than demonizing entire food groups or
                subscribing to restrictive fads, focus on consistent daily variety.
              </p>
              <p>
                Ensure your daily meals contain a balance of macronutrients: adequate protein to
                rebuild tissues, complex carbohydrates to fuel training intensity, and essential fats
                to support hormone synthesis and cellular integrity.
              </p>
            </div>
          </div>

          {/* 2. Macronutrient Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 02
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Proteins, Carbs & Healthy Fats
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                  <h3 className="font-display font-bold text-sm text-[#F5F5F2] uppercase text-[#FF6B24]">
                    Protein
                  </h3>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Essential for repairing muscle fibers damaged during exercise. Excellent sources
                    include eggs, chicken, beef, fish, lentils, beans, and dairy products.
                  </p>
                </div>
                <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                  <h3 className="font-display font-bold text-sm text-[#F5F5F2] uppercase text-[#FF6B24]">
                    Carbohydrates
                  </h3>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    The primary fuel for high-intensity lifting. Complex sources such as whole oats,
                    rice, sweet potatoes, and roti provide sustained blood glucose levels.
                  </p>
                </div>
                <div className="bg-[#1B1D21] border border-[#303238] p-5 rounded space-y-2">
                  <h3 className="font-display font-bold text-sm text-[#F5F5F2] uppercase text-[#FF6B24]">
                    Healthy Fats
                  </h3>
                  <p className="text-xs text-[#B9BCC3] leading-relaxed">
                    Vital for hormone balance and joint lubrication. Emphasize moderate intakes of
                    nuts, seeds, olive oil, and naturally occurring animal fats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Hydration and Exercise */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 03
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Hydration & Exercise Performance
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Even a minor 2% deficit in total body water can significantly diminish muscular
                endurance, impair reaction time, and cause cramping. In warm climates like Sargodha,
                replacing fluid lost through sweat during intense gym training is vital.
              </p>
              <p>
                Drink water steadily throughout the day rather than chugging large quantities right
                before a set. If training for extended periods in high heat, ensure baseline
                electrolyte balance through balanced meals.
              </p>
            </div>
          </div>

          {/* 4. Sleep and Recovery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Moon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 04
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Sleep & Physiological Recovery
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Sleep is when your body produces the natural growth factors necessary for muscular
                repair. Chronic sleep deprivation elevates the stress hormone cortisol, impairs
                insulin sensitivity, and increases susceptibility to soft tissue injuries.
              </p>
              <p>
                Aim for 7 to 8 hours of uninterrupted rest in a dark, cool sleeping space. Consistent
                sleep timing supports natural circadian rhythms and maximizes your physical training
                adaptations.
              </p>
            </div>
          </div>

          {/* 5. Sustainable Weight Management Habits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Scale className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 05
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Sustainable Weight Management
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Sustainable fat loss is achieved by creating a moderate, manageable energy deficit
                over months rather than starving the body with severe calorie restrictions. Severe
                diets prompt the body to shed lean muscle tissue and slow metabolic rate.
              </p>
              <p>
                Pair regular resistance training with increased daily step counts, mindful portion
                control, and reduced consumption of sugary sodas and deep-fried snacks.
              </p>
            </div>
          </div>

          {/* 6. Muscle-Building Fundamentals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Foundation 06
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Muscle-Building Fundamentals
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Hypertrophy requires two synchronized signals: progressive mechanical tension
                delivered through resistance training, and a slight caloric surplus with sufficient
                amino acids for tissue synthesis.
              </p>
              <p>
                Focus on progressive sets within the 6 to 12 repetition range taken close to
                muscular fatigue with strict form, paired with adequate daily protein spread across
                regular meals.
              </p>
            </div>
          </div>

          {/* 7. Common Beginner Mistakes to Avoid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#303238]">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Caution 07
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Common Mistakes to Avoid
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div className="p-4 bg-[#1B1D21] border border-[#303238] rounded text-sm text-[#B9BCC3]">
                <strong className="text-[#F5F5F2] block mb-1">
                  1. Jumping into Extreme Crash Diets
                </strong>
                Severely restricting food intake leads to weakness, dizziness, and rapid rebound
                weight gain once regular eating resumes.
              </div>
              <div className="p-4 bg-[#1B1D21] border border-[#303238] rounded text-sm text-[#B9BCC3]">
                <strong className="text-[#F5F5F2] block mb-1">
                  2. Relying on Unproven Magic Supplements
                </strong>
                Supplements are secondary to real food, consistent sleep, and hard training. Avoid
                unverified powders or dangerous chemical shortcuts.
              </div>
              <div className="p-4 bg-[#1B1D21] border border-[#303238] rounded text-sm text-[#B9BCC3]">
                <strong className="text-[#F5F5F2] block mb-1">
                  3. Overlooking Hydration and Rest
                </strong>
                Pushing through daily workouts while chronically sleep-deprived and dehydrated is a
                direct pathway to injury and illness.
              </div>
            </div>
          </div>

          {/* 8. Realistic Expectations and Consistency */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-[#1B1D21] border border-[#303238] flex items-center justify-center text-[#FF6B24]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24]">
                  Mindset 08
                </span>
              </div>
              <h2 className="font-display font-black text-2xl text-[#F5F5F2] uppercase">
                Realistic Expectations & Consistency
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#B9BCC3] leading-relaxed">
              <p>
                Natural physiological adaptations take months and years to build. Expecting dramatic
                changes in two weeks sets you up for disappointment.
              </p>
              <p>
                Judge your success by the consistency of your habits: Did you complete your workouts
                this week? Did you choose nourishing meals? When your daily process is sound,
                physical improvements follow naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA for Personalized Guidance */}
      <section className="py-16 bg-[#1B1D21] border-b border-[#303238]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F5F2] uppercase tracking-tight">
            Ask About Diet Guidance at Shahzad Fitness Gym
          </h2>
          <p className="text-sm text-[#B9BCC3] max-w-xl mx-auto">
            Want to enquire whether personalized diet or routine advice is currently available for gym
            members? Get in touch directly with our team in Sargodha.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(
                'Hello Shahzad Fitness Gym, I would like to ask whether diet guidance and nutritional consultation are currently available.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B24] hover:bg-[#E55716] rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Diet Guidance on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
