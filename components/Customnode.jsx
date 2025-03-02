import { Handle, Position, ReactFlow, useReactFlow } from '@xyflow/react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CustomNode = ({ id, data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openpopup, setOpenPopup] = React.useState(false);
  const [subopenpopup, setsubOpenPopup] = React.useState(false);
  const [newnode, setNewNode] = React.useState({
    id: '0',
    position: { x: 0, y: 0 },
    data: { label: '' },
    type: 'custom',
  });

  const [newedge, setNewEdge] = React.useState( { id: '', source: '', target: '', type: 'custom', animated: true, data: {} },);
  const [editingnode, seteditingnode] = React.useState("");
  
  const {setNodes,setEdges}=useReactFlow();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation(); // Stop event propagation
   setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlesubAddNode = () => {
    const newNodeId = `node-${Math.random().toString(36).substr(2, 9)}`;

    const newNode = {
      id: newNodeId,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: newnode.data.label || 'New Node' },
      type: newnode.type,
    };

    console.log(newNode);
    setNodes((nds) => [...nds, newNode]);
    setEdges((eds) => [
      ...eds, {
        id: `${id}-${newNodeId}`, source: id, target: newNodeId, type: 'custom', animated: true, data: {}
      } ]);
    setNewNode({ id: '0', position: { x: 0, y: 0 }, data: { label: '' }, type: 'custom' });
    setsubOpenPopup(false); // Close the popup after adding the node
  };

  const onEdit = () => {
    // Update the node's label in the nodes array
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: editingnode } } // Immutable update
          : node
      )
    );
    setOpenPopup(false); // Close the popup after editing the node
  
  }


  const openpop = () => {
    seteditingnode(data.label); // Initialize editingnode with the current label
    setOpenPopup(true);
    setsubOpenPopup(false); // Close sub-node popup
    setAnchorEl(null);
  };

  const closepop = () => {
    setOpenPopup(false);
    setsubOpenPopup(false);

  };
  

  return (
    <>
      <div className='relative w-full h-full'>
      <div className="bg-white z-20  border shadow-md p-3 rounded-lg relative">
        {/* Remove Button */}
        <button
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
          onClick={() => data.onRemove(id)}
        >
          ✖
        </button>

        {/* Node Content with Menu */}
        <div className="font-semibold text-black flex items-center gap-2">
          {data.label}
          <div>
            <button
              onClick={handleClick}
              className="text-xs w-6 h-6 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-600 cursor-pointer"
              aria-label="Open Menu"
              aria-haspopup="true"
            >
              ⋮
            </button>

            {/* Material-UI Menu */}
            <Menu
              id="node-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'node-menu-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  openpop(); // Call openpop to initialize editingnode and open the popup
                  handleClose();
                }}
              >
                Edit Node
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setsubOpenPopup(true);
                  setOpenPopup(false); // Close edit popup
                  setAnchorEl(null);  // Call openpop to initialize editingnode and open the popup
                  handleClose();
                }}
              >
                Add Sub-Node
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Handles for connecting edges */}
        <Handle type="source" position={Position.Bottom} />
        <Handle type="target" position={Position.Top} />
      </div>
      {openpopup && (
      <div className="absolute p-4 w-96  text-black rounded-xl bg-white border border-2-black">
        <div>
          <label className="block font-bold">Node Name</label>
          <input
            placeholder="Enter your Node"
            className="border w-full block border-2-black p-3 text-center rounded-xl mb-2"
            type="text"
            value={editingnode}
            onChange={(e) => {
              console.log("Input value:", e.target.value); 
              seteditingnode(e.target.value);
            }}
          />
        </div>
        <button
          className="border w-full block border-2-black p-3 text-center rounded-xl mb-2 bg-black text-white"
        
          onClick={onEdit}
        >
          Save Changes
        </button>
        <button
          className="border w-full block border-2-black p-3 text-black text-center rounded-xl"
          
          onClick={closepop}
        >
          Discard
        </button>
      </div>
   
)}

{subopenpopup && (
      <div className="absolute p-4 w-96  rounded-xl text-black bg-white border border-2-black">
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
          onClick={handlesubAddNode}
        >
          Add Node
        </button>
        <button
          className="border w-full block border-2-black p-3 text-black  text-center rounded-xl"
          onClick={closepop}
        >
          Close
        </button>
      </div>
   
)}


      </div>
      
    </>
  );
};

export default CustomNode;