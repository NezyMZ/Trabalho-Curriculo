function Cursos({curso, tempo}){
    return(
        <section className="cursos">
                <h2>{curso}</h2>
                <p><strong>Conclusão: </strong>{tempo}</p>
        </section>
    );
}

export default Cursos;