<script>
	import { AboutMe, Skills, PastProjects, Blog, Contact, Education } from '$lib'
	import '$lib/assets/SharedComponents.css'

	export let data
	const langData = data.langData
</script>

<main class="neutral">
	<!-- <h1>Viresh Sheoratan</h1> -->

	<AboutMe />
	<Skills {langData}/>
	<Blog />
	<PastProjects />
</main>

<style>
</style>
