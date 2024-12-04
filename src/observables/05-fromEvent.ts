import { fromEvent } from "rxjs";


const div = document.createElement('div');
div.style.cssText = 'width:200px; height:200px; background-color:blue;';
document.body.appendChild(div);


const divClick$ = fromEvent<MouseEvent>(div, 'click');
const bodyKeys$ = fromEvent<KeyboardEvent>(document, 'keyup')


divClick$.subscribe(({ x, y, ...data }) => {
    console.log(x, y);
});

bodyKeys$.subscribe(({ key }) => {
    if (key === 'Enter') {
        console.log("Bingooo")
    } else {
        console.log('Other key', key)
    }
})