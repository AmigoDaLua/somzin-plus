// AiFlillCloseCircle é um componente da biblioteca React Icons
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Colaborador.css"


const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    // Objeto que contém as props dos ícones de Favorito
      const propsFavorito = {
        size: 25,
        onClick: favoritar,
        cursor: "pointer"
    }


    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25} 
                className="deletar"
                style={{cursor: "pointer"}} 
                onClick={() => aoDeletar(colaborador.id)
                } 
            />
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color="#ff0000"/> 
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador