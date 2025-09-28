import React from 'react'

const About = ({ openBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#FFF5E1] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 text-orange-400">
            Meet Dr. S Meghana
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to helping you achieve emotional wellness and personal
            growth through personalized therapeutic approaches
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                A Holistic Approach to Mental Health
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Dr. S Meghana brings over 18 years of experience in clinical
                psychology, specializing in anxiety disorders, depression,
                trauma recovery, and relationship counseling. Her integrative
                approach combines traditional therapeutic methods with
                mindfulness practices and somatic techniques.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                She believes that healing happens when we address the whole
                person - mind, body, and spirit. Her warm, non-judgmental
                approach creates a safe space where clients can explore their
                challenges and discover their innate capacity for growth and
                resilience.
              </p>

              {/* Achievements List */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Licensed Clinical Psychologist",
                    subtitle: "California State License #PSY12345",
                  },
                  {
                    title: "PhD in Clinical Psychology",
                    subtitle: "University of California, Berkeley",
                  },
                  {
                    title: "Trauma-Informed Specialist",
                    subtitle: "EMDR & Somatic Experiencing",
                  },
                  {
                    title: "18+ Years Experience",
                    subtitle: "Helping individuals & couples heal",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center card-3d">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">SM</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Dr S Meghana</h4>
              <p className="text-purple-100 mb-6">
                Clinical Psychologist & Wellness Advocate
              </p>
              <blockquote className="italic text-lg mb-6">
                "Every person has an innate capacity for healing and growth. My
                role is to create a safe space where that natural process can
                unfold."
              </blockquote>
              <button
                onClick={openBooking}
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule with Dr. Meghana
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About