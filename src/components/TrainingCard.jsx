import React from "react"

export default function TrainingCard(props) {

    return (

        <div className="training-card">
            <ul>
                <li>{props.item.training}</li>
                <li>Trainer: {props.item.organization}</li>     
            </ul>    
        </div>
    )
}