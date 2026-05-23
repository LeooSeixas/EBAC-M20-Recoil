import NovaTarefa from "../components/NovaTarefa";
import Filter from "../components/Filter.jsx";
import { useRecoilValue } from 'recoil';
import '../App.css'
import { filterState } from "../atoms/filterState.js";
import Structure from "../components/structure.jsx";


function ListaTarefas () {
    const filter = useRecoilValue(filterState);

    const filterToDone = {
        'pendent': false,
        'done': true,
    };
    
    return(
        <div className="container-geral ">
            <NovaTarefa/>
            <p>Filtrar por: </p>
            <Filter/>
            {filter === 'all' ?
                (
                <>
                    <Structure done={false}/>
                    <Structure done={true}/>
                </>
                ) 
                : (
                    <Structure done={filterToDone[filter]}/>
                )
            }
        </div>
    )
}

export default ListaTarefas