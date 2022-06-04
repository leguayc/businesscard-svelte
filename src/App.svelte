<script>
	import { Router, Route } from "svelte-navigator";
	import HomeView from "./views/HomeView.svelte";
	import SliderView from "./views/SliderView.svelte";
	import CreateCardView from "./views/CreateCardView.svelte";
</script>

<Router>
	<main>
		<Route path="/">
			<HomeView />
		</Route>
  
		<Route path="create">
			<CreateCardView />
		</Route>

		<Route path="slider">
			<SliderView />
		</Route>
  
		<Route path="template/:id" let:params>
			<p>Display template with the given id ({params.id})</p>
		</Route>
	</main>
</Router>
  