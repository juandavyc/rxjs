import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
//const url = "https://api.github.com/users?per_page=5";


// ajax.post(url, 
// // body
// {
//     id: 1,
//     nombre: 'David',
// },
// //headers
// {'mi-token': 'abc123'}
// ).subscribe(console.log)

// dynamic
ajax({
    url,
    method: 'DELETE',   
    headers: {
        'mi-token':'ABC123'
    },
    body: { id: 1, nombre: 'david' },
}).subscribe(console.log)