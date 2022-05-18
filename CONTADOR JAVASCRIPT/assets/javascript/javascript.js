var changeNumberWrapper = document.getElementById('changeNumber');

changeNumber = 0;

function sucessor() {
    changeNumber = changeNumber + 1;
    changeNumberWrapper.innerHTML = changeNumber;
}


function antecessor() {
    changeNumber = changeNumber - 1;
    changeNumberWrapper.innerHTML = changeNumber;
}

