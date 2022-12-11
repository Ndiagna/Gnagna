<template>
  <div class="header fixed-top">
    <div class="row fixed-top">
    <div class="title col-6">
      <div class="rect"></div>
      <span class="name">Ndiagna SECK</span><span >/</span>
      <span >Junior developper </span>
    </div>
    <nav class="col-6 navbar navbar-expand-sm justify-content-end ">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link "><router-link to="/">À PROPOS DE MOI</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/cv">CV</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/project">PROJETS</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/contact">CONTACT</router-link> </a> 
        </li>
      </ul>
    </nav>
    </div>
  </div>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  padding:50px;
  background-color:#fff;
}
.title .name{
  font-weight: bold;
  font-size:25px;
  margin-left:45px;
  color: black;
}
.title span{
  padding-right: 10px;
  color: black;
}

.nav-item {
  padding-right: 30px;
}

.nav-item a {
  font-size:15px;
  text-decoration: none;
  font-weight:bold;
  color: #2c3e50;
}

.nav-item a.router-link-exact-active {
  color: #935B3A;
}
.rect {
  position: relative;
  background-color: #935B3A;
  width:15px;
  height:15px;
  top:25px;
  margin-left:20px;
}
</style>
