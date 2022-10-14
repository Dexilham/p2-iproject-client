<script>
import { mapActions, mapState } from "pinia";
import { useRecipeStore } from "../stores/recipe";
import VueDisqus from "vue-disqus";

export default {
  computed: {
    ...mapState(useRecipeStore, ["recipe"]),
  },
  created() {
    this.fetchSingleRecipe();
  },
  methods: {
    ...mapActions(useRecipeStore, ["fetchSingleRecipe"]),
  },
  watch: {
    "$route.params": {
      handler(params) {
        const id = params.id;
        this.fetchSingleRecipe(id);
      },

      immediate: true,
    },
  },
};
</script>

<template>
  <br />
  <br />
  <br />

  <div class="deshes-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-top2 text-center">
            <h3>Try this <span>special</span> Recipe</h3>
            <p>
              <i
                >Resep simpel dan mudah yang dapat dicoba bahkan oleh pemula.</i
              >
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-6 align-self-center">
          <h1>{{ recipe.idMeal }}.</h1>
          <div class="deshes-text">
            <h3>
              <span>{{ recipe.strMeal }}</span
              ><br />
            </h3>
            <br />
            <h4 class="text-dark">Materials:</h4>
            <p class="pt-3 text-dark">
              {{ recipe.strMeasure1 }} {{ recipe.strIngredient1 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure2 }} {{ recipe.strIngredient2 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure3 }} {{ recipe.strIngredient2 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure4 }} {{ recipe.strIngredient4 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure5 }} {{ recipe.strIngredient5 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure6 }} {{ recipe.strIngredient6 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure7 }} {{ recipe.strIngredient7 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure8 }} {{ recipe.strIngredient8 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure9 }} {{ recipe.strIngredient9 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure10 }} {{ recipe.strIngredient10 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure11 }} {{ recipe.strIngredient11 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure12 }} {{ recipe.strIngredient12 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure13 }} {{ recipe.strIngredient13 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure14 }} {{ recipe.strIngredient14 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure15 }} {{ recipe.strIngredient15 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure16 }} {{ recipe.strIngredient16 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure17 }} {{ recipe.strIngredient17 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure18 }} {{ recipe.strIngredient18 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure19 }} {{ recipe.strIngredient19 }}
            </p>
            <p class="text-dark">
              {{ recipe.strMeasure20 }} {{ recipe.strIngredient20 }}
            </p>

            <br />
            <h4 class="text-dark">Instructions:</h4>
            <p class="pt-3 text-dark">{{ recipe.strInstructions }}</p>
            <span class="style-change"
              >Original Recipe from {{ recipe.strArea }}</span
            >
          </div>
        </div>
        <div class="col-lg-5 offset-lg-2 col-md-6 align-self-top mt-4 mt-md-0">
          <img :src="recipe.strMealThumb" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <!-- Deshes Area End -->
  <div class="section-top2 text-center">
    <button>
      <ShareNetwork
        network="twitter"
        url="https://masakapanie.web.app"
        title="Another Awesome Article"
        description="This is another awesome article for awesome readers"
      >
        <span>Share on Twitter</span>
      </ShareNetwork>
    </button>
    <button>
      <ShareNetwork
        network="facebook"
        url="https://masakapanie.web.app"
        title="Another Awesome Article"
        description="This is another awesome article for awesome readers"
        quote="bunch of nice recipes."
        hashtags="cook,food"
      >
        Share on Facebook
      </ShareNetwork>
    </button>
    <button>
      <ShareNetwork
        network="Email"
        url="https://masakapanie.web.app"
        title="Another Awesome Article"
        description="This is another awesome article for awesome readers"
      >
        <span>Share on Email</span>
      </ShareNetwork>
    </button>
  </div>

  <section class="comments" aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus />
  </section>
</template>
