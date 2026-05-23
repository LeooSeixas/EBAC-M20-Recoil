import useInput from "../hooks/useInput";
import { useRecoilState } from "recoil";
import { taskState } from "../atoms/taskState.js";

function NewTask() {
    const input = useInput('');
    const [tasksList, setTask] = useRecoilState(taskState)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newId = Date.now();
        
        const newTesk = {
            id: newId,
            text: input.value,
            done: false,
        }
        if(input.value === '' || input.value.length <= 1){
            alert('Campo nova tarefa vazio ou incorreto!')
            return;
        }
        setTask([...tasksList, newTesk])
        input.limpar();
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <input type='text' 
                placeholder="Digite uma tarefa"
                value = {input.value}
                onChange={input.onChange}
            />
            <button type="submit">Adicionar tarefa</button>
            </form>
        </>
    )
}

export default NewTask