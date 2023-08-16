import st from './Logo.module.scss'
import { ReactComponent as Airplane } from '../../assets/airplane.svg'


const Logo = () => {
  return (
    <a href='#' className={st.logo}>
        <Airplane className={st.airplane}/>
        <span className={st.logo_span}>Поиск авиабилетов</span>
    </a>
  )
}

export default Logo