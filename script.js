
function convertToIEEE754() {
    let num = parseFloat(document.getElementById("decimalInput").value);
    if (isNaN(num)) {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    let buffer = new ArrayBuffer(4);
    let floatView = new Float32Array(buffer);
    let intView = new Uint32Array(buffer);

    floatView[0] = num;
    let binary = intView[0].toString(2).padStart(32, '0');
    let hex = intView[0].toString(16).padStart(8, '0').toUpperCase();

    let sign = binary[0];
    let exponent = binary.substring(1, 9);
    let mantissa = binary.substring(9);

    document.getElementById("result").innerHTML = `
        <strong>IEEE 754 Representation:</strong><br>
        Sign Bit: ${sign} <br>
        Exponent: ${exponent} <br>
        Mantissa: ${mantissa} <br>
        <strong>Full Binary:</strong> ${binary}<br>
        <strong>Hexadecimal:</strong> 0x${hex}
        


    `;

}
