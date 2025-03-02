import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@xyflow/react';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, data }) => {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, targetX, targetY });
    

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
        onClick={() => data.onRemove(id)}
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
      </EdgeLabelRenderer>
      
    </>
  );
};

export default CustomEdge;
