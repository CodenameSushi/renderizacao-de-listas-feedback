import { ListaContainer, TarefaCompleta, } from "../ListaTarefas/styled";

export function TarefasCompletas(props) {
    return (

    <ListaContainer>
      <ul>
          {props.listaDeletada.map((tarefa, index) =>{
            return (
              <TarefaCompleta key={index}>
                <p>{tarefa}</p>
              </TarefaCompleta>
            );
          })}
        </ul>
      </ListaContainer>

)}