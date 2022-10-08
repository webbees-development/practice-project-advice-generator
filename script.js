const url = "https://api.adviceslip.com/advice";

const advice_number_container = document.querySelector('#advice-number');
const advice_container = document.querySelector('#advice');
const load_advice_button = document.querySelector('#load-advice');

// get new advice
async function updateAdvice() {
    const response = await fetch(url);
    const data = await response.json();

    advice_number_container.innerHTML = data.slip.id;
    advice_container.innerHTML = data.slip.advice;
}

updateAdvice();

load_advice_button.addEventListener('click', updateAdvice);
