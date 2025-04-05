// src/App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import { Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './styles.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterType, setFilterType] = useState('all');

  // Load expenses from localStorage
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // For filtering transactions by type
  const filteredExpenses = expenses.filter(expense =>
    filterType === 'all' ? true : expense.type === filterType
  );

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Expense Tracker
      </Typography>
      <ExpenseForm addExpense={addExpense} />
      
      <FormControl variant="outlined" sx={{ minWidth: 150, marginBottom: 2 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          label="Filter"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </Select>
      </FormControl>

      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />
      <ExpenseChart expenses={filteredExpenses} />
    </Container>
  );
}

export default App;
