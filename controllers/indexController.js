var resources = require('../models/resouces');
const { User } = require("../sequelize");

exports.page = function(req, res, next) {
  User.findOne({ where: { login: req.session.user } }).then((data) => {
      res.render('index', { 
        title: data.fullName,
        user: data,
        postList: [
          {
            author: {
              photo: 'img/example/gallery/cat7.jpg',
              name: 'Марина Краснова',
            },
            date: '7 марта 2020 в 04:12',
            text: 'Это ты ',
            thumbnails: [
              '/img/example/gallery/mem1.jpg',
              '/img/example/gallery/mem4.jpg'
            ]
          },
          {
            author: {
              photo: 'img/example/gallery/cat8.jpg',
              name: 'Иван Иванов',
            },
            date: '7 марта 2020 в 03:12',
            text: 'Смотри что нашел <br>' + resources.table1,
          },
          {
            author: {
              photo: 'img/example/gallery/cat5.jpg',
              name: 'Олег Смирнов',
            },
            date: '7 марта 2020 в 02:12',
            textTitle: 'Гороскоп на 23 марта 2021 Телец женщина',
            text: '<img src="img/example/telec.jpg" alt="Телец" class="float-image"> Важно правильно оценить свои силы и сосредоточиться на решении практических задач. Не витайте в облаках, не верьте слишком заманчивым обещаниям. Реалистичный взгляд на вещи поможет избежать заблуждений, ошибок и напрасных надежд. Не исключены рабочие проблемы. Некоторые дела не удастся вовремя довести до конца из-за путаницы, возникшей не по вашей вине. Проявляйте снисходительность к окружающим, даже если вам кажется, что они специально испытывают ваше терпение. Вечер может порадовать приятными сюрпризами, в том числе романтическими.',
          }
        ]
      });
  }).catch((err) => {
      res.status(500).json({ message: err.message });
  });
   
 }