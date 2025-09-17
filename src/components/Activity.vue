<template>
<div class="activity">
  <div v-if="event.type === 'follow'">
    👤 Follow: {{ event.name }}
  </div>
  <div v-else-if="event.type === 'channelPoints'">
    🎯 Points[{{ event.redemption }}]: {{ event.name }}
  </div>
  <div v-else-if="event.type === 'raid'">
    ⚔️ Raid: {{ event.name }} mit {{ event.amount }} | {{ event.message }}
  </div>
  <div v-else-if="event.type === 'tip'">
    💸 Tip: {{ event.name }} mit {{ event.amount }} | {{ event.message }}
  </div>
  <div v-else-if="event.type === 'subscriber'">
    ⭐ Sub: {{ event.name }} mit {{ event.amount }} | {{ event.message }}
  </div>
  <div v-else-if="event.type === 'cheer'">
    🎉 Bits: {{ event.name }} mit {{ event.amount }} | {{ event.message }}
  </div>
  <div v-else>
    ❓ Unknown event
  </div>
</div>
</template>

<style>
.activity {
  width: 100%;
  height: fit-content;
  min-height: 40px;
  padding: 10px 8px;
  margin-bottom: 6px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
}

.activity.follow {
  background: linear-gradient(90deg, #3a7bd5, #3a6073);
}

.activity.channelPoints {
  background: linear-gradient(90deg, #ff9966, #ff5e62);
}

.activity.raid {
  background: linear-gradient(90deg, #7f00ff, #e100ff);
}

.activity.tip {
  background: linear-gradient(90deg, #56ab2f, #a8e063);
}

.activity.subscriber {
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
}

.activity.cheer {
  background: linear-gradient(90deg, #00c6ff, #0072ff);
}

.activity.unknown {
  background: #444;
}
</style>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  }
});

</script>