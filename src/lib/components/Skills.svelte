<script>
	// @ts-nocheck
	export let langData
	// console.log(langData)

	const colors = {
		HTML: '#f28e2c',
		CSS: '#4e79a7',
		JavaScript: '#e15759',
		Liquid: '#edc949',
		Svelte: '#76b7b2',
		Nunjucks: '#59a14f'
	}

	// Bereken totaal
	const total = Object.values(langData).reduce((a, b) => a + b, 0)

	// Bereken percentages en bouw conic-gradient string
	let gradient = ''
	let start = 0

	for (const [lang, value] of Object.entries(langData)) {
		const pct = (value / total) * 100
		const end = start + pct
		// @ts-ignore
		gradient += `${colors[lang]} ${start}% ${end}%, `
		start = end
	}

	// Verwijder de laatste comma
	gradient = gradient.slice(0, -2)
</script>

<section class="skills grid-card">
	<h2>Programming languages</h2>
	<p><i>Based on personal github repositories</i></p>
	<ul>
		{#each Object.entries(langData)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 5) as [lang, value]}
			<li style="color: {colors[lang]};">
				<span>{lang}</span>
				<span>{Math.round((value / total) * 100)}%</span>
			</li>
		{/each}
	</ul>
</section>

<section class="grid-card view-pie-chart hidden">
	<h2>Programming languages</h2>
	<p><i>Pie chart</i></p>
	<div class="pie-chart" style="background: conic-gradient({gradient});"></div>
</section>

<style>
	.skills {
		h2 {
			margin-bottom: 0.5em;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1em;
			margin-bottom: 1em;
		}

		li {
			display: flex;
			justify-content: space-between;
			border-bottom: 2px solid;
		}
	}

	.view-pie-chart {
		display: flex;
		flex-direction: column;

		.pie-chart {
			align-self: center;
			border-radius: 50%;
			width: clamp(10em, 50vw, 15em);
			aspect-ratio: 1 / 1;
			margin-bottom: 1em;
		}
	}
</style>
