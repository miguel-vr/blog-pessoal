import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core"
import './CadastroTema.css';
import { useNavigate, useParams } from "react-router-dom";
import Tema from '../../../models/Tema';
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function CadastroTema() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  })

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate('/login')
    }
  }, [token])

  async function findById(id: String) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }
  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("tema " + JSON.stringify(tema))

    if (id !== undefined) {
      console.log(tema)
      put(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('O Tema foi atualizado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('O Tema fio cadastrado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
    }
    back()
  }

  function back() {
    navigate('/temas')
  }

  return (
    <Container maxWidth='sm' className='topo'>
      <form onSubmit={onSubmit}>
        <Typography variant='h3' color='textSecondary' component="h1" align='center'>Formulário</Typography>
        <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id='descricao' label='descricao' variant='outlined' name='descricao' />
        <Button type='submit' variant='contained' color='primary'>
          Finalizar
        </Button>
      </form>

    </Container>
  )
}

export default CadastroTema