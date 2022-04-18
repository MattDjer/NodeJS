<script>
import { user } from '../stores'
import { push } from 'svelte-spa-router'

if ($user) {
    push("/webshop")
}
</script>

<section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="columns">
            <div class="column">
                <div class="container">
                    <h2 class="title">Buy awesome clothes</h2>
                    <a href="#/signup" class="button is-primary is-light">Get Started</a>
                </div>
            </div>    
            <div class="column">
                <img src="https://cdn.shopify.com/s/files/1/0002/8930/8678/products/Hampussuitsessionprodukt_0001s_0001_Hampussuitsession05985kopier3.jpg?v=1591233533&width=650&crop=center" alt="">    
            </div>
            <div class="column">
                <img src="https://cdn.shopify.com/s/files/1/0002/8930/8678/products/Hampussuitsessionprodukt_0001s_0003_Hampussuitsession06034kopier3.jpg?v=1591233545&width=650&crop=center" alt="">    
            </div>      
        
      </div>
    </div>
</section>