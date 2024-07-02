import "./App.css";
import FaqSection from "./Components/FAQ/FaqSection";
import MainSection from "./Components/MainSection";
import MiddleSection from "./Components/MiddleSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <MiddleSection />
      <FaqSection />
    </>
  );
}

export default App;
