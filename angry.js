const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const buttonEl = document.getElementById("click-me");

buttonEl.addEventListener("click", () => {
  var quotes = {
    "~James Thurber" : '"Let us not look back in anger, nor forward in fear, but around in awareness."',
    "~Carl Jung" : '"A man who has not passed through the inferno of his passions has never overcome them."',
    "~Benjamin Franklin" : '"Whatever is begun in anger ends in shame."',
    "~Ralph Waldo Emerson" : '"For every minute you remain angry, you give up sixty seconds of peace of mind."',
    "~Confucius" : '"When anger rises, think of the consequences."',
    "~Douglas Horton" : '"While seeking revenge, dig two graves - one for yourself."',
    "~Aristotle" : '"Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody’s power and is not easy."',
    "~Mark Twain" : '"Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured."',
    "~Dylan Thomas" : '"When one burns one’s bridges, what a very nice fire it makes."',
    "~Buddha" : '"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned."'
  }

  const authors = Object.keys(quotes);

  const author = authors[Math.floor(Math.random() * authors.length)];

  const quote = quotes[author];

  quoteEl.textContent = quote;

  authorEl.textContent = author;

})