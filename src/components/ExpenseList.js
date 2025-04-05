// src/components/ExpenseList.js
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <Typography variant="h5" gutterBottom>
        Transaction History
      </Typography>
      <List>
        {expenses.map(expense => (
          <ListItem
            key={expense.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteExpense(expense.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={expense.description}
              secondary={
                <>
                  <span>
                    {expense.type === 'expense' ? '-' : '+'}₹{expense.amount.toFixed(2)}
                  </span>
                  <span> | Category: {expense.category}</span>
                  <span> on {new Date(expense.date).toLocaleDateString()}</span>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ExpenseList;
