

//перевірка підключеного файлу скриптів
//console.log('Перевірка підключеного файлу скрипту market.js')

//Отримання елементу з ідентифікатором items
//let itemsDiv = document.getElementById("items")

//визначення масиву товарів 
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N'
// ]

let itemsArray = [
   {
    firstName:"Віталій",
    lastName:"",
    age: 35,
    subject: "CS",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/", 
   }, 
   {
    firstName: "Наталія",
    lastName: "Венцель",
    age: 40,
    subject:"Директорка",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
   },
   {
    firstName: "",
    lastName: "",
    age:38,
    subject:"",
    photo:"",
    url:"",
   },
   {
    firstName: "",
    lastName: "",
    age: 43,
    subject:"",
    photo:"",
    url:"",
   },

]

//отримання елементу з індифікатором items
let itemsDiv  = document.getElementById("items");

//checing on 
if (itemsDiv) {
    //creating blocks by quantity of elements
    itemsArray
    //sorting by lastnames
    //.sort((a,b) => a.lastName.localeCompare(b.lastName))
    //
        .forEach((item,index) => (
            //виводимо 
            itemsDiv.innerHTML +=
            `
            <div class = "item">
            <h2>Teacher № ${index+1} з ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <p>Предмет: ${item.subject}</p>
            <p><img src = "${item.photo}" class = "item-image"></p>
            <p><a href = ${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
            <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
            class = "price"> Написати </a></p>
        
            </div>
            `
        ))
} else{
    //вивід повідомлення про не знай 
    console.log('Блок товарів не знайдено')
}

//сортування масиву
// itemsArray = itemsArray.sort()


//Вивід знайдкного елементу
//onsole.log(itemsDiv)

//Перевірка існування знайденого блоку
//if (itemsDiv) {
    //Вивід знайденого елементу
   // console.log(itemsDiv)

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
    //for(let i = 0; i < 100; i++) {
       // itemsDiv.innerHTML += '<div class="item"></div>'
    //}

//} else {
    //Вивід знайденого елементу
    //console.log('Блок товарів не знайдено')
//}

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