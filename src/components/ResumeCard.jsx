import React from "react"

export default function ResumeCard(props) {
    let img = props.item.image

    return (


        <div className="resume-card">
            <img src={img} />

            <div className="position-info">
                <p className="bold">{props.item.position}</p>
                <p>{props.item.company}</p>
                <p>{props.item.date}</p>
            </div>

            
        </div>
    )
}