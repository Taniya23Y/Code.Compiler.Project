import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLoadCodeMutation } from "@/redux/slices/api";
import { updateFullCode, updateIsOwner } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
// import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { toast } from "sonner";

export default function Compiler() {
  // return <div>Compiler</div>;
  const { urlId } = useParams();
  const [loadEXistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      // const response = await axios.post("http://localhost:4000/compiler/load", {
      //   urlId: urlId,
      // });
      if (urlId) {
        const response = await loadEXistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
        dispatch(updateIsOwner(response.isOwner));
      }
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   if (error?.response?.status === 500) {
      //     toast("Invalid URL, default code Loaded");
      //   }
      // }
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  if (isLoading)
    return (
      <div
        className="w-full h-[calc(100dvh-60px)] flex justify-center items-center"
      >
        Loader
      </div>
    );
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
