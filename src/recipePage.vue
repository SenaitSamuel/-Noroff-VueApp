<template>
    <div class="container">
     <div class="row">
         <div v-for = "item in recipes"class="col-md-4" >
                <recipeComponent v-bind:image = "item.thumbnail "
                           v-bind:title = "item.title "
                           v-bind:ingredients = "item.ingredients "
                           v-bind:link = "item.href "
                           > </recipeComponent>
            </div>
         </div>
     </div>
 
    
</template>

<script>
import recipeComponent from './components/recipeComponent.vue'
import axios from 'axios'

export default {
  name: 'RecipePage',
  components: {
    recipeComponent
  },
  data(){
      return{
          recipes:[]
      }
  },
      created: function (){
               this.fetchRecipe();
           },
           
           methods: {
            fetchRecipe: function (){
                 const conversionUrl = "https://cors-anywhere.herokuapp.com/";
               const url = "http://www.recipepuppy.com/api/";
                
                const app = this
                
               axios.get(conversionUrl+url)
               .then(function (res){
                   app.recipes = res.data.results
                    
                    
                })
           
              
     }
           }
}
</script>

<style >
    
</style>
