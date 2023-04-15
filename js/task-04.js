// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Get references to the relevant DOM elements
const counterEl = document.getElementById('counter');
const valueEl = document.getElementById('value');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
const incrementBtn = counterEl.querySelector('[data-action="increment"]');

// Initialize the counter value to zero
let counterValue = 0;

// Add click listeners to the buttons
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

// Update the interface with the new value of the counterValue variable
function updateCounterValue() {
  valueEl.textContent = counterValue;
}