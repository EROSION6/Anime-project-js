// fon video + text content

const video = document.getElementById('video_background');
const image = document.getElementById('image');

const text = document.querySelector('.content_text>p');
const textFont = document.querySelector('.content_text>h1');

setTimeout(() => {
	image.style.display = 'none';
	video.style.display = 'block';
	textFont.style.fontSize = '34px';
	text.style.display = 'none';
	video.play();
}, 5000);

// this is a modal search window
const search = document.querySelector('.icon_search');
const modal = document.querySelector('.modal_overflow');
const modalContainer = document.querySelector('.container_modal');

search.addEventListener('click', () => {
	modal.style.display = 'block';
});

modal.addEventListener('click', event => {
	if (modalContainer.contains(event.target) === false) {
		modal.style.display = 'none';
	}
});

// this is a modal notifications window

const modalNotifications = document.querySelector('.container_modal_bell');
const bell = document.querySelector('.icon_bell');

bell.addEventListener('click', () => {
	modalNotifications.style.display === 'none'
		? (modalNotifications.style.display = 'block')
		: (modalNotifications.style.display = 'none');
});

// avatar file installation

const avatarInstall = document.getElementById('input_avatar');
const avatarHeader = document.getElementById('img_avatar_header');
const avatarFile = document.getElementById('img_avatar');

window.addEventListener('load', () => {
	const savedAvatar = localStorage.getItem('savedAvatar');
	if (savedAvatar) {
		avatarFile.src = savedAvatar;
		avatarHeader.src = savedAvatar;
	}
});

avatarInstall.addEventListener('change', () => {
	const selectedAvatar = URL.createObjectURL(avatarInstall.files[0]);
	avatarFile.src = selectedAvatar;
	avatarHeader.src = selectedAvatar;
	localStorage.setItem('savedAvatar', selectedAvatar);
});

// modal profile Name

const registerName = document.querySelector('.name');
const modalProfile = document.querySelector('.overflow_name');
const profileBtn = document.getElementById('modal-btn_1');

// input profile Name

const inputName = document.getElementById('input_name');
const name = document.querySelector('.name>span');
const modalBtnTwo = document.getElementById('modal-btn_2');

modalBtnTwo.addEventListener('click', () => {
	if (inputName.value === '') {
		alert('Please enter your name');
	} else {
		name.textContent = inputName.value;
		modalProfile.style.display = 'none';
	}
});

registerName.addEventListener('click', () => {
	modalProfile.style.display = 'block';
});

profileBtn.addEventListener('click', () => {
	modalProfile.style.display = 'none';
});


