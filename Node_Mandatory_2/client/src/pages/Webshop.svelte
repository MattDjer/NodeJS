<script>
    import axios from 'axios'
    import { push } from 'svelte-spa-router'
    import { user } from '../stores'

</script>
<section class="section">
    
    <h1 class="title">Newest trends</h1>
    <h2 class="subtitle">
      The most favoured clothes for the <strong>most</strong> memorable night.
    </h2>
    <div class="columns">
        <div class="column">
            <a href="#/suit">
                <img src="https://www.portofilosuit.com/wp-content/uploads/2019/03/00A2176.jpg" alt="Suit">
            </a>
        </div>
        <div class="column">
            <a href="#/dress">    
                <img src="https://i.pinimg.com/550x/f8/95/0e/f8950e124907a2f6e8a06f2824627383.jpg" alt="Dress">
            </a>    
        </div>
    </div>   
 
</section>