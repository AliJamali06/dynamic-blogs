"use client";
import Link from "next/link";
import Image from "next/image";

const Blogpost = () => {
  const posts = [
    { id: "1", title: "What is Ai ?", description: "AI has greatly evolved in recent years due to a massive increase in the amount of data available...", image: "/image1.jpg" },
    { id: "2", title: "What is Agentic Ai ?", description: "Agentic AI refers to AI systems capable of making autonomous decisions ...", image: "/images2.jpg" },
    { id: "3", title: "What is Next.js 15 ?", description: "Next.js 15 is a popular framework that is used for building web applications with React...", image: "/images3.jpg" },
    { id: "4", title: "What is python?", description: "Python is an object-oriented, high-level programming language. The main feature of python is that it comes with dynamic semantics.", image: "/images7.jpg" },
    { id: "5", title: "What is Cloud Computing?", description: "Cloud computing is the on-demand delivery of IT resources over the internet....", image: "/images6.jpg" },
    { id: "6", title: "What is Next.js 15 ?", description: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it....", image: "/images4.jpg" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6"> My Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((blogpost) => (
          <div
            key={blogpost.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-105"
          >
            <Link href={`/blogposts/${blogpost.id}`}>
              <Image
                width={500}
                height={400}
                src={blogpost.image}
                alt={blogpost.title}
                className="w-full h-40 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{blogpost.title}</h2>
                <p className="text-gray-700 mt-4 font-light text-[16px] leading-[24px] tracking-wide font-poppins"> {blogpost.description}</p>
                   {/* Date */}
                 <p className="text-blue-500 text-lg text-left pt-4 mt-12 ">
                       Publish     {new Date().toLocaleDateString()} {/* Replace with dynamic date if needed */}
                  </p>
                <button className="text-white max-w-44 max-h-20 w-44 h-10 bg-blue-600 mt-4 rounded-xl ">Read More</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogpost;

