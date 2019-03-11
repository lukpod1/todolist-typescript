import readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//declaração da lista
let listTask = new Array();

//funcao para adicionar
let addTask = () => {
  console.log("Adicionando Tarefa...\n");
  rl.question("Digite uma tarefa:", task => {
    listTask.push(task);

    rl.question("Deseja adicionar outra tarefa? (1:y) (2:n)\n", ask => {
      if (ask == "1" || ask == "y") {
        addTask();
      } else if (ask == "2" || ask == "n") {
        showTasks();
      } else {
        console.log("Opção inválida");
        addTask();
      }
    });
  });
};

//funcao para deletar
let deleteTask = () => {
  console.log("Deletando Tarefa..\n");
  rl.question("Digite a tarefa que deseja remover: ", task => {

    let index = listTask.indexOf(task);
    console.log("Encontrou a tarefa " + task);
    
    if (index > -1) {
      listTask.splice(index, 1);
      console.log(task + " foi apagado da Lista");
      showTasks();
    } else {
      console.log("tarefa não existe, tente novamente");
      deleteTask();
    }
  });
};

//funcao para editar
let updateTask = () => {
    console.log("Editando tarefa...\n");

    let update = (task: string) => {
        return (task == listTask.toString())
    }

    rl.question("Digite a tarefa que deseja editar: ", (task) => {

        let aux = listTask.filter(update);

        if (aux) {
            rl.question("\nDigite o novo nome para a tarefa: " + aux, (taskEdit) => {
                let indexItem = listTask.indexOf(task);
                listTask.splice(indexItem, 1)
                listTask.splice(indexItem, 0, taskEdit)
                showTasks()
            })
        } else {
            console.log("Tarefa não existe, tente novamente");      
        }
    })
};

//funcao para mostrar os elementos da lista
let showTasks = () => {
  console.log("Bem Vindo ao todoList em Typescript");
  console.log("\nLista de Tarefas:\n");
  listTask.forEach(showlist => {
    console.log(showlist);
  });
  console.log();
  menu();
};

//funcao para o menu do todolist
let menu = () => {
  console.log("Menu:\n");
  
  rl.question("(1:Add) (2:Delete) (3:update) (4:sair)\n", op => {
    if (op == "1") {
      addTask();
    } else if (op == "2") {
      deleteTask();
    } else if (op == "3") {
      updateTask();
    } else if (op == "4") {
      rl.close();
    } else {
      console.log("Opção inválida");
      menu();
    }
  });
};

// inicialização do todolist

menu();
