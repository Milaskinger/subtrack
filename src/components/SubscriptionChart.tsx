'use client'

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61', '#00c49f', '#ffbb28']

export default function SubscriptionChart({ data }: { data: any[] }) {
  const chartData = data.map((item) => ({
    name: item.name,
    value: parseFloat(item.amount),
  }))

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-10 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center text-white">Répartition des dépenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            label
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
