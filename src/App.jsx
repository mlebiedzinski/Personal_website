import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { ScreenDimeCaseStudy } from "./components/Projects/CaseStudies/ScreenDime"; 
import { SINCaseStudy } from "./components/Projects/CaseStudies/SIN"; 
import { StravaCaseStudy } from "./components/Projects/CaseStudies/StravaTT"; 

function App() {
  return (
    <Router>
      <div className={styles.App}>
        {/* Define routes for your sections */}
        <Routes>
          <Route path="/" element={<><Hero /><Projects /><About /><Contact /></>} />
        
          <Route path="/screendimecasestudy" element={<ScreenDimeCaseStudy />} />
          <Route path="/sincasestudy" element={<SINCaseStudy />} />
          <Route path="/stravacasestudy" element={<StravaCaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
