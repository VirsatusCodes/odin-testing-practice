export{capitalizeFirstLetter, reverseString};

function capitalizeFirstLetter(string) {
    const [firstLetter, ...rest] = string
    return firstLetter.toUpperCase() + rest.join('')
}

function reverseString(string) {
    return string.split('').reverse().join('')
}