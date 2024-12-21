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



const titleCased =  () => {
  

  function capitalize (title){
    let newTitle = ""
    for (let character of title){
      if (newTitle.length === 0){
        character = character.toUpperCase()
      }else if (title[newTitle.length - 1] === " "){
      character = character.toUpperCase()
      }
      newTitle = newTitle + character
    }
    return newTitle
  }


const capitalizedTitles = tutorials.map(capitalize)

return capitalizedTitles

}




  

