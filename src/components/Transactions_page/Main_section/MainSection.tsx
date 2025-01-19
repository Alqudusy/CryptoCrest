import React, { useState } from 'react';
import FilterSearchSection from './FilterSearch_section/FilterSearchSection';
import './Main.css';
import SummarySection from './Summery_section/SummerySection';
import TransactionSection from './Transactions_section/TransactionsSection';
import TransactionDetails from './TransactionsDetails_slide/TransactionDetails';
const MainSection: React.FC<{ toggleSideBar: boolean }> = ({ toggleSideBar }) => {
    interface Transaction {
        id: string;
        type: string;
        date: string;
        asset: string;
        amount: string;
        fee: string;
        status: string;
        description: string;
    };
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [chosenTrans, setChosenTrans] = useState<Transaction>();
    const transactions = [
        {
            id: '1',
            date: '2025-01-18',
            type: 'Buy',
            asset: 'Bitcoin',
            amount: '0.005 BTC',
            fee: '$2.50',
            status: 'Completed',
            description: '',
        },
        {
            id: '2',
            date: '2025-01-17',
            type: 'Sell',
            asset: 'Ethereum',
            amount: '0.2 ETH',
            fee: '$3.00',
            status: 'Pending',
            description: '',
        },
        {
            id: '3',
            date: '2025-01-16',
            type: 'Transfer',
            asset: 'USDT',
            amount: '50 USDT',
            fee: '$1.00',
            status: 'Failed',
            description: '',
        },
    ];

    return (
        <div className="main-section" style={{ width: toggleSideBar ? '' : '90%' }}>
            <SummarySection totalTransactions={250} totalFees="$45" balanceChange="+$1,200" />
            <FilterSearchSection />
            <TransactionSection openDetails={setOpenDetails} setChosenTrans={setChosenTrans} transactions={transactions} />
            <TransactionDetails onClose={() => { setOpenDetails(prev => !prev) }} transaction={chosenTrans} />
        </div>
    );
}

export default MainSection;
