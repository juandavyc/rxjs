import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

// concatena observables, secuencial
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [7,8,9],
    of('Casa')
).subscribe(console.log)