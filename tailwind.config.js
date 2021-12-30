let bbuildscolors = {
	bbuildsYellow: '#FFCD67',
	bbuildsTeal: '#01FDF6',
	bbuildsGray: '#E6E7E8',
	bbuildsBlack: '#292929'
};

module.exports = {
	purge: ['./components/**/*.js', './pages/**/*.js', './styles/*.css'],
	theme: {
		extend: {
			colors: {
				'bbuilds-yellow': bbuildscolors.bbuildsYellow,
				'bbuilds-teal': bbuildscolors.bbuildsTeal,
				'bbuilds-gray': bbuildscolors.bbuildsGray,
				'bbuilds-black': bbuildscolors.bbuildsBlack
			},
			maxWidth: {
				'1/4': '25%',
				'1/2': '50%',
				100: '25rem'
			},
			maxHeight: {
				'1/4': '25%'
			}
		},
		fontFamily: {
			courier: ['courier-std', ' monospace']
		},
		fontSize: {
			small: '0.8rem',
			base: '1rem',
			lg: '1.25rem',
			xl: '1.563rem',
			'2xl': '1.953rem',
			'3xl': '2.441rem',
			'4xl': '3.052rem'
		}
	},
	variants: {
		extend: {
			translate: ['group-hover']
		}
	}
};
