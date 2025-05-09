import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModels";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handeCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      date: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining: secondsRemaining, //conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return {...task, interruptDate: Date.now()};
          }
          return task;
        })
      };
    });
  }

  return (
      <form onSubmit={handeCreateNewTask} className='form' action=''>
        <div className="formRow">
          <DefaultInput 
            id='meuInput' 
            type='text' 
            labelText='Task' 
            placeholder='Digite a tarefa'
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className="formRow">
          <p>Próximo intervalo é de 25min.</p>
        </div>

        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}
        
        <div className="formRow">
          {!state.activeTask ? (
            <DefaultButton 
              aria-label="Iniciar nova tarefa" 
              title="Iniciar nova tarefa" 
              type="submit" 
              icon={<PlayCircleIcon />}
              key='botão de submit'
            />
          ):(
            <DefaultButton 
              aria-label="Interromper tarefa atual" 
              title="Interromper tarefa atual" 
              type="button" 
              color="red" 
              icon={<StopCircleIcon />} 
              onClick={handleInterruptTask}
              key='botão de interrupt'
            />
          )}
          
        </div>
      </form>
  )
}