"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaGithub } from "react-icons/fa";

import Nav from "@/components/Nav";
import BackHome from "@/components/BackHome";
import BackToTop from "@/components/BackToTop";
import { contact } from "@/data/contact";

const WEB3FORMS_ACCESS_KEY = "0821ae5f-ebfd-4aef-b20b-c985da5a26f7";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${form.name} via portfolio site`,
          ...form,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <Nav />

      <div className="mx-auto max-w-3xl px-6 pb-32 pt-40 sm:px-10 sm:pt-48">
        <BackHome />

        <p className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-caption">
          Contact
        </p>

        <h1 className="mb-16 font-display text-3xl font-light italic text-ink sm:text-4xl">
          Let&apos;s work together.
        </h1>

        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-brass"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            {contact.email}
          </a>

          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-brass"
          >
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            {contact.phone}
          </a>

          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-brass"
          >
            <FaInstagram className="h-4 w-4" />
            Instagram
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-sans text-sm text-ink transition-colors hover:text-brass"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-caption">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-b border-ink/20 bg-transparent pb-2 font-sans text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <div>
            <label className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-caption">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-ink/20 bg-transparent pb-2 font-sans text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <div>
            <label className="mb-2 block font-sans text-xs uppercase tracking-[0.15em] text-caption">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none border-b border-ink/20 bg-transparent pb-2 font-sans text-sm text-ink outline-none focus:border-brass"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 w-fit border border-ink/20 px-6 py-3 font-sans text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-brass hover:text-brass disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="font-sans text-sm text-green-600">
              Message sent — thank you! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="font-sans text-sm text-red-600">
              Something went wrong. Please try emailing me directly.
            </p>
          )}
        </form>
      </div>

      <BackToTop />
    </main>
  );
}