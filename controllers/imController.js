var resources = require('../models/resouces');

exports.page = function(req, res, next) {
   res.render('im', { 
     title: 'Сообщения',
     userName: 'Анастасия',
     usersList: [
       {
         name: 'Алексей Попов',
         photo: 'img/example/gallery/cat1.jpg',
         meow: true
       },
       {
         name: 'Оксана Синичкина',
         photo: 'img/example/gallery/cat2.jpg',
         meow: true
       },
       {
         name: 'Яна Котейникова',
         photo: 'img/example/gallery/cat3.jpg',
         meow: true
       },
       {
         name: 'Игорь Николаев',
         photo: 'img/example/gallery/cat4.jpg',
         meow: true
       },
       {
         name: 'Олег Смирнов',
         photo: 'img/example/gallery/cat5.jpg',
         meow: true
       }
     ],
     messageList: [
       {
         author: {
           photo: 'img/example/gallery/cat1.jpg',
           name: 'Алексей Попов',
         },
         date: '17.04.2020',
         text: 'Привет, как дела ' + resources.table2
       },
       {
         author: {
           photo: 'img/example/gallery/cat1.jpg',
           name: 'Алексей Попов',
         },
         date: '16.04.2020',
         text: 'Пройди опрос ' + resources.form1
       },
       {
         author: {
           photo: 'img/example/gallery/cat1.jpg',
           name: 'Алексей Попов',
         },
         date: '15.04.2020',
         text: ` Закончился всемирный потоп. Ковчег причаливает к Арарату, и Ной начинает оттуда выгружать клетки с медведями, собаками, тиграми, львами и другими животными. 
         <img src="img/example/rzhaka.jpg" alt="Смешная картинка" class="float-image" >
         <br>А на горе армяне сидят и в нарды играют. Один другого в бок толкает и говорит: 
         <br>- Ара, смотри, цирк приехал!`
       },
     ]
   });
 }