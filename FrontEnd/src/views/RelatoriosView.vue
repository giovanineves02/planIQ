<template>
  <div class="min-h-screen bg-[#030D24] text-white">
    <Sidebar />

    <main class="min-w-0 ml-60 px-6 py-9 lg:px-10">
      <div class="mb-7">
        <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#22D3EE]">Análises</p>
        <h1 class="text-3xl font-bold tracking-tight text-white md:text-4xl">Relatórios</h1>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-[#6E8DCE]">
          Resumo das planilhas processadas, com dados simulados nesta etapa do projeto.
        </p>
      </div>

      <div class="grid gap-4 sm:grid-cols-3">
        <CardIndicador label="Total de registros" value="14.832" />
        <CardIndicador label="Campos vazios" value="213" bar-color="bg-[#F5A623]" />
        <CardIndicador label="Duplicidades" value="47" bar-color="bg-red-400" />
      </div>

      <section class="mt-4 overflow-hidden rounded-xl border border-[#1A3972] bg-[#081333]/90 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
        <div class="border-b border-[#172B5A] px-6 py-5 sm:px-8">
          <h2 class="text-base font-semibold text-white">Planilhas processadas</h2>
          <p class="mt-1 text-xs text-[#5B80B8]">Resumo por arquivo importado.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-xs">
            <thead class="bg-[#061536] text-[10px] uppercase tracking-wider text-[#6E8DCE]">
              <tr>
                <th class="px-6 py-3 font-medium">Arquivo</th>
                <th class="px-6 py-3 font-medium">Data</th>
                <th class="px-6 py-3 font-medium">Registros</th>
                <th class="px-6 py-3 font-medium">Vazios</th>
                <th class="px-6 py-3 font-medium">Duplicidades</th>
                <th class="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="relatorio in relatorios" :key="relatorio.arquivo"
                class="border-t border-[#172B5A] text-[#93B8FF] transition-colors hover:bg-[#0A1D45]">
                <td class="px-6 py-3 text-[#E8F0FE]">{{ relatorio.arquivo }}</td>
                <td class="px-6 py-3">{{ relatorio.data }}</td>
                <td class="px-6 py-3">{{ relatorio.registros }}</td>
                <td class="px-6 py-3">{{ relatorio.vazios }}</td>
                <td class="px-6 py-3">{{ relatorio.duplicidades }}</td>
                <td class="px-6 py-3">
                  <span class="rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide"
                    :class="relatorio.status === 'Concluído' ? 'bg-[#22D3B4]/15 text-[#22D3B4]' : 'bg-[#F5A623]/15 text-[#F5A623]'">
                    {{ relatorio.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import CardIndicador from '../components/CardIndicador.vue'

const relatorios = [
  { arquivo: 'contratos_2026_03.xlsx', data: '01/03/2026', registros: 4821, vazios: 62, duplicidades: 14, status: 'Concluído' },
  { arquivo: 'consultores_fev.csv', data: '20/02/2026', registros: 3190, vazios: 48, duplicidades: 9, status: 'Concluído' },
  { arquivo: 'servicos_jan.xlsx', data: '08/01/2026', registros: 5210, vazios: 73, duplicidades: 18, status: 'Em revisão' },
  { arquivo: 'telemetria_dez.csv', data: '15/12/2025', registros: 1611, vazios: 30, duplicidades: 6, status: 'Concluído' },
]
</script>
