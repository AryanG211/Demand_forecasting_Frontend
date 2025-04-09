// "use client"
// import { useState } from "react";
// import { Line, Pie, Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     ArcElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { BsFillFilterCircleFill } from "react-icons/bs";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     ArcElement,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const CropDemandPrediction = () => {
//     const [region, setRegion] = useState("All");
//     const [crop, setCrop] = useState("All");
//     const [season, setSeason] = useState("All");
//     const [soilType, setSoilType] = useState("All");
//     const [months, setMonths] = useState(6);
//     const [chartType, setChartType] = useState("line");
//     const [chartData, setChartData] = useState(null);

//     const demandData = {
//         Wheat: 320,
//         Rice: 450,
//         Corn: 280,
//         Barley: 150,
//         Soybean: 370,
//         Millet: 260,
//         Sorghum: 180,
//         Peanuts: 220,
//     };

//     const handlePredict = () => {
//         let filteredData = Object.entries(demandData)
//             .map(([crop, demand]) => ({ crop, demand }))
//             .sort((a, b) => b.demand - a.demand);

//         setChartData({
//             labels: filteredData.map((d) => d.crop),
//             datasets: [
//                 {
//                     label: "Predicted Demand (tons)",
//                     data: filteredData.map((d) => d.demand),
//                     borderColor: "#4CAF50",
//                     backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2", "#20B2AA", "#D2691E", "#556B2F", "#DC143C"],
//                     fill: chartType === "line",
//                 },
//             ],
//         });
//     };

//     return (
//         <div className="p-6 rounded-lg">
//             <div className="header py-10 flex flex-col gap-4">

//                 <div className="font-bold  text-4xl text-center text-[#31511E]">Crop Demand Prediction</div>
//                 <div className="subHeading text-center text-[#31511E]">Connecting farmers with the best market deals—filter by crop, compare prices, and sell smarter!</div>
//             </div>
//             <div className="flex  items-center gap-2 mb-2 font-extrabold text-[#31511E]"><BsFillFilterCircleFill className="text-[#31511E] text-2xl" />Filters: </div>

//             <div className="grid grid-cols-2 gap-4">
//                 {[
//                     { label: "Region", value: region, setter: setRegion, options: ["All", "North", "South", "East", "West"] },
//                     { label: "Crop", value: crop, setter: setCrop, options: ["All", ...Object.keys(demandData)] },
//                     { label: "Season", value: season, setter: setSeason, options: ["All", "Winter", "Summer", "Monsoon"] },
//                     { label: "Soil Type", value: soilType, setter: setSoilType, options: ["All", "Loamy", "Sandy", "Clayey"] },
//                     { label: "Forecast (months)", value: months, setter: setMonths, type: "number" },
//                     { label: "Graph Type", value: chartType, setter: setChartType, options: ["line", "pie", "bar"] },
//                 ].map(({ label, value, setter, options, type }, index) => (
//                     <label key={index} className="flex flex-col text-sm font-medium text-gray-700">
//                         {label}:
//                         {options ? (
//                             <select
//                                 value={value}
//                                 onChange={(e) => setter(e.target.value)}
//                                 className="mt-1 p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//                             >
//                                 {options.map((option) => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                         ) : (
//                             <input
//                                 type={type || "text"}
//                                 value={value}
//                                 onChange={(e) => setter(e.target.value)}
//                                 className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//                             />
//                         )}
//                     </label>
//                 ))}
//             </div>
//             <button onClick={handlePredict} className="mt-5 cursor-pointer bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all">Predict Demand</button>
//             {chartData && (
//                 <div className="mt-6 flex  gap-10">
//                     <div className="chart w-[70%] bg-[#92C957]/20 p-5 rounded-md ">

//                         {chartType === "line" && <Line data={chartData} />}
//                         {chartType === "pie" && <Pie data={chartData} />}
//                         {chartType === "bar" && <Bar data={chartData} />}
//                     </div>
//                     <div className="mt-4 p-4 bg-gray-100 rounded-lg h-fit grid-cols-1">
//                         <h3 className="text-lg font-bold">Highest Demand Crop</h3>
//                         <p>{chartData.labels[0]} - {chartData.datasets[0].data[0]} tons</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CropDemandPrediction;

