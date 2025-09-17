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
import { ref, watch, nextTick } from "vue";
import Activity from "./Activity.vue"
import { events } from "../js/events";

const eventContainer = ref(null);
let autoScroll = true;

watch(events, async ()=>{
  await nextTick();
  if (eventContainer.value && autoScroll) {
    eventContainer.value.scrollTop = 0
  }
});

function onScroll() {
  if (!eventContainer.value) return;
  const nearTop = eventContainer.value.scrollTop < 20;
  autoScroll = nearTop;
}
</script>