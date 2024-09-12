const scienceQuotes = [
    "Science is not only compatible with spirituality; it is a profound source of spirituality. - Carl Sagan",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. - Marie Curie",
    "Science is the belief in the ignorance of experts. - Richard Feynman",
    "If I have seen further, it is by standing on the shoulders of giants. - Isaac Newton",
    "You cannot teach a man anything; you can only help him find it within himself. - Galileo Galilei",
    "The good thing about science is that it’s true whether or not you believe in it. - Neil deGrasse Tyson",
    "Intelligence is the ability to adapt to change. - Stephen Hawking",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
    "An expert is a person who has made all the mistakes that can be made in a very narrow field. - Niels Bohr"
];

const artQuotes = [
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Art is not freedom from discipline, but disciplined freedom. - John F. Kennedy",
    "The painter tries to master the technique of painting. The artist aims at achieving the perfect presentation of ideas. - C.S. Lewis",
    "Art is the most beautiful of all the forms of human expression. - Marcel Proust",
    "The best artist has no conception that a marble block does not contain. - Michelangelo",
    "Art is the only way to run away without leaving home. - Twyla Tharp",
    "Every artist dips his brush in his own soul, and paints his own nature into his pictures. - Henry Ward Beecher",
    "To be an artist is to believe in life. - Henry Moore",
    "Art is the most beautiful of all the forms of human expression. - Marcel Proust",
    "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep. - Scott Adams"
];

const philosophyQuotes = [
    "The unexamined life is not worth living. - Socrates",
    "I think, therefore I am. - René Descartes",
    "To be is to be perceived. - George Berkeley",
    "The only thing I know is that I know nothing. - Socrates",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Man is born free, and everywhere he is in chains. - Jean-Jacques Rousseau",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Life must be understood backwards; but it must be lived forwards. - Søren Kierkegaard",
    "The greatest wealth is to live content with little. - Plato",
    "Our life is what our thoughts make it. - Marcus Aurelius"
];

currentQuote = {
    "quotefield":scienceQuotes,
    "index":0
}

function getRandomQuote() {
    const dropdown = document.getElementById("field");
    const selectedField = dropdown.value;
    quotes = null;

    if (selectedField == "philosophy"){
        quotes = philosophyQuotes;
    }
    else if (selectedField == "art"){
        quotes = artQuotes;
    }
    else{
        quotes = scienceQuotes;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.querySelector(".quotevalue");
    
    //  Change current quotefield and index
    currentQuote["quotefield"]= quotes;
    currentQuote["index"]= randomIndex;

    quoteElement.innerHTML = quotes[randomIndex];
}

function previous(){
    const dropdown = document.getElementById("field");
    const selectedField = dropdown.value;
    quotes = null;

    if (selectedField == "philosophy"){
        quotes = philosophyQuotes;
    }
    else if (selectedField == "art"){
        quotes = artQuotes;
    }
    else{
        quotes = scienceQuotes;
    }
    currentQuote["index"] = currentQuote["index"] - 1;
    if (currentQuote["index"] == -1 ){
        currentQuote["index"] = 9;
    }
    currentQuote["quotefield"] = quotes;
    const quoteElement = document.querySelector(".quotevalue");
    quoteElement.innerHTML = currentQuote["quotefield"][currentQuote["index"]];
}
function next(){
    const dropdown = document.getElementById("field");
    const selectedField = dropdown.value;
    quotes = null;

    if (selectedField == "philosophy"){
        quotes = philosophyQuotes;
    }
    else if (selectedField == "art"){
        quotes = artQuotes;
    }
    else{
        quotes = scienceQuotes;
    }

    currentQuote["quotefield"] = quotes;
    currentQuote["index"] = (currentQuote["index"] + 1) % 10;
    const quoteElement = document.querySelector(".quotevalue");
    quoteElement.innerHTML = currentQuote["quotefield"][currentQuote["index"]];
}
function generate(){
    const font = document.querySelector("#font").value;
    const quoteElement = document.getElementById("quotevalue");
    quoteElement.style.fontSize = font+"px";
}
const options = ["<i class='bx bx-moon'></i>", "<i class='bx bxs-moon'></i>"];
let icon = document.querySelector(".theme");
let isDark = false;

icon.addEventListener("click", () => {
    const body = document.querySelector("body");
    if (isDark) {
        icon.innerHTML = options[0];
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } 
    else {
        icon.innerHTML = options[1];
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }

    isDark = !isDark;
});
