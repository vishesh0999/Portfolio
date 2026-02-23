import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'react-flow-renderer';

// Custom Node Components for Professional Look
const CustomNode = ({ data }) => {
  return (
    <div className={`px-6 py-4 shadow-2xl rounded-lg border-2 ${data.color} ${data.borderColor} min-w-[200px]`}>
      <div className="flex items-center mb-2">
        {data.icon && <div className="mr-3">{data.icon}</div>}
        <div className="font-grotesk font-bold text-sm text-gray-900">{data.label}</div>
      </div>
      {data.description && (
        <div className="text-xs text-gray-600 mt-2 leading-relaxed">{data.description}</div>
      )}
      {data.metrics && (
        <div className="mt-3 pt-3 border-t border-gray-300">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="text-xs text-gray-700 flex justify-between mb-1">
              <span>{metric.label}:</span>
              <span className="font-semibold">{metric.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// CreditWise System Architecture Diagram
export function CreditWiseArchitectureDiagram() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
    return () => document.body.classList.remove('popup-open');
  }, [isPopupOpen]);
  
  const initialNodes = [
    // Data Sources Layer
    {
      id: 'transunion',
      type: 'custom',
      position: { x: 50, y: 50 },
      data: {
        label: 'TransUnion API',
        description: 'Real-time credit data',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Latency', value: '<200ms' }]
      },
    },
    {
      id: 'equifax',
      type: 'custom',
      position: { x: 300, y: 50 },
      data: {
        label: 'Equifax API',
        description: 'Credit bureau integration',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Uptime', value: '99.9%' }]
      },
    },
    {
      id: 'experian',
      type: 'custom',
      position: { x: 550, y: 50 },
      data: {
        label: 'Experian API',
        description: 'Multi-bureau sync',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Sync', value: 'Real-time' }]
      },
    },
    {
      id: 'user-input',
      type: 'custom',
      position: { x: 800, y: 50 },
      data: {
        label: 'User Input Layer',
        description: 'Profile & preferences',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
      },
    },
    
    // API Gateway & Load Balancer
    {
      id: 'api-gateway',
      type: 'custom',
      position: { x: 300, y: 220 },
      data: {
        label: 'API Gateway',
        description: 'Rate limiting, auth, routing',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [
          { label: 'Requests/sec', value: '10K+' },
          { label: 'Auth', value: 'OAuth 2.0' }
        ]
      },
    },
    {
      id: 'load-balancer',
      type: 'custom',
      position: { x: 600, y: 220 },
      data: {
        label: 'Load Balancer',
        description: 'AWS ELB with auto-scaling',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [{ label: 'Instances', value: '5-20' }]
      },
    },

    // ETL & Data Processing
    {
      id: 'etl-pipeline',
      type: 'custom',
      position: { x: 150, y: 400 },
      data: {
        label: 'ETL Pipeline',
        description: 'Apache Spark processing',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [
          { label: 'Throughput', value: '1M records/hr' },
          { label: 'Workers', value: '10 nodes' }
        ]
      },
    },
    {
      id: 'data-validation',
      type: 'custom',
      position: { x: 450, y: 400 },
      data: {
        label: 'Data Validation',
        description: 'Schema enforcement & quality checks',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [{ label: 'Accuracy', value: '99.9%' }]
      },
    },
    {
      id: 'data-warehouse',
      type: 'custom',
      position: { x: 750, y: 400 },
      data: {
        label: 'Data Warehouse',
        description: 'PostgreSQL + Snowflake',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [
          { label: 'Storage', value: '500TB' },
          { label: 'Users', value: '85K+' }
        ]
      },
    },

    // ML Layer
    {
      id: 'feature-engineering',
      type: 'custom',
      position: { x: 50, y: 600 },
      data: {
        label: 'Feature Engineering',
        description: 'Credit metrics calculation',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Features', value: '150+' }]
      },
    },
    {
      id: 'collaborative-filtering',
      type: 'custom',
      position: { x: 300, y: 600 },
      data: {
        label: 'Collaborative Filtering',
        description: 'User similarity matrix',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Accuracy', value: '0.89 F1' }]
      },
    },
    {
      id: 'content-filtering',
      type: 'custom',
      position: { x: 550, y: 600 },
      data: {
        label: 'Content-Based Filtering',
        description: 'Profile matching engine',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Precision', value: '0.92' }]
      },
    },
    {
      id: 'reinforcement-learning',
      type: 'custom',
      position: { x: 800, y: 600 },
      data: {
        label: 'Reinforcement Learning',
        description: 'Q-learning optimization',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Reward', value: '+58pts avg' }]
      },
    },

    // Business Logic Layer
    {
      id: 'recommendation-engine',
      type: 'custom',
      position: { x: 200, y: 800 },
      data: {
        label: 'Recommendation Engine',
        description: 'Priority scoring & ranking',
        color: 'bg-indigo-50',
        borderColor: 'border-indigo-500',
        metrics: [
          { label: 'Latency', value: '<100ms' },
          { label: 'Success', value: '72%' }
        ]
      },
    },
    {
      id: 'dispute-management',
      type: 'custom',
      position: { x: 500, y: 800 },
      data: {
        label: 'Dispute Management',
        description: 'Automated workflow system',
        color: 'bg-indigo-50',
        borderColor: 'border-indigo-500',
        metrics: [{ label: 'Success Rate', value: '83%' }]
      },
    },
    {
      id: 'payment-automation',
      type: 'custom',
      position: { x: 800, y: 800 },
      data: {
        label: 'Payment Automation',
        description: 'Bank integration service',
        color: 'bg-indigo-50',
        borderColor: 'border-indigo-500',
        metrics: [{ label: 'On-time', value: '99.2%' }]
      },
    },

    // Presentation Layer
    {
      id: 'web-app',
      type: 'custom',
      position: { x: 150, y: 1000 },
      data: {
        label: 'React Web App',
        description: 'Responsive dashboard',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Load Time', value: '<2s' }]
      },
    },
    {
      id: 'mobile-app',
      type: 'custom',
      position: { x: 450, y: 1000 },
      data: {
        label: 'Mobile App',
        description: 'iOS & Android native',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Rating', value: '4.8/5' }]
      },
    },
    {
      id: 'analytics-dashboard',
      type: 'custom',
      position: { x: 750, y: 1000 },
      data: {
        label: 'Analytics Dashboard',
        description: 'D3.js visualizations',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Engagement', value: '78%' }]
      },
    },

    // Infrastructure Layer (Side)
    {
      id: 'redis-cache',
      type: 'custom',
      position: { x: 1100, y: 300 },
      data: {
        label: 'Redis Cache',
        description: 'Session & feature store',
        color: 'bg-gray-50',
        borderColor: 'border-gray-500',
        metrics: [{ label: 'Hit Rate', value: '95%' }]
      },
    },
    {
      id: 'mongodb',
      type: 'custom',
      position: { x: 1100, y: 500 },
      data: {
        label: 'MongoDB',
        description: 'Document store',
        color: 'bg-gray-50',
        borderColor: 'border-gray-500',
        metrics: [{ label: 'Collections', value: '50+' }]
      },
    },
    {
      id: 'monitoring',
      type: 'custom',
      position: { x: 1100, y: 700 },
      data: {
        label: 'CloudWatch',
        description: 'Monitoring & alerts',
        color: 'bg-gray-50',
        borderColor: 'gray-500',
        metrics: [{ label: 'Uptime', value: '99.9%' }]
      },
    },
  ];

  const initialEdges = [
    // Data Sources to API Gateway
    { id: 'e1', source: 'transunion', target: 'api-gateway', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'e2', source: 'equifax', target: 'api-gateway', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'e3', source: 'experian', target: 'api-gateway', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'e4', source: 'user-input', target: 'load-balancer', animated: true, style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    
    // API Gateway to ETL
    { id: 'e5', source: 'api-gateway', target: 'etl-pipeline', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    { id: 'e6', source: 'load-balancer', target: 'data-validation', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    
    // ETL to Data Warehouse
    { id: 'e7', source: 'etl-pipeline', target: 'data-warehouse', style: { stroke: '#8b5cf6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    { id: 'e8', source: 'data-validation', target: 'data-warehouse', style: { stroke: '#8b5cf6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    
    // Data Warehouse to ML Layer
    { id: 'e9', source: 'data-warehouse', target: 'feature-engineering', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'e10', source: 'feature-engineering', target: 'collaborative-filtering', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'e11', source: 'feature-engineering', target: 'content-filtering', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'e12', source: 'collaborative-filtering', target: 'reinforcement-learning', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'e13', source: 'content-filtering', target: 'reinforcement-learning', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    
    // ML to Business Logic
    { id: 'e14', source: 'reinforcement-learning', target: 'recommendation-engine', style: { stroke: '#6366f1', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
    { id: 'e15', source: 'recommendation-engine', target: 'dispute-management', style: { stroke: '#6366f1', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
    { id: 'e16', source: 'recommendation-engine', target: 'payment-automation', style: { stroke: '#6366f1', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
    
    // Business Logic to Presentation
    { id: 'e17', source: 'dispute-management', target: 'web-app', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    { id: 'e18', source: 'payment-automation', target: 'mobile-app', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    { id: 'e19', source: 'recommendation-engine', target: 'analytics-dashboard', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    
    // Infrastructure connections (dashed)
    { id: 'e20', source: 'redis-cache', target: 'load-balancer', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
    { id: 'e21', source: 'mongodb', target: 'recommendation-engine', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
    { id: 'e22', source: 'monitoring', target: 'api-gateway', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      {/* Small Preview - Click to Expand */}
      <div 
        className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow relative group" 
        style={{ height: '600px' }}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
          <h3 className="text-xl font-grotesk font-bold">CreditWise System Architecture</h3>
          <p className="text-sm text-blue-100 mt-1">Enterprise-grade multi-layer architecture with 85K+ concurrent users</p>
        </div>
        
        {/* Click to Expand Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center pointer-events-none z-10">
          <div className="bg-white px-6 py-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-gray-800 font-semibold">🔍 Click to Expand & Zoom</p>
          </div>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background color="#e5e7eb" gap={16} />
          <MiniMap
            nodeColor={(node) => {
              if (node.data.color?.includes('blue')) return '#3b82f6';
              if (node.data.color?.includes('green')) return '#10b981';
              if (node.data.color?.includes('purple')) return '#8b5cf6';
              if (node.data.color?.includes('amber')) return '#f59e0b';
              if (node.data.color?.includes('indigo')) return '#6366f1';
              if (node.data.color?.includes('red')) return '#ef4444';
              return '#6b7280';
            }}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>

        {/* Metadata Panel - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gray-300 p-4 max-w-xs z-20">
          <h4 className="font-grotesk font-bold text-sm text-gray-900 mb-2">System Metrics</h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Users:</span>
              <span className="font-semibold text-gray-900">85,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Score Improvement:</span>
              <span className="font-semibold text-green-600">+58 points</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Success Rate:</span>
              <span className="font-semibold text-blue-600">72%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">System Uptime:</span>
              <span className="font-semibold text-gray-900">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ML Models:</span>
              <span className="font-semibold text-gray-900">4 Active</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t-2 border-gray-200">
          <div className="grid grid-cols-6 gap-4 text-xs">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="font-semibold">Data Sources</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="font-semibold">API Gateway</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
              <span className="font-semibold">ETL Pipeline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
              <span className="font-semibold">ML Layer</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-indigo-500 rounded mr-2"></div>
              <span className="font-semibold">Business Logic</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span className="font-semibold">Presentation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full h-full max-w-7xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-grotesk font-bold">CreditWise System Architecture</h3>
                <p className="text-sm text-blue-100 mt-1">Interactive diagram - Zoom, pan, and explore the architecture</p>
              </div>
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Diagram */}
            <div className="flex-1 relative">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
              >
                <Background color="#e5e7eb" gap={16} />
                <Controls />
                <MiniMap
                  nodeColor={(node) => {
                    if (node.data.color?.includes('blue')) return '#3b82f6';
                    if (node.data.color?.includes('green')) return '#10b981';
                    if (node.data.color?.includes('purple')) return '#8b5cf6';
                    if (node.data.color?.includes('amber')) return '#f59e0b';
                    if (node.data.color?.includes('indigo')) return '#6366f1';
                    if (node.data.color?.includes('red')) return '#ef4444';
                    return '#6b7280';
                  }}
                  maskColor="rgba(0, 0, 0, 0.1)"
                />
              </ReactFlow>

              {/* Metadata Panel - Bottom Right in Popup */}
              <div className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gray-300 p-4 max-w-xs">
                <h4 className="font-grotesk font-bold text-sm text-gray-900 mb-3">System Metrics</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Users:</span>
                    <span className="font-semibold text-gray-900">85,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg Score Improvement:</span>
                    <span className="font-semibold text-green-600">+58 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-blue-600">72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System Uptime:</span>
                    <span className="font-semibold text-gray-900">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ML Models:</span>
                    <span className="font-semibold text-gray-900">4 Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data Storage:</span>
                    <span className="font-semibold text-gray-900">500TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">API Requests/sec:</span>
                    <span className="font-semibold text-gray-900">10K+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Legend */}
            <div className="bg-gray-50 px-6 py-4 border-t-2 border-gray-200 rounded-b-2xl">
              <div className="grid grid-cols-6 gap-4 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="font-semibold">Data Sources</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="font-semibold">API Gateway</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                  <span className="font-semibold">ETL Pipeline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
                  <span className="font-semibold">ML Layer</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-indigo-500 rounded mr-2"></div>
                  <span className="font-semibold">Business Logic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="font-semibold">Presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Uber Eats Ecosystem Architecture Diagram
export function UberEatsEcosystemDiagram() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
    return () => document.body.classList.remove('popup-open');
  }, [isPopupOpen]);
  
  const initialNodes = [
    // Customer Touchpoints
    {
      id: 'uber-rides',
      type: 'custom',
      position: { x: 50, y: 50 },
      data: {
        label: 'Uber Rides App',
        description: '40M daily rides',
        color: 'bg-black',
        borderColor: 'border-black',
        metrics: [{ label: 'DAU', value: '40M' }]
      },
    },
    {
      id: 'uber-eats-app',
      type: 'custom',
      position: { x: 300, y: 50 },
      data: {
        label: 'Uber Eats App',
        description: 'Food ordering platform',
        color: 'bg-black',
        borderColor: 'border-black',
        metrics: [{ label: 'Users', value: '50M+' }]
      },
    },
    {
      id: 'web-platform',
      type: 'custom',
      position: { x: 550, y: 50 },
      data: {
        label: 'Web Platform',
        description: 'Desktop ordering',
        color: 'bg-black',
        borderColor: 'border-black',
        metrics: [{ label: 'Orders', value: '15%' }]
      },
    },

    // Driver Fairness Shield
    {
      id: 'tip-predictor',
      type: 'custom',
      position: { x: 50, y: 250 },
      data: {
        label: 'AI Tip Predictor',
        description: 'Customer history analysis',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [
          { label: 'Accuracy', value: '94%' },
          { label: 'Churn Reduction', value: '18%→12%' }
        ]
      },
    },
    {
      id: 'trust-badge',
      type: 'custom',
      position: { x: 300, y: 250 },
      data: {
        label: 'Trust Badge System',
        description: 'Customer reliability scoring',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [{ label: 'Badges', value: '3 tiers' }]
      },
    },
    {
      id: 'guaranteed-earnings',
      type: 'custom',
      position: { x: 550, y: 250 },
      data: {
        label: 'Guaranteed Earnings',
        description: 'Minimum payment promise',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [{ label: 'Coverage', value: '100%' }]
      },
    },
    {
      id: 'tip-lock',
      type: 'custom',
      position: { x: 800, y: 250 },
      data: {
        label: 'Tip Lock Timer',
        description: '60-minute protection',
        color: 'bg-green-50',
        borderColor: 'border-green-500',
        metrics: [{ label: 'Lock Time', value: '60min' }]
      },
    },

    // Perfect Timing Engine
    {
      id: 'prep-predictor',
      type: 'custom',
      position: { x: 50, y: 450 },
      data: {
        label: 'Restaurant Ready Predictor',
        description: 'ML-based prep time',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [
          { label: 'Accuracy', value: '92%' },
          { label: 'Time Saved', value: '8min avg' }
        ]
      },
    },
    {
      id: 'driver-positioning',
      type: 'custom',
      position: { x: 300, y: 450 },
      data: {
        label: 'Smart Driver Positioning',
        description: 'Predictive analytics',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Efficiency', value: '+25%' }]
      },
    },
    {
      id: 'route-optimizer',
      type: 'custom',
      position: { x: 550, y: 450 },
      data: {
        label: 'Multi-Order Optimizer',
        description: 'Route intelligence',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Orders/trip', value: '2.3 avg' }]
      },
    },
    {
      id: 'delivery-time',
      type: 'custom',
      position: { x: 800, y: 450 },
      data: {
        label: 'Delivery Time Reduction',
        description: '38min → 30min',
        color: 'bg-blue-50',
        borderColor: 'border-blue-500',
        metrics: [{ label: 'Improvement', value: '21%' }]
      },
    },

    // Ecosystem Integration
    {
      id: 'ride-to-dinner',
      type: 'custom',
      position: { x: 50, y: 650 },
      data: {
        label: 'Ride-to-Dinner',
        description: 'Post-ride offers',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [
          { label: 'Conversion', value: '10%' },
          { label: 'Revenue', value: '$2.85B' }
        ]
      },
    },
    {
      id: 'ai-assistant',
      type: 'custom',
      position: { x: 300, y: 650 },
      data: {
        label: 'AI Shopping Assistant',
        description: 'Predictive ordering',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [{ label: 'Adoption', value: '45%' }]
      },
    },
    {
      id: 'uber-one',
      type: 'custom',
      position: { x: 550, y: 650 },
      data: {
        label: 'Uber One Complete',
        description: '$19.99 super bundle',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [
          { label: 'Subscribers', value: '35M target' },
          { label: 'Revenue', value: '$3.6B' }
        ]
      },
    },
    {
      id: 'multi-category',
      type: 'custom',
      position: { x: 800, y: 650 },
      data: {
        label: 'Multi-Category',
        description: 'Food, grocery, pharmacy',
        color: 'bg-purple-50',
        borderColor: 'border-purple-500',
        metrics: [{ label: 'Categories', value: '4+' }]
      },
    },

    // Backend Infrastructure
    {
      id: 'order-management',
      type: 'custom',
      position: { x: 150, y: 850 },
      data: {
        label: 'Order Management',
        description: 'Real-time processing',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [
          { label: 'Throughput', value: '50K/sec' },
          { label: 'Latency', value: '<100ms' }
        ]
      },
    },
    {
      id: 'driver-dispatch',
      type: 'custom',
      position: { x: 450, y: 850 },
      data: {
        label: 'Driver Dispatch',
        description: 'Intelligent matching',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Match Time', value: '<30s' }]
      },
    },
    {
      id: 'payment-processing',
      type: 'custom',
      position: { x: 750, y: 850 },
      data: {
        label: 'Payment Processing',
        description: 'Secure transactions',
        color: 'bg-amber-50',
        borderColor: 'border-amber-500',
        metrics: [{ label: 'Success Rate', value: '99.8%' }]
      },
    },

    // ML & Analytics
    {
      id: 'customer-behavior',
      type: 'custom',
      position: { x: 50, y: 1050 },
      data: {
        label: 'Customer Behavior ML',
        description: 'Predictive models',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Models', value: '15+' }]
      },
    },
    {
      id: 'driver-performance',
      type: 'custom',
      position: { x: 300, y: 1050 },
      data: {
        label: 'Driver Performance',
        description: 'Optimization algorithms',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Efficiency', value: '+18%' }]
      },
    },
    {
      id: 'demand-forecasting',
      type: 'custom',
      position: { x: 550, y: 1050 },
      data: {
        label: 'Demand Forecasting',
        description: 'Time-series analysis',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Accuracy', value: '89%' }]
      },
    },
    {
      id: 'pricing-engine',
      type: 'custom',
      position: { x: 800, y: 1050 },
      data: {
        label: 'Dynamic Pricing',
        description: 'Real-time optimization',
        color: 'bg-red-50',
        borderColor: 'border-red-500',
        metrics: [{ label: 'Revenue+', value: '12%' }]
      },
    },
  ];

  const initialEdges = [
    // Touchpoints to Driver Fairness
    { id: 'ue1', source: 'uber-rides', target: 'ride-to-dinner', animated: true, style: { stroke: '#000000', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'ue2', source: 'uber-eats-app', target: 'order-management', animated: true, style: { stroke: '#000000', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'ue3', source: 'web-platform', target: 'order-management', animated: true, style: { stroke: '#000000', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Order Management to Driver Fairness
    { id: 'ue4', source: 'order-management', target: 'tip-predictor', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    { id: 'ue5', source: 'tip-predictor', target: 'trust-badge', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    { id: 'ue6', source: 'trust-badge', target: 'guaranteed-earnings', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    { id: 'ue7', source: 'guaranteed-earnings', target: 'tip-lock', style: { stroke: '#10b981', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
    
    // Order Management to Perfect Timing
    { id: 'ue8', source: 'order-management', target: 'prep-predictor', style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'ue9', source: 'prep-predictor', target: 'driver-positioning', style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'ue10', source: 'driver-positioning', target: 'route-optimizer', style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    { id: 'ue11', source: 'route-optimizer', target: 'delivery-time', style: { stroke: '#3b82f6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' } },
    
    // Ecosystem Integration
    { id: 'ue12', source: 'ride-to-dinner', target: 'uber-one', style: { stroke: '#8b5cf6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    { id: 'ue13', source: 'ai-assistant', target: 'uber-one', style: { stroke: '#8b5cf6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    { id: 'ue14', source: 'uber-one', target: 'multi-category', style: { stroke: '#8b5cf6', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
    
    // To Backend
    { id: 'ue15', source: 'tip-lock', target: 'driver-dispatch', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'ue16', source: 'delivery-time', target: 'driver-dispatch', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'ue17', source: 'multi-category', target: 'driver-dispatch', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    { id: 'ue18', source: 'driver-dispatch', target: 'payment-processing', style: { stroke: '#f59e0b', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' } },
    
    // To ML Layer
    { id: 'ue19', source: 'order-management', target: 'customer-behavior', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    { id: 'ue20', source: 'driver-dispatch', target: 'driver-performance', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    { id: 'ue21', source: 'payment-processing', target: 'pricing-engine', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    { id: 'ue22', source: 'customer-behavior', target: 'demand-forecasting', style: { stroke: '#ef4444', strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },
    
    // Feedback Loops (dashed)
    { id: 'ue23', source: 'customer-behavior', target: 'ai-assistant', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
    { id: 'ue24', source: 'driver-performance', target: 'tip-predictor', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
    { id: 'ue25', source: 'demand-forecasting', target: 'driver-positioning', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
    { id: 'ue26', source: 'pricing-engine', target: 'payment-processing', style: { stroke: '#6b7280', strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      {/* Small Preview - Click to Expand */}
      <div 
        className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-300 overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow relative group" 
        style={{ height: '600px' }}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-4">
          <h3 className="text-xl font-grotesk font-bold">Uber Eats Ecosystem Architecture</h3>
          <p className="text-sm text-gray-300 mt-1">Complete system integration: Driver Fairness Shield + Perfect Timing Engine + Ecosystem Features</p>
        </div>
        
        {/* Click to Expand Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center pointer-events-none z-10">
          <div className="bg-white px-6 py-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-gray-800 font-semibold">🔍 Click to Expand & Zoom</p>
          </div>
        </div>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background color="#e5e7eb" gap={16} />
          <MiniMap
            nodeColor={(node) => {
              if (node.data.color?.includes('black')) return '#000000';
              if (node.data.color?.includes('green')) return '#10b981';
              if (node.data.color?.includes('blue')) return '#3b82f6';
              if (node.data.color?.includes('purple')) return '#8b5cf6';
              if (node.data.color?.includes('amber')) return '#f59e0b';
              if (node.data.color?.includes('red')) return '#ef4444';
              return '#6b7280';
            }}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>

        {/* Metadata Panel - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gray-300 p-4 max-w-xs z-20">
          <h4 className="font-grotesk font-bold text-sm text-gray-900 mb-2">System Metrics</h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue Impact:</span>
              <span className="font-semibold text-green-600">$10B+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Driver Churn:</span>
              <span className="font-semibold text-blue-600">18% → 12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Time:</span>
              <span className="font-semibold text-gray-900">38min → 30min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tip Prediction:</span>
              <span className="font-semibold text-gray-900">94% Accuracy</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Daily Active Users:</span>
              <span className="font-semibold text-gray-900">50M+</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t-2 border-gray-200">
          <div className="grid grid-cols-6 gap-4 text-xs">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-black rounded mr-2"></div>
              <span className="font-semibold">Touchpoints</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span className="font-semibold">Driver Fairness</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="font-semibold">Perfect Timing</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
              <span className="font-semibold">Ecosystem</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
              <span className="font-semibold">Backend</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span className="font-semibold">ML & Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setIsPopupOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full h-full max-w-7xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-grotesk font-bold">Uber Eats Ecosystem Architecture</h3>
                <p className="text-sm text-gray-300 mt-1">Interactive diagram - Zoom, pan, and explore the complete system</p>
              </div>
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Diagram */}
            <div className="flex-1 relative">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
              >
                <Background color="#e5e7eb" gap={16} />
                <Controls />
                <MiniMap
                  nodeColor={(node) => {
                    if (node.data.color?.includes('black')) return '#000000';
                    if (node.data.color?.includes('green')) return '#10b981';
                    if (node.data.color?.includes('blue')) return '#3b82f6';
                    if (node.data.color?.includes('purple')) return '#8b5cf6';
                    if (node.data.color?.includes('amber')) return '#f59e0b';
                    if (node.data.color?.includes('red')) return '#ef4444';
                    return '#6b7280';
                  }}
                  maskColor="rgba(0, 0, 0, 0.1)"
                />
              </ReactFlow>

              {/* Metadata Panel - Bottom Right in Popup */}
              <div className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gray-300 p-4 max-w-xs">
                <h4 className="font-grotesk font-bold text-sm text-gray-900 mb-3">System Metrics</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue Impact:</span>
                    <span className="font-semibold text-green-600">$10B+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Driver Churn:</span>
                    <span className="font-semibold text-blue-600">18% → 12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time:</span>
                    <span className="font-semibold text-gray-900">38min → 30min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tip Prediction:</span>
                    <span className="font-semibold text-gray-900">94% Accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Active Users:</span>
                    <span className="font-semibold text-gray-900">50M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Orders/sec:</span>
                    <span className="font-semibold text-gray-900">50K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uber One Subscribers:</span>
                    <span className="font-semibold text-gray-900">35M Target</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Legend */}
            <div className="bg-gray-50 px-6 py-4 border-t-2 border-gray-200 rounded-b-2xl">
              <div className="grid grid-cols-6 gap-4 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-black rounded mr-2"></div>
                  <span className="font-semibold">Touchpoints</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="font-semibold">Driver Fairness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="font-semibold">Perfect Timing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                  <span className="font-semibold">Ecosystem</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
                  <span className="font-semibold">Backend</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                  <span className="font-semibold">ML & Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
