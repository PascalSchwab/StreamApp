<template>
<div class="chat" ref="chatContainer" @scroll="onScroll">
  <Message v-for="(message, index) in messages" :key="index" :message="message"></Message>
</div>
</template>

<style>
.chat{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

<script setup>
import Message from './Message.vue';
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import socket from "../socket"

const messages = ref([]);
const chatContainer = ref(null);
let autoScroll = true;

onMounted(() => {
  socket.on("chat:history", async (history) => {
    messages.value = history;
    await nextTick();
    if (chatContainer.value && autoScroll) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  });

  socket.on("chat:message", async (message) => {
    messages.value.push(message);
    await nextTick();
    if (chatContainer.value && autoScroll) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  });
});

onUnmounted(() => {
  socket.off("chat:history");
  socket.off("chat:message");
});

function onScroll() {
  if (!chatContainer.value) return;
  const nearBottom = (chatContainer.value.scrollHeight - chatContainer.value.scrollTop - chatContainer.value.clientHeight) < 20;
  autoScroll = nearBottom;
}
</script>
