const local = window.localStorage.getItem('hello');
console.log(local);

const setAge = () =>{
	window.localStorage.setItem('age', 23);
}