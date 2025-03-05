const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][2])

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));