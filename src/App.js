import React, { useEffect } from 'react';
import {Provider } from 'react-redux'
import { Editor, updateEditor } from "@teselagen/ove";
import store from "./store";

import '@teselagen/ove/style';

function App() {
  useEffect(() => {
    updateEditor(store, "DemoEditor", {
      sequenceData: {
        circular: true,
        sequence:
          "gtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgacccccgtagagagagagtgagcccgaccccc",
        features: [
          {
            id: "2oi452",
            name: "I'm a feature :)",
            start: 10,
            end: 20
          }
        ]
      }
    });
  });
  const editorProps = {
    editorName: "DemoEditor",
    isFullscreen: true,
    showMenuBar: true
  };

  return (
    <Provider store={store}>
      <Editor {...editorProps} />
    </Provider>
  );
}

export default App;
