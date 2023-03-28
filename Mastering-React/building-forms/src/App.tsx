import {useState} from 'react';
import './App.css';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const [expenses, setExpenses] = useState([
        {
            id: 1,
            description: 'Groceries',
            amount: 100,
            category: 'Food',
        },
        {
            id: 2,
            description: 'Rent',
            amount: 1000,
            category: 'Housing',
        },
        {
            id: 3,
            description: 'Car Payment',
            amount: 200,
            category: 'Transportation',
        },
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <div className="App">
            <div className="bm-3">
                <ExpenseForm
                    onSubmit={(expense) =>
                        setExpenses([
                            ...expenses,
                            {
                                ...expense,
                                id: expenses.length + 1,
                            },
                        ])
                    }
                />
            </div>
            <div className="mb-3">
                <ExpenseFilter
                    onSelectedCategory={(category) => setSelectedCategory(category)}
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
            />
        </div>
    );
}

export default App;
