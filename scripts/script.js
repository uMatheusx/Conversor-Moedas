const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.querySelector('body').style.backgroundColor = '#048952'
        document.querySelector('.container').style.backgroundColor = '#191a1b'
    } else {
        document.querySelector('body').style.backgroundColor = '#191a1b'
        document.querySelector('.container').style.backgroundColor = '#048952'
    }
});