const modalBtn = document.querySelectorAll('.modal-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOverlay = document.getElementById('modalOverlay');

export const modalHandling = () => {
	function openModal() {
		document.getElementById('modalOverlay').classList.add('open');
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		document.getElementById('modalOverlay').classList.remove('open');
		document.body.style.overflow = '';
	}

	function closeModalOutside(e) {
		if (e.target === document.getElementById('modalOverlay')) closeModal();
	}

	if (modalBtn) {
		modalBtn.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();

				openModal();
			});
		});
	}

	if (modalCloseBtn) {
		modalCloseBtn.addEventListener('click', () => {
			closeModal();
		});
	}

	// esc key logic
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') closeModal();
	});
};
