<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databindinghtml">DataBindingHtml</router-link> |
    <router-link to="/databindinginputtext">DataBindingInputText</router-link> |
    <router-link to="/databindinginputnumber">DataBindingInputNumber</router-link> |
    <router-link to="/databindingtextarea">DataBindingTextarea</router-link> |
    <router-link to="/databindingselect">DataBindingSelect</router-link> |
    <router-link to="/databindingCheckbox">DataBindingCheckbox</router-link> |
    <router-link to="/databindingRadio">DataBindingRadio</router-link> |
    <router-link to="/databindingList">DataBindingList</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
