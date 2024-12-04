import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GIRHUB_USER = 'klerith';

const getHttpRequest = (url:string)=>{
    return ajax.getJSON(url).pipe(catchError(error=>of(error)))
}


forkJoin({
    user:getHttpRequest(`${GITHUB_API_URL}/${GIRHUB_USER}`),
    repo:getHttpRequest(`${GITHUB_API_URL}/${GIRHUB_USER}/repos`),
    gists:getHttpRequest(`${GITHUB_API_URL}/${GIRHUB_USER}/gists`),
}).subscribe(console.log)