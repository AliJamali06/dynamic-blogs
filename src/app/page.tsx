import Navbar from "./components/navbar";
import Contactus from "./contactus/page";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Blogpost from "./bolgpost/page";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Blogpost/>
    <br />
    {/* <Contactus/> */}
   </div>
  );
}
