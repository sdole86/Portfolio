import React from "react"
import degreeData from "/src/data/degrees"
import DegreeCard from "/src/components/DegreeCard";
import certData from "/src/data/certifications"
import CertificationCard from "/src/components/CertificationCard";
import trainingData from "/src/data/training"
import TrainingCard from "/src/components/TrainingCard";
import "/src/styles/credentials.css"
import education from "/src/assets/undraw_certificate_re_yadi.svg"

export default function Credentials() {

    const degrees = degreeData.map(item => {
        return (
            <DegreeCard
                key={item.degree}
                item={item}
            />

        )
    })

    const certs = certData.map(item => {
        return (
            <CertificationCard
                key={item.id}
                item={item}
            />

        )
    })

    const trainings = trainingData.map(item => {
        return (
            <TrainingCard
                key={item.training}
                item={item}
            />

        )
    })

    return (
        <div className="credentials">
            <img src={education} />
            <h2>Degrees</h2>
            <div className="degrees">
                {degrees}
            </div>

            <h2>Certifications</h2>
            <div className="certifications">
                {certs}
            </div>

            <h2>Trainings</h2>
            <div className="trainings">
                {trainings}
            </div>
        </div>
    )
}
