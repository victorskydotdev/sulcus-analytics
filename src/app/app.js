export const pageInteractions = () => {
	// chart bars
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
};
