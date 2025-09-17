<template>
  <div :class="messageClass">
    <div id="badges">
      <img v-if="message.user.supportInfo.mod" :src="modImg" class="badge" />
      <img v-if="message.user.supportInfo.sub" :src="primeImg" class="badge" />
    </div>
    <div id="username" :style="{ color: message.user.color }">
      {{ message.user.name }}:
    </div>
    <div id="text">
      <a v-if="isLink" :href="message.text" target="_blank">{{ message.text }}</a>
      <span v-else>{{ message.text }}</span>
    </div>
  </div>
</template>

<style>
.message{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 5px;
    height: fit-content;
    min-height: 40px;
    gap: 5px;
    user-select: none;
    border-bottom: 1px solid black;
}

.message.first-message{
  background-color: rgba(190, 101, 101, 0.678);
}

.message #text {
  flex: 1;
  word-break: break-word;
  user-select: text;
}

.message #badges{
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import modImg from "../assets/Mod.jpg";
import primeImg from "../assets/Prime.jpg";

const messageClass = ref("message");
const isLink = ref(false);

const props = defineProps({
  message: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  if(props.message.text.includes("https://")) isLink.value = true
  messageClass.value += (props.message.user.firstMessage) ? " first-message" : "";
});
</script>