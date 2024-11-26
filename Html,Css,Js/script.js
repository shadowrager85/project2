let counter = 0;

const Counter = document.getElementById('counter');
const Increase = document.getElementById('increasebtn');
const Decrease = document.getElementById('decreasebtn');

Increase.addEventListener('click', ()=> {
    counter++;
    updatecounter();
});
Decrease.addEventListener('click', () => {
    counter--;
    updatecounter();
});

function updatecounter() {
    Counter.textContent = counter;
}