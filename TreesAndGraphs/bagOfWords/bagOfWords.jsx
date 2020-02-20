// Keep all punctuation
// Treat Punctuation as a word.
// change all text to lowercase
const text = `"So you're going to go through with it, then," Gandalf the Wizard said
slowly.
     "I am," Bilbo replied. "I've been planning this for a long time.
It'll give the Hobbits of the Shire something to talk about for the next
nine days - or ninety-nine, more likely. Anyway, at least I'll have my
little joke."
     "Who will laugh, I wonder?" Gandalf mused aloud, scratching his
beard idly.

     For weeks carts and caravans were coming from all over Middle-earth
to bring provisions for the Grand Old Party, as Bilbo referred to it.
Wagons of food from the Dwarvish mines at Erebor, shiny rocks from the
Sea-elves and fancy seductive packages from southern Mirkwood arrived
daily, making the neighborhood generally more crowded and cluttering up
avenues. Even those who hadn't said anything bad about Bilbo before were
starting to show their annoyance. "Mr. Bilbo Baggins is starting to get a
mite annoying," old Gaffer Gamgee grumbled, standing outside the pub.
"Queer goings-on, and no mistake. Why just yesterday a bunch o' pesky
Wood-elves dragged their cart right acrost my yard and ruined my taters!"
     "A bunch of Men from Bree came to my place yesterday and tried to
sell me some aluminum siding," mused Old Noakes of Bywater. "They said it
was because they had extra after building that horrible Quonset hut over
the Party Tree, and they were trying to unload it. Strange folk
hereabouts."
     "Yes, but it's good for the economy," sneered Bill Ferny, the local
banker. "A lot more money in circulation. Market's been doing well.
Unionization is down because of all the entry-level service positions
that are being created. Widening gap between the haves and have-nots,
don't you think? Good to find work for idle hands."
     "And you don't know nothin' about anythin', Ferny," Gaffer Gamgee
snapped, echoing the popular community sentiment. "Mr. Bilbo Baggins is a
right bastard, as I've often said, and it's small wonder if trouble don't
come of him and his imperialist ways. The Revolution's a'comin', and it's
the likes o'you who'll be the first ag'inst the wall, so sayeth the
Lord." And with that he spat a well-aimed beer-nut into Ferny's glass.

     At last the day of the Big Party arrived. Everywhere there was too
much to eat, and by midafternoon there were broken presents lying all
over the Shire attesting to the low quality of their manufacture. Gandalf
set off a series of fireworks later on in the day, including great
skywriting missiles and little flaming butterflies who took to wing,
sailed off into the Eastfarthing and burned all its trees to the ground.
     The last firework sent up a great black smoke which took the shape
of a giant mountain of fire. A flicker could be seen of a giant dragon
sailing about its peak; after a moment the great dragon went sailing over
the heads of the crowd, causing great panic and consternation and six
outright heart attacks before imploding somewhere over the
Sackville-Baggins' neighborhood, causing considerable property damage
which was never properly repaired for generations afterward.
     "That is the signal for supper!" Bilbo cried out to the survivors,
who were only partly mollified.
     Later on, in the specially-designed quonset hut which Bilbo had
built especially for the occasion, all his friends and neighbors were
helping themselves to their third helpings of macaroni and cheese and
potato salad (the latter laced liberally with what Bilbo called the
"traditional secret ingredient", which while not actually a narcotic
still had unusual effects, the sum of which were still under scientific
inquiry in some circles), Bilbo stood up and motioned for quiet. "A
speech! A speech!" some of his neighbors cried out in fear.
     My dear Hobbits! Bilbo began. There was much cheering at this,
as Hobbits on the whole are a rather egocentric lot, and anyway the
latest round of potato salad was beginning to kick in.
     My dear Bagginses and Bracegirdles, Boffins and Borfledebees,
Casmits and Cantankerums, Fassbinders and Fazoolas, Wombats and
Wafflefoots. "WaffleFEET!" cried out an irate old man at the back, in
fact the very man who had earned the name when Bilbo's nephew Frodo had
accidentally dropped a hot waffle-iron on his feet some years ago. He had
borne the Bagginses no ill-will, since the settlement was quite generous.
     Wafflefoots, continued Bilbo, oblivious. This is my nine hundreth
birthday! And though one million years is too short a time to have spent
with you all...
     There was some muffled conversation throughout the hall, which Bilbo
took notice of. Well, on bad days it seems like a million years, he
explained. Anyway, though ten billion years is long enough to endure
from all of you, this is IT... I am GOING... I am leaving NOW...
GoodBYE! And with that Bilbo leaped up, tore all his clothes off,
scattering them about the astonished guests' heads, and ran from the
great Hut screaming and flailing his arms.
     Young Frodo looked on in bemusement, refusing to answer questions
from the astonished crowd. Everyone knew, of course, that Bilbo was a big
man in the community. But - and Frodo looked at the crowd, particularly
noting the astonishment on old Lobelia's face - until now, nobody knew just
how big.

     "Well! That's done!" Bilbo laughed, emerging from the bedroom at Bag
End freshly dressed. "You know, Gandalf, I've been wanting to do that for
as long as I can remember. Now I think this would be an excellent time to
leave the Shire, at least before they can all find their torches and
axe-handles. Everything stays with Frodo, as we promised."
     "Including the Ring?" Gandalf asked.
     "Well, yes, I suppose so," Bilbo replied. He pulled the Ring out
from under his cloak, where it hung on a fine golden chain Bilbo had
stolen of old from the Brandybucks. "Still, though, I kind of hate to get
rid of it."
     "This seemed to me to be the only thing worthwhile about your whole
stupid plan," Gandalf said uncharacteristically. "Put it on the mantel
and walk away from it. It has got far too much hold on you. Let it go!"
     "It's mine! And I shall keep it, I say!"
     Gandalf raised himself up to his full height. Bilbo's hand reached
quietly for the hilt of his sword. "It will be my turn to get angry
soon," the wizard intoned. "Listen to me: you must give Frodo the Ring!"
     Bilbo suddenly laughed. "Oh, that?" he grinned. "Well, of course
I'm giving him the Ring! I thought you meant the chain." Slipping the
Ring off the chain he set the circle of gold on the mantel without a
second thought. Then he slipped the chain about his neck. "I love this
chain. Stole it from old Matuseck Brandybuck back before he went senile.
Wouldn't part with it for love nor money. No, I don't give two flies
about the Ring. Nothing but trouble, that thing has been.
     "Well, I'm off, Gandalf! I'm off on the road again, and not a moment
too soon by the look of that crowd down there." And taking an old
walking-stick from the stand by the door Bilbo went outside, taking a
path around the back of the Hill so he could leave unobserved, and as he
left he began singing a song quietly to himself.
`;

