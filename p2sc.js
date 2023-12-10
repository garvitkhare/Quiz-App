ans = document.querySelector('button');
ques = [
    {
        qt: "Who has the Most Goals in the history of Football?",
        an: [
            { a: "Cristiano Ronaldo", check: true },
            { a: "Lionel Messi", check: false },
            { a: "Pele", check: false },
            { a: "Zinedine Zidane", check: false }
        ]
    },
    {
        qt: "Who among the following has won the Ballon D'or?",
        an: [
            { a: "Toni kroos", check: false },
            { a: "Zinedine Zidane", check: true },
            { a: "Paul Scholes", check: false },
            { a: "Andres Iniesta", check: false }
        ]
    },
    {
        qt: "Who won the Golden Ball in 2018 Fifa WC?",
        an: [
            { a: "Cristiano Ronaldo", check: false },
            { a: "Kylian Mbappe", check: false },
            { a: "Luka Modric", check: true },
            { a: "Antoinne Griezmann", check: false }
        ]
    },
    {
        qt: "Who won the Man of the tournament in 2023 CWC?",
        an: [
            { a: "David Warner", check: false },
            { a: "Rohit Sharma", check: false },
            { a: "Virat Kohli", check: true },
            { a: "Adam Zampa ", check: false }
        ]
    },
    {
        qt: "Which is the only club to have won the premier league unbeaten?",
        an: [
            { a: "Manchester United", check: false },
            { a: "Arsenal FC", check: true },
            { a: "Liverpool FC", check: false },
            { a: "Newcastle United FC ", check: false }
        ]
    }
]
let count = 0;
let score = 0;
document.getElementById("q").innerHTML = ques[count].qt;
document.querySelector(".btn1").innerHTML = ques[count].an[0].a;
document.querySelector(".btn2").innerHTML = ques[count].an[1].a;
document.querySelector(".btn3").innerHTML = ques[count].an[2].a;
document.querySelector(".btn4").innerHTML = ques[count].an[3].a;

async function nextt() {
    
    if(count == 4){
        document.querySelector(".quiz").style.display= "none";
        document.querySelector(".score").innerHTML= "Your Score is "+ score+ "/5";
        document.querySelector(".score").style.display= "contents";
        
    }

    count = count + 1;
    document.getElementById("q").innerHTML = ques[count].qt;
    document.querySelector(".btn1").innerHTML = ques[count].an[0].a;
    document.querySelector(".btn2").innerHTML = ques[count].an[1].a;
    document.querySelector(".btn3").innerHTML = ques[count].an[2].a;
    document.querySelector(".btn4").innerHTML = ques[count].an[3].a;
    
}

document.querySelector(".btn1").addEventListener("click", () => {
    

    if (ques[count].an[0].check === true) {
        score = score + 1;
    }
    nextt();

});
document.querySelector(".btn2").addEventListener("click", () => {

    if (ques[count].an[1].check === true) {
        score = score + 1;
    }
    nextt();

});
document.querySelector(".btn3").addEventListener("click", () => {

    if (ques[count].an[2].check === true) {
        score = score + 1;
    }
    nextt();

});
document.querySelector(".btn4").addEventListener("click", () => {


    if (ques[count].an[3].check === true) {
        score = score + 1;
    }
    nextt();

});









