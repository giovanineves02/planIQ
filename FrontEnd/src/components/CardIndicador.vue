<template>
  <div class="rounded-xl border border-[#172b5a] bg-[#081333] p-5">
    <p class="text-2xl font-bold text-white">{{ value }}</p>
    <p class="mt-1 text-xs text-[#6e8dce]">{{ label }}</p>
    <div v-if="progress" class="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#132352]">
      <div class="h-full rounded-full" :class="barColor" :style="{ width: progress }"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  progress: { type: String, default: null },
  barColor: { type: String, default: 'bg-[#4D84F5]' },
})
</script>
