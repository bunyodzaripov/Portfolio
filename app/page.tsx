import {
   About,
   Contact,
   Footer,
   Header,
   Navbar,
   Service,
   Work,
} from "./components";

export default function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <About />
         <Service />
         <Work />
         <Contact />
         <Footer />
      </>
   );
}
