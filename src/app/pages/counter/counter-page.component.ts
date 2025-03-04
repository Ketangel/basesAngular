import { Component, signal } from "@angular/core";


@Component({
   templateUrl:`counter-page.component.html`
})
export class CounterPageComponent{

    public counter: number = 0;
    counterSignal = signal(10);

    increaseBy(value:number) {
       this.counter +=value;
       this.counterSignal.update(valu=> valu + value);

    }

    decreaseBy(arg0: number) {
        this.counter  +=arg0;
        this.counterSignal.update(valu=> valu + arg0);
    }

    resetCounter() {
       this.counter = 0; // forma 

       this.counterSignal.set(0) //senal aqui set hace un cambio el valor pero no actualiza
    }
        
}
