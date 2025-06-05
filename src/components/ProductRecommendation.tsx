
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Heart, User } from "lucide-react";

export const ProductRecommendation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#7c4664' }}>
            Supercharge Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your hormone health naturally with nutrient-dense microgreens designed specifically for women's wellness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556909114-4e57a14de29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fresh microgreens and healthy nutrition"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#7c4664' }}>
                  Micro Hormone Blend
                </h3>
                <p className="text-gray-700 mb-6">
                  A carefully curated blend of nutrient-dense microgreens specifically formulated to support women's hormone health. 
                  Each tray provides concentrated vitamins, minerals, and phytonutrients your body needs.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Plus className="h-5 w-5 mr-3" style={{ color: '#7c4664' }} />
                    <span className="text-gray-600">9 tray variety pack for comprehensive nutrition</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-3" style={{ color: '#7c4664' }} />
                    <span className="text-gray-600">Supports natural hormone balance</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-3" style={{ color: '#7c4664' }} />
                    <span className="text-gray-600">Designed specifically for women's health</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-white text-lg py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#7c4664' }}
                  onClick={() => window.open('https://instafarm.store/collections/trays/products/micro-hormone-blend-9-tray-pack', '_blank')}
                >
                  Shop Micro Hormone Blend
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#7c4664' }}>
                Why Microgreens for Hormone Health?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Microgreens contain up to 40x more nutrients than their mature counterparts, providing 
                concentrated doses of the vitamins and minerals essential for hormone production and regulation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#7c4664' }}>
                    Vitamin E & Selenium
                  </h4>
                  <p className="text-sm text-gray-600">
                    Support thyroid function and protect against oxidative stress
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#7c4664' }}>
                    B-Complex Vitamins
                  </h4>
                  <p className="text-sm text-gray-600">
                    Essential for energy metabolism and neurotransmitter production
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#7c4664' }}>
                    Magnesium & Zinc
                  </h4>
                  <p className="text-sm text-gray-600">
                    Critical cofactors for hormone synthesis and regulation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2" style={{ color: '#7c4664' }}>
                    Antioxidants
                  </h4>
                  <p className="text-sm text-gray-600">
                    Reduce inflammation and support overall cellular health
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <blockquote className="italic text-gray-700 text-center">
                "Adding nutrient-dense foods like microgreens to your diet is one of the simplest ways to support your body's natural hormone production."
                <footer className="mt-2 text-sm font-semibold" style={{ color: '#7c4664' }}>
                  Functional Nutrition Expert
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
