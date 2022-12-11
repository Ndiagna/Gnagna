<template>
  <Header />
  <Footer />
  <Chat />
</template>

<script>
  import Header from './components/MyHeader';
  import Footer from './components/MyFooter';
  import Chat from './components/Chat';

  export default {
    
  components: {
      Header,
      Footer,
      Chat
    }
  }
</script>
