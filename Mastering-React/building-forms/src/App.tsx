import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/components/categories";

function App() {
  const [selectedCategory, setSeletedCategory] = useState("");

  const [expenses, setExpences] = useState([
    {
      id: 1,
      description: "Groceries",
      ammount: 100,
      category: "Food",
    },
    {
      id: 2,
      description: "Rent",
      ammount: 1000,
      category: "Housing",
    },
    {
      id: 3,
      description: "Car Payment",
      ammount: 200,
      category: "Transportation",
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
            setExpences([
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
          onSelectedCategory={(category) => setSeletedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpences(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
