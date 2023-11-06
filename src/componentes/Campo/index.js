import "./Campo.css"

const Campo = (props) => {

    const placeholderModificado = `${props.placeholder}`

    // Observando a alteração do campo:
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className={`campo campo-${props.type}`}>
            <label>
                {props.label}
            </label>
            <input 
            type={props.type}  
            value={props.valor} 
            onChange={aoDigitar} 
            required={props.required} 
            placeholder={placeholderModificado}/>
        </div>
    )
}

export default Campo