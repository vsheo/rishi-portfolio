<script>
	// @ts-nocheck
	import projectsData from '$lib/assets/projects.json'
	const projects = projectsData.projects

	import { onMount } from 'svelte'

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

		// filter the tag
		function filterProjects(filter) {
			const activeFilter = projects.filter((project) => project.tags.includes(filter))
			return activeFilter
		}

		// use fuction to get filterd projects
		const frameworkProjects = filterProjects('framework')
		console.log(frameworkProjects)
	})
</script>

<section class="projects grid-card">
	<h2>Projects</h2>

	<section class="view-search">
		<h3>Filters:</h3>
		<ul>
			<li><button class="filter">First Year</button></li>
			<li><button class="filter">Second Year</button></li>
			<li><button class="filter">Static</button></li>
			<li><button class="filter">Liquid</button></li>
			<li><button class="filter">Framework</button></li>
		</ul>
	</section>

	{#each projects as project}
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
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 260px;
			grid-template-rows: 1fr;
			overflow-x: auto;
			gap: 1em;
			text-wrap: rap;
		}

		h2 {
			grid-column: 1/-1;
			align-self: start;
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
		h3,
		ul {
			grid-column: 1;
		}

		ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 0.5em;
			width: min-content;

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
