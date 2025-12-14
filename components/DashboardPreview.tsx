import React from 'react';
import GlassCard from './GlassCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 p-3 rounded-lg shadow-xl">
        <p className="text-white font-medium mb-1">{label}</p>
        <p className="text-purple-400 text-sm">
          Users: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const DashboardPreview: React.FC = () => {
  return (
    <section id="analytics" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
        <GlassCard className="p-4 sm:p-8 lg:p-12" intensity="high">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Chart Area */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">User Activity</h3>
                  <p className="text-slate-400 text-sm">Real-time session data</p>
                </div>
                <div className="flex gap-2">
                   <button className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">Daily</button>
                   <button className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/20 text-xs text-slate-400 hover:text-white transition-colors">Weekly</button>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="rgba(255,255,255,0.4)" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.4)" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value / 1000}k`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 2 }} />
                    <Area 
                      type="monotone" 
                      dataKey="uv" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorUv)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="lg:w-1/3 flex flex-col justify-center gap-6">
              {[
                { label: "Total Revenue", value: "$84,232", change: "+12.5%", color: "text-green-400" },
                { label: "Active Users", value: "2,420", change: "+5.2%", color: "text-blue-400" },
                { label: "Bounce Rate", value: "42.3%", change: "-2.4%", color: "text-orange-400" },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white/5 ${stat.color}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full" 
                      style={{ width: `${60 + i * 15}%` }}
                    />
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
                View Full Report
              </button>
            </div>

          </div>
        </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;