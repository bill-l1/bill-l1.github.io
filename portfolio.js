// TODO: sort by tags

const Tag = {
  MACHINE_LEARNING: "Machine Learning",
  PYTHON: "Python",
  GRAPHICS: "Graphics",
  CPP: "C++",
  MUSIC: "Music",
  GAME_DEV: "Game Development",
  JAVA: "Java",
  FULLSTACK: "Full-stack Development",
  MOBILE: "Mobile Development",
  NONSOFTWARE: "Non-software",
};

const entries = [
  {
    title: "CheatID",
    start: new Date(2024, 7),
    end: null,
    tags: [Tag.FULLSTACK],
    description:
      "Analytics and anti-cheat platform for live service game development.",
    img: "assets/cheatid.png",
    links: [
      {
        icon: "fa-link",
        text: "demo.cheatid.com",
        href: "https://demo.cheatid.com/",
      },
    ],
  },
  {
    title: "Picross",
    start: new Date(2024, 7),
    end: new Date(2024, 7),
    tags: [Tag.FULLSTACK],
    description: "Daily nonogram (Hanjie/Picross) puzzles on the web.",
    img: "assets/picross.png",
    links: [
      {
        icon: "fa-github",
        text: "github.com/bill-l1/picross",
        href: "https://github.com/bill-l1/picross",
      },
      {
        icon: "fa-play",
        text: "picross-daily.netlify.app",
        href: "https://picross-daily.netlify.app/s",
      },
    ],
  },
  {
    title: "Semi-supervised Image Classification",
    start: new Date(2024, 4),
    end: new Date(2024, 4),
    tags: [Tag.FULLSTACK],
    description:
      "CS484 (Computational Vision) final project. Compares semi-supervised learning methods to increase accuracy on sparsely labelled image datasets.",
    img: "assets/cs484.png",
    links: [
      {
        icon: "fa-github",
        text: "github.com/bill-l1/picross",
        href: "https://github.com/bill-l1/picross",
      },
    ],
  },
  {
    title: "Pokémon RL",
    start: new Date(2023, 8),
    end: new Date(2023, 8),
    tags: [Tag.MACHINE_LEARNING, Tag.PYTHON],
    description:
      "Research project for teaching an agent how to play <a href='https://pokemonshowdown.com/' target='_blank'><u>Pokémon Showdown</u></a> with reinforcement learning. Currently only supports Generation 9 random battles.",
    img: "assets/pokemon.jpg",
    links: [
      {
        icon: "fa-github",
        text: "github.com/bill-l1/pokemon-showdown-rl",
        href: "https://github.com/bill-l1/pokemon-showdown-rl",
      },
      {
        icon: "fa-play",
        text: "Demonstration",
        href: "https://www.youtube.com/watch?v=ljV8wVXO7h4",
      },
    ],
  },
  {
    title: "Analog Video Simulation",
    start: new Date(2023, 4),
    end: new Date(2023, 7),
    tags: [Tag.GRAPHICS, Tag.CPP],
    description:
      "CS488 (Computer Graphics) final project. Comparison of different texture sampling methods to simulate a CRT monitor display using a rasterizer built in class.",
    img: "assets/cs488final.png",
    links: null,
  },
  {
    title: "badends - bad influence",
    start: new Date(2021, 8),
    end: new Date(2022, 4),
    tags: [Tag.MUSIC, Tag.NONSOFTWARE],
    description: "Unfinished neo-soul/lo-fi EP.",
    img: "assets/badinfluence.jpg",
    links: [
      {
        icon: "fa-soundcloud",
        text: "Listen",
        href: "https://soundcloud.com/bvdends/sets/bad-influence/s-cnW5ltzxKVV?si=6345c2b03fd9477a8010cf618cfaa7ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },
  {
    title: "string theory",
    start: new Date(2021, 11),
    end: new Date(2021, 11),
    tags: [Tag.GRAPHICS, Tag.GAME_DEV],
    description:
      "Experimental audio-visual horror demo built in WebGL. Made some fragment shaders in GLSL to emulate visual glitches and other post-processing effects.",
    img: "assets/stringtheory.jpg",
    links: [
      {
        icon: "fa-link",
        text: "replit.com/@bill_l1/string-theory",
        href: "https://string-theory--bill_l1.repl.co/",
      },
    ],
  },
  {
    title: "Resonance",
    start: new Date(2021, 0),
    end: new Date(2021, 7),
    tags: [Tag.FULLSTACK, Tag.MOBILE],
    description:
      "Social media app for sharing music. Used to be available on both web and mobile.",
    img: "assets/resonance.png",
    links: [
      {
        icon: "fa-play",
        text: "Demonstration",
        href: "https://jumpshare.com/v/LyEjbXCI32PS4CDYuLXb",
      },
    ],
  },
  {
    title: "Sorcery",
    start: new Date(2020, 10),
    end: new Date(2020, 11),
    tags: [Tag.CPP, Tag.GAME_DEV],
    description:
      "CS246 final project. Command line-based card game similar to Hearthstone or Magic the Gathering.",
    img: "assets/sorcery.png",
    links: [
      {
        icon: "fa-github",
        text: "Link to repo",
        href: "https://github.com/bill-l1/cs246-sorcery",
      },
    ],
  },
  {
    title: "b.li - senioritis",
    start: new Date(2019, 5),
    end: new Date(2019, 10),
    tags: [Tag.MUSIC, Tag.NONSOFTWARE],
    description:
      "Experimental album. First attempt at self-producing and video production.",
    img: "assets/senioritis.jpg",
    links: [
      {
        icon: "fa-spotify",
        text: "Listen",
        href: "https://open.spotify.com/album/6h8Co4HpBIVGiZD8XKdPjq",
      },
    ],
  },
  {
    title: "golf?",
    start: new Date(2019, 4),
    end: new Date(2019, 4),
    tags: [Tag.JAVA, Tag.GAME_DEV],
    description:
      "2D golf game made in Java (Swing). Grade 12 computer science final.",
    img: "assets/golf.jpg",
    links: [
      {
        icon: "fa-play",
        text: "Demonstration",
        href: "https://www.youtube.com/watch?v=9ncQBeK4loo",
      },
    ],
  },
  {
    title: "Luminara",
    start: new Date(2018, 4),
    end: new Date(2018, 4),
    tags: [Tag.GAME_DEV],
    description:
      "Music game inspired by Electroplankton for the DS. Made in 24 hours for 2018 Repl.it & Hack Club's p5.js Challenge.",
    img: "assets/luminara.png",
    links: [
      {
        icon: "fa-play",
        text: "Play the demo",
        href: "https://luminara--adeelerino.repl.co/",
      },
    ],
  },
  {
    title: "Super Spatial Samurai",
    start: new Date(2016, 8),
    end: new Date(2016, 8),
    tags: [Tag.GAME_DEV],
    description:
      "2D scrolling shooter made in Flash. Submission for the 2016 Scholastic Arts & Writing Awards.",
    img: "assets/superspatialsamurai.png",
    links: [
      {
        icon: "fa-play",
        text: "Demonstration",
        href: "https://www.youtube.com/watch?v=9PNQif56yjY",
      },
    ],
  },
];

const getEntryLinkElement = ({ icon, text, href }) => `
    <div class="text-center">
        <a class="text-center" href="${href}" target='_blank'>
            <i class="fa ${icon} pr-1"></i>
            <u>${text}</u>
        </a>
    </div>
`;

const getEntryElement = ({
  title,
  start,
  end,
  tags,
  description,
  img,
  links,
}) => {
  const startStr = start.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
  const endStr = end
    ? end.toLocaleDateString(undefined, { year: "numeric", month: "long" })
    : "Present";
  const dates =
    end && start.getTime() == end.getTime()
      ? `${startStr}`
      : `${startStr} - ${endStr}`;
  const tagStr = tags.join(", ");
  const linkStr = links
    ? links.map((link) => getEntryLinkElement(link)).join("")
    : "";
  const imgStr = img ? `<img class="thumbnail w-75 mb-3" src="${img}"/>` : "";
  return `
        <div class="row mb-5">
            <div class="col text-center my-auto">
                <div class="text-nowrap">
                    <h3>${title}</h3>
                    <p class="">${dates}</p>
                    <small class="text-muted">Tags: ${tagStr}</small>
                </div>
                <p class="readable my-4">${description}</p>
            </div>
            <div class="col text-center my-auto">
                ${imgStr}
                ${linkStr}
            </div>
        </div>
    `;
};

const getYearElement = (year) => `
    <div class="text-right mb-4 year">
        <small class="border p-1">${year}</small>
    </div>
`;

const createEntries = (entries, showNonSoftware = false) => {
  $("#entries").empty();
  const entriesByYear = entries
    .filter(({ tags }) => showNonSoftware || !tags.includes(Tag.NONSOFTWARE))
    .reduce((acc, entry) => {
      const date = (entry.end || new Date()).getFullYear();
      return {
        ...acc,
        [date]: (acc[date] || []).concat([entry]),
      };
    }, {});
  Object.entries(entriesByYear)
    .sort()
    .reverse()
    .forEach(([year, entries]) => {
      $("#entries").append($(getYearElement(year)));
      entries.forEach((entry) =>
        $("#entries").append($(getEntryElement(entry)))
      );
    });
};

$(document).ready(() => {
  createEntries(entries);
  $("#show-non-software").change(function () {
    createEntries(entries, this.checked);
  });
});
