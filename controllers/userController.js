const { User } = require("../sequelize");
const bcrypt = require('bcrypt'); // подключаем крипто-библиотеку для валидации пароля

exports.createUser = function (req, res){
   const data = req.body

   if (!data.login || !data.password || !data.fullName) {
      throw new Error('Недостаточно данных для регистрации')
   }

   // Создаем хеш пароля с солью
   const salt = bcrypt.genSaltSync();
   var hashed = bcrypt.hashSync(data.password, salt);

   User.create({
      login: data.login,
      password: hashed,
      fullName: data.fullName,

      birthDay: '1900-01-01',
      familyStatus: 0,
      job: '',
      status: 'Я новенький',
      education: ''
   }).then(() => {
      res.redirect('/login');
   }).catch((err) => {
      res.status(500).json({ message: err.message });
   });
};

exports.readUser = function(req, res){
   const id = req.params.id
   
   User.findByPk(id).then((data) => {
      res.json(data)
   }).catch((err) => {
      res.status(500).json({ message: err.message });
   });
};

exports.updateUser= function(req, res){
   const data = req.body

   // чтобы не поменялись логин и пароль удаляем из объекта запроса
   delete data.login;
   delete data.password;


   if (!data.birthDay || !data.familyStatus) {
      throw new Error('Недостаточно обязательных данных')
   }

   User.update(data, { where: { id: req.params.id } }).then(() => {
      // ok
      res.sendStatus(200)
   }).catch((err) => {
      res.status(500).json({ message: err.message });
   });
};

exports.deleteUser= function(req, res){
   User.destroy({ where: { id: req.params.id } })
   .then(() => {
      // ok
      res.sendStatus(200)
   }).catch((err) => {
      res.status(500).json({ message: err.message });
   });
};