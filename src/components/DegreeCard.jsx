import React from "react"

export default function DegreeCard(props) {
    let img = props.item.image

    return (


        <div className="degree-card">
            <img src={img} />

            <div className="degree-info">
                <p className="degree-school">{props.item.school}</p>
                <p className="degree-level">{props.item.level} of {props.item.degree}</p>
                <p className="degree-graddate">Graduated {props.item.date}</p>
            </div>

            
        </div>
    )
}