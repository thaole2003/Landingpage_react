import React from 'react'
import backgroundImage from '../images/bgContact.png';
const styles = {
  backgroundImage: `url(${backgroundImage})`,
};
const Contact = () => {
  return (
<div className="min-h-screen bg-gray-100 flex justify-center items-center" style={styles}>
<div className="w-full max-w-screen-lg bg-white p-8 shadow-md rounded-md">
  <div className="grid md:grid-cols-5 gap-4">
    <div className="md:col-span-3">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Send Message
          </button>
        </form>
    </div>

    <div className="md:col-span-2 bg-gray-200 p-4 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
      <p className="text-gray-600">
        Welcome to our company! We are a leading provider of high-quality products and
        services in the industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Contact