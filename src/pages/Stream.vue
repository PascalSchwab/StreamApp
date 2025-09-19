<template>
    <iframe
        id="twitch-player"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        src="https://player.twitch.tv/?channel=blazertyp&parent=localhost">
    </iframe>
    <Chat style="height: 20%;"></Chat>
</template>

<style>

#twitch-player{
    width: 100%;
    height: 30%;
}
</style>

<script setup>
import Chat from "../components/Chat.vue"
</script>