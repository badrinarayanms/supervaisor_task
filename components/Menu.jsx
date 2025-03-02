'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useReactFlow } from '@xyflow/react';
import { GoogleGenerativeAI } from "@google/generative-ai";

import axios from 'axios';
import { CircularProgress } from '@mui/material';






export default function BasicMenu() {
  const { setNodes,setEdges } = useReactFlow();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [openpopup, setOpenPopup] = useState(false);
  const [aiopenpopup, setaiOpenPopup] = useState(false);
  const [errorpop,seterrorpop]= useState(false);
  const [newnode, setNewNode] = useState({
    id: '0',
    position: { x: 0, y: 0 },
    data: { label: '' },
    type: 'custom',
  });
  const [ainode, setainode] = useState('');
  const [result, setResult] = useState('');
  const [isloading,setisloading]= useState(false)
  


  const handleAddNode = () => {
    const newNodeId = `node-${Math.random().toString(36).substr(2, 9)}`;

    const newNode = {
      id: newNodeId,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: newnode.data.label || 'New Node' },
      type: newnode.type,
    };
    setNodes((nds) => [...nds, newNode]);

    setNewNode({ id: '0', position: { x: 0, y: 0 }, data: { label: '' }, type: 'custom' });
    setOpenPopup(false); // Close the popup after adding the node
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openpop = () => {
    setOpenPopup(true);
    setAnchorEl(null);
  };
  const aiopenpop = () => {
    setaiOpenPopup(true);
    setAnchorEl(null);
  };
  const aiclosepop = () => {
    setOpenPopup(false);
    setaiOpenPopup(false);
    setNewNode({ id: '0', position: { x: 0, y: 0 }, data: { label: '' }, type: 'custom' });
  };

  const closepop = () => {
    setaiOpenPopup(false);
    setOpenPopup(false)
    setNewNode({ id: '0', position: { x: 0, y: 0 }, data: { label: '' }, type: 'custom' });
  };
  const clearcanvas = () => {
    setNodes([]);
  };  
  const callapi = async(ainode) => { 
    try {
      const prompt =`Create a flowchart for ${ainode} in the JSON format mentioned  below. The number of nodes and edges should be determined based on the complexity and structure of the provided input. Each node represents a key element, and edges define logical relationships between them. Ensure nodes are positioned logically level by levl below with proper spaing on leftand right of nodes based on each nodes visibility for clear readability. 
  Strictly return a valid JSON output without any additional text or explanations. Just provide the JSON response in the following format:

{
  "nodes": [
    { "id": "1", "position": { "x": 100, "y": 100 }, "data": { "label": "Node 1" }, "type": "custom" }
  ],
  "edges": [
    { "id": "1-2", "source": "1", "target": "2", "type": "custom", "animated": true, "data": {} }
  ]
}`;
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      // Extract JSON from Markdown code block (if present)
    let jsonString = text;
    const jsonStartIndex = text.indexOf('{');
    const jsonEndIndex = text.lastIndexOf('}');

    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      jsonString = text.substring(jsonStartIndex, jsonEndIndex + 1);
    }

    const jsonResponse = JSON.parse(jsonString);
      
      return jsonResponse;
    } catch (error) {

      console.error('Gemini error:', error);
      seterrorpop(true);
      throw new Error('Failed to generate content');
    }
  }


  const generateChart = async () => {
    setisloading(true)
    setaiOpenPopup(false);
    try {
      const chartData = await callapi(ainode);
     
  
      
      setNodes(chartData.nodes);
      setEdges(chartData.edges);
      setisloading(false)
      
    } catch (error) {
      seterrorpop(true);
      console.error('Error generating chart:', error);
    }
  };
  return (
    <>
      <div className="absolute Z-10 top-0 left-0 p-4">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          color="white"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          My Tools <ExpandMoreIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={openpop}>Add Node</MenuItem>
          <MenuItem onClick={aiopenpop}>Text to Chart</MenuItem>
          <MenuItem onClick={clearcanvas}>Clear Canvas</MenuItem>
        </Menu>
      </div>
      {isloading && (<div className="absolute  top-0  left-0 flex justify-center items-center w-screen h-screen text-black bg-opacity-50">
      
      <div className="absolute p-4 w-72 md:w-96 flex justify-center items-center rounded-xl bg-white border border-2-gra">
      
        <CircularProgress color='black' size="3rem" /> <h1 className='ml-10 text-4xl font-bold'>Loading...</h1>
       
        
      </div>
   
  </div> )}
      {openpopup && (<div className="absolute  top-0  left-0 flex justify-center items-center w-screen h-screen text-black bg-opacity-50">
      
      <div className="absolute p-4 w-72 md:w-96  rounded-xl bg-white border border-2-black">
        <div>
          <label className="block font-bold">Node Name</label>
          <input
            placeholder="Enter your Node"
            className="border w-full block border-2-black p-3 text-center rounded-xl mb-2"
            type="text"
            onChange={(e) => {
              setNewNode({ ...newnode, data: { label: e.target.value } });
            }}
          />
        </div>
        <button
          className="border w-full block border-2-black p-3 text-center rounded-xl mb-2 bg-black text-white"
          onClick={handleAddNode}
        >
          Add Node
        </button>
        <button
          className="border w-full block border-2-black p-3 text-black text-center rounded-xl"
          onClick={closepop}
        >
          Close
        </button>
      </div>
   
  </div> )}
  

  {aiopenpopup && (<div className="absolute  top-0  left-0 flex justify-center items-center w-screen h-screen text-black bg-opacity-50">
      
      <div className="absolute p-4 w-72 md:w-96  rounded-xl bg-white border border-2-black">
        <div>
          <label className="block font-bold">Node Name</label>
          <input
            placeholder="Enter your Node"
            className="border w-full block border-2-black p-3 text-center rounded-xl mb-2"
            type="text"
            onChange={(e) => {
              setainode(e.target.value);
            }}
          />
        </div>
        <button
          className="border w-full block border-2-black p-3 text-center rounded-xl mb-2 bg-black text-white"
          onClick={generateChart}
        >
          Make Chart
        </button>
        <button
          className="border w-full block border-2-black p-3 text-center rounded-xl"
          onClick={aiclosepop}
        >
          Close
        </button>
      </div>
   
  </div> )}

  
    </>
  );
}

