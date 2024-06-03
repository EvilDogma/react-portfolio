import CallToAction from "../components/CallToAction"
import Hero from "../components/Hero"
import Project from "../components/Project"

import projects from "../assets/projects"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <div className=" row my-2 align-items-center">
            {/* <img src={will} alt="" /> */}

            <Hero />
            <CallToAction />
            <div className="pt-3 container mt-auto">
                <div className="row justify-between">
                    {projects.map(project => (
                        <div className="col-6" key={project.id}>
                       
                    
                        <Project project={project} />
                        

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Landing