<template>
  <aside class="fixed inset-y-0 left-0 z-20 flex h-screen w-60 flex-col border-r border-[#172B5A] bg-[#050f28]">
    <!-- Logo -->
    <div class="flex items-center gap-2.5 px-5 py-5">
      <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#2563EB]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      </div>
      <span class="text-base font-bold text-white">PlanIQ</span>
    </div>

    <!-- Navegação -->
    <nav class="flex-1 space-y-1 px-3">
      <RouterLink v-for="item in menuItems" :key="item.to" :to="item.to"
        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200"
        :class="isActive(item.to)
          ? 'bg-[#2563EB] text-white'
          : 'text-[#8AA0C7] hover:bg-[#0C2858] hover:text-white'">
        <component :is="item.icon" class="h-[18px] w-[18px] flex-shrink-0" />
        {{ item.label }}
      </RouterLink>

      <button v-for="item in futureItems" :key="item.label" type="button" disabled
        :title="`${item.label} — em breve`"
        class="flex w-full cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#45547A]">
        <component :is="item.icon" class="h-[18px] w-[18px] flex-shrink-0" />
        {{ item.label }}
      </button>
    </nav>

    <!-- Rodapé: usuário + sair -->
    <div class="border-t border-[#172B5A] px-3 py-4">
      <div class="flex items-center gap-3 rounded-lg px-2 py-2">
        <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
          A
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-white">Admin</p>
          <p class="truncate text-xs text-[#5B80B8]">admin@planiq.io</p>
        </div>
        <button type="button" @click="sair" title="Sair"
          class="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#8AA0C7] transition-colors duration-200 hover:bg-red-500/10 hover:text-red-300">
          <IconeSair class="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { h } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function criarIcone(path) {
  return {
    props: { class: { type: String, default: '' } },
    render() {
      return h(
        'svg',
        {
          class: this.class,
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '1.8',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        path.map((d) => h('path', { d })),
      )
    },
  }
}

const IconeDashboard = criarIcone(['M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'])
const IconeUpload = criarIcone(['M12 16V4m0 0L8 8m4-4 4 4', 'M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4'])
const IconeTabela = criarIcone(['M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M3 10h18', 'M3 15h18', 'M9 3v18'])
const IconeRelatorios = criarIcone(['M3 17l6-6 4 4 7-8', 'M14 7h6v6'])
const IconeUsuarios = criarIcone(['M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4 20c0-4 4-6 8-6s8 2 8 6'])
const IconeExportar = criarIcone(['M12 4v10m0 0-4-4m4 4 4-4', 'M4 18h16'])
const IconeSair = criarIcone(['M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4', 'M16 17l5-5-5-5', 'M21 12H9'])

const menuItems = [
  { label: 'Dashboard', to: '/dashboard', icon: IconeDashboard },
  { label: 'Importar Planilha', to: '/upload', icon: IconeUpload },
  { label: 'Relatórios & Insights', to: '/relatorios', icon: IconeRelatorios },
]

const futureItems = [
  { label: 'Dados Importados', icon: IconeTabela },
  { label: 'Gestão de Usuários', icon: IconeUsuarios },
  { label: 'Exportar Modelo', icon: IconeExportar },
]

function isActive(path) {
  return route.path === path
}

function sair() {
  router.push('/')
}
</script>
