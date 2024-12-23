const numbers = arrayFromRange (-10, -4)

console.log(numbers);

function arrayFromRange(start, end) {
    const output = []
    for (let i = start; i <= end; i++) {
        output.push(i)
        return output
    }
}