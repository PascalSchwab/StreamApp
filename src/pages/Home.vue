<template>
<div id="home">
  <Events style="height: 40%;"></Events>
  <Chat style="height: 56%;"></Chat>
  <div id="input-container" style="height: 4%;">
    <input type="text" id="reply" v-model="text" placeholder="Your text"/>
    <button id="reply-button" @click="sendReply">Send</button>
  </div>
</div>
</template>

<script setup>
import Chat from '../components/Chat.vue';
import Events from '../components/Events.vue';
import socket from "../socket";
import { ref } from "vue";

const text = ref("")

function sendReply(){
  if(text.value != null && text.value != ""){
    socket.emit("chat:reply", text.value);
  }
}
</script>

<style>
#home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#input-container{
  width: 100%;
  display: flex;
  flex-direction: row;
}

#reply{
  width: 100%;
  height: 100%;
}

#reply-button{
  height: 100%;
  width: 50px;
}
</style>