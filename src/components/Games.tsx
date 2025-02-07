import React, { useState, useEffect } from 'react';
import { Gamepad2, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router-dom';

const gameImages = [
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(5%20of%2057).png", alt: "Hyper low-angled shot of arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(6%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(7%20of%2057).png", alt: "High-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/new_pinball_20241124_160220.jpg", alt: "Three pinball machines. Gophers, Spiderman, and Ghostbusters" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(8%20of%2057).png", alt: "Picture of Sega Super GT arcade cabinets at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(13%20of%2057).png", alt: "Picture of Police Trainer arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(15%20of%2057).png", alt: "Picture of the console setup at 6R's entertainment yard. Xbox One X and Playstation 5 consoles are shown" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(44%20of%2057).png", alt: "Picture of high score board at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(37%20of%2057).png", alt: "Picture of Xbox One X controller at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(17%20of%2057).png", alt: "Small toddler sized arcade cabinets with Pac Man and a Paw Patrol game at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(9%20of%2057).png", alt: "Picture of mother and daughter playing Teenage Mutant Ninja Turtle arcade game at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(30%20of%2057).png", alt: "Picture of someone using arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(33%20of%2057).png", alt: "Picture of pink custom acrade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(34%20of%2057).png", alt: "Picture of red and blue custom arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(18%20of%2057).png", alt: "Picture of MVS arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(19%20of%2057).png", alt: "Picture of control panel of an MVS arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(20%20of%2057).png", alt: "Picture of airhockey table at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(26%20of%2057).png", alt: "Picture of Star Wars Trilogy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(27%20of%2057).png", alt: "Picture of Suzuka 8 hours arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(42%20of%2057).png", alt: "Picture of controller for Xbox One X at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(45%20of%2057).png", alt: "Picture of Iron Maiden arcade machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(46%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(47%20of%2057).png", alt: "Picture of Astro City arcade cabinet running Marvel vs Capcom 2 at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(49%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(43%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(41%20of%2057).png", alt: "Picture of lindy arcade cabinet at 6R's entertainment yard. Running Marvel vs Capcom 2" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(31%20of%2057).png", alt: "Picture 6R banner explaining services offered at 6R's entertainment yard."},
];

// Remove Laserdisc from hardware images mapping
const hardwareImages = {
  "Arcade Classics": "Arcade%20Classics.png",
  "Arcade Shooters": "Arcade%20Shooters.png",
  Atomiswave: "Atomiswave_Logo.webp",
  Cave: "Cave.png",
  CSP1: "Capcom%20CPS-1.png",
  CSP2: "Capcom%20CPS-2.png",
  CSP3: "Capcom%20CPS-3.png",
  "Namco ES3": "namco_system_es3_logo.png",
  "Neo Geo MVS": "Neo%20Geo.png",
  "Sega Lindbergh": "sega_lindebergh_board_logo.png",
  "Sega Naomi": "Sega_NAOMI_logo.png",
  "Sega Ringedge": "Sega.png",
  "Taito F3": "Taito.png",
  "Taito TTX": "Taito.png",
  "Taito TTX2": "Taito.png",
  "Taito TTX3": "Taito.png"
};

export default function Games() {
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null);
  const [showAllTaito, setShowAllTaito] = useState(false);
  const [currentGamesList, setCurrentGamesList] = useState<string[]>([]);

  // Game lists organized by hardware
  const gamesByHardware = {
    "Arcade Classics": [
      "Bad Dudes vs Dragon Ninja",
      "Battle Circuit",
      "Black Tiger",
      "Bubble Bobble",
      "Bubble Bobble Test Game 1.2",
      "Captain America and The Avengers",
      "Century Evolution HD",
      "Crazy Taxi",
      "Demon Front",
      "Double Dragon",
      "Fightcade",
      "Gauntlet",
      "Groove Coaster",
      "Killer Instinct",
      "Mortal Kombat",
      "Mortal Kombat 2",
      "Mortal Kombat 3",
      "NBA Hangtime",
      "NBA Jam",
      "NBA Jam: Tournament Edition",
      "NBA Maximum Hangtime",
      "NBA on Fire",
      "NBA Showtime-NBA on NBC Gold Edition",
      "Night Slashers",
      "Ninja Baseball Bat Man",
      "Oriental Legend",
      "Police Trainer",
      "Project Fighter 15",
      "San Francisco Rush Extreme Racing",
      "Secret Agent",
      "SF Games",
      "Shinobi",
      "Shinobi Saga",
      "Sly Spy: Secret Agent",
      "Spectral vs Generation",
      "Star Wars Trilogy Arcade",
      "Sunset Riders",
      "Tatsunoko vs Capcom: Ultimate All Stars",
      "Teenage Mutant Ninja Turtles",
      "Teenage Mutant Ninja Turtles: Turtles in Time",
      "The Simpsons",
      "Ultimate Mortal Kombat 3",
      "Ultimate Mortal Kombat 3+",
      "Vendetta",
      "Wonder Boy",
      "Wonder Boy in Monster Land",
      "WWF Superstars",
      "WWF Wrestling",
      "WWF Wrestlefest",
      "X-Men vs Street Fighter"
    ],
    "Arcade Shooters": [
      "Air Buster",
      "Boogie Wings",
      "Blazing Angels",
      "Captain James",
      "Cotton Parodius",
      "Life Force: Salamander 2"
    ],
    Atomiswave: [
      "Animal Basket",
      "Block Ping Pong",
      "Demolish Fist",
      "Dirty Pigskin Football",
      "Dolphin Blue",
      "Extreme Hunting",
      "Extreme Hunting 2",
      "Faster Than Speed",
      "Fist of the North Star",
      "Guilty Gear Isuka",
      "Guilty Gear X",
      "Knights of Valour Seven Spirits",
      "Maximum Speed",
      "Metal Slug 6",
      "Neo Geo Battle Coliseum",
      "Ranger Mission",
      "Rumble Fish",
      "Rumble Fish 2",
      "Salary Man Kintaro",
      "Samurai Shodown IV",
      "Sega Bass Fishing Challenge",
      "Sega Clay Challenge",
      "Sports Shooting USA",
      "Sushi Bar",
      "The King of Fighters Neowave",
      "The Rumble Fish",
      "The Rumble Fish 2",
      "Yai Yai Drive"
    ],
    CSP1: [
      "Adventure Quiz Capcom World 2",
      "Captain Commando",
      "Carrier Air Wing",
      "Cyberbots: Full Metal Madness",
      "Dynasty Wars",
      "Final Fight",
      "Forgotten Worlds",
      "Cadillacs and Dinosaurs",
      "Gunbare! Marine Kun",
      "Daimakaimura",
      "Ghouls 'N Ghosts",
      "Knights of the Round",
      "Lost Worlds",
      "Magic Sword: Heroic Fantasy",
      "Mega Man: The Power Battle",
      "Mega Twins",
      "Muscle Bomber Duo's Ultimate Team",
      "Nemo",
      "Pang! 3",
      "Pnickies",
      "Progear",
      "Quiz & Dragons: Capcom Quiz Game",
      "Quiz Tonosama no Yabou 2",
      "Rainbow Edition",
      "Saturday Night Slam Masters",
      "Street Fighter II: Champion Edition",
      "Street Fighter II: Champion Edition - Rainbow Edition",
      "Street Fighter II: Hyper Fighting",
      "Street Fighter II: The World Warrior",
      "Strider",
      "The King of Dragons",
      "The Punisher",
      "Three Wonders",
      "U.N. Squadron",
      "Varth",
      "Warriors of Fate",
      "Willow"
    ],
    CSP2: [
      "1944: The Loop Master",
      "1996: The War Against Destiny",
      "Alien vs Predator",
      "Armored Warriors",
      "Battle Circuit",
      "Capcom Sports Club",
      "Cyberbots: Full Metal Madness",
      "Darkstalkers: The Night Warriors",
      "Dimahoo",
      "Dungeons & Dragons: Tower of Doom",
      "Dungeons & Dragons: Shadow Over Mystara",
      "Eco Fighters",
      "Gigawing",
      "Hyper Street Fighter II: The Anniversary Edition",
      "Jyangokushi: Haoh no Saihai",
      "Japan Puzzle CHK",
      "Mars Matrix",
      "Marvel Super Heroes",
      "Marvel Super Heroes vs Street Fighter",
      "Marvel vs Capcom",
      "Mega Man 2: The Power Fighters",
      "Mega Man: The Power Battle",
      "Mighty Pang",
      "Night Warriors: Darkstalkers Revenge",
      "Progear",
      "Puzz Loop 2",
      "Quiz Nanairo Dreams: Nijiirochou",
      "Reverse",
      "Ring of Destruction: Slammasters II",
      "Street Fighter Alpha",
      "Street Fighter Alpha 2",
      "Street Fighter Alpha 3",
      "Super Gem Fighter Mini Mix",
      "Super Puzzle Fighter II Turbo",
      "Super Street Fighter II: New Challengers",
      "Super Street Fighter II: Tournament Battle",
      "Super Street Fighter II Turbo",
      "Super Puzzle Fighter 2",
      "Vampire Savior: The Lord of the Vampire",
      "Vampire: Children of the Night",
      "X-Men: Children of the Atom",
      "X-men vs Street Fighter"
    ],
    CSP3: [
      "JoJo's Venture EU",
      "JoJo's No Kimyou na Bouken JP",
      "JoJo's Bizarre Adventure EU",
      "Red Earth EX",
      "Red Earth JP",
      "Street Fighter III: New Generation EU",
      "Street Fighter III: New Generation JP",
      "Street Fighter III: 2nd Impact US",
      "Street Fighter III 2nd Impact JP",
      "Street Fighter III: 3rd Strike",
      "Street Fighter III: 3rd Strike EN",
      "Street Fighter III: 3rd Strike JP"
    ],
    Cave: [
      "Akai Katana",
      "Dangun Feveron INT",
      "Dangun Feveron JP",
      "Deathsmilles Mega Black Label JP",
      "Donpachi US",
      "Donpachi JP",
      "DoDonPachi INT",
      "DoDonPachi JP",
      "DoDonPachi 2 INT",
      "DoDonPachi 2 JP",
      "DoDonPachi: Dai-Fukatsu 1.0 JP",
      "DoDonPachi: Dai-Fukatsu 1.5 JP",
      "DoDonPachi: Dai-Fukatsu Black Label JP",
      "DoDonPachi DAI-OU-JOU Black Label",
      "DoDonPachi DAI-OU-JOU JP",
      "ESP Galuda INT",
      "ESP Galuda 2 JP",
      "ESP Ra.De. INT",
      "ESP Ra.De. JP",
      "Guwange",
      "IBARA JP",
      "Ibara Kuro: Black Label JP",
      "Ketsui: Kizuna Jigoku Tachi JP",
      "Muchi Much Pork! JP",
      "Mushihime-sama Futari 1.5 JP",
      "Mushihime-sama Futari JP",
      "Mushihime-sama Futari v1.01 JP",
      "Mushihime-sama Futari: Black Label INT",
      "Mushihime-sama Futari: Black Label JP",
      "MushihimeTama",
      "Pink Sweets: Ibara Sorekara",
      "Progear US",
      "Progear JP"
    ],
    "Namco ES3": [
      "Mario Party",
      "Pokken Tournament",
      "Tekken 7 Fated Retribution",
      "Tekken 7 Fated Retribution Round 2",
      "Time Crisis 5",
      "Vampire Night Arcade Time 5",
      "Vampire Night Arcade Time 6"
    ],
    "Neo Geo MVS": [
      "2020 Super Baseball",
      "3 Count Bout",
      "Art of Fighting",
      "Art of Fighting 2",
      "Art of Fighting 3: The Path of the Warrior",
      "Baseball Stars 2",
      "Baseball Stars Professional",
      "Battle Flip Shot",
      "Blazing Star",
      "Blues Journey",
      "Breakers",
      "Breakers Revenge",
      "Burning Fight",
      "Captain Tomaday",
      "Chibi Maruko-Chan: Marukochan",
      "Crossed Swords",
      "Crossed Swords 2",
      "Cyber Lip",
      "Cyber Cup",
      "Fatal Fury: King of Fighters",
      "Fatal Fury 2",
      "Fatal Fury 3 Road",
      "Fatal Fury Special",
      "Fight Man",
      "Football Frenzy",
      "Galaxy Fight: Universal Warriors",
      "Ganryu",
      "Garou - Mark of the Wolves",
      "Ghost Pilots",
      "Ghost Pop",
      "Goal! Goal! Goal!",
      "Gururin",
      "Hey! Johnny Home",
      "Janshin Densetsu Quest for",
      "Jockey Grand Prix",
      "Karnov's Revenge",
      "King of Fighters '94",
      "King of Fighters '95",
      "King of Fighters '96",
      "King of Fighters '97",
      "King of Fighters '98",
      "King of Fighters '99",
      "King of Fighters 2000",
      "King of Fighters 2001",
      "King of Fighters 2002",
      "King of Fighters 2003",
      "King of the Monsters",
      "King of the Monsters 2 : The Next Thing",
      "Last Blade",
      "Last Blade 2",
      "Last Resort",
      "League Bowling",
      "Legend of Success Joe",
      "Magical Drop II",
      "Magical Drop III",
      "Magical Lord",
      "Mahjongg Kyo Retsudan",
      "Matrimelee",
      "Metal Slug",
      "Metal Slug 2",
      "Metal Slug 3",
      "Metal Slug 4",
      "Metal Slug 5",
      "Metal Slug 6",
      "Minasan no Okagesamadesu! - Dai Susoroko Taikai",
      "Money Puzzle Exchanger",
      "Mutation Nation",
      "Nam 1975",
      "Neo Bomberman",
      "Neo Drift Out - New Technology",
      "Neo Turf Masters",
      "Neo Geo Cup '98",
      "Nightmare in the Dark",
      "Ninja Combat",
      "Ninja Commando",
      "Ninja Master's - Haoh Ninpo Oho",
      "Over Top",
      "Panic Bomber",
      "Pleasure Goal",
      "Pochi and Nyaa",
      "Power Spikes II",
      "Prehistoric Isle 2",
      "Pulstar",
      "Puzzle Bobble",
      "Puzzle Bobble 2",
      "Puzzle De Pon!",
      "Puzzle De Pon! R!",
      "Quiz Daisousa Sen - The Last Count Down",
      "Quiz King of Fighters",
      "Quiz Meintantei Neo & Geo-",
      "Quiz Daisousa Sen Part 2",
      "Rage of the Dragons",
      "Ragnagard",
      "Real Bout Fatal Fury",
      "Real Bout Fatal Fury 2",
      "Real Bout Fatal Fury Special",
      "Riding Hero",
      "Robo Army",
      "SNK vs Capcom - SVC Chaos",
      "Samurai Shodown",
      "Samurai Shodown II",
      "Samurai Shodown III",
      "Samurai Shodown IV - Amakusa's Revenge",
      "Samurai Shodown V",
      "Samurai Shodown V Special",
      "Savage Reign",
      "Sengoku",
      "Sengoku 2",
      "Sengoku 3",
      "Shock Troopers",
      "Shock Troopers 2nd Squad",
      "Shougi No Tatsujin - Master of Shougi",
      "Soccer Brawl",
      "Spin Master",
      "Stakes Winner",
      "Stakes Winner 2",
      "Street Hoop",
      "Strikers 1945 Plus",
      "Super Dodge Ball",
      "Super Sidekicks",
      "Super Sidekicks 2 - The World Championship",
      "Super Sidekicks 3 - The Next Glory",
      "The Super Spy",
      "Tecmo World Soccer '96",
      "The Ultimate 11",
      "Thrash Rally",
      "Top Hunter - Roddy & Cathy",
      "Top Player's Golf",
      "Twinkle Star Sprites",
      "V-Liner",
      "Viewpoint",
      "Voltage Fighter - Gowcaizer",
      "Waku Waku 7",
      "Wind Jammers",
      "World Heroes",
      "World Heroes 2",
      "World Heroes 2 Jet",
      "World Heroes Perfect",
      "Zed Blade",
      "Zintrick",
      "Zupapa!"
    ],
    "Sega Lindbergh": [
      "Rampage Medley",
      "Initial D Arcade Stage 4",
      "Initial D Arcade Stage 4 EX",
      "Island of Spirit",
      "Rampage 2: Special Tours Deluxe",
      "Rampage 4: Ultimate Street",
      "Sega Race TV",
      "Star Trek: Voyager The Arcade",
      "Secuna",
      "Pop Splash",
      "Virtual Fighter 5 Rev C",
      "Virtua Tennis 3"
    ],
    "Sega Naomi": [
      "Capcom vs SNK 2",
      "Dynamite",
      "Marvel vs Capcom 2",
      "Marvel vs Capcom 2 ENG",
      "Power Stone 2",
      "Psyvariar 2",
      "Virtua Tennis 2",
      "Zero Gunner 2"
    ],
    "Sega Ringedge": [
      "Blade Arcus from Shining",
      "Blade Strangers",
      "Border Break S Ultimate",
      "Fighting Climax",
      "Fighting Climax Ignition",
      "Guilty Gear Gold Rev 2",
      "Guilty Gear XX AC Plus R",
      "Guilty Gear XX AC Core Plus R",
      "Melty Blood Actress Again",
      "Phantom Breaker Another Code",
      "Sonic Sega All Stars Racing",
      "Transformers Human Alliance",
      "Under Defeat HD+",
      "Under Night IN-BIRTH Exe Late",
      "Under Night IN-BIRTH Exe Late[st]",
      "Virtua Tennis 4"
    ],
    "Taito F3": [
      "ABC Arabian Magic",
      "Air Ranger Rescue",
      "Bubble Memories",
      "Bubble Memories: The Story of",
      "Bubble Bobble III",
      "Bubble Memories: The Story of",
      "Bubble Bobble III Black Edition",
      "Cleopatra Fortune",
      "Gekirindan",
      "Grid Seeker: Project Storm Hammer",
      "Gunlock",
      "In Tournament Cup 64",
      "Kaiser Knuckle",
      "Kirameki Star Road",
      "Land Maker",
      "Pop N' Pop",
      "Puzzle Bobble 2",
      "Puzzle Bobble 3",
      "Puzzle Bobble 4",
      "Prime Time Fighter",
      "Puchi Carat",
      "Space Invaders '95: Attack of the Lunar Loonies",
      "Space Invaders DX",
      "Super Cup Finals",
      "Taito Cup Finals",
      "Taito Super Seal",
      "Top Force",
      "Twin Cobra II",
      "Twin Qix",
      "Re-Seal RV",
      "Ring Rage",
      "Ring Rise"
    ],
    "Taito TTX": [
      "Blocking Ball Shooter",
      "Chaos Breaker FX",
      "Espgaluda Generations",
      "Goketsujii Ichizoku Matsuri",
      "Sengo Tengon",
      "Gun Down Spirits of Zeon",
      "Homura TTX",
      "King of Fighters '98 Ultimate Match",
      "King of Fighters Sky Stage",
      "Raiden III TTX",
      "Raiden IV TTX",
      "Shikigami No Shiro III",
      "Space Adventure TTX",
      "Taisen Hot Gimmick 5",
      "Tetris The Grand Master 5: Terror",
      "Trouble Witches AC",
      "Value Limit R"
    ],
    "Taito TTX2": [
      "Akai Katana Shin",
      "Aqua Pazza Aquaplus Dream Match",
      "Arcana Heart 2",
      "Arcana Heart 3 - Love Max Six Stars!!!",
      "Battle Fantasia",
      "BlazBlue: Calamity Trigger",
      "BlazBlue: Central Fiction",
      "BlazBlue: Continuum Shift",
      "BlazBlue: Continuum Shift II",
      "BlazBlue: Chronophantasma",
      "Chaos Breaker",
      "Chaos Code - New Sign of Catastrophe",
      "Crimzon Clover for NESiCAxLive",
      "Daemon Bride - Additional Gain",
      "Darius Burst Another Chronicle",
      "Darius Burst Another Chronicle EX",
      "Dark Awake - The King Has No Name",
      "Deathsmiles - Run For Your Dorime",
      "Elevator Action",
      "Ein-Eins Perfektewelt",
      "Exception",
      "Gaia Attack 4",
      "Goketsujii Ichizoku - Matsuri Senzo Kuyo",
      "Groove Coaster",
      "Haunted Museum",
      "Haunted Museum II",
      "Homura",
      "Hyper Street Fighter II - The Anniversary Edition",
      "Ikaruga",
      "King of Fighters '98 Ultimate Match Final Edition",
      "King of Fighters 2002 Unlimited Match",
      "King of Fighters XII",
      "King of Fighters XIII",
      "King of Fighters XIII Climax",
      "King of Fighters Maximum Impact Regulation A",
      "Magical Beat",
      "Music Gun! Gun! 2",
      "Nitroplus Blasterz: Heroines Infinite Duel",
      "Persona 4 - The Ultimate in Mayonaka Arena",
      "Persona 4 - The Ultimax Ultra Suplex Hold",
      "Power Instinct 2012",
      "Psychic Force 2012",
      "Raiden III",
      "Raiden IV",
      "Raiden Saga",
      "The Rumble Fish 2",
      "Samurai Shodown - Edge of Destiny",
      "Senkou No Ronde DUO v2.05",
      "Skullgirls 2nd Encore",
      "Space Invaders for NESiCAxLive",
      "Spica Adventure",
      "Strania - The Stella Machina",
      "Street Fighter Zero 3",
      "Street Fighter III 3rd Strike",
      "Street Fighter IV",
      "Street Fighter III 3rd Strike",
      "Street Fighter IV",
      "Suggoi! Dream Depth 4 v1.8",
      "Super Street Fighter IV Arcade Edition",
      "Super Street Fighter IV Arcade Edition 2012",
      "Tatakai & Mahjong",
      "Trouble Witches AC - Amalgam no Joutachi",
      "Ultra Street Fighter IV",
      "Vampire Savior - The Lord of Vampire",
      "Wacky Races",
      "Yatagarasu Attack on Cataclysm"
    ],
    "Taito TTX3": [
      "BlazBlue Central Fiction",
      "BlazBlue Cross Tag Battle",
      "Death Road Survivors",
      "Fighting Ex Layer",
      "Theatrhythm Fatal Fantasy",
      "All Star Carnival",
      "King of Fighters XIV",
      "Million Arthur Arena Blood",
      "Samurai Spirits",
      "School of Ragnarock",
      "SNK Tag Team Frenzy AC",
      "Street Fighter V Type Arcade",
    ]
  };

  // Helper function to check if a system is Taito
  const isTaitoSystem = (system: string) => system.startsWith('Taito');

  // Modified render logic for hardware buttons
  const renderHardwareButtons = () => {
    const systems = Object.keys(gamesByHardware);
    
    return systems.map(hardware => {
      // Skip other Taito systems when not showing all
      if (isTaitoSystem(hardware) && !showAllTaito && hardware !== 'Taito F3') {
        return null;
      }

      // Add number badge for Taito systems
      const getTaitoNumber = () => {
        switch(hardware) {
          case 'Taito F3': return 1;
          case 'Taito TTX': return 2;
          case 'Taito TTX2': return 3;
          case 'Taito TTX3': return 4;
          default: return null;
        }
      };

      return (
        <div key={hardware} className="flex flex-col">
          <button 
            className={`relative transition-colors p-6 rounded-lg w-full h-[120px] flex items-center justify-center
              ${selectedHardware === hardware ? 'bg-pink-500' : 'bg-gray-800 hover:bg-pink-500'}`}
            onClick={() => {
              if (isTaitoSystem(hardware)) {
                setShowAllTaito(true);
              }
              setSelectedHardware(selectedHardware === hardware ? null : hardware);
            }}
          >
            <img 
              src={`https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/${hardwareImages[hardware]}`}
              alt={hardware}
              className="max-h-[80px] w-auto object-contain"
            />
            {isTaitoSystem(hardware) && showAllTaito && (
              <span className="absolute top-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {getTaitoNumber()}
              </span>
            )}
          </button>
        </div>
      );
    });
  };

  // Update useEffect to handle Taito visibility
  useEffect(() => {
    if (!selectedHardware || !isTaitoSystem(selectedHardware)) {
      setShowAllTaito(false);
    }
  }, [selectedHardware]);

  // Update useEffect to handle game list updates
  useEffect(() => {
    if (selectedHardware) {
      // Clear the current list first
      setCurrentGamesList([]);
      // Set the new list after a brief delay to ensure cleanup
      setTimeout(() => {
        setCurrentGamesList(gamesByHardware[selectedHardware] || []);
      }, 0);
    } else {
      setCurrentGamesList([]);
    }
  }, [selectedHardware]);

  // Inside the Games component, add this function
  const scrollToArcadeSelection = () => {
    const element = document.getElementById('arcade-selection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGameList = () => {
    const element = document.getElementById('mobile-game-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Modify the rendering of game lists to use currentGamesList instead of directly accessing gamesByHardware
  const renderGameList = () => {
    if (!selectedHardware) return null;

    return (
      <ul className="grid grid-cols-1 gap-1 text-sm">
        {currentGamesList.map((game) => (
          <li key={game} className="text-gray-300 hover:text-white">
            • {game}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="games" className="py-20 bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <img src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6_reys_logo.jpg" alt="6R's entertainment yard logo" className="mx-auto mb-4" />
      </div>
      
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Explore Our Game Collection</h2>
          
          {/* New flex container for side-by-side layout */}
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Text content - 40% width on desktop/tablet */}
            <div className="md:w-[40%] mb-8 md:mb-0">
              <div className="text-gray-400">
                <p>
                  We love videogames here at 6R's! Don't just take our word for it! We've got some pictures that show you exactly what we mean!
                </p>

                <br/>

                <p>
                  How much do we love videogames? We love them so much that we've assembled a great collection of arcade cabinets, modern consoles, and arcade and console games for you to play with.
                </p>

                <br/>

                <p>We even have air hockey and pinball!</p>

                <br/>

                <p>
                   We also have a ton of tickets and prizes for you to win as well! You can check out what we offer <Link 
                     to="/prizes" 
                     state={{ scrollToTop: true }} 
                     className="text-white font-semibold hover:underline"
                   >here!</Link>
                </p>

                <br/>

                <p>
                  Do you have games, consoles, or peripherals to trade in? Learn about our trade in process <Link 
                    to="/tradeins" 
                    state={{ scrollToTop: true }} 
                    className="text-white font-semibold hover:underline"
                  >here!</Link>
                </p>

                <br/>

              </div>
            </div>

            {/* Carousel - 60% width on desktop/tablet */}
            <div className="md:w-[60%]">
              <Carousel images={gameImages} />
            </div>
          </div>
        </div>

        {/* New decorative divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-pink-500 w-24 md:w-48"></div>
          <Gamepad2 className="mx-4 w-8 h-8 text-pink-500" />
          <div className="h-px bg-pink-500 w-24 md:w-48"></div>
        </div>

        {/* Hardware Section */}
        <div id="arcade-selection" className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Explore Our Complete Arcade Game Collection
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Click any system below to see its available games. Scroll down to see the full list of games for the system you select.
          </p>
          
          {/* Grid of hardware buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {renderHardwareButtons()}
          </div>

          {/* Desktop/Tablet Game List Section */}
          {selectedHardware && (
            <div className="hidden md:block">
              <h3 className="text-2xl font-bold mb-4">
                {selectedHardware === "Taito F3" ? "Taito F3 Games" : `${selectedHardware} Games`}
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                {renderGameList()}
              </div>
              
              {/* Back to Top button after game list */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={scrollToArcadeSelection}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <ChevronUp className="w-5 h-5" />
                  <span>Back to Arcade Selection</span>
                </button>
              </div>
            </div>
          )}

          {/* Mobile Game List */}
          <div id="mobile-game-list" className="md:hidden">
            {selectedHardware && (
              <div className="mt-4 bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  {selectedHardware === "Taito F3" ? "Taito F3 Games" : `${selectedHardware} Games`}
                </h3>
                {renderGameList()}
                
                {/* Mobile Back to Arcade Selection button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={scrollToArcadeSelection}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 active:scale-95"
                  >
                    <ChevronUp className="w-5 h-5" />
                    <span>Back to Arcade Selection</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Back to Top button when no hardware is selected */}
          {!selectedHardware && (
            <div className="flex justify-center mt-8">
              <button
                onClick={scrollToArcadeSelection}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 md:hover:scale-105 active:scale-95"
              >
                <ChevronUp className="w-5 h-5" />
                <span>Back to Arcade Selection</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}