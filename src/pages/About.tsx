import { Target, Users, Heart, Trophy } from 'lucide-react';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#7032eb] to-[#00acea] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to revolutionize breast cancer detection through
              innovative AI technology and make early detection accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  To empower healthcare professionals with cutting-edge AI technology
                  for accurate and early breast cancer detection, ultimately saving
                  lives through innovation and accessibility.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Target className="h-8 w-8 text-[#7032eb] mb-2" />
                    <h3 className="font-semibold mb-1">Precision</h3>
                    <p className="text-gray-600">99.9% accuracy in detection</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <Heart className="h-8 w-8 text-[#7032eb] mb-2" />
                    <h3 className="font-semibold mb-1">Care</h3>
                    <p className="text-gray-600">Patient-centric approach</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <img
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80"
                alt="Medical Research"
                className="rounded-lg shadow-xl"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind Oncodetect's revolutionary technology.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Nethmi Wickramsinghe',
                role: 'Frontend Developer | UI/UX Designer | TL ',
                image:
                  '/Nethmi.jpg',
              },
              {
                name: 'Manumi Saputantri',
                role: 'Frontend Developer | UI/UX Designer',
                image:
                  '/Manumi.jpg',
              },
              {
                name: 'Tavishi Balachandra',
                role: 'Head of Research | Frontend Developer | Devops',
                image:
                  '/Tavishi.jpg',
              },
            ].map((member, index) => (
              <ScrollAnimation key={index}>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          
          </div>

            <div className="py-8">
            
            </div>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sanjula Nimesh',
                role: 'Backend Developer',
                image:
                  'Sanjula.jpg',
              },
              {
                name: 'Shenal Senarathna',
                role: 'Data Scientist | UI/UX Designer | Devops',
                image:
                  'Shenal.jpg',
              },
              {
                name: 'Chamal Ruwanchandra',
                role: 'Backend Developer',
                image:
                  'Chamal.jpg',
              },
            ].map((member, index) => (
              <ScrollAnimation key={index}>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our journey in revolutionizing healthcare.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-8 w-8" />,
                number: '50+',
                label: 'Medical Institutions',
              },
              {
                icon: <Users className="h-8 w-8" />,
                number: '100,000+',
                label: 'Patients Helped',
              },
              {
                icon: <Target className="h-8 w-8" />,
                number: '99.9%',
                label: 'Detection Accuracy',
              },
              {
                icon: <Heart className="h-8 w-8" />,
                number: '15+',
                label: 'Research Papers',
              },
            ].map((achievement, index) => (
              <ScrollAnimation key={index}>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="inline-block p-3 bg-[#7032eb] bg-opacity-10 rounded-full text-[#7032eb] mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;