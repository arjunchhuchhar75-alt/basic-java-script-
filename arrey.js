const marvel_Heros = ["Iron Man", "Captain America", "Thor"]
const dc_Heros = ["Batman", "Superman", "flash"]    
    
// marvel_Heros.push(...dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// marvel_Heros.concat(dc_Heros)
// console.log(marvel_Heros);

const all__new_Heros = [...marvel_Heros, ...dc_Heros]

// console.log(all__new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Arjun"))
// console.log(Array.from("Arjun"))
// console.log(Array.isArray({name: "Arjun"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));