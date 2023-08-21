import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";

const Index = () => {
  var data = [
    {
      "id": 1,
      "name": "Sách tâm lý",
    },
    {
      "id": 2,
      "name": "Sách khoa học",
    },
    {
      "id": 3,
      "name": "Truyện tranh",
    },
  ]

  return (
    <div>
      <div className="mt-5 gap-5 xl:grid-cols-2">
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div class="relative flex items-center justify-between pt-4">
            <div class="text-xl font-bold text-navy-700 dark:text-white">
              Book categories list
            </div>
          </div>

          <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
            <table className="w-full">
              <thead>
                  <tr>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">#</p>
                      </th>
                      <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">CATEGORY NAME</p>
                      </th>
                      <th colSpan="3" className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                        <p className="text-xs tracking-wide text-gray-600">ACTION</p>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {data.map((row, key) => {
                  return (
                    <tr>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{key+1}</p>
                      </td>
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                        <p className="text-sm font-bold text-navy-700 dark:text-white">{row.name}</p>
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
