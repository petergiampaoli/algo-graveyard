//Romance Word Pairs Function
let text =
  "Fall is here, hear the yell Back to school, ring the bell Brand new shoes, walking blues Climb the fence, books and pens I can tell that we are gonna be friends I can tell that we are gonna be friends Walk with me, Suzy Lee Through the park and by the tree We will rest upon the ground And look at all the bugs we've found Safely walk to school without a sound Safely walk to school without a sound Here we are, no one else We walk to school all by ourselves There's dirt on our uniforms From chasing all the ants and worms We clean up and now it's time to learn We clean up and now it's time to learn Numbers, letters, learn to spell Nouns and books and show and tell At playtime we will throw the ball Back to class, through the hall Teacher marks our height against the wall Teacher marks our height against the wall We don't notice any time pass We don't notice anything We sit side-by-side in every class Teacher thinks that I sound funny But she likes the way you sing Tonight I'll dream while I'm in bed When silly thoughts go through my head 'Bout the bugs and alphabet And when I wake tomorrow, I'll bet That you and I will walk together again I can tell that we are gonna be friends Yes, I can tell that we are gonna be friends";

function removePunctuation(text) {
  let newText = '';
  for (i = 0; i < text.length; i++) {
    if (
      text[i] === ',' ||
      text[i] === '.' ||
      text[i] === '!' ||
      text[i] === '?' ||
      text[i] === "'"
    ) {
    } else {
      newText += text[i];
    }
  }
  return newText.toLowerCase();
}

let cleanText = removePunctuation(text).split(' ');

//-------------------------------------------------
let wordBank = wordPairs(cleanText);

function wordPairs(arr) {
  let pairs = {};
  for (i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1, i + 2) == 0) {
    } else if (pairs[arr[i]]) {
      pairs[arr[i]].push(arr[i + 1]);
    } else {
      pairs[arr[i]] = arr.slice(i + 1, i + 2);
    }
  }
  return pairs;
}

function pickRandomWord(obj) {
  var result;
  var count = 0;
  for (var key in obj) if (Math.random() < 1 / ++count) result = key;
  return result;
}

//---------------------------------------------------------

function writeLine(word, num) {
  let sentence = '';
  if (num < 1) {
    sentence += word + '. ';
  } else if (wordBank[word] === undefined) {
    sentence += writeLine(pickRandomWord(wordBank), num - 1);
  } else if (wordBank[word].length > 1) {
    sentence +=
      word +
      ' ' +
      writeLine(
        wordBank[word][Math.floor(Math.random() * wordBank[word].length)],
        num - 1
      );
  } else {
    sentence += word + ' ' + writeLine(wordBank[word], num - 1);
  }
  return sentence;
}

let finalPoem = '';
function generatePoem(corpus, num) {
  let cleanText = removePunctuation(corpus).split(' ');
  let wordBank = wordPairs(cleanText);
  let poemLine = writeLine(pickRandomWord(wordBank), 13);

  if (num < 1) {
  } else {
    finalPoem +=
      poemLine.charAt(0).toUpperCase() +
      poemLine.slice(1) +
      generatePoem(corpus, num - 1);
  }
  return finalPoem;
}

console.log(generatePoem(text, 7));
