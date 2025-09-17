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
import { ref, watch, nextTick } from "vue";
import { messages } from "../js/chat";

const chatContainer = ref(null);
let autoScroll = true;

watch(messages, async () => {
  await nextTick();
  if (chatContainer.value && autoScroll) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
});

function onScroll() {
  if (!chatContainer.value) return;
  const nearBottom = (chatContainer.value.scrollHeight - chatContainer.value.scrollTop - chatContainer.value.clientHeight) < 20;
  autoScroll = nearBottom;
}
</script>
