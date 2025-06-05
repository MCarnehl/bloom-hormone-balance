
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, User } from "lucide-react";

export const HormoneBasics = () => {
  return (
    <section id="hormone-basics" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#7c4664' }}>
            Understanding Your Hormones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hormones are chemical messengers that control virtually every function in your body. 
            When they're balanced, you feel energized, focused, and vibrant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Woman practicing yoga in nature"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#7c4664' }}>
              The Science Behind Balance
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Your endocrine system produces over 50 different hormones that regulate everything from 
              your sleep cycles to your metabolism. When these hormones are in harmony, you experience:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7c4664' }}></div>
                Stable energy throughout the day
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7c4664' }}></div>
                Better mood regulation and emotional balance
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7c4664' }}></div>
                Improved sleep quality and recovery
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7c4664' }}></div>
                Healthy weight management
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7c4664' }}></div>
                Enhanced cognitive function and clarity
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7c4664' }}>
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#7c4664' }}>
                Reproductive Health
              </h4>
              <p className="text-gray-600">
                Estrogen and progesterone work together to regulate your menstrual cycle, 
                fertility, and overall reproductive wellness.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7c4664' }}>
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#7c4664' }}>
                Daily Rhythms
              </h4>
              <p className="text-gray-600">
                Cortisol and melatonin control your circadian rhythms, affecting when you feel 
                alert during the day and sleepy at night.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7c4664' }}>
                <User className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: '#7c4664' }}>
                Metabolic Function
              </h4>
              <p className="text-gray-600">
                Thyroid hormones and insulin regulate your metabolism, energy production, 
                and how your body processes nutrients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
