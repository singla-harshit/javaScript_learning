let d = new Date();
console.log(d.toDateString(), "- toDateString");
console.log(d.toISOString(), "- toISOString");
console.log(d.toJSON(), "- toJSON");
console.log(d.toLocaleDateString(), "- toLocaleDateString");
console.log(d.toLocaleString(), "- toLocaleString");
console.log(d.toLocaleTimeString(), "- toLocaleTimeString");
console.log(d.toString(), "- toString");
console.log(d.toTimeString(), "- toTimeString");
console.log(d.toUTCString(), "- toUTCString");

const time = document.querySelector(".time");

const date = document.querySelector(".date");
setInterval(function () {
  let mili = new Date();

  time.innerHTML = mili.toLocaleTimeString();
  date.innerHTML = mili.toDateString();
}, 1000);