const removePunctuation = text => {
  var newText = text.replace(/[.,"'\/#!$%?\^&\*;:{}=\-_`~()]/g, '');
  return newText.toLowerCase();
};
// console.log(removePunctuation(text));
// let cleanText = removePunctuation(text).split(' ');

// //-------------------------------------------------
// let wordBank = wordPairs(cleanText);
const wordBag = text => {
  var newBag = {};
  text.split(' ').forEach(word => {
    typeof newBag[word] === 'undefined' ? (newBag[word] = 1) : newBag[word]++;
  });
  return newBag;
};

const wordPairs = text => {
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
};

// const pickRandomWord = obj => {
//   var result;
//   var count = 0;
//   for (var key in obj) if (Math.random() < 1 / ++count) result = key;
//   return result;
// };

// //---------------------------------------------------------

// const writeLine = (word, num) => {
//   let sentence = '';
//   if (num < 1) {
//     sentence += word + '. ';
//   } else if (wordBank[word] === undefined) {
//     sentence += writeLine(pickRandomWord(wordBank), num - 1);
//   } else if (wordBank[word].length > 1) {
//     sentence +=
//       word +
//       ' ' +
//       writeLine(
//         wordBank[word][Math.floor(Math.random() * wordBank[word].length)],
//         num - 1
//       );
//   } else {
//     sentence += word + ' ' + writeLine(wordBank[word], num - 1);
//   }
//   return sentence;
// };

// var finalPoem = '';

// const generateText = (corpus, num) => {
//   let cleanText = removePunctuation(corpus).split(' ');
//   let wordBank = wordPairs(cleanText);
//   let poemLine = writeLine(pickRandomWord(wordBank), 13);

//   if (num < 1) {
//   } else {
//     finalPoem +=
//       poemLine.charAt(0).toUpperCase() +
//       poemLine.slice(1) +
//       generateText(corpus, num - 1);
//   }
//   return finalPoem;
// };

// console.log(generateText(text, 7));
