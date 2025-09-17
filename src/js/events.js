import { ref } from "vue";
import socket from "../socket";

export const events = ref([]);

socket.on("activity:history", (history) => {
    events.value = history;
});

socket.on("activity:event", (event) => {
    events.value.unshift(event);
});