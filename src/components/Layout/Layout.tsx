import FilterMenu from "../FilterMenu/FilterMenu"
import Logo from "../Logo/Logo"
import SortMenu from "../SortMenu/SortMenu"
import TicketsList from "../TicketsList/TicketsList"
import st from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={st.layout}>
    <Logo/>
    <div className={st.ticketbar}>
    <SortMenu/>
    <FilterMenu/>
    <TicketsList/>
    </div>
    </div>
  )
}

export default Layout