'use client'
import { useEffect } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Flow from "../../components/Flow";
import BasicMenu from "../../components/Menu";

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-screen min-h-screen flex flex-col md:flex-row items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <ReactFlowProvider>
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-4">
          <Flow className="w-full md:w-3/4 h-full" />
          <BasicMenu className="w-full md:w-1/4 h-full" />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
