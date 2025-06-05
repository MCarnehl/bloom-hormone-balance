
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#7c4664' }}>
            Your Hormone Health Journey Starts Today
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Remember, hormone health is a journey, not a destination. Be patient with yourself as you implement these changes, 
            and celebrate every small step forward.
          </p>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              This information is for educational purposes only and is not intended to replace professional medical advice. 
              Always consult with your healthcare provider before making significant changes to your health routine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
