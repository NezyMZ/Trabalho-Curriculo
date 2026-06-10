import Header from "./components/Header"
import Sobre from "./components/Sobre";
import CardExperiencia from "./components/CardExperiencia"
import Formacao from "./components/Formacao";
import Cursos from "./components/Cursos";

function App() {

    const experiencias = [
        {
            id: 1,
            empresa: "Araripe & Associados",
            cargo: "Área Administrativa - Analista Suporte TI",
            tempo: "15/01/24 - 30/01/26",
            descricao: [
                {
                    id: 1,
                    texto: "Atendimento a usuários, diagnóstico e resolução de problemas."
                },
                {
                    id: 2,
                    texto: "Apoio às rotinas administrativas e elaboração de relatórios."
                }
            ]
        },
        {
            id: 2,
            empresa: "BRAZILINE LTDA",
            cargo: "Logística",
            tempo: "08/11/21 - 14/09/22",
            descricao: [
                {
                    id: 1,
                    texto: "Controle e organização de estoque."
                },
                {
                    id: 2,
                    texto: "Administração de processos logísticos."
                }
            ]
        }
    ];

    const formacao = [
        {   
            id: 1,
            instituicao: "C.E Dom Pedro II",
            curso: "Ensino Médio Completo",
            tempo: "2020 - 2022"
        },
        {
            id: 2,
            instituicao: "Faculdade Descomplica",
            curso: "Analise e Desenvolvimento de Sistemas",
            tempo: "2025 - 2027"
        },
        {
            id: 3,
            instituicao: "Serratec",
            curso: "Desenvolvedor FullStack",
            tempo: "Mar/2026 - Jul/2026"
        }
    ]

    const cursos = [
        {
            id:1,
            curso: "Suporte TI - Google",
            tempo: "Novembro/2025"
        }
    ]

    return (
        <div className="curriculo">
            <Header
                nome="Maicon Muniz"
                email="maiconnvr@hotmail.com"
                dataNascimento="10/11/2002"
                endereco="Quarteirão Brasileiro, Rio de Janeiro, Petrópolis"
            />
            <h1>Sobre mim</h1>
            <Sobre />

            <h1>Experiência Profissional</h1>
            {experiencias.map((exp) => (
                <CardExperiencia key={exp.id}
                empresa={exp.empresa}
                cargo={exp.cargo}
                tempo={exp.tempo}
                descricao={exp.descricao}
                />
            ))}

            <h1>Histórico Académico</h1>
            {formacao.map((form)=>(
                <Formacao key={form.id}
                instituicao={form.instituicao}
                curso={form.curso}
                tempo={form.tempo}
                />
            ))}

            <h1>Cursos</h1>
            {cursos.map((curso)=>(
                <Cursos key={curso.id}
                curso={curso.curso}
                tempo={curso.tempo}
                />
            ))}
        </div>
    );
}

export default App;