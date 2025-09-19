<template> 
<div class="message">
  <div id="badges"> 
    <img :v-if="message.user.supportInfo.mod" :src="modImg" class="badge" width="20px" /> 
    <img :v-if="message.user.supportInfo.sub" :src="primeImg" class="badge" width="20px" /> 
  </div> 
  <div id="username" :style="{color: message.user.color}">{{ message.user.name }}:</div> 
  <div id="text"> 
    <a v-if="isLink" :href="message.text" target="_blank">{{ message.text }}</a> 
    <div v-else>{{ message.text }}</div> 
  </div> 
</div> 
</template>

<style>
.message{ 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: flex-start; 
  padding: 5px 5px; 
  height: fit-content; 
  min-height: 40px; 
  gap: 5px; 
  user-select: none; 
}

.message.first-message{ 
  background-color: rgba(188, 143, 143, 0.377); 
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