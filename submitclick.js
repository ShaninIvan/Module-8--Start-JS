document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault()
    let text = document.getElementsByTagName('input')[0].value;
    alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — ' + text);
})