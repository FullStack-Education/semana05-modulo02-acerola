import { adicionarLinha } from './addLinha.js';
import { atualizarMediaGeral } from './mediaGeral.js';

//[M2S05] Ex. 02 - LabScore (Pt.2)
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola?");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

// Confirmar os dados inseridos
let confirmacao = confirm("Confirma os dados inseridos?");

//[M2S05] Ex. 03 - LabScore (Pt.2)
// Atualiza os dados no HTML
if (confirmacao) {
  document.getElementById("nome-aluno").textContent = "Nome: " + nomeAluno;
  document.getElementById("idade-aluno").textContent = "Idade: " + idadeAluno;
  document.getElementById("serie-aluno").textContent = "Serie: " + serieAluno;
  document.getElementById("escola-aluno").textContent = "Escola: " + nomeEscola;
  document.getElementById("materia-preferida").textContent =
    "Matéria Favorita: " + materiaFavorita;
}

//[M2S05] Ex. 04 - LabScore (Pt.2) & Ex. 05
document.querySelector('button').addEventListener('click', () => {
  adicionarLinha();
  atualizarMediaGeral();
});
