const body = document.querySelector('.body');

const displayAlert = () => {
	const modalWrap = document.createElement('div');
	modalWrap.setAttribute('class', 'modal-wrap');

	const messageTemplate = () => {
		return `
      <div class="alert-wrap">
        <h3 class="">Virtual Lab is coming soon</h3>
        <a href="/" class="">Go back to home</a>
      </div>
    `;
	};

	body.appendChild(modalWrap);

	const params = new URLSearchParams(window.location.search);

	if (params.get('coming-soon') === 'virtual-lab') {
		// alert('Virtual Lab is coming soon!');
		const alertModalWrap = document.querySelector('.modal-wrap');
		alertModalWrap.innerHTML = messageTemplate();
		alertModalWrap.classList.add('open-modal');

		window.history.replaceState({}, document.title, window.location.pathname);
	}
};

export { displayAlert };
