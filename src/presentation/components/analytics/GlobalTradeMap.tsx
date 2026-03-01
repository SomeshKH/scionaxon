import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { Button } from '../../../ui/button';

interface Props {
  selectedCountry: string | null;
  onCountrySelect: (country: string) => void;
}

const GRID_BG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+";

const countryNodes = [
  { name: 'India', x: 650, y: 200 },
  { name: 'China', x: 700, y: 150 },
  { name: 'UAE', x: 600, y: 220 },
  { name: 'USA', x: 150, y: 150 },
  { name: 'Germany', x: 450, y: 100 },
  { name: 'UK', x: 400, y: 90 },
  { name: 'Japan', x: 820, y: 140 },
  { name: 'Brazil', x: 250, y: 300 },
  { name: 'Thailand', x: 720, y: 230 },
  { name: 'Vietnam', x: 740, y: 210 },
  { name: 'Netherlands', x: 460, y: 85 },
];

const tradeLines = [
  { x1: 650, y1: 200, x2: 600, y2: 220 },
  { x1: 700, y1: 150, x2: 450, y2: 100 },
  { x1: 740, y1: 210, x2: 150, y2: 150 },
  { x1: 650, y1: 200, x2: 400, y2: 90 },
  { x1: 720, y1: 230, x2: 820, y2: 140 },
  { x1: 250, y1: 300, x2: 460, y2: 85 },
];

export default function GlobalTradeMap({ onCountrySelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-[#1F3A5F] to-[#0F7B6C] rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url('${GRID_BG}')` }}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Interactive Global Trade Map</h3>
            <p className="text-teal-200">Click on routes to filter • Hover for volume</p>
          </div>
          <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
            <Globe className="w-4 h-4 mr-2" />
            Reset View
          </Button>
        </div>

        <div className="relative h-96 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8">
          <svg className="w-full h-full" viewBox="0 0 1000 400">
            {countryNodes.map((node, idx) => (
              <g key={idx}>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="#0F7B6C"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.5 }}
                  animate={{ r: [12, 16, 12], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  onClick={() => onCountrySelect(node.name)}
                />
                <text x={node.x} y={node.y + 30} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  {node.name}
                </text>
              </g>
            ))}

            {tradeLines.map((line, idx) => (
              <motion.line
                key={idx}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            ))}

            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F7B6C" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0F7B6C]"></div>
                <span>Export Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#0F7B6C] to-[#F59E0B]"></div>
                <span>Trade Route</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
