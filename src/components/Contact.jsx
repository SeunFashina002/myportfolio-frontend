import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Please fill in all the required fields.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        showConfirmButton: false,
        timer: 1500,
      });

      emailjs
        .sendForm(
          "service_em9tzbl",
          "template_s2hgq3n",
          form.current,
          "JYh1xJia93nPcy7Tf"
        )
        .then(
          (result) => {
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const links = [
    {
      id: 1,
      child: <FaLinkedin size={40} />,
      href: "https://www.linkedin.com/in/bahkho/",
      text: "Linkedin",
    },
    {
      id: 2,
      child: <FaGithub size={40} />,
      href: "https://www.github.com/bahkho/",
      text: "Github",
    },
    {
      id: 3,
      child: <FaTwitter size={40} />,
      href: "https://twitter.com/Bahkho______",
      text: "Twitter",
    },
    {
      id: 4,
      child: <BsWhatsapp size={40} />,
      href: "https://wa.me/+19023995639",
      text: "Whatsapp",
    },
  ];

  return (
    <div name="contact" className={props.mode ? "" : "dark"}>
      <div className="w-full text-black dark:text-white h-screen">
        <div className="flex flex-col p-4 justify-center max-w-[1240px] mx-auto">
          <div className="pb-8">
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 bg-gradient-to-tr from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Contact
            </p>
            <p>Submit the form below to get in touch with me</p>
          </div>

          <div className="flex justify-center items-center">
            <form
              className=" flex flex-col w-full md:w-1/2"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className=" my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>
              <button className="px-6 py-3 my-8 flex items-center hover:scale-100 duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-md">
                <div className="mx-auto">Let's Talk</div>
              </button>
            </form>
          </div>

          <div className=" lg:hidden flex justify-center">
            <ul className="flex flex-row flex-wrap gap-6 text-center">
              {links.map(({ id, child, href, text }) => (
                <li
                  key={id}
                  className={`flex flex-wrap items-center justify-center h-[4.5rem] w-[4rem] bg-gradient-to-b from-teal-600 to-cyan-600 rounded-md hover:scale-110 duration-300 `}
                >
                  <a
                    href={href}
                    className="text-black dark:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure>
                      <div className="mx-[8px]">{child}</div>
                      <figcaption className="mt-[5px] text-xs">
                        {text}
                      </figcaption>
                    </figure>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
