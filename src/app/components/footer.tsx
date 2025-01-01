import React from 'react'

function Footer() {
  return (
    <div>
      <div>
  <footer className="bg-white py-10 sm:px-10 px-6 font-[sans-serif] tracking-wide">
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800">Stay Connected</h3>
        <p className="text-sm mt-4 text-gray-500">
          Subscribe to our blog for the latest articles tips and insights. Dont miss out on valuable updates
        </p>
        <div className="bg-gray-100 flex px-2 py-1.5 rounded-full text-left mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full outline-none bg-transparent text-sm pl-4"
          />
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-800 text-white text-sm rounded-full px-4 py-2 ml-4 transition-all tracking-wide"
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr className="my-12" />
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-base font-bold mb-6 text-gray-800">About the Blog</h4>
          <p className="text-gray-500 mb-2 text-sm leading-relaxed">
            Explore a wide range of articles covering technology, lifestyle, travel and more. Join our community of avid readers.
          </p>
        </div>
        <div>
          <h4 className="text-base font-bold mb-6 text-gray-800">Categories</h4>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Technology
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Lifestyle
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Travel
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Food
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold mb-6 text-gray-800">Recent Posts</h4>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                10 Tips for a Healthier Lifestyle
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Exploring the Hidden Gems of Europe
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                Mastering Web Development in 2024
              </span>
            </li>
            <li>
              <span className="text-gray-500 hover:text-gray-800 text-sm cursor-pointer">
                The Ultimate Guide to Digital Marketing
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold mb-6 text-gray-800">Contact Us</h4>
          <p className="text-gray-500 text-sm mb-4">
            Have questions? Feel free to reach out to us Were here to help
          </p>
          <ul className="space-y-3">
            <li>
              <button className="text-gray-500 hover:text-gray-800 text-sm">
                Email: info@blog.com
              </button>
            </li>
            <li>
              <button className="text-gray-500 hover:text-gray-800 text-sm">
                Contact Form
              </button>
            </li>
            <li>
              <button className="text-gray-500 hover:text-gray-800 text-sm">
                Support Center
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Footer
