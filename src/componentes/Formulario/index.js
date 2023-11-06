import { useState } from "react"
import "./Formulario.css"
import Campo from '../Campo';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    // Form Criar Card
    const [nome, setNome] = useState("") // <----- Cada um dos campos/estados a serem monitorados
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    // Form Adicionar Time/Estilo Musical
    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("#000000")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            "id": uuidv4(),
            "nome": nome,
            "cargo": cargo,
            "imagem":imagem,
            "time": time,
            "favorito": false
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="formulario">
                <form onSubmit={aoSalvar}>
                    <h2>Gosta de um somzin? Então preencha os campos abaixo e diz qual é o seu favorito!</h2>
                    <Campo 
                        label="Nome" 
                        required={true} 
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <Campo 
                        label="Ocupação" 
                        required={true} 
                        placeholder="Digite sua ocupação"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <Campo 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa 
                        label="Time" 
                        required={true} 
                        itens={props.times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                        />
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
                <form onSubmit={(evento) => {
                    //No click, recebe o evento de submissão do form:

                    // Prevenindo recarregamento da página
                    evento.preventDefault();

                    // Executando a função cadastrarTime com as
                    // informações que vieram dos campos deste form:
                    props.cadastrarTime({ nome: nomeTime, cor: corTime})

                    // Limpando os campos 
                    setNomeTime("")
                    setCorTime("#000000")
                }}>
                    <h2>Teu som favorito não tá na lista? É só criar um novo Time:</h2>
                      <Campo 
                        label="Gênero Musical" 
                        required
                        placeholder="Que som é esse?"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />
                    <Campo 
                        label="Cor"
                        type="color" 
                        required
                        placeholder="Digite a cor pra essa turma"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar Time
                    </Botao>
                </form>
        </section>
    )
}

export default Formulario