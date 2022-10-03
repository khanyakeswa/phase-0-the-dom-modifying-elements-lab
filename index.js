console.log('debug1');
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
// const newHeader = document.getElementsByTagName('newHeader')[0];
// newHeader.id = "victory";
newHeader.id = "victory";
newHeader.textContent = "Khanya is the champion";
// var newHeader = h1;
document.body.append(newHeader);

console.log('debug2');
