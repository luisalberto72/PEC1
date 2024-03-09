const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const waitMessage = document.querySelector('.wait-message');
const errorMessage = document.querySelector('.error-message');

// Función para mostrar mensaje de espera
function showWaitMessage() {
    waitMessage.style.display = 'block';
    errorMessage.style.display = 'none';
}

// Función para mostrar mensaje de error
function showErrorMessage(errorMsg) {
    errorMessage.innerText = errorMsg;
    errorMessage.style.display = 'block';
    waitMessage.style.display = 'none';
}

// Fetch exchange and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    
    // Mostrar mensaje de espera
    showWaitMessage();

   

     // Esperar un segundo antes de hacer la consulta al API
     setTimeout(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            const rate = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

            // Ocultar mensajes
            waitMessage.style.display = 'none';
            errorMessage.style.display = 'none';
        })
        .catch(error => {
            // Mostrar mensaje de error
            showErrorMessage('Error fetching exchange rate. Please try again later.');
            console.error('Error:', error);
        });
    }, 1000); // Esperar un segundo (1000 milisegundos) antes de hacer la consulta
}


// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();
