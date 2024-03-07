import CodeItems from "@/components/CodeItems";
import { useGetAllCodesQuery } from "@/redux/slices/api";

export default function AllCodes() {
  const { data: allCodes } = useGetAllCodesQuery();
  return allCodes?.length !== 0 ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
      {allCodes?.map((codeItems) => {
        return (
          <CodeItems deleteBtn={false} key={codeItems._id} data={codeItems} />
        );
      })}
    </div>
  ) : (
    <p className="block w-full text-slate-500 font-mono text-center p-3">No Codes Found!</p>
  );
}