import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
const CodeEditorContent: React.FC<{ isOpen: boolean; updateValue: (value: string) => void; value: string }> = ({
  isOpen,
  updateValue,
  value
}) => {
  const codeMirrorOptions = React.useMemo(
    () => ({
      theme: 'material',
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true
    }),
    []
  );

  return (
    <>
      {isOpen && (
        <CodeMirror
          value={value}
          options={{
            mode: 'htmlmixed',
            ...codeMirrorOptions
          }}
          // we use here ts-ignore, since tslint don't allow make unuse values
          // @ts-ignore
          onBeforeChange={(_, __, value) => {
            updateValue(value);
          }}
        />
      )}
    </>
  );
};

export default CodeEditorContent;
