<script>
    import axios from 'axios'
    import {user, transactions} from '../stores'
    import { push } from 'svelte-spa-router'
        
    let isActive = false
    async function logout() {
        await axios.post('http://localhost:3000/api/auth/logout')
        $user = null
        $transactions = []
        push("/")
    }


</script>
<nav class="navbar is-info">
    <div class="container">
        <div class="navbar-brand">
            <a href="#/" class="navbar-item title">
                Prom Shop
            </a>
            <span class="navbar-burger burger"
                class:is-active={isActive}
                on:click={() => (isActive = !isActive)} 
                aria-expanded="false"
                aria-label="menu">
                <span aria-hidden="true" />
                <span aria-hidden="true" />    
                <span aria-hidden="true" />    
            </span>
        </div>
        <div class="navbar-menu" class:is-active={isActive}>
            <div class="navbar-end">
               <div class="navbar-item">
                 <div class="buttons">
                   {#if ($user) }  
                   <button class="button" on:click={logout}>Log out</button>
                   
                    {:else}
                    <a class="button" href="#/login">Log in</a>
                    {/if}
                </div>
               </div>    
            </div>
        </div>
    </div>
</nav>