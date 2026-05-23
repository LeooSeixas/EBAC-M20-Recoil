import { selector } from "recoil";
import { taskState } from "../atoms/taskState";
import { filterState } from "../atoms/filterState";

export const filteredTasksSelector = selector({
    key: 'filteredTasksSelector',
    get: ({get}) => {
        const tasklist = get(taskState);
        const filter = get(filterState);

        if (filter === 'done') return tasklist.filter(task => task.done);
        if (filter === 'pendent') return tasklist.filter(task => !task.done);
        return tasklist;
    }
})