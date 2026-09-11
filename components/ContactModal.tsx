"use client";

import { FormEvent, useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          w-full
          max-w-lg
          rounded-3xl
          border
          border-white/10
          bg-[#0b0d0c]
          p-6
          text-white
          shadow-2xl
          sm:p-8
        "
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white/60
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          ×
        </button>

        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="mb-5 text-4xl">
              ✓
            </div>

            <h2 className="text-2xl font-semibold">
              Message sent
            </h2>

            <p className="mt-2 text-sm text-white/50">
              Thanks for reaching out. Ill get back to you soon.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-7
                rounded-full
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-black
              "
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-7">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-emerald-400">
                Get in touch
              </p>

              <h2 className="text-3xl font-semibold">
                Lets talk.
              </h2>

              <p className="mt-2 text-sm text-white/50">
                Have a project or opportunity? Send me a message.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-white/60"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-emerald-400/50
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-white/60"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-emerald-400/50
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm text-white/60"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Tell me about your project..."
                  required
                  minLength={10}
                  rows={5}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/25
                    focus:border-emerald-400/50
                  "
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <div className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-white/90
                  disabled:opacity-50
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send message →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}