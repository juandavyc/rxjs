import { interval, map, merge, mergeMap, Observable, of, take, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// const letters$ = of('a', 'b', 'c');

// letters$.pipe(
//     mergeMap((letter) => interval(1000).pipe(
//         map(i=>i+letter),
//         take(6)
//     ))
// ).subscribe(console.log)

//https://jsonplaceholder.typicode.com/users/${id}


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    otherID?: number;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const ids$ = of(1, 2, 3);

ids$.pipe(
    mergeMap(
        id => ajax.getJSON<User>(`${baseUrl}/${id}`).pipe(
            map(user => ({ ...user, otherId: id }))
        )
    )
).subscribe(console.log)
