//fetch('https://jsonplaceholder.typicode.com/todos/1')

const button = document.querySelector("button");

button.addEventListener('click', async ()=> {

const res =await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await res.json ();


const div = document.querySelector('#myData')
div.innerText = data.title



})