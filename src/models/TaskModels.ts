import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    date: number;
    completeDate: number | null;
    interruptDate: number | null;
    duration: number;
    type: keyof TaskStateModel['config'];
};