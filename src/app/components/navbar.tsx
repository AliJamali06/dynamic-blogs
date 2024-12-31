import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 text-black sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center ">
      {/* Logo/Brand Name */}
      <div className="text-xl font-bold tracking-wide text-gray-800">
        My Blog
      </div>

      {/* Right: Navigation Links */}
      <div className="flex space-x-6">
        <Link
          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          href="/#"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          href="/bolgpost"
        >
          Blog
        </Link>
        <Link
          className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out"
          href="/contactus"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
