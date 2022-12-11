<template>
  <div class="cv">
    <div class="contenu">
      <div id="CV">CV</div>
      <div class ="title">Expérience </div>
      <div class="cercle-downlaod">
         <button @click="downloadFile()" class="download" style="color:white;">TÉLÉCHARGER CV</button>
      </div>
      <div class="para">
        <div class="row exp">
          <div class="col-5">
            <div class="years"> 2020 - Maintenant</div>
            <div class="post"> Junior developer</div>
            <div class="company"> Clustdoc </div>
            <div class="ville"> Paris 75015 </div>
          </div>
          <div class="col-7">
            <div class="">	Intégration de solutions externes <br>Contribuer à définir la stratégie d’intégrations d’applications externes à l’environnement Clustdoc<br>Développer et intégrer les applications/logiciels envisagés<br>Faire des tests automatisés pour le logiciel Clustdoc<br>Support technique<br>Travailler avec l‘équipe marketing </div>      
          </div>
        </div>
        <div class="row exp">
          <div class="col-6">
            <div class="years"> 2018 - 2020</div>
            <div class="post"> Serveuse</div>
            <div class="company"> Courtepaille </div>
            <div class="ville"> Saint Denis 93210 </div>
          </div>
          <div class="col-6">
            <div class="">	Relation clients, communication, gestion des suivis par Excel <br> Respect des normes de sécurité et d'hygiéne </div>      
          </div>
        </div>
      </div>   
      <div class ="title">Formation </div>
      <div class="para">
        <div class="row exp">
          <div class="col-6">
            <div class="years"> 2020 - 2022</div>
            <div class="post"> Master en Architecte technique <br> en développement </div>
            <div class="company"> Insta </div>
            <div class="ville"> Paris 75005 </div>
          </div>
          <div class="col-6">
            <div class="">Maîtriser les architectures des Développements d’information (Web, Mobile, Applications, Intelligence) <br>Conception et architectes des sites Web, Applications et environnement intelligent. </div>      
          </div>
        </div>
        <div class="row exp">
          <div class="col-6">
            <div class="years"> 2017 - 2020 </div>
            <div class="post"> Licence en informatique </div>
            <div class="company"> Université Sorbonne Paris Nord </div>
            <div class="ville"> Villetaneuse 93430 </div>
          </div>
          <div class="col-6">
            <div class="">Concevoir et développer des programmes et applications informatiques <br>Contrôler et analyser le déroulement des travaux et le fonctionnement des systèmes, des réseaux, des outils et périphériques<br>Modéliser, mettre en œuvre et maintenir des bases de données.</div>      
          </div>
        </div>
      </div>
      <div class="para">
        <div class="row exp">
          <div class="others"> Compétences</div>
          <div class="col-4 ">
            <div class="bleu"></div><div> NodeJs</div>
            <div class="bleu"></div><div> Laravel</div>
            <div class="bleu"></div> <div> VueJs</div>
            <div class="bleu"></div><div> Boostrap</div>
            <div class="bleu"></div><div> Ruby on Rail</div>
          </div>
          <div class="col-4 ">
            <div class="bleu"></div><div> PHP</div>
            <div class="bleu"></div><div> JavaScript</div>
            <div class="bleu"></div><div> C</div>
            <div class="bleu"></div><div> C++</div>
            <div class="bleu"></div><div> Python</div>
          </div>
          <div class="col-4">
            <div class="bleu"></div><div> GitHub</div>
            <div class="bleu"></div><div> Bitbucket</div>
            <div class="bleu"></div><div> Wordpress</div>
            <div class="bleu"></div><div> Méthode d'agile</div>
            <div class="bleu"></div><div> Leadership</div>
          </div> 
          <div class="others" style="padding-top:50px"> Langues</div>
          <div class="col-6">
            <div class="bleu1"></div>
            <div> Anglais (intermediare)</div>
          </div>
          <div class="col-6">
            <div class="bleu1"></div>
            <div> Italien (intermediare)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Chat/>
</template>

<style> 
  .cv{
    background-color: #F4ECE6;
    width:100%;
    padding:2% 0% 7% 0%; 
  }
  .contenu #CV {
    font-weight:bold;
    font-size:30px;
    color:black;
    text-align:center
  }
  .contenu .title {
    font-weight:bold;
    font-size:30px;
    color:black;
    margin:5% 0% 0% 26%;
  }
  .contenu .download {
    background-color: #935B3A;
    width:13%;
    height:3%;
    font-weight:bold;
    text-align:center;
    border-radius: 30px;
    border:0px;
    font-size:15px;
    color:black;
    margin:-100% 0% 0% 61%;
    padding:1%;
  }
  .cercle-downlaod{
    margin:-2% 0% 0% 0%;
  }
  .para {
    color:black;
    margin:5% 0% 0% 25%;
  }
  .cv .contenu .exp{
    background-color: #fff;
    margin:7% 35% 0% 1%;
    padding:7% 7% 7% 7%;
  }
  .years {
    color: #935B3A;
    font-size:20px;
    font-weight:bold; 
  }
  .post {
    color: black;
    font-weight:bold;
  }
   .others {
    font-weight:bold;
    font-size:30px;
  }
  .bleu {
    position: relative;
    background-color: #935B3A;
    width:15px;
    height:15px;
    bottom:-10%;
    left:-15%
  }
  .bleu1 {
    position: relative;
    background-color: #935B3A;
    width:15px;
    height:15px;
    bottom:-50%;
    left:-15%
  }
</style>
<script>
    import axios from 'axios';
    
    export default {
      methods: {
          downloadFile() {
              axios({
                    url: 'https://ndiagna.github.io/Ndiagna%20cv.pdf', // File URL Goes Here
                    method: 'GET',
                    responseType: 'blob',
                }).then((res) => {
                     var FILE = window.URL.createObjectURL(new Blob([res.data]));
                     
                     var docUrl = document.createElement('a');
                     docUrl.href = FILE;
                     docUrl.setAttribute('download', 'CV-Ndiagna.pdf');
                     document.body.appendChild(docUrl);
                     docUrl.click();
                });
          }
      }
    }
</script>