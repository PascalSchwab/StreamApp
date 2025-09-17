import { ref } from "vue";
import socket from "../socket";

export const messages = ref([]);

socket.on("chat:history", async (history) => {
    messages.value = history;
});

socket.on("chat:message", async (message) => {
    messages.value.push(message);
});