import React from "react";

function Contact() {
  return (
    <div>
      <img
        src="/src/assets/images/tacos_delicioso_1000x667.png"
        alt=""
        className="w-full"
      />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-fugaz text-green-700 font-bold mb-6">
          Our Contact Form
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block font-bold mb-1 text-lg" htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="your name"
              className="w-full border border-gray-500 rounded-2xl px-4 py-2 text-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-bold mb-1 text-lg" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="your email"
              className="w-full border border-gray-500 rounded-2xl px-4 py-2 text-lg focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-bold mb-1 text-lg" htmlFor="message">
              Your Message:
            </label>
            <textarea
              id="message"
              rows={8}
              placeholder="Type your message here"
              className="w-full border border-gray-500 rounded-2xl px-4 py-2 text-lg focus:outline-none resize-vertical"
            />
          </div>
          <div className="flex space-x-4 mt-2">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-xl font-semibold text-lg hover:bg-green-800 transition"
            >
              Send
            </button>
            <button
              type="reset"
              className="bg-green-700 text-white px-6 py-2 rounded-xl font-semibold text-lg hover:bg-green-800 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
