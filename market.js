

//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скрипту market.js')

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//визначення масиву товарів 
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N'
// ]

//сортування масиву
// itemsArray = itemsArray.sort()


//Вивід знайдкного елементу
//onsole.log(itemsDiv)

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)

    //Вивід значення поля знайденого елементу
    // console.log('Поле classList:', itemsDiv.classList)
    // console.log('Поле id:', itemsDiv.id)
    // console.log('Поле clientWidth:', itemsDiv.clientWidth)
    // console.log('Поле innerHTML:', itemsDiv.innerHTML)

    //Додавання тексту в блок
    // itemsDiv.innerHTML = 'Перший Програмно доданий текст'
    // // itemsDiv.innerHTML = 'Другий Програмно доданий текст'
    // itemsDiv.innerHTML += 'Другий Програмно доданий текст'
    //Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div  class = item></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    for(let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>'
    }

} else {
    //Вивід знайденого елементу
    console.log('Блок товарів не знайдено')
}

// //виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент', item)
// })

//виведення елементів відсорт. масиву 
// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент', item)
// })

//виведення в консоль масиву
    // console.log(itemsArray)


//вив. в консоль номерів та значень елементів масиву 
// for(let i = 0; i < itemsArray.length; i++) {
//          console.log( i + '-й елемент:', itemsArray[i])
//      }


//виведення в консоль масиву
// console.log(itemsArray)
// for(let i = 0; i < 100; i++) 
//     itemsDiv.innerHTML += '<div class="item"></div>'
 //     console.log('item')
//     }