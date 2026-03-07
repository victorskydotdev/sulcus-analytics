// ── CHART BARS ──
const barData = [55, 78, 42, 90, 65, 85, 70, 95, 60, 80];
const chartEl = document.getElementById('chartBars');
if (chartEl) {
	barData.forEach((h) => {
		const bar = document.createElement('div');
		bar.className = 'bar';
		bar.style.height = h + '%';
		chartEl.appendChild(bar);
	});
}

// ── COUNTERS ──
function animateCounter(el, target, suffix = '') {
	let start = 0;
	const step = Math.ceil(target / 40);
	const timer = setInterval(() => {
		start += step;
		if (start >= target) {
			el.textContent = target + suffix;
			clearInterval(timer);
			return;
		}
		el.textContent = start + suffix;
	}, 40);
}

setTimeout(() => {
	animateCounter(document.getElementById('counter1'), 50, '+');
	animateCounter(document.getElementById('counter2'), 80, '+');
}, 800);

function submitForm() {
	const first = document.getElementById('firstName').value.trim();
	const email = document.getElementById('emailInput').value.trim();
	const service = document.getElementById('serviceSelect').value;

	if (!first || !email || !service) {
		alert('Please fill in your name, email, and select a service to continue.');
		return;
	}

	document.getElementById('modalForm').style.display = 'none';
	document.getElementById('successMsg').style.display = 'block';

	setTimeout(() => {
		closeModal();
		document.getElementById('modalForm').style.display = 'block';
		document.getElementById('successMsg').style.display = 'none';
		// reset
		[
			'firstName',
			'lastName',
			'emailInput',
			'orgInput',
			'serviceSelect',
			'projectDesc',
		].forEach((id) => (document.getElementById(id).value = ''));
	}, 4000);
}

// form submission logic
export const formHandling = () => {
	const formSubmitBtn = document.querySelector('.form-submit');

	formSubmitBtn.addEventListener('click', async (event) => {
		event.preventDefault();

		submitForm();
	});
};
