const form = document.querySelector('.contact-form');
const cards = document.querySelectorAll('.feature, .comment, .sub-card');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const job = document.getElementById('job').value.trim();
    const textareaEL = document.querySelector('textarea').value.length;


    if (fullname === '' || job === ''  || textareaEL < 5) {
        alert('لطفا تمام فیلد ها را پر کنید.')
        return;
    }

    // فعلاً چون بک‌اند نداری، فقط یه پیام موفقیت نشون بده
    alert('پیام شما با موفقیت ارسال شد!');
    form.reset();
});

// دسترسی سریع

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// اسکرول نرم


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));