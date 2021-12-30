import { useEffect } from 'react';
import cn from 'classnames';
import ConnecterIcon from '@/images/svg/connector-icon.svg';
import processStyles from '@/styles/process.module.css';

export default function Process() {
	const processList = [
		{
			id: 1,
			title: 'Discovery',
			copy: 'What are we solving?',
			svg: '<svg aria-hidden="true" focusable="false"  class="lightbulb-icon svg relative h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path></svg>'
		},
		{
			id: 2,
			title: 'Research',
			copy: 'Who are we solving this for?',
			svg: '<svg aria-hidden="true" focusable="false" class="searchengin-icon svg relative h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512"><path fill="currentColor" d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"></path></svg>'
		},
		{
			id: 3,
			title: 'Create',
			copy: 'How will we build this solution?',
			svg: '<svg aria-hidden="true" focusable="false" class="svg relative code-icon h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>'
		},
		{
			id: 4,
			title: 'Launch',
			copy: 'How can the market use our solution?',
			svg: '<svg aria-hidden="true" focusable="false" class="svg relative icon-rocket h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg>'
		}
	];

	//setting up rotating hook
	let activeIndex = 0;
	useEffect(() => {
		const animatedItemsList = document.querySelectorAll('.icon-box');

		const interval = setInterval(() => {
			animatedItemsList.forEach((item, index) => {
				if (index === activeIndex) {
					item.classList.add(processStyles['active']);
				} else {
					item.classList.remove(processStyles['active']);
				}
			});
			if (animatedItemsList[activeIndex + 1]) {
				activeIndex += 1;
				return;
			}
			activeIndex = 0;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<section id="process" className="py-10 lg:py-20 bg-bbuilds-black text-bbuilds-gray">
			<header className="px-4 mx-auto lg:px-0">
				<h2 className="text-center mb-10">The Problem Solving Process</h2>
			</header>
			<div className="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-4 lg:gap-0">
				{processList.map(({ id, title, copy, svg }, index) => {
					return (
						<div key={id} className={cn('text-center flex items-center overflow-y-hidden')}>
							<ConnecterIcon
								className={cn(
									processStyles['connector-icon'],
									'hidden flex-shrink max-h-1/4 lg:block'
								)}
							/>
							<div
								className={cn(
									processStyles['icon-box'],
									'icon-box relative flex md:flex-col border-2 border-bbuilds-yellow p-4 lg:py-2 justify-center items-center h-full w-full lg:py-6 flex-grow  group'
								)}
							>
								<div dangerouslySetInnerHTML={{ __html: svg }}></div>
								<h3 className="text-lg relative ml-2 lg:text-xl">{title}</h3>

								<div
									className={cn(
										processStyles['extra-info'],
										'extra-info p-4 lg:py-2 absolute left-0 bottom-0 bg-bbuilds-yellow transition duration-300 ease-in-out w-full h-full flex justify-center items-center text-bbuilds-black transform translate-y-full group-hover:translate-y-0'
									)}
								>
									<p className="max-w-xs relative">{copy}</p>
								</div>
							</div>

							{index + 1 >= processList.length && (
								<ConnecterIcon
									className={cn(
										processStyles['connector-icon'],
										'hidden flex-shrink max-h-1/4 lg:block'
									)}
								/>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
