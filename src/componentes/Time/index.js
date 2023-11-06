import Colaborador from "../Colaborador"
import "./Time.css"
import hexToRgba from 'hex-to-rgba'
import { v4 as uuidv4 } from 'uuid'


const Time = (props) => {
    const estiloCss = { backgroundColor: hexToRgba(props.cor, '0.75') }
  
    return (
        props.colaboradores.length > 0 && <section className="time" style={estiloCss} >
            <input type="color" onChange={evento => props.mudarCor(evento.target.value, props.id)} className="input-cor" value={props.cor} />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => {   

                    return (<Colaborador   
                        key={uuidv4()}
                        colaborador={colaborador}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar} 
                        aoFavoritar={props.aoFavoritar}
                        />
                        )
                    }
                )}
            </div>
        </section>
    )
}

export default Time