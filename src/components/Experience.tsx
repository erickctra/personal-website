import { Link } from "./Link";

interface ExperienceProps {
    title: string
}

export function Experience(props: ExperienceProps) {
    return <div className="mt-8">
        <h3 className="text-xs">2021-2022</h3>
        <h1 className="mt-2"><Link title={props.title}/></h1>
        <h2>Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.</h2>
    </div>
}