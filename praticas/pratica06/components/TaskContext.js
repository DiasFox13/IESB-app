import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ Children }) {
    const [tarefas, setTarefas] = useState([]);
    const adicionar = (nomeTarefa) => {
        setTarefas([...tarefas, { id:Date.now(), nome:nomeTarefa, concluida:false }]);
    }
    const concluir = (idTarefa) => {
        setTarefas(tarefas.map((tarefa) => tarefa.id != idTarefa));
    }
    const remover = (idTarefa) => {
        setTarefas(tarefas.filter((tarefa) => tarefa.id != idTarefa));
    }
    return (
        <TaskContext.Provider
            value={{ tarefas, adicionar, concluir, remover }}>
                {Children}
            </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider };