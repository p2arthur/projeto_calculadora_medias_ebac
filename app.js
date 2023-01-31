"use strict";
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
const form = document.getElementById("form-atividade");
const objetosNotas = [];
const inputAtividade = document.getElementById("nome-atividade");
const inputNota = document.getElementById("nota-atividade");
const tableBody = document.querySelector("tbody");
const resultadoFinal = document.getElementById("resultado-final");
const mediaMinima = 6;
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
const adicionaLinha = () => {
  objetosNotas.push({
    atividade: inputAtividade.value,
    nota: parseFloat(inputNota.value),
  });

  const atividadeRowTemplate = `
  <tr>
    <td>${inputAtividade.value}</td>
    <td>${inputNota.value}</td>
    <td>${inputNota.value >= mediaMinima ? "🥳" : "😢"}</td>
  </tr>`;

  tableBody.insertAdjacentHTML("beforeend", atividadeRowTemplate);

  alert(
    `Nota adicionada com sucesso! Atividade: ${inputAtividade.value} - Nota: ${inputNota.value}`
  );
};
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
const calculaMediaFinal = function () {
  const mediaFinal =
    objetosNotas.reduce(
      (accumulator, atividade) => accumulator + atividade.nota,
      0
    ) / objetosNotas.length;

  return mediaFinal;
};
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
const atualizaMediaFinal = function () {
  const mediaFinal = calculaMediaFinal();

  const resultadoRowTemplate = `
    <td>Média Final</td>
    <td>${mediaFinal.toFixed(2)}</td>
    <td> <span class="resultado ${
      mediaFinal >= mediaMinima ? "aprovado" : "reprovado 😢"
    }">${mediaFinal >= mediaMinima ? "Aprovado 🥳" : "Reprovado 😢"}</span></td>
    `;

  resultadoFinal.innerHTML = resultadoRowTemplate;
};
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionaLinha();
  atualizaMediaFinal();
  inputAtividade.value = "";
  inputNota.value = "";
});
