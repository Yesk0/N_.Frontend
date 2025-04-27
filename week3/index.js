// const userAgent = navigator.userAgent;
// userAgent === "Safari" ? "https://google.com/" : "https://wikipedia.org/";
// console.log(userAgent);

// let arr = ["hfjhf", "fjhjshd", "hfhdjf", "fjhjsfjhf"]
// let ul = document.getElementsByTagName("ul");
//     for (let i = 0; i < arr.length; i++) {
//       let li = document.createElement("li");
//       ul[0].appendChild(li);
//     };

//     let newLi = document.getElementsByTagName("li");
//     for (let j = 0; j < arr.length; j++) {
//       newLi[j].addEventListener("click", func);

//     };

//     function func() {
//       for (var i = 0; i < newLi.length; i++) {
//         this.innerHTML = arr[i];
//       };
//     };

const listItems = document.querySelectorAll("li");

listItems.forEach(li => {
  const span = document.createElement("span");
  span.textContent = "close";
  span.className = "close";
  li.appendChild(span);
});
