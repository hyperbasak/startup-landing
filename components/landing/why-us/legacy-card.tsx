"use client";

import { Minus } from "lucide-react";

import type { Comparison } from "../types";

interface LegacyCardProps {
  comparisons: Comparison[];
}

export function LegacyCard({ comparisons }: LegacyCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 p-6 lg:p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
          <Minus className="w-6 h-6 text-gray-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-600">일반 마케팅 대행사</h3>
          <p className="text-sm text-gray-600">General Marketing Agency</p>
        </div>
      </div>

      <div className="space-y-4">
        {comparisons.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
              <Minus className="w-3.5 h-3.5 text-gray-500" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-1">
                {item.category}
              </p>
              <p className="text-gray-700">{item.legacy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/50 to-transparent rounded-bl-full" />
    </div>
  );
}
