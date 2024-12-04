import { Observable, Observer } from "rxjs";

// maneja las notififcaciones del observable
const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('warn', error),
    complete: () => console.info('complete'),
}
// genera los valores
const obs$ = new Observable<string>((subs) => {
    subs.next('Hola');
    subs.next('World');
    subs.complete();
    subs.next('Mundo');
});
// elementos subscritos
obs$.subscribe(observer)