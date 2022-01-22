import { BarChart, Bar, Cell, LabelList, XAxis, ResponsiveContainer } from 'recharts';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

export default function Charts ({data}) {
    return (
        <div>
          <ResponsiveContainer height={400} margin={{top: 0, right: 40, bottom: 0, left: 40}} >
            <BarChart 
              data={data} 
              barCategoryGap={20} 
              margin={{
                top: 50,
                right: 20,
                bottom: 9,
                left: 20
              }}
             >
            <XAxis dataKey="description" axisLine={false} tickLine={false} label={{fill: '#52555F', weight: 400, fontSize: 12, fontFamily: 'Roboto' }}/> грн
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
  