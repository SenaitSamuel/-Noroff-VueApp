<template>
    <div class="card mt-5 ">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-block p-1"><br/>
            <h5 class="card-title p-1">{{title}}</h5>
            <p class="card-text pl-1"><strong>Ingredients:- </strong><em>{{ingredients}}</em> </p>
            <a :href="link" target="_blank" class=" mx-auto">View More </a><br />
        </div>   
    </div>
</template>

<script>
export default {
  name: 'RecipeComponent',
  props:['image','title','ingredients','link'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
     
    .card-title{
        font-weight: bold;
        font-size: 22px;
        
    }
    .card-text{
        font-size: 16px;
    }
    a{
        text-align: center;
        color: blue;
        font-size: 16px;
        padding-left: 30%;
        text-decoration: none
    }
    a:hover{
        color: red;
    }
</style>
