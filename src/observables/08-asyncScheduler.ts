import { asyncScheduler } from "rxjs";

// const myTask = ()=>console.log('myTask works!');

// myTask();

// const asyncTask = asyncScheduler.schedule(myTask, 2000);

// console.log(asyncTask)

const sub$ = asyncScheduler.schedule(function(state){
    console.log('state:',state)
    this.schedule(!state, 1000);
}, 3000, true)


asyncScheduler.schedule(()=>sub$.unsubscribe(), 9000)