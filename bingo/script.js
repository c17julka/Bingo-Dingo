function genBingo()
{
    var list = document.getElementById("bingolist");
    var c = 0;
    list.innerHTML = "";

    var pnshArray = 
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
    ];

    function wheel()
    {
        var index = Math.floor(Math.random() * pnshArray.length);
        var r = pnshArray[index];
        pnshArray.splice(index, 1);
        return r;
    }
    
    for (i = 0; i < 5; i++)
    {

        list.innerHTML += "<tr><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel() + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel() + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel() + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel() + "</td><td onclick='changecss("+ c +")' id='"+ c++ +"'>" + wheel() + "</td></tr>";
        
    }
    
}

function changecss(id)
{
    if (document.getElementById(id).style.background) {
        document.getElementById(id).style.background = "";
      } else {
        document.getElementById(id).style.background = "#BB86FC";
      }
}

function ani() 
{
    $("button").animate({shake: 0}, 500);
}