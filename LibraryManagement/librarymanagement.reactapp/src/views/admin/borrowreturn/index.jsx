import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";

const Index = () => {
  var data = [
    {
      "id": 1,
      "name": "Đắc nhân tâm",
      "publisher": "NXB Hoa Hồng",
      "category": "Sách tâm lý",
      "progress": 50,
    },
    {
      "id": 2,
      "name": "Mộng dưới hoa",
      "publisher": "NXB Hoa Hồng",
      "category": "Truyện dài",
      "progress": 80,
    },
    {
      "id": 3,
      "name": "Đắc nhân tâm",
      "publisher": "NXB Hoa Hồng",
      "category": "Sách tâm lý",
      "progress": 20,
    },
  ]

  return (
    <div>
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Sách
            </div>
          </div>

          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                  <tr>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">TÊN SÁCH</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">NHÀ XUẤT BẢN</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">THỂ LOẠI</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">SỐ LƯỢT MƯỢN</p>
                      </th>
                      <th colSpan="3" className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">THAO TÁC</p>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {data.map((row, key) => {
                  return (
                    <tr>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.name}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.publisher}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.category}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.progress}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <MdModeEditOutline /> 
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <MdCancel className="text-red-500" /> 
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <MdCancel className="text-red-500" /> 
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
