import React from 'react';

const TextButton = () => (
	<button class="flex items-center text-purple-600 focus:outline-none hover:underline hover:text-purple-800 ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			height="1.8rem"
			viewBox="0 0 24 24"
			stroke="currentColor"
			class="mr-1 stroke-current"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
		</svg>
		Back to Home
	</button>
);

export default TextButton;
