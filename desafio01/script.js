const form = document.querySelector("#registro-pessoa");
const button = document.querySelector("#preencher");
const section = document.querySelector("#show-pessoas");

const pessoas = [];

const updateSection = () => {
  section.innerHTML = "";
  pessoas.forEach((pessoa) => {
    section.innerHTML += `
      <div class="pessoa">
        <p>Nome: ${pessoa.nome}</p>
        <p>CPF: ${pessoa.cpf}</p<
      </div>
    `;
  });
};

const sortByNome = () => {
  pessoas.sort(function (a, b) {
    let nomeA = a.nome.toUpperCase();
    let nomeB = b.nome.toUpperCase(); // ignore upper and lowercase

    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
  });

  updateSection();
};

const sortByCPF = () => {
  pessoas.sort((a, b) => (a.cpf > b.cpf ? 1 : -1));
  updateSection();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pessoa = {
    nome: event.target.nome.value,
    cpf: Number(event.target.cpf.value),
  };

  pessoas.push(pessoa);

  event.target.nome.value = "";
  event.target.cpf.value = "";

  updateSection();
});

button.addEventListener("click", (event) => {
  const nomes = ["Ana", "Bruna", "Juliana", "Maria"];
  const cpfs = [454654, 25, 4564, 123];

  for (let i = 0; i < nomes.length; i++) {
    const pessoa = {
      nome: nomes[i],
      cpf: cpfs[i],
    };
    pessoas.push(pessoa);
  }

  updateSection();
});
