import { useNavigate, useParams } from "react-router-dom";
import { fetchMetricKey } from "../../hooks/use-fetch-metric-data";
import LineChart from "../../components/LineChart/LineChart";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { queryClient } from "../../main";
import { ChartDatasets } from "../../types/metric";
import { getMetricData } from "../../services/metrics";
import { DatesContainer, MetricContainer, StyledButton } from "./Metric.styles";
import { MAX_DAYS, addDays } from "../../utils/days";

const Metric = () => {
  const { metricName } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(new Date());
  const [chartData, setChartData] = useState<ChartDatasets>(
    {} as ChartDatasets
  );

  if (!metricName) {
    navigate("404");
  }

  const onChangeStartDate = (date: Date) => {
    const newMaxDate = addDays(date, MAX_DAYS);
    setMaxDate(newMaxDate);
    setStartDate(date);
  };

  const handleSearch = async () => {
    try {
      const data = await queryClient.fetchQuery({
        queryKey: fetchMetricKey,
        queryFn: async () =>
          await getMetricData(metricName!, startDate, endDate),
      });
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MetricContainer>
      <DatesContainer>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => onChangeStartDate(date)}
        />
        <DatePicker
          selected={endDate}
          maxDate={maxDate}
          minDate={startDate}
          onChange={(date: Date) => setEndDate(date)}
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </DatesContainer>
      {chartData && chartData?.data && chartData?.data.length ? (
        <LineChart chartData={chartData} chartDataLabel={metricName!} />
      ) : (
        <>No data</>
      )}
    </MetricContainer>
  );
};

export default Metric;
