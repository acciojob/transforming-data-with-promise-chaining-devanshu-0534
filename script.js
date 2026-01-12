//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function (){
	const value = Number(input.value);
	new Promise ((resolve)=>{
		setTimeOut(()=>{
			output.textContent = `Result:${value}`;
			resolve(value);
		}, 2000)
	})
	.then((num)=>{
		return new Promise((resolve) => {
			setTimeOut(()=>{
				const result = num * 2;
				output.textContent = `Result:${result}`;
				resolve(result);
			}, 1000)
		})
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeOut(()=>{
				const result = num - 3;
				output.textContent = `Result: ${result}`;
				resolve(result)
			}, 1000)
		})
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeOut(()=>{
				const result = num/2;
				output.textContent = `Result: ${result}`;
				resolve(result);
			}, 1000)
		})
	})
	.then((num)=>{
		return new Promise((resolve)=>{
			setTimeOut(()=>{
				const result = num + 10;
				output.textContent = `Final Result: ${result}`;
				resolve(result);
			}, 1000)
		})
	})
	
}









