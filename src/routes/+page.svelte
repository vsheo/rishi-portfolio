<script>
	// @ts-nocheck

	import { AboutMe, Skills, PastProjects, Blog, Contact, Education } from '$lib'
	import '$lib/assets/DefaultCard.css'

	export let data
	const langData = data.langData

	const allComponents = [{ component: AboutMe }, { component: Blog }, { component: Skills, props: { langData } }, { component: PastProjects }]
</script>

<main class="neutral">
	{#each allComponents as item, itteration}
		<article class="grid-cell">
			<svelte:component this={item.component} {...item.props} />
			<button class="interaction-button"><svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="var(--star-color)" d="M210.3 65.5c28.8 7.3 51.4 29.9 58.7 58.7c.7 2.8 4.3 2.8 5 0c7.3-28.8 29.9-51.4 58.7-58.7c2.8-.7 2.8-4.3 0-5c-28.8-7.3-51.4-29.9-58.7-58.7c-.7-2.8-4.3-2.8-5 0c-7.3 28.8-29.9 51.4-58.7 58.7c-2.8.7-2.8 4.3 0 5z"></path><path fill="var(--star-color)" d="M6.7 188.3c50.8 12.9 90.8 52.9 103.7 103.7c1.2 4.9 7.5 4.9 8.8 0c12.9-50.8 52.9-90.8 103.7-103.7c4.9-1.2 4.9-7.5 0-8.8C172 166.7 132 126.7 119.2 75.9c-1.2-4.9-7.5-4.9-8.8 0c-12.9 50.8-52.9 90.8-103.7 103.7c-4.9 1.2-4.9 7.5 0 8.7z"></path><path fill="var(--star-color)" d="M180 350.7c76 19.3 135.9 79.1 155.1 155.1c1.9 7.3 11.3 7.3 13.1 0c19.3-76 79.1-135.9 155.1-155.1c7.3-1.9 7.3-11.3 0-13.1c-76-19.3-135.9-79.1-155.1-155.1c-1.9-7.3-11.3-7.3-13.1 0c-19.3 76-79.1 135.9-155.1 155.1c-7.3 1.8-7.3 11.2 0 13.1z"></path></g></svg></button>
		</article>
	{/each}
</main>

<style>
	/* ====================================================== COMPONENTS DEFAULT STYLE ====================================================== */
	main {
		/* default styling for the components that are loaded in. they are in a different file, so I adjust them with custom properties */
		--radius: 15px;
		--radius-child: calc(var(--radius) / 2);

		--box-shadow-container: 1px 1px 10px 0 var(--dark-2);
		--box-shadow-container-child: 1px 1px 10px 0 var(--dark-2);

		--content-background: var(--dark-1);
		--content-boder: 2px solid var(--dark-2);
		--content-padding: 1em 1em calc(var(--button-scoop-area) - 0.6em) 1em;

		--button-scoop-area: 3.5em;
		--scoop-radius: 4em;
	}

	.grid-cell {
		width: 100%;
		height: 100%;
		border-radius: var(--radius);
		padding: clamp(0.5em, 5vw, 1em);
		background-color: var(--color);
		box-shadow: var(--box-shadow-container);

		display: grid;
		grid-template-columns: 1fr min-content;
		grid-template-rows: 1fr min-content;
	}

	button {
		--star-color: var(--color-light);

		grid-area: 2/2;
		border-radius: 50%;
		width: var(--button-scoop-area);
		height: var(--button-scoop-area);
		margin: 1em 0 0 1em;

		border: 2px solid var(--dark-2);
		background-color: var(--dark-1);
		color: var(--color-light);

		&:hover {
			--star-color: var(--color-accent-secondary);
			border: 2px solid var(--dark-1);
			background-color: var(--light-2);
		}
	}

	/* .projects .project-card {
		&:hover {
			color: var(--color-accent-secondary);
		}
	} */

	/* ====================================================== COMPONENTS LAYOUT ====================================================== */
	main {
		display: grid;
		grid-auto-flow: dense;
		justify-content: center;
		gap: 1em;
		padding: 0 clamp(1em, 10vw, 5em);
		margin: 2em 0;

		.grid-cell:nth-of-type(4) {
			--scoop-radius: var(--radius);

			:global(.grid-card) {
				corner-bottom-right-shape: round;
			}

			.interaction-button {
				display: none;
			}
		}

		@media (min-width: 725px) {
			grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
			grid-template-rows: min-content min-content;

			.grid-cell:nth-of-type(3),
			.grid-cell:nth-of-type(4) {
				grid-column: span 2;
			}
		}

		@media (min-width: 1024px) {
			margin: 1em 0;

			.grid-cell:nth-of-type(1) {
				grid-column: span 2;
			}

			.grid-cell:nth-of-type(3),
			.grid-cell:nth-of-type(4) {
				grid-column: span 3;
			}
		}

		@media (min-width: 1325px) {
			.grid-cell:nth-of-type(1),
			.grid-cell:nth-of-type(3) {
				grid-column: span 1;
			}
		}

		@media (min-width: 2008px) {
			.grid-cell:nth-of-type(1),
			.grid-cell:nth-of-type(2),
			.grid-cell:nth-of-type(3) {
				grid-column: span 2;
			}

			.grid-cell:nth-of-type(4) {
				grid-column: span 6;
			}
		}
	}

	/* grid-template-columns: 1fr; */

	/* @media (min-width: 1024px) {
		margin: 2em;
		grid-template-columns: 1fr auto auto auto 1fr;
		grid-template-rows: 1fr 1fr;
	} */

	/* .person {
		@media (min-width: 725px) {
			grid-row: 1;
			grid-column: 2/3;
		}
	} */

	/* .skills {
		@media (min-width: 725px) {
			grid-row: 2;
			grid-column: 2/4;
		}

		@media (min-width: 1024px) {
			grid-row: 1;
			grid-column: 3/4;
		}
	} */

	/* .blogs {
		@media (min-width: 725px) {
			grid-row: 1;
			grid-column: 3/4;
		}

		@media (min-width: 1024px) {
			grid-row: 1;
			grid-column: 4/5;
		}
	} */

	/* .projects {
		@media (min-width: 725px) {
			grid-row: 3;
			grid-column: 2/4;
		}

		@media (min-width: 1024px) {
			grid-row: 2;
			grid-column: 2/5;
		}
	} */
</style>
