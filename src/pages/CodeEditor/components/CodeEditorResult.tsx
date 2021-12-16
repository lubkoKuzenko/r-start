import React, { RefObject, useEffect } from 'react';

const styles = {
  result: {
    left: '600px',
    overflow: 'hidden'
  },
  iframe: {
    width: '95vw',
    height: '500px'
  }
};

const CodeEditorResult: React.FC<{ html: string; js: string; css: string; handleUpdate: () => void }> = ({
  html,
  css,
  js,
  handleUpdate
}) => {
  const iframeRef = React.useRef<HTMLIFrameElement>();

  const runCode = React.useCallback(() => {
    const document = (iframeRef.current && iframeRef.current?.contentDocument) ?? false;

    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document && document.open();
    document && document.write(documentContents);
    document && document.close();
  }, [css, html, js]);

  useEffect(() => {
    runCode();
    handleUpdate();
  }, [html, css, js, runCode, handleUpdate]);

  return (
    <section style={styles.result}>
      <h4 className="card card-header-title">RESULT BELOW</h4>
      <iframe
        title="result"
        style={styles.iframe}
        className="iframe box mb-2"
        ref={iframeRef as RefObject<HTMLIFrameElement>}
      />
    </section>
  );
};

export default CodeEditorResult;
