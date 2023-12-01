import { IoDocuments } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import Widget from "components/widget/Widget";
import statisticApi from "api/statisticApi";
import { useEffect, useState } from "react";
import BarChart from "components/charts/BarChart";
import LineChart from "components/charts/LineChart";
import PieChart from "components/charts/PieChart";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
  pieChartOptions,
} from "variables/charts";
import Card from "components/card";

const Dashboard = () => {
  var defaulColors = [
    "#ff2d55",
    "#edb109",
    "#9aed09",
    "#09edda",
    "#0914ed",
    "#d809ed",
    "#d809ed",
    "#8c9351",
    "#171919",
  ];
  const [statistic, setStatistic] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  useEffect(() => {
    const getStatistic = async () => {
      const data = await statisticApi.GetStatisticInfo();
      setStatistic(data);

      //Bar chart
      var categoryNameList = [];
      var requestsByCategoryName = [];
      data.sumOfRequestByBookCategory?.map((x) => {
        categoryNameList.push(x.categoryName);
        requestsByCategoryName.push(x.sumOfRequests);
      });
      barChartDataDailyTraffic[0].data = requestsByCategoryName;
      barChartDataDailyTraffic[0].name = "Số lượt mượn";
      barChartOptionsDailyTraffic.xaxis.categories = categoryNameList;

      //Line chart
      var monthList = [];
      var requestsByMonth = [];
      data.sumOfRequestByMonth?.map((x) => {
        monthList.push("Th-" + x.month);
        requestsByMonth.push(x.sumOfRequests);
      });
      lineChartDataTotalSpent[0].data = requestsByMonth;
      lineChartDataTotalSpent[0].name = "Số lượt mượn";
      lineChartOptionsTotalSpent.xaxis.categories = monthList;

      //Pie chart
      var labels = [];
      var pieChartDataArray = [];
      data.booksRateByCategory?.map((x) => {
        labels.push(x.categoryName);
        pieChartDataArray.push(x.sumOfBooks);
      });
      pieChartOptions.labels = labels;
      pieChartOptions.colors = defaulColors.slice(0, labels?.length);
      pieChartOptions.fill.colors = defaulColors.slice(0, labels?.length);
      setPieChartData(pieChartDataArray);
    };
    getStatistic();
  }, []);

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Số đầu sách"}
          subtitle={statistic.sumOfBooks}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Số lượt mượn sách"}
          subtitle={statistic.sumOfCompleteRequests}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Số bạn đọc thành viên"}
          subtitle={statistic.sumOfReaders}
        />
      </div>

      <div className="mt-5">
        <Card extra="pb-7 p-[20px]">
          <div className="flex flex-row justify-between">
            <div className="ml-1 pt-2">
              <p className="text-sm font-medium leading-4 text-gray-600">
                Số lượt mượn sách theo loại
              </p>
            </div>
          </div>

          <div className="h-[300px] w-full pb-0 pt-10">
            <BarChart
              chartData={barChartDataDailyTraffic}
              chartOptions={barChartOptionsDailyTraffic}
            />
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card extra="!p-[20px] text-center">
          <div className="flex flex-row justify-between">
            <div className="ml-1 pt-2">
              <p className="text-sm font-medium leading-4 text-gray-600">
                Số lượt mượn sách 6 tháng gần nhất
              </p>
            </div>
          </div>

          <div className="h-[300px] w-full pb-0 pt-10">
            <LineChart
              options={lineChartOptionsTotalSpent}
              series={lineChartDataTotalSpent}
            />
          </div>
        </Card>
      </div>

      <div className="mt-5">
        <Card extra="rounded-[20px] p-3">
          <div className="flex flex-row justify-between px-3 pt-2">
            <div>
              <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                Tỉ lệ đầu sách theo loại
              </h4>
            </div>
          </div>

          <div className="mb-auto flex h-[220px] w-full items-center justify-center">
            <PieChart options={pieChartOptions} series={pieChartData} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
