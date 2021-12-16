import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material.css';
import Pusher from 'pusher-js';
import React, { useState } from 'react';
import CodeEditorContent from './components/CodeEditorContent';
import CodeEditorHeader from './components/CodeEditorHeader';
import CodeEditorResult from './components/CodeEditorResult';

// * dependency: codemiror2; pusher-js; bulma;

const styles = {
  playground: {
    width: '100vw',
    backgroundColor: '#1E1E2C'
  },
  title: {
    color: 'red'
  }
};

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState({
    html: '',
    css: '',
    js: ''
  });
  const [isOpen, setIsOpen] = useState({
    html: false,
    css: false,
    js: false
  });

  const pusher = React.useMemo(
    () =>
      new Pusher('18160601861a89d7f8f7', {
        cluster: 'eu',
        forceTLS: true
      }),
    []
  );

  const channel = React.useMemo(() => pusher.subscribe('editor'), [pusher]);

  const handleUpdate = React.useCallback(() => {
    channel.bind('text-update', (data: any) => {
      setCode({
        html: data.html,
        css: data.css,
        js: data.js
      });
    });
  }, [channel]);

  const handleOpen = (name: keyof typeof isOpen) => {
    setIsOpen({ ...isOpen, [name]: !isOpen[name] });
  };

  const codeStructure: {
    name: keyof typeof isOpen;
    updateValue: (a: any) => void;
    value: string;
  }[] = [
    {
      name: 'html',
      updateValue: value =>
        setCode({
          ...code,
          html: value
        }),
      value: code.html
    },
    {
      name: 'css',
      updateValue: value =>
        setCode({
          ...code,
          css: value
        }),
      value: code.css
    },
    {
      name: 'js',
      updateValue: value =>
        setCode({
          ...code,
          js: value
        }),
      value: code.js
    }
  ];

  return (
    <div>
      <h1 style={styles.title} className="box">
        You can find your result at downstairs
      </h1>
      <section className="playground">
        {codeStructure.map(item => (
          <div key={item.name} className="card">
            <CodeEditorHeader name={item.name.toLocaleUpperCase()} handleOpen={() => handleOpen(item.name)} />
            <CodeEditorContent isOpen={isOpen[item.name]} updateValue={item.updateValue} value={item.value} />
          </div>
        ))}
      </section>
      <CodeEditorResult html={code.html} js={code.js} css={code.css} handleUpdate={handleUpdate} />
    </div>
  );
};

export default CodeEditor;
