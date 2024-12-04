

//https://reqres.in/api/login?delay=1

import { catchError, delay, exhaustMap, fromEvent, map, mergeMap, Observable, of, tap, throwError } from "rxjs";

// RESPONDERA UN TOKEN??
// catchError

const fakeApiRest = (userPassword) => {
    
    return of('good').pipe(
        delay(1000),
        map(() => {
            // Simula la obtención de un token
            const token = null; //'12345'; // Simulando un token
            if (!token) {
                throw new Error('No se pudo obtener el token'); // Lanza un error si no hay token
            }
            return token; // Retorna el token si existe
        }),
        catchError(err => {
            console.error('Error al obtener el token:', err.message);
            // Retorna un valor alternativo o un observable
            return of('Error al obtener el token'); // Puedes ajustar esto según tus necesidades
        })
    )
}


const body = document.body;

const form = document.createElement('form') as HTMLFormElement;

const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitButton = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'your email';
inputEmail.value = 'davyc@google.com';

inputPassword.type = 'password';
inputPassword.placeholder = 'your password';
inputPassword.value = '123456%s';

// submitButton.type = 'submit';
submitButton.textContent = 'log in';


form.append(inputEmail, inputPassword, submitButton,)

body.append(form);

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(({ target }) => {
        return {
            email: target[0].value,
            password: target[1].value,
        }
    }),
    exhaustMap(fakeApiRest)
)

// Suscribiéndote al observable
submitForm$.subscribe({
    next: (token) => console.log('sub-next:', token),  // Maneja el valor emitido
    error: (error) => console.log('sub-error:', error), // Maneja el error
    complete: () => console.log('sub-complete') // Se ejecuta al completar
});



