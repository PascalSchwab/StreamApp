<template>
<div class="events" ref="eventContainer" @scroll="onScroll">
  <Activity v-for="(event, index) in events" :key="index" :event="event"></Activity>
</div>
</template>

<style>
.events{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import Activity from "./Activity.vue"
import { events } from "../js/events";

const eventContainer = ref(null);
let autoScroll = true;

onMounted(async ()=>{
  await nextTick();
  if (eventContainer.value && autoScroll) {
    eventContainer.value.scrollTop = 0
  }
})

watch(events, async ()=>{
  await nextTick();
  if (eventContainer.value && autoScroll) {
    eventContainer.value.scrollTop = 0
  }
}, { deep: true });

function onScroll() {
  if (!eventContainer.value) return;
  const nearTop = eventContainer.value.scrollTop < 20;
  autoScroll = nearTop;
}
</script>