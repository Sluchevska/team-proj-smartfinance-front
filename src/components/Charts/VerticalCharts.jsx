import { BarChart, Bar, Cell, LabelList, XAxis, ResponsiveContainer } from 'recharts';
export default function Charts ({data}) {
    return (
        <div>
          <ResponsiveContainer height={400}>
            <BarChart 
              width={600} 
              data={data} 
              barCategoryGap={20} 
              margin={{
                top: 50,
                right: 20,
                bottom: 9,
                left: 20
              }}
             >
            <XAxis dataKey="description"  label={{fill: '#52555F', fontSize: 12, fontFamily: 'Roboto' }}/>
            <Bar dataKey="sum" barSize={38} radius={[10, 10, 0, 0]} label={{ position: 'top', fill: '#52555F', fontSize: 12, fontFamily: 'Roboto' }}>
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
    }
  