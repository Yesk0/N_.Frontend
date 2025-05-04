//first task
/*function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

function checkAge(age){
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age){
    return age > 18 || confirm("Родители разрешили?");
}*/

//second task
/*let x = prompt("x?"), n = prompt("n?");

function pow(x, n){
    return x ** n;
}
alert(pow(x, n));*/ 

//third task
/*function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );*/

/*let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask("Вы согласны?",
    () => alert("Вы согласились.") ,
    () => alert("Вы отменили выполнение.")
);*/

//fourth
/*let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10*/

//fifth
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); // Вася, Петя, Маша*/

//sixth
/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`,
id: item.id
}))

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

//seventh
/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// function getAverageAge(users) {
//   let avg = 0;
//   for(let i = 0; i < arr.length; i++){
//     avg += users[i].age;
//   }
//   avg /= arr.length;
//   return avg;
// }

function getAverageAge(users) {return users.reduce((prev, item) => prev + item.age, 0)/users.length}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/