import _shuffle from "lodash/shuffle";

const phraseTuples = [
  [
    "All I feel now is",
    [
      "despair",
      "sadness",
      "pity",
      "misery",
      "loneliness",
      "depression",
      "pain",
      "desperation",
      "sorrow",
      "stress"
    ]
  ],
  [
    "Everything is",
    [
      "worthless",
      "useless",
      "hopeless",
      "futile",
      "pointless",
      "meaningless",
      "miserable",
      "stagnant",
      "hollow",
      "terrible"
    ]
  ],
  [
    "I can't even",
    [
      "do anything anymore",
      "force myself to live",
      "muster the strength to livestream",
      "remember the good times",
      "fake a smile",
      "be helped by anyone",
      "entertain people",
      "think of anything",
      "pull myself together",
      "bring back my life"
    ]
  ],
  [
    "Nothing",
    [
      "will bring her back",
      "will change for good",
      "will help me",
      "is left inside me",
      "has improved",
      "good is coming my way",
      "matters any longer",
      "but despair for me",
      "is funny anymore",
      "works for me"
    ]
  ],
  [
    "I'm just",
    [
      "a shambling husk",
      "a useless garbage",
      "hopeless",
      "a broken man",
      "an empty shell",
      "a lonely human",
      "a boring old man",
      "a miserable person",
      "a waste of life"
    ]
  ]
];

const TWEET_STRUCTURE =
  "${0} and ${1} because ${2}. ${3}. ${4}. That sounds like fun too.";

function getRandomIntBetween(min, max) {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (flooredMax - ceiledMin) + ceiledMin);
}

export function generateTweet() {
  const regex = /([^\.] )([A-Z])(\w)/g;
  const shuffledTuples = _shuffle(phraseTuples);

  const phrase = shuffledTuples.reduce((acc, tuple, i) => {
    const variations = tuple[1];
    const randomIndex = getRandomIntBetween(0, variations.length);
    const phrase = `${tuple[0]} ${variations[randomIndex]}`;
    acc = acc.replace("${" + i + "}", phrase);

    return acc;
  }, TWEET_STRUCTURE);

  return phrase.replace(regex, function (m, p1, p2, p3) {
    return p1 + p2.toLowerCase() + p3;
  });
}

export const OG_TWEET =
  "Reckon I'll just sit in the darkness and regret my every life decision in no particular order. That sounds like fun too.";
