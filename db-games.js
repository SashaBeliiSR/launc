var params = location.search.substring(1).split("&");
var result = "";
for(i = 0; i < params.length; i ++) result += ":" + params[i].split("=")[1];
result = result.substring(1);
console.log(result);


const baseUrl = 'https://6455f3055f9a4f2361374d32.mockapi.io/api/v1/games?id=' + result;
console.log('JSON read is runned!');
const xhr = new XMLHttpRequest()

xhr.open('GET', baseUrl)
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.responseType = 'json'

xhr.onload = function() {
	console.log(xhr.response)
	let = Obj = xhr.response;
	console.log('title is=>' + Obj.title);
}


xhr.send()
