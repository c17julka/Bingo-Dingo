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

function genBingo()
{
    var list = document.getElementById("bingolist");
    var value = document.getElementById("bingoSelect").value;
    var size = document.getElementById("bingoSize");
    var btext = document.getElementById("bingoText");
    var c = 0; // Counter for td ID
    list.innerHTML = "";

    var bingos = {
        "Eurovision": // Eurovision bingo
        [
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
            "Your song gets no points from a country"
        ],
        "Kdrama Rom Com": // kdrama rom com bingo
        [
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
            "Eyes open kiss"
        ],

        "jorbs": // jorbs (joinrbs) bingo (in progress)
        [
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
            "'Jorbs wins!",
            "Compliments chatter",
            "Talks about some smart shit"
        ],

        "Hot Fuzz (small)": // Hot Fuzz bingo (in progress)
        [
            "Orders a drink", 
            "Says 'Greater good'", 
            "Black hood", 
            "Danny ask Nick a question", 
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
            "Male lead is a Bitch!"
        ]
    }           

    // Generates random data from array then deletes it
    function wheel(val)
    {
        // Do at own risk! Generates normal sized bingo on small bingos
        if (size.value == "Normal" && value.includes("(small)"))
        {
            var index = Math.floor(Math.random() * bingos[val].length);
            var r = bingos[val][index];
            return r;
        }

        // Normal bingos for normal bingo people
        else
        {
            var index = Math.floor(Math.random() * bingos[val].length);
            var r = bingos[val][index];
            bingos[val].splice(index, 1);
            return r;
        }
        
    }
    
    // Display bingo
    //
    // 3x3 bingo
    if (size.value == "Tiny")
    {
        for (i = 0; i < 3; i++)
        {
            list.innerHTML += "<tr><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td></tr>";
        }
    }

    // 4x4 bingo
    else if (size.value == "Small")
    {
        for (i = 0; i < 4; i++)
        {
            list.innerHTML += "<tr><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td></tr>";
        }

    }

    // 5x5 bingo
    else 
    {
        for (i = 0; i < 5; i++)
        {
            list.innerHTML += "<tr><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td></tr>";        
        }
    }

    btext.innerHTML="";
    
}

// Click on goal to fill it
function changecss(id)
{
    if (document.getElementById(id).style.backgroundColor) 
    {
        document.getElementById(id).style.backgroundColor = "";
    } 
    else 
    {
        document.getElementById(id).style.backgroundColor = "rgb(187, 134, 252)";
    }

    checklines();
    
}

function checklines()
{
    var btext = document.getElementById("bingoText");
    var value = document.getElementById("bingoSelect").value;
    var size = document.getElementById("bingoSize").value;

    // Check lines on tiny bingo
    if (size == "Tiny")
    {
        // Check vertical line
        for (i = 0; i < 3; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 6).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }
    
        }
    
        // Check horizontal line
        for (i = 0; i < 9; i += 3)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }
        }
    
        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 8).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }
    
        // Check diagonal RT to LB
        if (document.getElementById(2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(2 + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(2 + 4).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }
    }

    // Check lines on small bingo
    else if (size == "Small")
    {

        // Check vertical line
        for (i = 0; i < 4; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 8).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 12).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }

        }

        // Check horizontal line
        for (i = 0; i < 16; i += 4)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }
        }

        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 5).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 10).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 15).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }

        // Check diagonal RT to LB
        if (document.getElementById(3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 6).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 9).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }
    }
    
    // Check lines on normal bingo
    else
    {
        // Check vertical line
        for (i = 0; i < 5; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 5).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 10).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 15).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 20).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }

        }

        // Check horizontal line
        for (i = 0; i < 25; i += 5)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 4).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
            }
        }

        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 6).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 12).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 18).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 24).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }

        // Check diagonal RT to LB
        if (document.getElementById(4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 8).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 12).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 16).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
        }
    }
}