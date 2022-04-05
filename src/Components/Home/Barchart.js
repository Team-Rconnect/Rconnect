import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import drillDownData from "./barchart.json";
function Barchart() {
  const [name, setName] = useState(null);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data:
          name && drillDownData[name]
            ? drillDownData[name].data
            : ["2017", "2018", "2019", "2020", "2021", "2022"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data:
            name && drillDownData[name]
              ? drillDownData[name].series
              : [120, 200, 150, 80, 70, 110],
          type: "bar",
        },
      ],
    };
    myChart.on("click", function (params) {
      console.log(params);
      const value = params.name;
      if (name == null || name != value || !showReset) {
        setName(value);
      }
      setShowReset(!showReset);
    });
    option && myChart.setOption(option);
  }, [name]);
  return <div id="main" style={{ width: "100%", height: "300px" }}></div>;
}

export default Barchart;
