import { BsStars } from 'react-icons/bs'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center">
      <h1 className="w-[70%] text-[#212121] text-5xl font-semibold">
        Crie questões inteligentes com a ajuda da IA — ou escreva-as do seu
        jeito, do zero.
      </h1>

      <p className="w-[55%] text-xl text-[#606060]">
        Seja você um educador, criador de conteúdo ou entusiasta, nossa
        ferramenta lhe dá a flexibilidade de gerar, editar e organizar questões
        sem esforço — com tecnologia de IA ou com suas próprias mãos.
      </p>

      <div className="flex items-center gap-4">
        <button
          className="flex items-center justify-center w-fit h-14 gap-2 p-4 rounded-full text-lg text-white bg-[#242424] hover:bg-[#303030] hover:shadow 
          hover:shadow-black/5 cursor-pointer transition-colors"
        >
          <BsStars className="text-2xl" />
          Criar com IA
        </button>
        <button
          className="flex items-center justify-center w-fit h-14 p-4 rounded-full text-lg border border-transparent text-[#606060]
          hover:text-[#242424] hover:bg-white hover:border-[#E1E1E1] hover:shadow hover:shadow-black/5 cursor-pointer transition-colors"
        >
          Crie manualmente
        </button>
      </div>
    </div>
  )
}

export default Home
