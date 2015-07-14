var modeEL = document.getElementById('mode');
var valueEL = document.getElementById('value');
var numButtons = document.getElementById('number-button');
var clearEl = document.getElementsByClassName('clear');
var modeButtons = document.getElementsByClassName('mode-button');

clearEl.onclick = function () {
    valueEl.innerHTML = 0;
};

var numberSubscribe = function () {
    var currentNum = parseInt(this.innerHTML);
    var tmp;

    if (modeEl.innerHTML == '+') {
       var tmp = currentNum + parseInt(valueEl.innerHTML);
       valueEl.innerHTML = tmp;
    } else {
        var tmp = parseInt(valueEl.innerHTML) - currentNum;
        valueEl.innerHTML = tmp;
}
        valueEl.innerHTML = tmp;
};

var modeClick = function () {
    modeEl.innerHTML = this.innerHTML;

}

for (var i = numButtons.length -1; i >= 0; i--) {
    numButtons[i].onclick = buttonSubscribe;
}
