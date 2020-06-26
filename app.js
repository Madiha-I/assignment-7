
function getKey(myKey)
{
    var screenText = document.getElementById("calcScreen");
    screenText.value += myKey;
}

function clearScreen()
{
    var screenText = document.getElementById("calcScreen");
    screenText.value = "";
}

function clearChar()
{
    var screenText = document.getElementById("calcScreen");
    screenText.value = screenText.value.substr(0, screenText.value.length - 1);
    // string in object = string.substring(0, string.length - 1)
}

function getResult()
{
    var screenText = document.getElementById("calcScreen");
    screenText.value = eval(screenText.value);
}
