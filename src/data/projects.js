export default [
    {

        technology: "ASP.Net",
        image: "/img/projects/aspnet.png",
        project: [
            {
                image: "/img/projects/asp5.PNG",
                name: "HL7 Interface Tester",
                link: "#",
                github: "https://github.com/sdole86/Doxa",
                description: "A web application designed to take raw HL7 (coded medical information) messages received by the hospital's interface and then cross reference it against their treatment software's SQL database to ensure that the messages were being parsed correctly. Messages can be tested individually against the database or a queue can be created and run at a seperate time. This was designed to help the QA process during major upgrades to the hospital's main treatment software application and ensure data was correctly passing through. I designed the UI for this application while a senior handled the coding of the HL7 parser."
            },
            {
                image: "/img/projects/asp1.PNG",
                name: "Contact Manager",
                link: "#",
                github: "https://github.com/sdole86/ContactManager",
                description: "A test of basic CRUD capabilities using ASP.Net Core and a local SQL DB. This project takes the form of an address book and allows for creation, update, deletion, and editing of existing entries as well as basic data filtering"
            },
            {
                image: "/img/projects/asp2.PNG",
                name: "Student Database",
                link: "#",
                github: "https://github.com/sdole86/Student-Database",
                description: "A test of basic CRUD capabilities using ASP.Net Core and a local SQL DB. This project takes the form of student database. The focus on this one was to set up a trigger in the SQL DB to ensure that any data that is deleted is copied over into a history section"
            },
            {
                image: "/img/projects/asp3.PNG",
                name: "Tip Calculator",
                link: "#",
                github: "https://github.com/sdole86/TipCalculator",
                description: "A straight forward web application that requests the final cost of the user's meal and returns three different possible tip amounts. With this app you have no excuse not to leave a decent tip for your waiter!"
            },
            {
                image: "/img/projects/asp4.PNG",
                name: "Price Quotation",
                link: "#",
                github: "https://github.com/sdole86/PriceQuotation",
                description: "My first ASP.Net project and my first forray into the wide world of MVC. Pretty simple application that asks the user for total cost and discount amount and returns how much will be discounted and what the final sale price will be sans discount."
            },
        ],
    },
    {
        technology: "C#",
        image: "/img/projects/csharp.png",
        project: [
            {
                image: "/img/projects/cs06.PNG",
                name: "Bank Account Manager",
                link: "#",
                github: "https://github.com/sdole86/Bank-Account-Manager",
                description: "A forms app that stores and calculates user input data for withdrawals and deposits"
            },
            {
                image: "/img/projects/cs08.PNG",
                name: "Rainfall Collector",
                link: "#",
                github: "https://github.com/sdole86/Rainfall-Data-Collector",
                description: "A forms app that reads an external .txt file and outputs mathematical data. The data supplied to us by the professor had 90,000+ rows of data and this application was supposed to read line by line and come up with minimum, maximum, average rainfall from the inserted data."
            },
            {
                image: "/img/projects/cs07.PNG",
                name: "Movie Database",
                link: "#",
                github: "https://github.com/sdole86/Movie-Database",
                description: "A forms app that performs basic CRUD operations against a SQL database. The original SQL database was hosted on AWS and was shared among the class. It was an interesting experience to use this DB as my classmates entered number of improperly formatted entries that my application wasn't initially configured to handle. It was a great lesson on expecting the unexpected in development."
            },
            {
                image: "/img/projects/cs05.PNG",
                name: "Monthly Payment Calculator",
                link: "#",
                github: "https://github.com/sdole86/Monthly-Payment-Calculatore",
                description: "A forms app that takes purchase price, down payment amount, annual interest rate, and loan terms in months to calculate the amount require to finance and monthly payments"
            },
            {
                image: "/img/projects/cs04.PNG",
                name: "Code Translator",
                link: "#",
                github: "https://github.com/sdole86/Code-Translator",
                description: "A forms app that takes a user inputted \"cipher\" and either encrypts or decrypts a message. This project utilizes a modified Playfair-style Cipher which is a type of substitution cipher that can not handle numbers or special characters. This cipher utilizes a 5x5 table of which only 25 characters are loaded, which is accomplished using a 2D array."
            },
            {
                image: "/img/projects/cs03.PNG",
                name: "Pi Calculator",
                link: "#",
                github: "https://github.com/sdole86/Pi-Calculator",
                description: "A console app for using Leibniz's Pi formula to calculate pi to excessive amounts of iteration. This was a challenge meant to teach looping skills."
            },
            {
                image: "/img/projects/cs02.PNG",
                name: "BMI Heart Rate Calculator",
                link: "#",
                github: "https://github.com/sdole86/BMI-Heart-Rate-Calculator",
                description: "BMI Heart Rate Calculator</a>: An early C# console application of mine. This app will take the user's weight, height, and age and will calculate what the overall BMI is (Obese / Overweight / Normal / Under) and what your resting heart rate would be at various intensities."
            },
            {
                image: "/img/projects/cs01.PNG",
                name: "Flooring Cost Estimator",
                link: "#",
                github: "https://github.com/sdole86/Flooring-Cost-Estimator",
                description: "One of the first C# console apps I ever wrote. This was a simple assignment that asked us to take user input (width of floor, length of floor, and cost per square foot) and calculate how long the job would take to complete and what the final cost would be including labor and materials and format it appropriately.."
            },
        ]
    },
    {
        technology: "JavaScript",
        image: "/img/projects/javascript.png",
        project: [
            {
                image: "/img/projects/js01.png",
                name: "Poke-a-Teletubby",
                link: "https://sdole86.github.io/projects/javascript/pokeatubby/index.html",
                github: "",
                description: "This was the final for my introduction to Javascript class. This is a simple whack a mole style game with a Teletubby theme. I used a couple of tricks to make this one appear more \"game-like\" such as randomizing the placement of the \"moles\", randomizing which graphic was used, and randomizing how long the player has to \"whack them\". As an added bonus, this project contains Teletubby trivia at the bottom of the page. I'm sure this information will pay off should trivia night at the local pub ever include a children's programming question."
            },
            {
                image: "/img/projects/js02.png",
                name: "Buffalo Wild Wings Carousel",
                link: "https://sdole86.github.io/projects/javascript/bwwjcarousel/index.html",
                github: "",
                description: "Another Javascript class assignment. This assignment was meant to teach us how to use code libraries, in this case JQuery. In this assignment I ended up playing around with the carousel feature. Can you tell I was hungry when I designed it?"
            },


        ]
    },
    {
        technology: "Python",
        image: "/img/projects/Python.png",
        project: [
            {
                image: "/img/projects/pyth01.PNG",
                name: "Python",
                link: "#",
                github: "https://github.com/sdole86/Snake",
                description: "This one was built off a tutorial from Edureka to create a simple Snake-like game in Python. After finishing the tutorial I decided to implement some of my own customizations to the code including increasing difficulty as the player gains points as well as adding some additional classes to the code to make it more readable."
            },
            {
                image: "/img/projects/pyth03.png",
                name: "Inspiration Generator",
                link: "#",
                github: "https://github.com/sdole86/InspirationGenerator",
                description: "Another assignment from my coworker's Python class. This project calls a function that randomly selects a predefined quote and displays it to the user. Afterwards the user can specify if they want another quote or to quit the application."
            },
            {
                image: "/img/projects/pyth02.png",
                name: "Module Operator",
                link: "#",
                github: "https://github.com/sdole86/ModuleOperator",
                description: "A coworker of mine started a Python course. In my journey to learn Python I asked him to share his lessons with me to see if I can figure them out despite having no formal experience with the language. This particular assignment was to understand how the module operator works. This code requests two numerical inputs from the user that set up a range. It then iterate through the range to check if that particular number is divisible by 3, 5, or both."
            },


        ]
    },
    {
        technology: "React",
        image: "/img/projects/react.png",
        project: [
            {
                image: "/img/projects/react04.png",
                name: "Tenzies",
                link: "https://zingy-torrone-97aac5.netlify.app/",
                github: "https://github.com/sdole86/Tenzies",
                description: "This was the the capstone to Scrimba's introduction to React course. I made sure to go off the beaten path to add in the \"Bonus Features\" requested by the course and added in some stat trackers for when the game is finished, as well as editing the dice to use actual images instead of text-generated numbers."
            },
            {
                image: "/img/projects/react03.png",
                name: "Columbus Eats",
                link: "https://peppy-sprinkles-e9fa18.netlify.app/",
                github: "https://github.com/sdole86/Columbus_Eats",
                description: "This React project was a lesson in creating multiple child components and passing properties to them. The original theme of this project was originally intended to be a travel journal of sorts but I thought a collection of local pubs would be far more my style."
            },
            {
                image: "/img/projects/react02.PNG",
                name: "Electronic Business Card",
                link: "https://inquisitive-hummingbird-2ace3b.netlify.app/",
                github: "",
                description: "This was the first solo project as part of Scrimba's React course. This project tasked us with recreating an electronic business card template from Figma and recreate it in React."
            },
            {
                image: "/img/projects/react01.PNG",
                name: "Axolotl Facts",
                link: "https://harmonious-longma-0924e7.netlify.app/",
                github: "https://github.com/sdole86/Axolotl",
                description: "To help broaden my skill set I began following Scrimba's React training program. This is the first project as part of that program. A simple static page constructed with React to teach the student about basic React syntax and how components work. To add a little flavor I themed the page after the cutest amphibian you'll ever see."
            },



        ]
    },
    {
        technology: "Web Development",
        image: "/img/projects/html.png",
        project: [
            {
                id: "1",
                image: "/img/projects/web02.PNG",
                name: "The Godfather",
                link: "https://godfather-eaw.pages.dev/",
                github: "",
                description: "I was playing around with jQuery and wanted to find a project to experiment with. I came up with the idea of a fan site for the Godfather that would look like an FBI created dossier. I wanted to experiment with a list of reusable objects that I would store in a script file and then pull to different spots of the site. The opening page has a randomized styled photo of a character along with a quote from the character. These quotes are part of an object that is reused in the character sections to fill out a list of post it notes. In hindsight I should have made each character an object with their quote property being a list of strings instead of a list of objects. Oh well, it was a good learning experience and I had a lot of fun building it."
            },
            {
                id: "3",
                image: "/img/projects/web03.png",
                name: "Portoflio",
                link: "https://sdole86.github.io/",
                github: "",
                description: "My original attempt at a portfolio. At the time I didn't know how to use a front end framework like React so I cobbled it together using Vanilla JS + HTML + CSS. I made a number of mistakes on this one, most specifically not following Mobile First Design principals. I was also never entirely happy with the  aesthetic of the page. Overall though, I felt like I had a good learning experience while developing."
            },
            {
                id: "2",
                image: "/img/projects/web01.PNG",
                name: "The History of Greece",
                link: "https://sdole86.github.io/projects/webdesign/greekhistory/",
                github: "",
                description: "A mock educational site created for my introduction to HTML class. This was originally an iterative project we worked on each week. After each lesson we would add whatever new tricks we had learned. Before this project I had not worked with HTML since the early 2000s and had never worked with a CSS before. My how times change!"
            },



        ]
    },
]