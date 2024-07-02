import "./App.css";
import FaqSection from "./Components/FAQ/FaqSection";
import MainSection from "./Components/MainSection";
import MiddleSection from "./Components/MiddleSection";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <MiddleSection />
      <FaqSection />
      <Subscribe />
    </>
  );
}

export default App;
