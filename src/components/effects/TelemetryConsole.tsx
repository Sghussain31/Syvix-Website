"use client";

import { useState } from "react";

export default function TelemetryConsole() {
  const [inferenceThreshold, setInferenceThreshold] = useState(75);
  const [temperature, setTemperature] = useState(40);
  const [scaleFactor, setScaleFactor] = useState(85);

  return (
    <div className="card-cyber overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
          <span className="font-mono text-xs font-bold tracking-wider text-[#0F172A] uppercase">
            SYVIX CONTROL BOARD // CORE V1.0
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase">
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      {/* Control Panel Grid */}
      <div className="grid gap-6 p-6 md:grid-cols-3">
        {/* Left Column: Adjustments & Parameters */}
        <div className="flex flex-col justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <div>
            <h3 className="font-sans text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
              Control Parameters
            </h3>
            <div className="space-y-4">
              {/* Parameter 1 */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#475569] mb-1.5">
                  <span>Inference Threshold</span>
                  <span className="font-mono text-[#2563EB]">{inferenceThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={inferenceThreshold}
                  onChange={(e) => setInferenceThreshold(Number(e.target.value))}
                  className="w-full h-1 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
              </div>

              {/* Parameter 2 */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#475569] mb-1.5">
                  <span>Temperature Offset</span>
                  <span className="font-mono text-[#2563EB]">0.{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full h-1 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
              </div>

              {/* Parameter 3 */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#475569] mb-1.5">
                  <span>Scale Factor</span>
                  <span className="font-mono text-[#2563EB]">{scaleFactor}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={scaleFactor}
                  onChange={(e) => setScaleFactor(Number(e.target.value))}
                  className="w-full h-1 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-[#E2E8F0] pt-4">
            <p className="text-[10px] font-mono text-[#475569] leading-relaxed">
              * Adjusted parameters dynamically calibrate local neural layers and system ingestion ratios.
            </p>
          </div>
        </div>

        {/* Center Column: System Diagram Layout */}
        <div className="md:col-span-2 flex flex-col rounded-lg border border-[#E2E8F0] bg-white p-5">
          <h3 className="font-sans text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">
            Active Processing Pipeline
          </h3>

          <div className="flex-1 flex flex-col justify-center py-4">
            {/* SVG Network Map */}
            <div className="relative w-full h-40">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connector Lines */}
                <line x1="15%" y1="50%" x2="50%" y2="25%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="15%" y1="50%" x2="50%" y2="75%" stroke="#E2E8F0" strokeWidth="2" />
                <line x1="50%" y1="25%" x2="85%" y2="50%" stroke="#E2E8F0" strokeWidth="2" />
                <line x1="50%" y1="75%" x2="85%" y2="50%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Solid Flow Accent */}
                <line x1="15%" y1="50%" x2="50%" y2="75%" stroke="#2563EB" strokeWidth="2" strokeDashoffset="0" />

                {/* Nodes */}
                {/* Node 1: Ingestion */}
                <circle cx="15%" cy="50%" r="22" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <text x="15%" y="53%" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">SRC</text>

                {/* Node 2: Neural Core */}
                <circle cx="50%" cy="25%" r="22" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <text x="50%" y="28%" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">ML_1</text>

                {/* Node 3: Flow Parser */}
                <circle cx="50%" cy="75%" r="22" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
                <text x="50%" y="78%" textAnchor="middle" fill="#2563EB" fontSize="10" fontFamily="monospace" fontWeight="bold">CORE</text>

                {/* Node 4: Output API */}
                <circle cx="85%" cy="50%" r="22" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <text x="85%" y="53%" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="monospace" fontWeight="bold">API</text>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="rounded border border-[#E2E8F0] py-2 bg-[#F8FAFC]">
                <p className="text-[10px] text-[#475569] font-semibold">Data Stream</p>
                <p className="text-xs font-bold text-[#0F172A] mt-0.5">Connected</p>
              </div>
              <div className="rounded border border-[#E2E8F0] py-2 bg-[#F8FAFC]">
                <p className="text-[10px] text-[#475569] font-semibold">Core Model</p>
                <p className="text-xs font-bold text-[#2563EB] mt-0.5">Optimized</p>
              </div>
              <div className="rounded border border-[#E2E8F0] py-2 bg-[#F8FAFC]">
                <p className="text-[10px] text-[#475569] font-semibold">API Latency</p>
                <p className="text-xs font-bold text-[#0F172A] mt-0.5">14 ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Feed */}
      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#475569]">
            <span className="font-mono text-[10px] bg-[#E2E8F0] px-1.5 py-0.5 rounded text-[#0F172A] font-semibold">LOG</span>
            <span className="font-mono">Ready to deploy. System parameters successfully compiled.</span>
          </div>
          <div className="flex gap-4 font-mono text-[10px] text-[#475569] justify-between">
            <span>Uptime: 24h 00m</span>
            <span>Region: IND-WEST-1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
