import { atom } from 'recoil'

export const taskState = atom({
    key:'taskState',
    default: [{id: Date.now(), text: 'Tarefa 1', done: false}]
});