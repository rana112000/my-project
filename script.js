// Smooth scroll for nav links
$('a.nav-link').on('click', function(e) {
    var href = $(this).attr('href');
    if (href.startsWith('#')) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(href).offset().top - 70
        }, 800);
    }
});

// Show form message and clear fields
$('#contact form').submit(function(e) {
    e.preventDefault();
    $('#form-message').removeClass('d-none').text('Thank you for reaching out, ' + $('#name').val().split(' ')[0] + '! I will reply soon.');
    $(this)[0].reset();
});

// Animate timeline items on scroll
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const achievementCards = document.querySelectorAll('.achievement-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    achievementCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});