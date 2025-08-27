const url='https://raw.githubusercontent.com'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json


async function visualizarInformacoesGlobais() {

    const resposta = await fetch(url)

    const dados = await resposta.json() 

    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    
}