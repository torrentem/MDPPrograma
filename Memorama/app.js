const app = document.getElementById('app');
let templateHTML = ""
let arrayCards = []
let arrayFruits = []
let listFruit = ['🍓', '🍌', '🍎', '🍇', '🍎', '🍍', '🍓', '🍉', '🍉', '🍇', '🍌', '🍍']
const btn = document.getElementById('btn');

listFruit.forEach(fruit => (
    templateHTML += `
    <div class="card">
        <div class="sides front"></div>
        <div class="sides back">${fruit}</div>
    </div>`
));

app.innerHTML = templateHTML;

app.addEventListener('click', (e) => {
    let value = e.target.classList.contains('front');
    if(value) {
        let elementCard = e.target.parentElement;
        let fruit = elementCard.children[1].textContent;
        elementCard.classList.add('rotate');
        arrayCards= [...arrayCards, elementCard];
        arrayFruits= [...arrayFruits, fruit];
        verificationsCards();
    }
})

const verificationsCards = ()=>{
    if(arrayCards.length > 1) {
        if (arrayFruits[0] === arrayFruits[1]) {
            arrayCards = ""
            arrayFruits = ""
        } else {
            setTimeout(() => {
                arrayCards[0].classList.remove('rotate');
                arrayCards[1].classList.remove('rotate');
                arrayCards = ""
                arrayFruits = ""
            }, 800);
        }
    }
}

const random = () => {
    for (let index = app.children.length; index >= 0; index --) {
        app.appendChild(app.children[Math.random() * index | 0]);
    }
}

const cards = document.querySelectorAll('.card');

btn.addEventListener('click',() => {
    random();

    for(let index of cards) {
        index.classList.remove('rotate');
    }
});



