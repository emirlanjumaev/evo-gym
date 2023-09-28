import "./App.css";
import Navbar from "@/components/Navbar/Navbar";
import Home from "@/components/Home";
import Benefits from "./components/Benefits/Benefits";
import OurClasses from "./components/OurClasses/OurClasses";
import OurContact from "./components/OurContact/OurContact";
import Footer from "./components/footer/Index";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <OurContact />
      <Footer />
    </>
  );
}

export default App;
