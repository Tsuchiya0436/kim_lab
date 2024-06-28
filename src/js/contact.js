document.addEventListener('DOMContentLoaded', function() {
    (function() {
        emailjs.init('N6xcKqt8GNnu7-jQG');
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_7bqg9pq', 'template_x0a4z5i', this)
            .then(function(response) {
                alert('メッセージが送信されました。ありがとうございます！');
            }, function(error) {
                alert('メッセージの送信に失敗しました。再度お試しください。');
            });
    });
});