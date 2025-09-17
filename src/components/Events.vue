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
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import Activity from "./Activity.vue"
import socket from "../socket"

const events = ref([]);
const eventContainer = ref(null);
let autoScroll = true;

onMounted(() => {
  socket.on("activity:history", async (history) => {
    events.value = history;
    await nextTick();
    if (eventContainer.value && autoScroll) {
      eventContainer.value.scrollTop = 0
    }
  });

  socket.on("activity:event", async (event) => {
    events.value.unshift(event);
    await nextTick();
    if (eventContainer.value && autoScroll) {
      eventContainer.value.scrollTop = 0
    }
  });
});

onUnmounted(() => {
  socket.off("activity:history");
  socket.off("activity:event");
});

function onScroll() {
  if (!eventContainer.value) return;
  const nearTop = eventContainer.value.scrollTop < 20;
  autoScroll = nearTop;
}
</script>