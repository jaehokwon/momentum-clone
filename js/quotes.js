const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius"
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit"
    },
    {
        quote: "The die is cast.",
        author: "Julius caesar"
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé"
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Gail Winfrey"
    },
    {
        quote: "Believe in yourself.",
        author: "Anonymous"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${randomQoute.quote}"`;
author.innerText = `- ${randomQoute.author}`;