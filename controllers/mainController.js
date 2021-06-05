const { User } = require("../sequelize");
const bcrypt = require('bcrypt'); // подключаем крипто-библиотеку для валидации пароля

// Функция для проверки авторизации пользователя
exports.sessionCheck = (req, res, next) => {
   // Если не установлен параметр сессии user или значение cookie 'AuthToken' не равно логину пользователя
   if (!req.session.user || req.cookies['AuthToken'] != req.session.user) {
       // переадресуем на страницу /login
       res.redirect('/login');
   } else {
       // иначе исполняем следующую функцию обработчика
       next();
   }    
};

// Валидация пользователя по логину и паролю
exports.login = function(req, res) {
   // Получаем логин и пароль из данных формы
   var login = req.body.login;
   var password = req.body.password;
   // Ищем пользователя в БД
   User.findOne({ where: { login: login } }).then((user) => {
       // если пользователь не найден переадресуем на страницу /login
       if (!user) {
           res.redirect('/login');
       // если пользователь найден, проверяем пароль
       } else if (!bcrypt.compareSync(password, user.password)) {
           // если пароль не прошел проверку, переадресуем на страницу /login
           res.redirect('/login');
       } else {
           // иначе регистрируем сессию пользователя (записываем логин пользователя в параметр user)
           req.session.user = user.login;
           // высылаем сессионную cookie AuthToken с логином
           res.cookie('AuthToken', user.login);
           res.redirect('/');
       }
   })
   .catch(err => {
       // в случае исключения возвращаем код 500 + json-ответ с ошибкой
       res.status(500).json({ message: err.message });
   });
}
