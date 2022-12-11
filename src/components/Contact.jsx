import LinkedIn from "/src/assets/logo_linkedin.png"
import Email from "/src/assets/logo_email.png"
import GitHub from "/src/assets/logo_github.png"
import "../styles/contact.css"
import contact from "/src/assets/undraw_personal_text_re_vqj3.svg"


export default function Contact() {

    return (
        <div className="contact">
            
            <div className="contact-image">
                <img src={contact}/>
            </div>
            
            <h2>Contact Me</h2>
            <p>If you would like to know more please reach out to me via LinkedIn or my personal email. I'm always eager to hear about new opportunities and speak with like minded individuals. If you want to see what projects I'm currently working on please visit my Github page.</p>
            <div className="contact-logos">
                <a href="https://www.linkedin.com/in/samuel-dole-b3453814/"><img src={LinkedIn}/></a>
                <a href="https://github.com/sdole86"><img src={GitHub}/></a>
                <a href="mailto: sdole86@gmail.com"><img src={Email}/></a>
            </div>
        </div>
    )

}