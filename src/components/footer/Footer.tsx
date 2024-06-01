import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    const { usuario } = useContext(AuthContext)

    let footerComponent

    let data = new Date().getFullYear()

    if (usuario.token !== '') {
        footerComponent = (

            <div className="flex justify-center bg-slate-800  text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Loja de Games Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/conteudoGeneration" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )

    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer