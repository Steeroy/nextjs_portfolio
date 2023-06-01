import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { sendContactForm } from '../lib/server';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const sendData = {
      name: name,
      number: number,
      email: email,
      message: message,
    };

    const response = await sendContactForm(sendData);

    console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      toast.success(data.message, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setName('');
      setNumber('');
      setEmail('');
      setMessage('');
    }

    if (response.status === 400) {
      const data = await response.json();
      toast.error(data.message, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };
  return (
    <section id="contact" className="contact flex flex-col">
      <h4 className=" text-2xl font-bold font-poppins">Contact Me</h4>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div>
          <label className="text-lg font-semibold font-inter" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            placeholder="Enter your full-name"
          />
        </div>
        <div>
          <label className="text-lg font-semibold font-inter" htmlFor="number">
            Number
          </label>
          <input
            type="text"
            id="name"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            autoComplete="off"
            placeholder="Enter your number"
          />
        </div>
        <div>
          <label className="text-lg font-semibold font-inter" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-semibold font-inter" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            placeholder="Enter your message"
          />
        </div>
        <button type="submit">
          <span className=" text-lg font-semibold font-inter">
            Send Message
          </span>
          <Icon icon="ph:arrow-right-bold" />
        </button>
      </form>
    </section>
  );
}
