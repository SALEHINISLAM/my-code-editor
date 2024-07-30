
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControllEditor, Controlled} from 'react-codemirror2'
import "./App.css";
import { useState } from 'react'
import Iframe from 'react-iframe'
import { parse } from 'postcss'

function App() {
  const [code, setCode]=useState('');
  const run=()=>{
    let htmlCode=document.getElementById('html-code').value;
    let cssCode=document.getElementById('css-code').value;
    let jsCode=document.getElementById('js-code').value;
    document.getElementById('output').innerHTML=`<html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
    `; 
  }
  return (
    <>
      <div className="grid grid-cols-1 w-screen min-h-screen">
        <div className="card bg-base-300 rounded-box grid  flex-grow place-items-center">
          <div className="grid md:grid-cols-3 w-full grid-cols-1 h-full">
            <div className="card bg-base-300 rounded-box grid  place-items-center border p-1">
              <textarea
                className="textarea textarea-bordered mockup-code w-full h-full rounded-box overflow-y-auto text-base-content text-lg"
                placeholder="Wite HTML Code here" spellCheck='false' id="html-code"
              ></textarea>
            </div>

            <div className="card bg-base-300 rounded-box grid  place-items-center border">
              <textarea
                className="textarea textarea-bordered mockup-code w-full h-full rounded-box overflow-y-auto text-base-content text-lg"
                placeholder="Wite CSS Code here" spellCheck='false' id="css-code"
              ></textarea>
            </div>

            <div className="card bg-base-300 rounded-box grid place-items-center border">
              <textarea
                className="textarea textarea-bordered mockup-code w-full h-full rounded-box overflow-y-auto text-base-content text-lg"
                placeholder="Wite JavaScript Code here" id="js-code" spellCheck='false'
              ></textarea>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 rounded-box  flex-grow  ">
          <button className="btn" onClick={run}>
            Run Code
          </button>
          <div className="mockup-browser h-full w-full overflow-auto">
            <div className="w-full h-full overflow-auto" id='output'></div>
          </div>
          </div>
        </div>
      
    </>
  );
}

export default App;
