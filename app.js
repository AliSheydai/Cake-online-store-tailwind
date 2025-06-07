const mobileBtn = document.getElementById('mobile-menu-btn')
let menuOpen = false;

mobileBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenu.classList.toggle('hidden')

    if (menuOpen) {
        mobileBtn.classList.remove('fa-bars');
        mobileBtn.classList.add('fa-times');
    } else {
        mobileBtn.classList.remove('fa-times');
        mobileBtn.classList.add('fa-bars');
    }
})

document.querySelectorAll('.faq-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });

const btn = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});