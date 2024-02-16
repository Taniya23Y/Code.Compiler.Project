import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function CodeEditor() {
    const currentLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    );
  const [value, setValue] = React.useState("console.log('hello world!');");

  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  //   return <div>CodeEditor</div>;

  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })}
    />
  );
}
