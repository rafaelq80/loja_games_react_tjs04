﻿import { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { atualizar, listar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import CardProdutos from '../cardprodutos/CardProdutos';

function ListarProdutos() {

  const navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarProdutos() {

    try {
      await listar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  // Função Curtir
  async function curtir(id: number) {

    try {
      await atualizar(`/produtos/curtir/${id}`, produto, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      } else {
        ToastAlerta('Erro ao Curtir Produto!', 'erro')
      }
    }

    navigate('/home')
  }
  
  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  // Quando a função curtir for acionada, 
  // Os Cards com os produtos serão recarregados na tela
  useEffect(() => {
    buscarProdutos();
  }, [curtir]);

  return (
    <>

      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} curtir={curtir}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;