import {
  Brain,
  Shield,
  Clock,
  Users,
  Activity,
  BarChart3,
  CloudCog,
  Award,
} from 'lucide-react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

const newLocal = <video
  src="Oncodetect.mp4"
  autoPlay
  muted
  loop
  className="rounded-lg shadow-xl w-full h-auto opacity-70"
>
  Your browser does not support the video tag.
</video>;
const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Advanced Breast Cancer Detection Through AI
              </h1>
              <p className="text-xl">
                Empowering healthcare professionals with cutting-edge AI technology
                for accurate and early breast cancer detection.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-[#7032eb] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#7032eb] transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
                {newLocal}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oncodetect combines advanced AI algorithms with medical expertise to
              provide accurate breast cancer detection.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-[#7032eb] mb-4" />,
                title: "AI-Powered Analysis",
                description:
                  "State-of-the-art deep learning algorithms for accurate mammogram analysis.",
              },
              {
                icon: <Shield className="h-12 w-12 text-[#7032eb] mb-4" />,
                title: "Enhanced Security",
                description:
                  "HIPAA-compliant platform ensuring patient data protection.",
              },
              {
                icon: <Clock className="h-12 w-12 text-[#7032eb] mb-4" />,
                title: "Real-time Results",
                description:
                  "Quick and accurate analysis results for immediate decision-making.",
              },
            ].map((solution, index) => (
              <ScrollAnimation key={index}>
                <div className="p-6 bg-gray-50 rounded-xl">
                  {solution.icon}
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful features that make Oncodetect the leading
              choice in breast cancer detection.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="h-8 w-8" />,
                title: "High Accuracy",
                description:
                  "89.9% accuracy in detecting abnormalities in mammogram scans",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Detailed Analytics",
                description:
                  "Comprehensive analysis reports with visual representations",
              },
              {
                icon: <CloudCog className="h-8 w-8" />,
                title: "Cloud Integration",
                description:
                  "Seamless integration with existing healthcare systems",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaborative Platform",
                description:
                  "Enable team collaboration and expert consultations",
              },
            ].map((feature, index) => (
              <ScrollAnimation key={index}>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-block p-3 bg-[#7032eb] bg-opacity-10 rounded-full text-[#7032eb] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Updates & Versions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest improvements and version releases.
            </p>
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              {
                version: "v2.1.0",
                date: "March 2024",
                title: "Enhanced Detection Algorithm",
                description:
                  "Improved accuracy in early-stage detection with new AI models",
                badge: "Latest",
              },
              {
                version: "v2.0.0",
                date: "January 2024",
                title: "Major Platform Update",
                description:
                  "Complete redesign of the user interface and workflow improvements",
              },
              {
                version: "v1.5.0",
                date: "December 2023",
                title: "Cloud Integration",
                description: "Added support for major cloud healthcare platforms",
              },
            ].map((update, index) => (
              <ScrollAnimation key={index}>
                <div className="border border-gray-200 rounded-lg p-6 hover:border-[#7032eb] transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Award className="h-6 w-6 text-[#7032eb]" />
                      <h3 className="text-xl font-semibold">{update.version}</h3>
                      {update.badge && (
                        <span className="px-3 py-1 bg-[#7032eb] text-white text-sm rounded-full">
                          {update.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500">{update.date}</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">{update.title}</h4>
                  <p className="text-gray-600">{update.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;