import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as utils from '../core/utils/index';

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

export default class App {
    #donateFormBlock
    #donateListBlock
    #state
    #mockDonates

    constructor() {
        this.#state = {
            donates: mockDonates,
            totalAmount: utils.calculateSumOfNumbers(mockDonates.map(m => m.amount)),
        }
        this.#donateListBlock = new DonateList(this.#state.donates);
        this.#donateFormBlock = new DonateForm(this.#state.updateTotalAmount,  this.createNewDonate.bind(this));
        // this.#donateFormBlock = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this, newDonate));
        // Для 3-го задания
        // this.#mockDonates = [
        //     { amount: 4, date: new Date() },
        //     { amount: 20, date: new Date() },
        //     { amount: 3, date: new Date() },
        //     { amount: 1, date: new Date() },
        // ];
        // this.#donateListBlock = new DonateList(this.#mockDonates);
    }

    createNewDonate(newDonate) {
        this.#state.donates.push(newDonate);

        this.#state.totalAmount = Number(this.#state.totalAmount) + Number(newDonate.amount);

        this.#donateListBlock.updateDonates(this.#state.donates);
        this.#donateFormBlock.updateTotalAmount(this.#state.totalAmount); 
    } 

    run() {
        const mainBody = document.querySelector('body');

        const donateFormHTML = this.#donateFormBlock.render();
        this.#donateFormBlock.submitInput();

        const donateListHTML = this.#donateListBlock.render();
        
        mainBody.append(donateFormHTML);
        mainBody.append(donateListHTML);
        
        this.#donateFormBlock.updateTotalAmount(this.#state.totalAmount);
    }
}