<template lang="html">
<div>
    <nav class="navbar navbar-dark bg-primary">
        <a href="/" class="navbar-brand">Ejemplo Vue+Firebase</a>
    </nav>
    <div class="my-container border shadow mx-auto">
    	<h3>Access</h3>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" v-model="user" placeholder="User...">
                <input type="password" class="form-control mt-2" v-model="password" placeholder="Password...">
                <button type="submit" class="btn btn-primary mt-3" v-on:click="logIn">Log In</button>
                <p>(Hay que darle 2 veces)</p>
            </div>
        </form>
        New here? <router-link to="/register">Register a new account</router-link>.
        <br>
        <button type="text" class="btn btn-dark mt-2" v-on:click="githubLogIn">Sign In with Github</button>
    </div>
</div>
</template>

<script>
	import firebase from 'firebase'
	export default {
	  name: 'login',
	  components: {
	    
	  },
	  data: function(){
	  	return {
	  		user: "",
	    	password: ""
	  	}
	  },
	  methods:{
	  	logIn(){
	  		if(this.user != "" && this.password != ""){
	  			firebase.auth().signInWithEmailAndPassword(this.user, this.password)
	  			.then(() => {
	  				alert("Connected.");
	  				this.$router.replace('privado');
	  			})
	  			.catch(function(error) {
				  var errorCode = error.code;
				  var errorMessage = error.message;
				  alert(errorMessage);
				});
	  		}else{
	  			alert("Incorrect fields.");
	  			this.user = "";
				this.password = "";
	  		}
	  	},
	  	githubLogIn(){
	  		var provider = new firebase.auth.GithubAuthProvider();
			firebase.auth().signInWithRedirect(provider).then(() => {
			  this.$router.replace('privado');
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
	  	}
	  }
	}
</script>

<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color: #2c3e50;
	}
	.my-container {
		padding: 30px;
		margin-top: 150px;
		width: 20%;
	}
</style>