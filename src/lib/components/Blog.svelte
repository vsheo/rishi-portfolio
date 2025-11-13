<script>
</script>

<article class="blogs">
	<h2>Blogs</h2>
	<p>Check out my <a href="#">blog website</a></p>
	<p>Recent posts:</p>
	<ul>
		<li><a href="#">Generated Color Palette</a></li>
		<li><a href="#">Custom Prettier Code Formatter</a></li>
		<li><a href="#">Corner Shape Experiments</a></li>
	</ul>
</article>

<style>
	h2,
	p,
	ul li {
		margin: 0 0 0.5em 0;
	}

	ul {
		list-style: none;
	}

	ul li {
		display: flex;
		align-items: start;
		gap: 0.5em;

		&::before {
			content: '-';
			flex-shrink: 0;
		}
	}
</style>
