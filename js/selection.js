let currentPage = 1;

const filmsPerPage = 24;

const fetchSelectionApi = async () => {
	const url = `https://shikimori.one/api/animes?page=${currentPage}&limit=${filmsPerPage}&order=popularity`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);

		data.forEach(item => {
			const block = document.createElement('div');
			block.classList.add('container_block_item');

			const img = document.createElement('img');
			img.src = `https://shikimori.one/${item?.image?.original}`;
			img.alt = item?.name;

			const text = document.createElement('span');
			text.textContent = item?.russian;
 
      const scoreBall = document.createElement('span');
      scoreBall.textContent = item?.score;
      scoreBall.classList.add('score_ball');

			block.appendChild(img);
			block.appendChild(text);
			block.appendChild(scoreBall);
			document.querySelector('.selection_block_content').appendChild(block);
		});
		currentPage++;
	} catch (error) {
		console.error(error);
	}
};

fetchSelectionApi();

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
		fetchSelectionApi();
	}
});
