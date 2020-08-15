let cnt = 1;

function incrementfun() {
    let newElement = document.querySelector("#cntid");
    cnt = cnt + 1;
    newElement.innerHTML = cnt;

}

function decrementfun() {
    let newElement = document.querySelector("#cntid");
    cnt = cnt - 1;
    newElement.innerHTML = cnt;
}