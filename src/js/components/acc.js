document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.faq__acc');

	accordions?.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.faq__acc-control');
			const content = self.querySelector('.faq__acc-content');

			self.classList.toggle('faq__acc-active');

			// если открыт аккордеон
			if (self.classList.contains('faq__acc-active')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});
