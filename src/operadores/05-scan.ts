import { from } from 'rxjs';
import { scan, map, reduce } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalAcomulator = (acc: number, cur: number): number => acc + cur;

// reduce
from(numbers).pipe(
    reduce(totalAcomulator, 0)
).subscribe(console.log)
console.log("scan")
// scan
from(numbers).pipe(
    scan(totalAcomulator, 2)
).subscribe(console.log)
