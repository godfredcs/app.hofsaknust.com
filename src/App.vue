<template>
  <div id="app">
    <router-view/>
    <!-- <p>{{ isConnected ? 'The user is connected' : 'Offline' }}</p>

    <button @click="pingServer()">Ping server</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isConnected: false,
      socketMessage: ''
    };
  },

  sockets: {
    connect() {
      this.isConnected = true;
      console.log('it has connected');
    },

    disconnect() {
      this.isConnected = false;
      console.log('Disconnected!');
    },

    'ping server'(data) {
      console.log('the server says client said ', data);
    }
  },

  methods: {
    pingServer() {
      this.$socket.emit('ping server', 'Ping Server');
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
}
</style>
