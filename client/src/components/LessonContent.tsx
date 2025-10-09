import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Info, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { t } from "@/data/translations";

export interface LessonData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  howItWorks: string;
  pinLayout?: { pin: string; function: string }[];
  codeExample: {
    title: string;
    code: string;
    explanation: string;
  };
  advancedUsage?: string;
  troubleshooting?: { issue: string; solution: string }[];
}

interface LessonContentProps {
  lesson: LessonData;
}

export function LessonContent({ lesson }: LessonContentProps) {
  const { language } = useLanguage();
  return (
    <motion.div
      key={lesson.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-8 py-12"
    >
      <div className="mb-8">
        <Badge className="mb-4" data-testid={`badge-category-${lesson.id}`}>
          {lesson.category}
        </Badge>
        <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid={`text-lesson-title-${lesson.id}`}>
          {lesson.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {lesson.description}
        </p>
      </div>

      <motion.div 
        className="mb-12 rounded-xl overflow-hidden bg-card"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src={lesson.image} 
          alt={lesson.title}
          className="w-full h-auto object-cover"
          data-testid={`img-component-${lesson.id}`}
        />
      </motion.div>

      <Card className="p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-semibold">{t('technicalSpecs', language)}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.specs.map((spec, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
              <span className="text-muted-foreground">{spec.label}</span>
              <span className="font-medium text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary" />
          {t('howItWorks', language)}
        </h2>
        <p className="text-foreground leading-relaxed text-base">
          {lesson.howItWorks}
        </p>
      </div>

      {lesson.pinLayout && lesson.pinLayout.length > 0 && (
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('pinLayout', language)}</h2>
          <div className="space-y-3">
            {lesson.pinLayout.map((pin, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Badge variant="outline" className="flex-shrink-0 font-mono">
                  {pin.pin}
                </Badge>
                <p className="text-foreground">{pin.function}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card className="p-6 mb-8 bg-muted">
        <h2 className="text-2xl font-semibold mb-4">{lesson.codeExample.title}</h2>
        <div className="bg-background rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="font-mono text-sm text-foreground">
            <code>{lesson.codeExample.code}</code>
          </pre>
        </div>
        <p className="text-foreground leading-relaxed">
          {lesson.codeExample.explanation}
        </p>
      </Card>

      {lesson.advancedUsage && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t('advancedUsage', language)}</h2>
          <p className="text-foreground leading-relaxed">
            {lesson.advancedUsage}
          </p>
        </div>
      )}

      {lesson.troubleshooting && lesson.troubleshooting.length > 0 && (
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('troubleshooting', language)}</h2>
          <div className="space-y-4">
            {lesson.troubleshooting.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-medium text-destructive">{t('issue', language)}</span>
                  <span className="text-foreground">{item.issue}</span>
                </div>
                <div className="flex items-start gap-2 ml-6">
                  <CheckCircle2 className="w-5 h-5 text-chart-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </motion.div>
  );
}
