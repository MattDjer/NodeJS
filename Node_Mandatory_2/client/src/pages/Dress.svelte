<script>
import axios from 'axios'
import Transaction from '../components/Transaction.svelte'
import SummaryCard from '../components/SummaryCard.svelte';
import Loading from '../components/Loading.svelte'
import { onMount } from 'svelte'
import { transactions, 
            sortedTransactions, 
            income, 
            expenses, 
            balance  
        } from '../stores'
import { user } from '../stores'
import { push } from 'svelte-spa-router'

async function addTransaction(user_id, email) {
    const purchase = {
        clothing: "Dress",
        price: 700,
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
          The most stylish choice for turning heads.
        </h2>
        <div class="columns">
            <div class="column">
                <a href="#/dress">
                    <img src="https://i.pinimg.com/550x/f8/95/0e/f8950e124907a2f6e8a06f2824627383.jpg" alt="Suit">
                </a>
            </div>
            <div class="column">    
                <h3 class="title">Add to cart</h3>
                <h4 class="subtitle">
                  Buy now and get it delivered in 1-3 days. <br> <strong>$700 </strong>            </h4>
                <div class="control">
                    <input on:click={addTransaction($user._id, $user.username)} class="button is-info is-light" value="Buy">
                </div>
            </div>
        </div>   
     
    </section>