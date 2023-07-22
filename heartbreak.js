const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const buttonEl = document.getElementById("click-me");

buttonEl.addEventListener("click", () => {
  var quotes = {
    "~Marilyn Monroe" : '"Sometimes good things fall apart so better things can fall together."',

    "~John Green" : '"You can love someone so much, but you can never love people as much as you can miss them."',
    
    "~Lord Byron" : '"The heart will break, but broken love on."',

    "~Margaret George" : '"The cure for a broken heart is simple, my lady. A hot bath and a good night’s sleep"',

    "~Soo Jie" : '"When you are in love, and you get hurt, it’s like a cut — it will heal, but there will always be a scar."',

    "~H.C. Paye" : '"I’d rather love a million times and have my heart broken every time than hold a permanently empty heart forever."',

    "~Faraaz Kazi" : '"Some people are going to leave, but that’s not the end of your story. That’s the end of their part in your story"',

    "~Coco J. Ginger" : '"When we are in love, we are convinced nobody else will do. But as time goes, others do do, and often do do, much much better"',

    "~Khadija Rupa" : '"And they can’t understand, what hurts more — missing the other person, or pretending not to"',

    "~Ella Harper" : '"It’s amazing how someone can break your heart and you can still love them with all the little pieces"',
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  quoteEl.textContent = quote;

  authorEl.textContent = author;
})