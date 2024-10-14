function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
    playSound();
}

function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
    playSound();
}

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
    playSound();
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
    playSound();
}

function playSound() {
    const sound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');
    sound.play();
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}


document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
