// Server Component
import Image from "next/image";
import { notFound } from "next/navigation";  // Used to handle cases where the post doesn't exist
import CommentsSection from "./commentSection";

export async function generateStaticParams() {
  
    const posts = [
      {
         id: "1",
         title: "Laptop",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "High-performance laptop for professionals and gamers.",
            price: "1000"
            , image: "/image.3.jpg" 
      },

      {
         id: "2",
         title: "Smartphone",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnisLorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "Latest smartphone with cutting-edge features.",
            price: "800",
             image: "/ image101.jpg"
      },

      { 
        id: "3",
         title: "Smartwatch",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "Stylish smartwatch with health tracking and notifications.",
            price: "200",
             image: "/images100.jpg"
       },

      { 
        id: "4",
         title: "Wireless Earbuds",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "Crystal-clear sound with noise cancellation.",
            price: "150",
             image: "/image102.jpg" 
            },

      {
          id: "5",
          title: "Gaming Chair",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "Ergonomic gaming chair for comfort and style.",
            price: "300",
             image: "/image105.jpg" 
            },
      { id: "6",
         title: "4K Monitor",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
           content: "Ultra HD monitor for immersive viewing experience.",
            price: "500",
             image: "/images100.jpg"
             },
    ];
    

  // Generate dynamic paths
  return posts.map((post) => ({ id: post.id }));
}

export default async function Blogpost({ params }: { params: { id: string } }) {
  const posts = [
    { 
          id: "1",
          title: "Laptop",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
          content: "High-performance laptop for professionals and gamers.",
          price: "1000",
          image: "/image.3.jpg" 
     },
    { 
      id: "2",
      title: "Smartphone",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
      content: "Latest smartphone with cutting-edge features.",
      price: "800",
      image: "/image101.jpg" 
    },
    {
        id: "3",
        title: "Smartwatch",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
        content: "Stylish smartwatch with health tracking and notifications.",
        price: "200",
        image: "/images100.jpg" 
      },
    {
       id: "4",
       title: "Wireless Earbuds",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
       content: "Crystal-clear sound with noise cancellation.",
       price: "150",
       image: "/image102.jpg"
     },
          { id: "5",
            title: "Gaming Chair",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
              content: "Ergonomic gaming chair for comfort and style.",
              price: "300",
              image: "/image105.jpg" 
          },
          { 
            id: "6",
            title: "4K Monitor",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic aperiam omnis",
            content: "Ultra HD monitor for immersive viewing experience.",
            price: "500",
            image: "/images100.jpg"
          },
  ];
  

  // Find the specific post based on the `id`
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound(); // Show "not found" page if post is not found
  }

  return (
    <div className="container mx-auto p-4 text-center">
  <h1 className="text-3xl font-bold mb-4 text-blue-500">{post.title}</h1>
  <p className="text-lg mb-6">{post.content}</p>

  <div className="flex justify-center">
    <Image
      className="mx-auto"
      src={post.image}
      alt={post.title}
      width={500}
      height={400}
    />
  </div>
  <h1 className="text-xl font-bold"> Price:${post.price}</h1>
  <p
  className="text-gray-700 mt-4 text-lg font-light text-center mx-auto w-80 line-clamp-3 tracking-wide leading-relaxed  pl-4"
>
  {post.description}
</p>

  {/* Pass post to the Client Component */}
  <CommentsSection />
</div>


  );
}
