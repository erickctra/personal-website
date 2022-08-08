import { Link } from "../components/Link";

export function About() {
    return <section className="mt-28">
        <h1>About me</h1>
        <h2 className="mt-8 max-w-[90%]">Well, I'm 20 years old, I live in Praia Grande - SP, I entered the programming world through a technical course in systems development and since then I managed to see myself working with that from there.
        </h2>
        <h2 className="mt-2">          I'm passionate about web development and I love building systems from scratch,

            From an early age I had the ability to draw and express myself through art, I believe this gave me an extra critical sense to build my interfaces.</h2>
        <h2 className="mt-8">I mentioned that i like art and maybe you could take a look at some of my work:</h2>
        <Link title="Instagram"/>
    </section>
} 