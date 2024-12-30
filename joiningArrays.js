const numbers = [1, 2, 3]
const joined = numbers.join(",")

console.log(joined) // Output: 1,2,3

const message = 'This is my first message'

const parts = message.split(' ')

console.log(parts) // Output: [ 'T', 'h', 'i', 's', ' ', 'i', 's', ' ', 'm', 'y', ' ', 'f', 'i', 'r', 's', 't', ' ', 'm', 'e', 's', 's', 'a', 'g', 'e' ]

const combined = parts.join('-')

console.log(combined) // Output: T-h-i-s-i-s-my-first-message