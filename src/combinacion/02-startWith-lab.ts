import { startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const loadingDiv = document.createElement('div');

loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';


const body = document.body;



ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(
    (response) => {
        if(response === true){
            body.append(loadingDiv)
        }
        else{
            document.querySelector('.loading').remove();
        }
        console.log(response)
    }
)