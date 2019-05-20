// Example bingo. Copy and paste this in bingos to make new bingo
// "Eurovision": // 'name' bingo
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

function genBingo()
{
    var list = document.getElementById("bingolist");
    var value = document.getElementById("bingoSelect").value;
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
        "Hot fuzz": // Hot Fuzz bingo (in progress)
        [
            "Orders a drink", 
            "Says 'Greater good'", 
            "Black hood", 
            "Danny ask Nick a question", 
            "Says 'Angle'", 
            "Someone gets shot",
            "Michal says 'Yarp'", 
            "Whooh sound",
            "Mugshot", 
            "Says 'Cornetto'", 
            "Murder = accident", 
            "Angel or Danny whips out new firepower", 
            "Simon Skinner falls", 
            "",
            "First kiss", 
            "Male lead is a Bitch!",
            "Second female lead is a Bitch!", 
            "Stare", 
            "Evil parent",
            "Rich Bitch!",
            "Ooops! Fell on your shoulder",
            "Back hug",
            "Awkward physical closeness",
            "Sickness",
            "Totally or partially orphaned"
        ]
    }           

    // Generates random data from array then deletes it
    function wheel(val)
    {
        var index = Math.floor(Math.random() * bingos[val].length);
        var r = bingos[val][index];
        bingos[val].splice(index, 1);
        return r;
    }
    
    // Display bingo
    for (i = 0; i < 5; i++)
    {
        list.innerHTML += "<tr><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel(value) + "</td></tr>";        
    }
    
}

// Click on goal to fill it
function changecss(id)
{
    if (document.getElementById(id).style.background) 
    {
        document.getElementById(id).style.background = "";
    } 
    else 
    {
        document.getElementById(id).style.background = "#BB86FC";
    }
}