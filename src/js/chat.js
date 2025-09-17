import { ref } from "vue";
import socket from "../socket";

export const messages = ref([]);

socket.on("chat:history", (history) => {
    messages.value = history;
});

socket.on("chat:message", (message) => {
    messages.value.push(message);
});