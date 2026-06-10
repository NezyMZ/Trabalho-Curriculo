function CardExperiencia({ empresa, cargo, tempo, descricao }) {
    return (
        <section className="experiencia">
            <h2>{empresa}</h2>

            <p className="cargo">{cargo}</p>

            <p className="tempo"><strong>Duração: </strong>{tempo}</p>

            <ul>
                {descricao.map((item) => (
                    <li key={item.id}>{item.texto}</li>
                ))}
            </ul>
        </section>
    );
}

export default CardExperiencia;