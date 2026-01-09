import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // TODO: send to API endpoint
    reset();
  };

  return (
    <section className="bg-gradient-to-br from-[#0F1A2F] to-[#0A1120] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          GET IN <span className="text-cyan-400">TOUCH</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Share your cyber crime concern and the team will get back within 24
          hours.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 shadow-lg"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name *"
              className="w-full p-4 bg-black/60 text-white border border-cyan-400/30 rounded-xl
                         focus:ring-2 focus:ring-cyan-500 focus:outline-none text-lg placeholder-gray-400"
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "At least 2 characters" },
              })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-4 bg-black/60 text-white border border-cyan-400/30 rounded-xl
                         focus:ring-2 focus:ring-cyan-500 focus:outline-none text-lg placeholder-gray-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 bg-black/60 text-white border border-cyan-400/30 rounded-xl
                         focus:ring-2 focus:ring-cyan-500 focus:outline-none text-lg placeholder-gray-400"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+\-\s()]{6,18}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="5"
              placeholder="Message *"
              className="w-full p-4 bg-black/60 text-white border border-cyan-400/30 rounded-xl
                         focus:ring-2 focus:ring-cyan-500 focus:outline-none text-lg placeholder-gray-400 resize-vertical"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black
                       py-4 px-8 rounded-xl font-semibold text-lg hover:scale-105
                       transition-transform duration-300 shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
