"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* 🌌 Space Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        
        {/* Stars */}
        <div className="absolute w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        {/* Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* 💎 Glass Card */}
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
          Let’s <span className="text-purple">Connect</span>
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-10">
          Have a project in mind or just want to say hi? 🚀
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            className="p-4 rounded-lg bg-black/50 border border-white/10 focus:border-purple focus:outline-none text-white transition"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            className="p-4 rounded-lg bg-black/50 border border-white/10 focus:border-purple focus:outline-none text-white transition"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            required
            value={form.message}
            className="p-4 rounded-lg bg-black/50 border border-white/10 focus:border-purple focus:outline-none text-white transition"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* 🔥 Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-purple text-white py-4 rounded-lg hover:opacity-60 transition disabled:opacity-700"
          >
            {loading ? "Sending..." : "Send Message"}
            <FaLocationArrow />
          </button>

        </form>
      </div>
    </div>
  );
}