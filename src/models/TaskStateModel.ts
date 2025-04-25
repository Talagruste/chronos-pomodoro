import { TaskModel } from "./TaskModels"

export type TaskStateModel = {
    type: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortbreakTime: number;
        longBreakTime: number;
    };
};