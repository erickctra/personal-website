import { Home } from "./sections/Home"
import { Projects } from "./sections/Projects"
import { Technologies } from "./sections/Technologies"
import { Experiences } from "./sections/Experiences"
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="App max-w-2xl m-auto box-border py-14 px-14 sm:px-5">
      <Home />
      <Projects />
      <Technologies />
      <Experiences />
      <About />
      <Contact />
   </div>
  )
}

export default App
