import { debounce, debounceTime, fromEvent, map, merge, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";


/*
* mergeAll: Aplana el flujo de observables sin combinarlos ni transformarlos 
* (solo emite lo que los observables internos devuelven).
*/
const body = document.body;

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// events

const showUser = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    users.forEach((user:GithubUser) => {
        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = user.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    });
}
// streams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// operadores, forma clasica
// input$.pipe(
//     debounceTime(500),
//     map((event)=>{
//         const texto = event.target['value'];
//         return ajax.getJSON(`https://api.github.com/users/${texto}`)
//     })
// ).subscribe(resp => {
//     resp.pipe(
//         map(res => res['url'])
//     ).subscribe(console.log)
// })

input$.pipe(
    debounceTime(1000),
    map<KeyboardEvent,string>(({target})=>target['value']),
    map(value => ajax.getJSON(`https://api.github.com/search/users?q=${ value }`)),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GithubUser[]>(users => users.items)
).subscribe(showUser)

