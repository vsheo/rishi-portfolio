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
	})
</script>

<section class="projects grid-card">
	<h2>Projects</h2>

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

<section class="grid-card view-search hidden">
	<h2>Projects</h2>
	<h3>Filters:</h3>
	<ul class="filter-options">
		<li><button>First Year</button></li>
		<li><button>Second Year</button></li>
		<li><button>Static</button></li>
		<li><button>Liquid</button></li>
		<li><button>Framework</button></li>
	</ul>
</section>

<div class="overlay" hidden></div>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
		gap: 1em;

		@media (min-width: 725px) {
			grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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

	.filter-options {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		width: min-content;

		button {
			border: 2px solid var(--dark-2);
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

	.overlay {
		background-color: hsl(0, 0%, 0%, 0.5);
		position: fixed;
		inset: 0;
		z-index: 100;
		cursor: pointer;
	}
</style>
