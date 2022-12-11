import React from "react"
import technologiesData from "/src/data/technologies"
import TechCard from "/src/components/TechCard";
import "/src/styles/tech.css"
import technology from "/src/assets/undraw_code_review_re_woeb.svg"

export default function Technologies() {

    const technologies = technologiesData.map(item => {
        return (
            <TechCard
                key={item.id}
                item={item}
            />

        )
    })

    return (
        <div className ="tech-landing">
            <div className="tech-banner">
                <img src={technology}/>
                </div>
            <p>Below is a collection of languages, frameworks, and libraries that I have experience with.</p>
            <div className="technology">
               {technologies} 
            </div>
            
        </div>
    )
}
