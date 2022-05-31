let calculate = document.querySelector('#calculate'),
    result = document.querySelector('#result'),
    mode = document.querySelector('.mode'),
    equal = document.getElementById('equal'),
    clear = document.getElementById('clear'),
    opp = document.getElementById('opp');

function insert(a) {
    calculate.value = calculate.value+a;
}

equal.addEventListener('click', () => {
    if(calculate.value == "") {
        alert('You need you input numbers to get the result');
    } else {
        answer = calculate.value
        result.value = (eval(answer));
    }
})

clear.addEventListener('click', () => {
    calculate.value = "";
    result.value = "";
})

mode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        mode.innerHTML = `<i class="material-icons yellow">light_mode</i>`;
    } else {
        mode.innerHTML = `<i class="material-icons black">mode_night</i>`;
    }
});

opp.addEventListener('click', () => {
    let number = calculate.value;
    if(number > 0) {
        calculate.value = `-${number}`;
    } else {
        calculate.value = number.replace("-","");
    }
})