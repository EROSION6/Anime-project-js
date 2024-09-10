const fetchApi = async (url, sliderId) => {
	const res = await fetch(url);
	const data = await res.json();

	data.forEach(item => {
		const block = document.createElement('div');
		block.classList.add('container_block_item');

		const img = document.createElement('img');
		img.src = `https://shikimori.one/${item?.image?.original}`;
		img.alt = item?.name;
		block.appendChild(img);

		const text = document.createElement('span');
		text.textContent = item?.russian;
		block.appendChild(text);

		const scoreBall = document.createElement('span');
		const ball = (scoreBall.textContent = item?.score);
		scoreBall.classList.add('score_ball');

		ball > 5
			? (scoreBall.style.backgroundColor = 'rgb(92, 220, 52)')
			: (scoreBall.style.backgroundColor = 'red');
		block.appendChild(scoreBall);

		document.getElementById(sliderId).appendChild(block);
	});

	let owl = $(`#${sliderId}`);
	owl.owlCarousel({
		loop: true,
		responsiveClass: true,
		smartSpeed: 550,
		autoplayHoverPause: true,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
				margin: 15,
			},
			1440: {
				items: 6,
			},
			1800: {
				items: 11,
				margin: 10,
			},
			2560: {
				items: 11,
			},
		},
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});

	return data;
};

fetchApi('https://shikimori.one/api/animes?page=5&limit=30&order=popularity', 'slider1');
fetchApi('https://shikimori.one/api/animes?page=4&limit=30&order=ranked', 'slider2');
fetchApi('https://shikimori.one/api/animes?page=6&limit=30&order=popularity', 'slider3');
