import moment from 'moment';

export const calculateSumOfNumbers = (numbers) => {
    return numbers.reduce((acc, r) => acc + r);
}

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}