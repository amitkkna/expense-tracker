// src/components/ExpenseChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function ExpenseChart({ expenses }) {
  // Group expenses by category
  const categoryTotals = expenses.reduce((acc, expense) => {
    const cat = expense.category || 'other';
    acc[cat] = (acc[cat] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryTotals),
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  };

  return (
    <div>
      <h2>Expense Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default ExpenseChart;
