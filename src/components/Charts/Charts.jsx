//  import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, LabelList, XAxis, ResponsiveContainer } from 'recharts';
 import MobileCharts from './MobileCharts';
 import VerticalCharts from './VerticalCharts';
  const data = [
      {
        "id": "id-1",
        "description": "Метро",
        "sum": 500
      },
      {
        "id": "id-7",
        "description": "Машина",
        "sum": 1920
      },
      {
        "id": "id-8",
        "description": "Поезд",
        "sum": 1000
      },
      {
        "id": "id-9",
        "description": "Такси",
        "sum": 300
      },
      {
        "id": "id-10",
        "description": "Трактор",
        "sum": 400
      },
      {
        "id": "id-11",
        "description": "Мопед",
        "sum": 1300
      },
      {
        "id": "id-12",
        "description": "Такси",
        "sum": 600
      },
      {
        "id": "id-13",
        "description": "Трактор",
        "sum": 700
      },
      {
        "id": "id-14",
        "description": "Мопед",
        "sum": 800
      }
    ];

  export default function Charts () {
    const screenIsMobile = window.screen.width <= 320;
    console.log(screenIsMobile);
      return (
        <>
        {screenIsMobile ? 
       (<MobileCharts data={data}/>) :
       (<VerticalCharts data={data}/>)
        }
       </>
      );
    }