let elItem1 = document.querySelector(".item-1");
let elItem2 = document.querySelector(".item-2");
let elItem3 = document.querySelector(".item-3");

function wait(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
async function show() {
  elItem1.classList.add("red");
  await wait(7000);
  elItem1.classList.remove("red");
  elItem2.classList.add("yellow");
  await wait(3000);
  elItem2.classList.remove("yellow");
  elItem3.classList.add("green");
  await wait(7000);
  elItem3.classList.remove("green");
  elItem2.classList.add("yellow");
  await wait(3000);
  elItem2.classList.remove("yellow");
  elItem1.classList.add("red");
}
show();
setInterval(show, 20000);
