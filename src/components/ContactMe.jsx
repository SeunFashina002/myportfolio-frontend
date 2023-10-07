import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import successAlert from "./SuccessModal";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const links = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={30} />
        Linkedin
      </>
    ),
    href: "https://www.linkedin.com/in/seun-fashina-7b6b01232/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={30} />
        Github
      </>
    ),
    href: "https://github.com/seunfashina002/",
  },
  {
    id: 3,
    child: (
      <>
        <FaTwitter size={30} />
        Twitter
      </>
    ),
    href: "https://twitter.com/heisblaq_",
  },
  {
    id: 4,
    child: (
      <>
        <BsWhatsapp size={30} />
        Whatsapp
      </>
    ),
    href: "https://wa.me/08075422354",
    style: "rounded-br-md",
  },
];

export default function Contact({ mode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ngy3o4",
        "template_0o43zgt",
        form.current,
        "ov57oO-n77qjBG9fq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.message);
        }
      );

    afterSend();
  };

  const afterSend = () => {
    setName("");
    setEmail("");
    setMessage("");
    successAlert();
  };

  return (
    <div className={`${mode ? "" : "dark"} md:px-12`} id="contact">
      <div className="p-4">
        <h1 className="contact-me md:text-5xl text-4xl font-bold mt-12 dark:text-slate-300 bg-clip-text">
          Contact Me
        </h1>

        <div className="flex flex-col lg:flex-row my-6">
          <div className="w-full lg:w-1/3 lg:mr-12 ">
            <form
              ref={form}
              className="contact-form rounded-md dark:bg-[#1e293b] p-4 dark:shadow-none shadow-lg"
              onSubmit={sendEmail}
            >
              <p className="md:text-lg text-md font-bold py-2 dark:text-slate-300 bg-clip-text">
                Name
              </p>
              <input
                type="text"
                name="user_name"
                className="name-input dark:bg-[#334155] dark:shadow-none shadow-lg dark:text-white "
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
              />
              <p className="md:text-lg text-md font-bold py-2 dark:text-slate-300 bg-clip-text">
                Email
              </p>
              <input
                type="email"
                name="user_email"
                className="email-input dark:bg-[#334155] dark:text-white dark:shadow-none shadow-lg"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              <p className="md:text-lg text-md font-bold py-2 dark:text-slate-300 bg-clip-text">
                Message
              </p>
              <textarea
                name="message"
                required
                id=""
                cols="30"
                rows="5"
                value={message}
                className="msg-input dark:bg-[#334155] dark:text-white dark:shadow-none shadow-lg"
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
              <button
                className="bg-blue-600 dark:bg-blue-500 text-white text-lg p-2 rounded-lg my-1 font-semibold"
                type="submit"
              >
                send
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <div className="social-grid  grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {links.map(({ id, child, href, style }) => (
                <div
                  key={id}
                  className={`${style} rounded-md shadow-lg dark:border dark:shadow-none`}
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-black dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {child}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
