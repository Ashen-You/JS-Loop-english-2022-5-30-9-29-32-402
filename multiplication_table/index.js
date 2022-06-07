for (var i = 1; i <= 9; i++) {
    var output_line = `${i}*1=${i}`;
    for (var j = 2; j <= i; j++) {
        output_line += ` ${i}*${j}=${i * j}`;
    }
    console.log(output_line);
}