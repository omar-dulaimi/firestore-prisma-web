import { ReactCodeMirrorProps } from "@uiw/react-codemirror";
import dynamic from "next/dynamic";

const BaseEditor: React.ComponentType<ReactCodeMirrorProps> = dynamic(
  async () => {
    const CodeMirror = await import("@uiw/react-codemirror");
    return CodeMirror;
  },
  { ssr: false }
);

export default BaseEditor;
