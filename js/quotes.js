const quotes = [
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    quote: "Life is a lively process of becoming.",
    author: "Gen. Douglas MacArthur",
  },
  {
    quote: "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "All great changes are preceded by chaos.",
    author: "Deepak Chopra",
  },
  {
    quote: "Change alone is eternal, perpetual, immortal",
    author: "Arthur Shopenhauer",
  },
  {
    quote: "By changing nothing, nothing changes.",
    author: "Tony Robbins",
  },
  {
    quote: "Change is inevitable. Growth is optional.",
    author: "John C. Maxwell",
  },
  {
    quote: "Change your thinking, change your life.",
    author: "Ernest Holmes",
  },
  {
    quote: "Failure is not fatal, but failure to change might be.",
    author: "John Wooden",
  },
  {
    quote: "Nothing is forever except change.",
    author: "Buddha",
  },
];

const quote = document.querySelector("#quote-text");
const author = document.querySelector("#quote-author");

const randomNextInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const showQuote = () => {
  const randomIndex = randomNextInt(0, quotes.length);
  const randomQuote = quotes[randomIndex];

  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.author;
};

showQuote();
