import "../styles/navbar.css"
import Photo from "/src/assets/me.jpg"
import Photo2 from "/src/assets/me2.jpg"

export default function About() {

    return (
        <div className="about" >
            <h2>About Me</h2>
            <div className="about-image">
                <img src={Photo} />
                <p>My wife and our first daughter</p>
            </div>
            <p>Hello, my name is Samuel Dole and I am an aspiring <span className="bold">web designer</span> and <span className="bold">software developer</span>. I have been fascinated with coding ever since I was young. In middle school I found endless hours of entertainment in looking at website source code and using it to make my own websites and host them on Geocities. I don't mean to brag, but I had the best Gundam Wing fansite out there (<span className="italics">Geocities has not stood the test of time so you'll just have to take my word on it</span>).</p>
            <p>As I got older I would attempt to program my own video games. I used a simple game making engine but it gave me my first taste of development and taught me variables and conditional statements. I would spend hours crafting project after project, always happily starting over and starting a new one as new ideas and techniques came to mind. As time went on I pursued my other passion: history. My original bachelor's was in the history of the ancient world, specifically Greece and Rome, and I had a wonderful time studying and learning about the ancient world. </p>
            <div className="about-image">
                <img src={Photo2} />
                <p>My daughter and I in the fall</p>
            </div>
            <p>When I graduated and entered the work force I had forgotten about my love of code until I was offered the opportunity to work in IT doing desktop support. I had always had a passion for technology and this was a great chance to use this passion to help others. After I took this job I found a great joy in scripting in PowerShell to make my tasks more efficient. As I became more efficient I eventually began assisting with other, more complicated scripting projects for my team. It wasn't long before I reignited my childhood interest in coding. </p>
            <p>I would soon go back to school and educate myself in modern development practices. So much had changed since I was a youth and I wanted to learn it all. I've tried my hand at Java, Javascript, C#, PHP, and Python. Even after graduating from college I find myself researching new techologies and how to improve the way I do things. The single most important thing I've learned in this field is that technology never stops evolving and neither should you. I'm always excited to learn more and to better myself.</p>

        </div>
    )

}