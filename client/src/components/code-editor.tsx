import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: 'html' | 'css' | 'javascript';
  height?: string;
  theme?: 'vs-dark' | 'vs-light';
}

export default function CodeEditor({ 
  value, 
  onChange, 
  language, 
  height = '400px',
  theme = 'vs-dark'
}: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoEditor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current && !monacoEditor.current) {
      // Configure Monaco Editor
      monaco.editor.defineTheme('MsoSTEM-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'tag', foreground: 'a78bfa' },
          { token: 'attribute.name', foreground: '60a5fa' },
          { token: 'attribute.value', foreground: '34d399' },
          { token: 'string', foreground: '34d399' },
          { token: 'keyword', foreground: 'ec4899' },
          { token: 'comment', foreground: '6b7280' },
        ],
        colors: {
          'editor.background': '#1f2937',
          'editor.foreground': '#e5e7eb',
          'editorLineNumber.foreground': '#6b7280',
          'editorCursor.foreground': '#8b5cf6',
          'editor.selectionBackground': '#374151',
          'editor.lineHighlightBackground': '#374151',
        }
      });

      // Create the editor
      monacoEditor.current = monaco.editor.create(editorRef.current, {
        value: value,
        language: language,
        theme: theme === 'vs-dark' ? 'MsoSTEM-dark' : 'vs-light',
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollbar: {
          vertical: 'visible',
          horizontal: 'visible',
          useShadows: false,
          verticalHasArrows: false,
          horizontalHasArrows: false,
        },
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        overviewRulerBorder: false,
        wordWrap: 'on',
        tabSize: 2,
        insertSpaces: true,
      });

      // Listen for content changes
      monacoEditor.current.onDidChangeModelContent(() => {
        const currentValue = monacoEditor.current?.getValue() || '';
        onChange(currentValue);
      });
    }

    return () => {
      if (monacoEditor.current) {
        monacoEditor.current.dispose();
        monacoEditor.current = null;
      }
    };
  }, []);

  // Update editor value when prop changes
  useEffect(() => {
    if (monacoEditor.current && monacoEditor.current.getValue() !== value) {
      monacoEditor.current.setValue(value);
    }
  }, [value]);

  // Update language when prop changes
  useEffect(() => {
    if (monacoEditor.current) {
      const model = monacoEditor.current.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [language]);

  return (
    <div 
      ref={editorRef} 
      style={{ height }}
      className="border border-gray-300 rounded-lg overflow-hidden"
    />
  );
}
