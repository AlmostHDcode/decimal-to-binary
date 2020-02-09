var decimal = document.conversion.text1.value;
function dec2bin(decimal) {
    decimal = document.conversion.text1.value;
    var binary = [];
    while (decimal >= 1) {
        binary.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    document.conversion.text2.value = binary.reverse();
}