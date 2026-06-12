import { useState } from 'react'
import logo from './assets/korenet_clean.png'

export default function App() {
  const [open, setOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const projetos = [
    {
      nome: "Solara Banho & Cuidado",
      descricao: "Site institucional desenvolvido para uma marca de sabonetes artesanais.",
      imagem: "/solara-preview.png",
      url: "https://solarabanhoecuidado.com.br/",
    },
  ]

  return (
    <div className="relative bg-[#FAFAFA] text-zinc-900 min-h-screen overflow-hidden font-sans">

    <div className="absolute top-0 left-[-150px] w-[500px] h-[500px] bg-purple-500/15 blur-[180px] rounded-full pointer-events-none"></div>

    <div className="absolute top-[1200px] right-[-150px] w-[500px] h-[500px] bg-fuchsia-500/10 blur-[180px] rounded-full pointer-events-none"></div>

    <div className="absolute bottom-[500px] left-[10%] w-[400px] h-[400px] bg-violet-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      {/* HEADER */}
      <header id="inicio" className="w-full border-b border-purple-100 backdrop-blur-xl sticky top-0 z-50 bg-white/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="relative">
        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full scale-150"></div>

          <img
          src={logo}
          alt="korenet_clean"
          className="relative h-30 w-auto"
          />
</div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#inicio" className="relative text-zinc-600 hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-purple-600 after:transition-all after:duration-500 hover:after:w-full">
              Início
            </a>
            <a href="#servicos" className="relative text-zinc-600 hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-purple-600 after:transition-all after:duration-500 hover:after:w-full">
              Serviços
            </a>
            <a href="#portfolio" className="relative text-zinc-600 hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-purple-600 after:transition-all after:duration-500 hover:after:w-full">
              Portfólio
            </a>
            <a href="#processo" className="relative text-zinc-600 hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-purple-600 after:transition-all after:duration-500 hover:after:w-full">
              Processo
            </a>
            <a href="#contato" className="relative text-zinc-600 hover:text-purple-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-purple-600 after:transition-all after:duration-500 hover:after:w-full">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-500 overflow-hidden border ${
              open ? 'bg-purple-600 border-purple-600 shadow-md shadow-purple-600/20' : 'bg-transparent border-purple-200 hover:border-purple-400'
            }`}
          >
            {/* TEXTO */}
            <div className={`overflow-hidden transition-all duration-500 whitespace-nowrap ${open ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  setShowLogin(true)
                }}
                className="text-white font-semibold tracking-wide cursor-pointer hover:text-purple-100 transition"
              >
                Acesso restrito
              </span>
            </div>

            {/* HAMBURGUER */}
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-white' : 'bg-purple-600'}`}></span>
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-white' : 'bg-purple-600'}`}></span>
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-white' : 'bg-purple-600'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="uppercase text-purple-600 font-bold tracking-[0.3em] text-sm">
              Landing pages que convertem
            </span>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mt-6 text-zinc-900">
              Transformamos ideias em
              <span className="text-purple-600">{" "}landing pages</span>
              <br />
              que geram resultados.
            </h2>

            <p className="text-zinc-600 text-lg mt-8 leading-relaxed max-w-xl">
              Criamos páginas modernas, rápidas e estratégicas para empresas que desejam crescer no mundo digital.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-purple-600 hover:bg-purple-700 text-white transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-600/20">
                <a href="https://wa.me/5562991420411" target="_blank" rel="noopener noreferrer">
                  Vamos conversar
                </a>
              </button>

              <a href="#portfolio" className="border border-purple-600 text-purple-600 hover:bg-purple-50 transition px-8 py-4 rounded-2xl font-semibold">
                Ver projetos
              </a>
            </div>
          </div>
           {/* MOCKUP KORENET */}
<div className="relative flex items-center justify-center">

  <img
    src="/notebook_celular.png"
    alt="Mockup Korenet"
    className="
      w-full
      max-w-[1100px]
      object-contain
      drop-shadow-[0_25px_60px_rgba(124,58,237,0.25)]
      hover:scale-105
      transition-all
      duration-700
    "
  />

</div>     
 
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-y border-purple-100 py-10 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <a href="https://solarabanhoecuidado.com.br/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition duration-300">
            <img src="/solara_LOGO-removebg-preview.png" alt="SOLARA BANHO E CUIDADO" className="mx-auto w-40 h-auto object-contain invert hue-rotate-[260px] saturate-200"/>
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-600 font-bold tracking-[0.3em] text-sm">
              Diferenciais
            </span>

            <h3 className="text-5xl font-black mt-6 leading-tight text-zinc-900">
              Mais que design,
              <span className="text-purple-600">{" "}estratégia que converte.</span>
            </h3>

            <p className="text-zinc-600 mt-8 text-lg leading-relaxed">
              Criamos landing pages focadas em performance, experience e resultados reais.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-20">
{[
  {
    titulo: 'Foco em conversão',
    descricao:
      'Estrutura criada para guiar o visitante até a ação desejada, aumentando suas oportunidades de negócio.',
  },
  {
    titulo: 'Design profissional',
    descricao:
      'Visual moderno, alinhado à identidade da sua marca e pensado para transmitir autoridade.',
  },
  {
    titulo: 'Carregamento rápido',
    descricao:
      'Páginas leves e otimizadas para oferecer melhor experiência e reduzir abandonos.',
  },
].map((item, index) => (
  <div
    key={index}
    className="w-full md:max-w-[380px] bg-gradient-to-br from-white to-purple-50 shadow-lg shadow-purple-500/10 border border-purple-100 rounded-[32px] p-10 hover:shadow-xl hover:border-purple-300 hover:-translate-y-2 transition duration-500"
  >
    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-2xl font-black text-white shadow-md shadow-purple-600/20">
      0{index + 1}
    </div>

    <h4 className="text-3xl font-bold mt-8 text-zinc-900">
      {item.titulo}
    </h4>

    <p className="text-zinc-500 mt-5 leading-relaxed">
      {item.descricao}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="servicos" className="py-28 px-6 border-y border-purple-100 bg-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-600 font-bold tracking-[0.3em] text-sm">
              Quem atendemos
            </span>

            <h3 className="text-5xl font-black mt-6 leading-tight text-zinc-900">
              Negócios que precisam de uma
              <span className="text-purple-600">{" "}presença digital profissional.</span>
            </h3>

            <p className="text-zinc-600 mt-8 text-lg leading-relaxed">
              Criamos landing pages para empresas que desejam atrair mais clientes, fortalecer sua marca e aumentar resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: "🏥", title: "Clínicas e Consultórios", description: "Transmita credibilidade, facilite agendamentos e atraia novos pacientes." },
              { icon: "✂️", title: "Barbearias e Salões", description: "Mostre seus serviços, fortaleça sua marca e gere mais agendamentos." },
              { icon: "🍔", title: "Restaurantes e Delivery", description: "Apresente seu cardápio, promoções e facilite o contato com clientes." },
              { icon: "📊", title: "Contadores", description: "Demonstre sua expertise e atraia clientes que buscam serviços contábeis profissionais." },
              { icon: "⚖️", title: "Advogados", description: "Construa autoridade digital e gere oportunidades de novos atendimentos." },
              { icon: "🏠", title: "Imobiliárias", description: "Divulgue imóveis, capture leads e aumente suas chances de conversão." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-purple-100 rounded-[32px] p-8 shadow-sm hover:shadow-md hover:-translate-y-2 hover:border-purple-400 transition duration-500"
              >
                {/* ALTERAÇÃO AQUI: 
                  Mudado para 'bg-purple-600' para ficar um roxo vivo e real.
                  Adicionado 'shadow-md shadow-purple-600/20' para dar profundidade.
                */}
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl shadow-md shadow-purple-600/20">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mt-6 text-zinc-900">{item.title}</h4>
                <p className="text-zinc-500 mt-4">{item.description}</p>
              </div>
            ))}

            {/* CARD GIGANTE */}
            <div className="md:col-span-3 rounded-[40px] border border-purple-200 bg-gradient-to-br from-purple-600 to-purple-800 p-14 text-center text-white shadow-xl shadow-purple-600/10">
              <h4 className="text-5xl font-black">Seu negócio é diferente?</h4>
              <p className="text-purple-100 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
                Não encontrou seu segmento acima? Sem problemas. Entendemos como sua empresa atrai clientes e desenvolvemos uma solution personalizada para a sua realidade.
              </p>
              <a
                href="https://wa.me/5562991420411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-8 py-4 rounded-2xl bg-white hover:bg-purple-50 text-purple-700 transition font-bold shadow-lg"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative py-28 px-6 bg-gradient-to-b from-white via-purple-50/40 to-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-600 font-bold tracking-[0.3em] text-sm">
              Portfólio
            </span>
            <h3 className="text-5xl font-black mt-6 leading-tight text-zinc-900">
              Projetos que entregam
              <span className="text-purple-600">{" "}resultados reais.</span>
            </h3>
          </div>

          <div className="flex justify-center mt-20">
            {projetos.map((projeto) => (
              <a
                key={projeto.nome}
                href={projeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-md w-full rounded-[32px] overflow-hidden border border-purple-200 bg-gradient-to-b from-white to-purple-50 shadow-xl shadow-purple-500/10"
              >
                <div className="h-[170px] overflow-hidden bg-purple-50">
                  <img
                    src={projeto.imagem}
                    alt={projeto.nome}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-zinc-900 hover:text-purple-600 transition">{projeto.nome}</h4>
                  <p className="text-zinc-500 mt-3 leading-relaxed">{projeto.descricao}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="py-28 px-6 bg-purple-50/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="uppercase text-purple-600 font-bold tracking-[0.3em] text-sm">
            Processo
          </span>
          <h3 className="text-5xl font-black mt-6 leading-tight text-zinc-900">
            Simples, estratégico e focado em
            <span className="text-purple-600">{" "}resultados.</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mt-20">
{[
  {
    titulo: 'Entendemos',
    descricao:
      'Analisamos seu negócio, público e objetivos para criar uma estratégia eficiente.',
  },
  {
    titulo: 'Planejamos',
    descricao:
      'Definimos a estrutura da página, organização dos conteúdos e elementos de conversão.',
  },
  {
    titulo: 'Desenvolvemos',
    descricao:
      'Transformamos o planejamento em uma landing page moderna, responsiva e otimizada.',
  },
  {
    titulo: 'Entregamos',
    descricao:
      'Publicamos o projeto pronto para receber visitantes e gerar oportunidades para sua empresa.',
  },
].map((item, index) => (
  <div
    key={index}
    className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 rounded-[32px] p-10 shadow-sm hover:border-purple-300 hover:shadow-lg transition duration-300"
  >
    <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-black text-white mx-auto shadow-md shadow-purple-600/20">
      0{index + 1}
    </div>

    <h4 className="text-2xl font-bold mt-8 text-zinc-900">
      {item.titulo}
    </h4>

    <p className="text-zinc-500 mt-4 leading-relaxed">
      {item.descricao}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-28 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-purple-50/40 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative text-center border border-purple-200 bg-gradient-to-tr from-purple-600 via-purple-700 to-indigo-700 rounded-[40px] p-16 shadow-2xl shadow-purple-600/10 text-white">
          <h3 className="text-5xl md:text-6xl font-black leading-tight">
            Pronto para ter uma landing page que
            <span className="text-purple-200">{" "}realmente converte?</span>
          </h3>
          <p className="text-purple-100 text-xl mt-8 leading-relaxed max-w-3xl mx-auto">
            Vamos transformar sua ideia em uma presença digital moderna e estratégica.
          </p>
          <button className="mt-12 bg-white hover:bg-purple-50 text-purple-700 transition px-10 py-5 rounded-2xl text-lg font-bold shadow-xl">
            <a href="https://wa.me/5562991420411" target="_blank" rel="noopener noreferrer">
              Vamos conversar
            </a>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-100 py-16 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-500/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="korenet_clean" className="h-30 w-auto" />

          </div>
          <div>
            <h4 className="font-bold text-purple-600 text-lg mb-5">Navegação</h4>
            <div className="space-y-3 text-zinc-500">
              <p><a href="#inicio" className="hover:text-purple-600 transition">Início</a></p>
              <p><a href="#servicos" className="hover:text-purple-600 transition">Serviços</a></p>
              <p><a href="#portfolio" className="hover:text-purple-600 transition">Portfólio</a></p>
              <p><a href="#contato" className="hover:text-purple-600 transition">Contato</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-purple-600 text-lg mb-5">Redes Sociais</h4>
            <div className="flex flex-col gap-3 text-zinc-500">
              <a
                href="https://www.instagram.com/kore_net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@korenet24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition"
              >
                TikTok
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-purple-600 text-lg mb-5">Contato</h4>
            <div className="space-y-3 text-zinc-500">
              <p className="hover:text-purple-600 transition">korenet.comercial@gmail.com</p>
              <p>Goiânia, Goiás - Brasil</p>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-100 mt-16 pt-8 text-center text-purple-400 text-sm">
          © 2026 Korenet. Todos os direitos reservados.
        </div>
      </footer>

      {/* MODAL LOGIN */}
      {showLogin && (
        <div className="fixed inset-0 bg-purple-950/40 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="relative w-[400px] bg-white border border-purple-100 rounded-[32px] p-10 shadow-2xl shadow-purple-600/10">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-5 right-5 text-purple-300 hover:text-purple-600 text-xl transition"
            >
              ✕
            </button>
            <h2 className="text-4xl font-black text-center mb-8">
              <span className="text-zinc-900">Área</span>
              <span className="text-purple-600">{" "}Restrita</span>
            </h2>
            <input type="text" placeholder="Nome" className="w-full mb-5 bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-4 text-zinc-900 outline-none focus:border-purple-500 focus:bg-white transition" />
            <input type="email" placeholder="Email" className="w-full mb-5 bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-4 text-zinc-900 outline-none focus:border-purple-500 focus:bg-white transition" />
            <input type="password" placeholder="Criar senha" className="w-full mb-5 bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-4 text-zinc-900 outline-none focus:border-purple-500 focus:bg-white transition" />
            <input type="password" placeholder="Confirmar senha" className="w-full mb-6 bg-purple-50/50 border border-purple-100 rounded-2xl px-5 py-4 text-zinc-900 outline-none focus:border-purple-500 focus:bg-white transition" />
            <button className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition shadow-md shadow-purple-600/20">
              Criar conta
            </button>
          </div>
        </div>
      )}
    </div>
  )
}