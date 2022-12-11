<template>
  <div class="project">
    <div class="contenu">
      <div id="title">Projet</div>
      <div id ="Project"> 
      <div class= "presentation">Ayant pour projet professionnel de devenir chef de projet en développement dans 5ans, grâce à mon
        parcours, j'ai déjà acquis des compétences que j'ai pu mettre en pratique lors de mes
        expériences et projets d'études. J'ai développé des applications de jeu en Java et en
        programmation Shell, des applications web en PHP, nodeJs avec des bases de données
        MySQL et Mongodb depuis les IHMs développées avec du JavaScript, html et
        du css. J'ai appris à mettre en oeuvre les tests unitaires et fonctionnels et j'ai acquis des
        connaissances en configuration serveurs (NFS, LDAP, DNS, etc) gestion des services
        systémes, paramétrage des interfaces sur des systémes linux, ubuntu à partir de la ligne
        de commande et aussi Marionnet dans Virtual Box pour différentes distributions de L'Unix.
        Ne pas pouvoir tous cité, voici quelques projets que j'ai réalisé :</div>
        <div class="row bloc">
          <div class="col-8 resume">
            <div class="name">Application Instagram</div>
            <div class="titre">Projet fin d'année 4eme année</div>
            <div class="rectTitre"></div>
            <div class="diss" > Le projet consiste à reproduire l’application <br>mobile du réseau social existant Instagram,
              <br>mais en y ajoutant une partie administrateur, <br>non visible par les utilisateurs sous la forme <br>
              d’une application Desktop. <br>
              Langages et outils utilisées : Ionic, Angular,<br> NodeJS, Mysql, Boostrap, Heroku, …
            </div>
          </div>
          <div class="col-4">
            <div ><img class="profil" src="../assets/instagram.png"/> </div> 
          </div>
        </div>
        <div class="row bloc">
          <div class="col-8 resume">
            <div class="name">Jeux de carte du monde</div>
            <div class="titre">Projet web Licence 3</div>
            <div class="rectTitre"></div>
            <div class="diss" > 
              Ce jeu permet à donner la possibilité à un utilisateur (inscrit ou qui est en mode invité)<br> à travers une carte du monde de jouer. En localisant un pays selon<br> une question donnée aléatoirement, cette question contient <br>une devinette et un drapeau.
              <br>Langages et outils utilisées : PHP, JS, Boostrap, Leaflet, MySql</div>
          </div>
          <div class="col-4">
            <div ><img class="profil" src="../assets/monde.png"/> </div>     
          </div>
        </div>
        <div class="row bloc">
          <div class="col-8 resume">
            <div class="name">Site Web E-Commerce</div>
            <div class="titre">Projet personnel</div>
            <div class="rectTitre"></div>
            <div class="diss" >Le projet amène à faire un site e-Commerce qui vend des produits de droguerie.
              Langages et outils utilisées : NodeJs, ReactJs, Redux, Boostrap
            </div>        
          </div>
          <div class="col-4">
            <div ><img class="profil" src="../assets/ecommerce.png"/> </div>     
          </div>
        </div>
        <div class="row bloc">
          <div class="col-8 resume">
            <div class="name">Mirroir magic</div>
            <div class="titre">Projet Internet des objets</div>
            <div class="rectTitre"></div>
            <div class="diss" >• Installation logicielle : Installation et configuration de Raspbian et de MagicMirror <br>•  Automatisation du lancement et ajout de modules <br>
• Installation matérielle : Création du cadre, branchement
            </div>        
          </div>
          <div class="col-4">
            <div ><img class="profil" src="../assets/mirroir.jpg"/> </div>     
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style> 
.project{
  background-color: #F4ECE6;
  padding:2% 0% 7% 0%;
  width:100%;
}
.contenu #title {
  font-weight:bold;
  font-size:30px;
  text-align:center
}

.contenu .bloc{
  background-color: #fff;
  width:70%; 
  margin:7% 35% 0% 1%;
  padding:7% 7% 7% 7%;
}
.contenu .presentation{
  width:70%;
  text-align:justify; 
  margin:1%;
}
.resume{
  margin-left:-10%;
}
.name {
  color:#935B3A;
  font-size:20px;
  font-weight:bold;
}
.rectTitre {
  position: relative;
  background-color: #935B3A;
  width:12px;
  height:50px;
  margin:-14% 0% 0% -7.5%;
}
.profil {
  width: 180.7%;
  height: 100%;
  margin-top:0;
  margin-left:2%;
}
.diss{
  margin-top:10%
}

</style>
