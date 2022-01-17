import { useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import LogoName from '@/images/svg/bbuilds-text.svg';
import Nav from '@/components/Nav';
import SocialMedia from '@/components/SocialMedia';
import MobileNav from '@/components/MobileNav';
import MenuToggle from '@/components/MenuToggle';

const navItems = [
	{
		title: 'Services',
		href: '/services',
		children: [
			{
				title: 'Web Development',
				href: '/web-development'
			},
			{
				title: 'Headless WordPress Development',
				href: '/headless-wordpress-development'
			},
			{
				title: 'WordPress Development',
				href: '/wordpress-development'
			},
			{
				title: 'Search Engine Optimization',
				href: '/seo'
			},
			{
				title: 'Storytelling / Branding',
				href: '/branding'
			}
		]
	},
	{
		title: 'Blog',
		href: '/blog'
	},
	{
		title: 'Contact',
		href: '/contact'
	}
];

export default function Header({ mobileMenuState, toggleMenuState, falseMenuState }) {
	const handleTabletChange = (e) => {
		if (e.matches) {
			falseMenuState();
		}
	};

	useEffect(() => {
		let query = window.matchMedia('(min-width: 768px)');
		query.addEventListener('change', handleTabletChange);

		return () => {
			query.removeEventListener('change', handleTabletChange);
		};
	}, []); //eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (mobileMenuState) {
			document.querySelector('body').classList.add('fixed');
		} else {
			document.querySelector('body').classList.remove('fixed');
		}
	}, [mobileMenuState]);
	return (
		<header className="bg-bbuilds-black w-full py-2 relative z-50" role="banner">
			<nav id="choose-project-observer-target-top" className="mx-auto w-full">
				<div className="flex items-center h-12 px-4 sm:px-8">
					<Link href="/">
						<a
							aria-label="Branden Builds"
							className={cn('flex items-center logo')}
							onClick={falseMenuState}
						>
							<svg
								id="logo-icon"
								className="logo-icon"
								viewBox="0 0 178.565 291.148"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								focusable="false"
								fill="none"
							>
								<rect
									id="line"
									className="fill-current logo-icon-left-bar"
									width="33.422"
									height="145.57"
								/>
								<rect
									id="square"
									className="fill-current logo-icon-square"
									width="78.641"
									height="78.641"
									transform="translate(67.079 34)"
								/>
								<path
									id="box"
									className="fill-current logo-icon-box"
									d="M5017.408,471.579H4905.343V617.148h145.486V471.579Zm0,112.147h-78.642V505h78.642Z"
									transform="translate(-4872.264 -326)"
								/>
							</svg>

							<LogoName className={'logo-name'} />
						</a>
					</Link>
					<Nav navItems={navItems} />
					<div className="hidden md:flex">
						<SocialMedia />
					</div>
					<MenuToggle mobileMenuState={mobileMenuState} toggleMenuState={toggleMenuState} />
				</div>
				<div
					className={`overflow-y-scroll space-y-xx-small bg-bbuilds-black border-t border-bbuilds-yellow ${
						mobileMenuState ? 'show-nav' : 'hide-nav'
					}`}
				>
					<MobileNav navItems={navItems} toggleMenuState={toggleMenuState} />
				</div>
			</nav>
		</header>
	);
}
