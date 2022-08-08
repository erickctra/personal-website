import { Home } from "./sections/Home"
import { Projects } from "./sections/Projects"
import { Technologies } from "./sections/Technologies"
import { Experiences } from "./sections/Experiences"
import { About } from "./sections/About";
import { Link } from "./components/Link";


function App() {
  return (
    <div className="App max-w-2xl m-auto box-border py-14 px-14 sm:px-5">
      <Home />
      <Projects />
      <Technologies />
      <Experiences />
      <About />

      <section className="mt-28">
        <h1>Contact me</h1>
        <ul className="">
          <li><Link title="personal.erickcintra@outlook.com"/></li>
          <li><Link title="LinkedIn"/></li>
        </ul>
      </section>
    </div>
  )
}

export default App
