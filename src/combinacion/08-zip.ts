const age$ = of(27, 25, 29);
const name$ = of('Foo', 'Bar', 'Beer');
const isDev$ = of(true, true, false);

zip(age$, name$, isDev$).pipe(
    map(([age, name, isDev]) => ({ age, name, isDev }))
)
    .subscribe(x => console.log(x));