import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts';

const VerticalCharts = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer
        height={400}
        margin={{ top: 0, right: 40, bottom: 10, left: 40 }}
      >
        <BarChart
          data={data}
          barCategoryGap={4}
          justify-content='center'
          align-items='center'
          margin={{
            top: 20,
            right: 2,
            bottom: 9,
            left: 2,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false}/>
          <XAxis
            dataKey="description"
            axisLine={false}
            tickLine={false}
            label={{
              fill: '#52555F',
              weight: 400,
              fontSize: 12,
              fontFamily: 'Roboto',
            }}
          />{' '}
          грн
          <Bar
            dataKey="total"
            maxBarSize={38}
            radius={[10, 10, 0, 0]}
            label={{
              position: 'top',
              fill: '#52555F',
              fontSize: 12,
              fontFamily: 'Roboto',
            }}
          >
            {data
              .sort((a, b) => (b.sum > a.sum ? 1 : -1))
              .map((el, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 3 ? '#FFDAC0' : '#ff751d'}
                />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VerticalCharts;
