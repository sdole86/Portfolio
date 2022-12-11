import React from "react"

export default function ProjectCard(props) {

    
        let link
        if (props.item.link === "#")
        {
            link = props.item.name
        }
        else  {
            link = <a href={props.item.link} target="_blank">{props.item.name}</a>
        }
    

    return (


        <div className="project-card">
            <hr />
            <img src={props.item.image} className="frame"/>
            <div className="project-info">
                <p><span className="bold">Name</span>: {link} | <a href={props.item.github} target="_blank">GitHub</a></p>
                <p><span className="bold">Description:</span> {props.item.description}</p>

            </div>
        </div>
    )
}