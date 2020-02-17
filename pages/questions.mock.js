import { uniqueId } from 'lodash/fp'

export const questions =[
  {
    title: "В чем разница между null и undefined?",
    href: "https://habr.com/ru/post/486820/#1"
  },
  {
    title: "Для чего используется оператор \"&&\"?",
    href: "https://habr.com/ru/post/486820/#2"
  },
  {
    title: "Для чего используется оператор \"||\"?",
    href: "https://habr.com/ru/post/486820/#3"
  },
  {
    title: "Является ли использование унарного плюса (оператор \"+\") самым быстрым способом преобразования строки в число?",
    href: "https://habr.com/ru/post/486820/#4"
  },
  {
    title: "Что такое DOM?",
    href: "https://habr.com/ru/post/486820/#5"
  },
  {
    title: "Что такое распространение события (Event Propogation)?",
    href: "https://habr.com/ru/post/486820/#6"
  },
  {
    title: "Что такое всплытие события (Event Bubbling)?",
    href: "https://habr.com/ru/post/486820/#7"
  },
  {
    title: "Что такое погружение события (Event Capturing)?",
    href: "https://habr.com/ru/post/486820/#8"
  },
  {
    title: "В чем разница между методами event.preventDefault() и event.stopPropagation()?",
    href: "https://habr.com/ru/post/486820/#9"
  },
  {
    title: "Как узнать об использовании метода event.preventDefault()?",
    href: "https://habr.com/ru/post/486820/#10"
  },
  {
    title: "Почему obj.someprop.x приводит к ошибке?",
    href: "https://habr.com/ru/post/486820/#11"
  },
  {
    title: "Что такое цель события или целевой элемент (event.target)?",
    href: "https://habr.com/ru/post/486820/#12"
  },
  {
    title: "Что такое текущая цель события (event.currentTarget)?",
    href: "https://habr.com/ru/post/486820/#13"
  },
  {
    title: "В чем разница между операторами \"==\" и \"===\"?",
    href: "https://habr.com/ru/post/486820/#14"
  },
  {
    title: "Почему результатом сравнения двух похожих объектов является false?",
    href: "https://habr.com/ru/post/486820/#15"
  },
  {
    title: "Для чего используется оператор \"!!\"?",
    href: "https://habr.com/ru/post/486820/#16"
  },
  {
    title: "Как записать несколько выражений в одну строку?",
    href: "https://habr.com/ru/post/486820/#17"
  },
  {
    title: "Что такое поднятие (Hoisting)?",
    href: "https://habr.com/ru/post/486820/#18"
  },
  {
    title: "Что такое область видимости (Scope)?",
    href: "https://habr.com/ru/post/486820/#19"
  },
  {
    title: "Что такое замыкание (Closures)?",
    href: "https://habr.com/ru/post/486820/#20"
  },
  {
    title: "Какие значения в JS являются ложными?",
    href: "https://habr.com/ru/post/486820/#21"
  },
  {
    title: "Как проверить, является ли значение ложным?",
    href: "https://habr.com/ru/post/486820/#22"
  },
  {
    title: "Для чего используется директива «use strict»?",
    href: "https://habr.com/ru/post/486820/#23"
  },
  {
    title: "Какое значение имеет this?",
    href: "https://habr.com/ru/post/486820/#24"
  },
  {
    title: "Что такое прототип объекта?",
    href: "https://habr.com/ru/post/486820/#25"
  },
  {
    title: "Что такое IIFE?",
    href: "https://habr.com/ru/post/486820/#26"
  },
  {
    title: "Для чего используется метод Function.prototype.apply?",
    href: "https://habr.com/ru/post/486820/#27"
  },
  {
    title: "Для чего используется метод Function.prototype.call?",
    href: "https://habr.com/ru/post/486820/#28"
  },
  {
    title: "В чем разница между методами call и apply?",
    href: "https://habr.com/ru/post/486820/#29"
  },
  {
    title: "Для чего используется метод Function.prototype.bind?",
    href: "https://habr.com/ru/post/486820/#30"
  },
  {
    title: "Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?",
    href: "https://habr.com/ru/post/486820/#31"
  },
  {
    title: "Что такое функции высшего порядка (Higher Order Functions)?",
    href: "https://habr.com/ru/post/486820/#32"
  },
  {
    title: "Почему функции в JS называют объектами первого класса (First-class Objects)?",
    href: "https://habr.com/ru/post/486820/#33"
  },
  {
    title: "Как бы Вы реализовали метод Array.prototype.map?",
    href: "https://habr.com/ru/post/486820/#34"
  },
  {
    title: "Как бы Вы реализовали метод Array.prototype.filter?",
    href: "https://habr.com/ru/post/486820/#35"
  },
  {
    title: "Как бы Вы реализовали метод Array.prototype.reduce?",
    href: "https://habr.com/ru/post/486820/#36"
  },
  {
    title: "Что такое объект arguments?",
    href: "https://habr.com/ru/post/486820/#37"
  },
  {
    title: "Как создать объект, не имеющий прототипа?",
    href: "https://habr.com/ru/post/486820/#38"
  },
  {
    title: "Почему в представленном коде переменная b становится глобальной при вызове функции?",
    href: "https://habr.com/ru/post/486820/#39"
  },
  {
    title: "Что такое ECMAScript?",
    href: "https://habr.com/ru/post/486820/#40"
  },
  {
    title: "Что нового привнес в JS стандарт ES6 или ECMAScript2015?",
    href: "https://habr.com/ru/post/486820/#41"
  },
  {
    title: "В чем разница между ключевыми словами «var», «let» и «const»?",
    href: "https://habr.com/ru/post/486820/#42"
  },
  {
    title: "Что такое стрелочные функции (Arrow Functions)?",
    href: "https://habr.com/ru/post/486820/#43"
  },
  {
    title: "Что такое классы (Classes)?",
    href: "https://habr.com/ru/post/486820/#44"
  },
  {
    title: "Что такое шаблонные литералы (Template Literals)?",
    href: "https://habr.com/ru/post/486820/#45"
  },
  {
    title: "Что такое деструктуризация объекта (Object Destructuring)?",
    href: "https://habr.com/ru/post/486820/#46"
  },
  {
    title: "Что такое модули (Modules)?",
    href: "https://habr.com/ru/post/486820/#47"
  },
  {
    title: "Что такое объект Set?",
    href: "https://habr.com/ru/post/486820/#48"
  },
  {
    title: "Что такое функция обратного вызова (Callback Function)?",
    href: "https://habr.com/ru/post/486820/#49"
  },
  {
    title: "Что такое промисы (Promises)?",
    href: "https://habr.com/ru/post/486820/#50"
  },
  {
    title: "Что такое async/await?",
    href: "https://habr.com/ru/post/486820/#51"
  },
  {
    title: "В чем разница между spread-оператором и rest-оператором?",
    href: "https://habr.com/ru/post/486820/#52"
  },
  {
    title: "Что такое параметры по умолчанию (Default Parameters)?",
    href: "https://habr.com/ru/post/486820/#53"
  },
  {
    title: "Что такое объектная обертка (Wrapper Objects)?",
    href: "https://habr.com/ru/post/486820/#54"
  },
  {
    title: "В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?",
    href: "https://habr.com/ru/post/486820/#55"
  },
  {
    title: "Что такое NaN? Как проверить, является ли значение NaN?",
    href: "https://habr.com/ru/post/486820/#56"
  },
  {
    title: "Как проверить, является ли значение массивом?",
    href: "https://habr.com/ru/post/486820/#57"
  },
  {
    title: "Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора \"%\")?",
    href: "https://habr.com/ru/post/486820/#58"
  },
  {
    title: "Как определить наличие свойства в объекте?",
    href: "https://habr.com/ru/post/486820/#59"
  },
  {
    title: "Как в JS создать объект?",
    href: "https://habr.com/ru/post/486820/#61"
  },
  {
    title: "В чем разница между методами Object.freeze и Object.seal?",
    href: "https://habr.com/ru/post/486820/#62"
  },
  {
    title: "В чем разница между оператором «in» и методом hasOwnProperty?",
    href: "https://habr.com/ru/post/486820/#63"
  },
  {
    title: "Какие приемы работы с асинхронным кодом в JS Вы знаете?",
    href: "https://habr.com/ru/post/486820/#64"
  },
  {
    title: "В чем разница между обычной функцией и функциональным выражением?",
    href: "https://habr.com/ru/post/486820/#65"
  },
  {
    title: "Как в JS вызвать функцию?",
    href: "https://habr.com/ru/post/486820/#66"
  },
  {
    title: "Что такое запоминание или мемоизация (Memoization)?",
    href: "https://habr.com/ru/post/486820/#67"
  },
  {
    title: "Как бы Вы реализовали вспомогательную функцию запоминания?",
    href: "https://habr.com/ru/post/486820/#68"
  },
  {
    title: "Почему typeof null возвращает object? Как проверить, является ли значение null?",
    href: "https://habr.com/ru/post/486820/#69"
  },
  {
    title: "Для чего используется ключевое слово «new»?",
    href: "https://habr.com/ru/post/486820/#70"
  }
]

export const makeQuestionsAndAnswers = () => questions.map(question => ({
    ...question,
    id: uniqueId(),
    answers: [
        {
            id: 1,
            title: 'Хорошо'
        },
        {
            id: 2,
            title: 'Сойдет'
        },
        {
            id: 3,
            title: 'Плохо'
        }
    ]
}))
