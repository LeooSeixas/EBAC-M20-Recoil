import { taskState } from "../atoms/taskState.js";
import { useRecoilValue, useRecoilState } from "recoil";
import Tarefa from "./Tarefa";
import { Fragment } from "react";
import { taskCounter } from "../selectors/taskCounter.js";

function Structure(props){
    
    const [tasksList, setTask] = useRecoilState(taskState);

    const done = (id) => {
        const taskDone = tasksList.map(item => {
            return item.id === id ? {...item, done: true} : item;
        })
        setTask(taskDone);
    }

    const removeItem = (id) => {
        setTask(tasksList.filter(item => item.id !== id));
    };

    const tasks = useRecoilValue(taskCounter(props.done))

    return(
        <>
            {tasks.length > 0 ? (
                <h3>
                    Tarefas {props.done ? 'concluídas: ' : 'pendentes: '} {tasks.length}
                </h3>
            ) : (
                <p>
                    Sem tarefas {props.done ? 'concluídas' : 'pendentes'}
                </p>
            )}
            <ul>
                {tasks.map(task => (
                    <Fragment key={task.id}>
                        <li>
                            <Tarefa text={task.text}/>
                            <button 
                                onClick={task.done ? () => removeItem(task.id) : () => done(task.id)}
                                className={task.done ? 'btn-remove' : 'btn-done'}
                            >
                                {task.done ? 'Remover' : 'Concluida'}
                            </button>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </>
    )
}

export default Structure;