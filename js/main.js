var currentValue = 1;
var add = function(valueToAdd) {
    currentValue += valueToAdd;
    if (currentValue < 1) {
        currentValue = 1;
    }
    document.getElementById('quantity').innerHTML = currentValue;
};