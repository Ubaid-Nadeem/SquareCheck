var sqaureValue = document.getElementById('sqaureValue');
var anwser = document.getElementById('anwser')
sqaureValue.addEventListener('click', () => {
    erorr.innerHTML = '';
    anwser.innerHTML = ''
})

function isSquare() {
    var checker = false;
    var square = []
    var erorr = document.getElementById('erorr')
    var x = sqaureValue.value;
    for (let i = 0; i < x; i++) {
        square.push({
            sq: i * i,
            value: i,
        });
    }

    for (let i = 0; i < square.length; i++) {
        if (square[i].sq == x) {
            checker = true;
            console.log(`${square[i].value}*${square[i].value}  ${checker}`);
            anwser.innerHTML = `${square[i].value} x ${square[i].value} = ${x}`
            sqaureValue.value = ''
        }
    }
    if (checker == false) {
        console.log(x + ' is not a square number ' + checker);
        erorr.innerHTML = `*${x} is not a square number*`
        sqaureValue.value = ''
        anwser.innerHTML = ''
    }
}

