import { filter, interval, map, range, reduce, take, tap } from "rxjs";


const numbers = Array.from(Array(6).keys());

const totalReducer = (acc: number, curr: number): number => acc + curr;

const total = numbers.reduce(totalReducer, 3);

console.log('JS: ',total);

// 0,1,2,3,4,5
// 3
// 3 4 6 9 13 18

// 0 1 2 3
// 1 2 3 4
// 1 2 3
// 21 23 26

interval(1000)
.pipe(
    tap(x=>console.log('a',x)),
    take(4),
    map(x=>x+1),
    tap(x=>console.log('b',x)),
    filter(x=>x!=4),
    tap(x=>console.log('c',x)),
    reduce(totalReducer,20)
)
.subscribe(x=>console.log('complete',x))