import OBSWebSocket from 'obs-websocket-js';
import { reactive, ref } from "vue";

export class Obs{
  constructor(){
    this.socket = new OBSWebSocket();
    this.isConnected = false
    this.isStreaming = false
    this.state = reactive({
      scenes: [],
      selectedScene: null
    })

    this.socket.on('CurrentProgramSceneChanged', (data) => {
      console.log('🔄 Scene changed:', data.sceneName);
      this.state.selectedScene = data.sceneName;
    });
  }

  async connect(){
    if (this.isConnected) return;
    try {
      await this.socket.connect('ws://obs.retrosize.de:4455', 'irl_stream_123');
      this.isConnected = true;
      console.log('✅ Connected to OBS');
      this.state.scenes = await this.getScenes();
    } catch (err) {
      console.error('❌ OBS Connection failed:', err);
    }
  }

  async switchScene(sceneName){
    try {
      await this.socket.call('SetCurrentProgramScene', { sceneName });
    } catch (err) {
      console.error('⚠️ Failed to switch scene:', err);
    }
  }

  async getScenes(){
    try {
      const { scenes, currentProgramSceneName } = await this.socket.call('GetSceneList');
      this.state.selectedScene = currentProgramSceneName;
      return scenes.map(s => s.sceneName);
    } catch (err) {
      console.error('⚠️ Failed to fetch scenes:', err);
      return [];
    }
  }

  async startStream() {
    try {
      await this.socket.call('StartStream');
      console.log('📡 Stream started!');
    } catch (err) {
      console.error('⚠️ Failed to start stream:', err);
    }
  }

  async stopStream() {
    try {
      await this.socket.call('StopStream');
      console.log('🛑 Stream stopped!');
    } catch (err) {
      console.error('⚠️ Failed to stop stream:', err);
    }
  }

  async isStreaming() {
    try {
      const status = await this.socket.call('GetStreamStatus');
      this.isStreaming = status.outputActive;
    } catch (err) {
      console.error('⚠️ Failed to get stream status:', err);
    }
  }

  deconstrutor(){
    this.socket.off('CurrentProgramSceneChanged');
  }
}

export const obs = ref(new Obs());