"use client";
import { useState } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BsFillFilterCircleFill } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CropDemandPrediction = () => {
  const [region, setRegion] = useState("Marathwada");
  const [crop, setCrop] = useState("Jowar");
  const [season, setSeason] = useState("Rabi");
  const [soilType, setSoilType] = useState("Regur Soil");
  const [months, setMonths] = useState(3);
  const [chartType, setChartType] = useState("line");
  const [chartData, setChartData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setLoading(true);
    setError("");
    setChartData(null);
    setTableData([]);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          region,
          crop,
          season,
          soil_type: soilType,
          months_ahead: months,
          production: 1000, // Placeholder, replace with actual value
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      if (!data.sorted_demand_forecast || data.sorted_demand_forecast.length === 0) {
        throw new Error("No forecasted data received.");
      }

      // Extract crops and demand values
      const labels = data.sorted_demand_forecast.map((entry) => entry.crop);
      const values = data.sorted_demand_forecast.map((entry) => entry.demand_forecast);

      setChartData({
        labels,
        datasets: [
          {
            label: "Predicted Demand (tons)",
            data: values,
            borderColor: "#4CAF50",
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2", "#20B2AA"],
            fill: chartType === "line",
          },
        ],
      });

      setTableData(data.sorted_demand_forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 rounded-lg">
      <div className="header py-10 flex flex-col gap-4">
        <div className="font-bold text-4xl text-center text-[#31511E]">Crop Demand Prediction</div>
        <div className="subHeading text-center text-[#31511E]">
          Connecting farmers with the best market deals—filter by crop, compare prices, and sell smarter!
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 font-extrabold text-[#31511E]">
        <BsFillFilterCircleFill className="text-[#31511E] text-2xl" /> Filters:
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[{ label: "Region", value: region, setter: setRegion, options: ["Marathwada", "Vidarbha", "Northern Maharashtra", "Konkan", "Western Ghats"] },
          { label: "Season", value: season, setter: setSeason, options: ["Rabi", "Kharif"] },
          { label: "Soil Type", value: soilType, setter: setSoilType, options: ["Regur Soil", "Sandy Loam Soil", "Laterite Soil", "Alluvial Soil", "Clay Loam Soil"] },
          { label: "Forecast (months)", value: months, setter: setMonths, type: "number" },
          { label: "Graph Type", value: chartType, setter: setChartType, options: ["line", "pie", "bar"] },
        ].map(({ label, value, setter, options, type }, index) => (
          <label key={index} className="flex flex-col text-sm font-medium text-gray-700">
            {label}:
            {options ? (
              <select
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="mt-1 p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={type || "text"}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}
          </label>
        ))}
      </div>

      <button onClick={handlePredict}
        className="mt-5 bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-md hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all"
        disabled={loading}
      >
        {loading ? "Predicting..." : "Predict Demand"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {chartData && (
        <div className="mt-6 flex gap-10">
          <div className="chart w-[70%] bg-[#92C957]/20 p-5 rounded-md">
            {chartType === "line" && typeof window !== "undefined" && <Line data={chartData} />}
            {chartType === "pie" && typeof window !== "undefined" && <Pie data={chartData} />}
            {chartType === "bar" && typeof window !== "undefined" && <Bar data={chartData} />}
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg h-fit">
            <h3 className="text-lg font-bold">Top Crop Predictions</h3>
            <ul>
              {tableData.slice(0, 5).map((entry, index) => (
                <li key={index} className="text-gray-700">{entry.crop}: {entry.demand_forecast.toFixed(2)} tons</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropDemandPrediction;

// "use client";
// import { useState } from "react";
// import { Line, Pie, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { BsFillFilterCircleFill } from "react-icons/bs";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const CropDemandPrediction = () => {
//   const [region, setRegion] = useState("Marathwada");
//   const [crop, setCrop] = useState("Jowar");
//   const [season, setSeason] = useState("Rabi");
//   const [soilType, setSoilType] = useState("Regur Soil");
//   const [months, setMonths] = useState(3);
//   const [chartType, setChartType] = useState("line");
//   const [production, setProduction] = useState(1000);
//   const [chartData, setChartData] = useState(null);
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handlePredict = async () => {
//     setLoading(true);
//     setError("");
//     setChartData(null);
//     setTableData([]);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           region,
//           crop,
//           season,
//           soil_type: soilType,
//           months_ahead: months,
//           production,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Something went wrong!");
//       }

//       if (!data.sorted_demand_forecast || data.sorted_demand_forecast.length === 0) {
//         throw new Error("No forecasted data received.");
//       }

//       const labels = data.sorted_demand_forecast.map((entry) => entry.crop);
//       const values = data.sorted_demand_forecast.map((entry) => entry.demand_forecast);

//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: "Predicted Demand (tons)",
//             data: values,
//             borderColor: "#4CAF50",
//             backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8A2BE2", "#20B2AA"],
//             fill: chartType === "line",
//           },
//         ],
//       });

//       setTableData(data.sorted_demand_forecast);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 rounded-lg">
//       <div className="header py-10 flex flex-col gap-4">
//         <div className="font-bold text-4xl text-center text-[#31511E]">Crop Demand Prediction</div>
//         <div className="subHeading text-center text-[#31511E]">
//           Connecting farmers with the best market deals—filter by crop, compare prices, and sell smarter!
//         </div>
//       </div>

//       <div className="flex items-center gap-2 mb-2 font-extrabold text-[#31511E]">
//         <BsFillFilterCircleFill className="text-[#31511E] text-2xl" /> Filters:
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         {[{ label: "Region", value: region, setter: setRegion, options: ["Marathwada", "Vidarbha", "Northern Maharashtra", "Konkan", "Western Ghats"] },
//           { label: "Season", value: season, setter: setSeason, options: ["Rabi", "Kharif"] },
//           { label: "Soil Type", value: soilType, setter: setSoilType, options: ["Regur Soil", "Sandy Loam Soil", "Laterite Soil", "Alluvial Soil", "Clay Loam Soil"] },
//           { label: "Forecast (months)", value: months, setter: setMonths, type: "number" },
//           { label: "Production (tons)", value: production, setter: setProduction, type: "number" },
//           { label: "Graph Type", value: chartType, setter: setChartType, options: ["line", "pie", "bar"] },
//         ].map(({ label, value, setter, options, type }, index) => (
//           <label key={index} className="flex flex-col text-sm font-medium text-gray-700">
//             {label}:
//             {options ? (
//               <select
//                 value={value}
//                 onChange={(e) => setter(e.target.value)}
//                 className="mt-1 p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 {options.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={type || "text"}
//                 value={value}
//                 onChange={(e) => setter(e.target.value)}
//                 className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             )}
//           </label>
//         ))}
//       </div>

//       <button onClick={handlePredict}
//         className="mt-5 bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-md hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict Demand"}
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {chartData && (
//         <div className="mt-6 flex gap-10">
//           <div className="chart w-[70%] bg-[#92C957]/20 p-5 rounded-md">
//             {chartType === "line" && typeof window !== "undefined" && <Line data={chartData} />}
//             {chartType === "pie" && typeof window !== "undefined" && <Pie data={chartData} />}
//             {chartType === "bar" && typeof window !== "undefined" && <Bar data={chartData} />}
//           </div>
//           <div className="mt-4 p-4 bg-gray-100 rounded-lg h-fit">
//             <h3 className="text-lg font-bold">Top Crop Predictions</h3>
//             <ul>
//               {tableData.slice(0, 5).map((entry, index) => (
//                 <li key={index} className="text-gray-700">{entry.crop}: {entry.demand_forecast.toFixed(2)} tons</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CropDemandPrediction;


// "use client";
// import { useState } from "react";
// import { Line, Pie, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { BsFillFilterCircleFill } from "react-icons/bs";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const CropDemandPrediction = () => {
//   const [region, setRegion] = useState("Marathwada");
//   const [crop, setCrop] = useState("Wheat");
//   const [season, setSeason] = useState("Rabi");
//   const [soilType, setSoilType] = useState("Regur Soil");
//   const [months, setMonths] = useState(6);
//   const [chartType, setChartType] = useState("line");
//   const [chartData, setChartData] = useState(null);
//   const [tableData, setTableData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handlePredict = async () => {
//     setLoading(true);
//     setError("");
//     setChartData(null);
//     setTableData([]);

//     try {
//       // Define server URLs
//       const urls = [
//         "http://127.0.0.1:8000/predict",
//         "http://localhost:8000/predict"
//       ];

//       let response;
//       for (const url of urls) {
//         try {
//           response = await fetch(url, {
//             method: "POST",
//             headers: { 
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             },
//             body: JSON.stringify({
//               region,
//               crop,
//               season,
//               soil_type: soilType,
//               months_ahead: months,
//               production: 1000, // Placeholder production value
//             }),
//           });

//           if (response.ok) break;
//         } catch (urlError) {
//           console.warn(`Failed to connect to ${url}:`, urlError);
//         }
//       }

//       if (!response || !response.ok) {
//         throw new Error(`HTTP error! status: ${response ? response.status : 'Unknown'}`);
//       }

//       const data = await response.json();

//       if (!data.sorted_demand_forecast || data.sorted_demand_forecast.length === 0) {
//         throw new Error("No forecasted data received.");
//       }

//       // Extract crops and demand values
//       const labels = data.sorted_demand_forecast.map((entry) => entry.crop);
//       const values = data.sorted_demand_forecast.map((entry) => entry.demand_forecast);

//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: "Predicted Demand (tons)",
//             data: values,
//             borderColor: "#4CAF50",
//             backgroundColor: [
//               "#FF6384", "#36A2EB", "#FFCE56", 
//               "#8A2BE2", "#20B2AA", "#FF9800"
//             ],
//             fill: chartType === "line",
//           },
//         ],
//       });

//       setTableData(data.sorted_demand_forecast);
//     } catch (err) {
//       console.error("Full Prediction Error:", err);
//       setError(err.message || "An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Rest of the component remains the same as in the previous implementation
//   // (Rendering logic, filter dropdowns, etc.)

//   return (
//     <div className="p-6 rounded-lg max-w-6xl mx-auto">
//       {/* Previous implementation remains the same */}
//       <div className="header py-10 flex flex-col gap-4">
//         <div className="font-bold text-4xl text-center text-[#31511E]">
//           Crop Demand Prediction
//         </div>
//         <div className="subHeading text-center text-[#31511E]">
//           Connecting farmers with the best market deals—filter by crop, compare prices, and sell smarter!
//         </div>
//       </div>

//       {/* Error Display with Enhanced Styling */}
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <strong className="font-bold">Error: </strong>
//           <span className="block sm:inline">{error}</span>
//         </div>
//       )}

//       {/* Rest of the component remains the same */}
//       <div className="grid grid-cols-2 gap-4">
//       {[{ label: "Region", value: region, setter: setRegion, options: ["Marathwada", "Vidarbha", "Northern Maharashtra", "Konkan", "Western Ghats"] },
//           { label: "Season", value: season, setter: setSeason, options: ["Rabi", "Kharif"] },
//           { label: "Soil Type", value: soilType, setter: setSoilType, options: ["Regur Soil", "Sandy Loam Soil", "Laterite Soil", "Alluvial Soil", "Clay Loam Soil"] },
//           { label: "Forecast (months)", value: months, setter: setMonths, type: "number" },
//           { label: "Graph Type", value: chartType, setter: setChartType, options: ["line", "pie", "bar"] },
//         ].map(({ label, value, setter, options, type }, index) => (
//           <label key={index} className="flex flex-col text-sm font-medium text-gray-700">
//              {label}:
//              {options ? (
//               <select
//                 value={value}
//                 onChange={(e) => setter(e.target.value)}
//                 className="mt-1 p-2 border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 {options.map((option) => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={type || "text"}
//                 value={value}
//                 onChange={(e) => setter(e.target.value)}
//                 className="mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             )}
//           </label>
//         ))}
//       </div>

//       <button onClick={handlePredict}
//         className="mt-5 bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-md hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict Demand"}
//       </button>
 
//       {error && <p className="text-red-500 mt-4">{error}</p>}
 
//       {chartData && (
//         <div className="mt-6 flex gap-10">
//           <div className="chart w-[70%] bg-[#92C957]/20 p-5 rounded-md">
//             {chartType === "line" && typeof window !== "undefined" && <Line data={chartData} />}
//             {chartType === "pie" && typeof window !== "undefined" && <Pie data={chartData} />}
//             {chartType === "bar" && typeof window !== "undefined" && <Bar data={chartData} />}
//           </div>
//           <div className="mt-4 p-4 bg-gray-100 rounded-lg h-fit">
//             <h3 className="text-lg font-bold">Top Crop Predictions</h3>
//             <ul>
//               {tableData.slice(0, 5).map((entry, index) => (
//                 <li key={index} className="text-gray-700">{entry.crop}: {entry.demand_forecast.toFixed(2)} tons</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
    
//   );
// };

// export default CropDemandPrediction;



