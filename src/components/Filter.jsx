import { filterState } from "../atoms/filterState"
import { useRecoilState } from "recoil"

function Filter() {
    const [fil, setFilter] = useRecoilState(filterState)

    return(
        <>
            <select 
                value={fil}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">Todas</option>
                <option value="done">Concluídas</option>
                <option value="pendent">Pendentes</option>
            </select>
        </>
    )
}

export default Filter