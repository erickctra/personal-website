import { Link } from './Link'

import projectLogo from '../assets/project/presentation.png'

export function Project() {
  return (
    <div className="flex flex-col-reverse items-center justify-between mt-8 sm:flex-row">
      <div className="h-auto">
        <h3 className="text-xs">2022 - present</h3>
        <h1 className="mt-2">This is a project name! Name wisely!</h1>
        <h2 className="sm:max-w-[80%] mb-2">
          Fill your project brief here. It can be the outcome of the project, or
          some success metrics, or a cheesy tagline.
        </h2>
        <Link title="Try it out" />
      </div>
      <div className="w-full h-36 mb-4 bg-rose-200 flex items-end justify-center flex-shrink-0 rounded-md sm:w-36 sm:h-36">
        <img src={projectLogo} className="w-36" alt="" />
      </div>
    </div>
  )
}
