import mongoose from "mongoose";
import dotenv from "dotenv";
import {grade2ReadingData} from "./grade2Story.js";
import {grade3ReadingData} from "./grade3Story.js";
import {grade4ReadingData} from "./grade4Story.js";
import {grade5ReadingData} from "./grade5Story.js";
import ReadingComprehension from "../models/ReadingComprehension.js";

dotenv.config();

export const readingData = [

  // 1
  {id:1,
    title: "The Secret Treehouse",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Maya loved exploring the garden behind her house.

One Saturday morning, she noticed a wooden ladder hidden behind some bushes.

She carefully moved the leaves and found a small treehouse high in an old mango tree.

Inside the treehouse was a wooden box.

Maya opened the box and found a notebook, a magnifying glass, and a small compass.

The notebook belonged to her grandfather when he was a child.

It contained drawings of birds, insects, and plants from the garden.

Maya decided to continue her grandfather's work.

She spent the afternoon observing butterflies and writing notes in the notebook.

Before sunset, she discovered a rare blue butterfly sitting on a flower.

Maya drew a picture of it carefully.

She learned that exploring nature required patience and careful observation.
`,

    vocabulary: [
      {
        word: "exploring",
        meaning: "looking around to discover something",
        example: "Maya enjoyed exploring the garden."
      },
      {
        word: "compass",
        meaning: "a tool used to find directions",
        example: "Maya used the compass in the treehouse."
      },
      {
        word: "observing",
        meaning: "watching something carefully",
        example: "She was observing the butterflies."
      },
      {
        word: "rare",
        meaning: "not commonly seen",
        example: "Maya found a rare blue butterfly."
      }
    ],

    questions: [
      {
        question: "Where did Maya find the treehouse?",
        type: "mcq",
        options: [
          "Behind the school",
          "Behind her house",
          "Near a river",
          "Inside a shop"
        ],
        answer: "Behind her house",
        explanation: "Maya discovered the treehouse in the garden behind her house."
      },
      {
        question: "What was inside the wooden box?",
        type: "mcq",
        options: [
          "Toys and books",
          "A ball and a kite",
          "A notebook, magnifying glass, and compass",
          "Food and water"
        ],
        answer: "A notebook, magnifying glass, and compass",
        explanation: "The box contained three useful exploring tools."
      },
      {
        question: "Whose notebook was it?",
        type: "mcq",
        options: [
          "Maya's teacher's",
          "Maya's friend's",
          "Maya's grandfather's",
          "Maya's brother's"
        ],
        answer: "Maya's grandfather's",
        explanation: "The notebook had belonged to Maya's grandfather."
      },
      {
        question: "What unusual animal did Maya see?",
        type: "mcq",
        options: [
          "A golden bird",
          "A blue butterfly",
          "A red rabbit",
          "A green frog"
        ],
        answer: "A blue butterfly",
        explanation: "Maya discovered a rare blue butterfly."
      },
      {
        question: "What did Maya learn?",
        type: "mcq",
        options: [
          "Nature is boring",
          "Exploring requires patience and observation",
          "Butterflies are dangerous",
          "Treehouses should be removed"
        ],
        answer: "Exploring requires patience and observation",
        explanation: "Maya learned to explore nature patiently and carefully."
      }
    ],

    isActive: true
  },

  // 2
  {id:2,
    title: "The Little Cloud",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A little cloud floated high above a village.

The cloud was smaller than all the other clouds.

One morning, the wind carried the little cloud toward a dry field.

The plants below were thirsty.

The little cloud wanted to help, but it did not have much water.

It gathered tiny drops from the cool morning air.

Slowly, the drops joined together.

Soon, the little cloud became heavy enough to make a gentle rain.

The plants lifted their leaves.

The farmers smiled when they saw the wet soil.

The little cloud felt proud.

It learned that even something small could make a big difference.
`,

    vocabulary: [
      {
        word: "floated",
        meaning: "moved gently through the air",
        example: "The cloud floated above the village."
      },
      {
        word: "thirsty",
        meaning: "needing water",
        example: "The plants were thirsty."
      },
      {
        word: "gathered",
        meaning: "collected together",
        example: "The cloud gathered tiny drops."
      },
      {
        word: "difference",
        meaning: "a change or effect",
        example: "The rain made a big difference."
      }
    ],

    questions: [
      {
        question: "Where did the cloud travel?",
        type: "mcq",
        options: [
          "Over a mountain",
          "Toward a dry field",
          "Into a house",
          "Across an ocean"
        ],
        answer: "Toward a dry field",
        explanation: "The wind carried the cloud toward a dry field."
      },
      {
        question: "Why did the plants need help?",
        type: "mcq",
        options: [
          "They were cold",
          "They were thirsty",
          "They were too large",
          "They were sleeping"
        ],
        answer: "They were thirsty",
        explanation: "The plants needed water."
      },
      {
        question: "What did the cloud collect?",
        type: "mcq",
        options: [
          "Leaves",
          "Snow",
          "Tiny drops of water",
          "Dust"
        ],
        answer: "Tiny drops of water",
        explanation: "The cloud gathered water drops from the cool morning air."
      },
      {
        question: "What happened after the cloud became heavy?",
        type: "mcq",
        options: [
          "It disappeared",
          "It made gentle rain",
          "It became a bird",
          "It moved underground"
        ],
        answer: "It made gentle rain",
        explanation: "The heavy cloud produced rain."
      },
      {
        question: "What lesson did the cloud learn?",
        type: "mcq",
        options: [
          "Small things cannot help",
          "Rain is dangerous",
          "Even something small can make a big difference",
          "Plants do not need water"
        ],
        answer: "Even something small can make a big difference",
        explanation: "The little cloud helped the thirsty plants."
      }
    ],

    isActive: true
  },

  // 3
  {id:3,
    title: "The Missing Library Book",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Ravi visited the school library every Friday.

One Friday, he wanted to read his favorite book about space.

When he reached the shelf, the book was missing.

Ravi looked under the table and behind the chairs.

He asked the librarian for help.

Together, they checked the borrowing list.

The book had been borrowed by Sara.

Ravi found Sara reading it near the school garden.

Sara apologized because she had forgotten to return it.

She gave the book back to the librarian.

Ravi waited patiently until it was available again.

The librarian thanked both children for taking care of the book.

Ravi learned that library books should be returned on time so everyone can enjoy them.
`,

    vocabulary: [
      {
        word: "shelf",
        meaning: "a flat place where books or objects are kept",
        example: "The book was usually on the shelf."
      },
      {
        word: "borrowed",
        meaning: "taken for a while and meant to be returned",
        example: "Sara had borrowed the book."
      },
      {
        word: "apologized",
        meaning: "said sorry",
        example: "Sara apologized for forgetting the book."
      },
      {
        word: "available",
        meaning: "ready for someone to use",
        example: "Ravi waited until the book was available."
      }
    ],

    questions: [
      {
        question: "What did Ravi want to read?",
        type: "mcq",
        options: [
          "A book about animals",
          "A book about space",
          "A cooking book",
          "A story about pirates"
        ],
        answer: "A book about space",
        explanation: "Ravi wanted his favorite space book."
      },
      {
        question: "Who had borrowed the book?",
        type: "mcq",
        options: ["Ravi", "Sara", "The teacher", "The librarian"],
        answer: "Sara",
        explanation: "The borrowing list showed that Sara had the book."
      },
      {
        question: "Where did Ravi find Sara?",
        type: "mcq",
        options: [
          "In the classroom",
          "Near the school garden",
          "At the bus stop",
          "In the playground"
        ],
        answer: "Near the school garden",
        explanation: "Sara was reading near the school garden."
      },
      {
        question: "Why did Sara apologize?",
        type: "mcq",
        options: [
          "She lost the book",
          "She damaged the book",
          "She forgot to return it",
          "She did not like the book"
        ],
        answer: "She forgot to return it",
        explanation: "Sara had forgotten to return the library book."
      },
      {
        question: "What lesson did Ravi learn?",
        type: "mcq",
        options: [
          "Books should be kept forever",
          "Library books should be returned on time",
          "Libraries are boring",
          "Children should not read"
        ],
        answer: "Library books should be returned on time",
        explanation: "Returning books on time allows everyone to enjoy them."
      }
    ],

    isActive: true
  },

  // 4
  {id:4,
    title: "The Clever Ant",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
An ant lived near a large garden.

One afternoon, she found a piece of bread near a picnic table.

The bread was much bigger than the ant.

She tried to carry it alone, but it was too heavy.

Instead of giving up, she returned to her nest.

She called several ants to help her.

Together, they carried the bread piece by piece.

They carefully moved it around a puddle and under a small leaf.

Finally, they reached their nest.

The ants shared the food with the younger ants.

The little ant was happy because she had learned that teamwork could solve difficult problems.
`,

    vocabulary: [
      {
        word: "piece",
        meaning: "a part of something",
        example: "The ant found a piece of bread."
      },
      {
        word: "heavy",
        meaning: "weighing a lot",
        example: "The bread was too heavy."
      },
      {
        word: "teamwork",
        meaning: "working together",
        example: "Teamwork helped the ants carry the bread."
      },
      {
        word: "younger",
        meaning: "less old",
        example: "The food was shared with younger ants."
      }
    ],

    questions: [
      {
        question: "What did the ant find?",
        type: "mcq",
        options: [
          "A piece of bread",
          "A leaf",
          "A flower",
          "A seed"
        ],
        answer: "A piece of bread",
        explanation: "The ant found bread near a picnic table."
      },
      {
        question: "Why could she not carry it alone?",
        type: "mcq",
        options: [
          "It was too heavy",
          "It was too small",
          "She was sleeping",
          "It was wet"
        ],
        answer: "It was too heavy",
        explanation: "The bread was much bigger and heavier than the ant."
      },
      {
        question: "Who helped the ant?",
        type: "mcq",
        options: [
          "Birds",
          "Butterflies",
          "Other ants",
          "Children"
        ],
        answer: "Other ants",
        explanation: "The ant called several ants to help."
      },
      {
        question: "How did the ants move around the puddle?",
        type: "mcq",
        options: [
          "They flew",
          "They moved around it",
          "They swam",
          "They jumped into it"
        ],
        answer: "They moved around it",
        explanation: "The ants carefully moved the bread around the puddle."
      },
      {
        question: "What lesson did the ant learn?",
        type: "mcq",
        options: [
          "Never share food",
          "Teamwork can solve difficult problems",
          "Bread is dangerous",
          "Ants should work alone"
        ],
        answer: "Teamwork can solve difficult problems",
        explanation: "The ants succeeded by working together."
      }
    ],

    isActive: true
  },

  // 5
  {id:5,
    title: "The Rainy Day Rescue",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Heavy rain began while Neha was walking home from school.

She noticed a small puppy hiding beneath a bench.

The puppy was wet and trembling.

Neha could not take the puppy home without asking her parents.

She called her mother and explained what had happened.

Her mother told her to stay with the puppy in a safe place.

Neha used her umbrella to keep the puppy dry.

Soon, a man came looking for his lost puppy.

He showed Neha a photograph of the puppy.

Neha was happy to see that they matched.

The man thanked Neha for staying with the puppy.

Neha learned that helping an animal also means being careful and responsible.
`,

    vocabulary: [
      {
        word: "trembling",
        meaning: "shaking because of fear or cold",
        example: "The puppy was trembling in the rain."
      },
      {
        word: "responsible",
        meaning: "taking care of something properly",
        example: "Neha acted in a responsible way."
      },
      {
        word: "photograph",
        meaning: "a picture taken with a camera",
        example: "The man showed a photograph of his puppy."
      },
      {
        word: "matched",
        meaning: "was the same as something else",
        example: "The puppy matched the photograph."
      }
    ],

    questions: [
      {
        question: "What was the weather like?",
        type: "mcq",
        options: [
          "Sunny",
          "Windy",
          "Rainy",
          "Snowy"
        ],
        answer: "Rainy",
        explanation: "Heavy rain began while Neha was walking home."
      },
      {
        question: "Where was the puppy hiding?",
        type: "mcq",
        options: [
          "Under a tree",
          "Beneath a bench",
          "Inside a shop",
          "Behind a car"
        ],
        answer: "Beneath a bench",
        explanation: "Neha found the puppy beneath a bench."
      },
      {
        question: "What did Neha use to protect the puppy?",
        type: "mcq",
        options: [
          "A blanket",
          "Her umbrella",
          "A box",
          "Her school bag"
        ],
        answer: "Her umbrella",
        explanation: "Neha used her umbrella to keep the puppy dry."
      },
      {
        question: "How did the man prove the puppy was his?",
        type: "mcq",
        options: [
          "He called the puppy",
          "He showed a photograph",
          "He brought a toy",
          "He asked the teacher"
        ],
        answer: "He showed a photograph",
        explanation: "The man showed a photograph that matched the puppy."
      },
      {
        question: "What did Neha learn?",
        type: "mcq",
        options: [
          "Animals should be ignored",
          "Helping animals requires care and responsibility",
          "Rain is always dangerous",
          "Puppies cannot be helped"
        ],
        answer: "Helping animals requires care and responsibility",
        explanation: "Neha helped while also making sure to act safely."
      }
    ],

    isActive: true
  },

  // 6
  {id:6,
    title: "The Moonlight Garden",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Every night, Tara looked at the garden from her bedroom window.

One evening, the moon was especially bright.

Tara noticed that several white flowers seemed to glow in the moonlight.

She went outside with her father.

They discovered that the flowers opened only at night.

Tiny moths flew from flower to flower.

Tara watched quietly so she would not disturb them.

Her father explained that some plants and animals are active at night.

Tara wrote about the experience in her science notebook.

She decided that nature could be full of surprises even after the sun went down.
`,

    vocabulary: [
      {
        word: "glow",
        meaning: "to shine softly",
        example: "The flowers seemed to glow."
      },
      {
        word: "moths",
        meaning: "small flying insects related to butterflies",
        example: "Tiny moths flew around the flowers."
      },
      {
        word: "disturb",
        meaning: "to interrupt or bother",
        example: "Tara did not want to disturb the moths."
      },
      {
        word: "active",
        meaning: "moving or doing something",
        example: "Some animals are active at night."
      }
    ],

    questions: [
      {
        question: "When did Tara notice the flowers?",
        type: "mcq",
        options: [
          "At sunrise",
          "At noon",
          "At night",
          "During school"
        ],
        answer: "At night",
        explanation: "Tara noticed them while looking at the garden at night."
      },
      {
        question: "What made the garden bright?",
        type: "mcq",
        options: [
          "A lamp",
          "The moon",
          "A flashlight",
          "A fire"
        ],
        answer: "The moon",
        explanation: "The bright moonlight illuminated the garden."
      },
      {
        question: "What insects visited the flowers?",
        type: "mcq",
        options: [
          "Bees",
          "Ants",
          "Moths",
          "Ladybugs"
        ],
        answer: "Moths",
        explanation: "Tiny moths flew from flower to flower."
      },
      {
        question: "Why did Tara watch quietly?",
        type: "mcq",
        options: [
          "She was sleepy",
          "She did not want to disturb the moths",
          "She was afraid",
          "She wanted to go inside"
        ],
        answer: "She did not want to disturb the moths",
        explanation: "Tara wanted to observe the moths carefully."
      },
      {
        question: "What did Tara learn?",
        type: "mcq",
        options: [
          "Nature has no surprises",
          "Only daytime is interesting",
          "Nature can be full of surprises at night",
          "Flowers never open"
        ],
        answer: "Nature can be full of surprises at night",
        explanation: "Tara discovered interesting nighttime activity."
      }
    ],

    isActive: true
  },

  // 7
  {id:7,
    title: "The Floating Boat Race",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Arun and his sister Meera built small boats from paper.

They wanted to race them in a shallow stream near their house.

Arun made his boat very wide.

Meera made hers narrow and long.

When they placed the boats in the water, Arun's boat moved slowly.

Meera's boat moved quickly with the current.

Arun wondered why.

Their father explained that the shape and weight of a boat can affect how it moves.

Arun changed his design and made the bottom flatter.

They tested the new boat several times.

Eventually, Arun's boat moved more smoothly.

The children learned that testing and changing an idea can help solve a problem.
`,

    vocabulary: [
      {
        word: "shallow",
        meaning: "not deep",
        example: "They played near the shallow stream."
      },
      {
        word: "current",
        meaning: "the movement of water",
        example: "The boat moved with the current."
      },
      {
        word: "design",
        meaning: "the way something is planned or made",
        example: "Arun changed his boat design."
      },
      {
        word: "smoothly",
        meaning: "in an easy and steady way",
        example: "The new boat moved smoothly."
      }
    ],

    questions: [
      {
        question: "What did Arun and Meera make?",
        type: "mcq",
        options: [
          "Paper boats",
          "Kites",
          "Wooden houses",
          "Paper planes"
        ],
        answer: "Paper boats",
        explanation: "They built small boats from paper."
      },
      {
        question: "Which boat moved faster at first?",
        type: "mcq",
        options: [
          "Arun's",
          "Meera's",
          "Both moved the same",
          "Neither moved"
        ],
        answer: "Meera's",
        explanation: "Meera's narrow boat moved faster with the current."
      },
      {
        question: "What affected the movement of the boats?",
        type: "mcq",
        options: [
          "Their color only",
          "Their shape and weight",
          "The children's names",
          "The weather only"
        ],
        answer: "Their shape and weight",
        explanation: "Their father explained that shape and weight affect movement."
      },
      {
        question: "What did Arun change?",
        type: "mcq",
        options: [
          "The color",
          "The design",
          "The stream",
          "The weather"
        ],
        answer: "The design",
        explanation: "Arun changed the design of his boat."
      },
      {
        question: "What did the children learn?",
        type: "mcq",
        options: [
          "Never change an idea",
          "Testing and changing ideas can solve problems",
          "Paper cannot float",
          "Streams are dangerous"
        ],
        answer: "Testing and changing ideas can solve problems",
        explanation: "Arun improved his boat by testing a new design."
      }
    ],

    isActive: true
  },

  // 8
  {id:8,
    title: "The Kindness Box",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Mrs. Lina's class had a special box near the classroom door.

It was called the Kindness Box.

Whenever a student helped someone, they could write the kind act on a small piece of paper.

One day, Sam helped a new student find the classroom.

Another day, Aisha shared her crayons with a classmate.

Soon, the box became full.

Mrs. Lina read some of the notes aloud.

The children discovered that many small acts had made their classroom happier.

They decided to continue adding notes.

The class learned that kindness does not always require something big.

Sometimes a small helpful action can make someone feel special.
`,

    vocabulary: [
      {
        word: "kindness",
        meaning: "being caring and helpful",
        example: "Kindness can make people feel happy."
      },
      {
        word: "act",
        meaning: "something a person does",
        example: "Helping someone is a kind act."
      },
      {
        word: "classmate",
        meaning: "a student in the same class",
        example: "Aisha helped her classmate."
      },
      {
        word: "special",
        meaning: "important or different in a good way",
        example: "Kind actions made the children feel special."
      }
    ],

    questions: [
      {
        question: "What was the special box called?",
        type: "mcq",
        options: [
          "The Toy Box",
          "The Kindness Box",
          "The Homework Box",
          "The Art Box"
        ],
        answer: "The Kindness Box",
        explanation: "The classroom had a box called the Kindness Box."
      },
      {
        question: "What did Sam do?",
        type: "mcq",
        options: [
          "He broke a toy",
          "He helped a new student",
          "He painted a wall",
          "He lost his book"
        ],
        answer: "He helped a new student",
        explanation: "Sam helped the new student find the classroom."
      },
      {
        question: "What did Aisha share?",
        type: "mcq",
        options: [
          "Her lunch",
          "Her books",
          "Her crayons",
          "Her shoes"
        ],
        answer: "Her crayons",
        explanation: "Aisha shared her crayons with a classmate."
      },
      {
        question: "What did the class discover?",
        type: "mcq",
        options: [
          "Nobody was helpful",
          "Small acts made the classroom happier",
          "The box was empty",
          "Kindness was difficult"
        ],
        answer: "Small acts made the classroom happier",
        explanation: "The notes showed many small acts of kindness."
      },
      {
        question: "What lesson did the children learn?",
        type: "mcq",
        options: [
          "Kindness must be expensive",
          "Small helpful actions can make people feel special",
          "Only teachers can help",
          "Sharing is not important"
        ],
        answer: "Small helpful actions can make people feel special",
        explanation: "The class learned that even small acts can matter."
      }
    ],

    isActive: true
  },

  // 9
  {id:9,
    title: "The Brave Little Seed",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A tiny seed rested deep beneath the soil.

It could not see the sky.

Above it, rain fell and sunlight warmed the ground.

The seed slowly grew roots.

Then a small green shoot pushed upward.

The soil was hard, but the shoot continued growing.

After several days, it reached the sunlight.

Its first leaves opened.

A gardener noticed the little plant and watered it carefully.

Weeks later, the plant became a strong flower.

The seed had started as something tiny, but with time, water, sunlight, and care, it had grown.

The gardener smiled because patience had helped the little plant become strong.
`,

    vocabulary: [
      {
        word: "soil",
        meaning: "earth where plants grow",
        example: "The seed rested beneath the soil."
      },
      {
        word: "shoot",
        meaning: "a young part of a plant growing upward",
        example: "A green shoot pushed upward."
      },
      {
        word: "roots",
        meaning: "parts of a plant that grow underground",
        example: "The seed slowly grew roots."
      },
      {
        word: "patience",
        meaning: "waiting calmly for something to happen",
        example: "Patience helped the plant grow."
      }
    ],

    questions: [
      {
        question: "Where was the seed?",
        type: "mcq",
        options: [
          "In a tree",
          "Under the soil",
          "On a roof",
          "In a pond"
        ],
        answer: "Under the soil",
        explanation: "The tiny seed rested deep beneath the soil."
      },
      {
        question: "What grew first?",
        type: "mcq",
        options: [
          "Flowers",
          "Fruit",
          "Roots",
          "Leaves"
        ],
        answer: "Roots",
        explanation: "The seed first grew roots."
      },
      {
        question: "What did the shoot push through?",
        type: "mcq",
        options: [
          "Water",
          "The soil",
          "A rock",
          "A wall"
        ],
        answer: "The soil",
        explanation: "The green shoot pushed upward through the soil."
      },
      {
        question: "What helped the plant grow?",
        type: "mcq",
        options: [
          "Water, sunlight, and care",
          "Only darkness",
          "Only rocks",
          "Only wind"
        ],
        answer: "Water, sunlight, and care",
        explanation: "The plant needed water, sunlight, time, and care."
      },
      {
        question: "What was the final result?",
        type: "mcq",
        options: [
          "The seed disappeared",
          "The plant became a strong flower",
          "The soil dried up",
          "The gardener removed it"
        ],
        answer: "The plant became a strong flower",
        explanation: "After several weeks, the plant became a strong flower."
      }
    ],

    isActive: true
  },

  // 10
  {id:10,
    title: "The Helpful Robot",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Leo built a small robot from a science kit.

The robot could move forward, turn, and carry small objects.

Leo named it Bolt.

One afternoon, Leo dropped several pencils under his desk.

He programmed Bolt to move underneath the desk.

Bolt collected the pencils one at a time.

Then Leo noticed that his grandmother needed help carrying a light box.

Leo programmed Bolt to move slowly while carrying the box.

The robot successfully delivered it.

Leo was excited, but he understood that robots still needed people to give them instructions.

He learned that technology can be useful when people use it carefully and responsibly.
`,

    vocabulary: [
      {
        word: "programmed",
        meaning: "gave instructions to a computer or robot",
        example: "Leo programmed Bolt to move."
      },
      {
        word: "collect",
        meaning: "to gather things together",
        example: "Bolt collected the pencils."
      },
      {
        word: "delivered",
        meaning: "carried something to a person or place",
        example: "Bolt delivered the box."
      },
      {
        word: "responsibly",
        meaning: "in a careful and sensible way",
        example: "Technology should be used responsibly."
      }
    ],

    questions: [
      {
        question: "What did Leo build?",
        type: "mcq",
        options: [
          "A car",
          "A robot",
          "A plane",
          "A boat"
        ],
        answer: "A robot",
        explanation: "Leo built a small robot from a science kit."
      },
      {
        question: "What was the robot's name?",
        type: "mcq",
        options: ["Bolt", "Max", "Rex", "Tom"],
        answer: "Bolt",
        explanation: "Leo named his robot Bolt."
      },
      {
        question: "What did Bolt collect?",
        type: "mcq",
        options: [
          "Books",
          "Pencils",
          "Toys",
          "Shoes"
        ],
        answer: "Pencils",
        explanation: "Bolt collected pencils from under the desk."
      },
      {
        question: "What did Bolt carry for Leo's grandmother?",
        type: "mcq",
        options: [
          "A heavy table",
          "A light box",
          "A chair",
          "A bag of food"
        ],
        answer: "A light box",
        explanation: "Bolt carried a light box for Leo's grandmother."
      },
      {
        question: "What did Leo learn?",
        type: "mcq",
        options: [
          "Robots never need instructions",
          "Technology should be used carefully and responsibly",
          "Robots cannot help",
          "People should not use technology"
        ],
        answer: "Technology should be used carefully and responsibly",
        explanation: "Leo understood that people must give robots instructions and use technology responsibly."
      }
    ],

    isActive: true
  },

  // 11
  {id:11,
    title: "The Rainbow Bridge",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
After a rainy afternoon, Nila saw a beautiful rainbow.

She noticed that one end seemed to touch the hills.

Nila imagined that the rainbow was a bridge.

She asked her mother how rainbows were made.

Her mother explained that sunlight and water droplets work together to create the colors.

Nila looked carefully at the sky.

She could see red, orange, yellow, green, blue, and violet.

The rainbow slowly faded as the clouds moved away.

Nila felt lucky to have seen it.

She learned that some beautiful things appear for only a short time.
`,

    vocabulary: [
      {
        word: "rainbow",
        meaning: "a colorful arc seen in the sky",
        example: "Nila saw a bright rainbow."
      },
      {
        word: "droplets",
        meaning: "very small drops of liquid",
        example: "Water droplets helped form the rainbow."
      },
      {
        word: "faded",
        meaning: "became less bright or clear",
        example: "The rainbow slowly faded."
      },
      {
        word: "violet",
        meaning: "a blue-purple color",
        example: "Violet was one of the rainbow colors."
      }
    ],

    questions: [
      {
        question: "When did Nila see the rainbow?",
        type: "mcq",
        options: [
          "After rain",
          "Before breakfast",
          "At midnight",
          "During a storm"
        ],
        answer: "After rain",
        explanation: "Nila saw the rainbow after a rainy afternoon."
      },
      {
        question: "What did Nila imagine the rainbow was?",
        type: "mcq",
        options: [
          "A road",
          "A bridge",
          "A boat",
          "A tree"
        ],
        answer: "A bridge",
        explanation: "She imagined the rainbow was a bridge to the hills."
      },
      {
        question: "What helps create a rainbow?",
        type: "mcq",
        options: [
          "Moonlight and snow",
          "Sunlight and water droplets",
          "Wind and clouds only",
          "Stars and dust"
        ],
        answer: "Sunlight and water droplets",
        explanation: "Her mother explained that sunlight and water droplets create rainbow colors."
      },
      {
        question: "What happened to the rainbow?",
        type: "mcq",
        options: [
          "It became larger",
          "It faded",
          "It turned black",
          "It moved underground"
        ],
        answer: "It faded",
        explanation: "The rainbow slowly faded as the clouds moved away."
      },
      {
        question: "What lesson did Nila learn?",
        type: "mcq",
        options: [
          "Rainbows last forever",
          "Beautiful things can appear for a short time",
          "Rain is always dangerous",
          "Colors are not important"
        ],
        answer: "Beautiful things can appear for a short time",
        explanation: "Nila understood that the rainbow would not stay forever."
      }
    ],

    isActive: true
  },

  // 12
  {id:13,
    title: "The Forest Picnic",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Kabir and his family went for a picnic near a forest.

They packed sandwiches, fruit, water, and a small blanket.

After lunch, Kabir noticed that some plastic wrappers were lying near a tree.

His mother explained that litter could harm animals.

Kabir put on his gloves and collected the wrappers.

His sister helped him.

They placed everything in a recycling bin.

Soon, a squirrel came near the tree.

Kabir wondered if the squirrel had been searching for food.

His family decided to leave some fruit pieces far from the picnic area.

Before leaving, they checked the ground carefully.

Kabir learned that enjoying nature also means protecting it.
`,

    vocabulary: [
      {
        word: "litter",
        meaning: "rubbish left in a place",
        example: "Litter can harm animals."
      },
      {
        word: "wrappers",
        meaning: "paper or plastic covering used around things",
        example: "Kabir collected plastic wrappers."
      },
      {
        word: "recycling",
        meaning: "processing used materials so they can be used again",
        example: "They used a recycling bin."
      },
      {
        word: "protecting",
        meaning: "keeping something safe from harm",
        example: "People should protect nature."
      }
    ],

    questions: [
      {
        question: "Where did Kabir go?",
        type: "mcq",
        options: [
          "To a forest picnic",
          "To a shopping mall",
          "To a museum",
          "To a beach"
        ],
        answer: "To a forest picnic",
        explanation: "Kabir and his family had a picnic near a forest."
      },
      {
        question: "What did Kabir find near the tree?",
        type: "mcq",
        options: [
          "Flowers",
          "Plastic wrappers",
          "Books",
          "Toys"
        ],
        answer: "Plastic wrappers",
        explanation: "Plastic wrappers were lying near a tree."
      },
      {
        question: "Why could litter be harmful?",
        type: "mcq",
        options: [
          "It can harm animals",
          "It makes food sweeter",
          "It helps plants grow",
          "It makes trees taller"
        ],
        answer: "It can harm animals",
        explanation: "Kabir's mother explained that litter can harm animals."
      },
      {
        question: "Where did they put the rubbish?",
        type: "mcq",
        options: [
          "Under a tree",
          "In a river",
          "In a recycling bin",
          "Inside a bush"
        ],
        answer: "In a recycling bin",
        explanation: "They placed the rubbish in a recycling bin."
      },
      {
        question: "What did Kabir learn?",
        type: "mcq",
        options: [
          "Nature should be ignored",
          "Enjoying nature also means protecting it",
          "Picnics are dangerous",
          "Animals do not need clean places"
        ],
        answer: "Enjoying nature also means protecting it",
        explanation: "Kabir helped clean the area to protect nature."
      }
    ],

    isActive: true
  },

  // 13
  {
    title: "The Lost Kite",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Omar received a bright yellow kite for his birthday.

He took it to the park on a windy afternoon.

The kite rose higher and higher.

Suddenly, the string slipped from Omar's hand.

The kite flew over a fence and landed in a tall tree.

Omar felt disappointed.

He did not climb the tree because it was unsafe.

Instead, he asked a park worker for help.

The worker used a long pole to gently bring the kite down.

Omar thanked him.

He tied the string more securely before flying the kite again.

Omar learned that staying safe is more important than rushing to solve a problem.
`,

    vocabulary: [
      {
        word: "disappointed",
        meaning: "sad because something did not happen as hoped",
        example: "Omar felt disappointed when he lost the kite."
      },
      {
        word: "securely",
        meaning: "firmly and safely",
        example: "Omar tied the string securely."
      },
      {
        word: "gently",
        meaning: "in a soft and careful way",
        example: "The worker gently brought the kite down."
      },
      {
        word: "unsafe",
        meaning: "not safe",
        example: "Climbing the tree was unsafe."
      }
    ],

    questions: [
      {
        question: "What color was Omar's kite?",
        type: "mcq",
        options: [
          "Blue",
          "Green",
          "Yellow",
          "Red"
        ],
        answer: "Yellow",
        explanation: "Omar received a bright yellow kite."
      },
      {
        question: "What happened to the kite?",
        type: "mcq",
        options: [
          "It broke",
          "It landed in a tree",
          "It fell into water",
          "It disappeared"
        ],
        answer: "It landed in a tree",
        explanation: "The kite flew over a fence and landed in a tall tree."
      },
      {
        question: "Why did Omar not climb the tree?",
        type: "mcq",
        options: [
          "He was tired",
          "It was unsafe",
          "He forgot how",
          "He did not like trees"
        ],
        answer: "It was unsafe",
        explanation: "Omar understood that climbing the tree was dangerous."
      },
      {
        question: "Who helped Omar?",
        type: "mcq",
        options: [
          "His teacher",
          "A park worker",
          "His sister",
          "A shopkeeper"
        ],
        answer: "A park worker",
        explanation: "A park worker used a long pole to retrieve the kite."
      },
      {
        question: "What did Omar learn?",
        type: "mcq",
        options: [
          "Kites are dangerous",
          "Safety is more important than rushing",
          "Trees should be climbed",
          "Kites cannot fly"
        ],
        answer: "Safety is more important than rushing",
        explanation: "Omar chose a safe way to solve the problem."
      }
    ],

    isActive: true
  },

  // 14
  {id:14,
    title: "The Singing River",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Every morning, Lina walked beside a small river.

She liked listening to the water.

One day, she noticed that the river sounded different.

The water was moving more slowly than usual.

Lina looked upstream and saw several branches blocking the water.

She called her father.

Together, they contacted the local park workers.

The workers carefully removed the branches.

Soon, the river began flowing normally again.

Lina realized that even small changes in nature can be important.

She decided to observe the river regularly and tell an adult if she noticed something unusual.
`,

    vocabulary: [
      {
        word: "upstream",
        meaning: "toward the direction from which a river flows",
        example: "Lina looked upstream."
      },
      {
        word: "blocking",
        meaning: "stopping something from moving",
        example: "Branches were blocking the water."
      },
      {
        word: "regularly",
        meaning: "often and at planned times",
        example: "Lina decided to observe the river regularly."
      },
      {
        word: "unusual",
        meaning: "different from what is normal",
        example: "The river sounded unusual."
      }
    ],

    questions: [
      {
        question: "What did Lina like listening to?",
        type: "mcq",
        options: [
          "Bird songs",
          "The river",
          "Cars",
          "Music"
        ],
        answer: "The river",
        explanation: "Lina enjoyed listening to the water."
      },
      {
        question: "What was different about the river?",
        type: "mcq",
        options: [
          "It was moving more slowly",
          "It disappeared",
          "It became red",
          "It became very hot"
        ],
        answer: "It was moving more slowly",
        explanation: "The river was flowing more slowly than usual."
      },
      {
        question: "What was blocking the water?",
        type: "mcq",
        options: [
          "Rocks",
          "Branches",
          "Fish",
          "Leaves only"
        ],
        answer: "Branches",
        explanation: "Several branches were blocking the river."
      },
      {
        question: "Who removed the branches?",
        type: "mcq",
        options: [
          "Lina",
          "Her classmates",
          "Park workers",
          "Tourists"
        ],
        answer: "Park workers",
        explanation: "Local park workers safely removed the branches."
      },
      {
        question: "What did Lina learn?",
        type: "mcq",
        options: [
          "Nature never changes",
          "Small changes in nature can be important",
          "Rivers should be ignored",
          "Children should remove large branches"
        ],
        answer: "Small changes in nature can be important",
        explanation: "Lina noticed a small change that affected the river."
      }
    ],

    isActive: true
  },

  // 15
  {id:15,
    title: "The Star Collector",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Every evening, Dev looked at the night sky.

He kept a notebook called his Star Book.

He drew the moon and stars he could see.

One evening, he noticed that some stars appeared brighter than others.

His father gave him a simple telescope.

Dev carefully looked through it.

He discovered that the bright dots were not all stars.

Some were planets that reflected sunlight.

Dev was surprised.

He wrote his observation in his notebook.

He learned that looking carefully can help us discover things that are not easy to see with our eyes alone.
`,

    vocabulary: [
      {
        word: "telescope",
        meaning: "a tool used to see faraway objects in space",
        example: "Dev looked through a telescope."
      },
      {
        word: "reflected",
        meaning: "sent light back",
        example: "Planets reflected sunlight."
      },
      {
        word: "observation",
        meaning: "something noticed by watching carefully",
        example: "Dev wrote his observation in his notebook."
      },
      {
        word: "discover",
        meaning: "to find something new",
        example: "Dev discovered that some bright dots were planets."
      }
    ],

    questions: [
      {
        question: "What did Dev call his notebook?",
        type: "mcq",
        options: [
          "Space Book",
          "Star Book",
          "Moon Book",
          "Science Book"
        ],
        answer: "Star Book",
        explanation: "Dev kept a notebook called his Star Book."
      },
      {
        question: "What tool did his father give him?",
        type: "mcq",
        options: [
          "Microscope",
          "Telescope",
          "Compass",
          "Camera"
        ],
        answer: "Telescope",
        explanation: "His father gave him a simple telescope."
      },
      {
        question: "What did Dev discover?",
        type: "mcq",
        options: [
          "All bright dots were stars",
          "Some bright dots were planets",
          "The moon was a star",
          "Stars disappeared"
        ],
        answer: "Some bright dots were planets",
        explanation: "Dev learned that some bright dots were planets."
      },
      {
        question: "What do planets reflect?",
        type: "mcq",
        options: [
          "Moonlight",
          "Sunlight",
          "Firelight",
          "Starlight only"
        ],
        answer: "Sunlight",
        explanation: "The passage explains that planets reflect sunlight."
      },
      {
        question: "What did Dev learn?",
        type: "mcq",
        options: [
          "Looking carefully can help us discover things",
          "Telescopes are toys",
          "The sky is empty",
          "Stars cannot be studied"
        ],
        answer: "Looking carefully can help us discover things",
        explanation: "Dev discovered something by observing the sky carefully."
      }
    ],

    isActive: true
  },

  // 16
  {id:16,
    title: "The Garden Visitor",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Sana helped her mother water the garden every morning.

One day, she noticed tiny footprints near the flower bed.

The footprints were too small to be from a cat.

Sana looked carefully and found a hedgehog hiding beneath a bush.

She watched from a distance.

The hedgehog slowly came out and searched for insects.

Sana wanted to touch it, but her mother explained that wild animals need space.

They placed a shallow bowl of water nearby.

The hedgehog drank some water and disappeared into the bushes.

Sana learned that caring for animals sometimes means observing them without disturbing them.
`,

    vocabulary: [
      {
        word: "footprints",
        meaning: "marks left by feet",
        example: "Sana found tiny footprints."
      },
      {
        word: "hedgehog",
        meaning: "a small animal with short spines",
        example: "A hedgehog was hiding under the bush."
      },
      {
        word: "wild",
        meaning: "living naturally rather than as a pet",
        example: "The hedgehog was a wild animal."
      },
      {
        word: "disturbing",
        meaning: "bothering or interrupting",
        example: "Sana avoided disturbing the animal."
      }
    ],

    questions: [
      {
        question: "What did Sana notice?",
        type: "mcq",
        options: [
          "Tiny footprints",
          "A broken pot",
          "A bird nest",
          "A large hole"
        ],
        answer: "Tiny footprints",
        explanation: "Sana noticed tiny footprints near the flowers."
      },
      {
        question: "What animal did she find?",
        type: "mcq",
        options: [
          "Rabbit",
          "Hedgehog",
          "Squirrel",
          "Mouse"
        ],
        answer: "Hedgehog",
        explanation: "She found a hedgehog beneath a bush."
      },
      {
        question: "What was the hedgehog searching for?",
        type: "mcq",
        options: [
          "Insects",
          "Flowers",
          "Books",
          "Seeds"
        ],
        answer: "Insects",
        explanation: "The hedgehog searched for insects."
      },
      {
        question: "Why did Sana not touch it?",
        type: "mcq",
        options: [
          "It was sleeping",
          "Wild animals need space",
          "She was afraid of gardens",
          "Her hands were wet"
        ],
        answer: "Wild animals need space",
        explanation: "Her mother explained that wild animals should not be disturbed."
      },
      {
        question: "What did Sana learn?",
        type: "mcq",
        options: [
          "Animals should always be touched",
          "Caring can mean observing without disturbing",
          "Wild animals cannot live near people",
          "Gardens should be empty"
        ],
        answer: "Caring can mean observing without disturbing",
        explanation: "Sana respected the animal's space."
      }
    ],

    isActive: true
  },

  // 17
  {id:17,
    title: "The Broken Clock",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Grandpa had an old clock hanging in his living room.

One morning, the clock stopped working.

Mira wanted to fix it immediately.

Grandpa told her to first find out what was wrong.

They opened the back carefully.

The battery was empty.

Mira replaced it with a new battery.

The clock still did not move.

Grandpa noticed that one small gear was stuck.

He gently moved it with a thin tool.

The clock began ticking again.

Mira learned that solving a problem requires patience and careful checking.
`,

    vocabulary: [
      {
        word: "battery",
        meaning: "a device that provides power",
        example: "The clock needed a new battery."
      },
      {
        word: "gear",
        meaning: "a toothed wheel inside a machine",
        example: "One gear was stuck."
      },
      {
        word: "stuck",
        meaning: "unable to move",
        example: "The gear was stuck."
      },
      {
        word: "checking",
        meaning: "looking carefully to find a problem",
        example: "Careful checking helped them fix the clock."
      }
    ],

    questions: [
      {
        question: "What stopped working?",
        type: "mcq",
        options: [
          "A radio",
          "An old clock",
          "A fan",
          "A lamp"
        ],
        answer: "An old clock",
        explanation: "Grandpa's old clock stopped working."
      },
      {
        question: "What was empty?",
        type: "mcq",
        options: [
          "The clock case",
          "The battery",
          "The room",
          "The toolbox"
        ],
        answer: "The battery",
        explanation: "The battery had no power left."
      },
      {
        question: "What else was wrong?",
        type: "mcq",
        options: [
          "A gear was stuck",
          "The clock was wet",
          "The hands were missing",
          "The glass was broken"
        ],
        answer: "A gear was stuck",
        explanation: "Grandpa noticed a small gear was stuck."
      },
      {
        question: "What did Grandpa use?",
        type: "mcq",
        options: [
          "A hammer",
          "A thin tool",
          "A spoon",
          "A ruler"
        ],
        answer: "A thin tool",
        explanation: "He gently moved the gear with a thin tool."
      },
      {
        question: "What did Mira learn?",
        type: "mcq",
        options: [
          "Problems should be rushed",
          "Careful checking and patience help solve problems",
          "Clocks cannot be fixed",
          "Batteries fix everything"
        ],
        answer: "Careful checking and patience help solve problems",
        explanation: "They found the real problem by checking carefully."
      }
    ],

    isActive: true
  },

  // 18
  {id:18,
    title: "The Snowy Surprise",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Isha lived in a place where snow rarely fell.

One winter morning, she looked outside and saw the ground covered in white.

She quickly put on warm clothes.

Her family went outside to explore.

Isha noticed that the snow was soft in some places and hard in others.

Her father explained that temperature can change the way snow feels.

They built a small snow person.

Later, the sun appeared.

The snow began melting.

Isha watched tiny streams of water form near the garden.

She learned that water can change between solid and liquid forms.
`,

    vocabulary: [
      {
        word: "rarely",
        meaning: "not often",
        example: "Snow rarely fell in Isha's town."
      },
      {
        word: "temperature",
        meaning: "how hot or cold something is",
        example: "Temperature affects snow."
      },
      {
        word: "melting",
        meaning: "changing from solid to liquid",
        example: "The snow started melting."
      },
      {
        word: "solid",
        meaning: "having a firm shape",
        example: "Snow is a solid form of water."
      }
    ],

    questions: [
      {
        question: "What covered the ground?",
        type: "mcq",
        options: [
          "Sand",
          "Snow",
          "Leaves",
          "Grass"
        ],
        answer: "Snow",
        explanation: "The ground was covered in white snow."
      },
      {
        question: "What did Isha notice about the snow?",
        type: "mcq",
        options: [
          "It was all the same",
          "Some was soft and some was hard",
          "It was always warm",
          "It was red"
        ],
        answer: "Some was soft and some was hard",
        explanation: "Isha noticed different textures of snow."
      },
      {
        question: "What can affect snow?",
        type: "mcq",
        options: [
          "Temperature",
          "Music",
          "Books",
          "Colors"
        ],
        answer: "Temperature",
        explanation: "Her father explained that temperature changes snow."
      },
      {
        question: "What happened when the sun appeared?",
        type: "mcq",
        options: [
          "The snow grew",
          "The snow melted",
          "The snow became darker",
          "The snow disappeared instantly"
        ],
        answer: "The snow melted",
        explanation: "The warmer sunlight caused the snow to melt."
      },
      {
        question: "What did Isha learn?",
        type: "mcq",
        options: [
          "Water can change between solid and liquid forms",
          "Snow is not water",
          "Water cannot melt",
          "Snow grows in sunlight"
        ],
        answer: "Water can change between solid and liquid forms",
        explanation: "The snow melted into liquid water."
      }
    ],

    isActive: true
  },

  // 19
  {id:19,
    title: "The School Garden Mystery",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Every Monday, the students watered the school garden.

One morning, they noticed that several sunflower leaves had small holes.

The children wondered what had happened.

Their teacher asked them to observe the plants carefully.

They found tiny green caterpillars underneath the leaves.

The teacher explained that caterpillars sometimes eat plant leaves.

Instead of harming them, the class moved the caterpillars to a different area with wild plants.

A few weeks later, the children saw butterflies near the garden.

They wondered if the caterpillars had changed into butterflies.

The teacher explained that caterpillars go through a life cycle before becoming butterflies.

The children were excited to learn from their garden.
`,

    vocabulary: [
      {
        word: "caterpillar",
        meaning: "a young form of a butterfly or moth",
        example: "A caterpillar was under the leaf."
      },
      {
        word: "cycle",
        meaning: "a series of changes that repeats",
        example: "Butterflies have a life cycle."
      },
      {
        word: "observe",
        meaning: "to watch carefully",
        example: "The students observed the plants."
      },
      {
        word: "wild",
        meaning: "growing naturally",
        example: "The caterpillars were moved to wild plants."
      }
    ],

    questions: [
      {
        question: "What was wrong with the sunflower leaves?",
        type: "mcq",
        options: [
          "They had small holes",
          "They were blue",
          "They were missing",
          "They were covered in snow"
        ],
        answer: "They had small holes",
        explanation: "The students noticed small holes in the leaves."
      },
      {
        question: "What did the students find?",
        type: "mcq",
        options: [
          "Tiny birds",
          "Green caterpillars",
          "Large spiders",
          "Bees"
        ],
        answer: "Green caterpillars",
        explanation: "They found tiny green caterpillars under the leaves."
      },
      {
        question: "What did the class do?",
        type: "mcq",
        options: [
          "They harmed the caterpillars",
          "They moved them to wild plants",
          "They removed all plants",
          "They stopped gardening"
        ],
        answer: "They moved them to wild plants",
        explanation: "The class moved the caterpillars to another area."
      },
      {
        question: "What did the children later see?",
        type: "mcq",
        options: [
          "Butterflies",
          "Frogs",
          "Snakes",
          "Rabbits"
        ],
        answer: "Butterflies",
        explanation: "A few weeks later, they saw butterflies."
      },
      {
        question: "What did the teacher explain?",
        type: "mcq",
        options: [
          "Caterpillars never change",
          "Caterpillars have a life cycle before becoming butterflies",
          "Butterflies eat leaves",
          "Plants become butterflies"
        ],
        answer: "Caterpillars have a life cycle before becoming butterflies",
        explanation: "The teacher explained the butterfly life cycle."
      }
    ],

    isActive: true
  },

  // 20
  {id:20,
    title: "The Friendly Lighthouse",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Near a rocky coast stood a tall lighthouse.

Every night, its bright light turned slowly across the sea.

A boy named Adam visited it with his aunt.

The lighthouse keeper explained that the light helped ships know where the coast was.

Adam climbed the stairs and looked through a window.

He could see boats far away.

That evening, thick fog covered the sea.

The lighthouse light continued shining.

Adam understood why the light was important.

It helped sailors notice the rocky coastline even when visibility was poor.

Adam thanked the lighthouse keeper for showing him how the lighthouse worked.
`,

    vocabulary: [
      {
        word: "lighthouse",
        meaning: "a tall building with a light that helps ships",
        example: "The lighthouse stood near the coast."
      },
      {
        word: "coast",
        meaning: "land beside the sea",
        example: "The lighthouse stood near the rocky coast."
      },
      {
        word: "fog",
        meaning: "a thick cloud near the ground that makes seeing difficult",
        example: "Fog covered the sea."
      },
      {
        word: "visibility",
        meaning: "how clearly something can be seen",
        example: "Visibility was poor because of the fog."
      }
    ],

    questions: [
      {
        question: "Where was the lighthouse?",
        type: "mcq",
        options: [
          "Near a rocky coast",
          "In a forest",
          "On a mountain",
          "Near a school"
        ],
        answer: "Near a rocky coast",
        explanation: "The lighthouse stood near a rocky coast."
      },
      {
        question: "What did the lighthouse light help ships do?",
        type: "mcq",
        options: [
          "Find food",
          "Know where the coast was",
          "Move faster",
          "Catch fish"
        ],
        answer: "Know where the coast was",
        explanation: "The light helped ships recognize the coastline."
      },
      {
        question: "What covered the sea?",
        type: "mcq",
        options: [
          "Rain",
          "Fog",
          "Snow",
          "Smoke"
        ],
        answer: "Fog",
        explanation: "Thick fog covered the sea."
      },
      {
        question: "Why was the light important?",
        type: "mcq",
        options: [
          "It decorated the coast",
          "It helped sailors see the coastline",
          "It made the sea warm",
          "It attracted birds"
        ],
        answer: "It helped sailors see the coastline",
        explanation: "The lighthouse helped sailors when visibility was poor."
      },
      {
        question: "What did Adam understand?",
        type: "mcq",
        options: [
          "Lighthouses are only decorations",
          "Lighthouses help sailors",
          "Boats do not need lights",
          "Fog makes ships faster"
        ],
        answer: "Lighthouses help sailors",
        explanation: "Adam understood the important purpose of the lighthouse."
      }
    ],

    isActive: true
  },

  // 21
  {id:21,
    title: "The Helpful Neighbor",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Mrs. Rao lived next door to a family with a small child.

One morning, the family needed to go to the hospital.

Their garden needed watering.

Mrs. Rao offered to help.

She watered the plants and checked that the gate was closed.

She also placed the family's newspaper near the door.

When the family returned, they were thankful.

The child gave Mrs. Rao a small drawing as a thank-you gift.

Mrs. Rao smiled.

She explained that neighbors can help each other during difficult times.

The family decided to help Mrs. Rao whenever she needed them too.
`,

    vocabulary: [
      {
        word: "neighbor",
        meaning: "a person who lives nearby",
        example: "Mrs. Rao was a helpful neighbor."
      },
      {
        word: "offered",
        meaning: "said that you are willing to help",
        example: "Mrs. Rao offered to water the garden."
      },
      {
        word: "thankful",
        meaning: "feeling grateful",
        example: "The family was thankful for her help."
      },
      {
        word: "difficult",
        meaning: "not easy",
        example: "Neighbors can help during difficult times."
      }
    ],

    questions: [
      {
        question: "Why did the family leave home?",
        type: "mcq",
        options: [
          "They went shopping",
          "They needed to go to the hospital",
          "They went on holiday",
          "They visited school"
        ],
        answer: "They needed to go to the hospital",
        explanation: "The family needed to go to the hospital."
      },
      {
        question: "What did Mrs. Rao do?",
        type: "mcq",
        options: [
          "Cooked dinner",
          "Watered the garden",
          "Painted the house",
          "Cleaned the road"
        ],
        answer: "Watered the garden",
        explanation: "Mrs. Rao helped by watering the plants."
      },
      {
        question: "What did she do with the newspaper?",
        type: "mcq",
        options: [
          "Threw it away",
          "Placed it near the door",
          "Read it",
          "Gave it to a shop"
        ],
        answer: "Placed it near the door",
        explanation: "She placed the family's newspaper near their door."
      },
      {
        question: "What did the child give Mrs. Rao?",
        type: "mcq",
        options: [
          "A flower",
          "A drawing",
          "A toy",
          "A book"
        ],
        answer: "A drawing",
        explanation: "The child gave her a small drawing."
      },
      {
        question: "What lesson did the family learn?",
        type: "mcq",
        options: [
          "Neighbors should never help",
          "Neighbors can help one another",
          "Gardens are unimportant",
          "Families should live alone"
        ],
        answer: "Neighbors can help one another",
        explanation: "The story shows how neighbors can support each other."
      }
    ],

    isActive: true
  },

  // 22
  {id:22,
    title: "The Tiny Explorer",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A tiny beetle lived beneath a large leaf.

One morning, it decided to explore the garden.

It climbed over a stone and crossed a patch of soft soil.

Then it reached a puddle.

The puddle looked enormous to the tiny beetle.

The beetle walked around it instead of trying to cross.

Soon, it found a fallen flower.

The flower became a shelter from the hot sun.

By evening, the beetle returned beneath its leaf.

It had explored only a small part of the garden, but it had discovered many interesting places.

The beetle learned that being small does not stop someone from being curious.
`,

    vocabulary: [
      {
        word: "explore",
        meaning: "to travel around and discover things",
        example: "The beetle explored the garden."
      },
      {
        word: "enormous",
        meaning: "very large",
        example: "The puddle looked enormous to the beetle."
      },
      {
        word: "shelter",
        meaning: "a place that gives protection",
        example: "The fallen flower gave the beetle shelter."
      },
      {
        word: "curious",
        meaning: "wanting to know or discover something",
        example: "The beetle was curious."
      }
    ],

    questions: [
      {
        question: "Where did the beetle live?",
        type: "mcq",
        options: [
          "Under a leaf",
          "Inside a flower",
          "In a tree",
          "Near a river"
        ],
        answer: "Under a leaf",
        explanation: "The beetle lived beneath a large leaf."
      },
      {
        question: "What did the beetle cross?",
        type: "mcq",
        options: [
          "A road",
          "Soft soil",
          "A bridge",
          "A river"
        ],
        answer: "Soft soil",
        explanation: "It crossed a patch of soft soil."
      },
      {
        question: "Why did the beetle walk around the puddle?",
        type: "mcq",
        options: [
          "The puddle looked enormous",
          "It could not see it",
          "It was sleeping",
          "The water was frozen"
        ],
        answer: "The puddle looked enormous",
        explanation: "The puddle looked very large to the tiny beetle."
      },
      {
        question: "What became a shelter?",
        type: "mcq",
        options: [
          "A stone",
          "A fallen flower",
          "A leaf",
          "A branch"
        ],
        answer: "A fallen flower",
        explanation: "The fallen flower protected the beetle from the sun."
      },
      {
        question: "What did the beetle learn?",
        type: "mcq",
        options: [
          "Small creatures cannot explore",
          "Being small does not stop curiosity",
          "Gardens are dangerous",
          "Puddles are always safe"
        ],
        answer: "Being small does not stop curiosity",
        explanation: "The beetle explored despite being tiny."
      }
    ],

    isActive: true
  },

  // 23
  {id:23,
    title: "The Magic Paintbrush",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Ella loved painting pictures.

One afternoon, her grandmother gave her an old paintbrush.

Ella painted a bright red apple.

To her surprise, the apple in her picture looked almost real.

She painted a blue bird.

The bird seemed to move its wings.

Ella became excited.

She painted food for hungry animals.

The food appeared beside them.

Then Ella understood that the brush worked best when she used it to help others.

She painted a small bridge over a muddy path so children could walk safely.

At the end of the day, the brush stopped working.

Ella was not sad.

She realized that kindness was more important than having a magical brush.
`,

    vocabulary: [
      {
        word: "surprise",
        meaning: "something unexpected",
        example: "Ella was surprised by the paintbrush."
      },
      {
        word: "muddy",
        meaning: "covered with wet dirt",
        example: "The path was muddy."
      },
      {
        word: "magical",
        meaning: "having special powers",
        example: "Ella had a magical paintbrush."
      },
      {
        word: "kindness",
        meaning: "being caring and helpful",
        example: "Kindness was more important than magic."
      }
    ],

    questions: [
      {
        question: "Who gave Ella the paintbrush?",
        type: "mcq",
        options: [
          "Her teacher",
          "Her grandmother",
          "Her friend",
          "Her neighbor"
        ],
        answer: "Her grandmother",
        explanation: "Ella's grandmother gave her the old paintbrush."
      },
      {
        question: "What happened when Ella painted an apple?",
        type: "mcq",
        options: [
          "It disappeared",
          "It looked almost real",
          "It became blue",
          "It broke"
        ],
        answer: "It looked almost real",
        explanation: "The painted apple appeared almost real."
      },
      {
        question: "What did Ella paint for the animals?",
        type: "mcq",
        options: [
          "Houses",
          "Food",
          "Trees",
          "Clothes"
        ],
        answer: "Food",
        explanation: "She painted food for hungry animals."
      },
      {
        question: "Why did Ella paint a bridge?",
        type: "mcq",
        options: [
          "For decoration",
          "So children could cross safely",
          "For animals to sleep",
          "To make a playground"
        ],
        answer: "So children could cross safely",
        explanation: "The bridge helped children walk safely over the muddy path."
      },
      {
        question: "What did Ella learn?",
        type: "mcq",
        options: [
          "Magic is most important",
          "Kindness is more important than magic",
          "Painting is useless",
          "Helping others is difficult"
        ],
        answer: "Kindness is more important than magic",
        explanation: "Ella realized that helping others mattered more than the magical brush."
      }
    ],

    isActive: true
  },

  // 24
  {id:24,
    title: "The Busy Bee",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A young bee named Bina lived in a busy hive.

Every morning, she flew to nearby flowers.

She collected nectar and carried it back to the hive.

One windy day, Bina had trouble flying.

She rested on a leaf until the wind became calmer.

Then she continued her work.

When she returned, the other bees were organizing food inside the hive.

Bina helped place the nectar in the correct area.

The queen bee did not do all the work alone.

Every bee had a different job.

Bina learned that a community works well when everyone contributes.
`,

    vocabulary: [
      {
        word: "hive",
        meaning: "a home where bees live",
        example: "Bina lived in a busy hive."
      },
      {
        word: "nectar",
        meaning: "sweet liquid found inside flowers",
        example: "Bina collected nectar."
      },
      {
        word: "contributes",
        meaning: "helps by giving effort",
        example: "Everyone contributes to the community."
      },
      {
        word: "community",
        meaning: "a group living or working together",
        example: "The hive was a busy bee community."
      }
    ],

    questions: [
      {
        question: "Where did Bina live?",
        type: "mcq",
        options: [
          "In a nest",
          "In a hive",
          "In a treehouse",
          "In a cave"
        ],
        answer: "In a hive",
        explanation: "Bina lived in a busy hive."
      },
      {
        question: "What did Bina collect?",
        type: "mcq",
        options: [
          "Leaves",
          "Nectar",
          "Rocks",
          "Seeds"
        ],
        answer: "Nectar",
        explanation: "Bina collected nectar from flowers."
      },
      {
        question: "Why did Bina rest?",
        type: "mcq",
        options: [
          "She was sleepy",
          "The wind was strong",
          "She was hungry",
          "The flowers disappeared"
        ],
        answer: "The wind was strong",
        explanation: "Strong wind made it difficult for Bina to fly."
      },
      {
        question: "Did the queen bee do all the work?",
        type: "mcq",
        options: [
          "Yes",
          "No",
          "Only at night",
          "Only in winter"
        ],
        answer: "No",
        explanation: "Every bee had a different job."
      },
      {
        question: "What did Bina learn?",
        type: "mcq",
        options: [
          "Only one person should work",
          "A community works well when everyone contributes",
          "Bees do not work together",
          "Flowers are not useful"
        ],
        answer: "A community works well when everyone contributes",
        explanation: "The bees worked together by sharing different jobs."
      }
    ],

    isActive: true
  },

  // 25
  {id:25,
    title: "The Old Bicycle",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Rahul found an old bicycle in his grandfather's garage.

The tires were flat and the chain was rusty.

Rahul wanted to ride it immediately.

Grandpa explained that it needed repairs first.

They cleaned the bicycle together.

They pumped air into the tires and added oil to the chain.

Grandpa checked the brakes carefully.

After several repairs, Rahul took the bicycle outside.

He rode slowly at first.

Soon, he became comfortable.

Rahul learned that old things can sometimes be useful again when people take care of them.
`,

    vocabulary: [
      {
        word: "rusty",
        meaning: "covered with rust from age or moisture",
        example: "The bicycle chain was rusty."
      },
      {
        word: "repairs",
        meaning: "fixes made to something broken",
        example: "The bicycle needed repairs."
      },
      {
        word: "brakes",
        meaning: "parts that help a bicycle or vehicle stop",
        example: "Grandpa checked the brakes."
      },
      {
        word: "comfortable",
        meaning: "feeling safe and relaxed",
        example: "Rahul soon felt comfortable riding."
      }
    ],

    questions: [
      {
        question: "Where did Rahul find the bicycle?",
        type: "mcq",
        options: [
          "In a shop",
          "In his grandfather's garage",
          "At school",
          "In a park"
        ],
        answer: "In his grandfather's garage",
        explanation: "The bicycle was in Grandpa's garage."
      },
      {
        question: "What was wrong with the tires?",
        type: "mcq",
        options: [
          "They were too large",
          "They were flat",
          "They were new",
          "They were colorful"
        ],
        answer: "They were flat",
        explanation: "The tires had no air."
      },
      {
        question: "What did Grandpa check carefully?",
        type: "mcq",
        options: [
          "The bell",
          "The brakes",
          "The seat color",
          "The basket"
        ],
        answer: "The brakes",
        explanation: "Grandpa checked the brakes for safety."
      },
      {
        question: "How did Rahul ride at first?",
        type: "mcq",
        options: [
          "Very quickly",
          "Slowly",
          "Without stopping",
          "Backwards"
        ],
        answer: "Slowly",
        explanation: "Rahul rode slowly at first."
      },
      {
        question: "What did Rahul learn?",
        type: "mcq",
        options: [
          "Old things are useless",
          "Old things can become useful again with care",
          "Bicycles cannot be repaired",
          "Repairs are unnecessary"
        ],
        answer: "Old things can become useful again with care",
        explanation: "The repaired bicycle became useful again."
      }
    ],

    isActive: true
  },

  // 26
  {id:26,
    title: "The Desert Flower",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
In a dry desert, a small flower grew between two rocks.

The days were hot, and rain was rare.

The flower had deep roots that reached water below the ground.

Its leaves were small.

These features helped the plant survive in the desert.

One morning, a girl named Huda saw the flower.

She wondered how it could live in such a dry place.

Her teacher explained that plants can have special adaptations that help them survive in different environments.

Huda carefully observed the flower but did not pick it.

She learned that even harsh places can be home to beautiful living things.
`,

    vocabulary: [
      {
        word: "desert",
        meaning: "a very dry place with little rain",
        example: "The flower grew in the desert."
      },
      {
        word: "roots",
        meaning: "parts of a plant that grow underground",
        example: "The flower had deep roots."
      },
      {
        word: "survive",
        meaning: "to continue living",
        example: "The plant could survive in the desert."
      },
      {
        word: "adaptations",
        meaning: "special features that help living things survive",
        example: "Deep roots are useful adaptations."
      }
    ],

    questions: [
      {
        question: "Where did the flower grow?",
        type: "mcq",
        options: [
          "In a rainforest",
          "In a desert",
          "In a pond",
          "In a city"
        ],
        answer: "In a desert",
        explanation: "The flower grew in a dry desert."
      },
      {
        question: "Why were the flower's roots deep?",
        type: "mcq",
        options: [
          "To find water",
          "To find rocks",
          "To make flowers blue",
          "To grow faster"
        ],
        answer: "To find water",
        explanation: "The deep roots reached water below the ground."
      },
      {
        question: "What was unusual about the leaves?",
        type: "mcq",
        options: [
          "They were very large",
          "They were small",
          "They were blue",
          "They were covered in flowers"
        ],
        answer: "They were small",
        explanation: "The plant had small leaves that helped it survive."
      },
      {
        question: "What did Huda do?",
        type: "mcq",
        options: [
          "Picked the flower",
          "Observed the flower carefully",
          "Watered the desert",
          "Moved the rocks"
        ],
        answer: "Observed the flower carefully",
        explanation: "Huda observed the flower without picking it."
      },
      {
        question: "What did Huda learn?",
        type: "mcq",
        options: [
          "Dry places have no life",
          "Plants have adaptations that help them survive",
          "Flowers cannot live in deserts",
          "Deserts always have rain"
        ],
        answer: "Plants have adaptations that help them survive",
        explanation: "The flower's deep roots and small leaves helped it survive."
      }
    ],

    isActive: true
  },

  // 27
  {id:27,
    title: "The Clever Crow",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A thirsty crow found a pot with a little water inside.

The water was too low for the crow to reach with its beak.

The crow looked around.

It noticed several small stones on the ground.

The crow picked up one stone and dropped it into the pot.

The water rose slightly.

The crow continued dropping stones into the pot.

After many stones, the water reached the top.

The crow drank the water and flew away.

The crow solved its problem by thinking carefully and trying a different idea.
`,

    vocabulary: [
      {
        word: "thirsty",
        meaning: "needing water",
        example: "The crow was thirsty."
      },
      {
        word: "noticed",
        meaning: "saw or became aware of something",
        example: "The crow noticed stones nearby."
      },
      {
        word: "slightly",
        meaning: "a little",
        example: "The water rose slightly."
      },
      {
        word: "solve",
        meaning: "to find an answer to a problem",
        example: "The crow solved its problem."
      }
    ],

    questions: [
      {
        question: "What did the crow need?",
        type: "mcq",
        options: [
          "Food",
          "Water",
          "A nest",
          "A friend"
        ],
        answer: "Water",
        explanation: "The crow was thirsty and needed water."
      },
      {
        question: "Why could the crow not drink at first?",
        type: "mcq",
        options: [
          "The pot was broken",
          "The water was too low",
          "The water was hot",
          "The crow was afraid"
        ],
        answer: "The water was too low",
        explanation: "The water was below the crow's reach."
      },
      {
        question: "What did the crow put into the pot?",
        type: "mcq",
        options: [
          "Leaves",
          "Stones",
          "Flowers",
          "Sand"
        ],
        answer: "Stones",
        explanation: "The crow dropped stones into the pot."
      },
      {
        question: "What happened to the water?",
        type: "mcq",
        options: [
          "It disappeared",
          "It rose",
          "It became frozen",
          "It changed color"
        ],
        answer: "It rose",
        explanation: "The stones caused the water level to rise."
      },
      {
        question: "What helped the crow?",
        type: "mcq",
        options: [
          "Giving up",
          "Thinking carefully and trying a new idea",
          "Flying away immediately",
          "Breaking the pot"
        ],
        answer: "Thinking carefully and trying a new idea",
        explanation: "The crow solved the problem by finding another way to reach the water."
      }
    ],

    isActive: true
  },

  // 28
  {id:28,
    title: "The Village Windmill",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A small village had a tall windmill near the fields.

The blades turned whenever the wind blew.

The windmill helped pump water for the crops.

One summer, the wind became weaker.

The farmers noticed that less water was reaching the fields.

They checked the windmill carefully.

One blade had become loose.

A repair worker fixed it.

When strong winds returned, the blades turned again.

Water reached the crops, and the plants stayed healthy.

The villagers learned that machines need regular care to work properly.
`,

    vocabulary: [
      {
        word: "windmill",
        meaning: "a machine with blades moved by wind",
        example: "The windmill stood near the fields."
      },
      {
        word: "pump",
        meaning: "to move water from one place to another",
        example: "The windmill helped pump water."
      },
      {
        word: "loose",
        meaning: "not firmly attached",
        example: "One blade had become loose."
      },
      {
        word: "properly",
        meaning: "in the correct way",
        example: "Machines need care to work properly."
      }
    ],

    questions: [
      {
        question: "Where was the windmill?",
        type: "mcq",
        options: [
          "Near the fields",
          "Inside a house",
          "Near a school",
          "On a beach"
        ],
        answer: "Near the fields",
        explanation: "The windmill stood near the village fields."
      },
      {
        question: "What powered the blades?",
        type: "mcq",
        options: [
          "Water",
          "Wind",
          "Fire",
          "Sunlight"
        ],
        answer: "Wind",
        explanation: "The blades turned when the wind blew."
      },
      {
        question: "What problem happened?",
        type: "mcq",
        options: [
          "A blade became loose",
          "The fields disappeared",
          "The water froze",
          "The windmill fell"
        ],
        answer: "A blade became loose",
        explanation: "One blade became loose and needed repair."
      },
      {
        question: "Who fixed the windmill?",
        type: "mcq",
        options: [
          "A farmer",
          "A repair worker",
          "A child",
          "A teacher"
        ],
        answer: "A repair worker",
        explanation: "A repair worker fixed the loose blade."
      },
      {
        question: "What did the villagers learn?",
        type: "mcq",
        options: [
          "Machines never need care",
          "Machines need regular care",
          "Windmills do not help",
          "Plants do not need water"
        ],
        answer: "Machines need regular care",
        explanation: "The windmill needed repair to work properly."
      }
    ],

    isActive: true
  },

  // 29
  {id:29,
    title: "The Little Musician",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Mina wanted to play the violin.

At first, her sounds were squeaky and uneven.

She felt embarrassed.

Her teacher told her that learning music takes practice.

Mina practiced for fifteen minutes every day.

After one week, her notes became clearer.

After one month, she could play a simple song.

Her teacher asked her to perform at the school assembly.

Mina was nervous, but she remembered her practice.

She played the song from beginning to end.

The audience clapped.

Mina learned that improvement comes slowly when people practice regularly.
`,

    vocabulary: [
      {
        word: "squeaky",
        meaning: "having a high, sharp sound",
        example: "The violin sounded squeaky at first."
      },
      {
        word: "uneven",
        meaning: "not smooth or steady",
        example: "Her first sounds were uneven."
      },
      {
        word: "practice",
        meaning: "doing something repeatedly to improve",
        example: "Mina practiced every day."
      },
      {
        word: "assembly",
        meaning: "a gathering of students",
        example: "Mina performed at the school assembly."
      }
    ],

    questions: [
      {
        question: "What instrument did Mina want to play?",
        type: "mcq",
        options: [
          "Piano",
          "Violin",
          "Drum",
          "Flute"
        ],
        answer: "Violin",
        explanation: "Mina wanted to learn the violin."
      },
      {
        question: "How did the violin sound at first?",
        type: "mcq",
        options: [
          "Perfect",
          "Squeaky and uneven",
          "Very loud",
          "Silent"
        ],
        answer: "Squeaky and uneven",
        explanation: "Her first sounds were squeaky and uneven."
      },
      {
        question: "How often did Mina practice?",
        type: "mcq",
        options: [
          "Once a month",
          "Every day",
          "Once a year",
          "Only at school"
        ],
        answer: "Every day",
        explanation: "Mina practiced for fifteen minutes every day."
      },
      {
        question: "Where did Mina perform?",
        type: "mcq",
        options: [
          "At home",
          "At a school assembly",
          "At a park",
          "At a shop"
        ],
        answer: "At a school assembly",
        explanation: "Mina performed at the school assembly."
      },
      {
        question: "What did Mina learn?",
        type: "mcq",
        options: [
          "Practice does not help",
          "Regular practice leads to improvement",
          "Music is impossible",
          "Performing is always easy"
        ],
        answer: "Regular practice leads to improvement",
        explanation: "Mina improved through regular practice."
      }
    ],

    isActive: true
  },

  // 30
  {id:30,
    title: "The Clean Beach Mission",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A school group visited the beach for a nature activity.

The children were excited to see shells and small crabs.

However, they also noticed plastic bottles and bags near the water.

Their teacher explained that rubbish could hurt sea animals.

The children divided into small groups.

Some collected plastic.

Others collected paper.

The teacher made sure everyone wore gloves.

After an hour, the beach looked cleaner.

The children saw a crab crawling safely toward the water.

They felt proud of their work.

They learned that keeping beaches clean helps protect ocean life.
`,

    vocabulary: [
      {
        word: "mission",
        meaning: "an important task or job",
        example: "The children had a clean beach mission."
      },
      {
        word: "rubbish",
        meaning: "waste or things thrown away",
        example: "Rubbish was near the water."
      },
      {
        word: "divided",
        meaning: "separated into groups",
        example: "The children divided into small groups."
      },
      {
        word: "protect",
        meaning: "keep safe from harm",
        example: "Cleaning beaches helps protect sea animals."
      }
    ],

    questions: [
      {
        question: "Where did the children go?",
        type: "mcq",
        options: [
          "To a forest",
          "To a beach",
          "To a farm",
          "To a mountain"
        ],
        answer: "To a beach",
        explanation: "The school group visited the beach."
      },
      {
        question: "What rubbish did they find?",
        type: "mcq",
        options: [
          "Plastic bottles and bags",
          "Books",
          "Wooden toys",
          "Clothes"
        ],
        answer: "Plastic bottles and bags",
        explanation: "They noticed plastic bottles and bags near the water."
      },
      {
        question: "Why did they wear gloves?",
        type: "mcq",
        options: [
          "To stay warm",
          "For safety while collecting rubbish",
          "To play games",
          "To swim"
        ],
        answer: "For safety while collecting rubbish",
        explanation: "The teacher made sure everyone wore gloves."
      },
      {
        question: "What animal did they see?",
        type: "mcq",
        options: [
          "A dolphin",
          "A crab",
          "A turtle",
          "A whale"
        ],
        answer: "A crab",
        explanation: "The children saw a crab moving toward the water."
      },
      {
        question: "What did they learn?",
        type: "mcq",
        options: [
          "Beaches should stay dirty",
          "Clean beaches help protect ocean life",
          "Crabs cannot live near beaches",
          "Plastic helps sea animals"
        ],
        answer: "Clean beaches help protect ocean life",
        explanation: "The children learned that cleaning beaches protects sea life."
      }
    ],

    isActive: true
  },

  // 31
  {id:31,
    title: "The Patient Gardener",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A boy named Zain planted a sunflower seed.

Every morning, he checked the soil.

For several days, nothing appeared.

Zain wondered if the seed was growing.

His mother told him that roots could be growing underground.

Zain continued watering the soil carefully.

After a week, a tiny green shoot appeared.

Zain was excited.

He continued caring for the plant.

After many weeks, the sunflower grew taller than him.

A large yellow flower opened at the top.

Zain learned that some results take time and patience.
`,

    vocabulary: [
      {
        word: "underground",
        meaning: "below the surface of the ground",
        example: "The roots were growing underground."
      },
      {
        word: "shoot",
        meaning: "a young part of a plant",
        example: "A green shoot appeared."
      },
      {
        word: "results",
        meaning: "things that happen because of an action",
        example: "Good results can take time."
      },
      {
        word: "patience",
        meaning: "waiting calmly",
        example: "Zain learned patience."
      }
    ],

    questions: [
      {
        question: "What did Zain plant?",
        type: "mcq",
        options: [
          "A rose",
          "A sunflower seed",
          "A tree",
          "A carrot"
        ],
        answer: "A sunflower seed",
        explanation: "Zain planted a sunflower seed."
      },
      {
        question: "What was happening underground?",
        type: "mcq",
        options: [
          "The flower opened",
          "Roots were growing",
          "Birds were building nests",
          "The soil disappeared"
        ],
        answer: "Roots were growing",
        explanation: "His mother explained that roots could be growing underground."
      },
      {
        question: "When did the shoot appear?",
        type: "mcq",
        options: [
          "After one hour",
          "After a week",
          "After one year",
          "Immediately"
        ],
        answer: "After a week",
        explanation: "A tiny green shoot appeared after a week."
      },
      {
        question: "How tall did the sunflower become?",
        type: "mcq",
        options: [
          "Shorter than a cup",
          "Taller than Zain",
          "As small as a seed",
          "The same size as a leaf"
        ],
        answer: "Taller than Zain",
        explanation: "The sunflower grew taller than Zain."
      },
      {
        question: "What did Zain learn?",
        type: "mcq",
        options: [
          "Plants grow instantly",
          "Some results take time and patience",
          "Seeds do not need water",
          "Gardening is impossible"
        ],
        answer: "Some results take time and patience",
        explanation: "Zain waited patiently for the seed to grow."
      }
    ],

    isActive: true
  },

  // 32
  {id:32,
    title: "The Mountain Path",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Nora went hiking with her family.

The path became steeper as they climbed.

Her father reminded everyone to walk slowly.

Nora noticed small signs showing the direction.

At one point, the path divided into two routes.

The family stopped to read the map.

They chose the safer route even though it was longer.

Along the way, they saw mountain flowers and a small bird.

After two hours, they reached a viewpoint.

Nora could see the valley below.

She learned that reaching a goal is not always about taking the shortest path.
`,

    vocabulary: [
      {
        word: "steeper",
        meaning: "more sharply rising",
        example: "The mountain path became steeper."
      },
      {
        word: "route",
        meaning: "a way from one place to another",
        example: "They chose a safer route."
      },
      {
        word: "viewpoint",
        meaning: "a place where you can see a wide area",
        example: "They reached a beautiful viewpoint."
      },
      {
        word: "valley",
        meaning: "low land between hills or mountains",
        example: "Nora could see the valley below."
      }
    ],

    questions: [
      {
        question: "What did Nora do with her family?",
        type: "mcq",
        options: [
          "Went swimming",
          "Went hiking",
          "Went shopping",
          "Went fishing"
        ],
        answer: "Went hiking",
        explanation: "Nora went hiking with her family."
      },
      {
        question: "Why did they walk slowly?",
        type: "mcq",
        options: [
          "The path became steep",
          "They were playing",
          "It was raining",
          "They were carrying food"
        ],
        answer: "The path became steep",
        explanation: "Her father reminded them to walk slowly as the path became steeper."
      },
      {
        question: "What did they use at the divided path?",
        type: "mcq",
        options: [
          "A toy",
          "A map",
          "A book",
          "A telescope"
        ],
        answer: "A map",
        explanation: "They stopped to read the map."
      },
      {
        question: "Which route did they choose?",
        type: "mcq",
        options: [
          "The shortest route",
          "The safer route",
          "The most difficult route",
          "A closed route"
        ],
        answer: "The safer route",
        explanation: "They chose the safer route even though it was longer."
      },
      {
        question: "What did Nora learn?",
        type: "mcq",
        options: [
          "The shortest path is always best",
          "Reaching a goal is not always about taking the shortest path",
          "Maps are useless",
          "Hiking has no challenges"
        ],
        answer: "Reaching a goal is not always about taking the shortest path",
        explanation: "The family chose safety instead of the shortest route."
      }
    ],

    isActive: true
  },

  // 33
  {id:33,
    title: "The Friendly Dolphin",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A group of children visited a marine center.

They watched dolphins swimming in a large pool.

One dolphin named Blue jumped high above the water.

The guide explained that dolphins are intelligent animals.

They use sounds to communicate with one another.

The children listened carefully as the dolphins clicked and whistled.

Later, the guide showed them how dolphins use sound to find objects underwater.

The children were amazed.

They learned that animals can communicate in different ways.

The visit made them curious about life beneath the ocean.
`,

    vocabulary: [
      {
        word: "marine",
        meaning: "related to the sea",
        example: "The children visited a marine center."
      },
      {
        word: "intelligent",
        meaning: "able to learn and understand",
        example: "Dolphins are intelligent animals."
      },
      {
        word: "communicate",
        meaning: "to share information",
        example: "Dolphins communicate using sounds."
      },
      {
        word: "underwater",
        meaning: "below the surface of water",
        example: "Dolphins find objects underwater."
      }
    ],

    questions: [
      {
        question: "Where did the children go?",
        type: "mcq",
        options: [
          "A marine center",
          "A farm",
          "A library",
          "A mountain"
        ],
        answer: "A marine center",
        explanation: "They visited a marine center."
      },
      {
        question: "What was the dolphin's name?",
        type: "mcq",
        options: [
          "Blue",
          "Sunny",
          "Splash",
          "Wave"
        ],
        answer: "Blue",
        explanation: "The dolphin was named Blue."
      },
      {
        question: "How do dolphins communicate?",
        type: "mcq",
        options: [
          "By writing",
          "By using sounds",
          "By painting",
          "By waving flags"
        ],
        answer: "By using sounds",
        explanation: "Dolphins use sounds to communicate."
      },
      {
        question: "What did the children hear?",
        type: "mcq",
        options: [
          "Clicks and whistles",
          "Songs",
          "Clapping",
          "Roaring"
        ],
        answer: "Clicks and whistles",
        explanation: "The dolphins made clicking and whistling sounds."
      },
      {
        question: "What did the children learn?",
        type: "mcq",
        options: [
          "Animals cannot communicate",
          "Animals communicate in different ways",
          "Only humans communicate",
          "Dolphins cannot learn"
        ],
        answer: "Animals communicate in different ways",
        explanation: "The visit showed them how dolphins communicate."
      }
    ],

    isActive: true
  },

  // 34
  {id:34,
    title: "The Busy Airport",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Ayaan visited an airport with his father.

He watched planes arrive and leave.

He noticed many people working there.

Some workers helped passengers with bags.

Others checked tickets.

Pilots flew the airplanes, while air traffic controllers helped guide planes safely.

Ayaan was surprised that so many different jobs were needed.

His father explained that airports depend on teamwork.

Ayaan watched a plane take off.

He imagined traveling to different countries one day.
`,

    vocabulary: [
      {
        word: "passengers",
        meaning: "people traveling in a vehicle",
        example: "Passengers waited for their flights."
      },
      {
        word: "pilot",
        meaning: "a person who flies an airplane",
        example: "The pilot flew the airplane."
      },
      {
        word: "controller",
        meaning: "a person who directs or manages something",
        example: "Air traffic controllers guide planes."
      },
      {
        word: "teamwork",
        meaning: "working together",
        example: "Airports depend on teamwork."
      }
    ],

    questions: [
      {
        question: "Where did Ayaan go?",
        type: "mcq",
        options: [
          "A railway station",
          "An airport",
          "A museum",
          "A zoo"
        ],
        answer: "An airport",
        explanation: "Ayaan visited an airport with his father."
      },
      {
        question: "Who flies airplanes?",
        type: "mcq",
        options: [
          "Teachers",
          "Pilots",
          "Doctors",
          "Engineers"
        ],
        answer: "Pilots",
        explanation: "Pilots fly airplanes."
      },
      {
        question: "Who helps guide planes safely?",
        type: "mcq",
        options: [
          "Passengers",
          "Air traffic controllers",
          "Shopkeepers",
          "Drivers"
        ],
        answer: "Air traffic controllers",
        explanation: "Air traffic controllers help guide planes safely."
      },
      {
        question: "Why were there many different jobs?",
        type: "mcq",
        options: [
          "Airports depend on teamwork",
          "Nobody knew what to do",
          "Passengers did all the work",
          "Planes do not need workers"
        ],
        answer: "Airports depend on teamwork",
        explanation: "Many workers cooperate to keep an airport running."
      },
      {
        question: "What did Ayaan imagine?",
        type: "mcq",
        options: [
          "Building a house",
          "Traveling to different countries",
          "Becoming a farmer",
          "Swimming in an ocean"
        ],
        answer: "Traveling to different countries",
        explanation: "Watching the planes made Ayaan imagine future travel."
      }
    ],

    isActive: true
  },

  // 35
  {id:35,
    title: "The Helpful Rain",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
For many weeks, the village had very little rain.

The ponds became smaller.

Farmers worried about their crops.

One evening, dark clouds appeared.

Soon, gentle rain began falling.

The children danced under their umbrellas.

Farmers watched the soil become wet.

The next morning, the plants looked fresh.

The rain filled small ponds and gave water to the crops.

The village animals also found water to drink.

Everyone was thankful.

The villagers learned that water is important for people, plants, and animals.
`,

    vocabulary: [
      {
        word: "pond",
        meaning: "a small area of still water",
        example: "The rain filled the ponds."
      },
      {
        word: "crops",
        meaning: "plants grown for food",
        example: "Farmers worried about their crops."
      },
      {
        word: "gentle",
        meaning: "soft and not strong",
        example: "Gentle rain began falling."
      },
      {
        word: "thankful",
        meaning: "grateful",
        example: "The villagers were thankful for the rain."
      }
    ],

    questions: [
      {
        question: "What did the village have very little of?",
        type: "mcq",
        options: [
          "Sunlight",
          "Rain",
          "Food",
          "Trees"
        ],
        answer: "Rain",
        explanation: "The village had very little rain for many weeks."
      },
      {
        question: "What happened to the ponds?",
        type: "mcq",
        options: [
          "They became smaller",
          "They became mountains",
          "They disappeared instantly",
          "They became frozen"
        ],
        answer: "They became smaller",
        explanation: "The lack of rain caused the ponds to shrink."
      },
      {
        question: "What happened when the clouds appeared?",
        type: "mcq",
        options: [
          "Snow fell",
          "Gentle rain began",
          "The sun disappeared forever",
          "The wind stopped"
        ],
        answer: "Gentle rain began",
        explanation: "The dark clouds brought gentle rain."
      },
      {
        question: "Who needed the water?",
        type: "mcq",
        options: [
          "Only children",
          "People, plants, and animals",
          "Only farmers",
          "Only birds"
        ],
        answer: "People, plants, and animals",
        explanation: "Water was important to all living things in the village."
      },
      {
        question: "What did the villagers learn?",
        type: "mcq",
        options: [
          "Water is not important",
          "Water is important for living things",
          "Rain harms all plants",
          "Ponds are useless"
        ],
        answer: "Water is important for living things",
        explanation: "The rain helped people, crops, animals, and ponds."
      }
    ],

    isActive: true
  },

  // 36
  {id:36,
    title: "The Museum Adventure",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Sara visited a history museum with her class.

She saw old tools, clothes, coins, and maps.

One display showed how people traveled long ago.

There were wooden carts and old boats.

Sara noticed that the tools looked very different from the tools people use today.

Her teacher explained that people invent new tools to make work easier.

Sara wrote three interesting facts in her notebook.

Before leaving, she looked at a large map showing ancient trade routes.

She wondered how people could travel such long distances without airplanes.

Sara learned that studying the past can help us understand how life has changed.
`,

    vocabulary: [
      {
        word: "museum",
        meaning: "a place where important objects are displayed",
        example: "Sara visited a history museum."
      },
      {
        word: "ancient",
        meaning: "very old",
        example: "The map showed ancient trade routes."
      },
      {
        word: "invent",
        meaning: "to create something new",
        example: "People invent tools to make work easier."
      },
      {
        word: "routes",
        meaning: "paths used to travel from one place to another",
        example: "The map showed ancient trade routes."
      }
    ],

    questions: [
      {
        question: "What kind of museum did Sara visit?",
        type: "mcq",
        options: [
          "Science museum",
          "History museum",
          "Art museum",
          "Toy museum"
        ],
        answer: "History museum",
        explanation: "Sara visited a history museum."
      },
      {
        question: "What did she see?",
        type: "mcq",
        options: [
          "Only paintings",
          "Old tools, clothes, coins, and maps",
          "Only animals",
          "Modern cars"
        ],
        answer: "Old tools, clothes, coins, and maps",
        explanation: "The museum displayed many historical objects."
      },
      {
        question: "What showed how people traveled long ago?",
        type: "mcq",
        options: [
          "A video game",
          "Wooden carts and old boats",
          "An airplane",
          "A bicycle"
        ],
        answer: "Wooden carts and old boats",
        explanation: "The display showed old methods of travel."
      },
      {
        question: "What did Sara write?",
        type: "mcq",
        options: [
          "Three interesting facts",
          "A poem",
          "A shopping list",
          "A letter"
        ],
        answer: "Three interesting facts",
        explanation: "Sara wrote three facts in her notebook."
      },
      {
        question: "What did Sara learn?",
        type: "mcq",
        options: [
          "The past never changes",
          "Studying the past helps us understand change",
          "Old tools are useless",
          "People always had airplanes"
        ],
        answer: "Studying the past helps us understand change",
        explanation: "The museum helped Sara understand how life changed."
      }
    ],

    isActive: true
  },

  // 37
  {id:37,
    title: "The Seed Library",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
The community center had a small seed library.

People could take seeds to grow vegetables and flowers.

After their plants produced new seeds, they could bring some back.

A girl named Leena borrowed tomato seeds.

She planted them in her garden.

After several months, the tomato plants produced many tomatoes.

Leena saved some healthy seeds.

She dried them carefully and placed them in a small envelope.

Then she returned them to the seed library.

Other families could use the seeds next season.

Leena learned that sharing seeds could help many people grow food.
`,

    vocabulary: [
      {
        word: "community",
        meaning: "a group of people living or working together",
        example: "The community center had a seed library."
      },
      {
        word: "borrow",
        meaning: "take something and return it later",
        example: "Leena borrowed tomato seeds."
      },
      {
        word: "healthy",
        meaning: "strong and in good condition",
        example: "She saved healthy seeds."
      },
      {
        word: "season",
        meaning: "a part of the year with certain weather",
        example: "Families could plant the seeds next season."
      }
    ],

    questions: [
      {
        question: "Where was the seed library?",
        type: "mcq",
        options: [
          "At the community center",
          "At the airport",
          "At the zoo",
          "At the school bus"
        ],
        answer: "At the community center",
        explanation: "The community center had a seed library."
      },
      {
        question: "What seeds did Leena borrow?",
        type: "mcq",
        options: [
          "Rose seeds",
          "Tomato seeds",
          "Mango seeds",
          "Grass seeds"
        ],
        answer: "Tomato seeds",
        explanation: "Leena borrowed tomato seeds."
      },
      {
        question: "What did the plants produce?",
        type: "mcq",
        options: [
          "Apples",
          "Tomatoes",
          "Flowers only",
          "Potatoes"
        ],
        answer: "Tomatoes",
        explanation: "The tomato plants produced many tomatoes."
      },
      {
        question: "What did Leena save?",
        type: "mcq",
        options: [
          "Leaves",
          "Healthy seeds",
          "Branches",
          "Flowers"
        ],
        answer: "Healthy seeds",
        explanation: "She saved some healthy seeds for the library."
      },
      {
        question: "What did Leena learn?",
        type: "mcq",
        options: [
          "Seeds should never be shared",
          "Sharing seeds can help people grow food",
          "Plants cannot produce seeds",
          "Gardens are unnecessary"
        ],
        answer: "Sharing seeds can help people grow food",
        explanation: "Other families could use the returned seeds."
      }
    ],

    isActive: true
  },

  // 38
  {id:38,
    title: "The Windy Day Experiment",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
During science class, the students made paper objects.

They made a paper leaf, a paper ball, and a paper airplane.

Their teacher took them outside on a windy day.

The students placed the objects on the ground.

The wind pushed the paper leaf easily.

The paper ball rolled across the ground.

The paper airplane lifted briefly into the air.

The students noticed that different shapes moved in different ways.

Their teacher explained that wind can push objects.

The class wrote down their observations.

They learned that experiments help us understand how things work.
`,

    vocabulary: [
      {
        word: "experiment",
        meaning: "a test done to learn something",
        example: "The class did a wind experiment."
      },
      {
        word: "observations",
        meaning: "things noticed during careful watching",
        example: "The students wrote their observations."
      },
      {
        word: "lifted",
        meaning: "moved upward",
        example: "The paper airplane lifted into the air."
      },
      {
        word: "shapes",
        meaning: "the forms of objects",
        example: "Different shapes moved differently."
      }
    ],

    questions: [
      {
        question: "What did the students make?",
        type: "mcq",
        options: [
          "Paper objects",
          "Wooden toys",
          "Clay animals",
          "Glass bottles"
        ],
        answer: "Paper objects",
        explanation: "The students made paper objects."
      },
      {
        question: "Which object lifted into the air?",
        type: "mcq",
        options: [
          "Paper leaf",
          "Paper ball",
          "Paper airplane",
          "Paper square"
        ],
        answer: "Paper airplane",
        explanation: "The paper airplane lifted briefly."
      },
      {
        question: "What did the wind do to the paper ball?",
        type: "mcq",
        options: [
          "Made it disappear",
          "Rolled it across the ground",
          "Made it wet",
          "Changed its color"
        ],
        answer: "Rolled it across the ground",
        explanation: "The wind pushed the ball so it rolled."
      },
      {
        question: "What did the students notice?",
        type: "mcq",
        options: [
          "All shapes moved the same",
          "Different shapes moved differently",
          "Wind cannot move paper",
          "Paper is too heavy"
        ],
        answer: "Different shapes moved differently",
        explanation: "The objects responded differently to the wind."
      },
      {
        question: "What did the class learn?",
        type: "mcq",
        options: [
          "Experiments help us understand things",
          "Wind cannot be studied",
          "Paper cannot move",
          "Shapes do not matter"
        ],
        answer: "Experiments help us understand things",
        explanation: "The experiment helped the students learn about wind."
      }
    ],

    isActive: true
  },

  // 39
  {id:39,
    title: "The Caring Vet",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Nadia wanted to become a veterinarian.

One Saturday, she visited a veterinary clinic with her aunt.

A small dog had hurt its paw.

The veterinarian examined the paw carefully.

She cleaned it and placed a soft bandage around it.

Nadia watched quietly.

The veterinarian explained that animals cannot tell us exactly where they hurt.

That is why veterinarians need to observe animals carefully.

The dog soon wagged its tail.

Nadia smiled.

She learned that caring for animals requires patience, knowledge, and kindness.
`,

    vocabulary: [
      {
        word: "veterinarian",
        meaning: "a doctor who cares for animals",
        example: "The veterinarian examined the dog."
      },
      {
        word: "clinic",
        meaning: "a place where medical care is given",
        example: "Nadia visited a veterinary clinic."
      },
      {
        word: "bandage",
        meaning: "material used to cover and protect an injury",
        example: "The veterinarian placed a bandage on the paw."
      },
      {
        word: "observe",
        meaning: "watch carefully",
        example: "Veterinarians observe animals carefully."
      }
    ],

    questions: [
      {
        question: "What did Nadia want to become?",
        type: "mcq",
        options: [
          "A teacher",
          "A veterinarian",
          "A pilot",
          "A farmer"
        ],
        answer: "A veterinarian",
        explanation: "Nadia wanted to become a veterinarian."
      },
      {
        question: "What was wrong with the dog?",
        type: "mcq",
        options: [
          "It had hurt its paw",
          "It had lost its collar",
          "It was hungry",
          "It could not bark"
        ],
        answer: "It had hurt its paw",
        explanation: "The dog had an injured paw."
      },
      {
        question: "What did the veterinarian put on the paw?",
        type: "mcq",
        options: [
          "A shoe",
          "A soft bandage",
          "A glove",
          "A towel"
        ],
        answer: "A soft bandage",
        explanation: "The veterinarian placed a soft bandage on the paw."
      },
      {
        question: "Why must veterinarians observe animals carefully?",
        type: "mcq",
        options: [
          "Animals cannot tell exactly where they hurt",
          "Animals cannot walk",
          "Animals never make sounds",
          "Animals do not need care"
        ],
        answer: "Animals cannot tell exactly where they hurt",
        explanation: "Veterinarians need observation to understand animal injuries."
      },
      {
        question: "What did Nadia learn?",
        type: "mcq",
        options: [
          "Animals do not need doctors",
          "Caring for animals requires patience, knowledge, and kindness",
          "Veterinarians only feed animals",
          "Dogs cannot recover"
        ],
        answer: "Caring for animals requires patience, knowledge, and kindness",
        explanation: "The veterinarian showed all three qualities."
      }
    ],

    isActive: true
  },

  // 40
  {id:40,
    title: "The Paper Bridge Challenge",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
The teacher gave the class a challenge.

They had to build a bridge using only paper.

Riya folded several sheets into different shapes.

Her first bridge collapsed when she placed a small book on it.

She tried again.

This time, she folded the paper into strong triangular shapes.

The new bridge held the book.

Riya was surprised.

Her teacher explained that changing the shape can make a material stronger.

The class tested several designs.

They discovered that some designs held more weight than others.

Riya learned that mistakes can help us improve our ideas.
`,

    vocabulary: [
      {
        word: "challenge",
        meaning: "a difficult task",
        example: "The paper bridge was a challenge."
      },
      {
        word: "collapsed",
        meaning: "fell down suddenly",
        example: "The first bridge collapsed."
      },
      {
        word: "triangular",
        meaning: "having the shape of a triangle",
        example: "Riya used triangular folds."
      },
      {
        word: "material",
        meaning: "what something is made from",
        example: "Paper was the material used for the bridge."
      }
    ],

    questions: [
      {
        question: "What did the class build?",
        type: "mcq",
        options: [
          "A paper bridge",
          "A wooden house",
          "A robot",
          "A paper plane"
        ],
        answer: "A paper bridge",
        explanation: "The class had to build a bridge using paper."
      },
      {
        question: "What happened to Riya's first bridge?",
        type: "mcq",
        options: [
          "It flew away",
          "It collapsed",
          "It became larger",
          "It changed color"
        ],
        answer: "It collapsed",
        explanation: "The first bridge fell when a book was placed on it."
      },
      {
        question: "What shape did Riya use in her second design?",
        type: "mcq",
        options: [
          "Circular",
          "Triangular",
          "Square only",
          "Oval"
        ],
        answer: "Triangular",
        explanation: "Riya used strong triangular folds."
      },
      {
        question: "What did the second bridge hold?",
        type: "mcq",
        options: [
          "A small book",
          "A chair",
          "A bicycle",
          "A box of toys"
        ],
        answer: "A small book",
        explanation: "The new bridge successfully held a small book."
      },
      {
        question: "What did Riya learn?",
        type: "mcq",
        options: [
          "Mistakes are useless",
          "Mistakes can help improve ideas",
          "Paper cannot be strong",
          "Bridges cannot be tested"
        ],
        answer: "Mistakes can help improve ideas",
        explanation: "Riya changed her design after her first attempt failed."
      }
    ],

    isActive: true
  },

  // 41
  {id:14,
    title: "The Little Firefly",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A young firefly lived near a quiet pond.

At night, the fireflies blinked their lights.

The young firefly wondered why they glowed.

Its mother explained that fireflies use their lights to communicate.

The young firefly practiced blinking.

At first, its light was very weak.

Every night, it practiced again.

Soon, its light became brighter.

One evening, it joined the other fireflies.

The pond looked like it was covered with tiny stars.

The young firefly felt happy.

It learned that practice can help even small creatures develop new skills.
`,

    vocabulary: [
      {
        word: "firefly",
        meaning: "a small insect that can produce light",
        example: "The firefly glowed at night."
      },
      {
        word: "blinked",
        meaning: "turned on and off quickly",
        example: "The fireflies blinked their lights."
      },
      {
        word: "communicate",
        meaning: "share information",
        example: "Fireflies use light to communicate."
      },
      {
        word: "develop",
        meaning: "grow or improve",
        example: "Practice helps develop new skills."
      }
    ],

    questions: [
      {
        question: "Where did the firefly live?",
        type: "mcq",
        options: [
          "Near a pond",
          "In a desert",
          "Inside a house",
          "On a mountain"
        ],
        answer: "Near a pond",
        explanation: "The young firefly lived near a quiet pond."
      },
      {
        question: "What did the fireflies do at night?",
        type: "mcq",
        options: [
          "Sang songs",
          "Blinked their lights",
          "Built houses",
          "Swam"
        ],
        answer: "Blinked their lights",
        explanation: "The fireflies blinked their lights at night."
      },
      {
        question: "Why did they use their lights?",
        type: "mcq",
        options: [
          "To communicate",
          "To cook",
          "To fly faster",
          "To find water"
        ],
        answer: "To communicate",
        explanation: "The mother explained that their lights help them communicate."
      },
      {
        question: "What happened after the young firefly practiced?",
        type: "mcq",
        options: [
          "Its light became brighter",
          "It lost its light",
          "It stopped flying",
          "It became a bird"
        ],
        answer: "Its light became brighter",
        explanation: "Practice made its light brighter."
      },
      {
        question: "What did the firefly learn?",
        type: "mcq",
        options: [
          "Practice can develop skills",
          "Small creatures cannot learn",
          "Lights are not useful",
          "Ponds are dangerous"
        ],
        answer: "Practice can develop skills",
        explanation: "The young firefly improved by practicing."
      }
    ],

    isActive: true
  },

  // 42
  {id:42,
    title: "The Helpful Map",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Kiran's class planned a visit to a nature park.

Their teacher gave each group a simple map.

The map showed paths, a pond, a picnic area, and an observation tower.

Kiran's group wanted to reach the tower.

They followed the path on the map.

At one point, they saw two paths.

Kiran checked the map carefully.

The correct path went beside the pond.

They followed it and soon reached the tower.

From the top, they could see trees and a small lake.

Kiran learned that maps help people understand where places are and how to reach them.
`,

    vocabulary: [
      {
        word: "map",
        meaning: "a drawing that shows where places are",
        example: "The teacher gave each group a map."
      },
      {
        word: "observation",
        meaning: "careful watching",
        example: "They climbed the observation tower."
      },
      {
        word: "path",
        meaning: "a way for walking",
        example: "They followed the correct path."
      },
      {
        word: "reach",
        meaning: "to arrive at a place",
        example: "They reached the tower."
      }
    ],

    questions: [
      {
        question: "Where did the class plan to go?",
        type: "mcq",
        options: [
          "A nature park",
          "A supermarket",
          "A museum",
          "A beach"
        ],
        answer: "A nature park",
        explanation: "The class planned a visit to a nature park."
      },
      {
        question: "What did the map show?",
        type: "mcq",
        options: [
          "Only trees",
          "Paths, pond, picnic area, and tower",
          "Only animals",
          "Only roads"
        ],
        answer: "Paths, pond, picnic area, and tower",
        explanation: "The map showed several important places."
      },
      {
        question: "Where did the correct path go?",
        type: "mcq",
        options: [
          "Beside the pond",
          "Through a building",
          "Across the road",
          "Behind the school"
        ],
        answer: "Beside the pond",
        explanation: "Kiran checked the map and found the path beside the pond."
      },
      {
        question: "What did they reach?",
        type: "mcq",
        options: [
          "A playground",
          "An observation tower",
          "A shop",
          "A bridge"
        ],
        answer: "An observation tower",
        explanation: "They followed the map and reached the tower."
      },
      {
        question: "What did Kiran learn?",
        type: "mcq",
        options: [
          "Maps are not useful",
          "Maps help people find places",
          "Maps only show animals",
          "Paths cannot be followed"
        ],
        answer: "Maps help people find places",
        explanation: "The map helped the group choose the correct path."
      }
    ],

    isActive: true
  },

  // 43
  {id:43,
    title: "The Mango Tree Promise",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A large mango tree stood beside Ravi's house.

Every summer, it produced sweet mangoes.

One year, a strong storm broke several branches.

Ravi worried that the tree might not recover.

His grandfather trimmed the damaged branches carefully.

They also protected the tree's roots from being stepped on.

Over the next few months, new leaves appeared.

The tree slowly became healthy again.

The following summer, it produced mangoes once more.

Ravi learned that trees need care and time to recover after damage.
`,

    vocabulary: [
      {
        word: "branches",
        meaning: "parts that grow out from the trunk of a tree",
        example: "The storm broke several branches."
      },
      {
        word: "recover",
        meaning: "become healthy again",
        example: "The tree slowly recovered."
      },
      {
        word: "damaged",
        meaning: "harmed or broken",
        example: "The damaged branches were removed."
      },
      {
        word: "roots",
        meaning: "parts of a plant below the ground",
        example: "They protected the tree's roots."
      }
    ],

    questions: [
      {
        question: "What kind of tree was near Ravi's house?",
        type: "mcq",
        options: [
          "Apple tree",
          "Mango tree",
          "Pine tree",
          "Orange tree"
        ],
        answer: "Mango tree",
        explanation: "A large mango tree stood beside the house."
      },
      {
        question: "What damaged the tree?",
        type: "mcq",
        options: [
          "A storm",
          "A fire",
          "An animal",
          "A car"
        ],
        answer: "A storm",
        explanation: "A strong storm broke several branches."
      },
      {
        question: "What did Grandpa do?",
        type: "mcq",
        options: [
          "Cut down the tree",
          "Trimmed damaged branches",
          "Moved the tree",
          "Painted the tree"
        ],
        answer: "Trimmed damaged branches",
        explanation: "Grandpa carefully trimmed the damaged branches."
      },
      {
        question: "What appeared after a few months?",
        type: "mcq",
        options: [
          "New leaves",
          "Snow",
          "New branches immediately",
          "Flowers only"
        ],
        answer: "New leaves",
        explanation: "New leaves appeared as the tree recovered."
      },
      {
        question: "What did Ravi learn?",
        type: "mcq",
        options: [
          "Trees cannot recover",
          "Trees need care and time after damage",
          "Storms help all trees",
          "Roots are not important"
        ],
        answer: "Trees need care and time after damage",
        explanation: "The tree recovered with care and time."
      }
    ],

    isActive: true
  },

  // 44
  {id:44,
    title: "The Night Train",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Meera traveled by train with her parents.

The train left the station after sunset.

Meera watched the lights of the city disappear.

Soon, the train passed fields and small villages.

She looked out of the window and saw stars above the dark fields.

The train stopped at a small station.

A family carrying bags got on.

Meera wondered where they were going.

Her father explained that trains connect many towns and cities.

Meera enjoyed listening to the sound of the wheels.

She learned that transportation helps people travel from one place to another.
`,

    vocabulary: [
      {
        word: "station",
        meaning: "a place where trains stop",
        example: "The train stopped at a small station."
      },
      {
        word: "transportation",
        meaning: "ways of moving people or things",
        example: "Trains are a form of transportation."
      },
      {
        word: "connect",
        meaning: "join places together",
        example: "Trains connect towns and cities."
      },
      {
        word: "villages",
        meaning: "small communities",
        example: "The train passed small villages."
      }
    ],

    questions: [
      {
        question: "When did the train leave?",
        type: "mcq",
        options: [
          "After sunset",
          "At noon",
          "At sunrise",
          "Before breakfast"
        ],
        answer: "After sunset",
        explanation: "The train left the station after sunset."
      },
      {
        question: "What did Meera see above the fields?",
        type: "mcq",
        options: [
          "Clouds only",
          "Stars",
          "Airplanes",
          "Birds"
        ],
        answer: "Stars",
        explanation: "Meera saw stars above the dark fields."
      },
      {
        question: "What happened at the small station?",
        type: "mcq",
        options: [
          "The train stopped",
          "The train broke",
          "The lights disappeared",
          "The passengers left the country"
        ],
        answer: "The train stopped",
        explanation: "The train stopped at a small station."
      },
      {
        question: "What do trains connect?",
        type: "mcq",
        options: [
          "Only houses",
          "Towns and cities",
          "Only parks",
          "Only schools"
        ],
        answer: "Towns and cities",
        explanation: "Her father explained that trains connect towns and cities."
      },
      {
        question: "What did Meera learn?",
        type: "mcq",
        options: [
          "Transportation helps people travel",
          "Trains cannot travel at night",
          "Stations are houses",
          "Fields cannot be seen"
        ],
        answer: "Transportation helps people travel",
        explanation: "The train helped Meera travel to another place."
      }
    ],

    isActive: true
  },

  // 45
  {id:45,
    title: "The Rainbow Garden",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A school decided to create a colorful garden.

Each class chose a different color.

The first class planted red flowers.

The second planted yellow flowers.

Another class planted purple flowers.

The children carefully measured the spaces between the plants.

They watered the garden every morning.

After several weeks, the garden was full of colors.

Butterflies visited the flowers.

The students made signs explaining why plants are important.

The garden became a place where children could learn about nature.

They discovered that working together could turn an empty space into something beautiful and useful.
`,

    vocabulary: [
      {
        word: "colorful",
        meaning: "having many colors",
        example: "The school created a colorful garden."
      },
      {
        word: "measured",
        meaning: "found the size or distance of something",
        example: "The children measured the spaces."
      },
      {
        word: "visited",
        meaning: "went to a place",
        example: "Butterflies visited the flowers."
      },
      {
        word: "useful",
        meaning: "helpful or valuable",
        example: "The garden became a useful learning place."
      }
    ],

    questions: [
      {
        question: "What did the school create?",
        type: "mcq",
        options: [
          "A playground",
          "A colorful garden",
          "A library",
          "A pond"
        ],
        answer: "A colorful garden",
        explanation: "The school created a colorful garden."
      },
      {
        question: "What did the first class plant?",
        type: "mcq",
        options: [
          "Yellow flowers",
          "Red flowers",
          "Blue flowers",
          "Purple flowers"
        ],
        answer: "Red flowers",
        explanation: "The first class planted red flowers."
      },
      {
        question: "What did the children measure?",
        type: "mcq",
        options: [
          "The flowers",
          "The spaces between plants",
          "The butterflies",
          "The leaves"
        ],
        answer: "The spaces between plants",
        explanation: "They measured the spaces between the plants."
      },
      {
        question: "Who visited the flowers?",
        type: "mcq",
        options: [
          "Butterflies",
          "Dogs",
          "Cats",
          "Fish"
        ],
        answer: "Butterflies",
        explanation: "Butterflies visited the colorful flowers."
      },
      {
        question: "What did the students discover?",
        type: "mcq",
        options: [
          "Working together can create something useful",
          "Gardens are difficult",
          "Plants cannot grow at school",
          "Flowers do not attract animals"
        ],
        answer: "Working together can create something useful",
        explanation: "The students worked together to create a learning garden."
      }
    ],

    isActive: true
  },

  // 46
  {id:46,
    title: "The Little Inventor",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A boy named Sami liked solving everyday problems.

One day, he noticed that his pencils kept rolling off his desk.

He collected cardboard, tape, and a small box.

He built a pencil holder.

The first holder was too short.

The pencils still fell out.

Sami made the sides taller.

This time, the pencils stayed inside.

His teacher saw the invention and asked Sami to explain how he improved it.

Sami said that the first attempt helped him understand what needed to change.

He learned that inventors often test ideas and improve them.
`,

    vocabulary: [
      {
        word: "inventor",
        meaning: "a person who creates something new",
        example: "Sami wanted to become an inventor."
      },
      {
        word: "cardboard",
        meaning: "thick paper used for making boxes and objects",
        example: "Sami used cardboard."
      },
      {
        word: "invention",
        meaning: "something newly created",
        example: "The pencil holder was Sami's invention."
      },
      {
        word: "attempt",
        meaning: "an effort to do something",
        example: "His first attempt was too short."
      }
    ],

    questions: [
      {
        question: "What problem did Sami have?",
        type: "mcq",
        options: [
          "His books were wet",
          "His pencils rolled off the desk",
          "His chair was broken",
          "His bag was missing"
        ],
        answer: "His pencils rolled off the desk",
        explanation: "Sami wanted to stop his pencils from rolling away."
      },
      {
        question: "What did Sami build?",
        type: "mcq",
        options: [
          "A pencil holder",
          "A robot",
          "A chair",
          "A clock"
        ],
        answer: "A pencil holder",
        explanation: "He built a pencil holder from cardboard and other materials."
      },
      {
        question: "Why did the first holder fail?",
        type: "mcq",
        options: [
          "It was too short",
          "It was too heavy",
          "It was too colorful",
          "It was too wide"
        ],
        answer: "It was too short",
        explanation: "The pencils still fell out because the sides were too short."
      },
      {
        question: "What did Sami change?",
        type: "mcq",
        options: [
          "He made the sides taller",
          "He removed the bottom",
          "He made it smaller",
          "He painted it"
        ],
        answer: "He made the sides taller",
        explanation: "Taller sides kept the pencils inside."
      },
      {
        question: "What did Sami learn?",
        type: "mcq",
        options: [
          "Inventors never make mistakes",
          "Inventors test and improve ideas",
          "Problems cannot be solved",
          "First attempts are always perfect"
        ],
        answer: "Inventors test and improve ideas",
        explanation: "Sami improved his invention after testing it."
      }
    ],

    isActive: true
  },

  // 47
  {id:47,
    title: "The Forest Sounds",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
During a forest walk, Ali stopped and closed his eyes.

He wanted to listen carefully.

First, he heard birds singing.

Then he heard leaves moving in the wind.

A little later, he heard water flowing over rocks.

His teacher asked him to identify each sound.

Ali noticed that the forest was never completely quiet.

Different animals and natural sounds happened at the same time.

Ali wrote the sounds in his notebook.

He learned that listening carefully can help us notice details that we might miss when we are busy talking or moving.
`,

    vocabulary: [
      {
        word: "identify",
        meaning: "recognize or name something",
        example: "Ali identified different sounds."
      },
      {
        word: "natural",
        meaning: "existing in nature",
        example: "The forest had many natural sounds."
      },
      {
        word: "details",
        meaning: "small pieces of information",
        example: "Listening helped Ali notice details."
      },
      {
        word: "completely",
        meaning: "fully or entirely",
        example: "The forest was never completely quiet."
      }
    ],

    questions: [
      {
        question: "What did Ali do first?",
        type: "mcq",
        options: [
          "Ran through the forest",
          "Closed his eyes and listened",
          "Picked flowers",
          "Climbed a tree"
        ],
        answer: "Closed his eyes and listened",
        explanation: "Ali closed his eyes so he could listen carefully."
      },
      {
        question: "What did he hear first?",
        type: "mcq",
        options: [
          "Water",
          "Birds",
          "Cars",
          "People"
        ],
        answer: "Birds",
        explanation: "Ali first heard birds singing."
      },
      {
        question: "What did he hear later?",
        type: "mcq",
        options: [
          "Water flowing over rocks",
          "Music",
          "A train",
          "A bell"
        ],
        answer: "Water flowing over rocks",
        explanation: "He later heard water flowing over rocks."
      },
      {
        question: "What did Ali write?",
        type: "mcq",
        options: [
          "The forest sounds",
          "A story",
          "A poem",
          "A shopping list"
        ],
        answer: "The forest sounds",
        explanation: "Ali wrote the sounds in his notebook."
      },
      {
        question: "What did Ali learn?",
        type: "mcq",
        options: [
          "Listening carefully helps us notice details",
          "Forests are silent",
          "Birds make no sounds",
          "Talking is always better"
        ],
        answer: "Listening carefully helps us notice details",
        explanation: "Careful listening helped Ali notice many sounds."
      }
    ],

    isActive: true
  },

  // 48
  {id:48,
    title: "The Helpful Shadow",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
On a sunny day, Noor noticed her shadow following her.

When she walked, it walked.

When she stopped, it stopped.

Noor wondered why the shadow changed size.

Her father explained that shadows are made when an object blocks light.

At noon, Noor noticed that her shadow was short.

Later in the afternoon, it became longer.

She moved around the garden and watched the shadow change.

Noor learned that the position of the Sun affects the size and direction of a shadow.
`,

    vocabulary: [
      {
        word: "shadow",
        meaning: "a dark shape made when light is blocked",
        example: "Noor saw her shadow."
      },
      {
        word: "blocks",
        meaning: "stops something from passing",
        example: "An object blocks light."
      },
      {
        word: "position",
        meaning: "where something is located",
        example: "The Sun's position affects shadows."
      },
      {
        word: "direction",
        meaning: "the way something points or moves",
        example: "The shadow changed direction."
      }
    ],

    questions: [
      {
        question: "What followed Noor?",
        type: "mcq",
        options: [
          "A bird",
          "Her shadow",
          "A dog",
          "A cloud"
        ],
        answer: "Her shadow",
        explanation: "Noor noticed her shadow following her."
      },
      {
        question: "What creates a shadow?",
        type: "mcq",
        options: [
          "Water",
          "An object blocking light",
          "Wind",
          "Rain"
        ],
        answer: "An object blocking light",
        explanation: "Her father explained how shadows are made."
      },
      {
        question: "When was Noor's shadow short?",
        type: "mcq",
        options: [
          "At noon",
          "At midnight",
          "At sunrise only",
          "During rain"
        ],
        answer: "At noon",
        explanation: "Noor noticed her shadow was short at noon."
      },
      {
        question: "What happened later in the afternoon?",
        type: "mcq",
        options: [
          "The shadow disappeared",
          "The shadow became longer",
          "The shadow became invisible",
          "The shadow turned blue"
        ],
        answer: "The shadow became longer",
        explanation: "The shadow grew longer later in the afternoon."
      },
      {
        question: "What did Noor learn?",
        type: "mcq",
        options: [
          "The Sun affects shadows",
          "Shadows are living things",
          "Shadows only appear at night",
          "The Sun does not affect shadows"
        ],
        answer: "The Sun affects shadows",
        explanation: "The Sun's position affects shadow size and direction."
      }
    ],

    isActive: true
  },

  // 49
  {id:49,
    title: "The Orchard Surprise",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
An orchard owner noticed that some apple trees had fewer fruits than usual.

He looked closely at the branches.

He found many flowers but very few tiny apples.

A beekeeper explained that bees help carry pollen from flower to flower.

The orchard needed more pollinators.

The owner planted more flowering plants around the orchard.

Soon, more bees visited the area.

Later in the season, the apple trees produced more fruit.

The owner learned that insects can play an important role in helping plants produce food.
`,

    vocabulary: [
      {
        word: "orchard",
        meaning: "a place where fruit trees are grown",
        example: "The apple orchard needed more bees."
      },
      {
        word: "pollen",
        meaning: "fine powder involved in plant reproduction",
        example: "Bees carry pollen between flowers."
      },
      {
        word: "pollinators",
        meaning: "animals that help move pollen between flowers",
        example: "Bees are important pollinators."
      },
      {
        word: "produce",
        meaning: "to make or grow something",
        example: "Apple trees produce fruit."
      }
    ],

    questions: [
      {
        question: "What kind of trees were in the orchard?",
        type: "mcq",
        options: [
          "Mango trees",
          "Apple trees",
          "Pine trees",
          "Banana trees"
        ],
        answer: "Apple trees",
        explanation: "The orchard had apple trees."
      },
      {
        question: "What did the owner find?",
        type: "mcq",
        options: [
          "Many fruits",
          "Many flowers but few tiny apples",
          "No flowers",
          "Broken trees"
        ],
        answer: "Many flowers but few tiny apples",
        explanation: "The trees had flowers but not many developing fruits."
      },
      {
        question: "What do bees carry?",
        type: "mcq",
        options: [
          "Rocks",
          "Pollen",
          "Leaves",
          "Water"
        ],
        answer: "Pollen",
        explanation: "Bees carry pollen from flower to flower."
      },
      {
        question: "What did the owner plant?",
        type: "mcq",
        options: [
          "More flowering plants",
          "More rocks",
          "More fences",
          "More trees only"
        ],
        answer: "More flowering plants",
        explanation: "He planted flowering plants to attract more bees."
      },
      {
        question: "What did the owner learn?",
        type: "mcq",
        options: [
          "Insects can help plants produce food",
          "Bees harm all plants",
          "Flowers do not need insects",
          "Fruit trees do not need pollination"
        ],
        answer: "Insects can help plants produce food",
        explanation: "Bees helped pollinate the flowers, leading to more fruit."
      }
    ],

    isActive: true
  },

  // 50
  {id:50,
    title: "The Classroom Time Capsule",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Ms. Sara's class decided to make a time capsule.

Each child chose one small object that represented their life at school.

Some children placed drawings inside.

Others added photographs, small notes, or a favorite pencil.

The teacher placed everything in a strong box.

They wrote the date on the box.

Then they buried it in a safe place in the school garden.

The teacher explained that the children could open it many years later.

The students imagined what they might think when they saw their old objects.

They learned that objects can help people remember experiences from the past.
`,

    vocabulary: [
      {
        word: "time capsule",
        meaning: "a container holding things to be opened in the future",
        example: "The class made a time capsule."
      },
      {
        word: "represented",
        meaning: "showed or stood for something",
        example: "Each object represented school life."
      },
      {
        word: "experiences",
        meaning: "things that happen to a person",
        example: "Objects can help remember experiences."
      },
      {
        word: "future",
        meaning: "the time that has not happened yet",
        example: "They would open the capsule in the future."
      }
    ],

    questions: [
      {
        question: "What did the class make?",
        type: "mcq",
        options: [
          "A robot",
          "A time capsule",
          "A garden",
          "A library"
        ],
        answer: "A time capsule",
        explanation: "The class decided to make a time capsule."
      },
      {
        question: "What did some children place inside?",
        type: "mcq",
        options: [
          "Drawings",
          "Large toys",
          "Food",
          "Shoes"
        ],
        answer: "Drawings",
        explanation: "Some children placed drawings inside."
      },
      {
        question: "Where did they put the box?",
        type: "mcq",
        options: [
          "In the classroom",
          "In the school garden",
          "On the roof",
          "At home"
        ],
        answer: "In the school garden",
        explanation: "They buried the box in a safe place in the school garden."
      },
      {
        question: "When could they open it?",
        type: "mcq",
        options: [
          "The next morning",
          "Many years later",
          "After lunch",
          "The same day"
        ],
        answer: "Many years later",
        explanation: "The teacher said they could open it many years later."
      },
      {
        question: "What did the children learn?",
        type: "mcq",
        options: [
          "Objects can help us remember the past",
          "Old objects are useless",
          "Memories disappear quickly",
          "Time capsules are toys"
        ],
        answer: "Objects can help us remember the past",
        explanation: "The objects could remind them of their school experiences."
      }
    ],

    isActive: true
  },

  // 51
  {id:51,
    title: "The Garden Maze",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
During a school trip, the children entered a garden maze.

Tall bushes formed narrow paths.

At first, Omar walked quickly.

Soon, he reached a dead end.

Instead of becoming upset, he remembered the turns he had taken.

He walked back to the previous corner.

This time, he chose another path.

His friend followed carefully.

After several turns, they found the exit.

Omar learned that getting lost does not always mean failure.

Sometimes, going back and trying another path can help us find the right way.
`,

    vocabulary: [
      {
        word: "maze",
        meaning: "a place with many paths that can be difficult to find a way through",
        example: "The children entered a garden maze."
      },
      {
        word: "narrow",
        meaning: "not wide",
        example: "The maze had narrow paths."
      },
      {
        word: "dead end",
        meaning: "a place where a path stops",
        example: "Omar reached a dead end."
      },
      {
        word: "exit",
        meaning: "a way out",
        example: "The children found the exit."
      }
    ],

    questions: [
      {
        question: "Where did the children go?",
        type: "mcq",
        options: [
          "A garden maze",
          "A library",
          "A beach",
          "A classroom"
        ],
        answer: "A garden maze",
        explanation: "The children entered a garden maze."
      },
      {
        question: "What happened to Omar?",
        type: "mcq",
        options: [
          "He found the exit immediately",
          "He reached a dead end",
          "He went home",
          "He climbed a tree"
        ],
        answer: "He reached a dead end",
        explanation: "Omar reached a place where the path stopped."
      },
      {
        question: "What did Omar remember?",
        type: "mcq",
        options: [
          "The weather",
          "The turns he had taken",
          "His lunch",
          "His homework"
        ],
        answer: "The turns he had taken",
        explanation: "Remembering his turns helped Omar go back."
      },
      {
        question: "What did Omar do after reaching the dead end?",
        type: "mcq",
        options: [
          "He gave up",
          "He went back and tried another path",
          "He climbed over the bushes",
          "He shouted"
        ],
        answer: "He went back and tried another path",
        explanation: "Omar returned to the previous corner and chose another path."
      },
      {
        question: "What did Omar learn?",
        type: "mcq",
        options: [
          "Getting lost always means failure",
          "Trying another path can help solve a problem",
          "Mazes cannot be solved",
          "Walking quickly is always best"
        ],
        answer: "Trying another path can help solve a problem",
        explanation: "Omar found the exit by changing his approach."
      }
    ],

    isActive: true
  },

  // 52
  {id:52,
    title: "The Water Saver",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Anaya noticed that the classroom tap was sometimes left running.

She told her teacher.

The teacher asked the class to think of ways to save water.

The children made a poster.

It said, "Turn off the tap when you are finished."

They placed the poster near the sink.

The children also began using only the amount of water they needed.

After a week, the teacher noticed that the tap was being left on less often.

The class felt proud.

They learned that small changes in daily habits can help save important resources.
`,

    vocabulary: [
      {
        word: "resource",
        meaning: "something useful that people need",
        example: "Water is an important resource."
      },
      {
        word: "habit",
        meaning: "something done regularly",
        example: "Turning off taps can become a good habit."
      },
      {
        word: "poster",
        meaning: "a large paper with information or pictures",
        example: "The children made a water-saving poster."
      },
      {
        word: "amount",
        meaning: "how much of something there is",
        example: "They used only the amount of water they needed."
      }
    ],

    questions: [
      {
        question: "What was sometimes left running?",
        type: "mcq",
        options: [
          "A fan",
          "The classroom tap",
          "A computer",
          "A light"
        ],
        answer: "The classroom tap",
        explanation: "The classroom tap was sometimes left running."
      },
      {
        question: "What did the children make?",
        type: "mcq",
        options: [
          "A book",
          "A poster",
          "A toy",
          "A machine"
        ],
        answer: "A poster",
        explanation: "The class made a poster about saving water."
      },
      {
        question: "What did the poster tell students to do?",
        type: "mcq",
        options: [
          "Leave the tap running",
          "Turn off the tap",
          "Play with water",
          "Drink more water"
        ],
        answer: "Turn off the tap",
        explanation: "The poster reminded students to turn off the tap."
      },
      {
        question: "What happened after a week?",
        type: "mcq",
        options: [
          "More taps were left on",
          "The tap was left on less often",
          "The poster disappeared",
          "The class stopped using water"
        ],
        answer: "The tap was left on less often",
        explanation: "The class changed its water-saving habits."
      },
      {
        question: "What did the children learn?",
        type: "mcq",
        options: [
          "Small daily changes can save resources",
          "Water is unlimited",
          "Taps should stay open",
          "Posters cannot help"
        ],
        answer: "Small daily changes can save resources",
        explanation: "Small changes helped the class use less water."
      }
    ],

    isActive: true
  },

  // 53
  {id:53,
    title: "The Curious Octopus",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A young octopus lived among rocks under the sea.

It was curious about everything around it.

One day, it found an empty shell.

The octopus examined the shell carefully.

It moved the shell with its arms.

When a large fish approached, the octopus hid behind the shell.

The shell helped it stay hidden.

Later, the octopus found a small opening between two rocks.

It squeezed through easily because its body was flexible.

A diver watching from a safe distance noticed the octopus exploring.

The diver learned that sea animals have special features that help them survive.
`,

    vocabulary: [
      {
        word: "curious",
        meaning: "wanting to learn or discover",
        example: "The octopus was curious."
      },
      {
        word: "examined",
        meaning: "looked at carefully",
        example: "The octopus examined the shell."
      },
      {
        word: "flexible",
        meaning: "able to bend or move easily",
        example: "The octopus had a flexible body."
      },
      {
        word: "survive",
        meaning: "continue living",
        example: "Special features help animals survive."
      }
    ],

    questions: [
      {
        question: "Where did the octopus live?",
        type: "mcq",
        options: [
          "In a tree",
          "Under the sea",
          "In a desert",
          "On a mountain"
        ],
        answer: "Under the sea",
        explanation: "The octopus lived among rocks under the sea."
      },
      {
        question: "What did the octopus find?",
        type: "mcq",
        options: [
          "An empty shell",
          "A bottle",
          "A shoe",
          "A leaf"
        ],
        answer: "An empty shell",
        explanation: "The octopus found an empty shell."
      },
      {
        question: "Why did it hide behind the shell?",
        type: "mcq",
        options: [
          "A large fish approached",
          "It was sleeping",
          "It was eating",
          "The water became warm"
        ],
        answer: "A large fish approached",
        explanation: "The octopus hid when a large fish came near."
      },
      {
        question: "Why could it squeeze through the rocks?",
        type: "mcq",
        options: [
          "It had wings",
          "Its body was flexible",
          "It was very hard",
          "It had wheels"
        ],
        answer: "Its body was flexible",
        explanation: "The octopus could squeeze through because its body was flexible."
      },
      {
        question: "What did the diver learn?",
        type: "mcq",
        options: [
          "Sea animals have special survival features",
          "Octopuses cannot move",
          "Shells are dangerous",
          "Fish cannot swim"
        ],
        answer: "Sea animals have special survival features",
        explanation: "The octopus used special features to explore and stay safe."
      }
    ],

    isActive: true
  },

  // 54
  {id:54,
    title: "The Morning Market",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
Every Saturday morning, Farah visited the local market with her mother.

Farmers brought vegetables, fruits, and fresh herbs.

One farmer showed Farah a basket of carrots.

Some carrots were large, while others were small.

Farah asked why they were different sizes.

The farmer explained that plants do not always grow at exactly the same rate.

Farah noticed that the vegetables were arranged carefully.

Some sellers used scales to measure their produce.

Farah helped her mother choose vegetables.

She learned that markets bring together farmers, sellers, and families.
`,

    vocabulary: [
      {
        word: "market",
        meaning: "a place where people buy and sell things",
        example: "Farah visited the local market."
      },
      {
        word: "herbs",
        meaning: "plants used for flavoring food",
        example: "Farmers sold fresh herbs."
      },
      {
        word: "produce",
        meaning: "food grown by farmers",
        example: "The sellers measured their produce."
      },
      {
        word: "scales",
        meaning: "tools used to measure weight",
        example: "The seller used scales."
      }
    ],

    questions: [
      {
        question: "When did Farah visit the market?",
        type: "mcq",
        options: [
          "Every Saturday morning",
          "Every Monday night",
          "Every Sunday afternoon",
          "Every Friday evening"
        ],
        answer: "Every Saturday morning",
        explanation: "Farah visited the market every Saturday morning."
      },
      {
        question: "What did farmers bring?",
        type: "mcq",
        options: [
          "Toys",
          "Vegetables, fruits, and herbs",
          "Books",
          "Clothes"
        ],
        answer: "Vegetables, fruits, and herbs",
        explanation: "Farmers brought fresh produce to the market."
      },
      {
        question: "Why were the carrots different sizes?",
        type: "mcq",
        options: [
          "Plants do not always grow at the same rate",
          "The farmer painted them",
          "They were different colors",
          "They were made of plastic"
        ],
        answer: "Plants do not always grow at the same rate",
        explanation: "The farmer explained that plants can grow at different rates."
      },
      {
        question: "What did sellers use to measure produce?",
        type: "mcq",
        options: [
          "Rulers",
          "Scales",
          "Clocks",
          "Cups"
        ],
        answer: "Scales",
        explanation: "Some sellers used scales to measure produce."
      },
      {
        question: "What did Farah learn?",
        type: "mcq",
        options: [
          "Markets bring people together",
          "Markets only sell toys",
          "Farmers do not grow food",
          "Families cannot visit markets"
        ],
        answer: "Markets bring people together",
        explanation: "Farmers, sellers, and families all used the market."
      }
    ],

    isActive: true
  },

  // 55
  {id:55,
    title: "The Bright Future Garden",
    grade: 1,
    category: "Reading Comprehension",
    difficulty: "hard",
    estimatedTime: 15,

    passage: `
A group of children wanted to make an empty space near their school useful.

They decided to create a small garden.

First, they cleared away rubbish.

Then they prepared the soil.

They planted vegetables, flowers, and herbs.

The teacher helped them make a watering schedule.

Each group had a different day to care for the plants.

After several weeks, green leaves appeared.

Later, flowers opened and vegetables grew.

The children used some vegetables in a healthy cooking activity.

They also shared some with the school kitchen.

The children were proud.

They learned that a good idea can become something useful when people plan, work together, and care for it.
`,

    vocabulary: [
      {
        word: "empty",
        meaning: "having nothing inside or on it",
        example: "The children found an empty space."
      },
      {
        word: "schedule",
        meaning: "a plan showing when things should happen",
        example: "The teacher made a watering schedule."
      },
      {
        word: "care",
        meaning: "to look after something",
        example: "The children cared for the plants."
      },
      {
        word: "useful",
        meaning: "helpful or valuable",
        example: "The garden became a useful space."
      }
    ],

    questions: [
      {
        question: "What did the children want to create?",
        type: "mcq",
        options: [
          "A playground",
          "A garden",
          "A swimming pool",
          "A library"
        ],
        answer: "A garden",
        explanation: "The children decided to create a small garden."
      },
      {
        question: "What did they do first?",
        type: "mcq",
        options: [
          "Picked vegetables",
          "Cleared away rubbish",
          "Cooked food",
          "Painted flowers"
        ],
        answer: "Cleared away rubbish",
        explanation: "They first cleaned the empty space."
      },
      {
        question: "What did the teacher make?",
        type: "mcq",
        options: [
          "A shopping list",
          "A watering schedule",
          "A map",
          "A story"
        ],
        answer: "A watering schedule",
        explanation: "The teacher created a schedule for caring for the plants."
      },
      {
        question: "What did the children do with some vegetables?",
        type: "mcq",
        options: [
          "Threw them away",
          "Used them in a cooking activity",
          "Sold them at a shop",
          "Painted them"
        ],
        answer: "Used them in a cooking activity",
        explanation: "Some vegetables were used in a healthy cooking activity."
      },
      {
        question: "What did the children learn?",
        type: "mcq",
        options: [
          "Ideas do not need planning",
          "Good ideas can become useful through teamwork and care",
          "Gardens grow without water",
          "Working alone is always better"
        ],
        answer: "Good ideas can become useful through teamwork and care",
        explanation: "The children planned, worked together, and cared for the garden."
      }
    ],

    isActive: true
  },
  {id:56,
    title: "The Secret Door in the Garden",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
One Saturday morning, Mia was helping her grandmother clean the garden. 
While moving some dry leaves near an old rose bush, she noticed something 
blue behind the plants.

Mia moved the leaves carefully and found a tiny blue door. It was so small 
that an adult could not fit through it. There was a golden handle in the 
middle of the door and a tiny key hanging beside it.

Mia looked around before picking up the key. She put it into the lock and 
turned it slowly. Click! The little door opened.

Behind the door was a narrow path covered with sparkling golden leaves. 
Mia followed the path and soon reached a garden that she had never seen 
before. The flowers were taller than she was, and tiny butterflies flew 
around them.

Suddenly, Mia heard a soft voice.

"Please help me!"

She looked around and saw a small purple flower bending toward the ground. 
The flower explained that a silver seed had disappeared from the garden. 
Without the seed, the garden would lose its special glow.

Mia searched under the leaves, beside the pond, and near the tall trees. 
She finally noticed a trail of tiny silver marks leading toward a bush.

Behind the bush, she found the silver seed. A little squirrel had carried 
it there because it thought the seed was a shiny nut.

Mia returned the seed to the flower. The entire garden began to sparkle.

"Thank you," said the flower.

When Mia returned through the blue door, only a few minutes had passed. 
Her grandmother was still watering the roses.

Mia smiled and quietly looked at the old rose bush. She wondered if the 
secret garden would still be there the next day.
`,

    vocabulary: [
      {
        word: "narrow",
        meaning: "not wide",
        example: "Mia walked along a narrow path."
      },
      {
        word: "sparkling",
        meaning: "shining with small bright lights",
        example: "The garden had sparkling golden leaves."
      },
      {
        word: "disappeared",
        meaning: "could no longer be seen",
        example: "The silver seed had disappeared."
      },
      {
        word: "trail",
        meaning: "a line or series of marks showing a path",
        example: "Mia followed a trail of silver marks."
      }
    ],

    questions: [
      {
        question: "Where did Mia find the tiny blue door?",
        type: "mcq",
        options: [
          "Behind an old tree",
          "Behind a rose bush",
          "Under a table",
          "Near the garden gate"
        ],
        answer: "Behind a rose bush",
        explanation:
          "Mia found the tiny blue door behind the plants near an old rose bush."
      },

      {
        question: "Why was the silver seed important?",
        type: "mcq",
        options: [
          "It could grow into a tree",
          "It made the garden smell nice",
          "It helped the garden keep its special glow",
          "It belonged to Mia's grandmother"
        ],
        answer: "It helped the garden keep its special glow",
        explanation:
          "The flower explained that the garden would lose its special glow without the silver seed."
      },

      {
        question: "Why did the squirrel take the silver seed?",
        type: "mcq",
        options: [
          "It wanted to hide it from Mia",
          "It thought the seed was a shiny nut",
          "It wanted to plant it",
          "It was angry with the flower"
        ],
        answer: "It thought the seed was a shiny nut",
        explanation:
          "The squirrel carried the seed away because it thought the shiny object was a nut."
      },

      {
        question: "What did Mia do after finding the silver marks?",
        type: "mcq",
        options: [
          "She went home",
          "She called her grandmother",
          "She followed them toward a bush",
          "She closed the blue door"
        ],
        answer: "She followed them toward a bush",
        explanation:
          "Mia noticed the silver trail and followed it toward a bush."
      },

      {
        question: "What can we infer about Mia?",
        type: "mcq",
        options: [
          "She gives up easily",
          "She is curious and helpful",
          "She dislikes gardens",
          "She is afraid of animals"
        ],
        answer: "She is curious and helpful",
        explanation:
          "Mia explored the mysterious garden and helped the flower find its missing seed."
      }
    ],

    isActive: true
  },

  {id:57,
    title: "The Mystery of the Missing Lunchbox",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Riya loved her red lunchbox. It had a picture of a yellow butterfly on 
the lid, and her father had given it to her on her first day of school.

One Monday morning, Riya placed her lunchbox inside her school bag. 
During the lunch break, she opened her bag, but the lunchbox was gone.

Riya became worried.

She looked under her desk first. It was not there. Then she checked 
the classroom shelf, but she found only books and pencils.

"I remember putting it in my bag," she thought.

Riya did not blame anyone. Instead, she decided to look carefully for clues.

Near her desk, she noticed three tiny rice grains on the floor. She 
followed them toward the classroom door. Another few grains were near 
the water station.

Riya continued looking. The trail ended near the playground.

There she saw her friend Tara sitting beside a bench. Tara was holding 
a red lunchbox.

Riya's eyes became wide.

Before she could say anything, Tara stood up.

"Riya! I found this lunchbox near the playground. I thought someone had 
lost it, so I was going to take it to the teacher."

Riya looked closely. It was her lunchbox.

She remembered that she had taken her lunchbox outside earlier that 
morning when her teacher asked the children to eat some fruit in the 
fresh air. She had forgotten to bring it back.

"Thank you for finding it," Riya said.

Tara smiled.

Riya learned something important that day. When something goes missing, 
it is better to look for facts and clues than to quickly blame another 
person.

The next day, Riya put a bright name sticker on her lunchbox.
`,

    vocabulary: [
      {
        word: "clues",
        meaning: "small signs that help solve a mystery",
        example: "Riya followed the clues on the floor."
      },
      {
        word: "blame",
        meaning: "to say someone caused a problem",
        example: "Riya did not blame her friend."
      },
      {
        word: "trail",
        meaning: "a series of marks showing where something went",
        example: "Riya followed the trail of rice grains."
      },
      {
        word: "facts",
        meaning: "things that are known to be true",
        example: "Riya looked for facts before making a decision."
      }
    ],

    questions: [
      {
        question: "Why was Riya worried?",
        type: "mcq",
        options: [
          "She forgot her homework",
          "Her lunchbox was missing",
          "She lost her pencil",
          "She was late to school"
        ],
        answer: "Her lunchbox was missing",
        explanation:
          "Riya became worried when she opened her bag and could not find her lunchbox."
      },

      {
        question: "What clue did Riya find first?",
        type: "mcq",
        options: [
          "A yellow ribbon",
          "Three rice grains",
          "A pencil",
          "A shoe"
        ],
        answer: "Three rice grains",
        explanation:
          "Riya noticed three tiny rice grains near her desk."
      },

      {
        question: "Why did Tara have Riya's lunchbox?",
        type: "mcq",
        options: [
          "She wanted to keep it",
          "She had taken it by mistake",
          "She found it near the playground",
          "Riya gave it to her"
        ],
        answer: "She found it near the playground",
        explanation:
          "Tara found the lunchbox near the playground and planned to give it to the teacher."
      },

      {
        question: "Why did Riya follow the rice grains?",
        type: "mcq",
        options: [
          "She wanted to eat them",
          "She thought they might lead to her lunchbox",
          "She wanted to clean the floor",
          "She wanted to feed a bird"
        ],
        answer: "She thought they might lead to her lunchbox",
        explanation:
          "Riya used the rice grains as clues to find where her lunchbox had gone."
      },

      {
        question: "What lesson did Riya learn?",
        type: "mcq",
        options: [
          "Never bring lunch to school",
          "Always blame someone when something is missing",
          "Look for facts before blaming someone",
          "Lunchboxes should be blue"
        ],
        answer: "Look for facts before blaming someone",
        explanation:
          "Riya solved the mystery by looking for clues instead of blaming another person."
      }
    ],

    isActive: true
  },

  {id:58,
    title: "The Cloud That Lost Its Way",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
High above the Earth lived a small white cloud named Puffy. Puffy had 
many cloud friends who traveled across the sky together.

One afternoon, a strong wind suddenly blew across the sky.

Whoosh!

Puffy was pushed far away from the other clouds.

When the wind finally stopped, Puffy looked around. The sky was empty.

"I am lost," Puffy said sadly.

Puffy floated over a tall mountain. Below, he saw trees and a small 
village. The people were carrying empty buckets because their wells 
had almost no water.

Puffy wanted to help, but he was only a little cloud.

He gathered the tiny drops of water inside himself. Then he released 
them slowly.

Drip.

Drop.

Soon, a gentle rain began to fall.

The villagers smiled and collected the water.

Puffy felt happy, but he still did not know where his cloud family was.

He floated farther and reached a large garden. The flowers were dry, 
and their leaves were bending toward the ground.

Puffy gave them some rain too.

As he continued traveling, he noticed something bright below him. 
Thousands of flowers had opened after the rain. Their colors formed a 
long line across the land.

Puffy followed the colorful line.

At the end of it, he saw a group of clouds.

"Puffy!" they called.

Puffy had finally found his family.

He told them about the village and the thirsty garden.

His cloud friends were proud of him.

Puffy realized that getting lost had helped him discover something 
important: even a small cloud can make a big difference.
`,

    vocabulary: [
      {
        word: "village",
        meaning: "a small community where people live",
        example: "Puffy saw a small village below the mountain."
      },
      {
        word: "gathered",
        meaning: "brought or collected together",
        example: "Puffy gathered tiny drops of water."
      },
      {
        word: "gentle",
        meaning: "soft and not strong",
        example: "A gentle rain fell on the village."
      },
      {
        word: "difference",
        meaning: "a change or effect caused by something",
        example: "Puffy made a big difference to the dry garden."
      }
    ],

    questions: [
      {
        question: "Why did Puffy become separated from his friends?",
        type: "mcq",
        options: [
          "He flew away on purpose",
          "A strong wind pushed him away",
          "He fell into the ocean",
          "He wanted to visit a mountain"
        ],
        answer: "A strong wind pushed him away",
        explanation:
          "A strong wind suddenly pushed Puffy far away from his cloud friends."
      },

      {
        question: "How did Puffy help the village?",
        type: "mcq",
        options: [
          "He gave them food",
          "He made the sun shine",
          "He brought gentle rain",
          "He built new houses"
        ],
        answer: "He brought gentle rain",
        explanation:
          "Puffy released water drops and brought rain to the dry village."
      },

      {
        question: "What happened to the flowers after Puffy helped them?",
        type: "mcq",
        options: [
          "They disappeared",
          "They opened and became colorful",
          "They became trees",
          "They were covered with snow"
        ],
        answer: "They opened and became colorful",
        explanation:
          "The flowers opened after receiving rain, creating a colorful line."
      },

      {
        question: "How did Puffy find his family?",
        type: "mcq",
        options: [
          "A bird told him",
          "He followed the colorful line of flowers",
          "He climbed the mountain",
          "The wind carried him home"
        ],
        answer: "He followed the colorful line of flowers",
        explanation:
          "Puffy followed the flowers that had opened after the rain and found his cloud family."
      },

      {
        question: "What is the main idea of the story?",
        type: "mcq",
        options: [
          "Clouds should never travel",
          "Getting lost is always bad",
          "Even something small can help others",
          "Mountains are dangerous"
        ],
        answer: "Even something small can help others",
        explanation:
          "Puffy discovered that although he was small, he could help the village and the garden."
      }
    ],

    isActive: true
  },

  {id:59,
    title: "The Boy Who Could Hear Trees",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Kabir loved walking through the forest near his house. He enjoyed 
listening to birds, watching butterflies, and collecting interesting 
leaves.

One morning, while sitting under a very old tree, Kabir heard a strange 
sound.

"Help..."

Kabir looked around.

Nobody was there.

He listened again.

"Please help..."

This time he realized that the sound was coming from the tree.

Kabir was surprised. He placed his hand on the tree trunk.

"What happened?" he asked.

The tree told him that a family of birds had built a nest on one of 
its branches. During the night, a strong storm had blown the nest down. 
Three baby birds were now hiding beneath some leaves.

Kabir carefully searched the ground.

After a few minutes, he found the baby birds. They were cold and 
frightened.

Kabir did not touch them. Instead, he called his mother, who knew how 
to safely help birds.

Together, they placed the nest in a safe low branch and waited nearby.

The mother bird returned soon.

She flew around the nest and called loudly to her babies.

The baby birds answered.

Kabir smiled.

Before leaving, he placed his hand on the old tree again.

"Thank you for telling me," he whispered.

The tree made a soft rustling sound.

Kabir knew that he might never hear a tree speak again. But from that 
day forward, he paid closer attention to the sounds of nature.

He learned that the forest had many messages, even when people were 
too busy to notice them.
`,

    vocabulary: [
      {
        word: "rustling",
        meaning: "a soft sound made when leaves move",
        example: "Kabir heard the rustling of leaves."
      },
      {
        word: "frightened",
        meaning: "feeling afraid",
        example: "The baby birds were cold and frightened."
      },
      {
        word: "branch",
        meaning: "a part of a tree that grows from the trunk",
        example: "The nest was placed on a safe branch."
      },
      {
        word: "attention",
        meaning: "careful listening or watching",
        example: "Kabir paid closer attention to nature."
      }
    ],

    questions: [
      {
        question: "Where was Kabir sitting when he heard the strange sound?",
        type: "mcq",
        options: [
          "Under an old tree",
          "Near his school",
          "Inside his house",
          "Beside a river"
        ],
        answer: "Under an old tree",
        explanation:
          "Kabir was sitting under an old tree when he heard the voice."
      },

      {
        question: "What problem did the tree tell Kabir about?",
        type: "mcq",
        options: [
          "The tree was losing its leaves",
          "Some baby birds had lost their nest",
          "The forest had no water",
          "A squirrel was missing"
        ],
        answer: "Some baby birds had lost their nest",
        explanation:
          "A storm had blown the birds' nest down, leaving the baby birds hiding under leaves."
      },

      {
        question: "Why did Kabir call his mother?",
        type: "mcq",
        options: [
          "He was hungry",
          "He wanted to go home",
          "He needed help caring for the birds safely",
          "He wanted to cut the tree"
        ],
        answer: "He needed help caring for the birds safely",
        explanation:
          "Kabir's mother knew how to help the birds safely."
      },

      {
        question: "How did the mother bird react when she returned?",
        type: "mcq",
        options: [
          "She flew away",
          "She called loudly to her babies",
          "She built another tree",
          "She attacked Kabir"
        ],
        answer: "She called loudly to her babies",
        explanation:
          "The mother bird flew around the nest and called to her babies."
      },

      {
        question: "What did Kabir learn from the experience?",
        type: "mcq",
        options: [
          "Forests are dangerous",
          "Trees cannot communicate",
          "Nature has many messages if we pay attention",
          "Birds should live indoors"
        ],
        answer: "Nature has many messages if we pay attention",
        explanation:
          "Kabir learned to listen carefully to the sounds and messages of nature."
      }
    ],

    isActive: true
  },

  {id:60,
    title: "The Magic Pencil",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Lina was cleaning an old drawer when she found a strange silver pencil.

It looked ordinary, but a tiny star was carved into its side.

Lina took a piece of paper and drew a red butterfly.

To her surprise, the butterfly moved.

Lina jumped back.

The butterfly flew around the room for exactly ten minutes before 
turning back into a drawing.

Lina tested the pencil again. She drew a small blue bird, and the bird 
flapped its wings. She drew a green apple, and the apple rolled across 
the table.

Lina became excited.

Then she had an idea.

She drew a bicycle.

The bicycle suddenly appeared beside her.

Lina rode it around the garden. She was having fun when she noticed 
her little brother standing near the gate.

"Can you draw me a boat?" he asked.

Lina drew a beautiful boat.

The boat became real.

But then Lina made a mistake.

She drew a huge black cloud because she wanted to see what would happen.

The cloud appeared above the house.

Thunder began to rumble.

Rain poured down.

Lina quickly remembered that everything she drew lasted only ten minutes.

She waited.

After ten minutes, the cloud disappeared.

The sun came out again.

Lina looked at the pencil carefully.

She understood that having a magical tool was exciting, but using it 
without thinking could cause problems.

From that day, Lina used the pencil only when she had a good reason.
`,

    vocabulary: [
      {
        word: "ordinary",
        meaning: "normal or not special",
        example: "The pencil looked ordinary at first."
      },
      {
        word: "appeared",
        meaning: "suddenly became visible or real",
        example: "The bicycle appeared beside Lina."
      },
      {
        word: "rumble",
        meaning: "a deep, low sound",
        example: "Thunder began to rumble."
      },
      {
        word: "magical",
        meaning: "having a special power that is not ordinary",
        example: "Lina found a magical pencil."
      }
    ],

    questions: [
      {
        question: "What happened when Lina drew the butterfly?",
        type: "mcq",
        options: [
          "It disappeared",
          "It became a real moving butterfly",
          "It changed into a bird",
          "It broke the pencil"
        ],
        answer: "It became a real moving butterfly",
        explanation:
          "The magic pencil made the butterfly move for ten minutes."
      },

      {
        question: "How long did the drawings stay real?",
        type: "mcq",
        options: [
          "Five minutes",
          "Ten minutes",
          "One hour",
          "One day"
        ],
        answer: "Ten minutes",
        explanation:
          "Lina discovered that each drawing stayed real for exactly ten minutes."
      },

      {
        question: "What problem did Lina create?",
        type: "mcq",
        options: [
          "She lost the pencil",
          "She drew a huge storm cloud",
          "She broke the bicycle",
          "She lost her brother"
        ],
        answer: "She drew a huge storm cloud",
        explanation:
          "Lina drew a black cloud, which created thunder and heavy rain."
      },

      {
        question: "Why did the storm disappear?",
        type: "mcq",
        options: [
          "Lina erased it",
          "Her brother removed it",
          "Ten minutes passed",
          "The pencil broke"
        ],
        answer: "Ten minutes passed",
        explanation:
          "The drawings lasted only ten minutes, so the storm disappeared after that time."
      },

      {
        question: "What did Lina learn?",
        type: "mcq",
        options: [
          "Magic pencils are useless",
          "She should use special powers carefully",
          "Drawing is boring",
          "She should never help her brother"
        ],
        answer: "She should use special powers carefully",
        explanation:
          "Lina learned that using a magical tool without thinking could cause problems."
      }
    ],

    isActive: true
  },

  {id:61,
    title: "The Penguin Who Lost His Way",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Piko was a young penguin who lived with his family near a cold blue sea.

One morning, Piko followed a group of penguins toward the water. He 
was busy watching a shiny fish when a strong wave pushed him away from 
the group.

When Piko looked up, his family was gone.

He felt frightened.

Piko decided not to panic. He remembered something his father had 
told him: "When you are lost, stop, look, and think."

Piko stopped near a large rock.

First, he looked around. He saw a group of seals resting on the ice.

"Have you seen my family?" he asked.

One seal pointed toward the far side of the sea.

Piko thanked the seal and continued.

Soon he met a large seabird.

The seabird told Piko that it had seen many penguins moving toward a 
tall iceberg.

Piko followed the direction.

When he reached the iceberg, he heard familiar sounds.

"Peep! Peep!"

It was his little sister.

Piko hurried toward the sound.

His family had been looking for him too.

His mother hugged him with her wings.

Piko told them how he had stopped, looked carefully, and asked the 
animals for help.

His father smiled.

"You remembered what I taught you."

Piko was happy to be home.

From that day on, he stayed closer to his family whenever they traveled.
`,

    vocabulary: [
      {
        word: "panic",
        meaning: "to become very frightened and unable to think clearly",
        example: "Piko decided not to panic."
      },
      {
        word: "direction",
        meaning: "the way something is going",
        example: "The seabird showed Piko the direction to the iceberg."
      },
      {
        word: "familiar",
        meaning: "something that is known or recognized",
        example: "Piko heard a familiar sound."
      }
    ],

    questions: [
      {
        question: "Why did Piko become separated from his family?",
        type: "mcq",
        options: [
          "He wanted to leave",
          "A strong wave pushed him away",
          "He fell asleep",
          "His family flew away"
        ],
        answer: "A strong wave pushed him away",
        explanation:
          "A strong wave pushed Piko away while he was watching a fish."
      },

      {
        question: "What did Piko remember his father telling him?",
        type: "mcq",
        options: [
          "Run as fast as possible",
          "Hide behind a rock",
          "Stop, look, and think",
          "Always follow birds"
        ],
        answer: "Stop, look, and think",
        explanation:
          "Piko remembered his father's advice when he became lost."
      },

      {
        question: "Who gave Piko the first clue?",
        type: "mcq",
        options: [
          "A seal",
          "A fish",
          "His sister",
          "A whale"
        ],
        answer: "A seal",
        explanation:
          "A seal pointed Piko toward the far side of the sea."
      },

      {
        question: "How did Piko know he was close to his family?",
        type: "mcq",
        options: [
          "He saw their footprints",
          "He heard his sister's familiar sound",
          "He saw his father's hat",
          "A fish told him"
        ],
        answer: "He heard his sister's familiar sound",
        explanation:
          "Piko heard his little sister making a familiar sound near the iceberg."
      },

      {
        question: "What quality helped Piko find his family?",
        type: "mcq",
        options: [
          "Patience and careful thinking",
          "Being very loud",
          "Running quickly",
          "Being angry"
        ],
        answer: "Patience and careful thinking",
        explanation:
          "Piko stayed calm, followed clues, and asked animals for help."
      }
    ],

    isActive: true
  },

  {id:62,
    title: "The Treasure Under the School",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
One rainy afternoon, Daniel and his classmates were cleaning an old 
storage room at school.

Behind a broken cupboard, Daniel noticed a small wooden box.

The box had a picture of a star on its lid.

"Maybe it is treasure!" Daniel said.

Their teacher carefully opened the box.

Inside was an old piece of paper with a drawing of the school building. 
There was a red X near the library.

The teacher smiled.

"It looks like a treasure hunt."

The children followed the first clue to the library. Behind a large 
dictionary, they found another note.

It said:

"Go where stories sleep, but look below."

The children looked at the bookshelves. Then Maya noticed a small 
wooden drawer underneath the lowest shelf.

Inside the drawer was another clue.

The next clue took them to the school garden. Near a large tree, they 
found a stone with a star carved into it.

Daniel moved the stone carefully.

Under it was a small metal box.

Everyone became excited.

The teacher opened the box.

Inside were old photographs of the school, a tiny golden medal, and a 
letter written by the school's first teacher many years ago.

The letter explained that the medal was given to the first student 
who helped build the school garden.

The children realized that the treasure was not valuable because it 
was made of gold. It was valuable because it told the story of their 
school.

Their teacher placed everything safely in the school museum.

Daniel smiled.

The treasure hunt had helped them discover a part of their school's past.
`,

    vocabulary: [
      {
        word: "storage",
        meaning: "a place where things are kept",
        example: "The children cleaned the old storage room."
      },
      {
        word: "clue",
        meaning: "something that helps solve a puzzle or mystery",
        example: "The children followed each clue."
      },
      {
        word: "valuable",
        meaning: "important or worth a lot",
        example: "The old letter was valuable because it told the school's history."
      },
      {
        word: "museum",
        meaning: "a place where important objects are kept and shown",
        example: "The medal was placed in the school museum."
      }
    ],

    questions: [
      {
        question: "Where did Daniel find the wooden box?",
        type: "mcq",
        options: [
          "Under a tree",
          "Behind a broken cupboard",
          "Inside the library",
          "Near the school gate"
        ],
        answer: "Behind a broken cupboard",
        explanation:
          "Daniel found the wooden box behind a broken cupboard in the storage room."
      },

      {
        question: "What was marked with a red X on the first clue?",
        type: "mcq",
        options: [
          "The garden",
          "The classroom",
          "The library",
          "The playground"
        ],
        answer: "The library",
        explanation:
          "The first map showed a red X near the library."
      },

      {
        question: "Where was the metal box hidden?",
        type: "mcq",
        options: [
          "Under a large tree",
          "Inside a cupboard",
          "Behind a book",
          "Under the playground"
        ],
        answer: "Under a large tree",
        explanation:
          "The children found the metal box underneath a stone near a large tree."
      },

      {
        question: "Why was the treasure special?",
        type: "mcq",
        options: [
          "It contained many diamonds",
          "It contained a large amount of money",
          "It told an important story about the school",
          "It belonged to Daniel"
        ],
        answer: "It told an important story about the school",
        explanation:
          "The objects helped the children learn about the school's past."
      },

      {
        question: "What can we infer about the children?",
        type: "mcq",
        options: [
          "They were curious and worked together",
          "They disliked solving puzzles",
          "They wanted to keep the treasure",
          "They were afraid of the school"
        ],
        answer: "They were curious and worked together",
        explanation:
          "The children followed clues together and worked as a team to discover the treasure."
      }
    ],

    isActive: true
  },

  {id:63,
    title: "The Garden of Giant Vegetables",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Anju loved planting vegetables with her grandfather.

One afternoon, her grandfather gave her three tiny seeds.

"Plant them carefully," he said. "Then remember to give them just 
enough water."

Anju planted the seeds in three rows.

The next morning, something strange had happened.

A giant carrot had grown in the first row.

It was almost as tall as Anju.

In the second row was a huge pumpkin. It was so wide that Anju could 
not put her arms around it.

The third row had an enormous tomato.

Anju called her grandfather.

They looked at the vegetables carefully.

"We need to understand why they are growing so quickly," Grandpa said.

Anju noticed that the soil around the plants was sparkling.

She also saw tiny blue stones near the roots. 

Grandpa explained that these tiny stones are fertilizers which makes the plants to grow quickly.

Anju wanted to keep the giant vegetables, but the pumpkin was growing 
toward the garden fence and could soon damage it.

She and Grandpa decided to move the plant carefully.

They used a wooden board to support the pumpkin and gently guided its 
vine away from the fence.

The next day, the vegetables stopped growing.

Anju and Grandpa harvested them.

The giant carrot made enough soup for many people. The pumpkin was used 
to make several pies, and the tomato was shared with the neighbors.

Anju learned that growing food was not only about planting seeds. 
Plants needed care, attention, and sometimes a little help from people.
`,

    vocabulary: [
      {
        word: "enormous",
        meaning: "very large",
        example: "An enormous tomato grew in the garden."
      },
      {
        word: "soil",
        meaning: "the earth in which plants grow",
        example: "The soil around the plants was sparkling."
      },
      {
        word: "support",
        meaning: "to hold something up so it does not fall",
        example: "They used a board to support the pumpkin."
      },
      {
        word: "harvested",
        meaning: "picked or collected crops when they were ready",
        example: "Anju and Grandpa harvested the vegetables."
      }
    ],

    questions: [
      {
        question: "Who gave Anju the seeds?",
        type: "mcq",
        options: [
          "Her teacher",
          "Her grandfather",
          "Her neighbor",
          "Her friend"
        ],
        answer: "Her grandfather",
        explanation:
          "Anju's's grandfather gave her three tiny seeds."
      },

      {
        question: "What was strange about the vegetables?",
        type: "mcq",
        options: [
          "They were all different colors",
          "They grew extremely large overnight",
          "They disappeared every morning",
          "They could talk"
        ],
        answer: "They grew extremely large overnight",
        explanation:
          "The vegetables became enormous by the next morning."
      },

      {
        question: "What did Anju notice near the roots?",
        type: "mcq",
        options: [
          "Small insects",
          "Tiny blue stones",
          "Golden coins",
          "Bird feathers"
        ],
        answer: "Tiny blue stones",
        explanation:
          "Anju noticed tiny blue stones near the roots of the plants."
      },

      {
        question: "Why did Anju and Grandpa move the pumpkin?",
        type: "mcq",
        options: [
          "It was not ripe",
          "It was growing toward the fence",
          "They wanted to sell it",
          "It was too small"
        ],
        answer: "It was growing toward the fence",
        explanation:
          "The pumpkin could damage the garden fence, so they carefully moved it."
      },

      {
        question: "What did Anju learn from the experience?",
        type: "mcq",
        options: [
          "Plants do not need care",
          "Only large plants are useful",
          "Plants need care and attention",
          "Vegetables should not be shared"
        ],
        answer: "Plants need care and attention",
        explanation:
          "Anju learned that plants need care, attention, and sometimes help."
      }
    ],

    isActive: true
  },

  {id:64,
    title: "The Robot Who Wanted a Friend",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Bolt was a small robot built to help children at a science museum.

He could answer questions, count objects, find missing things, and even 
solve simple puzzles.

But Bolt had one problem.

He did not understand friendship.

One morning, a boy named Sam dropped his box of colored blocks.

The blocks rolled everywhere.

Bolt quickly calculated where each block had stopped.

"Red block: three meters away. Blue block: two meters away," he said.

Sam looked at him.

"Can you help me pick them up?"

"I have already told you where they are," Bolt replied.

Sam looked disappointed.

Later that day, Sam sat alone near a model rocket.

Bolt noticed that Sam was quiet.

His computer could not understand why.

He asked, "Are you sad?"

Sam nodded.

"My friends are playing outside. I wanted to build the rocket with 
them, but they left without me."

Bolt thought carefully.

He remembered something from the museum's books: friends help one another.

Bolt brought the colored blocks to Sam.

"Would you like to build something together?" he asked.

Sam smiled.

They built a colorful rocket using the blocks.

When the other children returned, they were amazed.

"Can we build one too?" they asked.

Sam nodded.

Soon everyone was working together.

Bolt watched them.

He finally understood that helping someone was not only about finding 
answers or solving problems. Sometimes, helping meant listening, sharing, 
and staying beside someone who felt lonely.

From that day, Bolt became more than a robot in the museum.

He became a friend.
`,

    vocabulary: [
      {
        word: "calculated",
        meaning: "worked out using numbers or careful thinking",
        example: "Bolt calculated where the blocks had stopped."
      },
      {
        word: "disappointed",
        meaning: "sad because something did not happen as hoped",
        example: "Sam looked disappointed."
      },
      {
        word: "lonely",
        meaning: "sad because you are alone",
        example: "Sam felt lonely when his friends left."
      },
      {
        word: "sharing",
        meaning: "letting others use or have something with you",
        example: "Sharing can help people become friends."
      }
    ],

    questions: [
      {
        question: "Where did Bolt work?",
        type: "mcq",
        options: [
          "At a school",
          "At a science museum",
          "At a library",
          "At a toy shop"
        ],
        answer: "At a science museum",
        explanation:
          "Bolt was built to help children at a science museum."
      },

      {
        question: "Why was Sam disappointed?",
        type: "mcq",
        options: [
          "He lost his lunch",
          "His friends left him out of their game",
          "He broke a robot",
          "He could not find a book"
        ],
        answer: "His friends left him out of their game",
        explanation:
          "Sam felt sad because his friends had gone outside without him."
      },

      {
        question: "What did Bolt first think helping meant?",
        type: "mcq",
        options: [
          "Giving food",
          "Giving information and solving problems",
          "Playing games",
          "Telling jokes"
        ],
        answer: "Giving information and solving problems",
        explanation:
          "Bolt initially believed that helping meant simply giving answers or solving problems."
      },

      {
        question: "What did Bolt do to help Sam feel better?",
        type: "mcq",
        options: [
          "He gave Sam a new robot",
          "He built a rocket with Sam",
          "He sent Sam home",
          "He turned off the lights"
        ],
        answer: "He built a rocket with Sam",
        explanation:
          "Bolt invited Sam to build a rocket together using the blocks."
      },

      {
        question: "What did Bolt learn about friendship?",
        type: "mcq",
        options: [
          "Friends should always win",
          "Friendship means listening, sharing, and helping",
          "Friends should never play together",
          "Friends only need to solve puzzles"
        ],
        answer: "Friendship means listening, sharing, and helping",
        explanation:
          "Bolt learned that friendship involves listening, sharing, and staying with someone who needs company."
      }
    ],

    isActive: true
  },

  {id:65,
    title: "The Mystery Footprints",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
Every morning, Emma walked past the playground on her way to school.

One Tuesday morning, she noticed a line of tiny footprints in the 
sand.

They began near the school gate and ended beside a large bush.

Emma stopped.

The footprints were strange.

They were smaller than a dog's footprints but larger than a bird's.

Emma followed them carefully.

Behind the bush, she found a broken flowerpot.

Next to it was a small green leaf.

Emma picked up the leaf and looked around.

Suddenly, she heard a soft sound.

"Meow."

A kitten stepped out from behind the bush.

Emma smiled.

The kitten had a tiny muddy paw.

She understood that the footprints belonged to the kitten.

But why was the kitten hiding there?

Emma noticed that the kitten kept looking toward the school kitchen.

She followed the kitten from a safe distance.

Near the kitchen door, a school worker was carrying a box of vegetables.

A carrot fell from the box.

The kitten quickly ran toward it.

Emma realized that the kitten was hungry.

She told the school worker about the kitten.

The worker placed some water in a bowl and contacted an animal rescue 
group.

The kitten was safely taken to a shelter.

A few days later, Emma saw a photograph of the kitten on the shelter's 
notice board.

It had been adopted by a family.

Emma smiled when she saw the picture.

The mysterious footprints had led her to a small animal that needed help.
`,

    vocabulary: [
      {
        word: "footprints",
        meaning: "marks left by someone's feet",
        example: "Emma followed the tiny footprints."
      },
      {
        word: "shelter",
        meaning: "a safe place where animals can stay",
        example: "The kitten was taken to an animal shelter."
      },
      {
        word: "adopted",
        meaning: "taken into a family to be cared for",
        example: "The kitten was adopted by a loving family."
      },
      {
        word: "mysterious",
        meaning: "something difficult to understand or explain",
        example: "Emma wanted to solve the mysterious footprints."
      }
    ],

    questions: [
      {
        question: "Where did the footprints begin?",
        type: "mcq",
        options: [
          "Near the kitchen",
          "Near the school gate",
          "Inside the classroom",
          "Near the library"
        ],
        answer: "Near the school gate",
        explanation:
          "The footprints began near the school gate."
      },

      {
        question: "What animal made the footprints?",
        type: "mcq",
        options: [
          "A puppy",
          "A bird",
          "A kitten",
          "A rabbit"
        ],
        answer: "A kitten",
        explanation:
          "Emma eventually discovered that the footprints belonged to a kitten."
      },

      {
        question: "Why was the kitten near the kitchen?",
        type: "mcq",
        options: [
          "It wanted to sleep",
          "It was looking for food",
          "It wanted to play",
          "It was waiting for Emma"
        ],
        answer: "It was looking for food",
        explanation:
          "Emma realized that the hungry kitten was looking for food."
      },

      {
        question: "Who helped the kitten?",
        type: "mcq",
        options: [
          "Only Emma",
          "The school worker and an animal rescue group",
          "Emma's teacher",
          "A gardener"
        ],
        answer: "The school worker and an animal rescue group",
        explanation:
          "The school worker contacted an animal rescue group to safely help the kitten."
      },

      {
        question: "What happened to the kitten at the end?",
        type: "mcq",
        options: [
          "It returned to the playground",
          "It ran away",
          "It was adopted by a family",
          "It stayed in the kitchen"
        ],
        answer: "It was adopted by a family",
        explanation:
          "The kitten was adopted by a family and found a safe home."
      }
    ],

    isActive: true
  },

  {id:66,
    title: "The Race Across the Desert",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
A school near the desert organized a special treasure hunt for the 
children.

Three friends, Sara, Omar, and Leo, decided to take part.

Their teacher gave them a map and explained the rules.

"The treasure is hidden somewhere along the safe walking path. You must 
follow the clues and stay together."

The first clue said:

"Find the place where three tall rocks stand like towers."

The children walked carefully across the sandy path.

After a few minutes, they found three tall rocks.

Behind the middle rock was another clue.

It said:

"Look for the shadow that points toward the morning sun."

The children looked around.

Leo noticed a long shadow from a palm tree.

They followed the direction of the shadow and found a small wooden sign.

The sign had a picture of a camel.

They walked toward the camel sign and discovered a small box.

Inside the box was a final clue.

It said:

"The treasure is close, but do not look where everyone is looking."

The children looked at the ground.

Nothing.

They looked behind the sign.

Nothing.

Then Sara noticed that the teacher had told them to stay on the safe 
walking path.

She looked carefully at the path.

One stone was shaped differently from all the others.

Sara moved the stone.

Underneath it was a small golden box.

The children cheered.

Inside were colorful badges and a note.

The note said, "The real treasure is learning to work together and 
notice things carefully."

The children proudly returned to school.

They discovered that solving the clues was more exciting than the 
prize itself.
`,

    vocabulary: [
      {
        word: "organized",
        meaning: "planned and arranged an activity",
        example: "The school organized a treasure hunt."
      },
      {
        word: "clue",
        meaning: "a hint that helps solve a puzzle",
        example: "The children followed each clue."
      },
      {
        word: "direction",
        meaning: "the way something points or moves",
        example: "They followed the direction of the shadow."
      },
      {
        word: "notice",
        meaning: "to see or observe something",
        example: "Sara noticed that one stone looked different."
      }
    ],

    questions: [
      {
        question: "What did the children have to do during the treasure hunt?",
        type: "mcq",
        options: [
          "Run faster than everyone",
          "Follow clues and stay together",
          "Find a camel",
          "Leave the walking path"
        ],
        answer: "Follow clues and stay together",
        explanation:
          "The teacher told the children to follow clues and stay together."
      },

      {
        question: "What did the second clue tell them to look for?",
        type: "mcq",
        options: [
          "A river",
          "A long shadow",
          "A red flower",
          "A camel"
        ],
        answer: "A long shadow",
        explanation:
          "The second clue told them to look for a shadow pointing toward the morning sun."
      },

      {
        question: "What helped Sara find the treasure?",
        type: "mcq",
        options: [
          "She noticed a different-looking stone",
          "A camel showed her",
          "Leo gave her the answer",
          "The teacher called her"
        ],
        answer: "She noticed a different-looking stone",
        explanation:
          "Sara carefully observed the path and noticed one stone was different."
      },

      {
        question: "Where was the golden box?",
        type: "mcq",
        options: [
          "Behind a palm tree",
          "Inside a camel sign",
          "Under a different-looking stone",
          "Near the three rocks"
        ],
        answer: "Under a different-looking stone",
        explanation:
          "The golden box was hidden underneath the unusual stone."
      },

      {
        question: "What was the real treasure according to the note?",
        type: "mcq",
        options: [
          "The golden box",
          "The badges",
          "Working together and noticing things carefully",
          "The desert"
        ],
        answer: "Working together and noticing things carefully",
        explanation:
          "The final note explained that teamwork and careful observation were the real treasures."
      }
    ],

    isActive: true
  },

  {id:67,
    title: "The Door to Tomorrow",

    grade: 1,

    category: "Reading Comprehension",

    difficulty: "hard",

    estimatedTime: 15,

    passage: `
One evening, Noah was cleaning his grandfather's old room.

Behind a tall bookshelf, he noticed a small wooden door.

The door had no handle.

Noah touched it.

Suddenly, the door opened.

On the other side was a bright room filled with clocks.

A large clock stood in the middle.

A note on the clock said:

"This door can show you one possible tomorrow."

Noah was curious.

He looked through the doorway.

He saw his school.

The playground was covered with paper and plastic.

Children were walking around the rubbish.

Noah felt worried.

He stepped back.

The door closed.

The next morning, Noah looked around his classroom.

There was a lot of paper near the recycling box.

During lunch, he noticed several empty bottles on the playground.

Noah remembered what he had seen through the mysterious door.

Instead of telling everyone that the future would definitely become 
messy, he spoke to his teacher.

"Can we make our school cleaner?" he asked.

The teacher agreed.

Noah and his classmates made signs reminding students to use recycling 
bins.

They also organized a clean-up activity.

By the end of the day, the playground was clean.

Noah returned home and opened the old door again.

This time, he looked through it.

The playground was green and clean.

Children were playing happily.

Noah smiled.

He understood that the door had not shown a fixed future.

It had shown one possible future.

The choices people made could change what happened next.
`,

    vocabulary: [
      {
        word: "possible",
        meaning: "something that may happen",
        example: "The door showed one possible tomorrow."
      },
      {
        word: "recycling",
        meaning: "using old materials again instead of throwing them away",
        example: "The children used the recycling bins."
      },
      {
        word: "organized",
        meaning: "planned an activity together",
        example: "The children organized a clean-up activity."
      },
      {
        word: "fixed",
        meaning: "not able to change",
        example: "Noah learned that the future was not fixed."
      }
    ],

    questions: [
      {
        question: "What did Noah find behind the bookshelf?",
        type: "mcq",
        options: [
          "A treasure chest",
          "A small wooden door",
          "A school bag",
          "A large window"
        ],
        answer: "A small wooden door",
        explanation:
          "Noah discovered a small wooden door behind the bookshelf."
      },

      {
        question: "What did Noah see through the door?",
        type: "mcq",
        options: [
          "A clean beach",
          "A messy school playground",
          "A large forest",
          "His bedroom"
        ],
        answer: "A messy school playground",
        explanation:
          "Noah saw a possible future in which the school playground was covered with rubbish."
      },

      {
        question: "What did Noah do after seeing the possible future?",
        type: "mcq",
        options: [
          "He stopped going to school",
          "He talked to his teacher about keeping the school clean",
          "He hid the door",
          "He blamed his classmates"
        ],
        answer: "He talked to his teacher about keeping the school clean",
        explanation:
          "Noah decided to take action and asked his teacher about making the school cleaner."
      },

      {
        question: "How did the children help?",
        type: "mcq",
        options: [
          "They painted the classroom",
          "They organized a clean-up and used recycling bins",
          "They closed the playground",
          "They threw everything away"
        ],
        answer: "They organized a clean-up and used recycling bins",
        explanation:
          "The children made signs, used recycling bins, and cleaned the playground."
      },

      {
        question: "What important idea did Noah learn?",
        type: "mcq",
        options: [
          "The future can never change",
          "People's choices can change what happens next",
          "Doors are always magical",
          "Schools should have fewer students"
        ],
        answer: "People's choices can change what happens next",
        explanation:
          "Noah realized that the future was not fixed and that people's actions could change it."
      }
    ],

    isActive: true
  }
];


const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected");

    // Clear existing reading comprehension data
    await ReadingComprehension.deleteMany({});

    // Combine all reading stories
    const allReadingData = [
      ...readingData,
      ...grade2ReadingData,
      ...grade3ReadingData,
      ...grade4ReadingData,
      ...grade5ReadingData,
    ];

    // Insert all stories at once
    await ReadingComprehension.insertMany(allReadingData);

    console.log(
      `Reading data inserted successfully: ${allReadingData.length} stories`
    );

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();