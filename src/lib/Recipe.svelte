<script>
  const recipeImg = import.meta.env.BASE_URL + 'image-omelette.jpeg';
</script>

<style>
  :root {
    --recipe-bg: hsl(0, 0%, 100%);
    --bg-accent: hsl(0, 0%, 60%);
    --accent-text: hsl(0, 0%, 20%);
    --body-text: hsl(0, 0%, 70%);
    --bg-main: hsl(0, 0%, 90%);
    --white-bg: hsl(0, 0%, 100%);
    --stone-100: hsl(30, 54%, 90%);
    --stone-150: hsl(30, 18%, 87%);
    --stone-600: hsl(30, 10%, 34%);
    --stone-900: hsl(24, 5%, 18%);
    --brown-800: hsl(14, 45%, 36%);
    --rose-800: hsl(332, 51%, 32%);
    --rose-50: hsl(330, 100%, 98%);
  }
  /*table {*/
  /*  border-spacing: 3px 1em;*/
  /*}*/
  
  td {
    border-bottom: 1px solid var(--stone-150, #ccc);
    border-spacing: 2em;
    padding-bottom: 1em;
  }
  
  tr:last-child td {
    border-bottom: none; /* remove last row's divider if desired */
  }
  
  /*tr {*/
  /*  border: solid;*/
  /*  border-width: 1px 0;*/
  /*}*/
  tr:first-child {
    border-top: none
  }
  
  tr > td:last-child {
    color: var(--brown-800);
    font-weight: 600;
  }
  
  li {
    padding-left: 4px
  }
  li + li {
    margin-top: 6px;
  }
  li::marker {
    color: var(--brown-800);
    font-size: 0.75rem;
  }
  
  ul {
    vertical-align: middle;
  }
  
  ol li::marker {
    font-size: 0.875rem;
    font-weight: bold;
  }
  
  ul li::marker {
    vertical-align: middle;
  }
  
  h2 {
    color: var(--brown-800)
  }
  h3 {
    color: var(--rose-800)
  }
  
  ul.prep-list li::marker {
    color: var(--rose-800);
    font-weight: lighter;
    font-size: 0.75rem;
  }
  
</style>

<div class="justify-between text-left text-(--stone-600) md:mx-0 -mx-4">
  <img
      src="{recipeImg}"
      alt="Recipe"
      class="w-screen object-cover md:w-full md:max-w-full md:ml-0 md:mr-0 rounded-none md:rounded-xl"
  >
  <h1 class="text-2xl font-bold text-(--stone-900) pt-6 pb-4">Simple Omelette Recipe</h1>
  <p class="pb-4">An easy and quick dish, perfect for any meal.
    This classic omelette combines beaten eggs cooked to perfection,
    optionally filled with your choice of cheese, vegetables or meats</p>
  <div class="bg-(--rose-50) p-4 text-(--accent-text) text-left rounded-lg pb-6">
    <h3 class="text-lg font-bold">Preparation Time</h3>
    <ul class="list-disc pl-4 prep-list">
      <li><span class="font-semibold pl-4">Total:</span> Approx 10 minutes</li>
      <li><span class="font-semibold pl-4">Preparation:</span> 5 minutes</li>
      <li><span class="font-semibold pl-4">Cooking:</span> 5 minutes</li>
    </ul>
  </div>
  <div class="pt-4">
    <h2>Ingredients</h2>
    <ul class="list-disc text-left m-4">
      <li><span class="pl-2">2-3 large eggs</span></li>
      <li><span class="pl-2">Salt, to taste</span></li>
      <li><span class="pl-2">Pepper, to taste</span></li>
      <li><span class="pl-2">1 Tablespoon of butter or oil</span></li>
      <li><span class="pl-2">Optional Fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
    </ul>
  </div>
  <hr class="my-6" />
  <div>
    <h2>Instructions</h2>
    <ol class="list-decimal text-left m-4 text-sm pl-2">
      <li><span class="font-bold">Beat the eggs</span>: In a bowl, .......</li>
      <li><span class="font-bold">Heat the pan</span>: Place a non-stick frying pan over the medium heat and add butter and oil.</li>
      <li><span class="font-bold">Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
      <li><span class="font-bold">Add fillings (optional)</span>: When the eggs begin...</li>
      <li><span class="font-bold">Fold and serve</span>: As the omelette continues to cook, carefully...</li>
      <li><span class="font-bold">Enjoy</span>: Serve hot, with additional salt and pepper if needed</li>
    </ol>
  </div>
  <hr class="my-8" />
  <div>
    <h2>Nutrition</h2>
    <p class="text-sm">The table below shows nutritional values per serving without the additional fillings</p>
    <table class="m-4 w-11/12 border-separate [border-spacing:0_1rem]">
      <tbody>
        <tr>
          <td>Calories</td>
          <td class="font-semibold">277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>0g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>27g</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


