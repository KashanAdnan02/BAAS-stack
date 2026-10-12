// alert("Javascript Connected!")

var cleanestCity = ["Karachi", "Islamabad", "Rawalpindi", "Multan", "Faislabad"]

var askUser = prompt("Enter the largest city of pakistan!")

var matchFound = "no"

for (var i = 0; i < cleanestCity.length; i++) {
    if (askUser == cleanestCity[i]) {
        matchFound = "yes"
        alert("Yes you are right " + cleanestCity[i] + " is the cleanest city")
    }
}

if (matchFound == "no") {
    alert("no you are wrong!")
}