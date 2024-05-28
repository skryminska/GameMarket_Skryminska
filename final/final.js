

//перевірка підключеного файлу скриптів
//console.log('Перевірка підключеного файлу скрипту market.js')

//Отримання елементу з ідентифікатором items
//let itemsDiv = document.getElementById("items")

//визначення масиву товарів 
// let itemsArray = [
//     'Мотокоса 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N'
// ]

let itemsArray = [
    {
       email:"23b_som@liceum.ztu.edu.ua", 
       group:"10-Б 2", 
       fullName:"Скримінська Оксана", 
       gameTitle:"", 
       gamePhoto:"",
       authorphoto:"", 
       gamePhoto:"", 
       githubRepo:"https://github.com/skryminska/Phaser2ndGame ", 
       githubPages:"https://skryminska.github.io/Phaser2ndGame/", 
       documentationFolder:"https://docs.google.com/document/d/19B0k9awxwUCrPf3vL68ekIFYvMzU3q-tIg8Q3hMjbHQ/edit?usp=classroom_web&authuser=0 ",
       surveyForm:"https://drive.google.com/drive/folders/12oLl0iIBZfpF77V-npksuc8hWW8cyCnd?usp=classroom_web&authuser=0 ", 
       gameMarketrepo:"https://github.com/skryminska/GameMarket_Skryminska",  
       gameMarketPages:"https://skryminska.github.io/GameMarket_Skryminska/",
       marketPages:"https://skryminska.github.io/GameMarket_Skryminska/market.html",
       finalGameMarketPage:"http://127.0.0.1:5500/final/final.html", 
    },
//    {
//     firstName:"Віталій",
//     lastName:"",
//     age: 18,
//     subject: "CS",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/", 
//    }, 
//    {
//     firstName: "Наталія",
//     lastName: "Венцель",
//     age: 40,
//     subject:"Директорка",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//    },
//    {
//     firstName: "Олена",
//     lastName: "Геча",
//     age:18,
//     subject:"Історія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//    },
//    {
//     firstName: "Вікторія",
//     lastName: "Нелипович",
//     age: 18,
//     subject:"Математика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//    },

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
            <div class="item">
                <div class="item-title">${item.title}</div>
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="parts-pay">
                    <div><img src="img/monolapka.png" alt="">${item.mono}</div>
                    <div><img src="img/pb.jpg" alt="">${item.pb}</div>
                </div>
                <div class="price">
                    <div><span>${item.prise_standart}</span><sup>грн</sup></div>
                    <div><span>${item.prise_discount}</span><sup>грн</sup></div>
                </div>
                <div class="price bonus">
                    <div>Ціна за купоном</div>
                    <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
                </div>
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