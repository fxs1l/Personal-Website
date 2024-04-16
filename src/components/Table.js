// // Writing tables are a pain in HTML
// // Wrapper function for creating a table using JS Objects

// export default function Table({data}) {
//     return (
//       <table>
//         <thead>
//           <tr>
//             {Object.keys(data).map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: Math.max(...Object.values(data).map(arr => arr.length)) }).map((_, rowIndex) => (
//             <tr key={rowIndex}>
//               {Object.values(data).map((column, colIndex) => (
//                 <td key={colIndex}>{column[rowIndex]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
// }
