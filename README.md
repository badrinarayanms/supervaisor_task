# Project Supervaisor AI: Interactive Flow Chart Application

## Overview
This project is an interactive flow chart application built using **React** and **React Flow**. It allows users to create, manipulate, and connect nodes in a flow chart. The application supports features like adding/removing nodes, attaching sub-nodes, defining custom relationships, and saving/loading flow charts. Additionally, it includes an **AI-generated chat feature** that converts text descriptions into flow charts.

## Features
- **Interactive Nodes:** Add, edit, and remove nodes.
- **Sub-Nodes:** Attach sub-nodes to parent nodes.
- **Custom Relationships:** Define relationships between nodes.
- **Save/Load Flow Charts:** Persist flow charts using `localStorage`.
- **AI-Generated Chat:** Convert text descriptions into flow charts using AI.
- **Responsive Design:** Works seamlessly on different screen sizes.

---

###Deployment
The application is deployed using Vercel. You can access it here:
Live Demo

### JSON Data Structure
The flow chart is driven by a custom JSON structure that represents nodes and edges. Here's an example:
```
{
  "nodes": [
    { "id": "1", "position": { "x": 100, "y": 100 }, "data": { "label": "Node 1" }, "type": "custom" },
    { "id": "2", "position": { "x": 300, "y": 200 }, "data": { "label": "Node 2" }, "type": "custom" }
  ],
  "edges": [
    { "id": "1-2", "source": "1", "target": "2", "type": "custom", "animated": true, "data": {} }
  ]
}
```

### How JSON Maps to the Flow Chart
Nodes:

- Each node has a unique id, position (x, y coordinates), and data (e.g., label).

- Nodes can be of different types (e.g., custom).

Edges:

- Each edge connects two nodes using source and target properties.

- Edges can have custom types and animations.


###AI-Generated Text-to-Chart
The application includes an AI-generated text-to-chart feature that converts natural language descriptions into flow charts. For example, you can type:

```
Create a flow chart for a marketing campaign with three steps: Planning, Execution, and Review.
```
The AI will generate the corresponding nodes and edges in the flow chart.

How It Works:
- Enter a description in the text input.

- The AI processes the text and generates a JSON structure for the flow chart.

- The JSON is used to render the nodes and edges on the canvas
---

## 📄 Project Links 

### 🌍 Deployed Application  
📌 **Hosting Platform:** Vercel (or any other hosting service used)  
📌 **Live Application Link:** [Link](https://supervaisor-task-seven.vercel.app/) 

### 🎥 Live Demo 
📌 **Live Demo Link:** [link](https://drive.google.com/file/d/1wUsZ9KdELZnNussiwD8kr4Ji43juMRud/view?usp=sharing)  



## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/badrinarayanms/supervaisor_task.git
cd supervaisor_task
```

### 2. Install Dependencies
```
npm install
```
### Create an .env.local file & add you Gemini Api key 
```
NEXT_PUBLIC_API_KEY=yourGEMINIkey
```

### run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
