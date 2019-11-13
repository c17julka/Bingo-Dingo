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

function genBingo()
{
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
    if (!document.getElementById("useSeed").checked)
    {
        var randomSeed = Math.floor(Math.random() * 2147483647);
        seed = randomSeed;

        // Sets local storages
        if (typeof(Storage) !== "undefined") 
        {
            localStorage.setItem("Seed", seed);
            document.getElementById("seedinput").value = localStorage.getItem("Seed");

        } 
        else 
        {
        }
    }
    // Use custom seed
    else
    {
        seed = seedinput;

        // Sets local storages
        if (typeof(Storage) !== "undefined") 
        {
            localStorage.setItem("Seed", seed);
            document.getElementById("seedinput").value = localStorage.getItem("Seed");

        } 
        else 
        {
        }
    } 

    // All bingos
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
            "Eyes open kiss",
            "Lies",
            "Female lead gets bullied",
            "'Fighting!'",
            "Jealousy",
            "Nightmare"
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
            "'Jorbs wins!'",
            "Compliments chatter",
            "Talks about some smart shit",
            "Starts singing",
            "Does math wrong",
            "Talks shit about Watcher"
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
        ],

        "The Room (small)": // The Room bingo
        [
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
            "Scotchka"
        ]
    }           

    // -----
    // Returns float used for seed https://stackoverflow.com/a/53758827
    function random() 
    {
        var x = Math.sin(seed++) * 2147483646;
        return x - Math.floor(x);
    }
    
    function shuffleBingoList(array, seed) 
    {
        var arrayL = array.length, t, i;
    
        // While there remain elements to shuffle…
        while (arrayL) 
        {
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

    function getBingoArray(list)
    {
        // Do at own risk! Generates normal sized bingo on small bingos
        // WORK IN PROGRESS !!! 
        if (size.value == "Normal" && value.includes("(small"))
        {
            
            // Pick first element of shuffled bingo list
            if (icounter > blist.length)
            {
                localStorage.setItem("Seed", seed++);
            }       
            var elem = blist[icounter];
            icounter++;
            if (icounter > blist.length)
            {
                localStorage.setItem("Seed", seed--);
            }     
            return elem;
        }

        // "Normal"-setting bingo
        else
        {
            // Pick first element of shuffled bingo list, then delete it
            console.log(blist);
            var elem = blist[0];
            blist.splice(elem, 1);
            
            return elem;
        }
        
    }
    
    // Display bingo
    //
    // 3x3 bingo
    if (size.value == "Tiny")
    {
        // Generate goals
        for (i = 0; i < 3; i++)
        {
            list.innerHTML += "<tr><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='tiny' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td></tr>";
        }

        // Sets local storages
        if (typeof(Storage) !== "undefined") 
        {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for(j=0;j<25;j++)
            {
                localStorage.removeItem(j);
            }
        } 
        else 
        {
        }
        
    }

    // 4x4 bingo
    else if (size.value == "Small")
    {
        // Generate goals
        for (i = 0; i < 4; i++)
        {
            list.innerHTML += "<tr><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='small' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td></tr>";       
        }

        // Sets local storages
        if (typeof(Storage) !== "undefined") 
        {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for(j=0;j<25;j++)
            {
                localStorage.removeItem(j);
            }
            
        } 
        else 
        {
        }

    }

    // 5x5 bingo
    else 
    {
        // Generate goals
        for (i = 0; i < 5; i++)
        {
            list.innerHTML += "<tr><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td><td class='normal' onclick='changecss("+ c +")' id='"+ c++ +"'>" + getBingoArray(value) + "</td></tr>";       
            
        }

        // Sets local storages
        if (typeof(Storage) !== "undefined") 
        {
            localStorage.setItem("Size", size.value);
            localStorage.setItem("Selection", value);
            localStorage.setItem("Card", list.innerHTML);
            localStorage.removeItem("Bingo");

            // // Resets previous colours
            for(j=0;j<25;j++)
            {
                localStorage.removeItem(j);
            }
        } 
        else 
        {
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

    // Saves coloured squares
    if (typeof(Storage) !== "undefined") 
    {
        localStorage.setItem(id, document.getElementById(id).style.backgroundColor);
    } 
    else 
    {
    }

    checklines();
    
}

function checklines()
{
    var btext = document.getElementById("bingoText");

    // Check lines on tiny bingo
    if (localStorage.getItem("Size") == "Tiny")
    {
        // Check vertical line
        for (i = 0; i < 3; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 6).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
    
        }
    
        // Check horizontal line
        for (i = 0; i < 9; i += 3)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }
    
        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 8).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    
        // Check diagonal RT to LB
        if (document.getElementById(2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(2 + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(2 + 4).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }

    // Check lines on small bingo
    else if (localStorage.getItem("Size") == "Small")
    {

        // Check vertical line
        for (i = 0; i < 4; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 8).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 12).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }

        }

        // Check horizontal line
        for (i = 0; i < 16; i += 4)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 5).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 10).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 15).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }

        // Check diagonal RT to LB
        if (document.getElementById(3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 6).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(3 + 9).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }
    
    // Check lines on normal bingo
    else if (localStorage.getItem("Size") == "Normal")
    {
        // Check vertical line
        for (i = 0; i < 5; i++)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 5).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 10).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 15).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 20).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }

        }

        // Check horizontal line
        for (i = 0; i < 25; i += 5)
        {
            if (document.getElementById(i).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 1).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 2).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 3).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(i + 4).style.backgroundColor == "rgb(187, 134, 252)")
            {
                btext.innerHTML="BINGO";
                localStorage.setItem("Bingo", btext.innerHTML);
            }
        }

        // Check diagonal LT to RB
        if (document.getElementById(0).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 6).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 12).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 18).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(0 + 24).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }

        // Check diagonal RT to LB
        if (document.getElementById(4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 4).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 8).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 12).style.backgroundColor == "rgb(187, 134, 252)" && document.getElementById(4 + 16).style.backgroundColor == "rgb(187, 134, 252)")
        {
            btext.innerHTML="BINGO";
            localStorage.setItem("Bingo", btext.innerHTML);
        }
    }
}

