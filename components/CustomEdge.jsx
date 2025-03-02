import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@xyflow/react';
import { useState } from 'react';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, data }) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY });
    const [surepop,setsurepop]=useState(false);
    const openpop = (event) => {
      event.stopPropagation(); // Stop event propagation
      setsurepop(true);
    };
  
    const closepop = (event) => {
      event.stopPropagation(); // Stop event propagation
      setsurepop(false);
    };
  
    const handleRemoveEdge = (event) => {
      event.stopPropagation(); // Stop event propagation
      data.onRemove(id); // Call the onRemove function passed in data
      setsurepop(false); // Close the popup
    };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
        >
          
           <button className='text-[0.5rem] w-full'
        onClick={openpop}
        style={{  
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',  
          border: '1px solid #e5e7eb',  
          backgroundColor: '#ffffff',  
          color: '#4b5563',  
          cursor: 'pointer',  
        }}
        aria-label="Open Menu"
        aria-haspopup="true"
      >
            Remove Connection
          </button>
        </div>
        {surepop && (
        <div
          style={{
            position: 'absolute',
            top: `${labelY}px`, // Position the popup near the edge label
            left: `${labelX}px`,
            zIndex: 1000, // Ensure the popup is above other elements
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'auto', 
          }}
        >
          <div className="p-4 w-96 rounded-xl text-black bg-white border border-2-black">
            <div className="text-center">
              <label className="block font-bold">Removing the connection will disconnect connection between the nodes.
              </label>
            </div>
            <button
              className="border w-full block border-2-black p-3 text-center rounded-xl mb-2 bg-black text-white"
              onClick={handleRemoveEdge}
            >
              Remove Connection
            </button>
            <button
              className="border w-full block border-2-black p-3 text-black text-center rounded-xl"
              onClick={closepop}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      </EdgeLabelRenderer>
      
      
    </>
  );
};

export default CustomEdge;
