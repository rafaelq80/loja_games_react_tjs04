﻿import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { ToastAlerta } from "../../utils/ToastAlerta";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('Usuário desconectado!', 'info')
        navigate('/')

    }

    let navbarComponent

    if (usuario.token !== "") {
        navbarComponent = (

            <div className='
            w-full 
            bg-slate-800  
            text-white 
            flex 
            justify-center 
            py-4
        '>
                <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                    <Link to='/home'>
                        <img
                            src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                            alt="Logo"
                            className='w-60'
                        />
                    </Link>

                    <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                        <form className="w-3/4 flex justify-center">
                            <input className="w-10/12 h-9 rounded-lg px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                <MagnifyingGlass size={14} weight="bold" />
                            </button>
                        </form>
                    </div>

                    <div className='flex gap-4 py-4'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                        <Link to='/perfil'><User size={32} weight='bold' /></Link>
                        <Link to='/cart'><ShoppingCart size={32} weight='bold' /></Link>
                    </div>
                </div>
            </div>

        )
    }
        return (

            <>
                {navbarComponent}
            </>

        )
    }

    export default Navbar