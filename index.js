const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    // iterate through individual words in a string
    let words = tutorial.split(" ");
    //execute an iteration inside an iteration & capitalize just the first letter in a word
    return ( words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))//To be back to a string 
    .join(" ")
    );
  })
  
  }

