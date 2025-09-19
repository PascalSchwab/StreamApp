<template>
    <h2>Streaming and Recording</h2>
    <h2>Scenes</h2>
    <div id="scene-container">
        <div :class="['scene', { active: scene === obs.state.selectedScene }]" v-for="(scene, index) in obs.state.scenes" :key="index" @click="switchScene(scene)">
            <div style="user-select: none;">{{ scene }}</div>
        </div>
    </div>
    <h2>Sources</h2>
    <div id="source-container">
        
    </div>
</template>

<style>
#scene-container{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
}
.scene{
    width: 100px;
    aspect-ratio: 1/1;
    text-align: center;
    align-content: center;
    border: 1px solid black;
}

    .scene.active{
        border: 1px solid rgb(66, 184, 131);
    }
</style>

<script setup>
import { ref, onMounted } from "vue";
import {obs} from "../js/obs"

onMounted(async ()=>{
    await obs.value.connect();
})

async function switchScene(sceneName){
    await obs.value.switchScene(sceneName)
}
</script>