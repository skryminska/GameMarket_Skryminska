
//перевірка 
console.log('Певірка підключення файлу скриптів market.js')

//отримання елементу з id items
let itemsDiv = document.getElementById("items");

//перевірка на існування знайденого блоку
if(itemsDiv){
    //вивід знайденого елементу
    console.log(itemsDiv)

    itemsDiv.innerHTML = '<div class = "item"></div>'
    //вивід значення поля 
    //console.log('Поле classlist:', itemsDiv.classList)
    //console.log('Поле id:',itemsDiv.id)
    //console.log('Поле clientWidth:', itemsDiv.clientWidth)
    //console.log('Поле innerHTML:', itemsDiv.innerHTML)

    //додавання тексту в блок 
    //itemsDiv.innerText  =   'Перший Програмно доданий текст '
    //itemsDiv.innerText  +=   'Другий Програмно доданий текст '
    //додвання відформатованого HTML коду в блок 
    //itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
} else {
    console.log('Блок товарів не знайдено')
}
    //вивід
    //console.log(itemsDiv)