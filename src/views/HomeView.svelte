<script>
	import { Link } from "svelte-navigator";

	let src = '/src/img/home-img.png'

</script>

<section class="container">
	<article class="home">
		<aside class="img-home">
			<img src="./img/home-img.png" alt="home-img-presentation">
		</aside>
		<aside class="text-home">
			<h1>Logom</h1>
				<p>Lorem ipsum dolor sit amet. Ea architecto corporis eos saepe deleniti qui soluta nisi sed error repellendus ut assumenda tempore. Aut facilis fugit ut tenetur enim et deleniti voluptas! Aut repellat beatae ut rerum doloribus qui ullam aperiam! Id consequatur fugit eos repudiandae incidunt id culpa dignissimos est consequatur sint hic nesciunt totam ut assumenda perspiciatis.</p>
				<div class="home-button">
					<Link class="button-custom button-blue" to="/create">Commencer</Link>
					<Link class="button-custom button-black" to="/slider">Exemples</Link>
				</div>
			</aside>
	</article>
</section>




