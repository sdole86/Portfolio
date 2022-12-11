import React from "react"
import "../styles/navbar.css"
import developer from "/src/assets/undraw_developer.svg"

export default function Home() {
    
    let currentHour = new Date().getHours()
    let greeting = "Good " + (currentHour < 12 ? 'morning!' :  currentHour < 18 ? 'afternoon!' : 'evening!')

    return (
        <div className="home">
            <img src={developer} />
            <h1>{greeting}</h1>
            <hr />
            <p>My name is Samuel Dole and welcome to my personal portfolio.</p>
            <p>Please use the menu above to find out more about me and what I do.</p>
        </div>
    )
}