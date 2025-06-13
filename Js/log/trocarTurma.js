function atualizarTurmas() {
  const ano = document.getElementById('ano').value;
  const turmaSelect = document.getElementById('turma');

  // Limpa opções anteriores
  turmaSelect.innerHTML = '<option value="">Selecione a turma</option>';

  const turmasPorAno = {
    "1": ["1 - Informática", "1 - Logistica"],
    "2": ["2 - Informática", "2 - Propedeutico"],
    "3": ["3 - Informática 1", "3 - Informática 2", "3 -Propedeutico"]
  };

  if (turmasPorAno[ano]) {
    turmasPorAno[ano].forEach(turma => {
      const option = document.createElement('option');
      option.value = turma;
      option.textContent = turma;
      turmaSelect.appendChild(option);
    });
  }
}

function salvarDados() {
  const nome = document.getElementById('nome').value.trim();
  
  const ano = document.getElementById('ano').value;
  const turma = document.getElementById('turma').value;

  if (!nome || !ano || !turma) {
    alert('Preencha todos os campos.');
    return;
  }

  localStorage.setItem('aluno_nome', nome);
  localStorage.setItem('aluno_ano', ano);
  localStorage.setItem('aluno_turma', turma);

  
  //! 1° INFORMÁTICA
  if (ano === "1" && turma === "1 - Informática") {	

    window.location.href = "../../turma/1/informatica/index.html"; //!  redireciona para o índex da turma

  }
//! 1° LOGISTICA
  
  else if (ano === "1" && turma === "1 - Logistica") {

    window.location.href = "../../turma/1/logisitica/index.html"; //! redireciona para o  índex da turma
  }
  
//! 2° INFORMÁTICA
  else if (ano === "2" && turma === "2 - Informática") {

    window.location.href = "../../turma/2/informatica/index.html"; //! redireciona para o  índex da turma
  }
//! 2° PROPEDEUTICO
  
  else if (ano === "2" && turma === "2 - Propedeutico") {

    window.location.href = "../../turma/2/propedeutico/index.html"; //! redireciona para o  índex da turma
  }
//! 3° INFORMÁTICA
  
  else if (ano === "3" && turma === "3 - Informática 1") {

    window.location.href = "../../turma/3/informatica1/index.html"; //! redireciona para o  índex da turma
  }
  
//! 3° INFORMÁTICA
  else if (ano === "3" && turma === "3 - Informática 2") {

    window.location.href = "../../turma/3/informatica2/index.html"; //! redireciona para o  índex da turma

  }
  
//! 3° PROPEDEUTICO
  else if (ano === "3" && turma === "3 -Propedeutico") {

    window.location.href = "../../turma/3/propedeutico/index.html"; //! redireciona para o  índex da turma 
  }  }



