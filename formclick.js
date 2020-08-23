document.querySelector('input').addEventListener('click', (event) => {
    event.stopPropagation();
})

document.querySelector('button').addEventListener('click', (event) => {
    event.stopPropagation();
})

document.querySelector('form').addEventListener('click', () => {
    alert('Здесь ничего нет, нажмите, пожалуйста, на кнопку или заполните поле ввода');
})
