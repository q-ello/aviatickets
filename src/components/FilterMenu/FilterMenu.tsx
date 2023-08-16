import { useState } from "react"
import { CompanyCheckboxes, ConnectionCheckboxes } from "../../data"
import { useAppSelector } from "../../hook"
import Button from "../UI/Button/Button"
import Checkbox from "../UI/Checkbox/Checkbox"
import st from './FilterMenu.module.scss'

const FilterMenu = () => {
  const filterConnection = useAppSelector((state) => state.tickets.filterConnection)
  const filterCompany = useAppSelector((state) => state.tickets.filterCompany)
  const [isOpen, setOpen] = useState<boolean>(false)


  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className={[st.menu, isOpen ? st.menu_open : ''].filter(Boolean).join(' ')}>
      <div className={st.mobile}>
        <span className={st.span}>
          {
            filterCompany.length === 3
              ? 'Любая авиакомпания, '
              : `Авиакомпании: ${filterCompany.join(', ')}, `
          }
          {
            filterConnection.length === 4
              ? 'любое кол-во пересадок'
              : `пересадок: ${filterConnection.join(', ')}`
          }
        </span>
        <Button onClick={handleClick} className={st.button}><span className={st.button_span}>Открыть настройки</span></Button>
      </div>
      <div className={st.checkboxes}>
        <Checkbox options={ConnectionCheckboxes} text={'Количество пересадок'} filter={'connection'} checkedOptions={filterConnection} />
        <Checkbox options={CompanyCheckboxes} text={'Компании'} filter={'company'} checkedOptions={filterCompany} />
      </div>
    </div>
  )
}

export default FilterMenu