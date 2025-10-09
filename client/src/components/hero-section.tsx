import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play, GraduationCap, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="pt-16 pb-20 overflow-hidden">
      <div className="hero-gradient min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t.home.hero.title} 
                <span className="block typing-animation">{t.home.hero.titleAnimated}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-100 max-w-2xl">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl" data-testid="button-hero-courses">
                    <Play className="w-5 h-5 mr-2" />
                    {t.home.hero.ctaCourses}
                  </Button>
                </Link>
                <Link href="/scholarships">
                  <Button className="glass-morphism text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300" data-testid="button-hero-scholarships">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {t.home.hero.ctaScholarships}
                  </Button>
                </Link>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center animate-slide-up" style={{animationDelay: '0.5s'}}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">{t.home.hero.feature1Title}</div>
                  <div className="text-gray-200 text-sm">{t.home.hero.feature1Desc}</div>
                </div>
                <div className="text-center animate-slide-up" style={{animationDelay: '0.7s'}}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">{t.home.hero.feature2Title}</div>
                  <div className="text-gray-200 text-sm">{t.home.hero.feature2Desc}</div>
                </div>
                <div className="text-center animate-slide-up" style={{animationDelay: '0.9s'}}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold">{t.home.hero.feature3Title}</div>
                  <div className="text-gray-200 text-sm">{t.home.hero.feature3Desc}</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              {/* Code Editor Mockup */}
              <div className="code-block relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-3 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="pt-8 font-mono text-sm text-gray-300">
                  <div><span className="text-purple-400">&lt;div</span> <span className="text-blue-400">class=</span><span className="text-green-400">"hero"</span><span className="text-purple-400">&gt;</span></div>
                  <div className="ml-4"><span className="text-purple-400">&lt;h1</span><span className="text-purple-400">&gt;</span><span className="text-white">Hello, World!</span><span className="text-purple-400">&lt;/h1&gt;</span></div>
                  <div className="ml-4"><span className="text-purple-400">&lt;p</span><span className="text-purple-400">&gt;</span><span className="text-white">I'm learning to code!</span><span className="text-purple-400">&lt;/p&gt;</span></div>
                  <div><span className="text-purple-400">&lt;/div&gt;</span></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-80 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
