import { selectorFamily } from 'recoil';
import { filteredTasksSelector } from "./filteredTasksSelector";

export const taskCounter = selectorFamily({
    key: 'taskCounter',
    get: (props) => ({get}) => {
        const tasks = get(filteredTasksSelector);
        const filteredTasks = tasks.filter(task => task.done === props); 
        return filteredTasks
    }
})