<template>
  <div class="rect1" ></div>
  <div class= "rect2"> 
    <div class="image"><img class="profil" src="../assets/img.jpg" /> </div>
    <div class = "name" >Ndiagna <br> Seck</div> <hr>
    <div class="poste" > JUNIOR DEVELOPPER </div>
    <div class="rect3">
      <div class= "row">
        <div class="col-3"></div>
        <div class="col-6">
          <a href="https://github.com/Ndiagna" target="_blank" rel="noopener noreferrer"><span><img src="../assets/github.png"/></span></a>
          <a href="https://wa.me/33754578181" target="_blank" rel="noopener noreferrer"><span><img src="../assets/whatsapp1.png"/></span></a>
          <a href="https://www.linkedin.com/in/ndiagnaseck0/" target="_blank" rel="noopener noreferrer"><span><img src="../assets/linkedin.png"/></span></a>
          <a href="mailto:gnagnaseck0@gmail.com" target="_blank" rel="noopener noreferrer"><span><img src="../assets/email.png"/></span></a>
      </div>
        </div>
        <div class="col-3"></div>
    </div>
  </div>

  <div class="hello">HELLO</div>
  <div class = "suis">Je cherche un contract en CDI en Full stack</div>
  <nav class="col-6 navbar navbar-expand-sm">
      <!-- Links -->
      <ul class="navbar-nav">
        <router-link to="/cv">
        <li class="nav-item" >
          <a class="nav-link" id="cv">CV</a>
        </li>
        </router-link>
        <router-link to="/project">
        <li class="nav-item" >
          <a class="nav-link" id="project">PROJETS</a>
        </li>
        </router-link>
      </ul>
    </nav>

  <div class="intro"> 
  <div >
    Étudiante en Master Architecte technique en développement,<br> ingénierie informatique à l'<a href="https://www.insta.fr/" target="_blank" rel="noopener noreferrer">Insta</a> et apprentie chez <a href="https://www.clustdoc.com/" target="_blank" rel="noopener noreferrer">Clustdoc</a>  <br> depuis 2020. 
    Mon parcours, mes projets académiques <br> et mes expériences professionnelle sont développé en moi <br> des compétences qui me permettront de contribuer<br> positivement à votre activité.
  </div>
  <br>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  height:800px;
}
.rect1 {
  position: absolute;
  background-color: #E6DACE;
  padding-right: -50px;
  margin-top: 2%;
  width:40%;
  height:800px;
}
.rect2 {
  position: relative;
  left:20%;
  top:200px;
  background-color: #F4ECE6;
  width:26%;
  height:500px;
  box-shadow: -3px 3px 10px  #a19f9d;
}

.rect3 {
  position: relative;
  top:0%;
  background-color: #ffff;
  height:12%;
  margin-top:7%;
}
.rect3 img {
  margin:5% 10% 0% 0%;
}

.profil {
  width: 100%;
  height: auto;
  border-radius: 150px;
  margin-top:5%;
}
.image {
  width:50%;
  height:50% ; 
  margin-top:10%;
  margin-left:23%;
}
.name{
  font-weight:bold;
  color:black;
  font-size:25px;
  text-align:center;
  margin-top:5%
}
hr{
  border-top: 3px solid black;
  size:10px;
  weight:10px;
  margin:8% 43% 0% 43%;
}
.poste{
  text-align:center;
  margin:8% 0% 0% 0%;
}
.hello{
  margin:-15% 50% 0% 48%;
  font-size:80px;
  font-weight:bold;
  color:black
}
.suis{
  margin:1% 0% 0% 48%;
  font-size:20px;
  font-weight:bold;
  color:black
}
.navbar{
  margin:2% 0% 0% 47%;
}
.nav-item #cv{
  margin:0% -10% 1% 10%;
  background-color: #935B3A;
  border-radius:24px;
  padding:5px 52px;
  border:1px solid #935B3A;
  color:white;
}
.nav-item #project{
  background-color: #fff;
  padding:5px 30px;
  border-radius:24px;
  border:1px solid black;
  font-weight:bold;
  color: black;
}
a{
  text-decoration: none;
}
#project:hover {
  background-color: #935B3A;
  border:1px solid #935B3A;
  color:white;
}
#cv:hover {
  background-color: #fff;
  border:1px solid #935B3A;
  color:black;
}
.intro {
    margin: 3% 0px 45px 48%;
    padding:0% 0% 5% 0%;  
}
</style>
