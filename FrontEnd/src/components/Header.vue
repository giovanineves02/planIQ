<template>
  <header class="bg-transparent px-4 py-4 text-white md:px-12">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </div>
        <h1 class="text-lg font-bold text-white">PlanIQ</h1>
      </div>

      <div class="flex items-center gap-6">
        <button type="button" @click="irParaLogin"
          class="cursor-pointer text-sm font-medium text-[#93B8FF]/80 transition-colors duration-200 hover:text-white">
          Entrar
        </button>

        <button type="button" @click="irParaDemonstracao"
          class="cursor-pointer rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#3d6fdb]">
          Solicitar Demonstração
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irParaLogin() {
  router.push('/login')
}

function irParaDemonstracao() {
  router.push('/demonstracao')
}
</script>