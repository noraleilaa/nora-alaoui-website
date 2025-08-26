"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  }

  return (
    <section id="contact" className="p-2 text-gray-600">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-normal text-gray-800 mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-8"
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center text-gray-700">
                <FiMail className="text-gray-400 mr-3" size={18} />
                <span className="text-sm">noraalaoui433@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiPhone className="text-gray-400 mr-3" size={18} />
                <span className="text-sm">(202) 341-2564</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/noraleilaa"
                target="_blank"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nora-alaoui-b49968135/"
                target="_blank"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400 text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors text-sm"
              >
                Send Message
              </button>
            </form>

            {status && <p className="text-center text-sm mt-4">{status}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}