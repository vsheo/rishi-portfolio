<script>
	// @ts-nocheck
	import projectsData from '$lib/assets/projects.json'
	import { onMount } from 'svelte'

	// array with all projects
	const allProjects = projectsData.projects

	// array with projects that are shown
	let visibleProjects = allProjects

	// function to change the visibleProjects
	function filterProjects(filter) {
		if (filter === 'all' || !filter) {
			visibleProjects = allProjects
		} else {
			// if there is a filter use that to get the new array for visibleProjects
			visibleProjects = allProjects.filter((project) => project.tags.includes(filter))
		}
	}

	onMount(() => {
		const cards = document.querySelectorAll('.project-card')
		const overlay = document.querySelector('.overlay')

		let activeCard

		cards.forEach((card) => {
			card.addEventListener('click', () => {
				card.classList.add('popped')
				overlay.style.display = 'block'
				activeCard = card
			})
		})

		overlay.addEventListener('click', () => {
			if (activeCard) {
				activeCard.classList.remove('popped')
				activeCard = null
			}
			overlay.style.display = 'none'
		})

		// ---------------------------------------------------------project filters---------------------------------------------------------
		const filterButtons = document.querySelectorAll('.filter')

		filterButtons.forEach((button) => {
			button.addEventListener('click', () => {
				// get the filter tag from data attribute
				const filterTag = button.getAttribute('data-filter') || 'all'

				// use the attribute to filter the projects
				filterProjects(filterTag)
			})
		})
	})
</script>

<section class="projects grid-card">
	<h2>Projects</h2>

	<section class="view-search">
		<h3>Filters:</h3>
		<ul>
			<li><button class="filter" data-filter="fdnd-year-1">First Year</button></li>
			<li><button class="filter" data-filter="fdnd-year-2">Second Year</button></li>
			<li><button class="filter" data-filter="">Static</button></li>
			<li><button class="filter" data-filter="data-driven">Data Driven</button></li>
			<li><button class="filter" data-filter="framework">Framework</button></li>
		</ul>
	</section>

	{#each visibleProjects as project}
		<article class="project-card">
			<h3>{project.name}</h3>
			<img src={project.img} alt="miro link api werkt niet" />
			<p>{project.description}</p>
			<div>
				<a href={project.site} target="_blank">Live link</a>
				<a href={project.repo} target="_blank">Github</a>
			</div>
		</article>
	{/each}
</section>

<div class="overlay" hidden></div>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
		grid-template-rows: min-content min-content;
		gap: 1em;

		@media (min-width: 725px) {
			grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		}

		@media (min-width: 1325px) {
			grid-template-columns: min-content;
			grid-auto-columns: 260px;
			grid-template-rows: 1fr;
			grid-auto-flow: column;
			overflow-x: auto;
			gap: 1em;
			text-wrap: rap;
			padding-left: 0;
			padding-bottom: 0;
		}

		h2 {
			grid-column: 1/-1;
			align-self: start;
		}

		.view-search {
			grid-column: 1/-1;
			height: 319px;
			

			@media (min-width: 1325px) {
				grid-column: 1;
			}
		}

		h2, .view-search {
			position: sticky;
			left: 0;
			bottom: 10px;
			padding-left: 1rem;
		}

		.project-card {
			@media (min-width: 1325px) {
				grid-row: 2;
			}
		}
	}

	.project-card {
		display: grid;
		grid-template-rows: 1fr min-content min-content;
		gap: 0.75em;
		background-color: var(--light-1);
		padding: clamp(0.5em, 5vw, 1em);
		margin-bottom: 1em;
		border-radius: var(--radius);
		width: 100%;
		height: auto;
		cursor: pointer;
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		transition: transform 0.3s ease;

		h3 {
			grid-row: 2;
		}

		img {
			grid-row: 1;
			border-radius: var(--child-radius);
			width: 100%;
			height: auto;
		}

		p {
			display: none;
		}

		div {
			display: flex;
			gap: 1em;

			a {
				background-color: var(--color);
				text-decoration: none;
				padding: 0.5em;
				border-radius: var(--child-radius);
			}
		}
	}

	:global(.popped) {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(1.2);
		transition: transform 0.3s ease;
		max-width: 500px;
		z-index: 108;

		p {
			display: inline;
		}

		a {
			cursor: pointer;
		}
	}

	:global(.popped),
	:global(.popped) * {
		cursor: default;
	}

	.view-search {
		background-color: var(--dark-1);

		ul {
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			gap: 0.5em;

			@media (min-width: 1325px) {
				flex-direction: column;
				width: min-content;
			}

			button {
				width: 100%;
				border: 2px solid var(--color-text-highlight);
				color: var(--color-light);
				background-color: var(--dark-1);
				text-decoration: none;
				padding: 0.5em;
				border-radius: var(--child-radius);
				font-size: 1.125rem;
				text-wrap: nowrap;

				&:hover {
					color: var(--color-text-highlight);
					background-color: var(--light-2);
				}
			}
		}
	}

	.overlay {
		background-color: hsl(0, 0%, 0%, 0.5);
		position: fixed;
		inset: 0;
		z-index: 100;
		cursor: pointer;
	}
</style>
