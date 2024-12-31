"use client";
import Link from "next/link";
import Image from "next/image";

const Blogpost = () => {
  const posts = [
    { id: "1", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?", image: "/image.3.jpg" },
    { id: "2", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?.", image: "/image101.jpg" },
    { id: "3", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?.", image: "/images100.jpg" },
    { id: "4", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?t.", image: "/image102.jpg" },
    { id: "5", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?.", image: "/image105.jpg" },
    { id: "6", title: "Blog title:", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur ipsam hic quos atque neque voluptatum quidem officiis sint consectetur nisi blanditiis, corrupti iure porro doloribus nobis accusantium vel natus?.", image: "/images100.jpg" },
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

