const nav = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');
const navLinks = document.querySelectorAll('.link');

const navInteraction = () => {
	menuBtn.addEventListener('click', () => {
		// alert('Click');
		nav.classList.add('show-nav');

		navLinks.forEach((btn, index) => {
			menuBtn.style.display = 'none';
			closeBtn.style.display = 'block';

			setTimeout(() => {
				btn.classList.add('show-nav-links');
			}, 500 * index);
		});
	});

	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			// e.preventDefault();

			nav.classList.remove('show-nav');
			closeBtn.style.display = 'none';
			menuBtn.style.display = 'block';
		});
	});

	closeBtn.addEventListener('click', () => {
		navLinks.forEach((btn, index) => {
			closeBtn.style.display = 'none';

			const reverseDelay = (navLinks.length - 1 - index) * 200;

			setTimeout(() => {
				btn.classList.remove('show-nav-links');

				if (index === 0) {
					setTimeout(() => {
						nav.classList.remove('show-nav');
					}, 100); // Small buffer for the final link's transition
				}

				menuBtn.style.display = 'block';
			}, reverseDelay);
		});
	});
};

export { navInteraction };
