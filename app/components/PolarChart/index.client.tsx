import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container, Media } from "./styles";
import type { IRoomResponse } from "~/global/types";

type IClientPolarChartComponent = {
  isVisibled: boolean;
  roomResponse: IRoomResponse;
}

export function ClientPolarChart({ isVisibled, roomResponse }: IClientPolarChartComponent) {
  const [chartExists, setChartExists] = useState(false);
  
  useEffect(() => {
    if(isVisibled) {
      setTimeout(() => {
        setChartExists(true)
      },400)
    } else {
      setChartExists(false)
    }
  }, [isVisibled])

  const options: ApexCharts.ApexOptions = {
    chart: { type: 'polarArea' },
    labels: roomResponse.label,
    fill: { opacity: 1 },
    yaxis: { show: false },
    stroke: { width: 1, colors: undefined },
    plotOptions: {
      polarArea: {
        rings: { strokeWidth: 0 },
        spokes: { strokeWidth: 0 },
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
        color: "#8567E6",
      }
    }
  }

  return (
    <Container
      style={{ width: isVisibled ? "30rem" : 0 }}
      transition={{ type: "spring", duration: 1 }}
    > 
      {chartExists && (
        <ReactApexChart 
          type="polarArea" 
          series={roomResponse.series} 
          options={options} 
        />
      )}

      {chartExists && (
        <Media>
          <h2>Media:</h2>
          <p>{roomResponse.media}</p>
        </Media>
      )}
    </Container>
  );
}