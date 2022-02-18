import Link from 'next/link';
import SocialMedia from '@/components/SocialMedia';
import navStyles from '@/styles/nav.module.css';
import cn from 'classnames';

export default function MobileNav({ navItems, toggleMenuState }) {
	return (
		<>
			<ul className={`nav-items flex flex-col px-4 pt-8 pb-20 overflow-y-scroll h-full`}>
				{navItems &&
					navItems.map((item) => {
						return (
							<li key={item.title} className="menu-item group mb-4" onClick={toggleMenuState}>
								<Link href={item.href}>
									<a className="text-bbuilds-teal hover:text-bbuilds-yellow flex py-4 text-lg">
										{item.title}
									</a>
								</Link>
								{item.children && (
									<div
										className={cn(
											'md:absolute md:z-50 md:rounded  md:shadow-lg md:bg-bbuilds-black md:text-white md:border-bbuilds-yellow md:border transition duration-200',
											navStyles['dropdown-menu']
										)}
									>
										<ul className="list-none overflow-hidden w-full">
											{item.children.map((child) => {
												return (
													<li key={child.title} className="menu-item">
														<Link href={`${child.href}`}>
															<a className="flex text-bbuilds-teal py-4 px-4 transition duration-300 hover:bg-bbuilds-yellow hover:text-bbuilds-black text-lg">
																{child.title}
															</a>
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								)}
							</li>
						);
					})}
				<SocialMedia />
			</ul>
		</>
	);
}
