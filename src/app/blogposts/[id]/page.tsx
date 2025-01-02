// Server Component
import Image from "next/image";
import { notFound } from "next/navigation";  // Used to handle cases where the post doesn't exist
import CommentsSection from "./commentSection";

export async function generateStaticParams() {
  
    const posts = [
      { 
        id: "1",
        title: "What is AI?",
        description:"Artificial Intelligence (AI) is a transformative technology that mimics human intelligence to perform tasks such as learning, problem-solving, and decision-making. It leverages algorithms and vast datasets to identify patterns, make predictions, and automate processes. AI has become integral to industries like healthcare, education, and entertainment, revolutionizing how we interact with technology. From virtual assistants like Siri and Alexa to self-driving cars and personalized recommendations, AI is shaping our daily lives.The core of AI lies in machine learning and deep learning, where systems improve themselves based on data. For instance, in healthcare, AI helps in early disease detection by analyzing medical images and patient histories. In business, it streamlines operations through chatbots, predictive analytics, and fraud detection. Education has also benefited, with AI creating personalized learning paths for students.Despite its advantages, AI raises ethical concerns about job displacement, data privacy, and decision-making transparency. As technology evolves, addressing these challenges is crucial to ensure AI remains a force for good. With ongoing advancements, AI continues to push boundaries, promising a future where machines enhance human capabilities and drive innovation....",
        content: "High-performance laptop for professionals and gamers.",
        price: "1000",
        image: "/image1.jpg" 
   },
  { 
    id: "2",
    title: "What is Agentic Ai ?",
    description:"Agentic AI refers to artificial intelligence systems designed to act as autonomous agents, capable of making decisions, taking actions, and achieving goals independently. These systems possess a high level of adaptability and can interact dynamically with their environment. Unlike traditional AI, which requires direct input or predefined rules, agentic AI can learn from its surroundings, assess situations, and execute tasks with minimal human intervention.The core feature of agentic AI is its ability to function with agency, meaning it can set objectives, plan strategies, and modify its behavior to meet changing conditions. For example, in robotics, an agentic AI can navigate a new environment, avoiding obstacles and completing tasks without explicit programming. Similarly, in customer service, it can proactively assist users by understanding their needs and offering solutions.Agentic AI relies heavily on advanced algorithms, reinforcement learning, and neural networks. These technologies enable it to process vast amounts of data, predict outcomes, and improve performance over time. While it opens new possibilities in automation and efficiency, it also poses ethical concerns about control, accountability, and the potential for unintended consequences. As agentic AI continues to evolve.....",
    content: "Latest smartphone with cutting-edge features.",
    price: "800",
    image: "/images2.jpg" 
  },
  {
      id: "3",
      title: "What is Next.js 15 ?",
      description:"Next.js is a popular open-source React framework that simplifies the development of modern web applications. Built on top of React, it provides powerful features like server-side rendering (SSR), static site generation (SSG), and dynamic routing, making it ideal for building high-performance websites and applications. With Next.js, developers can create seamless, user-friendly interfaces while optimizing for speed and scalability.One of the standout features of Next.js is its ability to render pages on the server, which improves search engine optimization (SEO) and provides faster page load times. It also supports hybrid applications, allowing developers to combine server-side and static rendering within the same project. This flexibility makes it suitable for various use cases, from e-commerce platforms to content management systems.Next.js comes with built-in routing, automatic code splitting, and easy integration of APIs. It also supports incremental static regeneration (ISR), enabling websites to update static content without redeployment. Moreover, its hot reloading feature speeds up the development process by instantly reflecting changes in the browser.With a robust community and comprehensive documentation, Next.js continues to grow as a go-to framework for modern web development....",
      content: "Stylish smartwatch with health tracking and notifications.",
      price: "200",
      image: "/images3.jpg" 
    },
  {
     id: "4",
     title: "What is python?",
     description:"Python is a high-level versatile programming language widely recognized for its simplicity and readability. Created by Guido van Rossum in 1991. Python has grown into one of the most popular languages in the world. Its clean syntax makes it beginner-friendly while its powerful libraries and frameworks make it suitable for advanced programming tasks. Python is applications are vast ranging from web development with frameworks like Django and Flask to data analysis and visualization with libraries like Pandas, NumPy and Matplotlib. In artificial intelligence and machine learning Python shines with tools like TensorFlow and PyTorch. It is also used for automation, scripting and game development. Python is cross-platform compatibility allows developers to write code that runs seamlessly on different operating systems. The language supports multiple programming paradigms, including object-oriented procedural, and functional programming, offering flexibility for various projects. Its interactive interpreter makes it ideal for prototyping and experimentation. Python is extensive standard library simplifies common tasks like file handling web scraping and database management. Additionally its vibrant community provides vast resources tutorials and support, making it an excellent choice for learners and professionals alike. Python is not only a tool for building software but also a catalyst for innovation enabling developers to turn their ideas into reality efficiently and effectively....",
     content: "Crystal-clear sound with noise cancellation.",
     price: "150",
     image: "/images7.jpg"
   },
        { id: "5",
          title: "What is Cloud Computing?",
          description:"Cloud computing refers to the delivery of computing services, such as storage, processing power, networking, software, and databases, over the internet (the cloud). Instead of owning and maintaining physical servers or infrastructure, businesses and individuals can rent or access these services from cloud providers like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud. There are three main types of cloud computing: 1. **Infrastructure as a Service (IaaS) Provides virtualized computing resources over the internet. It includes virtual machines, storage, and networking, allowing users to manage and run applications without owning physical hardware. 2. **Platform as a Service (PaaS)**  Offers a platform that allows developers to build, deploy, and manage applications without worrying about the underlying infrastructure. Examples include Google App Engine and Microsoft Azure. 3. **Software as a Service (SaaS)** – Delivers software applications over the internet, eliminating the need for users to install or maintain software on their devices. Examples include Google Workspace, Dropbox, and Microsoft 365. Cloud computing offers benefits like scalability, flexibility, cost-efficiency, and ease of access, enabling users to access resources and data from anywhere, at any time, on any device.",
            content: "Ergonomic gaming chair for comfort and style.",
            price: "300",
            image: "/images5.jpg" 
        },
        { 
          id: "6",
          title: "React.js",
          description:"**React** is a **JavaScript library** used for building user interfaces, particularly for single-page applications. It is developed and maintained by Facebook and a community of developers. React focuses on creating interactive, reusable UI components that efficiently update and render as the data changes. ### Key Features of React: 1. **Component-Based Architecture**: React applications are built using components, which are independent, reusable pieces of UI. Components can be nested and combined to create complex user interfaces. 2. **Virtual DOM**: React uses a Virtual DOM to enhance performance. Instead of directly manipulating the DOM, React creates a lightweight copy of the DOM and only updates the parts of the actual DOM that have changed. 3. **Declarative Syntax**: React allows developers to describe what the UI should look like for a given state, and it takes care of updating the UI when the state changes. 4. **JSX (JavaScript XML)**: React uses JSX, a syntax extension that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to visualize the structure of the UI components. 5. **Unidirectional Data Flow**: React enforces a one-way data binding approach, meaning data flows from parent to child components. This makes applications predictable and easier to debug. 6. **Rich Ecosystem**: React has a large ecosystem, including tools like React Router for routing, and state management libraries like Redux and Context API. ### Why Use React? - **Fast Development**: Component reusability and a vast library of third-party components speed up development. - **High Performance**: The Virtual DOM ensures efficient updates and rendering. - **Cross-Platform Development**: With frameworks like React Native, React can be used for mobile app development. - **Scalability**: Suitable for both small applications and large-scale, complex projects. ### Use Case Examples: - Single-page applications (e.g., Gmail, Trello) - Dynamic websites with frequent content updates - Interactive dashboards and data visualization tools - Mobile applications (using React Native) React is widely adopted due to its flexibility, ease of use, and ability to create robust and dynamic applications efficiently.",
          content: "Ultra HD monitor for immersive viewing experience.",
          price: "500",
          image: "/images4.jpg"
        },
    ];
    

  // Generate dynamic paths
  return posts.map((post) => ({ id: post.id }));
}

