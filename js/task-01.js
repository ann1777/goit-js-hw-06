// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст 
// заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = document.querySelectorAll('.item');

const categoryItem = document.querySelectorAll('ul#categories > .item li');

// 1. Counting and logs number of categories in ul#categories, i.e. li.item elements
// let categoryNum = 0;

// categories.forEach(category => {
//     let categoryNum = 0;
//     categoryNum += category.querySelectorAll('li.item').length;
//     console.log(`Number of categories: ${categoryNum}`); //Number of categories: 3.
// });
console.log(`Number of categories: `, categories.length);

// get all the categories
// const categoriType = document.querySelectorAll('.item');
// loop through each category and count the number of <li> elements in their <ul>
// categoriType.forEach(category => {
//   const categoryName = category.querySelector('h2').textContent;
//   const count = category.querySelectorAll('ul li').length;

//   console.log(`  Category: ${categoryName}
//   Elements: ${count}`);
// });

const categoriesArr = [...categories];

categoriesArr.map(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
})

