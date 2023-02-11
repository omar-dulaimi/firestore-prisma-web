import { javascript } from "@codemirror/lang-javascript";
import { basicSetup } from "@uiw/react-codemirror";

import BaseEditor from "./base";

function JsonEditor({ editorValue, onChange }: {editorValue: string; onChange: any }) {
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
        javascript(),
      ]}
      onChange={onChange}
      theme="dark"
      autoFocus={true}
    />
  );
}

export default JsonEditor;
