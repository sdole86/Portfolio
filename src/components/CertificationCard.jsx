import React from "react"

export default function CertificationCard(props) {
    let img = props.item.image

    return (


        <div className="cert-card">
            <img src={img} />

            <div className="cert-info">
                <p className="bold">{props.item.certification}</p>
                <p>Issues: {props.item.date}</p>
                <p>Credential ID: {props.item.id}</p>
            </div>

            
        </div>
    )
}