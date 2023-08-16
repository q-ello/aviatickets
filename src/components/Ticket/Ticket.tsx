import { CompanyName, TicketType } from "../../entities/ticket"
import st from './Ticket.module.scss'
import victory from '../../assets/victory.png'
import airlines from '../../assets/airlines.png'
import redWings from '../../assets/red-wings.png'

const Ticket = ({ from, to, companyName, price, currency, time, duration, connectionAmount }: TicketType) => {
  let imgSrc = ''
  switch (companyName) {
    case CompanyName.Victory:
      imgSrc = victory
      break
    case CompanyName.RedWings:
      imgSrc = redWings
      break
    case CompanyName.Airlines:
      imgSrc = airlines
      break
  }
  return (
    <div className={st.ticket}>
      <img src={imgSrc} alt={companyName} className={st.ticket_image} />
      <span className={st.ticket_price}>{price} {currency}</span>
      <div className={st.info}>
        <div className={st.info_block}>
          <span className={st.info_block_head}>{from} - {to}</span>
          <span>{time.startTime} - {time.endTime}</span>
        </div>
        <div className={st.info_block}>
          <span className={st.info_block_head}>В пути</span>
          <span>{Math.floor(duration / 60)} ч {duration % 60} мин</span>
        </div>
        <div className={st.info_block}>
          <span className={st.info_block_head}>Пересадки</span>
          <span>{connectionAmount.text}</span>
        </div>
      </div>
    </div >
  )
}

export default Ticket