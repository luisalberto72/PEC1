const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency');

let ticketPriceUSD = +movieSelect.value;
let exchangeRate = 1; // Por defecto, la tasa de cambio es 1 (no hay conversión)

// Guardar índice y precio de la película seleccionada
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePriceUSD', moviePrice);
}

// Obtener la tasa de cambio desde USD a la moneda seleccionada
async function fetchExchangeRate(currency) {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await response.json();
        exchangeRate = currency === 'USD' ? 1 : data.rates[currency];
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}

// Convertir precio de USD a la moneda seleccionada
function convertPrice(priceUSD) {
    return priceUSD * exchangeRate;
}

// Actualizar total y cantidad seleccionada
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    const totalPriceUSD = selectedSeatsCount * ticketPriceUSD;
    const totalPrice = convertPrice(totalPriceUSD);
    total.innerText = totalPrice.toFixed(2)+' '+ currencySelect.value;
}

// Obtener datos del almacenamiento local y poblar la interfaz de usuario
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        ticketPriceUSD = +localStorage.getItem('selectedMoviePriceUSD');
    }
}

// Evento de selección de película
movieSelect.addEventListener('change', e => {
    ticketPriceUSD = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Evento de selección de moneda
currencySelect.addEventListener('change', async e => {
    await fetchExchangeRate(e.target.value);
    updateSelectedCount();

    // Cambiar precios de las películas según la moneda seleccionada
    const movieOptions = movieSelect.querySelectorAll('option');
    movieOptions.forEach(option => {
        const moviePriceUSD = +option.value;
        const moviePrice = convertPrice(moviePriceUSD);
        option.textContent = option.textContent.replace(/\([\d.]+ [a-zA-Z]+\)/, `(${moviePrice.toFixed(2)} ${e.target.value})`);
    });
});

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

// Configurar valores iniciales
populateUI();
fetchExchangeRate(currencySelect.value); // Obtener la tasa de cambio inicial
updateSelectedCount();  
