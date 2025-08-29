import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.question.trim()) newErrors.question = "Question is required";
    return newErrors;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
    }
    
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />
     {/* Contact Us Section Title */}
<div className="w-full mb-8">
  <h1 className="text-4xl font-bold text-left ml-20">
    Contact Us
  </h1>
</div>

      <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Form Section */}
        <div className="order-1">
          {/* <h1 className="text-3xl font-bold mb-2">Contact Us</h1> */}
          <p className="mb-6">
            Contact us about anything related to our company or services.
            <br />
            We'll do our best to get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Company *</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.company && (
                  <p className="text-red-600 text-sm">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 font-medium">Subject *</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.subject && (
                <p className="text-red-600 text-sm">{errors.subject}</p>
              )}
            </div>

            {/* Question */}
            <div>
              <label className="block mb-1 font-medium">Question *</label>
              <textarea
                name="question"
                placeholder="Enter your question"
                value={form.question}
                onChange={handleChange}
                className="w-full p-2 border rounded h-32"
              />
              {errors.question && (
                <p className="text-red-600 text-sm">{errors.question}</p>
              )}
            </div>

            {/* Submit Button (mobile: before contact info, desktop: centered below both) */}
            {/* Submit Button */}
            <div className="flex justify-end md:justify-center order-2 md:order-3 mt-6 w-full md:col-span-2">
              <button
                type="submit"
                className="bg-green-900 text-white px-6 py-2 rounded-full "
              >
                Submit
              </button>
            </div>



          </form>
        </div>

        {/* Right Contact Info Section */}
        <div className="order-3 md:order-2 p-1 md:pl-12">
          <h2 className="text-xl font-bold mb-4">Nutterly Good</h2>
          <p className="mb-2 flex items-start gap-2">
            <MapPin className="w-5 h-5 text-black-900 mt-1" />
            CS-09, Etna Block, Rajapushpa Atria<br/>
            Golden Mile Road, Kokapet,<br/>
            Hyderabad, Telangana 500075
          </p>
          <p className="mb-2 flex items-center gap-2">
            <Phone className="w-5 h-5 text-black-900" />+91 74162 85566
          </p>
          <p className="mb-2 flex items-center gap-2">
            <Mail className="w-5 h-5 text-black-900" />contact@nutterlygood.com
          </p>
        </div>
      </div>

      {submitted && (
        <p className="mt-4 text-green-600 text-center">
          Thank you for contacting us!
        </p>
      )}

      <Footer />
    </main>
  );
};

export default Contact;
