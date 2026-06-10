import { useState } from 'react'
import logo from './assets/korenet_grafi.png'

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
    <div className="bg-black text-white min-h-screen overflow-hidden font-sans">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-700/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-fuchsia-700/20 blur-3xl rounded-full"></div>
      </div>

      {/* HEADER */}
      <header id="inicio" className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <img
              src={logo}
              alt="korenet_grafi"
              className="h-30 w-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]"
            />
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
            <a href="#inicio" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-500 after:transition-all after:duration-500 hover:after:w-full">
              Início
            </a>
            <a href="#servicos" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-500 after:transition-all after:duration-500 hover:after:w-full">
              Serviços
            </a>
            <a href="#portfolio" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-500 after:transition-all after:duration-500 hover:after:w-full">
              Portfólio
            </a>
            <a href="#processo" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-500 after:transition-all after:duration-500 hover:after:w-full">
              Processo
            </a>
            <a href="#contato" className="relative text-white/80 hover:text-purple-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-fuchsia-500 after:transition-all after:duration-500 hover:after:w-full">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-500 overflow-hidden border border-white/10 ${
              open ? 'bg-white shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'bg-transparent'
            }`}
          >
            {/* TEXTO */}
            <div className={`overflow-hidden transition-all duration-500 whitespace-nowrap ${open ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  setShowLogin(true)
                }}
                className="text-purple-600 font-semibold tracking-wide cursor-pointer hover:text-purple-400 transition"
              >
                Acesso restrito
              </span>
            </div>

            {/* HAMBURGUER */}
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-purple-600' : 'bg-white'}`}></span>
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-purple-600' : 'bg-white'}`}></span>
              <span className={`w-7 h-[2.5px] rounded-full transition-all duration-300 ${open ? 'bg-purple-600' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="uppercase text-purple-400 tracking-[0.3em] text-sm">
              Landing pages que convertem
            </span>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mt-6">
              Transformamos ideias em
              <span className="text-purple-500">{" "}landing pages</span>
              <br />
              que geram resultados.
            </h2>

            <p className="text-white/60 text-lg mt-8 leading-relaxed max-w-xl">
              Criamos páginas modernas, rápidas e estratégicas para empresas que desejam crescer no mundo digital.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#7b2cbf] hover:bg-[#9333ea] transition px-8 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                <a href="https://wa.me/5562991420411" target="_blank" rel="noopener noreferrer">
                  Vamos conversar
                </a>
              </button>

              <a href="#portfolio" className="border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 transition px-8 py-4 rounded-2xl font-semibold">
                Ver projetos
              </a>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute w-[700px] h-[700px] bg-purple-700/20 blur-3xl rounded-full"></div>

            {/* NOTEBOOK */}
            <div className="relative z-10">
              {/* Corpo notebook */}
              <div className="w-[700px] h-[430px] rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-purple-900/40 to-black backdrop-blur-2xl shadow-[0_0_80px_rgba(168,85,247,0.25)] p-4">
                {/* Tela */}
                <div className="w-full h-full bg-black rounded-[24px] overflow-hidden border border-white/10">
                  {/* Barra */}
                  <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-10">
                    <div className="h-6 w-52 bg-purple-500/30 rounded-full mb-8"></div>
                    <div className="h-16 w-full bg-white/10 rounded-2xl mb-5"></div>
                    <div className="h-16 w-4/5 bg-white/10 rounded-2xl mb-12"></div>
                    <div className="grid grid-cols-3 gap-5 mb-12">
                      <div className="h-40 rounded-3xl bg-purple-500/20"></div>
                      <div className="h-40 rounded-3xl bg-white/5"></div>
                      <div className="h-40 rounded-3xl bg-white/5"></div>
                    </div>
                    <div className="h-14 w-56 bg-gradient-to-r from-purple-700 to-fuchsia-500 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Base notebook */}
              <div className="w-[760px] h-6 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 rounded-b-full mx-auto shadow-2xl"></div>
            </div>

            {/* CELULAR */}
            <div className="absolute bottom-[-40px] right-[-20px] z-20">
              <div className="w-[190px] h-[390px] rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-900/50 to-black backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.35)] p-3">
                {/* Tela celular */}
                <div className="w-full h-full bg-black rounded-[30px] overflow-hidden border border-white/10">
                  {/* topo */}
                  <div className="flex justify-center pt-3">
                    <div className="w-20 h-2 rounded-full bg-white/10"></div>
                  </div>

                  {/* conteúdo */}
                  <div className="p-5">
                    <div className="h-4 w-24 bg-purple-500/30 rounded-full mb-5"></div>
                    <div className="h-12 w-full bg-white/10 rounded-2xl mb-4"></div>
                    <div className="h-12 w-4/5 bg-white/10 rounded-2xl mb-8"></div>
                    <div className="grid grid-cols-3 gap-3 mb-8">
                      <div className="h-24 rounded-2xl bg-purple-500/20"></div>
                      <div className="h-24 rounded-2xl bg-white/5"></div>
                      <div className="h-24 rounded-2xl bg-white/5"></div>
                    </div>
                    <div className="h-12 w-full bg-gradient-to-r from-purple-700 to-fuchsia-500 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-y border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <a href="https://solarabanhoecuidado.com.br/" target="_blank" rel="noopener noreferrer">
            <img src="/solara_white.png" alt="SOLARA BANHO E CUIDADO" className="mx-auto w-40 h-auto object-contain"/>
          </a>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-400 tracking-[0.3em] text-sm">
              Diferenciais
            </span>

            <h3 className="text-5xl font-black mt-6 leading-tight">
              Mais que design,
              <span className="text-purple-500">{" "}estratégia que converte.</span>
            </h3>

            <p className="text-white/60 mt-8 text-lg leading-relaxed">
              Criamos landing pages focadas em performance, experiência e resultados reais.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-20">
            {[
              'Foco em conversão',
              'Visual moderno',
              'Alta performance',
            ].map((item, index) => (
              <div
                key={index}
                className="w-full md:max-w-[380px] bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl hover:-translate-y-2 transition duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-purple-600 flex items-center justify-center text-2xl font-black shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  0{index + 1}
                </div>

                <h4 className="text-3xl font-bold mt-8">
                  {item}
                </h4>

                <p className="text-white/50 mt-5 leading-relaxed">
                  Landing pages criadas para transformar visitantes em clientes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="servicos" className="py-28 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-400 tracking-[0.3em] text-sm">
              Quem atendemos
            </span>

            <h3 className="text-5xl font-black mt-6 leading-tight">
              Negócios que precisam de uma
              <span className="text-purple-500">{" "}presença digital profissional.</span>
            </h3>

            <p className="text-white/60 mt-8 text-lg leading-relaxed">
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
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:-translate-y-2 hover:border-purple-500/30 transition duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mt-6">{item.title}</h4>
                <p className="text-white/50 mt-4">{item.description}</p>
              </div>
            ))}

            {/* CARD GIGANTE */}
            <div className="md:col-span-3 rounded-[40px] border border-purple-500/20 bg-gradient-to-r from-purple-900/20 via-black to-fuchsia-900/20 p-14 text-center backdrop-blur-xl hover:border-purple-500/40 transition duration-500">
              <h4 className="text-5xl font-black">Seu negócio é diferente?</h4>
              <p className="text-white/60 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
                Não encontrou seu segmento acima? Sem problemas. Entendemos como sua empresa atrai clientes e desenvolvemos uma solução personalizada para a sua realidade.
              </p>
              <a
                href="https://wa.me/5562991420411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="uppercase text-purple-400 tracking-[0.3em] text-sm">
              Portifólio
            </span>
            <h3 className="text-5xl font-black mt-6 leading-tight">
              Projetos que entregam
              <span className="text-purple-500">{" "}resultados reais.</span>
            </h3>
          </div>

          <div className="flex justify-center mt-20">
            {projetos.map((projeto) => (
              <a
                key={projeto.nome}
                href={projeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-md w-full rounded-[32px] overflow-hidden border border-white/10 bg-black hover:-translate-y-2 transition duration-500"
              >
                <div className="h-[280px] overflow-hidden">
                  <img
                    src={projeto.imagem}
                    alt={projeto.nome}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold">{projeto.nome}</h4>
                  <p className="text-white/50 mt-3 leading-relaxed">{projeto.descricao}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="uppercase text-purple-400 tracking-[0.3em] text-sm">
            Processo
          </span>
          <h3 className="text-5xl font-black mt-6 leading-tight">
            Simples, estratégico e focado em
            <span className="text-purple-500">{" "}resultados.</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              'Entendemos',
              'Planejamos',
              'Desenvolvemos',
              'Entregamos'
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">
                <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-black mx-auto shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  0{index + 1}
                </div>
                <h4 className="text-2xl font-bold mt-8">{item}</h4>
                <p className="text-white/50 mt-4 leading-relaxed">
                  Processo pensado para criar páginas modernas e profissionais.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-fuchsia-700/20 to-purple-900/40"></div>
        <div className="max-w-5xl mx-auto relative text-center border border-white/10 bg-black/40 backdrop-blur-2xl rounded-[40px] p-16 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
          <h3 className="text-5xl md:text-6xl font-black leading-tight">
            Pronto para ter uma landing page que
            <span className="text-purple-500">{" "}realmente converte?</span>
          </h3>
          <p className="text-white/60 text-xl mt-8 leading-relaxed max-w-3xl mx-auto">
            Vamos transformar sua idea em uma presença digital moderna e estratégica.
          </p>
          <button className="mt-12 bg-purple-600 hover:bg-purple-500 transition px-10 py-5 rounded-2xl text-lg font-semibold shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            <a href="https://wa.me/5562991420411" target="_blank" rel="noopener noreferrer">
              Vamos conversar
            </a>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="korenet_grafi" className="h-30 w-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.45)]" />
            <p className="text-white/50 mt-5 leading-relaxed">
              Criamos landing pages estratégicas para negócios digitais.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Navegação</h4>
            <div className="space-y-3 text-white/50">
              <p><a href="#inicio">Início</a></p>
              <p><a href="#servicos">Serviços</a></p>
              <p><a href="#portfolio">Portfólio</a></p>
              <p><a href="#contato">Contato</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Redes Sociais</h4>
            <div className="flex flex-col gap-3 text-white/50">
              <a
                href="https://www.instagram.com/kore_net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition"
              >
              Instagram
              </a>

              <a
                href="https://www.tiktok.com/@korenet24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 transition"
              >
                TikTok
              </a>
</div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Contato</h4>
            <div className="space-y-3 text-white/50">
              <p>korenet.comercial@gmail.com</p>
              <p>Goiânia, Goiás - Brasil</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/30 text-sm">
          © 2026 Korenet. Todos os direitos reservados.
        </div>
      </footer>

      {/* MODAL LOGIN */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="relative w-[400px] bg-zinc-950 border border-purple-500/20 rounded-[32px] p-10 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white text-xl"
            >
              ✕
            </button>
            <h2 className="text-4xl font-black text-center mb-8">
              <span className="text-white">Área</span>
              <span className="text-purple-500">{" "}Restrita</span>
            </h2>
            <input type="text" placeholder="Nome" className="w-full mb-5 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition" />
            <input type="email" placeholder="Email" className="w-full mb-5 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition" />
            <input type="password" placeholder="Criar senha" className="w-full mb-5 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition" />
            <input type="password" placeholder="Confirmar senha" className="w-full mb-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-purple-500 transition" />
            <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-fuchsia-500 font-semibold hover:scale-[1.02] transition shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              Criar conta
            </button>
          </div>
        </div>
      )}
    </div>
  )
}