import React from 'react';
import { Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to share your AI tool with the world?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our growing community of creators and innovators. Submit your AI app today and reach thousands of potential users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 text-base font-medium">
              Submit Your App
            </button>
            <button className="btn bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 text-base font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;