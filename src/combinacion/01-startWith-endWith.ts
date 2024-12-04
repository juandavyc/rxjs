import { endWith, of, startWith } from "rxjs";



const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'), // sincronos
    endWith('x','y','z') // sincronos
)


numeros$.subscribe(console.log) // a