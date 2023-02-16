const income = document.getElementById('income');

function calculateExpenses() {
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');
    const others = document.getElementById('others');
    const totalExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value) + parseFloat(others.value);
    const remainingBalance = parseFloat(income.value) - totalExpenses;

    return [totalExpenses, remainingBalance];
}

function calculateSavings() {
    const savings = document.getElementById('savings');
    const savingsBalance = parseFloat(income.value) * (parseFloat(savings.value) / 100);
    const totalExpensesAndRemainingBalance = calculateExpenses();
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