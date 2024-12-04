import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
//const url = "https://api.github.com/users?per_page=5";

const obsAjax$ = ajax(url);
const obsGetJSON$ = ajax.getJSON(url);

obsAjax$.subscribe((data)=> console.log('ajax',data));
obsGetJSON$.subscribe((data)=> console.log('json',data));