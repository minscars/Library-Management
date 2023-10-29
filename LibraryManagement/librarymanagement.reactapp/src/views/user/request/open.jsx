import { MdCancel, MdModeEditOutline } from "react-icons/md";
import Card from "components/card";
import Checkbox from "components/checkbox";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";

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
    {
        "id": 3,
        "name": "Đắc nhân tâm",
        "publisher": "NXB Hoa Hồng",
        "category": "Sách tâm lý",
        "progress": 20,
    },
    {
        "id": 3,
        "name": "Đắc nhân tâm",
        "publisher": "NXB Hoa Hồng",
        "category": "Sách tâm lý",
        "progress": 20,
    },
    {
        "id": 3,
        "name": "Đắc nhân tâm",
        "publisher": "NXB Hoa Hồng",
        "category": "Sách tâm lý",
        "progress": 20,
    },
    {
        "id": 3,
        "name": "Đắc nhân tâm",
        "publisher": "NXB Hoa Hồng",
        "category": "Sách tâm lý",
        "progress": 20,
    },
    {
        "id": 3,
        "name": "Đắc nhân tâm",
        "publisher": "NXB Hoa Hồng",
        "category": "Sách tâm lý",
        "progress": 20,
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
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-full w-full xl:col-span-1 2xl:col-span-2">
            <Card extra={"w-full p-4 h-full"}>
                <div class="mt-8 overflow-x-scroll xl:overflow-hidden">
                    <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700">
                            </th>
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, key) => {
                        return (
                            <tr>
                            <td  className="pt-[14px] pb-[18px]"><Checkbox/></td>
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
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                </div>
            </Card>
        </div>
        <div className="col-span-1 w-full rounded-xl 2xl:col-span-1">
            <Card extra={"w-full p-4"}>
                {/* Background and profile */}
                <div
                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                    style={{ backgroundImage: `url(${banner})` }}
                >
                    <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                    <img className="h-full w-full rounded-full" src={avatar} alt="" />
                    </div>
                </div>

                {/* Name and position */}
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                    Adela Parkson
                    </h4>
                    <p className="text-base font-normal text-gray-600">Product Manager</p>
                </div>

                {/* Post followers */}
                <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
                        <p className="text-sm font-normal text-gray-600">Posts</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 dark:text-white">
                            9.7K
                        </p>
                        <p className="text-sm font-normal text-gray-600">Followers</p>
                    </div>
                        <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 dark:text-white">
                            434
                        </p>
                    <p className="text-sm font-normal text-gray-600">Following</p>
                    </div>
                </div>

                <div className="mr-4 flex items-end justify-center text-red-600 dark:text-white">
                    <button
                        href=""
                        className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                    >
                        Open request
                    </button>
                </div>
            </Card>
        </div>
    </div>
  );
};

export default Index;