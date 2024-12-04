import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.info('complete'),
}


const intervalo$ = new Observable<number>(subscriber => {
    // crear contador,
    let count = 0;
    const interval = setInterval(() => {
        subscriber.next(count++);
    }, 1000)

    setTimeout(()=>{
        subscriber.complete();
    },2500)
    //
    return () => {
        clearInterval(interval);
        console.log('interval destruido');
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log("compleado");
}, 6000);