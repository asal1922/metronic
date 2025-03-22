import { useState } from "react";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import Image from "next/image";
import images from "../../../../../public/assets/images";
import Icon from "../../../../../public/assets/icons/fontAwesome";
import { TableData } from "./tableType";


const staticData: TableData[] = [
  { product: { title: "راه حل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "2,790$", status: "پرداخت شده" }, deposit: { deposit: "520$", status: "رد شد" }, representative: { representative: "بردلی بیل", role: "بیمه" }, status: "تایید شده", image: "one" },
  { product: { title: "توسعه دهنده Telgeram", items: ["c#", "ASP", "NET", "MS SQL"] }, price: { price: "4,790$", status: "پرداخت شده" }, deposit: { deposit: "593$", status: "رد شد" }, representative: { representative: "کریس تامپسون", role: "بازیکن والیبال" }, status: "در حال پردازش", image: "two" },
  { product: { title: "حقوق و دستمزد نرم افزار", items: ["PHP", "Laravel", "VueJs"] }, price: { price: "4,390$", status: "پرداخت شده" }, deposit: { deposit: "593$", status: "رد شد" }, representative: { representative: "زویی مک گی", role: "توسعه دهنده Ruby" }, status: "موفقیت آمیز", image: "three" },
  { product: { title: "سیستم مدیریت منابع انسانی", items: ["Python", "PostgreSQL", "ReactJS"] }, price: { price: "7,990$", status: "پرداخت شده" }, deposit: { deposit: "980$", status: "رد شد" }, representative: { representative: "براندون اینگرام", role: "بیمه" }, status: "رد شد", image: "four" },
  { product: { title: "تلگرام موبایل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "5,790$", status: "پرداخت شده" }, deposit: { deposit: "980$", status: "رد شد" }, representative: { representative: "زهرا محمدیان", role: "بیمه" }, status: "تایید شده", image: "five" },
  { product: { title: "توسعه دهنده Telgeram", items: ["c#", "ASP", "NET", "MS SQL"] }, price: { price: "4,790$", status: "پرداخت شده" }, deposit: { deposit: "593$", status: "رد شد" }, representative: { representative: "کریس تامپسون", role: "بازیکن والیبال" }, status: "در حال پردازش", image: "six" },
  { product: { title: "راه حل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "2,790$", status: "پرداخت شده" }, deposit: { deposit: "520$", status: "رد شد" }, representative: { representative: "بردلی بیل", role: "بیمه" }, status: "تایید شده", image: "seven" },
  { product: { title: "حقوق و دستمزد نرم افزار", items: ["PHP", "Laravel", "VueJs"] }, price: { price: "4,390$", status: "پرداخت شده" }, deposit: { deposit: "593$", status: "رد شد" }, representative: { representative: "زویی مک گی", role: "توسعه دهنده Ruby" }, status: "موفقیت آمیز", image: "eight" },
  { product: { title: "تلگرام موبایل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "5,790$", status: "پرداخت شده" }, deposit: { deposit: "980$", status: "رد شد" }, representative: { representative: "زهرا محمدیان", role: "بیمه" }, status: "تایید شده", image: "nine" },
  { product: { title: "راه حل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "2,790$", status: "پرداخت شده" }, deposit: { deposit: "520$", status: "رد شد" }, representative: { representative: "بردلی بیل", role: "بیمه" }, status: "تایید شده", image: "ten" },
  { product: { title: "راه حل", items: ["HTML", "JS", "ReactJs"] }, price: { price: "2,790$", status: "پرداخت شده" }, deposit: { deposit: "520$", status: "رد شد" }, representative: { representative: "بردلی بیل", role: "بیمه" }, status: "تایید شده", image: "eleven" },
];

const statusStyles: Record<string, string> = {
  "تایید شده": "text-sky-400",
  "در حال پردازش": "text-yellow-300",
  "موفقیت آمیز": "text-green-300",
  "رد شد": "text-red-300",
};

const fetchTableData = (page = 1, pageSize = 2): TableData[] => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return staticData.slice(start, end);
};

const InfoTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;

  const queryOptions: UseQueryOptions<TableData[], Error> = {
    queryKey: ["tableData", currentPage],
    queryFn: () => fetchTableData(currentPage, pageSize),
    staleTime: 5000,
  };

  const { data, isLoading, isError } = useQuery<TableData[], Error>(queryOptions);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error!</div>;
  }
  const TableHead = () => {
    const title = ['محصولات', 'قیمت', 'سپرده', 'نماینده', 'وضعیت']
    return (
      <thead>
        <tr className="bg-blue-500   text-white px-4">
          {title.map((item) => <th className="py-3 px-2 !text-start">{item}</th>)}
        </tr>
      </thead>
    )
  }

  const TableBody = () => {
    return (
      <tbody>
        {data?.map((row, index) => (
          <tr key={index} className='hover:bg-blue-100 transition-all duration-200'>
            <td className="p-4 border-b border-gray-300">
              <div className="flex gap-3 items-start">
                <div className="w-16 h-16">
                  <Image src={images.infoTable[row.image]} width={70} height={65} layout="responsive" alt="404 error" />
                </div>
                <div className="flex flex-col !text-start">
                  <span className="text-gray-800 font-bold">{row.product.title}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {row.product.items.map((item, idx) => (
                      <span key={idx} className="text-gray-400 text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-gray-300 text-gray-800 font-bold !text-start">
              {row.price.price}
            </td>
            <td className="p-4 border-b border-gray-300 text-gray-800 font-bold !text-start">
              {row.deposit.deposit}
            </td>
            <td className="p-4 border-b border-gray-300 text-gray-800 font-bold !text-start">
              {row.representative.representative}
            </td>
            <td className={`px-4 border-b border-gray-300 text-gray-800 font-bold text-sm !text-start ${statusStyles[row.status]}`}>
              {row.status}
            </td>
          </tr>
        ))}
      </tbody>
    )
  }
  return (
    <div className="!bg-gray-50 flex flex-col items-center page-contents min-h-screen p-6">
      <div className="overflow-x-auto w-full">
        <table className="w-full !px-4 border-collapse border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden" dir="rtl">
          <TableHead />
          <TableBody />
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={(currentPage * pageSize) >= staticData.length}
          className="px-3 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          <Icon name="chevronLeft" className="w-8 h-8" />
        </button>
        <button className="px-8 py-2 bg-gray-300 text-gray-700">
          {currentPage}
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-600"
        >
          <Icon name="chevronRight" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default InfoTable;
