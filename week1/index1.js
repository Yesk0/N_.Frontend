let height = 5;

for (let i = 1; i <= height; i++) {
    let lines = '';
    for (let j = 0; j < i; j++) {
        lines = lines + '1';
    }
    console.log(lines)
}

// for(let i = 0; i < height; i++){
//     let line = '';
//     line += "/";
// }
for (let i = height; i >= 1; i--) {
    lines = '';
    for (let j = 0; j < i; j++) {
        lines += '1';
    }
    console.log(lines);
}