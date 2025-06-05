
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const ImprovementSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Prioritize Quality Sleep",
      description: "Aim for 7-9 hours nightly. Create a consistent bedtime routine and limit screen time before bed.",
      tips: ["Keep bedroom cool (65-68°F)", "Use blackout curtains", "Avoid caffeine after 2 PM"]
    },
    {
      number: "02", 
      title: "Nourish with Whole Foods",
      description: "Focus on nutrient-dense foods that support hormone production and balance.",
      tips: ["Include healthy fats (avocado, nuts, olive oil)", "Eat protein with every meal", "Limit processed sugars"]
    },
    {
      number: "03",
      title: "Manage Stress Effectively", 
      description: "Chronic stress disrupts cortisol and other hormones. Find healthy coping strategies.",
      tips: ["Practice daily meditation", "Try yoga or gentle movement", "Connect with loved ones regularly"]
    },
    {
      number: "04",
      title: "Move Your Body Daily",
      description: "Regular exercise helps regulate insulin, cortisol, and mood-boosting hormones.",
      tips: ["Mix cardio with strength training", "Include yoga or stretching", "Find activities you enjoy"]
    },
    {
      number: "05",
      title: "Support with Smart Nutrition",
      description: "Consider targeted supplements and microgreens to fill nutritional gaps.",
      tips: ["Include hormone-supporting nutrients", "Focus on bioavailable forms", "Consult healthcare providers"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#7c4664' }}>
            5 Simple Steps to Better Hormone Health
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your well-being with these science-backed strategies that you can start implementing today
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 p-8 flex items-center justify-center" style={{ backgroundColor: '#7c4664' }}>
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">{step.number}</div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center">
                          <Check className="h-5 w-5 mr-3 text-green-500" />
                          <span className="text-gray-600">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#7c4664' }}>
              Ready to Take Action?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Small, consistent changes lead to big results. Start with one step and build from there.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>✨ Week 1-2: Focus on sleep</div>
              <div>✨ Week 3-4: Add nutrition changes</div>
              <div>✨ Week 5+: Incorporate all steps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
