// alert("Javascript Connected!")
//                     0            1         2         3              4
var cleanestCity = ["Karachi", "Islamabad", "Multan", "Bhawalpur", "Faislabad"]

var userInp = prompt("Enter the cleanest city!")


var found = "no"
for (var i = 0; i < 5; i++) {
    if (userInp == cleanestCity[i]) {
        found = "yes"
        alert("Sahi")
    }
}

if (found == "no") {
    alert("Galat")
}

// if (userInp == cleanestCity[0]) {
//     alert("Sahi")
// }
// if (userInp == cleanestCity[1]) {
//     alert("Sahi")
// }
// if (userInp == cleanestCity[2]) {
//     alert("Sahi")
// }
// if (userInp == cleanestCity[3]) {
//     alert("Sahi")
// }
// if (userInp == cleanestCity[4]) {
//     alert("Sahi")
// }