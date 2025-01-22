import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "sonner";

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId, 
        templateId, 
        form.current,
        publicKey 
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="px-8 py-12">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mb-12 text-lg text-gray-600">
          I'd love to hear from you! Whether you have a question or want to
          collaborate on a project, feel free to reach out.
        </p>

        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="rounded-lg border border-gray-300 p-4"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded-lg border border-gray-300 p-4"
                  placeholder="Your Email Address"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 text-sm font-semibold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="rounded-lg border border-gray-300 p-4"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-lg px-6 py-3 font-semibold text-black shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Other Ways to Reach Me
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            You can also reach out via email or check my social profiles:
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            <a
              href="mailto:ananthumohan368@gmail.com"
              className="text-xl text-blue-500 hover:text-blue-700"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/ananthu-mohan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AnanthuSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 hover:text-blue-700"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;