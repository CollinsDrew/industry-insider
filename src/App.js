import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Team from "./components/UI/Team";
import Blog from "./components/UI/Blog";
import Testamonial from "./components/UI/Testamonial";
import Newsletter from "./components/UI/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testamonial />
      <Newsletter />
    </>
  );
}

export default App;
