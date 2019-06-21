var stories = ["You are showering one morning when you notice a tattoo on your body that you’re quite sure you don’t remember getting. What is it, how did you get it, and what does it mean?" , "After a friend or family member's funeral, you come home to a stranger on your doorstep, who tells you that they're not really dead.", "A character wakes up one morning and realizes that their every move and thought is being narrated aloud.", "You find an old disposable camera. You're not sure how old it is or when it was used but its film is finished You get the film developed and are surprised by what you see.", "Two old friends meet to reminisce about old times and find out they have very different perspectives on a shared memory.", "You come home to find all of your possessions on your front lawn and the locks have been changed. You ring the doorbell and a stranger comes to the door and casually says, Hello, how may I help you?", "Your cat (who you called Curious) hasn't come home for a week.", "A double agent is assigned by both of the countries they work for to capture their alias.", "Each morning for 25 years, you and one other person waited at the same bus stop for work. This was the first time they weren't there.", "You find a $100 bill on the street. A few blocks later, you find another. A few blocks later, another..", "You know a friend is hiding something and you need to find out what it is before it puts you in danger. How do you find out what their secret is?"
];



console.log(stories[0]);
var button = document.getElementById("story")
button.addEventListener("click", function(){
  var randomNum = Math.random()
  console.log(randomNum);
  var randomNumBig = randomNum * stories.length
  var randomRound = Math.floor(randomNumBig);
  console.log(randomNum);
  console.log(randomNumBig);
  console.log(randomRound);
  console.log(stories[randomRound]);
 document.getElementById("placeholder").innerHTML = stories[randomRound];

})
