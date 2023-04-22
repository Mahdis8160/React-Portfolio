import Header from "./components/header/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./components/contact-me/ContactMe";
import Portfolio from "./components/portfolio/Portfolio";
import AboutMe from "./components/about-me/AboutMe";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
