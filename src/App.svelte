<script>
	import { Router, Route, Link } from "svelte-navigator";
	import HomeView from "./views/HomeView.svelte";
	import CreateCardView from "./views/CreateCardView.svelte";
</script>

<Router>
	<header>
		<h1>Logom</h1>
	
		<nav>
			<Link to="/">Home</Link>
			<Link to="create">Create</Link>
		</nav>
	</header>
  
	<main>
		<Route path="/">
			<HomeView />
		</Route>
  
		<Route path="create">
			<CreateCardView />
		</Route>
  
		<Route path="template/:id" let:params>
			<p>Display template with the given id ({params.id})</p>
		</Route>
	</main>
</Router>
  