<script>
import axios from 'axios'
import { user } from '../stores'
import { push } from 'svelte-spa-router'
const { log } = console

async function addTransaction(user_id, email) {
    const purchase = {
        clothing: "Suit",
        price: 500,
        date: new Date().getTime(),
        user_id: user_id,
        email: email            
    }
    const response = await axios.post('http://localhost:3000/api/purchase', (purchase))
    push("/success")    
}

</script>

<section class="section">

    <h1 class="title">The Prom Suit</h1>
    <h2 class="subtitle">
      The most favoured choice amongst men for the big night.
    </h2>
    <div class="columns">
        <div class="column">
            <a href="#/suit">
                <img src="https://www.portofilosuit.com/wp-content/uploads/2019/03/00A2176.jpg" alt="Suit">
            </a>
        </div>
        <div class="column">    
            <h3 class="title">Add to cart</h3>
            <h4 class="subtitle">
              Buy now and get it delivered in 1-3 days. <br> <strong>$500 </strong>            </h4>
            <div class="control">
                <input on:click={addTransaction($user._id, $user.username)} class="button is-info is-light" value="Buy">
            </div>
        </div>
    </div>   
 
</section>