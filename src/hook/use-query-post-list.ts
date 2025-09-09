import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getPostList } from "@/services/post";
const useQueryPostList = () => {
  const searchParmas = useSearchParams();
  const currentPage = searchParmas.get("page") || "1";

  return useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPostList(Number(currentPage)),
  });
};

export default useQueryPostList;
