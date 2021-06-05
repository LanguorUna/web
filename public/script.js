// Обработка события нажатия на кнопку формы
const send = document.querySelector('.form__input.form__send');
send?.addEventListener("click", async function (event) {
   // Предотвращаем перезагрузку страницы
   event.preventDefault();

   // Создаем объект формы
   const formNode = document.querySelector(".form");
   const form = new FormData(formNode);

   // Формируем тело запроса
   const body = {
      ocenka: form.get('ocenka'),
      why: form.get('why')
   };

   // Отправляем запрос
   const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
   });

   // Получаем ответ в виде текста
   const message = await response.text();

   //На основе полученного ответа, выводим результат на страницу 
   const p = document.createElement('p');
   p.textContent = message;
   formNode.insertAdjacentElement('beforeend', p);
});

// Создание анимации скрытия таблицы
let isHidden = false;
const title = document.querySelector(".messages__title");
$(".messages__chat").hide();
title?.addEventListener("click", function () {
   $(".messages__chat").slideToggle(300, function () {
      isHidden = !isHidden;
      $(".messages__title").css("color", isHidden ? "#f44336" : "");
   });
});

// Обработка сортировки таблицы по нажатию на заголовок столбца
let table = document.querySelector('.table')

table.querySelectorAll('th').forEach((th) => {
   const mySort = (isInverse = false) => {
      const stolb = th.cellIndex

      let sortedRows = Array.from(table.rows) //HTMLCollection => Array
         .slice(1) //отсекаем заголовки
         .sort((rowA, rowB) => {
            let a = isFinite(rowA.cells[stolb].textContent) ? +rowA.cells[stolb].textContent : rowA.cells[stolb].textContent
            let b = isFinite(rowB.cells[stolb].textContent) ? +rowB.cells[stolb].textContent : rowB.cells[stolb].textContent

            if (!isInverse) {
               return a > b ? 1 : -1
            } else {
               return a > b ? -1 : 1
            }
         });

      table.tBodies[0].append(...sortedRows);
   };

   th.addEventListener('click', () => {
      mySort()
   })

   th.addEventListener('dblclick', () => {
      mySort(true)
   })
})

// кнопка редактирования/сохранения пользователя
const editUser = document.querySelector('.header__action')
editUser?.addEventListener('click', async (event) => {
   editUser.classList.toggle('hidden')

   const saveUser = document.querySelector('.header__action_save')
   saveUser.classList.toggle('hidden')

   const profileNodes = document.querySelectorAll(".profile");

   // переворачиваем невидимость блоков
   profileNodes.forEach((block) => {
      block.classList.toggle('hidden')
   })
})

// кнопка сохранения пользователя
const saveUser = document.querySelector('.header__action_save')
saveUser?.addEventListener('click', async (event) => {
   // Создаем объект формы
   const formNode = document.querySelector("form.profile");
   const form = new FormData(formNode);

   // Формируем тело запроса
   const body = {
      city: form.get('city'),
      birthDay: form.get('birthDay'),
      familyStatus: form.get('familyStatus'),
      education: form.get('education'),
      job: form.get('job'),
      status: form.get('status'),
   };

   // Отправляем запрос
   const response = await fetch('/user/' + formNode.dataset.id, { // formNode.dataset.id - обращение к HTML атрибуту
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
   });

   window.location.reload();
})