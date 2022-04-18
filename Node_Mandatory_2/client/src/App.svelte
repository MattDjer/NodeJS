<script>
	import Router from 'svelte-spa-router'
	import Home from './pages/Home.svelte'
	import Dashboard from './pages/Dashboard.svelte'
	import Signup from './pages/Signup.svelte'
	import Login from './pages/Login.svelte'
	import Navbar from './components/Navbar.svelte'
	import Webshop from './pages/Webshop.svelte'
	import Suit from './pages/Suit.svelte'
	import Dress from './pages/Dress.svelte'
	import Success from './pages/Success.svelte'

	const routes = {
		"/": Home,
		"/dashboard": Dashboard,
		"/signup": Signup,
		"/login": Login,
		"/webshop": Webshop,
		"/suit": Suit,
		"/dress": Dress,
		"/success": Success,
	}
</script>
<Navbar/> 
<Router {routes}/>