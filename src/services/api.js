export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar React.js",
          labels: ["#7159c1"],
        },
        {
          id: 2,
          content: "Fazer ao menos uma publicação semanal no Linkedin",
          labels: ["#7159c1"],
        },
        {
          id: 3,
          content: "Estudar|POO",
          labels: ["#7159c1"],
        },
        {
          id: 4,
          content: "Continuar projetos pessoais!",
          labels: ["#54e1f7"],
        },
        {
          id: 5,
          content: "Criar um portfólio ",
          labels: ["#54e1f7"],
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Criando projeto To-do",
          labels: [],
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Projeto Hut8",
          labels: ["#7159c1"],
        },
        {
          id: 8,
          content: "Apresentação empresa",
          labels: ["#54e1f7"],
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Apreder mais sobre HTML e CSS",
          labels: [],
        },
        {
          id: 12,
          content:
            "Melhorar plataformas comerciais (Linkedin, Curriculo, Github",
          labels: ["#54e1f7"],
        },
        {
          id: 13,
          content: "Fazer read.me nos projetos!",
          labels: ["#7159c1"],
        },
      ],
    },
  ];
}
