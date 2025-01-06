import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "../components/ui/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmailError("");
    setMessageError("");
    setNameError("");

    if (!name.trim()) {
      setNameError("Name is required.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setMessageError("Please enter a message.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "9b8b8fea-dbff-4de7-9e7c-d5c294f8a624");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        setResult("Form Submitted Successfully");

        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setFile(null);
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        toast.error(data.message || "Failed to send the message.");
        setResult(data.message || "Failed to send the message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-12 mx-auto mb-12 sm:mb-18 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-white -mt-6 font-bold text-[2rem]">Contact-Form</h1>

      <form
        className="mt-10 flex flex-col dark:text-black p-8 rounded-lg border-[0.1px]  bg-[#030712] bg-opacity-20 backdrop-blur-lg shadow-lg"
        onSubmit={onSubmit}
      >
        {/* Name and Phone in one row */}
        <div className="flex space-x-4 mb-4">
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          {nameError && (
            <p className="text-red-500 text-xs mt-2">{nameError}</p>
          )}

          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number (Optional)"
          />
        </div>

        {/* Email and Subject in one row */}
        <div className="flex space-x-4 mb-4">
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-2">{emailError}</p>
          )}

          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
          >
            <option value="">Select Subject</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feedback">Feedback</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>

        {/* Message Textarea */}
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
          name="message"
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {messageError && (
          <p className="text-red-500 text-xs mt-2">{messageError}</p>
        )}

        {/* Submit Button */}
        <SubmitBtn isSubmitting={isSubmitting} />
      </form>

      {/* Result Message */}
      {result && (
        <div
          className={`mt-5 ${
            result.includes("Success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {result}
        </div>
      )}
    </motion.section>
  );
}
