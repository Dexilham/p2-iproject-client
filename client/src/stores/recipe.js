import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    baseUrl: "http://localhost:3000", // http://localhost:3000 or https://masakapa.herokuapp.com
    recipes: [],
    recipe: {},
  }),
  getters: {},
  actions: {
    async fetchRecipes() {
      // console.log(payload);
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/recipes`,
        });
        this.recipes = data.meals;

        console.log(data, "<< data");
        console.log(data.meals, "<<< data meals");
        console.log(this.recipes, "this recipes");
        console.log(data.meals[0], "<<< data meals 0");
      } catch (error) {
        console.log(error);
        Swal.fire(error.message);
      }
    },
    async fetchSingleRecipe(id) {
      // console.log(payload);
      const RecipeId = 52765; // 52772; // req.params.RecipeId;
      // const id = 52772;

      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/recipes/${RecipeId}`,
        });
        this.recipe = data[0];

        console.log(data, "<< data");
        // console.log(data.meals, "<<< data meals");
        console.log(this.recipe, "this recipes");
        console.log(data[0], "<<< data meals 0");
        console.log(
          "maaf mas belum bisa ambil data dinamis, pakenya menu ini buat test"
        );
      } catch (error) {
        console.log(error);
        Swal.fire(error.message);
      }
    },
  },
});
