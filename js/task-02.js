//HTML містить порожній список ul#ingredients.
//<ul id="ingredients"></ul>
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.


// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.getElementById('ingredients');

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  li.classList.add('item');
  ingredientList.appendChild(li);
}