
import { Card, CardContent } from "@/components/ui/card";

export const MedicalData = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#7c4664' }}>
            The Research Speaks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scientific evidence shows the profound impact of hormone health on overall well-being
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8" style={{ color: '#7c4664' }}>
              Key Statistics
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: '#7c4664' }}>75%</div>
                <p className="text-gray-700">
                  of women experience PMS symptoms, often due to hormone fluctuations
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Source: American College of Obstetricians and Gynecologists
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: '#7c4664' }}>30%</div>
                <p className="text-gray-700">
                  of women have thyroid disorders, affecting metabolism and energy
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Source: American Thyroid Association
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold mb-2" style={{ color: '#7c4664' }}>85%</div>
                <p className="text-gray-700">
                  improvement in quality of life when hormones are properly balanced
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Source: Journal of Women's Health
                </p>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical research and health data"
              className="rounded-2xl shadow-2xl w-full h-full object-cover min-h-96"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#7c4664' }}>
            Expert Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="border-l-4 pl-6 italic text-gray-700" style={{ borderColor: '#7c4664' }}>
              "Hormone balance is not just about reproductive health—it's about optimizing every system in your body for peak performance and well-being."
              <footer className="mt-2 text-sm font-semibold" style={{ color: '#7c4664' }}>
                Dr. Sara Gottfried, Harvard-trained physician
              </footer>
            </blockquote>
            
            <blockquote className="border-l-4 pl-6 italic text-gray-700" style={{ borderColor: '#7c4664' }}>
              "The key to hormone health lies in understanding that small, consistent changes in lifestyle can create profound improvements in how you feel every day."
              <footer className="mt-2 text-sm font-semibold" style={{ color: '#7c4664' }}>
                Dr. Jolene Brighten, Naturopathic Doctor
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
