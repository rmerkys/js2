var vardai = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

var skaicius = prompt("Įveskite skaičių nuo 1 iki 6")

while (isNaN(skaicius) || skaicius > 6 || skaicius < 1) {
    var skaicius = prompt("Įveskite skaičių nuo 1 iki 6")
}

const pirmas = vardai[0];

const paskutinis = vardai[vardai.length - 1];

console.log(pirmas);
console.log(paskutinis);
console.log(vardai[skaicius - 1])


// if(isNaN(skaicius) && (skaicius > 6 || skaicius < 1)){
//     var skaicius = prompt("Įveskite skaičių nuo 1 iki 6")
// } else {
//     const pirmas = vardai[0];

//     const paskutinis = vardai[vardai.length - 1];

//     console.log(pirmas);
//     console.log(paskutinis);
//     console.log(vardai[skaicius - 1]);
// }

