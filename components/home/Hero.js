import { useEffect } from 'react';

import cn from 'classnames';
import LogoIcon from '@/images/svg/bbuilds-icon.svg';
import LogoName from '@/images/svg/bbuilds-text.svg';
import heroStyles from '@/styles/hero.module.css';

const heroList = [
	'Engaging Experiences 🔮',
	'Lean Products ⚡',
	'Captivating Stories 🌱',
	'Scalable SEO 📈'
];

export default function Hero() {
	useEffect(() => {
		const animatedItemsList = document.querySelectorAll('.expierence-list-item');
		let currentItemIndex = 0;
		let maxItemIndex = animatedItemsList.length - 1;
		animatedItemsList[currentItemIndex].style.opacity = 1;

		let rotateText = () => {
			let currentItem = animatedItemsList[currentItemIndex];
			let nextItem =
				currentItemIndex === maxItemIndex
					? animatedItemsList[0]
					: animatedItemsList[currentItemIndex + 1];

			animatedItemsList.forEach((item, index) => {
				if (item === currentItem) {
					setTimeout(() => {
						item.className = cn(heroStyles['expierence-list-item'], heroStyles['out']);
					}, index * 80);
				}
				nextItem.style.opacity = '1';

				if (item === nextItem) {
					item.className = cn(heroStyles['expierence-list-item'], heroStyles['behind']);
					setTimeout(() => {
						item.className = cn(heroStyles['expierence-list-item'], heroStyles['in']);
					}, 340 + index * 80);
				}
			});
			currentItemIndex = currentItemIndex === maxItemIndex ? 0 : currentItemIndex + 1;
		};
		rotateText();
		const interval = setInterval(rotateText, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			<section id="home-banner" className={cn('bg-bbuilds-gray', heroStyles['hero-home'])}>
				<div className="flex flex-col justify-center items-center h-full px-4">
					<header className="header-text text-center px-15">
						<h1 className="text-xl">
							{`Greetings I'm`}{' '}
							<span className="sr-only">Branden Builds a headless wordpress developer</span>
						</h1>
						<div
							className={cn(
								'flex items-center justify-center mt-2 mb-4 text-bbuilds-black max-w-100',
								heroStyles['hero-logo']
							)}
						>
							<LogoIcon className={heroStyles['logo-icon']} />
							<LogoName className={heroStyles['logo-name']} />
						</div>
					</header>
					<div className="w-full text-center transform pt-24 lg:pt-16">
						<p className="mb-10">{`I enjoy building...`}</p>
						<ul
							id="expierence-list"
							className="relative animated-list flex flex-col items-center justify-center w-full"
						>
							{heroList &&
								heroList.map((item, index) => {
									return (
										<li
											key={index}
											className={cn(heroStyles['expierence-list-item'], 'expierence-list-item')}
										>
											{item}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
