import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background mt-12">
      <Header />
      <div className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 font-bold">Email : contact@nutterlygood.com<br />Phone : +91 99999 99999</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
        </form>
        {submitted && <p className="mt-4 text-green-600">Thank you for contacting us!</p>}
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
