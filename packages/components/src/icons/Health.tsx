import React, { SVGProps } from "react";

const SvgHealth = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path
			fill="#4D5556"
			fillRule="evenodd"
			d="M7.5 4A5.5 5.5 0 002 9.5c0 .5.09 1 .22 1.5H6.3l1.27-3.37c.3-.8 1.48-.88 1.86 0L11.5 13l.59-1.42c.13-.33.48-.58.91-.58h8.78c.13-.5.22-1 .22-1.5A5.5 5.5 0 0016.5 4c-1.86 0-3.5.93-4.5 2.34C11 4.93 9.36 4 7.5 4M3 12.5a1 1 0 000 2h2.44L11 20c1 .9 1 .9 2 0l5.56-5.5H21a1 1 0 000-2h-7.6l-.93 2.3c-.4 1.01-1.55.87-1.92.03L8.5 9.5l-.96 2.33c-.15.38-.49.67-.94.67H3z"
		/>
	</svg>
);

export default SvgHealth;
