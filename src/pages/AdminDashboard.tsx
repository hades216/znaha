import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, Users, MessageSquare, Target, 
  ArrowUpRight, ArrowDownRight, Activity, Calendar
} from 'lucide-react';

const engagementData = [
  { name: 'Mon', sessions: 120, leads: 12 },
  { name: 'Tue', sessions: 150, leads: 18 },
  { name: 'Wed', sessions: 180, leads: 25 },
  { name: 'Thu', sessions: 140, leads: 15 },
  { name: 'Fri', sessions: 220, leads: 32 },
  { name: 'Sat', sessions: 300, leads: 45 },
  { name: 'Sun', sessions: 280, leads: 38 },
];

const conversionData = [
  { name: 'Week 1', rate: 12 },
  { name: 'Week 2', rate: 15 },
  { name: 'Week 3', rate: 18 },
  { name: 'Week 4', rate: 22 },
];

const sourceData = [
  { name: 'Direct', value: 45 },
  { name: 'Organic Search', value: 30 },
  { name: 'Paid Ads', value: 15 },
  { name: 'Social', value: 10 },
];

const COLORS = ['#EAB308', '#FDE047', '#A16207', '#422006'];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function AdminDashboard() {
  const stats = [
    { title: "Total Sessions", value: "1,294", change: "+12.5%", isPositive: true, icon: <Users className="w-5 h-5" /> },
    { title: "Leads Generated", value: "185", change: "+24.2%", isPositive: true, icon: <Target className="w-5 h-5" /> },
    { title: "Avg. ROI Impact", value: "342%", change: "+5.1%", isPositive: true, icon: <TrendingUp className="w-5 h-5" /> },
    { title: "Concierge CR", value: "14.3%", change: "-1.2%", isPositive: false, icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <main className="pt-32 pb-20 relative z-10 min-h-screen bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-3 text-yellow-500 mb-2 uppercase tracking-[0.2em] font-bold text-[10px]">
              <Activity className="w-4 h-4" />
              Intelligence Dashboard
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Revenue Operations <span className="text-yellow-500">Center.</span></h1>
          </motion.div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              <Calendar className="w-4 h-4 text-yellow-500" />
              Last 30 Days
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-yellow-400 transition-all">
              Export Audit
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-yellow-500/10 transition-colors" />
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                  {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                </div>
              </div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Engagement Area Chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-2 p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold">Protocol Engagement & Conversion</h3>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Sessions
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  Qualified Leads
                </div>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#555" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                    itemStyle={{ color: '#EAB308' }}
                  />
                  <Area type="monotone" dataKey="sessions" stroke="#EAB308" fillOpacity={1} fill="url(#colorSessions)" strokeWidth={2} />
                  <Area type="monotone" dataKey="leads" stroke="#ffffff20" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Lead Sources Pie Chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-lg font-bold mb-8">Market Acquisition</h3>
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {sourceData.map((source, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-sm text-gray-400 font-medium">{source.name}</span>
                  </div>
                  <span className="text-sm font-bold">{source.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conversion Rate Line Chart */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-1 p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-lg font-bold mb-8">Efficiency Trend</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={conversionData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#EAB308" strokeWidth={3} dot={{ fill: '#EAB308', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-400 mt-6 leading-relaxed">
              Proprietary conversion algorithms show a steady <strong>8.2% increase</strong> in high-ticket intent captures over the last period.
            </p>
          </motion.div>

          {/* Activity Log / Recent Leads */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-2 p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-lg font-bold mb-8">Live Acquisition Protocol</h3>
            <div className="space-y-6">
              {[
                { name: "Julian Voss", company: "Voss Yachts", status: "Qualified", time: "2 min ago", value: "$4.2M" },
                { name: "Elena Grey", company: "Azure Real Estate", status: "In Discussion", time: "14 min ago", value: "$125k/yr" },
                { name: "Marcus Thorne", company: "Private Portfolio", status: "Audit Pending", time: "1 hour ago", value: "$1.8M" },
              ].map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-500/20 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-bold text-xs">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{lead.name}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{lead.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-yellow-500 mb-1">{lead.value}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
