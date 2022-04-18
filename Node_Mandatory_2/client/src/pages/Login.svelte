<script>
    import axios from 'axios'
    import { user } from '../stores'
    import { push } from 'svelte-spa-router'
    let username 
    let password
    let errorMessage

    $: if(username || password) {
        errorMessage = null
    }

    async function login() {
        try {
            const {data} = await axios.post("http://localhost:3000/api/auth/login", {
                username, 
                password
            })
            $user = data.user
            push('/webshop')
        } catch (error) {
            if(error.response.status === 401) {
                username = ""
                password = ""
                errorMessage = "Invalid Credidentials"
            }
        }
    }
</script>

<div class="container">
    <div class="section">
        <h1 class="title"> Log in </h1>
        <hr/>
        {#if errorMessage}
        <p class="help is-danger">{errorMessage}</p>
        {/if}
        <form on:submit|preventDefault={login}>
            <div class="field">
                <p class="label">Email</p>
                <div class="control">
                    <input 
                        type="text" 
                        bind:value={username} 
                        class="input" 
                        required 
                        class:is-danger={errorMessage}/>
                </div>
            </div>
            <div class="field">
                <p class="label">Password</p>
                <div class="control">
                    <input 
                        type="password" 
                        bind:value={password} 
                        class="input" 
                        required 
                        class:is-danger={errorMessage}/>
                       
                </div>
            </div>
            
            <div class="control">
                <input type="submit" class="button is-info is-light" value="Submit">
            </div>
            <div class="control">
                <a href="#/retrieve-password">Forgot password?</a>
            </div>
        </form>
    </div>
</div>