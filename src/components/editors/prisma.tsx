import { basicSetup } from "@uiw/react-codemirror";
import BaseEditor from "./base";

function PrismaEditor({ editorValue }: { editorValue: string }) {
  return (
    <BaseEditor
      value={editorValue}
      height="95vh"
      width="40vw"
      style={{ margin: "1rem" }}
      extensions={[
        basicSetup({
          lineNumbers: true,
          highlightActiveLineGutter: true,
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
          tabSize: 2,
        }),
      ]}
      theme="dark"
      autoFocus={true}
      editable={false}
    />
  );
}

export default PrismaEditor;
