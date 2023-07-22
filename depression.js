
const clickMeEl = document.getElementById("click-me");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

clickMeEl.addEventListener("click", () => {
  var quotes = {
    
    "~Anonymous" : '"Healing is not linear"',

    "~Brooke Davis" : '"Sometimes, life will kick you around but sooner or later,you realize you are not just a survivor. You are a warrior, and you are stronger than anything life throws your way."',

    "~Warrior King" : '"I have endured pain and loss. I have felt broken. I have known hardship, and I have felt lost and alone. But here I stand, trying to move forward, one day at a time. I will remember the lessons in my life because they are making me who I am. Stronger. A warrior."',
    
    "~John White" : '"On particularly rough days when I’m sure I can’t possibly endure, I like to remind myself that my track record for getting through bad days so far is 100%, and that’s pretty good."',

    "~Charles Bukowski" : '"Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside – remembering all the times you’ve felt that way."',

    "~Albert Camus" : '"In the middle of winter I at last discovered that there was in me an invincible summer"',

    "~Unknown" : '"Give yourself another day, another chance. You will find your courage eventually. Don’t give up on yourself just yet."',

    "~John Green" : '"There is hope, even when your brain tells you there isn’t."',

    "~Corrie Ten Boom" : '"Worrying is carrying tomorrow’s load with today’s strength—carrying two days at once. It is moving into tomorrow ahead of time. Worrying doesn’t empty tomorrow of its sorrow, it empties today of its strength."',

    "~Jasmine Warga" : '"You’re like a grey sky. You’re beautiful, even though you don’t want to be."',

    "~Jane Eyre" : '"Even for me life had its gleams of sunshine."',

    "~Ha Jin" : '"You must hold your quiet center, where you do what only you can do."',

    "~Henry Wadsworth" : '"Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad."',

    "~Jodi Picoult" : '"Anxiety is like a rocking chair. It gives you something to do, but it doesn’t get you very far."',

    "~David Mitchell" : '"You are allowed to feel messed up and inside out. It doesn’t mean you’re defective—it just means you’re human."',

    "~Emily Dickinson" : '"Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all."',
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)]

  var quote = quotes[author];

  quoteEl.innerHTML = quote;

  authorEl.innerHTML = author;

})