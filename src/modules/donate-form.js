import App from './app';
import * as constants from '../core/constants/settings';

export class DonateForm {
    #donateForm
    #totalAmount
    #createNewDonate

    constructor(amount, createNewDonate) {
        this.#totalAmount = amount;
        this.#createNewDonate = createNewDonate;

        this.#donateForm = document.createElement('form');
        this.#donateForm.className = "donate-form";
    }
    
    submitInput() {
        this.#donateForm.addEventListener('submit', (event) => {
            console.log(event);
            event.preventDefault();
            const { target } = event;
            const newDonate = {};
            newDonate['date'] = new Date();
            newDonate['amount'] = target[0].value;
            console.log('newDonate', newDonate);

            this.#createNewDonate(newDonate);

            const inputD = document.querySelector('.donate-form__donate-input');
            inputD.value = "";
        })
    }

    updateTotalAmount(newAmount) {
        const totalAmountElement = document.querySelector('#total-amount')
        totalAmountElement.textContent = `${newAmount}${constants.Settings.currency}`;
    }

    render() {
        const headerD = document.createElement('h1');
        headerD.id = "total-amount";
        headerD.textContent = `28${constants.Settings.currency}`;

        const labelD = document.createElement('label');
        labelD.className = "donate-form__input-label";
        labelD.textContent =`Введите сумму в ${constants.Settings.currency}`;

        const inputD = document.createElement('input');
        inputD.className = "donate-form__donate-input";
        inputD.name = "amount";
        inputD.type = "number";
        inputD.max = "100";
        inputD.min = "0";
        inputD.required = "";
        labelD.append(inputD);

        const buttonD = document.createElement('button');
        buttonD.className = "donate-form__submit-button";
        buttonD.type = "submit";
        buttonD.textContent = "Задонатить";

        this.#donateForm.append(headerD, labelD, buttonD);

        return this.#donateForm;
    }
}