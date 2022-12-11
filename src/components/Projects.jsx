import React from "react"
import projectData from "/src/data/projects"
import ProjectCard from "/src/components/ProjectCard";
import ProjectType from "/src/components/ProjectType";
import "/src/styles/projects.css"

export default function Resume() {

    const [projectType, setProjectType] = React.useState("")
    const asp = getProjects("ASP.Net")
    


    function selectProjectType(tech) {
        setProjectType(tech)

    }

    function getProjects(tech) {
        let obj = projectData.find(o => o.technology === tech)

        return obj.project
    }

    const projectTypes = projectData.map(item => {
        return (

            <ProjectType
                key={item.technology}
                item={item}
                selectProjectType={() => selectProjectType(item.technology)}
            />

        )
    })

    const aspProjects = getProjects("ASP.Net").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })

    const csProjects = getProjects("C#").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })

    const jsProjects = getProjects("JavaScript").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })

    const pythonProjects = getProjects("Python").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })

    const reactProjects = getProjects("React").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })

    const webProjects = getProjects("Web Development").map(item => {
        return (
            <ProjectCard
                key={item.name}
                item={item}
            />

        )
    })


    return (
        <div className="project">
            <div className="project-types">
                {projectTypes}
            </div>

            <p className="section-descriptor">Select the technology or framework to see my related projects.</p>
            
            {projectType === "ASP.Net" &&
                <div>{aspProjects}</div>
                

            }
            {projectType === "C#" &&
                <div>{csProjects}</div>
                
            }
            {projectType === "JavaScript" &&
                <div>{jsProjects}</div>
                
            }
            {projectType === "Python" &&
                <div>{pythonProjects}</div>
                
            }
            {projectType === "React" &&
                <div>{reactProjects}</div>
                
            }
            {projectType === "Web Development" &&
                <div>{webProjects}</div>
                
            }


        </div>
    )

}
