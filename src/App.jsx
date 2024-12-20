import styles from "./App.module.css";
// import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {

  return (
    <div className={styles.App}>
      {/* <Navbar /> */}
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App
