import React from 'react'

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized one-on-one sessions focusing on your specific needs, whether dealing with anxiety, depression, trauma, or life transitions.",
    features: [
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Interventions",
      "EMDR for Trauma Processing",
    ],
    price: "$150",
    color: "from-blue-400 to-blue-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    title: "Couples Therapy",
    description:
      "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional intimacy.",
    features: [
      "Gottman Method Couples Therapy",
      "Emotionally Focused Therapy (EFT)",
      "Communication Skills Training",
    ],
    price: "$200",
    color: "from-pink-400 to-rose-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: "Group Therapy",
    description:
      "Connect with others on similar journeys in supportive group settings that foster healing and growth.",
    features: [
      "Anxiety & Depression Support",
      "Trauma Recovery Groups",
      "Mindfulness & Wellness Circles",
    ],
    price: "$75",
    color: "from-green-400 to-emerald-600",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  // 👉 Add the rest of the services in same format
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4 text-orange-600">
            Therapeutic Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services designed to support your unique
            healing journey
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="text-2xl font-bold text-purple-600">
                  {service.price}
                </span>
                <span className="text-gray-500">/session</span>
              </div>
            </div>
          ))}

          {/* Special Card */}
          {/* <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white card-3d">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Not sure where to start? Book a complimentary 15-minute
              consultation to discuss your needs and find the right fit.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-purple-100">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                15-minute phone or video call
              </li>
              <li className="flex items-center text-sm text-purple-100">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Discuss your goals & concerns
              </li>
              <li className="flex items-center text-sm text-purple-100">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Learn about treatment options
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full">
                Book Free Consultation
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection