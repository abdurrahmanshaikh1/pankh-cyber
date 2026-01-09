import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const messageValue = watch("message", "");

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24"></div>
      
      <div className="min-h-screen bg-gradient-to-br from-[#0B1220] to-black text-white relative overflow-hidden">
        {/* Decorative background elements matching navbar/footer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 -right-48 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -left-48 w-80 h-80 bg-[#0088CC]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT FORM */}
            <div className="lg:pr-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00E5FF] to-emerald-400 bg-clip-text text-transparent mb-10 lg:mb-16 text-center lg:text-left leading-tight">
                Share Your Enquiry
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00E5FF]/25"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name required" })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-2 0v4a1 1 0 102 0V5z" clipRule="evenodd" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00E5FF]/25"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-2 0v4a1 1 0 102 0V5z" clipRule="evenodd" />
                      </svg>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 transition-all duration-300 shadow-lg hover:shadow-[#00E5FF]/25"
                    placeholder="+91 12345 67890"
                    {...register("phone")}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows="5"
                    maxLength={180}
                    className="w-full px-5 py-4 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 focus:border-[#00E5FF]/50 resize-vertical transition-all duration-300 shadow-lg hover:shadow-[#00E5FF]/25"
                    placeholder="Tell us about your enquiry..."
                    {...register("message", { required: "Message required" })}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    {errors.message && (
                      <span className="text-red-400 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-2 0v4a1 1 0 102 0V5z" clipRule="evenodd" />
                        </svg>
                        {errors.message.message}
                      </span>
                    )}
                    <span>{messageValue.length}/180</span>
                  </div>
                </div>

                {/* Submit Button - Matches navbar CTA style */}
                <button
                  disabled={isSubmitting}
                  className="w-full lg:w-auto lg:ml-auto bg-gradient-to-r from-[#00E5FF] to-[#0088CC] text-[#0F1A2F] font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-[#00E5FF]/50 hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Send Enquiry"}
                </button>
              </form>
            </div>

            {/* RIGHT INFO - Matches footer contact style */}
            <div className="space-y-10 lg:pl-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00E5FF] to-emerald-400 bg-clip-text text-transparent">
                Do Connect With Us At
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="group">
                  <p className="text-gray-300 mb-2">Customer Care Email</p>
                  <a 
                    href="mailto:support@pankhs.com"
                    className="text-[#00E5FF] font-semibold text-lg hover:text-[#00E5FF]/80 transition-colors group-hover:translate-x-2"
                  >
                    support@pankhs.com
                  </a>
                </div>

                {/* Phone */}
                <div className="group">
                  <p className="text-gray-300 mb-2">Contact Number</p>
                  <a 
                    href="tel:+918839739085"
                    className="text-[#00E5FF] font-semibold text-lg hover:text-[#00E5FF]/80 transition-colors group-hover:translate-x-2"
                  >
                    +91 88397 39085
                  </a>
                </div>

                {/* Social Media - Matches footer */}
                <div>
                  <p className="text-gray-300 mb-6">Connect Through Social Media</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/pankh.digitalguard/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 hover:border-[#00E5FF]/60 rounded-2xl flex items-center justify-center text-[#00E5FF] hover:scale-110 hover:shadow-[#00E5FF]/30 transition-all duration-300 shadow-lg" aria-label="Instagram">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.784 1.048 4.92 4.92 0 011.048 1.784c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.922 4.922 0 01-1.048 1.784 4.922 4.922 0 01-1.784 1.048c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.922 4.922 0 01-1.784-1.048 4.922 4.922 0 01-1.048-1.784c-.163-.457-.347-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 011.048-1.784 4.92 4.92 0 011.784-1.048c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zM12 3.838a8.162 8.162 0 100 16.324 8.162 8.162 0 000-16.324zM12 15a3 3 0 110-6 3 3 0 010 6zm5.406-7.99a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@pankhcybersolution" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 hover:border-[#00E5FF]/60 rounded-2xl flex items-center justify-center text-[#00E5FF] hover:scale-110 hover:shadow-[#00E5FF]/30 transition-all duration-300 shadow-lg" aria-label="YouTube">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.998 2.998 0 00-2.116-2.117C19.417 3.5 12 3.5 12 3.5s-7.417 0-9.382.569a2.998 2.998 0 00-2.116 2.117A31.013 31.013 0 000 12a31.013 31.013 0 00.502 5.814 2.998 2.998 0 002.116 2.117c1.965.569 9.382.569 9.382.569s7.417 0 9.382-.569a2.998 2.998 0 002.116-2.117A31.013 31.013 0 0024 12a31.013 31.013 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/pankh-cyber-solution/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#0A1421]/80 backdrop-blur-sm border border-[#00E5FF]/30 hover:border-[#00E5FF]/60 rounded-2xl flex items-center justify-center text-[#00E5FF] hover:scale-110 hover:shadow-[#00E5FF]/30 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
