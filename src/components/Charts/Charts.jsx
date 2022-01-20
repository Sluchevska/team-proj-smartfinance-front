// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getOperations, getLoading, fetchByCategoryPeriod } from '../../../redux/operations';
// import Chart from '../../../../node_modules/chart.js/dist/chart.min.js';
// <script src="./node_modules/chart.js/Chart.min.js"></script>

// // import Spinner from '../../Spinner';
// // import s from './Icons.module.css';
// import categories from '../../../data/categories.json';
// import operations from '../../../data/expensesOperations2.json'
// const type = "expenses";
// const month = 1;
// const year = 2022
// const categoriesList = categories.filter(category => category.type === type);
// const operationsList = operations.filter(operation => operation.type === type);


// const Charts = () => {
//   const dispatch = useDispatch();
//   var popCanvas = document.getElementById("periodChart");
//   console.log(popCanvas);
// var barChart = new Chart(popCanvas, {
//   type: 'bar',
//   data: {
//     labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"],
//     datasets: [{
//       label: 'Population',
//       data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
//       backgroundColor: [
//         '#FF751D',
//         '#FFDAC0',
//       ]
//     }]
//   }
// });
//   const operations = useSelector(getOperations);
// const onButton = (month, year, category) => dispatch(fetchByCategoryPeriod(month, year, category));

//   const categoriesSums = (operations, categories) => {
//     for (let i = 0; i < categories.length; i++) {
//       const el = categories[i];
//      operations
//      .map(operation => {
//         if (operation.category === el.category){
//           el.sum += operation.sum;
//         }
//      })
//     }
//   }
//   categoriesSums(operationsList, categoriesList);

//   const isFetching = useSelector(getLoading);
//   useEffect(() => dispatch(fetchByTypePeriod()), [dispatch]);
//   return(
//     <div>
//     <canvas id="periodChart" width="800" height="500"></canvas>
//   </div>
//   );
// };

// export default Charts;