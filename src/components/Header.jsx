import { useState } from "react";
import fotoPerfil from "../assets/Foto_Trabalho.png";


function Header({nome, dataNascimento, email, endereco}){
    const [mostrarDados, setMostrarDados] = useState(false);

    return(
        
        <header>
            <img src={fotoPerfil} alt={`Foto de ${nome}`} />

            <div>
            <h1>{nome}</h1>

            <button onClick={() => setMostrarDados(!mostrarDados)}>
                {mostrarDados ? "Ocultar Dados Pessoais" : "Mostrar Dados Pessoais"}
            </button>

            {mostrarDados && (
                <>
                    <p><strong>Data Nascimento:</strong> {dataNascimento}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Endereço:</strong> {endereco}</p>
                </>
            )}
            </div>
        </header>
    );
}

export default Header;