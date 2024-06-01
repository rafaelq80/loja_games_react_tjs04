import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {

  let navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate("/")
    }
  }, [usuario.token])


  return (
    <div className='container mx-auto  rounded-2xl overflow-hidden'>
      <img className='w-full mt-4 h-72 object-cover border-b-8 border-white rounded-t-2xl' src="https://ik.imagekit.io/vzr6ryejm/games/fundo_lg?updatedAt=1705978107776" alt="Capa do Perfil" />
      <img src={usuario.foto} alt="Foto de perfil" className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-5rem] mb-4 h-72 flex flex-col bg-slate-600 text-white text-2xl items-center justify-center rounded-b-2xl">
        <p>{usuario.nome} </p>
        <p>{usuario.usuario}</p>
      </div>
    </div>
  )
}

export default Perfil