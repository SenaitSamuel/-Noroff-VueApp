# -Noroff-VueApp
Steps for creating Recipe 

First Open a terminal and run “npm install -g @vue/cli 
then  create the  project using vue create projectname.
Select default (babel, eslint)

Once the project is created, move into the directory and serve the project like
            > cd project
            > npm run serve

Adding Bootstrap styles and JavaScript using:-
  > npm install bootstrap jquery popper.js

then import into projectname/src/main.js: 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Create component.vue in component folder
add all the information you need
Add "scoped" attribute to <style>limit CSS to this component only

Create HomePage.vue inside the root of your src folder. 

Install Vue.js router. Using npm install --save vue-router”  to connect between pages

then import it into 
import router into  projectname/src/main.js

then import the component.vue file in homepage.vue
 then import homepage.vue into projectname/src/main.js
 
 Finally run “npm run build” to for final production. The finnal file is stored in dist folder in your project . 
Open the html file in the dist folder and delete all the /.  
