<!-- <script lang="ts">
	// import Login from './../../remote-app/src/lib/components/Login/Login.svelte';
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Login from 'remote_app/Login'
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte + Host App</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
  <Login/>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->


<script lang="ts">
  import { onMount } from "svelte";
  let LoginComponent:any;
  let PaymentComponent:any;

  // Dynamically import the Login component
  onMount(async () => {
    const module = await import('remote_app/Login');
    LoginComponent = module.default; // Access the default export

    const pModule = await import('payment_app/Payment');
    PaymentComponent = pModule.default; // Access the default export
    console.log("Payment component", LoginComponent);
  });
</script>

<main>
  <h1>Host App</h1>
  <!-- {#if LoginComponent}
    <LoginComponent title="Login from Remote" />
  {/if} -->
  {#if LoginComponent}
    <PaymentComponent />
  {/if}

  
</main>

<style>
  h1 {
    color: blue;
  }
</style>

