var contactButton = document.getElementById('con-btn');
var contactWrap = document.getElementById('con-wrap');
var contactButton2 = document.getElementById('con-btn2');

contactButton.addEventListener('click', function() {
    if (contactWrap.classList.contains('show')) {
        contactWrap.classList.remove('show');
        contactWrap.classList.add('hide');
    } else {
        contactWrap.classList.add('show');
        contactWrap.classList.remove('hide');
    }
})

contactButton2.addEventListener('click', function() {
    if (contactWrap.classList.contains('show')) {
        contactWrap.classList.remove('show');
        contactWrap.classList.add('hide');
    } else {
        contactWrap.classList.add('show');
        contactWrap.classList.remove('hide');
    }
})