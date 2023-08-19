import { useState } from "react"
import { CompanyCheckboxes, ConnectionCheckboxes } from "../../data"
import { useAppSelector } from "../../hook"
import Button from "../UI/Button/Button"
import Checkbox from "../UI/Checkbox/Checkbox"
import st from './FilterMenu.module.scss'
import { selectorFilterCompany, selectorFilterConnection } from "../../redux/selectors"
import { FilterType, FiltersTotal } from "../../entities/ticket"

const FilterMenu = () => {
  const filterConnection = useAppSelector(selectorFilterConnection)
  const filterCompany = useAppSelector(selectorFilterCompany)
  const [isOpen, setOpen] = useState<boolean>(false)


  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className={[st.menu, isOpen ? st.menu_open : ''].filter(Boolean).join(' ')}>
      <div className={st.mobile}>
        <span className={st.span}>
          {
            filterCompany.length === FiltersTotal.Company
              ? 'Любая авиакомпания, '
              : `Авиакомпании: ${filterCompany.join(', ')}, `
          }
          {
            filterConnection.length === FiltersTotal.Connection
              ? 'любое кол-во пересадок'
              : `пересадок: ${filterConnection.join(', ')}`
          }
        </span>
        <Button onClick={handleClick} className={st.button}><span className={st.button_span}>Открыть настройки</span></Button>
      </div>
      <div className={st.checkboxes}>
        <Checkbox options={ConnectionCheckboxes} text={'Количество пересадок'} filter={FilterType.Connection} checkedOptions={filterConnection} />
        <Checkbox options={CompanyCheckboxes} text={'Компании'} filter={FilterType.Company} checkedOptions={filterCompany} />
      </div>
    </div>
  )
}

export default FilterMenu