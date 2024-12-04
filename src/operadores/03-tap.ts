import { filter, map, range, tap } from 'rxjs';

/*
* es void, asi que no devuelve nada, puedes mostrar o ejecutar otras tareas
*/
const numeros$ = range(1,5);


numeros$.pipe(
    tap(x=>{
        console.log('Antes: ',x);
    }), 
    map(x => x * 10),
    filter(x=>x!==10),
    tap({
        next:(x)=>console.log('despues:',x),
        complete:()=>console.info('complete')
    })
).subscribe(x=>console.log('subscribe:',x))




