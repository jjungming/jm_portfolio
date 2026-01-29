import styles from './App.css';
import Header from '../src/components/common/Header/Header';
import Home from '../src/pages/Home/Home';
import About from '../src/components/sections/About/About';
import Skills from '../src/components/sections/Skills/Skills';
import Archiving from '../src/components/sections/Archiving/Archiving';
import Projects from '../src/components/sections/Projects/Projects';
import { IoArrowUpOutline } from "react-icons/io5";

function App() {

  return (
    <div className={styles.appContainer}>
      <Header />
      <Home />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="archiving"><Archiving /></section>
      <section id="projects"><Projects /></section>
      <div className={styles.upButtonContainer}><button className={styles.upButton}><IoArrowUpOutline /></button></div>
    </div>
  );
}

export default App;
