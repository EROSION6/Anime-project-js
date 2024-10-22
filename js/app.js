particlesJS(
	'particles-js',

	{
		particles: {
			number: {
				value: 10,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: '#ffffff',
			},
			shape: {
				type: 'image',
				stroke: {
					width: 0,
					color: '#000000',
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: './../images/1_snowflake__christmas_xmas_winter_snow_decoration_celebration_icon-icons.com_77036.png',
					width: 10,
					height: 10,
				},
			},
			opacity: {
				value: 0.3,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 10,
				random: true,
				anim: {
					enable: false,
					speed: 20,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: false,
				distance: 50,
				color: '#ffffff',
				opacity: 0.6,
				width: 1,
			},
			move: {
				enable: true,
				speed: 5,
				direction: 'bottom-right',
				random: true,
				straight: false,
				out_mode: 'out',
				bounce: false,
				attract: {
					enable: true,
					rotateX: 300,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'none',
				},
				onclick: {
					enable: true,
					mode: 'push',
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		retina_detect: true,
	},
);
