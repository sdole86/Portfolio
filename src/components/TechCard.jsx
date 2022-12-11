import React from "react"

export default function TechCard(props) {
    let img = props.item.image

    return (


        <div className="tech-card">
            <div className="tech-image">
                <img src={img} />
            </div>

            <div className="tech-name">
                <p>{props.item.name}</p>
            </div>

        </div>
    )
}