const Sequelize = require('sequelize');

// Импорт моделей
const UserModel = require('./models/userModel');

// Подключение к БД SQLite
const sequelize = new Sequelize({
   dialect: "sqlite",
   storage: "db.sqlite"
 });


/**
 * Создаем объект модели БД и экспортируем
 * С данным объектом далее можно будет работать, осуществляя операции 
 * выборки (SELECT), вставки (INSERT), обновления (UPDATE) и т.д.
 */
const User = UserModel(sequelize);

/**
 * Синхронизация моделей приложения с БД.
 * ВАЖНО! Если в инструкцию синхронизации передать параметр:
 * sequelize.sync({ force: true })
 * то все одноименные таблицы в БД будут удалены (DROP TABLE) и созданы заново!
 */
const syncdb = function () {
   sequelize.sync().then(result => {
      console.log("Синхронизация прошла успешно!");
   })
   .catch(err => console.log(err));
};

// Экспортируем модули
module.exports = {
   syncdb,
   User
}