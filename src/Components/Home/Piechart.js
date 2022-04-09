import React, { useEffect } from "react";
import * as echarts from "echarts";

function Piechart() {
  useEffect(() => {
    var chartDom = document.getElementById("piechart");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "Students placed in companies",
        left: "center",
        textStyle: {
          color: "#000",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Placed",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Wipro" },
            { value: 735, name: "TCS" },
            { value: 580, name: "Infosys" },
            { value: 484, name: "CapGemini" },
            { value: 300, name: "Others" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return (
    <div
      id="piechart"
      style={{
        width: "100%",
        height: "325px",
      }}
    ></div>
  );
}

export default Piechart;
