// src/components/ExpenseForm.js
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
      type,
      category,
    };

    addExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginBottom: 2 }}
    >
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Type"
        >
          <MenuItem value="expense">Expense</MenuItem>
          <MenuItem value="income">Income</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="transportation">Transportation</MenuItem>
          <MenuItem value="utilities">Utilities</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </Box>
  );
}

export default ExpenseForm;
