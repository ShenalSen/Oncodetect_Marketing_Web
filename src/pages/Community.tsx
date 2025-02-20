import React from 'react';
import { Book, Share2, Award, Users } from 'lucide-react';

const Community = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our growing community of healthcare professionals and researchers
              dedicated to advancing breast cancer detection.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access valuable resources and connect with fellow professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Book className="h-8 w-8" />,
                title: 'Documentation',
                description: 'Comprehensive guides and API documentation'
              },
              {
                icon: <Share2 className="h-8 w-8" />,
                title: 'Share Hub',
                description: 'Templates and workflow configurations'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Success Stories',
                description: 'Real implementation case studies'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Expert Network',
                description: 'Connect with certified professionals'
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="inline-block p-3 bg-[#7032eb] bg-opacity-10 rounded-full text-[#7032eb] mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;