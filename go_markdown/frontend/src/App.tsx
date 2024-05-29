import './App.css'
import {useRef, useState} from "react";
import { updateValue, newAction, openAction, saveAction, exportAction } from './Actions'
import { Button } from './Button';
import { TextArea } from './TextArea';
import { MarkdownPreview } from './MarkdownPreview';

function App() {
  const [filename, setFileName] = useState(''); // initial state, the method triggers a re-render
  const [markdownFile, setMarkdownFile] = useState(''); // initial state, the method triggers a re-render
  const ref = useRef<HTMLTextAreaElement>(null); // default value text area is null

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-800">
      <div className="flex justify-end p-4">
        <h1>{filename}</h1>
        <div className="flex gap-2">
          <Button onClick={() => newAction(markdownFile, setMarkdownFile, setFileName, ref)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-gray-500 dark:text-gray-200"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" x2="12" y1="18" y2="12"></line>
              <line x1="9" x2="15" y1="15" y2="15"></line>
            </svg>
          </Button>
          <Button onClick={() => openAction(setMarkdownFile, setFileName, ref)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-gray-500 dark:text-gray-200"
            >
              <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"></path>
            </svg>
          </Button>
          <Button onClick={saveAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-gray-500 dark:text-gray-200"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
          </Button>
          <Button onClick={exportAction}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" text-gray-500 dark:text-gray-200"
            >
              <path d="M12 3v12"></path>
              <path d="m8 11 4 4 4-4"></path>
              <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex flex-grow overflow-x-hidden">
        <div className="w-1/2 p-4 overflow-y-auto">
          <TextArea onChange={(event) => updateValue(event, setMarkdownFile)} ref={ref} />
        </div>
        <div className="w-1/2 p-4 overflow-y-auto">
          <MarkdownPreview markdownFile={markdownFile} />
        </div>
      </div>
    </div>
  )
}

export default App