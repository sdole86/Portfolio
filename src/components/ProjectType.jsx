import React from "react"

export default function ProjectType(props) {
    let img = props.item.image

    return (


        <div
            className="project-type-card"
            onClick={props.selectProjectType}
            id={props.technology}
        >
            <img src={img}/>
        </div>
    )
}