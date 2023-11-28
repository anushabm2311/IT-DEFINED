let num1=20
console.log(typeof(num1))

let var_blank = ''
let var_space = ' '
let var_first_name = 'Sachin'
let var_last_name = "Tendulkar"
let var_team = `Mumbai`
let var_age = 40
let var_bio1 = 'Sachin Ramesh Tendulkar, is an "Indian" former'
let var_bio2 = 'Sachin Ramesh Tendulkar, is an \'Indian\' former'
let var_bio3 = "Sachin Ramesh Tendulkar, is an 'Indian' former"
let var_bio4 = `Sachin Ramesh Tendulkar, is an 'Indian' former`
let var_bio5 = `Sachin Ramesh Tendulkar, is an "Indian" former`
let var_bio6 = 'Sachin \n Ramesh \t Tendulkar, \\ is an \'   \" Indian former'

var_bio6 = `${var_first_name} ${var_last_name} is ${var_age} years old and he is from ${var_team} team`

console.log(var_bio6)

let full_name = "            Sachin Ramesh Tendulkar         "
console.log(full_name.length)

console.log(full_name.substr(0,6))
console.log(full_name.substr(7,6))
console.log(full_name.substring(7,12))

let out = full_name.trim()

let news = `Asian Qadsd 6 Games 2023 Day 6`

out = news.includes('Live Updates')
out = news.replace('Asian', 'Indian')
out = news.charCodeAt(21)
out = news.lastIndexOf('8')
console.log(out=