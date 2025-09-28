import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const openBooking = () => {
    setIsBookingOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    document.body.style.overflow = "auto";
  };

  const openSuccess = () => {
    setIsSuccessOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeBooking();
    openSuccess();
    e.target.reset();
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Megharshitha physiotherapy</h3>
                  <p className="text-gray-400">
                    Dr. S Meghana, Clinical Psychologist
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Compassionate, evidence-based therapy services to help you find
                balance, healing, and inner peace on your wellness journey.
              </p>
              <button
                onClick={openBooking}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Your Healing Journey
              </button>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-purple-400 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-300">789 Tranquil Lane</p>
                    <p className="text-gray-300">Suite 400, Wellness Center</p>
                    <p className="text-gray-300">Los Angeles, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-300">(310) 555-0199</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-300">elena@harmonywellness.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-medium">Monday - Thursday:</span> 8:00 AM -
                  8:00 PM
                </p>
                <p>
                  <span className="font-medium">Friday:</span> 8:00 AM - 6:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 9:00 AM - 3:00 PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </div>
              <div className="mt-6 p-4 bg-red-900/20 rounded-xl border border-red-500/20">
                <h5 className="font-semibold text-red-300 mb-2">Crisis Support</h5>
                <p className="text-red-200 text-sm">National Suicide Prevention: 988</p>
                <p className="text-red-200 text-sm">Crisis Text Line: Text HOME to 741741</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Harmony Wellness Psychology Practice. All rights
              reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold gradient-text">Book Your Session</h3>
                  <p className="text-gray-600 mt-2">Take the first step towards wellness</p>
                </div>
                <button
                  onClick={closeBooking}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields same as previous BookingModal code */}
                {/* First Name, Last Name, Email, Phone, Service, Date, Time, Notes */}
                {/* ...reuse code from previous BookingModal example */}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Appointment Requested!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for taking this important step. Dr. Rodriguez will personally review your request and contact you within 24 hours to confirm your appointment details.
            </p>
            <button
              onClick={closeSuccess}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
