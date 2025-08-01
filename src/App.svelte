<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Recipe from "./lib/Recipe.svelte";
</script>

<main class="min-h-screen flex justify-center items-start md:items-center md:bg-none p-0 md:p-4">
  <div class="w-full md:max-w-xl bg-white md:shadow-xl md:rounded-xl md:p-6 p-4">
    <Recipe />
  </div>
</main>

<!--<main class="md:bg-none">-->
<!--  <div class="w-full md:max-w-xl bg-white md:shadow-xl md:rounded-xl md:p-6 p-4">-->
<!--    <Recipe />-->
<!--  </div>-->
<!--</main>-->


<style>
  :root {
    --bg-box-color: hsl(0, 0%, 42%);
  }

</style>
