import React from "react"
import resumeData from "/src/data/resume"
import ResumeCard from "/src/components/ResumeCard";
import "/src/styles/resume.css"
import resume from "/src/assets/undraw_profile_re_4a55.svg"

export default function Resume() {

    const jobs = resumeData.map(item => {
        return (
            <ResumeCard
                key={item.id}
                item={item}
            />

        )
    })

    return (
        <div className="resume">
            <img src={resume}/>
            <p>See below for my work history.</p>
            {jobs}
        </div>
    )
}
