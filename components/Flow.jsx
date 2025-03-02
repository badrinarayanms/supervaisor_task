'use client';

import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useState } from 'react';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';


const STORAGE_KEY = 'react-flow-data';


const initNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Node 1' }, type: 'custom' },
  { id: '2', position: { x: 300, y: 200 }, data: { label: 'Node 2' }, type: 'custom' },
];

const initEdges = [
  { id: '1-2', source: '1', target: '2', type: 'custom', animated: true, data: {} },
];

function Flow() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const [newnode, setNewNode] = useState({
      id: '0',
      position: { x: 0, y: 0 },
      data: { label: '' },
      type: 'custom',
    });
 useEffect(() => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedData);
    setNodes(savedNodes);
    setEdges(savedEdges);
  } else {
   
    setNodes(initNodes);
    setEdges(initEdges);
  }
}, []);


useEffect(() => {
  const flowData = JSON.stringify({ nodes, edges });
  localStorage.setItem(STORAGE_KEY, flowData);
}, [nodes, edges]);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => [
      ...eds,
      {
        id: `${connection.source}-${connection.target}`,
        source: connection.source,
        target: connection.target,
        type: 'custom',
        animated: true,
        data: { onRemove: handleRemoveEdge },
      },
    ]);
  }, []);



  const handleRemoveNode = (nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  
  const handleRemoveEdge = (edgeId) => {
    setEdges((eds) => eds.filter((edge) => edge.id !== edgeId));
  };

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
    
  };

  return (
    <div className="h-screen w-screen">
      {nodes.length==0&&(<div className='z-10 absolute w-full h-full flex justify-center items-center'>
      <div className="absolute z-10 p-4 w-96  rounded-xl text-black bg-white border border-2-black">
        <div>
          <label className="block font-bold">Node Name</label>
          <input
            placeholder="Enter your Node"
            className="border w-full block border-2-black p-3 text-center rounded-xl mb-2"
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
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
          className="border w-full block border-2-black p-3 text-black  text-center rounded-xl"
           
        >
          Close
        </button>
      </div>
      </div>)}
      
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: { ...node.data, onRemove: handleRemoveNode },
        }))}
        edges={edges.map((edge) => ({
          ...edge,
          data: { ...edge.data, onRemove: handleRemoveEdge },
        }))}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={{ custom: CustomNode }}
        edgeTypes={{ custom: CustomEdge }}
      >
        <Background />
        <Controls />
      </ReactFlow>

      
    </div>
  );
}

export default Flow;
