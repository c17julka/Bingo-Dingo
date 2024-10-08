// Example bingos. Copy and paste this in bingos to make new bingo
//
// "name": // 'name' bingo (normal size)
//         [
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             ""
//         ],

// "name (small)": // 'name' bingo (small size)
//         [
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             "",
//             ""
//         ]

// Counter for td ID

function genBingo() {
    var list = document.getElementById("bingolist");
    var value = document.getElementById("bingoSelect").value;
    var size = document.getElementById("bingoSize");
    var btext = document.getElementById("bingoText");
    list.innerHTML = "";

    // Counter for td id's
    var c = 0;

    // Vars for seeding
    var icounter = 0;
    var seedinput = document.getElementById("seedinput").value;
    var seed;

    // Set seed var
    // Randomize seed on gen btn click
    if (!document.getElementById("useSeed").checked) {
        var randomSeed = Math.floor(Math.random() * 2147483647);
        seed = randomSeed;

        // Sets local storages
        if (typeof Storage !== "undefined") {
            localStorage.setItem("Seed", seed);
            document.getElementById("seedinput").value = localStorage.getItem("Seed");
        } else {
        }
    }
    // Use custom seed
    else {
        seed = seedinput;

        // Sets local storages
        if (typeof Storage !== "undefined") {
            localStorage.setItem("Seed", seed);
            document.getElementById("seedinput").value = localStorage.getItem("Seed");
        } else {
        }
    }

    // All bingos
    var bingos = {
        // Eurovision bingo
        Eurovision: [
            "Fake rain",
            "Synchronized dance routine",
            "Flag face paint",
            "Feathers",
            "Presenter outfit change",
            "Wearing a hat",
            "Something goes wrong",
            "Fire",
            "Mid-song costume change",
            "Song about love",
            "Political protest",
            "Wind machine",
            "Clappy bit",
            "Glitter cannon",
            "This country isn’t in Europe!",
            "Someone cries",
            "Obviously fake instrument playing",
            "Woman on a pole",
            "Bondage",
            "Key change",
            "Your country gives another person’s country points",
            "'Mellanakt'",
            "Commentator makes bad joke",
            "Awkward pause",
            "Your song gets no points from a country",
        ],
        // kdrama rom com bingo
        "Kdrama Rom Com": [
            "Piggyback ride",
            "Slowmotion",
            "Wrist grab",
            "Ramyun",
            "Flashback",
            "Bad Englishu",
            "Slap!",
            "Soju",
            "Aish! / Aigoo!",
            "Cry",
            "Second lead moment",
            "Sleeps like a log",
            "Shower scene",
            "Face zoom",
            "First kiss",
            "Male lead is a Bitch!",
            "Second female lead is a Bitch!",
            "Stare",
            "Evil parent",
            "Rich Bitch!",
            "Oops! Fell on your shoulder",
            "Back hug",
            "Awkward physical closeness",
            "Sickness",
            "Love geometrics",
            "Totally or partially orphaned",
            "Death threat",
            "Talking to themselves",
            "Oppa!",
            "Bromance",
            "Product placement",
            "Hair pulling",
            "Karaoke",
            "Eyes open kiss",
            "Unneccessary lies",
            "Female lead gets bullied",
            "'Fighting!'",
            "Jealousy",
            "Nightmare",
            "Super senses",
            "Peace sign",
            "Ahjumma bickering",
            "Cooking scene",
            "Bad parents relationship",
            '"You\'re not a woman/man to me"',
            "Sauna",
            "Trauma",
            "Truck of doom",
            "Ex shows up",
            '"Omo!"',
            "Creepy stalking",
            "Almost smoking",
            "Well-timed interruption",
            '"This is not about me, it\'s about my friend..."',
        ],

        // jorbs (joinrbs) bingo (in progress)
        jorbs: [
            "DIG!",
            "Calling out chatter for being wrong",
            "'I don't know what I'm doing'",
            "Kills The Heart",
            "Dies",
            "Corruption + Dead Branch",
            "Dead Branch",
            "Answers a random / irrelevant question",
            "Talks about Dolphin",
            "Opens Paint",
            "Sasses against chat",
            "Bursts into random laughter",
            "Forgets to use potion",
            "!lucker",
            "Promotes chatter",
            "Talks about New Zealand",
            "Slime Boss kicks ass",
            "Talks about Caitlin",
            "Zephyr visits",
            "Bathroom break",
            "Eating",
            "Snecko Eye",
            "Gives life lesson",
            "Wins fight with 1HP left",
            "Gets stabbed by Wheel of (Un)fortune",
            "Insults enemy in the game",
            "Suddenly talks about something random",
            "'Jorbs wins!'",
            "Compliments chatter",
            "Talks about some smart shit",
            "Starts singing",
            "Does math wrong",
            "Talks shit about Watcher",
        ],

        // Hot Fuzz bingo (in progress)
        "Hot Fuzz (small)": [
            "Orders a drink",
            "Says 'Greater good'",
            "Black hood",
            "Danny asks Nick a question",
            "Says 'Angle'",
            "Someone gets shot",
            "Michal says 'Yarp'",
            "Whoosh sound",
            "Mugshot",
            "Says 'Cornetto'",
            "Murder = accident",
            "Angel or Danny whips out new firepower",
            "Simon Skinner falls",
            ":)",
            "First kiss",
            "Male lead is a Bitch!",
        ],

        // The Room bingo
        "The Room (small)": [
            "Framed Spoons",
            "Cheep Cheep Cheep",
            "'You're tearing me apart, Lisa!'",
            "'I just wanna watch you guys'",
            "The Laugh",
            "'I definitely have breast cancer'",
            "'Oh hi doggy'",
            "Drug dealer",
            "'Keep your stupid comments in your pocket'",
            "'Anyway, how's your sex life?'",
            "Belly Button Sex",
            "'Oh hi Mark'",
            "'It's not true...'",
            "'I did naaaawt'",
            "Suicide",
            "Football",
            "'The stories you tell, Mark'",
            "The Laugh, again ;)",
            "Golden Gate Bridge ",
            "Scotchka",
        ],

        // 'name' bingo (normal size)
        "Hana Yori Dango": [
            "Jun Pyo gets beat up",
            "Jun Pyo gets hit in the face",
            "Jan Di yells very loudly",
            "Ji Hoo gives shade",
            "Random English from Woo Bin",
            "F4 walks in slow motion",
            "You desperately want to hit Jun Pyo in the crotch",
            "You desperately want to hit Jun Pyo in the throat",
            "Jun Pyo being a rich bitch",
            "Jun Pyo making others do shit for him",
            "Jan Di's parents are being bitches",
            "Jan Di hits someone",
            "Weird bullying",
            "Where are the teachers?",
            "F4 Death Note",
            "WTF Ji Hoo?!",
            "Yi Jung + Ga Eul moment",
            "Jan Di swims",
            "Jan Di gobbles down food",
            "Ji Hoo looks constipated",
            "Tragic flashback",
            "'Oh she's fine'",
            "Someone says F4",
            "Scoffing",
            "Jan Di should not be falling for Jun Pyo right now",
            "‘Aish / Aigoo!’",
            "Stare",
            "That’s illegal!",
            "They survived that?!",
            "Normal bullying",
            "'You’re Ugly'",
            "Weird Fashion",
            "Jealousy",
            "Super senses",
            "Jun Pyo says ‘Aish / Aigoo!’",
            "Little brother does research",
            "I don't understand",
            "Please stop, Ji Hoo",
        ],
        // 'name' bingo (normal size)
        "Slay the Spire": [
            "Spend 3 energy playing shivs in 1 turn",
            "Defeat a boss with 1 HP remaining",
            "Reach 100 block during combat",
            "Reach 150 Max HP",
            "Obtain 15 relics in a run",
            "Have a Claw deal 50 dmg",
            "Slay the Corrupt Heart",
            "Reach 10 energy in 1 turn",
            "Win a fight on the first turn",
            "Obtain 5 copies of the same card (non-starter, non-event cards)",
            "Draw a full hand of cards without the usage of cards",
            "Obtain 3 rare cards",
            "Obtain 3 curse cards",
            "Lower an enemy's strength to -16",
            "Defeat all 3 unique elites in an act",
            "Defeat the Act 1 boss in under 4 minutes",
            "Win a fight without playing an attack",
            "Have a full hand with 10 different cards",
            "Play a single card granting 41 block",
            "Defeat a boss as Silent without applying poison in the fight",
            "Kill Transient before it kills itself",
            "Channel 8 orbs in 1 turn",
            "Kill 4 enemies in 1 turn",
            "Have 0 cards in your discard pile and your draw pile",
            "Have under 30 Max HP",
            "Defeat a boss as Defect without channeling an orb via cards",
            "Defeat the Act 1 boss with no uncommon or rare cards in your deck",
            "Have 4 debuffs on a single enemy at the same time",
            "Die to an enemy that has 1 HP left",
            "Die to an event",
            "Upgrade a Searing Blow 8 times",
            "Travel to 6 ? nodes in a single act",
            "Finish an act without traveling to any ? nodes",
            "Use a Smoke Bomb in the Act 4 elite fight",
            "Complete a run (Heart not required) with 0 relics that grant energy",
            "Buy 3 relics in a single shop",
            "Heal in 3 different ways during a single fight",
            "Have 3 innate cards in your deck",
            "Die by playing a card",
            "Complete a run (Heart not required) on A15 or higher",
        ],
        // Generic horror movies bingo
        "Horror Movies": [
            "Jumpscare",
            "Creepy smile",
            "Black guy dies",
            "Black guy dies first",
            "Sexy time",
            "Creepy kid",
            "Build up - no jumpscare",
            "Dead animal",
            "Dead person comes back alive",
            "Creepy mirror",
            "Cat",
            "Someone trips",
            "Gunshot",
            "Dead body",
            "Basement",
            "Spooky house",
            "Lights go out",
            "Under the bed!",
            "Behind you!",
            "Bugs",
            "Alcohol",
            "Tripping while running",
            "Doll",
            "Shit ton of blood",
            "Loud screaming",
            "Flickering lights",
            "Doors open or close on their own",
            "Object flies on their own",
            "Teenagers",
            "Shitty CGI",
        ],
    };

    // -----
    // Returns float used for seed https://stackoverflow.com/a/53758827
    function random() {
        var x = Math.sin(seed++) * 2147483646;
        return x - Math.floor(x);
    }

    function shuffleBingoList(array, seed) {
        var arrayL = array.length,
            t,
            i;

        // While there remain elements to shuffle…
        while (arrayL) {
            // Pick a remaining element…
            i = Math.floor(random(seed) * arrayL--);

            // And swap it with the current element.
            t = array[arrayL];
            array[arrayL] = array[i];
            array[i] = t;
            ++seed;
        }

        return array;
    }
    // Shuffled bingo list
    var blist = shuffleBingoList(bingos[value], localStorage.getItem("Seed"));
    // -----

    function getBingoArray(list) {
        // Pick first element of shuffled bingo list, then delete it
        var elem = blist[0];
        blist.splice(elem, 1);

        return elem;
    }

    // Display bingo
    //
    // 3x3 bingo
    if (size.value == "Tiny") {
        // Generate goals
        for (i = 0; i < 3; i++) {
            list.innerHTML +=
                "<tr><td class='tiny' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='tiny' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='tiny' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td></tr>";
        }

        // Sets local storages
        if (typeof Storage !== "undefined") {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.setItem("Checkbox", document.getElementById("useSeed").checked);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for (j = 0; j < 25; j++) {
                localStorage.removeItem(j);
            }
        } else {
        }
    }

    // 4x4 bingo
    else if (size.value == "Small") {
        // Generate goals
        for (i = 0; i < 4; i++) {
            list.innerHTML +=
                "<tr><td class='small' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='small' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='small' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='small' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td></tr>";
        }

        // Sets local storages
        if (typeof Storage !== "undefined") {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.setItem("Checkbox", document.getElementById("useSeed").checked);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for (j = 0; j < 25; j++) {
                localStorage.removeItem(j);
            }
        } else {
        }
    }

    // 5x5 bingo
    else {
        // Generate goals
        for (i = 0; i < 5; i++) {
            list.innerHTML +=
                "<tr><td class='normal' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='normal' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='normal' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='normal' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td><td class='normal' onclick='changecss(" +
                c +
                ")' id='" +
                c++ +
                "'>" +
                getBingoArray(value) +
                "</td></tr>";
        }

        // Sets local storages
        if (typeof Storage !== "undefined") {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.setItem("Checkbox", document.getElementById("useSeed").checked);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for (j = 0; j < 25; j++) {
                localStorage.removeItem(j);
            }
        } else {
        }
    }

    btext.innerHTML = "";
}

