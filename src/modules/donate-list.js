import { Settings as set } from "../core/constants/settings";
import * as utils from '../core/utils/index';

export class DonateList {
    #containerDonate
    constructor(donates) {
        this.donates = donates;
        this.#containerDonate = document.createElement('div');
        this.#containerDonate.className = "donates-container"
    }
    // параметр updatedDonates (новый массив donates)
    updateDonates(updatedDonates ) {


        const items = document.querySelectorAll('.donate-item');
        items.forEach(f => {
            f.parentNode.removeChild(f);
            f.remove()
        });

        console.log('updatedDonates', updatedDonates);

        const donatesDivInContainer = document.querySelector('.donates-container__donates');

        updatedDonates.forEach(donate => {
            const donateItem = document.createElement('div');
            donateItem.className = "donate-item";
            donateItem.textContent = `${utils.getFormattedTime(donate.date)} - `;

            const bElement = document.createElement('b');
            bElement.textContent = `${donate.amount}${set.currency}`;

            donateItem.append(bElement);
            donatesDivInContainer.append(donateItem);
        });
    }

    render() {
        const headerContainer = document.createElement('h2');
        headerContainer.className = "donates-container__title";
        headerContainer.textContent = "Список донатов";

        const donatesContainerDiv = document.createElement('div');
        donatesContainerDiv.className = "donates-container__donates";

        this.donates.forEach(donate => {
            const donateItem = document.createElement('div');
            donateItem.className = "donate-item";
            donateItem.textContent = `${utils.getFormattedTime(donate.date)} - `;

            const bElement = document.createElement('b');
            bElement.textContent = `${donate.amount}${set.currency}`;

            donateItem.append(bElement);
            donatesContainerDiv.append(donateItem);
        });

        this.#containerDonate.append(headerContainer, donatesContainerDiv);
        return this.#containerDonate;
    }
}