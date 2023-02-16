const income = document.getElementById('income');

function calculateExpenses() {
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const others = document.getElementById('others');

    if (income.value === '' || income.value === '0') {
        alert('Please enter your monthly income.');
        return [0, 0];
    }

    if (food.value === '' || rent.value === '' || clothes.value === '' || others.value === '') {
        alert('Please enter the amount of money or enter Zero (0) for leave empty.');
        return [0, 0];
    }

    const totalExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value) + parseFloat(others.value);

    if (totalExpenses > parseFloat(income.value)) {
        alert('Your total expenses is greater than your income!!! Please decrease your expenses.')
        return [0, 0];
    }

    const remainingBalance = parseFloat(income.value) - totalExpenses;

    return [totalExpenses, remainingBalance];
}

function calculateSavings() {
    const savings = document.getElementById('savings');
    if (savings.value === '') {
        alert('Please enter the amount of money for savings or enter Zero (0) for leave empty.');
        return [0, 0];
    }

    const savingsBalance = parseFloat(income.value) * (parseFloat(savings.value) / 100);
    const totalExpensesAndRemainingBalance = calculateExpenses();

    if(totalExpensesAndRemainingBalance[1] == 0) {
        return [0, 0];
    }
    else if (savingsBalance > totalExpensesAndRemainingBalance[1]) {
        alert('Your savings balance is greater than remaining balance!!! Please decrease your expenses.')
        return [0, 0];
    }

    const remainingBalance = totalExpensesAndRemainingBalance[1] - savingsBalance;
    return [savingsBalance, remainingBalance];
}


document.getElementById('calcutate-btn').addEventListener('click', () => {
    const totalExpensesAndRemainingBalance = calculateExpenses();
    document.getElementById('total-expenses').innerText = (totalExpensesAndRemainingBalance[0].toFixed(2)).toString();
    document.getElementById('net-balance').innerText = (totalExpensesAndRemainingBalance[1].toFixed(2)).toString();
});

document.getElementById('savings-btn').addEventListener('click', () => {
    const savingsBalanceAndRemainingBalance = calculateSavings();
    document.getElementById('savings-balance').innerText = (savingsBalanceAndRemainingBalance[0].toFixed(2)).toString();
    document.getElementById('remaining-balance').innerText = (savingsBalanceAndRemainingBalance[1].toFixed(2)).toString();
});