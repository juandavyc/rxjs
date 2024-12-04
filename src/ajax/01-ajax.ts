import { catchError, map, of } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax'

const url = "https://api.github.com/users?per_page=5";

// ajax
ajax(url).pipe(
    map(data => data.response),
    catchError((err:AjaxError) => {
        console.log('error en', err.message)
        return of([])
    })
).subscribe(users => console.log('usuarios:', users))