// no workey workey function displaySeed()
// {
    
//     if (document.getElementById("useSeed").checked)
//     {
//         document.getElementById("seedinput").style.display = "block";
//         localStorage.setItem("SeedDisplay", "block");  
//         localStorage.setItem("Checkbox", document.getElementById("useSeed").checked);
//     }
//     else 
//     {
//         document.getElementById("seedinput").style.display = "none";
//         localStorage.setItem("SeedDisplay", "none");
//         localStorage.setItem("Checkbox", document.getElementById("useSeed").checked);
//     }
    
// }


// Retrieve local storages when page load
function checkLocalStorage()
{

    if (typeof(Storage) !== "undefined") 
        {

            if(localStorage.getItem("Size") === null)
            {
                localStorage.setItem("Size", "Normal");
            }

            if(localStorage.getItem("Selection") === null)
            {
                localStorage.setItem("Selection", "Eurovision");
            }

            document.getElementById("bingoText").innerHTML = localStorage.getItem("Bingo");
            document.getElementById("bingoSize").value = localStorage.getItem("Size");
            document.getElementById("bingolist").innerHTML = localStorage.getItem("Card");
            document.getElementById("seedinput").value = localStorage.getItem("Seed");
            //doesnt work yet lol document.getElementById("seedInput").style.display = localStorage.getItem("SeedDisplay");
            document.getElementById("useSeed").checked = localStorage.getItem("Checkbox");

            // Gets coloured in squares
            if (localStorage.getItem("Size") == "Tiny")
            for(i=0;i<9;i++)
            {
                if (localStorage.hasOwnProperty(i))
                {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
                
            }

            if (localStorage.getItem("Size") == "Small")
            for(i=0;i<16;i++)
            {
                if (localStorage.hasOwnProperty(i))
                {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
            }

            if (localStorage.getItem("Size") == "Normal")
            for(i=0;i<25;i++)
            {
                if (localStorage.hasOwnProperty(i))
                {
                    document.getElementById(i).style.backgroundColor = localStorage.getItem(i);
                }
            }

            document.getElementById("bingoSelect").value = localStorage.getItem("Selection");       
            
        } 
        else 
        {
        }

}