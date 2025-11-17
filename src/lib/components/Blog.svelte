<script>
</script>

<section class="blogs grid-card">
	<h2>Blogs</h2>
	<p>Check out my <a href="#">blog website</a></p>
	<p>Recent posts:</p>
	<ul>
		<li><a href="#">Generated Color Palette</a></li>
		<li><a href="https://vsheo.github.io/i-love-web/Prettier%E2%80%90code%E2%80%90formatter/">Custom Prettier Code Formatter</a></li>
		<li><a href="https://vsheo.github.io/i-love-web/Living-standards-S14/">Corner Shape Experiments</a></li>
	</ul>
</section>

<section class="grid-card view-duck hidden">
	<p>Something will be added here</p>
	<iframe src="https://giphy.com/embed/HzPtbOKyBoBFsK4hyc" width="180" height="180" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</section>

<style>
	.blogs {
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
	}

	.view-duck {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1em
	}
</style>
