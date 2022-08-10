import AddExpenses from "../AddExpenses";
import ListExpenses from "../ListExpenses";
import AddCardIcon from '@mui/icons-material/AddCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SavingAmount from "../SavingAmount";
export const Menus = [
    {
        path:'/',
        name:'Add Expenses',
        Component: AddExpenses,
        icon:<AddCardIcon/>

    },
    {
        path:'/expenselist',
        name:'Expense List',
        Component: ListExpenses,
        icon:<FormatListBulletedIcon/>
    },
    {
        path:'/savingamount',
        name:'Saving Amount',
        Component: SavingAmount,
        icon:<FormatListBulletedIcon/>
    }
]