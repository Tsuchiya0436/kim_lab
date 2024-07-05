function toggleYear(year) {
    var yearSection = document.getElementById('year-' + year);
    if (yearSection.classList.contains('hidden')) {
        yearSection.classList.remove('hidden');
    } else {
        yearSection.classList.add('hidden');
    }
}

function toggleContent(button) {
    var content = button.previousElementSibling;
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = '折りたたむ';
    } else {
        content.classList.add('hidden');
        button.textContent = '続きを読む';
    }
}
