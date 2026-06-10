function Formacao({instituicao,curso, tempo}){
    return(
        <section className="formacao">
                <h2>{instituicao}</h2>
                <h4>{curso}</h4>
                <p><strong>Conclusão: </strong>{tempo}</p>
        </section>
    );
}

export default Formacao;