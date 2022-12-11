<template>
  <div class="contact">
    <div class="contenu">
      <div id="title">Contactez-moi</div>
      <div id ="Project"> 

        <div class="zone">
          <form id="app" ref="form" @submit.prevent="sendEmail"  >
            <div class="row">
              <div class="col-xl"> 
                <p>
                 <label for="prenom" style="float:left;width:50%">Prénom <span>*</span></label>
                 <input id="prenom" v-model="name" type="text" name="prenom" required>
               </p>
              </div>
              <div class="col-xl">
                <p>
                 <label for="nom">Nom de famille <span>*</span></label>
                 <input id="nom" v-model="nom" type="text" name="nom" required>
                </p>
              </div>
            </div>
            <p>
              <label for="email">Email <span>*</span></label>
              <input
                id="email"
                v-model="age"
                type="email"
                name="Email"
              required>
            </p>
            <p>
              <label for="objet">Objet 
            </label>
              <input
                id="objet"
                v-model="age"
                type="text"
                name="Objet">
            </p>
            <p>
              <label for="message">Message <span>*</span></label>
              <textarea
                id="message"
                v-model="age"
                type="text"
                name="message"
              required  rows="3"></textarea>
            </p>
            <p>
              <input
                type="submit"
                value="ENVOYER"
              >
              
            </p>

</form>
        </div>
      </div>
    </div>
  </div>
  <Chat/>
</template>

<style> 
.contact{
  background-color: #F4ECE6;
  padding:2% 0% 7% 0%;
  width:100%
}

.contenu {
margin-top: 8%;
}
.contenu #title {
  font-weight:bold;
  font-size:30px;
  text-align:center
}
.contenu #Project {
  margin:5% 0% 0% 25%;
}
.contenu .zone{
  background-color: #fff;
  margin:7% 35% 0% 1%;
  padding:7% 7% 7% 7%;
}
input[type=text], input[type=email],textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black; 
}
input[type=submit] {
  padding: 10px 22px;
  margin: 8px 0;
  border: none; 
  background-color: #935B3A;
  color:#fff;
  border-radius:50px;
  font-weight:bold;
  text-align:center;
}

input:focus,textarea:focus{
    outline-color: white;
      border-bottom: 3px solid #935B3A;
}
span {
  color: #935B3A;
}
label{
  margin-top:5%;
}

</style>


<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_jv5ozi9', 'template_a5momrh', this.$refs.form, 'DP_J5V-HqduP4Vuoh')
        .then((result) => {
            alert('Votre message a été envoyer!', result.text);
            this.$refs.form.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
  }
}
</script>