const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const choosePlanBtn = document.querySelectorAll('.button');
const modalNegativeBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// Shows Backdrop in Document
function showBackdrop() {
    backdrop.classList.add('open');
}

// Hide Backdrop in Document
function hideBackdrop() {
    backdrop.classList.remove('open');
}

// Shows Modal in Document
function showModal() {
    modal.classList.add('open');
}

// Hide Modal in Document
function hideModal() {
    modal.classList.remove('open');
}

// Show Mobile Navigation in Document
function showMobileNav() {
    mobileNav.classList.add('open');
}

// Hide Mobile Navigation in Document
function hideMobileNav() {
    mobileNav.classList.remove('open');
}

// Event Listeners
if (choosePlanBtn) {
    choosePlanBtn.forEach((button) => {
        button.addEventListener('click', () => {
            showModal();
            showBackdrop();
        });
    });
}

if (modalNegativeBtn) {
    modalNegativeBtn.addEventListener('click', () => {
        hideBackdrop();
        hideModal();
    });
}

backdrop.addEventListener('click', () => {
    if (modalNegativeBtn) {
        hideModal();
    }
    hideMobileNav();
    hideBackdrop();
});

toggleBtn.addEventListener('click', () => {
    showMobileNav();
    showBackdrop();
});
