<script>
	export let langData
</script>

<article class="skills">
	<h2>Skills</h2>
	<ul>
		<li><span>HTML</span><span>{langData.HTML}</span></li>
		<li><span>CSS</span><span>{langData.CSS}</span></li>
		<li><span>JavaScript</span><span>{langData.JavaScript}</span></li>
		<li><span>Svelte</span><span>{langData.Svelte}</span></li>
		<li><span>Nunjucks</span><span>{langData.Nunjucks}</span></li>
	</ul>
</article>

<style>
    .skills {
		h2 {
			margin-bottom: 0.5em;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 1em;
		}

		li {
			display: flex;
			justify-content: space-between;
			border-bottom: 2px solid;
		}
	}
</style>