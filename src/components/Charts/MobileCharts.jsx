import { BarChart, Bar, Cell, LabelList, XAxis, ResponsiveContainer } from 'recharts';
export default function MobileCharts ({data}) {
    return (
        <div>
          <ResponsiveContainer width="100%" height={300} margin={{
                  top: 10,
                  right: 10,
                  bottom: 10,
                  left: 10
                }}>
            <BarChart 
                layout='vertical' 
                data={data} 
                barGap="5"
                barCategoryGap="10"
            >
            <XAxis hide axisline={false} type="number"/>
              <Bar dataKey="total" barSize={20} radius={[0, 10, 10, 0]} label={{fill: '#52555F', fontSize: 10, fontFamily: 'Roboto', position: 'right' }}>
              {data
               .sort((a, b) => (b.total > a.total ? 1 : -1))
               .map((el, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? '#FFDAC0' : '#ff751d'}
              />
            ))}
            <LabelList dataKey="description" position="outsideLeft" fill='#52555F' fontSize="10" fontFamily='Roboto' />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
  