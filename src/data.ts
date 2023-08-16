import { CheckBoxType, CompanyName, ConnectionAmount, ConnectionText, Currency, SortType, TicketType } from "./entities/ticket";

export const tickets: TicketType[] = [
    {
        id: 1,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.Victory,
        price: 12680,
        currency: Currency.RUB,
        time: {
            startTime: '12:00',
            endTime:  '16:30'
        },
        duration: 270,
        connectionAmount: {amount: ConnectionAmount.Two, text: ConnectionText.Two}
    },
    {
        id: 2,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.RedWings,
        price: 21500,
        currency: Currency.RUB,
        time: {
            startTime: '14:00',
            endTime:  '16:00'
        },
        duration: 120,
        connectionAmount: {amount: ConnectionAmount.Zero, text: ConnectionText.Zero}
    },
    {
        id: 3,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.Airlines,
        price: 23995,
        currency: Currency.RUB,
        time: {
            startTime: '4:50',
            endTime:  '13:30'
        },
        duration: 520,
        connectionAmount: {amount: ConnectionAmount.Two, text: ConnectionText.Two}
    },
    {
        id: 4,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.Victory,
        price: 12680,
        currency: Currency.RUB,
        time: {
            startTime: '12:00',
            endTime:  '16:30'
        },
        duration: 270,
        connectionAmount: {amount: ConnectionAmount.Two, text: ConnectionText.Two}
    },
    {
        id: 5,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.RedWings,
        price: 21500,
        currency: Currency.RUB,
        time: {
            startTime: '14:00',
            endTime:  '16:00'
        },
        duration: 120,
        connectionAmount: {amount: ConnectionAmount.Zero, text: ConnectionText.Zero}
    },
    {
        id: 6,
        from: 'SVO',
        to: 'LED',
        companyName: CompanyName.Airlines,
        price: 23995,
        currency: Currency.RUB,
        time: {
            startTime: '4:50',
            endTime:  '13:30'
        },
        duration: 520,
        connectionAmount: {amount: ConnectionAmount.Two, text: ConnectionText.Two}
    }
]

export const SortButtons: SortType[] = [SortType.Price, SortType.Duration, SortType.Connection]

export const ConnectionCheckboxes: CheckBoxType[] = [
    {
        id: ConnectionAmount.Zero,
        text: ConnectionText.Zero
    },
    {
        id: ConnectionAmount.One,
        text: ConnectionText.One
    },
    {
        id: ConnectionAmount.Two,
        text: ConnectionText.Two
    },
    {
        id: ConnectionAmount.Three,
        text: ConnectionText.Three
    },
]

export const CompanyCheckboxes: CheckBoxType[] = [
    {
        id: CompanyName.Victory,
        text: CompanyName.Victory
    },
    {
        id: CompanyName.RedWings,
        text: CompanyName.RedWings
    },
    {
        id: CompanyName.Airlines,
        text: CompanyName.Airlines
    },
]