import { isConstructorDeclaration } from "typescript";

interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implement Subject {
    observers: Observers[] = [];

    constructor() {
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }
    
    suscribe (observer: Observer) {
        this.ResizeObserverSize.push(observer)
    }

    unsubscribe(observer: Observer) {
        const index = this.observer.findIndex(obs => {
            return obs === observer
        })

        this.ResizeObserverSize.splice(index, 1);
    }

    notify(data: any) {
        this.ResizeObserverSize.forEach(observer => observer.update)
    }
}

class priceDisplay implements Observer {
    private el: HTMLElement;
    constructor() {
        this.el = document.querySelector("#price");
    }
    update(data:any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new priceDisplay();

value.subscribe(display);

setTimeout(
   () =>  value.unsubscribe(display),
   5000
)