export default async function Blogpost({ params }: { params: { id: string } }) {
  const posts = [
    { 
          id: "1",
          title: "What is AI?",
          description:"Artificial Intelligence (AI) is a transformative technology that mimics human intelligence to perform tasks such as learning, problem-solving, and decision-making. It leverages algorithms and vast datasets to identify patterns, make predictions, and automate processes. AI has become integral to industries like healthcare, education, and entertainment, revolutionizing how we interact with technology. From virtual assistants like Siri and Alexa to self-driving cars and personalized recommendations, AI is shaping our daily lives.The core of AI lies in machine learning and deep learning, where systems improve themselves based on data. For instance, in healthcare, AI helps in early disease detection by analyzing medical images and patient histories. In business, it streamlines operations through chatbots, predictive analytics, and fraud detection. Education has also benefited, with AI creating personalized learning paths for students.Despite its advantages, AI raises ethical concerns about job displacement, data privacy, and decision-making transparency. As technology evolves, addressing these challenges is crucial to ensure AI remains a force for good. With ongoing advancements, AI continues to push boundaries, promising a future where machines enhance human capabilities and drive innovation....",
          content: "High-performance laptop for professionals and gamers.",
          price: "1000",
          image: "/image1.jpg" 
     },
    { 
      id: "2",
      title: "What is Agentic Ai ?",
      description:"Agentic AI refers to artificial intelligence systems designed to act as autonomous agents, capable of making decisions, taking actions, and achieving goals independently. These systems possess a high level of adaptability and can interact dynamically with their environment. Unlike traditional AI, which requires direct input or predefined rules, agentic AI can learn from its surroundings, assess situations, and execute tasks with minimal human intervention.The core feature of agentic AI is its ability to function with agency, meaning it can set objectives, plan strategies, and modify its behavior to meet changing conditions. For example, in robotics, an agentic AI can navigate a new environment, avoiding obstacles and completing tasks without explicit programming. Similarly, in customer service, it can proactively assist users by understanding their needs and offering solutions.Agentic AI relies heavily on advanced algorithms, reinforcement learning, and neural networks. These technologies enable it to process vast amounts of data, predict outcomes, and improve performance over time. While it opens new possibilities in automation and efficiency, it also poses ethical concerns about control, accountability, and the potential for unintended consequences. As agentic AI continues to evolve.....",
      content: "Latest smartphone with cutting-edge features.",
      price: "800",
      image: "/images2.jpg" 
    },
    {
        id: "3",
        title: "What is Next.js 15 ?",
        description:"Next.js is a popular open-source React framework that simplifies the development of modern web applications. Built on top of React, it provides powerful features like server-side rendering (SSR), static site generation (SSG), and dynamic routing, making it ideal for building high-performance websites and applications. With Next.js, developers can create seamless, user-friendly interfaces while optimizing for speed and scalability.One of the standout features of Next.js is its ability to render pages on the server, which improves search engine optimization (SEO) and provides faster page load times. It also supports hybrid applications, allowing developers to combine server-side and static rendering within the same project. This flexibility makes it suitable for various use cases, from e-commerce platforms to content management systems.Next.js comes with built-in routing, automatic code splitting, and easy integration of APIs. It also supports incremental static regeneration (ISR), enabling websites to update static content without redeployment. Moreover, its hot reloading feature speeds up the development process by instantly reflecting changes in the browser.With a robust community and comprehensive documentation, Next.js continues to grow as a go-to framework for modern web development....",
        content: "Stylish smartwatch with health tracking and notifications.",
        price: "200",
        image: "/images3.jpg" 
      },
    {
       id: "4",
       title: "What is python?",
       description:"Python is a high-level versatile programming language widely recognized for its simplicity and readability. Created by Guido van Rossum in 1991. Python has grown into one of the most popular languages in the world. Its clean syntax makes it beginner-friendly while its powerful libraries and frameworks make it suitable for advanced programming tasks. Python is applications are vast ranging from web development with frameworks like Django and Flask to data analysis and visualization with libraries like Pandas, NumPy and Matplotlib. In artificial intelligence and machine learning Python shines with tools like TensorFlow and PyTorch. It is also used for automation, scripting and game development. Python is cross-platform compatibility allows developers to write code that runs seamlessly on different operating systems. The language supports multiple programming paradigms, including object-oriented procedural, and functional programming, offering flexibility for various projects. Its interactive interpreter makes it ideal for prototyping and experimentation. Python is extensive standard library simplifies common tasks like file handling web scraping and database management. Additionally its vibrant community provides vast resources tutorials and support, making it an excellent choice for learners and professionals alike. Python is not only a tool for building software but also a catalyst for innovation enabling developers to turn their ideas into reality efficiently and effectively....",
       content: "Crystal-clear sound with noise cancellation.",
       price: "150",
       image: "/images7.jpg"
     },
          { id: "5",
            title: "What is Cloud Computing?",
            description:"Cloud computing refers to the delivery of computing services, such as storage, processing power, networking, software, and databases, over the internet (the cloud). Instead of owning and maintaining physical servers or infrastructure, businesses and individuals can rent or access these services from cloud providers like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud. There are three main types of cloud computing: 1. **Infrastructure as a Service (IaaS) Provides virtualized computing resources over the internet. It includes virtual machines, storage, and networking, allowing users to manage and run applications without owning physical hardware. 2. **Platform as a Service (PaaS)**  Offers a platform that allows developers to build, deploy, and manage applications without worrying about the underlying infrastructure. Examples include Google App Engine and Microsoft Azure. 3. **Software as a Service (SaaS)** – Delivers software applications over the internet, eliminating the need for users to install or maintain software on their devices. Examples include Google Workspace, Dropbox, and Microsoft 365. Cloud computing offers benefits like scalability, flexibility, cost-efficiency, and ease of access, enabling users to access resources and data from anywhere, at any time, on any device.",
              content: "Ergonomic gaming chair for comfort and style.",
              price: "300",
              image: "/images6.jpg" 
          },
          { 
            id: "6",
            title: "React.js",
            description:"**React** is a **JavaScript library** used for building user interfaces, particularly for single-page applications. It is developed and maintained by Facebook and a community of developers. React focuses on creating interactive, reusable UI components that efficiently update and render as the data changes. ### Key Features of React: 1. **Component-Based Architecture**: React applications are built using components, which are independent, reusable pieces of UI. Components can be nested and combined to create complex user interfaces. 2. **Virtual DOM**: React uses a Virtual DOM to enhance performance. Instead of directly manipulating the DOM, React creates a lightweight copy of the DOM and only updates the parts of the actual DOM that have changed. 3. **Declarative Syntax**: React allows developers to describe what the UI should look like for a given state, and it takes care of updating the UI when the state changes. 4. **JSX (JavaScript XML)**: React uses JSX, a syntax extension that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to visualize the structure of the UI components. 5. **Unidirectional Data Flow**: React enforces a one-way data binding approach, meaning data flows from parent to child components. This makes applications predictable and easier to debug. 6. **Rich Ecosystem**: React has a large ecosystem, including tools like React Router for routing, and state management libraries like Redux and Context API. ### Why Use React? - **Fast Development**: Component reusability and a vast library of third-party components speed up development. - **High Performance**: The Virtual DOM ensures efficient updates and rendering. - **Cross-Platform Development**: With frameworks like React Native, React can be used for mobile app development. - **Scalability**: Suitable for both small applications and large-scale, complex projects. ### Use Case Examples: - Single-page applications (e.g., Gmail, Trello) - Dynamic websites with frequent content updates - Interactive dashboards and data visualization tools - Mobile applications (using React Native) React is widely adopted due to its flexibility, ease of use, and ability to create robust and dynamic applications efficiently.",
            content: "Ultra HD monitor for immersive viewing experience.",
            price: "500",
            image: "/images4.jpg"
          },
  ];
  

  // Find the specific post based on the `id`
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound(); // Show "not found" page if post is not found
  }

  return (
    <div className="container mx-auto p-4 text-center">
    <div className="bg-white rounded-lg shadow-md overflow-hidden mx-auto" style={{ maxWidth: '750px' }}>
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-blue-500 py-4">{post.title}</h1>
  
      {/* Image */}
      <Image
        className="w-full object-cover"
        src={post.image}
        alt={post.title}
        width={700}
        height={500}
      />
  
      {/* Description */}
      <p className="text-blue-500 text-base text-center px-8 py-4">
        {post.description}
      </p>
  
      {/* Date */}
      <p className="text-blue-500 text-lg text-center pb-4">
         Publish     {new Date().toLocaleDateString()} {/* Replace with dynamic date if needed */}
      </p>
    </div>
  
    {/* Pass post to the Client Component */}
    <CommentsSection />
  </div>
  


  );
}