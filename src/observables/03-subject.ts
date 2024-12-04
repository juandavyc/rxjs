import { Observable, Observer, Subject } from "rxjs";


const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('complete'),
}

const intervalo$ = new Observable<number>(subs => {
    const interval = setInterval(() => {
        // Cold Observable
        subs.next(Math.random());
        console.log("xx");
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log("destruido");
    }
})

//subscripcion directa

// const sub1 = intervalo$.subscribe(num => console.log('sub1', num));
// const sub2 = intervalo$.subscribe(num => console.log('sub2', num));

// subscripcion observer 

// const sub1 = intervalo$.subscribe(observer);
// const sub2 = intervalo$.subscribe(observer);

// subscripcion por Subject


/*
* 1. casteo multiple, muchas subscriciones pueden
* 2. tambien es un observer 
* 3. next, error, complete
*/

const subject$  = new Subject();

const intervalSubject = intervalo$.subscribe(subject$);

// const subs1 = subject$.subscribe(num => console.log('subs1:',num)); 
// const subs2 = subject$.subscribe(num => console.log('subs2:',num)); 

const subs1 = subject$.subscribe(observer); 
const subs2 = subject$.subscribe(observer); 

setTimeout(()=>{
    // Introducir data
    // Hot Observable
    subject$.next(20);
    subject$.complete();
    intervalSubject.unsubscribe();
},3500)