// Click on goal to fill it
function changecss(id) {
    const bgColor = "rgb(218, 32, 182)";

    if (document.getElementById(id).style.backgroundColor) {
        document.getElementById(id).style.backgroundColor = "";
    } else {
        document.getElementById(id).style.backgroundColor = bgColor;
    }

    // Saves coloured squares
    if (typeof Storage !== "undefined") {
        localStorage.setItem(id, document.getElementById(id).style.backgroundColor);
    } else {
    }

    checklines();
}

function checklines() {
    const btext = document.getElementById("bingoText");
    const bgColor = "rgb(218, 32, 182)";

    // Check lines on tiny bingo
    if (localStorage.getItem("Size") == "Tiny") {
        // Check vertical line
        for (i = 0; i < 3; i++) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 3).style.backgroundColor == bgColor &&
                document.getElementById(i + 6).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check horizontal line
        for (i = 0; i < 9; i += 3) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 1).style.backgroundColor == bgColor &&
                document.getElementById(i + 2).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check diagonal LT to RB
        if (
            document.getElementById(0).style.backgroundColor == bgColor &&
            document.getElementById(0 + 4).style.backgroundColor == bgColor &&
            document.getElementById(0 + 8).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }

        // Check diagonal RT to LB
        if (
            document.getElementById(2).style.backgroundColor == bgColor &&
            document.getElementById(2 + 2).style.backgroundColor == bgColor &&
            document.getElementById(2 + 4).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }

    // Check lines on small bingo
    else if (localStorage.getItem("Size") == "Small") {
        // Check vertical line
        for (i = 0; i < 4; i++) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 4).style.backgroundColor == bgColor &&
                document.getElementById(i + 8).style.backgroundColor == bgColor &&
                document.getElementById(i + 12).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check horizontal line
        for (i = 0; i < 16; i += 4) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 1).style.backgroundColor == bgColor &&
                document.getElementById(i + 2).style.backgroundColor == bgColor &&
                document.getElementById(i + 3).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check diagonal LT to RB
        if (
            document.getElementById(0).style.backgroundColor == bgColor &&
            document.getElementById(0 + 5).style.backgroundColor == bgColor &&
            document.getElementById(0 + 10).style.backgroundColor == bgColor &&
            document.getElementById(0 + 15).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }

        // Check diagonal RT to LB
        if (
            document.getElementById(3).style.backgroundColor == bgColor &&
            document.getElementById(3 + 3).style.backgroundColor == bgColor &&
            document.getElementById(3 + 6).style.backgroundColor == bgColor &&
            document.getElementById(3 + 9).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }

    // Check lines on normal bingo
    else if (localStorage.getItem("Size") == "Normal") {
        // Check vertical line
        for (i = 0; i < 5; i++) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 5).style.backgroundColor == bgColor &&
                document.getElementById(i + 10).style.backgroundColor == bgColor &&
                document.getElementById(i + 15).style.backgroundColor == bgColor &&
                document.getElementById(i + 20).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check horizontal line
        for (i = 0; i < 25; i += 5) {
            if (
                document.getElementById(i).style.backgroundColor == bgColor &&
                document.getElementById(i + 1).style.backgroundColor == bgColor &&
                document.getElementById(i + 2).style.backgroundColor == bgColor &&
                document.getElementById(i + 3).style.backgroundColor == bgColor &&
                document.getElementById(i + 4).style.backgroundColor == bgColor
            ) {
                btext.innerHTML = "BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check diagonal LT to RB
        if (
            document.getElementById(0).style.backgroundColor == bgColor &&
            document.getElementById(0 + 6).style.backgroundColor == bgColor &&
            document.getElementById(0 + 12).style.backgroundColor == bgColor &&
            document.getElementById(0 + 18).style.backgroundColor == bgColor &&
            document.getElementById(0 + 24).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }

        // Check diagonal RT to LB
        if (
            document.getElementById(4).style.backgroundColor == bgColor &&
            document.getElementById(4 + 4).style.backgroundColor == bgColor &&
            document.getElementById(4 + 8).style.backgroundColor == bgColor &&
            document.getElementById(4 + 12).style.backgroundColor == bgColor &&
            document.getElementById(4 + 16).style.backgroundColor == bgColor
        ) {
            btext.innerHTML = "BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }
}

// Retrieve local storages when page load
function checkLocalStorage() {
    if (typeof Storage !== "undefined") {
        if (localStorage.getItem("Size") === null) {
            localStorage.setItem("Size", "Normal");
        }

        if (localStorage.getItem("Selection") === null) {
            localStorage.setItem("Selection", "Eurovision");
        }

        document.getElementById("bingoText").innerHTML = localStorage.getItem("Bingo");
        document.getElementById("bingoSize").value = localStorage.getItem("Size");
        document.getElementById("bingolist").innerHTML = localStorage.getItem("Card");
        document.getElementById("seedinput").value = localStorage.getItem("Seed");

        if (localStorage.getItem("Selection").includes("(small)")) {
            document.getElementById("NSize").disabled = localStorage.getItem("disable");
        } else {
            document.getElementById("NSize").disabled = false; // since it's .onchange, we manually change this
        }

        // Gets coloured in squares
        if (localStorage.getItem("Size") == "Tiny")
            for (i = 0; i < 9; i++) {
                if (localStorage.hasOwnProperty(i)) {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
            }

        if (localStorage.getItem("Size") == "Small")
            for (i = 0; i < 16; i++) {
                if (localStorage.hasOwnProperty(i)) {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
            }

        if (localStorage.getItem("Size") == "Normal")
            for (i = 0; i < 25; i++) {
                if (localStorage.hasOwnProperty(i)) {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
            }

        document.getElementById("bingoSelect").value = localStorage.getItem("Selection");
        document.getElementById("useSeed").checked = JSON.parse(localStorage.getItem("Checkbox"));
    } else {
    }
}

// Disable the "Normal" size option on smaller bingos
document.getElementById("bingoSelect").onchange = function () {
    disableNormal();
};

function disableNormal() {
    if (document.getElementById("bingoSelect").value.includes("(small)")) {
        document.getElementById("bingoSize").value = "Small";
        document.getElementById("NSize").disabled = true;
        localStorage.setItem("disable", document.getElementById("NSize").disabled);
    } else {
        document.getElementById("NSize").disabled = false;
        localStorage.setItem("disable", document.getElementById("NSize").disabled);
    }
}
