import { SortButtons } from '../../data'
import { useAppDispatch, useAppSelector } from '../../hook'
import { selectorSortBy } from '../../redux/selectors'
import { sortTickets } from '../../redux/ticketsSlice'
import Button from '../UI/Button/Button'
import st from './SortMenu.module.scss'


const SortMenu = () => {
  const sortBy = useAppSelector(selectorSortBy)
  const dispatch = useAppDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLButtonElement).id
    if (sortBy === id) return
    dispatch(sortTickets(id))
  }

  return (
    <div className={st.sort_menu}>
      {SortButtons.map(button => <Button key={button} id={button} className={st.button} active={sortBy === button} onClick={handleClick}>{button}</Button>)}
    </div>
  )
}

export default SortMenu