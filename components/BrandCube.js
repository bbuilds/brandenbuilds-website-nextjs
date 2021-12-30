import cn from 'classnames';
import { useEffect } from 'react';
import BrandeCubeStyles from '@/styles/brand-cube.module.css';

export default function BrandCube() {
	useEffect(() => {
		const steps = document.querySelectorAll('.step');
		let stepsArray = Array.prototype.slice.call(steps, 0);
		stepsArray = stepsArray.sort(function (a, b) {
			return a.id - b.id;
		});

		stepsArray.forEach((step, i) => {
			setTimeout(() => {
				step.classList.add(BrandeCubeStyles['active']);
			}, i * 2050);
		});
	}, []);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="745.156"
			height="556.508"
			viewBox="0 0 745.156 556.508"
		>
			<g transform="translate(-354.862 -2738.079)">
				<path
					id="9"
					className={cn(
						'step square center transition duration-300 ease-in-out',
						BrandeCubeStyles['step']
					)}
					d="M666.154,2955.047h-94.36v122.572H694.3V2955.047Zm0,94.43H599.937v-66.288h66.217Z"
					fill="#01fdf6"
				/>
				<path
					id="3"
					className={cn(
						'step square top-right transition duration-300 ease-in-out',
						BrandeCubeStyles['step']
					)}
					d="M883.086,2738.079h-94.36v122.573h122.5V2738.079Zm0,94.43H816.869v-66.287h66.217Z"
					fill="#01fdf6"
				/>
				<rect
					id="10"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(618.974 2832.474)"
					fill="#e6e7e8"
				/>
				<rect
					id="4"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(835.906 2860.652)"
					fill="#e6e7e8"
				/>
				<path
					id="7"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					d="M816.868,3294.587h94.36V3172.014h-122.5v122.573Zm0-94.431h66.218v66.288H816.868Z"
					fill="#01fdf6"
				/>
				<rect
					id="6"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(864.048 3172.014) rotate(180)"
					fill="#e6e7e8"
				/>
				<rect
					id="12"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(618.974 3077.619)"
					fill="#e6e7e8"
				/>
				<rect
					id="8"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(816.869 3002.262) rotate(90)"
					fill="#e6e7e8"
				/>
				<rect
					id="18"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(571.794 3002.262) rotate(90)"
					fill="#e6e7e8"
				/>
				<rect
					id="11"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="66.217"
					height="66.217"
					transform="translate(666.154 2766.257) rotate(90)"
					fill="#ffcd67"
				/>
				<rect
					id="5"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="66.217"
					height="66.217"
					transform="translate(883.086 2983.224) rotate(90)"
					fill="#ffcd67"
				/>
				<rect
					id="16"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(430.184 3172.014) rotate(180)"
					fill="#e6e7e8"
				/>
				<rect
					id="17"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="66.217"
					height="66.217"
					transform="translate(449.222 2983.224) rotate(90)"
					fill="#ffcd67"
				/>
				<rect
					id="2"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(1033.801 2785.294) rotate(90)"
					fill="#e6e7e8"
				/>
				<rect
					id="1"
					className={cn(
						'step transition duration-300 ease-in-out active',
						BrandeCubeStyles['step']
					)}
					width="66.217"
					height="66.217"
					transform="translate(1100.018 2766.257) rotate(90)"
					fill="#ffcd67"
				/>
				<path
					id="15"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					d="M449.222,3172.014h-94.36v122.573h122.5V3172.014Zm0,94.43H383v-66.288h66.218Z"
					fill="#01fdf6"
				/>
				<rect
					id="14"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="28.142"
					height="122.573"
					transform="translate(599.936 3219.229) rotate(90)"
					fill="#e6e7e8"
				/>
				<rect
					id="13"
					className={cn('step transition duration-300 ease-in-out', BrandeCubeStyles['step'])}
					width="66.217"
					height="66.217"
					transform="translate(666.154 3200.192) rotate(90)"
					fill="#ffcd67"
				/>
			</g>
		</svg>
	);
}
