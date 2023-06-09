//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//<div id="controls">
// <input type="number" min="1" max="100" step="1" />
// <button type="button" data-create>Create</button>
// <button type="button" data-destroy>Destroy</button>
//</div>
//<div id="boxes"></div>

const input = document.querySelector("#controls input");
const createButton = document.querySelector("#controls [data-create]");
const destroyButton = document.querySelector("#controls [data-destroy]");
const collection = document.createElement("ul");

// Set up the event listeners
createButton.addEventListener("click", createCollection);
destroyButton.addEventListener("click", destroyCollection);

function createCollection() {
  // Clear any existing elements from the collection
  while (collection.firstChild) {
    collection.removeChild(collection.firstChild);
  }

  // Append the collection to the document
  document.body.appendChild(collection);
}

function destroyCollection() {
  // Remove the collection from the document
  collection.remove();
}

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
   .toString(16)
   .padStart(6, 0)}`;
}

// /Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function createBoxes(amount) {
    const boxesDiv = document.querySelector("#boxes");
    let boxSize = 30;
    destroyBoxes();
    
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement("div");
      newBox.style.width = `${boxSize}px`;
      newBox.style.height = `${boxSize}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(newBox);
      boxSize += 10;
    }
  }
  
  function destroyBoxes() {
    const boxesDiv = document.querySelector("#boxes");
    boxesDiv.innerHTML = "";
  }

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});