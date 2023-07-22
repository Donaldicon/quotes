const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const buttonEl = document.getElementById("click-me");


buttonEl.addEventListener("click", () => {
  var quotes = {
    "~Mark Twain" : '"Never put off till tomorrow what may be done day after tomorrow just as well."',
    "~Benjamin Franklin" : '"You may delay, but time will not."',
    "~Pablo Picasso" : '“Only put off until tomorrow what you are willing to die having left undone”',
    "~Karen Lamb" : '“A year from now you may wish you had started today.”',
    "~Abraham Lincoln" : '“You cannot escape the responsibility of tomorrow by evading it today.”',
    "~Bill Watterson" : '"A day can really slip by when you are deliberately avoiding what you are supposed to do"',
    "~Shannon L. Alder" : '“Life always begins with one step outside of your comfort zone.”',
    "~Ella Varner" : '“I am a big believer in putting things off, In fact, I even put off procrastinating."',
    "~Isrealmore Ayivor" : '“Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day’s success.”',
    "~Janet Dailey" : '“Someday is not a day of the week.”',
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author];

  quoteEl.textContent = quote;

  authorEl.textContent = author;
})