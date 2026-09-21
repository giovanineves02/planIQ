<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030D24]">
    <div class="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]"></div>
    <div class="absolute top-40 left-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[180px]"></div>
    <div class="absolute top-32 right-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-[160px]"></div>

    <div class="relative z-20">
      <Header />
    </div>

    <main class="relative z-10 flex min-h-[80vh] flex-col items-center justify-center gap-12 px-6 py-16 md:px-12">
      <section class="escritas">
        <div class="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 text-center">
          <div
            class="flex items-center gap-2 rounded-full border border-[#172b5a] bg-[#081333]/80 px-4 py-1.5 text-xs font-medium text-[#93B8FF]">
            <span class="h-1.5 w-1.5 rounded-full bg-[#22D3EE]"></span>
            Plataforma de Inteligência de Dados
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Transforme planilhas em
          </h1>

          <h1 class="text-4xl font-bold tracking-tight text-[#4D84F5] md:text-6xl">
            inteligência de negócio.
          </h1>

          <p class="max-w-2xl text-base leading-relaxed text-[#93B8FF]/70 md:text-lg">
            Importe dados, automatize processos e obtenha insights estratégicos em
            segundos. Sem configurações complexas.
          </p>

          <div class="mt-2 flex flex-col gap-4 sm:flex-row">
            <button
              class="rounded-lg bg-[#4D84F5] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#3d6fdb]">
              Entrar na plataforma
            </button>
            <button
              class="flex items-center justify-center gap-2 rounded-lg border border-[#233a6e] bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#4D84F5]">
              Solicitar Demonstração →
            </button>
          </div>
        </div>
      </section>

      <section class="w-full max-w-5xl">
        <div class="overflow-hidden rounded-2xl border border-[#172b5a] bg-[#050f28] shadow-2xl shadow-black/40">
          <div class="flex items-center gap-2 border-b border-[#172b5a] px-5 py-3">
            <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
            <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
            <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
            <span class="ml-3 font-mono text-xs text-[#5a6f9c]">app.planiq.io/dashboard</span>
          </div>

          <div class="p-6">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div v-for="stat in stats" :key="stat.label"
                class="rounded-xl border border-[#172b5a] bg-[#081333] p-5">
                <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
                <p class="mt-1 text-xs text-[#6e8dce]">{{ stat.label }}</p>
                <div class="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#132352]">
                  <div class="h-full rounded-full" :class="stat.barColor" :style="{ width: stat.progress }"></div>
                </div>
              </div>
            </div>

            <div class="mt-4 rounded-xl border border-[#172b5a] bg-[#081333] p-6">
              <div class="mb-6 flex items-center justify-between">
                <p class="text-sm font-semibold text-white">Processamento por período</p>
                <span class="font-mono text-xs text-[#4D84F5]">últimos 30 dias</span>
              </div>
              <div class="flex h-32 items-end gap-2">
                <div v-for="(bar, index) in chartBars" :key="index"
                  class="flex-1 rounded-t-sm bg-gradient-to-t from-[#0c234b] to-[#4D84F5]"
                  :style="{ height: bar + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full max-w-4xl py-12">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-white md:text-4xl">Tudo que você precisa, num só lugar</h2>
          <p class="mt-4 text-lg text-[#93B8FF]/70">Do upload à decisão, o PlanIQ cuida de toda a jornada dos seus dados.</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <article v-for="feature in features" :key="feature.title"
            class="rounded-xl border border-[#172b5a] bg-[#081333] p-8 transition-colors duration-200 hover:border-[#2250a5]">
            <div class="text-2xl">{{ feature.icon }}</div>
            <h3 class="mt-5 text-lg font-semibold text-white">{{ feature.title }}</h3>
            <p class="mt-2 leading-relaxed text-[#6e8dce]">{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section class="w-full max-w-5xl py-12">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold text-white md:text-4xl">Como funciona</h2>
          <p class="mt-4 text-lg text-[#93B8FF]/70">Três etapas simples para transformar seus dados.</p>
        </div>

        <div class="grid gap-10 md:grid-cols-3">
          <div v-for="(step, index) in steps" :key="step.title" class="relative text-center">
            <div class="mb-6 flex items-center justify-center">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-xl border border-[#16427c] bg-[#0c234b] font-mono text-sm font-semibold text-[#4D84F5]">
                {{ step.number }}
              </div>
              <div v-if="index < steps.length - 1"
                class="absolute left-1/2 top-7 hidden h-px w-full bg-[#1f3563] md:block"></div>
            </div>
            <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
            <p class="mx-auto mt-2 max-w-xs leading-relaxed text-[#6e8dce]">{{ step.description }}</p>
          </div>
        </div>
      </section>

      <section class="w-full max-w-3xl py-16 text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">Pronto para transformar seus dados?</h2>
        <p class="mt-4 text-lg text-[#93B8FF]/70">Comece agora e veja o impacto dos insights inteligentes na sua tomada de decisão.</p>
        <div class="mt-8 flex justify-center">
          <button
            class="rounded-lg bg-[#4D84F5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4D84F5]/30 transition-colors duration-200 hover:bg-[#3d6fdb]">
            Começar agora →
          </button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const stats = [
  { value: '14.832', label: 'Registros', progress: '75%', barColor: 'bg-[#4D84F5]' },
  { value: '98,4%', label: 'Precisão', progress: '92%', barColor: 'bg-[#22D3B4]' },
  { value: '127', label: 'Planilhas', progress: '55%', barColor: 'bg-[#A855F7]' },
  { value: '3.4s', label: 'Tempo médio', progress: '65%', barColor: 'bg-[#F5A623]' },
]

const chartBars = [
  35, 55, 40, 70, 60, 80, 50, 75, 65, 90,
  55, 70, 60, 85, 45, 65, 75, 70, 55, 80,
  60, 65, 70, 55, 75, 85, 65, 75, 90, 70,
]

const steps = [
  { number: '01', title: 'Importar planilha', description: 'Arraste e solte arquivos Excel ou CSV. Suporte a múltiplas abas e formatos complexos.' },
  { number: '02', title: 'Processar dados', description: 'Nosso motor de IA analisa, limpa e estrutura seus dados automaticamente.' },
  { number: '03', title: 'Gerar insights', description: 'Dashboards, relatórios e recomendações estratégicas prontos em segundos.' },
]

const features = [
  { icon: '⚡', title: 'Importação automática', description: 'Suporte nativo para Excel (.xlsx) e CSV com detecção inteligente de estrutura.' },
  { icon: '📊', title: 'Dashboards inteligentes', description: 'Visualizações interativas geradas automaticamente a partir dos seus dados.' },
  { icon: '📋', title: 'Relatórios automatizados', description: 'Exporte relatórios profissionais com um clique, em múltiplos formatos.' },
  { icon: '🧠', title: 'Insights baseados em dados', description: 'Recomendações estratégicas geradas por IA para apoiar decisões de negócio.' },
]
</script>