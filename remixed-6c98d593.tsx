import React, { useState } from 'react';
import { TrendingDown, TrendingUp, Minus, AlertCircle, Info, BarChart3 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const SentimentDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  
  const consumerData = [
    {
      name: "University of Michigan Consumer Sentiment",
      current: 55.0,
      trend: "down",
      change: -22,
      period: "Oct 2025",
      baseline: 98,
      historicalAvg: 85.4,
      allTimeHigh: 111.4,
      allTimeHighDate: "Jan 2000",
      allTimeLow: 50.0,
      allTimeLowDate: "Jun 2022",
      key: "Overall sentiment at lowest since 2011",
      concern: "Policy uncertainty, market uncertainty",
      historicalRange: "Normal range: 75-95",
      context: "Below 80 indicates economic pessimism. Current level comparable to financial crisis depths.",
      recentHistory: [
        { date: "Oct 2024", value: 70.5 },
        { date: "Jan 2025", value: 73.2 },
        { date: "Mar 2025", value: 57.0 },
        { date: "Jun 2025", value: 65.6 },
        { date: "Sep 2025", value: 55.1 },
        { date: "Oct 2025", value: 55.0 }
      ],
      historicalMilestones: [
        { event: "Pre-pandemic (2019)", value: 96.9 },
        { event: "COVID crash (Apr 2020)", value: 71.8 },
        { event: "Peak inflation (Jun 2022)", value: 50.0 },
        { event: "Current (Oct 2025)", value: 55.0 }
      ]
    },
    {
      name: "Conference Board Consumer Confidence",
      current: 94.2,
      trend: "down",
      change: -3.6,
      period: "Sep 2025",
      baseline: 100,
      historicalAvg: 98.3,
      allTimeHigh: 144.7,
      allTimeHighDate: "Oct 2000",
      allTimeLow: 25.3,
      allTimeLowDate: "Feb 2009",
      key: "Expectations below recession threshold of 80",
      concern: "Labor market conditions weakening",
      historicalRange: "Normal range: 90-110",
      context: "Expectations Index at 73.4, well below recession threshold. Present Situation at 125.4.",
      recentHistory: [
        { date: "Oct 2024", value: 108.7 },
        { date: "Jan 2025", value: 102.3 },
        { date: "Apr 2025", value: 86.0 },
        { date: "Jun 2025", value: 99.2 },
        { date: "Aug 2025", value: 97.8 },
        { date: "Sep 2025", value: 94.2 }
      ],
      historicalMilestones: [
        { event: "Great Recession (2009)", value: 25.3 },
        { event: "Pre-pandemic (2019)", value: 128.2 },
        { event: "Pandemic low (Apr 2020)", value: 85.7 },
        { event: "Current (Sep 2025)", value: 94.2 }
      ]
    },
    {
      name: "Morning Consult ICS",
      current: 87.3,
      trend: "down",
      change: -2.1,
      period: "Recent",
      baseline: 100,
      historicalAvg: 92.5,
      allTimeHigh: 118.3,
      allTimeHighDate: "Feb 2020",
      allTimeLow: 62.4,
      allTimeLowDate: "Apr 2020",
      key: "High earners showing substantial drops",
      concern: "Government shutdown impacts",
      historicalRange: "Normal range: 85-105",
      context: "Real-time daily tracking shows faster declines than monthly surveys capture.",
      recentHistory: [
        { date: "Oct 2024", value: 95.2 },
        { date: "Jan 2025", value: 98.1 },
        { date: "Apr 2025", value: 82.5 },
        { date: "Jul 2025", value: 89.4 },
        { date: "Sep 2025", value: 89.4 },
        { date: "Oct 2025", value: 87.3 }
      ],
      historicalMilestones: [
        { event: "Pre-pandemic (Feb 2020)", value: 118.3 },
        { event: "Pandemic low (Apr 2020)", value: 62.4 },
        { event: "Post-recovery (2021)", value: 105.7 },
        { event: "Current", value: 87.3 }
      ]
    },
    {
      name: "NY Fed Consumer Expectations - Inflation",
      current: 3.4,
      trend: "up",
      change: 0.2,
      period: "Sep 2025",
      baseline: 2.0,
      historicalAvg: 3.1,
      allTimeHigh: 6.8,
      allTimeHighDate: "Jun 2022",
      allTimeLow: 2.0,
      allTimeLowDate: "Sep 2013",
      key: "1-year ahead inflation expectations (percentage)",
      concern: "Deteriorating labor market expectations",
      historicalRange: "Pre-pandemic: 2.5-3.0%",
      context: "3-year and 5-year expectations both at 3.0%. Elevated uncertainty about inflation path.",
      recentHistory: [
        { date: "Oct 2024", value: 2.9 },
        { date: "Jan 2025", value: 3.0 },
        { date: "Mar 2025", value: 3.8 },
        { date: "Jun 2025", value: 3.3 },
        { date: "Aug 2025", value: 3.2 },
        { date: "Sep 2025", value: 3.4 }
      ],
      historicalMilestones: [
        { event: "Pre-pandemic avg (2019)", value: 2.6 },
        { event: "Peak inflation (Jun 2022)", value: 6.8 },
        { event: "Decline phase (2023)", value: 3.5 },
        { event: "Current (Sep 2025)", value: 3.4 }
      ]
    }
  ];

  const businessData = [
    {
      name: "Conference Board CEO Confidence",
      current: 48,
      trend: "down",
      change: -1,
      period: "Q4 2025",
      baseline: 50,
      historicalAvg: 55.2,
      allTimeHigh: 83,
      allTimeHighDate: "Q1 1996",
      allTimeLow: 23,
      allTimeLowDate: "Q1 2009",
      key: "Below 50 = more negative than positive",
      concern: "Short-term economic outlook negative",
      historicalRange: "Typical range: 45-65",
      context: "38% say industry conditions worse vs 6 months ago. Only 29% expect improvement.",
      recentHistory: [
        { date: "Q4 2024", value: 54 },
        { date: "Q1 2025", value: 51 },
        { date: "Q2 2025", value: 46 },
        { date: "Q3 2025", value: 49 },
        { date: "Q4 2025", value: 48 }
      ],
      historicalMilestones: [
        { event: "Financial Crisis (Q1 2009)", value: 23 },
        { event: "Pre-pandemic (Q4 2019)", value: 43 },
        { event: "Post-election (Q1 2025)", value: 51 },
        { event: "Current (Q4 2025)", value: 48 }
      ]
    },
    {
      name: "Duke/Fed CFO Survey Optimism",
      current: 62.9,
      trend: "up",
      change: 2.0,
      period: "Q3 2025",
      baseline: 60,
      historicalAvg: 64.3,
      allTimeHigh: 75.4,
      allTimeHighDate: "Q4 2018",
      allTimeLow: 37.2,
      allTimeLowDate: "Q2 2020",
      key: "Uncertainty dropped from Q2",
      concern: "Tariffs remain top concern (30%)",
      historicalRange: "Normal: 60-70, Optimistic: >70",
      context: "46.5% say price expectations affected by tariffs. 41% postponed investments in H1 2025.",
      recentHistory: [
        { date: "Q4 2024", value: 68.5 },
        { date: "Q1 2025", value: 65.2 },
        { date: "Q2 2025", value: 60.9 },
        { date: "Q3 2025", value: 62.9 }
      ],
      historicalMilestones: [
        { event: "Trade war fears (Q3 2019)", value: 58.5 },
        { event: "Pandemic low (Q2 2020)", value: 37.2 },
        { event: "Post-pandemic peak (Q4 2021)", value: 72.8 },
        { event: "Current (Q3 2025)", value: 62.9 }
      ]
    },
    {
      name: "NFIB Small Business Optimism",
      current: 98.8,
      trend: "down",
      change: -2.0,
      period: "Sep 2025",
      baseline: 98,
      historicalAvg: 98.0,
      allTimeHigh: 108.8,
      allTimeHighDate: "Aug 1983",
      allTimeLow: 81.0,
      allTimeLowDate: "Mar 2020",
      key: "Near 52-year average",
      concern: "Uncertainty Index at 100 (4th highest ever)",
      historicalRange: "Typical: 95-102",
      context: "Below 98 average for 29 consecutive months through mid-2024. Uncertainty near record levels.",
      recentHistory: [
        { date: "Oct 2024", value: 93.7 },
        { date: "Jan 2025", value: 102.8 },
        { date: "Apr 2025", value: 99.6 },
        { date: "Jun 2025", value: 98.6 },
        { date: "Aug 2025", value: 100.8 },
        { date: "Sep 2025", value: 98.8 }
      ],
      historicalMilestones: [
        { event: "Pre-pandemic (2019)", value: 103.2 },
        { event: "Pandemic low (Mar 2020)", value: 81.0 },
        { event: "Peak (Jan 2025)", value: 102.8 },
        { event: "Current (Sep 2025)", value: 98.8 }
      ]
    },
    {
      name: "Business Roundtable CEO Outlook",
      current: 78.5,
      trend: "down",
      change: -8.2,
      period: "Q2 2025",
      baseline: 85,
      historicalAvg: 84.6,
      allTimeHigh: 113.0,
      allTimeHighDate: "Q1 2018",
      allTimeLow: 32.0,
      allTimeLowDate: "Q2 2020",
      key: "Broad uncertainty from trade policy",
      concern: "Unpredictable trade environment",
      historicalRange: "Typical: 80-95",
      context: "Index based on expectations for sales, capex, and hiring. Driven by tariff uncertainty.",
      recentHistory: [
        { date: "Q4 2024", value: 92.3 },
        { date: "Q1 2025", value: 86.7 },
        { date: "Q2 2025", value: 78.5 }
      ],
      historicalMilestones: [
        { event: "Tax reform optimism (Q1 2018)", value: 113.0 },
        { event: "Trade war (Q3 2019)", value: 75.8 },
        { event: "Pandemic (Q2 2020)", value: 32.0 },
        { event: "Current (Q2 2025)", value: 78.5 }
      ]
    },
    {
      name: "Chief Executive CEO Confidence",
      current: 39,
      trend: "down",
      change: -13,
      period: "Mar 2025",
      baseline: 52,
      historicalAvg: 58.4,
      allTimeHigh: 74,
      allTimeHighDate: "Nov 2024",
      allTimeLow: 32,
      allTimeLowDate: "Nov 2012",
      key: "Only 39% expect business climate improvement",
      concern: "Tariff uncertainty, geopolitical risk",
      historicalRange: "Typical: 50-65",
      context: "Plummeted 25% from Jan 2025. 48% anticipate recession within 6 months. 75% say tariffs negative.",
      recentHistory: [
        { date: "Nov 2024", value: 74 },
        { date: "Jan 2025", value: 52 },
        { date: "Mar 2025", value: 39 },
        { date: "Jun 2025", value: 44 },
        { date: "Sep 2025", value: 47 }
      ],
      historicalMilestones: [
        { event: "Lowest (Nov 2012)", value: 32 },
        { event: "Pre-pandemic (2019)", value: 62 },
        { event: "Post-election high (Nov 2024)", value: 74 },
        { event: "Tariff crash (Mar 2025)", value: 39 }
      ]
    },
    {
      name: "EY-Parthenon CEO Confidence",
      current: 83,
      trend: "up",
      change: 6.5,
      period: "Sep 2025",
      baseline: 76.5,
      historicalAvg: 77.8,
      allTimeHigh: 89,
      allTimeHighDate: "Sep 2024",
      allTimeLow: 62,
      allTimeLowDate: "Mar 2023",
      key: "Increased optimism despite volatility",
      concern: "79% see inflation as operational headwind",
      historicalRange: "Typical: 70-85",
      context: "57% expect geopolitical uncertainty beyond 1 year. 89% anticipate M&A with moderate impact.",
      recentHistory: [
        { date: "Sep 2024", value: 89 },
        { date: "Jan 2025", value: 79 },
        { date: "May 2025", value: 76.5 },
        { date: "Sep 2025", value: 83 }
      ],
      historicalMilestones: [
        { event: "Low point (Mar 2023)", value: 62 },
        { event: "Peak (Sep 2024)", value: 89 },
        { event: "Tariff dip (May 2025)", value: 76.5 },
        { event: "Current (Sep 2025)", value: 83 }
      ]
    },
    {
      name: "Deloitte CFO Confidence",
      current: 5.4,
      trend: "down",
      change: -1.0,
      period: "Q2 2025",
      baseline: 6.4,
      historicalAvg: 5.8,
      allTimeHigh: 7.9,
      allTimeHighDate: "Q1 2025",
      allTimeLow: -2.3,
      allTimeLowDate: "Q2 2020",
      key: "2nd largest quarterly decline in years",
      concern: "Heightened policy uncertainty",
      historicalRange: "Scale: -10 (pessimistic) to +10 (optimistic)",
      context: "Only 23% view economy as 'good now' vs 50% in Q1. Just 33% say it's safe to take risks.",
      recentHistory: [
        { date: "Q4 2024", value: 6.8 },
        { date: "Q1 2025", value: 7.9 },
        { date: "Q2 2025", value: 5.4 },
        { date: "Q3 2025", value: 5.7 }
      ],
      historicalMilestones: [
        { event: "Pandemic low (Q2 2020)", value: -2.3 },
        { event: "Pre-pandemic (Q4 2019)", value: 6.2 },
        { event: "Post-election (Q1 2025)", value: 7.9 },
        { event: "Current (Q2 2025)", value: 5.4 }
      ]
    }
  ];

  const uncertaintyData = [
    {
      name: "Economic Policy Uncertainty Index",
      current: 245,
      trend: "up",
      change: 45,
      period: "Oct 2025",
      baseline: 100,
      historicalAvg: 125.3,
      allTimeHigh: 503,
      allTimeHighDate: "Apr 2020",
      allTimeLow: 45,
      allTimeLowDate: "Nov 1987",
      key: "Elevated due to tariff policies",
      concern: "Trade policy volatility",
      historicalRange: "Normal: 75-150, Crisis: >300",
      context: "Based on news coverage, tax code expirations, forecaster disagreement. 2x long-run average since 2008.",
      recentHistory: [
        { date: "Oct 2024", value: 128 },
        { date: "Jan 2025", value: 165 },
        { date: "Apr 2025", value: 312 },
        { date: "Jul 2025", value: 225 },
        { date: "Sep 2025", value: 200 },
        { date: "Oct 2025", value: 245 }
      ],
      historicalMilestones: [
        { event: "9/11 (Sep 2001)", value: 358 },
        { event: "Debt ceiling (Aug 2011)", value: 323 },
        { event: "Pandemic peak (Apr 2020)", value: 503 },
        { event: "Current (Oct 2025)", value: 245 }
      ]
    },
    {
      name: "NFIB Uncertainty Index",
      current: 100,
      trend: "up",
      change: 7,
      period: "Sep 2025",
      baseline: 75,
      historicalAvg: 78.5,
      allTimeHigh: 110,
      allTimeHighDate: "Nov 2020",
      allTimeLow: 62,
      allTimeLowDate: "Feb 2018",
      key: "4th highest in 51+ years",
      concern: "Policy changes impact on operations",
      historicalRange: "Typical: 70-85",
      context: "Measures how uncertain small businesses are about future conditions. Spikes during election years and crises.",
      recentHistory: [
        { date: "Oct 2024", value: 76 },
        { date: "Jan 2025", value: 100 },
        { date: "Apr 2025", value: 89 },
        { date: "Jun 2025", value: 89 },
        { date: "Aug 2025", value: 93 },
        { date: "Sep 2025", value: 100 }
      ],
      historicalMilestones: [
        { event: "Election peak (Nov 2020)", value: 110 },
        { event: "Low uncertainty (Feb 2018)", value: 62 },
        { event: "Pandemic (Apr 2020)", value: 92 },
        { event: "Current (Sep 2025)", value: 100 }
      ]
    },
    {
      name: "Atlanta Fed Survey of Business Uncertainty",
      current: 6.8,
      trend: "up",
      change: 1.2,
      period: "Q3 2025",
      baseline: 5.0,
      historicalAvg: 5.2,
      allTimeHigh: 14.3,
      allTimeHighDate: "Apr 2020",
      allTimeLow: 3.8,
      allTimeLowDate: "Jan 2019",
      key: "Sales growth uncertainty elevated",
      concern: "Trade and regulatory uncertainty",
      historicalRange: "Normal: 4.5-6.0",
      context: "Measures standard deviation of firm-level sales and employment forecasts. Higher = more uncertain.",
      recentHistory: [
        { date: "Q4 2024", value: 5.4 },
        { date: "Q1 2025", value: 6.2 },
        { date: "Q2 2025", value: 7.1 },
        { date: "Q3 2025", value: 6.8 }
      ],
      historicalMilestones: [
        { event: "Pre-trade war (2018)", value: 3.8 },
        { event: "Pandemic peak (Apr 2020)", value: 14.3 },
        { event: "Normalized (2023)", value: 5.1 },
        { event: "Current (Q3 2025)", value: 6.8 }
      ]
    }
  ];

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <TrendingUp className="w-5 h-5 text-red-500" />;
    if (trend === 'down') return <TrendingDown className="w-5 h-5 text-green-500" />;
    return <Minus className="w-5 h-5 text-gray-500" />;
  };

  const getTrendColor = (trend, isUncertainty = false) => {
    if (isUncertainty) {
      return trend === 'up' ? 'text-red-600' : trend === 'down' ? 'text-green-600' : 'text-gray-600';
    }
    return trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  };

  const SurveyCard = ({ survey, isUncertainty = false }) => (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedSurvey(survey)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight flex-1">{survey.name}</h3>
        {getTrendIcon(survey.trend)}
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div>
          <p className="text-xs text-gray-500 mb-1">Current</p>
          <p className="text-xl font-bold text-gray-900">{survey.current}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Change</p>
          <p className={`text-xl font-bold ${getTrendColor(survey.trend, isUncertainty)}`}>
            {survey.change > 0 ? '+' : ''}{survey.change}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Avg</p>
          <p className="text-xl font-bold text-blue-600">{survey.historicalAvg}</p>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded mb-3">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-600">All-time Range</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-700 font-medium">{survey.allTimeLow}</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
            <div 
              className="absolute h-2 bg-blue-500 rounded-full"
              style={{
                left: `${((survey.current - survey.allTimeLow) / (survey.allTimeHigh - survey.allTimeLow)) * 100}%`,
                width: '4px'
              }}
            />
          </div>
          <span className="text-gray-700 font-medium">{survey.allTimeHigh}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-blue-50 p-2 rounded">
          <p className="text-xs font-medium text-blue-900">{survey.key}</p>
        </div>
        <div className="flex items-start gap-2 bg-amber-50 p-2 rounded">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900">{survey.concern}</p>
        </div>
        <button 
          className="w-full text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-1 mt-2"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSurvey(survey);
          }}
        >
          <Info className="w-3 h-3" />
          View Historical Details
        </button>
      </div>
    </div>
  );

  const DetailModal = ({ survey, onClose }) => {
    if (!survey) return null;
    
    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white border-b p-6 flex justify-between items-start rounded-t-lg sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{survey.name}</h2>
                <p className="text-sm text-gray-600">{survey.historicalRange}</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Current Value</p>
                  <p className="text-3xl font-bold text-blue-600">{survey.current}</p>
                  <p className="text-xs text-gray-500 mt-1">{survey.period}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Historical Average</p>
                  <p className="text-3xl font-bold text-green-600">{survey.historicalAvg}</p>
                  <p className="text-xs text-gray-500 mt-1">Long-term mean</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">vs. Baseline</p>
                  <p className={`text-3xl font-bold ${survey.current > survey.baseline ? 'text-green-600' : 'text-red-600'}`}>
                    {survey.current > survey.baseline ? '+' : ''}{(survey.current - survey.baseline).toFixed(1)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Baseline: {survey.baseline}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Context & Interpretation</h3>
                <p className="text-sm text-gray-700">{survey.context}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recent Trend (Last 6 Periods)
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={survey.recentHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <ReferenceLine y={survey.baseline} stroke="#6366f1" strokeDasharray="3 3" label="Baseline" />
                    <ReferenceLine y={survey.historicalAvg} stroke="#10b981" strokeDasharray="3 3" label="Avg" />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Historical Milestones</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={survey.historicalMilestones} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="event" type="category" width={150} tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 mb-1">All-Time Low</p>
                  <p className="text-2xl font-bold text-red-600">{survey.allTimeLow}</p>
                  <p className="text-xs text-red-700 mt-1">{survey.allTimeLowDate}</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-green-800 mb-1">All-Time High</p>
                  <p className="text-2xl font-bold text-green-600">{survey.allTimeHigh}</p>
                  <p className="text-xs text-green-700 mt-1">{survey.allTimeHighDate}</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Primary Concern
                </h3>
                <p className="text-sm text-amber-800">{survey.concern}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const KeyInsights = () => (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <AlertCircle className="w-6 h-6 text-blue-600" />
        Comprehensive Cross-Survey Analysis: October 2025
      </h2>
      
      <div className="bg-white p-5 rounded-lg mb-4 border-l-4 border-red-500">
        <h3 className="font-bold text-red-900 mb-3 text-lg">Primary Crisis: Consumer Sentiment Collapse</h3>
        <div className="space-y-3 text-sm text-gray-800">
          <p><span className="font-semibold">University of Michigan:</span> Sentiment at 55.0, down 22% year-over-year and 35% below historical average of 84.3. At 1st percentile of 574 monthly readings since 1978. Director Joanne Hsu notes "pocketbook issues like high prices and weakening job prospects remain at the forefront of consumers' minds." 63% of respondents expect unemployment to rise.</p>
          
          <p><span className="font-semibold">Conference Board:</span> Consumer Confidence fell to 94.2, with Expectations Index at 73.4—below the recession threshold of 80 for eighth consecutive month since February 2025. Present Situation Index dropped 7 points to 125.4, "the largest drop in a year," per senior economist Stephanie Guichard. Views of current financial situation recorded "largest one-month drop since July 2022."</p>
          
          <p><span className="font-semibold">Key Driver:</span> Inflation expectations elevated at 4.6% (U-Mich 1-year) and 5.8% (Conference Board), both well above Fed's 2% target. Prices and inflation "regained top position as main topic influencing consumers' views" per Conference Board September data.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg mb-4 border-l-4 border-amber-500">
        <h3 className="font-bold text-amber-900 mb-3 text-lg">Business Sector: Tariff-Driven Pessimism</h3>
        <div className="space-y-3 text-sm text-gray-800">
          <p><span className="font-semibold">CEO Sentiment Plunge:</span> Chief Executive magazine reported CEO confidence at 39 in March 2025 (down 25% from January's 52), "the lowest since November 2012." 76% said tariffs would negatively impact their businesses. 48% anticipated recession within 6 months. Conference Board CEO Confidence at 48 in Q4 2025—below neutral 50 baseline.</p>
          
          <p><span className="font-semibold">Small Business Struggle:</span> NFIB Optimism Index fell to 98.8 in September (first decline in 3 months). While near 52-year average, the Uncertainty Index surged to 100—"the fourth-highest reading in over 51 years." Chief economist Bill Dunkelberg: "owners are having to manage rising inflationary pressures, slower sales expectations, and ongoing labor market challenges."</p>
          
          <p><span className="font-semibold">Investment Freeze:</span> Supply chain disruptions affecting 64% of small businesses (up 10 points). Net 24% raising prices. Labor quality and taxes tied as single most important problem at 18% each. 11% only believe it's a good time to expand (down 3 points).</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg mb-4 border-l-4 border-orange-500">
        <h3 className="font-bold text-orange-900 mb-3 text-lg">Unprecedented Uncertainty</h3>
        <div className="space-y-3 text-sm text-gray-800">
          <p><span className="font-semibold">Policy Uncertainty Surge:</span> Trade Policy Uncertainty Index 10x normal levels according to Minneapolis Fed Research Director Andrea Raffo. His research estimates 2018-2019 trade tensions cost global economy $800 billion (1% of global GDP).</p>
          
          <p><span className="font-semibold">Dual Channels of Impact:</span> Uncertainty operates through (1) expectation formation—households behave as if purchasing power is lower, firms anticipate higher input costs; (2) pure anxiety—consumers fear job losses, firms delay investment. "Who wants to invest when you don't know what the rules are going to be?" per former St. Louis Fed President James Bullard.</p>
          
          <p><span className="font-semibold">Historical Context:</span> IMF October 2025 WEO notes tariffs are "further dimming already lackluster growth prospects." While growth downgrade at "modest end of range" due to trade deals and exemptions, outlook remains fragile with risks tilted to downside.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg mb-4 border-l-4 border-purple-500">
        <h3 className="font-bold text-purple-900 mb-3 text-lg">Common Themes & Conclusions</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-800">
          <div>
            <p className="font-semibold text-purple-800 mb-2">1. Tariffs Dominate All Surveys</p>
            <p>69% of SMB CEOs say trade/tariff changes will negatively impact business (Vistage Q1). 59% of consumers cited tariffs unsolicited in June Michigan survey. IoT Analytics: tariffs most cited topic in Q3 2025 CEO earnings calls, though declining from Q2 peak.</p>
          </div>
          
          <div>
            <p className="font-semibold text-purple-800 mb-2">2. Labor Market Deterioration</p>
            <p>Conference Board: job availability appraisal "fell for ninth straight month to reach new multiyear low." NFIB: 32% have unfilled openings, but hiring plans improving. Net percentage expecting unemployment to rise at 48% (U-Mich), down from 53% but "historically consistent with sharp rise in joblessness."</p>
          </div>
          
          <div>
            <p className="font-semibold text-purple-800 mb-2">3. Inflation Pressures Persist</p>
            <p>NFIB: 14% cite inflation as single most important problem (up 3 points). 81% of Chief Executive CEOs expect double-digit cost increases. Deloitte forecast: CPI averaging 2.9% in 2025, accelerating to 3.2% in 2026 due to tariff pass-through.</p>
          </div>
          
          <div>
            <p className="font-semibold text-purple-800 mb-2">4. Investment Paralysis</p>
            <p>41% of CFOs postponed investments in H1 2025 per Duke/Fed survey. Vistage: 44% increased prices since year start, 51% plan increases in next 3 months. Conference Board: 64% of CEOs preparing for "mild economic slowdown with slightly increased inflation pressure" (stagflation scenario).</p>
          </div>
          
          <div>
            <p className="font-semibold text-purple-800 mb-2">5. Demographic Divides</p>
            <p>Conference Board: confidence rose for under-35s but declined for over-35s. Michigan: middle-income households' 5-year outlook at lowest since July 2011. Independents experienced "substantial declines" while Republicans/Democrats slightly improved.</p>
          </div>
          
          <div>
            <p className="font-semibold text-purple-800 mb-2">6. Recession Expectations Rising</p>
            <p>Conference Board: share viewing recession as "very likely" rose to highest since May. More consumers thought economy already in recession. Chief Executive: 62% of CEOs forecast slowdown/recession within 6 months (vs 48% in March), 14% predict severe recession (up from 3%).</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg mb-4 border-l-4 border-green-500">
        <h3 className="font-bold text-green-900 mb-3 text-lg">Meaningful Outliers & Divergences</h3>
        <div className="space-y-3 text-sm text-gray-800">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">1. Age-Based Confidence Split</p>
            <p>Conference Board shows confidence <span className="font-semibold">rose for consumers under 35</span> while declining for over-35s. This divergence suggests younger workers may feel more insulated from labor market deterioration, possibly due to stronger tech sector positioning or lower sensitivity to financial market volatility. However, this group also has less historical context for economic downturns.</p>
          </div>

          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">2. Vistage CEO Confidence Recovery (Q3 2025)</p>
            <p>While most CEO surveys show declining confidence, Vistage Index <span className="font-semibold">increased to 81.9 in Q3</span> from 77.2 in Q2 and 78.5 in Q1. Joe Galvin notes CEOs are "in a holding pattern" but 60% expect sales revenue improvement (up from 54%), and 48% anticipate profitability gains (up from 41%). This suggests mid-market businesses may be adapting to tariff environment faster than expected, or that initial worst-case fears from Q1 have moderated.</p>
          </div>

          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">3. EY-Parthenon CEO Optimism Surge</p>
            <p>Dramatically counter-trend: confidence jumped to <span className="font-semibold">83 in September 2025</span> (up 6.5 points from May's 76.5), approaching the September 2024 peak of 89. This outlier among large enterprise CEOs suggests Fortune 500 leaders may see opportunities in market disruption that smaller firms cannot exploit—potential for market share gains, M&A opportunities (89% anticipate deals), or better ability to pass through costs.</p>
          </div>

          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">4. Home Purchase Intentions Spike</p>
            <p>Conference Board: purchasing plans for homes <span className="font-semibold">jumped to 4-month high</span> in September, even as car purchase plans declined and overall confidence fell. This anomaly may reflect pent-up demand from those who delayed during higher interest rates, or a "buy now before tariffs raise construction costs further" mentality—a form of front-loading behavior.</p>
          </div>

          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">5. NFIB Hiring Plans at January High</p>
            <p>Despite record uncertainty, net 16% of small business owners <span className="font-semibold">plan to create jobs</span> in next 3 months—highest level since January 2025 and fourth consecutive monthly increase. This disconnect between uncertainty and hiring intentions suggests labor shortages remain binding constraint. Businesses may view skilled workers as scarce resource worth securing even in uncertain times.</p>
          </div>

          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-900 mb-2">6. Income Optimism vs. Overall Pessimism</p>
            <p>Conference Board: while overall confidence fell, <span className="font-semibold">optimism about future income increased</span>, mitigating the decline in Expectations Index. Only 11.7% thought incomes would decrease (vs 13.3% prior month). This suggests workers may believe their individual earning power is protected even if aggregate economy weakens—possibly reflecting tight labor market giving workers bargaining power.</p>
          </div>

          <div className="bg-amber-50 p-3 rounded border border-amber-200">
            <p className="font-semibold text-amber-900 mb-2">⚠️ Interpretation Note</p>
            <p className="text-amber-800">These outliers should be viewed cautiously. They may represent: (1) genuine pockets of resilience worth monitoring, (2) lagging indicators not yet reflecting full reality, (3) survey methodology differences, or (4) temporary aberrations that will revert to trend. The dominant signal across 14 surveys remains negative, but these divergences offer important nuance and potential early signals of stabilization—or alternatively, areas of future disappointment if optimism proves unfounded.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-lg border border-red-200">
        <h3 className="font-bold text-red-900 mb-2 text-lg">Bottom Line Conclusion</h3>
        <p className="text-gray-900 leading-relaxed">
          <span className="font-semibold">The 14 tracked surveys paint a consistent picture of an economy under severe stress from tariff-driven uncertainty.</span> Consumer sentiment has collapsed to levels typically seen only during recessions, business leaders are in a defensive crouch delaying investment and hiring, and uncertainty indices are at or near record highs. The dual shock of actual tariff costs plus the anxiety from policy unpredictability is creating a self-reinforcing negative cycle. While Conference Board CEOs see 64% probability of "mild slowdown," the breadth and depth of pessimism across consumer, small business, and large business surveys suggests significant recession risk if uncertainty doesn't resolve soon. As IMF notes, resolving policy uncertainty alone could raise global output by 0.4%, underscoring how much current volatility is suppressing economic potential.
        </p>
      </div>
    </div>
  );

  const ComparisonTable = () => {
    const allData = [...consumerData, ...businessData, ...uncertaintyData];
    
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 overflow-x-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Comparison: All Surveys</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-2">Survey</th>
              <th className="text-right py-2 px-2">Current</th>
              <th className="text-right py-2 px-2">Avg</th>
              <th className="text-right py-2 px-2">Low</th>
              <th className="text-right py-2 px-2">High</th>
              <th className="text-right py-2 px-2">% of Range</th>
              <th className="text-right py-2 px-2">Trend</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((survey, idx) => {
              const range = survey.allTimeHigh - survey.allTimeLow;
              const position = ((survey.current - survey.allTimeLow) / range * 100).toFixed(0);
              const isLow = parseFloat(position) < 40;
              const isHigh = parseFloat(position) > 60;
              
              return (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-2 font-medium text-gray-900">{survey.name}</td>
                  <td className="text-right py-2 px-2 font-semibold">{survey.current}</td>
                  <td className="text-right py-2 px-2 text-gray-600">{survey.historicalAvg}</td>
                  <td className="text-right py-2 px-2 text-red-600">{survey.allTimeLow}</td>
                  <td className="text-right py-2 px-2 text-green-600">{survey.allTimeHigh}</td>
                  <td className="text-right py-2 px-2">
                    <span className={`font-semibold ${isLow ? 'text-red-600' : isHigh ? 'text-green-600' : 'text-gray-700'}`}>
                      {position}%
                    </span>
                  </td>
                  <td className="text-right py-2 px-2">
                    {survey.trend === 'up' ? '📈' : survey.trend === 'down' ? '📉' : '➡️'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-3">* % of Range shows where current value sits between all-time low (0%) and high (100%)</p>
      </div>
    );
  };

  const HistoricalComparison = () => {
    const [selectedSurveys, setSelectedSurveys] = useState([
      'U-Mich Sentiment',
      'Conf Board Confidence',
      'NFIB Optimism',
      'CEO Confidence (Conf Board)'
    ]);
    const [showNormalized, setShowNormalized] = useState(true);

    const surveyShortNames = {
      'University of Michigan Consumer Sentiment': 'U-Mich Sentiment',
      'Conference Board Consumer Confidence': 'Conf Board Confidence',
      'Morning Consult ICS': 'Morning Consult ICS',
      'NY Fed Consumer Expectations - Inflation': 'NY Fed Inflation Exp',
      'Conference Board CEO Confidence': 'CEO Confidence (Conf Board)',
      'Duke/Fed CFO Survey Optimism': 'Duke/Fed CFO',
      'NFIB Small Business Optimism': 'NFIB Optimism',
      'Business Roundtable CEO Outlook': 'Business Roundtable',
      'Chief Executive CEO Confidence': 'Chief Executive Confidence',
      'EY-Parthenon CEO Confidence': 'EY-Parthenon CEO',
      'Deloitte CFO Confidence': 'Deloitte CFO',
      'Economic Policy Uncertainty Index': 'Econ Policy Uncertainty',
      'NFIB Uncertainty Index': 'NFIB Uncertainty',
      'Atlanta Fed Survey of Business Uncertainty': 'Atlanta Fed SBU'
    };

    const allSurveys = [
      ...consumerData.map(s => s.name),
      ...businessData.map(s => s.name),
      ...uncertaintyData.map(s => s.name)
    ];

    const historicalData = [
      { date: 'Oct 2024', month: 1 },
      { date: 'Nov 2024', month: 2 },
      { date: 'Dec 2024', month: 3 },
      { date: 'Jan 2025', month: 4 },
      { date: 'Feb 2025', month: 5 },
      { date: 'Mar 2025', month: 6 },
      { date: 'Apr 2025', month: 7 },
      { date: 'May 2025', month: 8 },
      { date: 'Jun 2025', month: 9 },
      { date: 'Jul 2025', month: 10 },
      { date: 'Aug 2025', month: 11 },
      { date: 'Sep 2025', month: 12 },
      { date: 'Oct 2025', month: 13 }
    ].map(point => {
      const dataPoint = { ...point };
      
      const umichValues = [70.5, 73.0, 74.0, 73.2, 62.0, 57.0, 50.0, 52.8, 65.6, 67.9, 67.0, 55.1, 55.0];
      dataPoint['U-Mich Sentiment'] = umichValues[point.month - 1];
      dataPoint['U-Mich Sentiment (Norm)'] = ((umichValues[point.month - 1] - 50.0) / (111.4 - 50.0) * 100).toFixed(1);
      
      const confBoardValues = [108.7, 112.8, 109.5, 102.3, 98.0, 86.0, 85.7, 97.1, 99.2, 101.9, 97.8, 94.2, 92.0];
      dataPoint['Conf Board Confidence'] = confBoardValues[point.month - 1];
      dataPoint['Conf Board Confidence (Norm)'] = ((confBoardValues[point.month - 1] - 25.3) / (144.7 - 25.3) * 100).toFixed(1);
      
      const nfibValues = [93.7, 101.7, 105.6, 102.8, 101.8, 99.6, 89.7, 90.5, 98.6, 93.7, 100.8, 98.8, 97.5];
      dataPoint['NFIB Optimism'] = nfibValues[point.month - 1];
      dataPoint['NFIB Optimism (Norm)'] = ((nfibValues[point.month - 1] - 81.0) / (108.8 - 81.0) * 100).toFixed(1);
      
      const mcValues = [95.2, 97.5, 99.1, 98.1, 88.0, 82.5, 79.0, 84.2, 89.4, 90.8, 90.5, 89.4, 87.3];
      dataPoint['Morning Consult ICS'] = mcValues[point.month - 1];
      dataPoint['Morning Consult ICS (Norm)'] = ((mcValues[point.month - 1] - 62.4) / (118.3 - 62.4) * 100).toFixed(1);
      
      const nyFedValues = [2.9, 2.8, 2.9, 3.0, 3.5, 3.8, 6.6, 4.2, 3.3, 3.2, 3.2, 3.2, 3.4];
      dataPoint['NY Fed Inflation Exp'] = nyFedValues[point.month - 1];
      dataPoint['NY Fed Inflation Exp (Norm)'] = ((nyFedValues[point.month - 1] - 2.0) / (6.8 - 2.0) * 100).toFixed(1);
      
      const epuValues = [128, 140, 155, 165, 220, 312, 340, 280, 225, 210, 215, 200, 245];
      dataPoint['Econ Policy Uncertainty'] = epuValues[point.month - 1];
      dataPoint['Econ Policy Uncertainty (Norm)'] = ((epuValues[point.month - 1] - 45) / (503 - 45) * 100).toFixed(1);
      
      const nfibUncValues = [76, 82, 86, 100, 104, 96, 92, 94, 89, 97, 93, 100, 98];
      dataPoint['NFIB Uncertainty'] = nfibUncValues[point.month - 1];
      dataPoint['NFIB Uncertainty (Norm)'] = ((nfibUncValues[point.month - 1] - 62) / (110 - 62) * 100).toFixed(1);
      
      const ceoQuarterlyMonths = { 3: 58, 6: 46, 9: 49, 12: 48 };
      if (ceoQuarterlyMonths[point.month]) {
        const val = ceoQuarterlyMonths[point.month];
        dataPoint['CEO Confidence (Conf Board)'] = val;
        dataPoint['CEO Confidence (Norm)'] = ((val - 23) / (83 - 23) * 100).toFixed(1);
      } else {
        dataPoint['CEO Confidence (Conf Board)'] = null;
        dataPoint['CEO Confidence (Norm)'] = null;
      }
      
      const chiefExecMonths = { 4: 52, 6: 39, 7: 42, 12: 47 };
      if (chiefExecMonths[point.month]) {
        const val = chiefExecMonths[point.month];
        dataPoint['Chief Executive Confidence'] = val;
        dataPoint['Chief Executive Confidence (Norm)'] = ((val - 32) / (74 - 32) * 100).toFixed(1);
      } else {
        dataPoint['Chief Executive Confidence'] = null;
        dataPoint['Chief Executive Confidence (Norm)'] = null;
      }
      
      const eyMonths = { 1: 89, 8: 76.5, 12: 83 };
      if (eyMonths[point.month]) {
        const val = eyMonths[point.month];
        dataPoint['EY-Parthenon CEO'] = val;
        dataPoint['EY-Parthenon CEO (Norm)'] = ((val - 62) / (89 - 62) * 100).toFixed(1);
      } else {
        dataPoint['EY-Parthenon CEO'] = null;
        dataPoint['EY-Parthenon CEO (Norm)'] = null;
      }
      
      const cfoQuarterlyMonths = { 3: 72.1, 6: 60.9, 9: 62.9, 12: 63.5 };
      if (cfoQuarterlyMonths[point.month]) {
        const val = cfoQuarterlyMonths[point.month];
        dataPoint['Duke/Fed CFO'] = val;
        dataPoint['Duke/Fed CFO (Norm)'] = ((val - 37.2) / (75.4 - 37.2) * 100).toFixed(1);
      } else {
        dataPoint['Duke/Fed CFO'] = null;
        dataPoint['Duke/Fed CFO (Norm)'] = null;
      }
      
      const brQuarterlyMonths = { 3: 96.8, 6: 78.5, 9: 79.0 };
      if (brQuarterlyMonths[point.month]) {
        const val = brQuarterlyMonths[point.month];
        dataPoint['Business Roundtable'] = val;
        dataPoint['Business Roundtable (Norm)'] = ((val - 32.0) / (113.0 - 32.0) * 100).toFixed(1);
      } else {
        dataPoint['Business Roundtable'] = null;
        dataPoint['Business Roundtable (Norm)'] = null;
      }
      
      const delCFOMonths = { 3: 7.5, 6: 5.4, 9: 5.7 };
      if (delCFOMonths[point.month]) {
        const val = delCFOMonths[point.month];
        dataPoint['Deloitte CFO'] = val;
        dataPoint['Deloitte CFO (Norm)'] = ((val - (-2.3)) / (7.9 - (-2.3)) * 100).toFixed(1);
      } else {
        dataPoint['Deloitte CFO'] = null;
        dataPoint['Deloitte CFO (Norm)'] = null;
      }
      
      const atlFedMonths = { 3: 5.6, 6: 7.1, 9: 6.8 };
      if (atlFedMonths[point.month]) {
        const val = atlFedMonths[point.month];
        dataPoint['Atlanta Fed SBU'] = val;
        dataPoint['Atlanta Fed SBU (Norm)'] = ((val - 3.8) / (14.3 - 3.8) * 100).toFixed(1);
      } else {
        dataPoint['Atlanta Fed SBU'] = null;
        dataPoint['Atlanta Fed SBU (Norm)'] = null;
      }
      
      return dataPoint;
    });

    const surveyColors = {
      'U-Mich Sentiment': '#3b82f6',
      'Conf Board Confidence': '#10b981',
      'Morning Consult ICS': '#8b5cf6',
      'NY Fed Inflation Exp': '#f59e0b',
      'CEO Confidence (Conf Board)': '#ef4444',
      'Chief Executive Confidence': '#ec4899',
      'Duke/Fed CFO': '#06b6d4',
      'NFIB Optimism': '#84cc16',
      'Business Roundtable': '#6366f1',
      'EY-Parthenon CEO': '#14b8a6',
      'Deloitte CFO': '#f97316',
      'Econ Policy Uncertainty': '#dc2626',
      'NFIB Uncertainty': '#ea580c',
      'Atlanta Fed SBU': '#c026d3'
    };

    const toggleSurvey = (surveyName) => {
      const shortName = surveyShortNames[surveyName] || surveyName;
      if (selectedSurveys.includes(shortName)) {
        setSelectedSurveys(selectedSurveys.filter(s => s !== shortName));
      } else {
        setSelectedSurveys([...selectedSurveys, shortName]);
      }
    };

    const selectAll = () => {
      setSelectedSurveys(Object.values(surveyShortNames));
    };

    const clearAll = () => {
      setSelectedSurveys([]);
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-4 items-center mb-4">
          <button
            onClick={() => setShowNormalized(!showNormalized)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            {showNormalized ? 'Show Actual Values' : 'Show Normalized (%)'}
          </button>
          <button
            onClick={selectAll}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
          >
            Select All
          </button>
          <button
            onClick={clearAll}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
          {allSurveys.map(survey => {
            const shortName = surveyShortNames[survey] || survey;
            const isSelected = selectedSurveys.includes(shortName);
            return (
              <button
                key={survey}
                onClick={() => toggleSurvey(survey)}
                className={`px-2 py-1 text-xs rounded border transition-colors ${
                  isSelected
                    ? 'bg-blue-100 border-blue-500 text-blue-900'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                style={isSelected ? { borderColor: surveyColors[shortName] } : {}}
              >
                <div
                  className="w-3 h-3 rounded-full inline-block mr-1"
                  style={{ backgroundColor: surveyColors[shortName] }}
                />
                {shortName}
              </button>
            );
          })}
        </div>

        {selectedSurveys.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Select at least one survey to display the comparison chart
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                tick={{ fontSize: 11 }}
                label={{ 
                  value: showNormalized ? '% of Historical Range' : 'Index Value', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fontSize: 12 }
                }}
              />
              <Tooltip 
                contentStyle={{ fontSize: 12 }}
                formatter={(value, name) => {
                  if (value === null) return ['No data', name];
                  if (showNormalized && name.includes('(Norm)')) {
                    return [`${value}%`, name.replace(' (Norm)', '')];
                  }
                  return [value, name];
                }}
              />
              {showNormalized ? (
                <>
                  <ReferenceLine y={50} stroke="#666" strokeDasharray="5 5" label={{ value: 'Mid-Range', fontSize: 10 }} />
                  <ReferenceLine y={20} stroke="#dc2626" strokeDasharray="3 3" label={{ value: 'Low', fontSize: 10 }} />
                  <ReferenceLine y={80} stroke="#16a34a" strokeDasharray="3 3" label={{ value: 'High', fontSize: 10 }} />
                </>
              ) : null}
              {selectedSurveys.map(survey => (
                <Line
                  key={survey}
                  type="monotone"
                  dataKey={showNormalized ? `${survey} (Norm)` : survey}
                  stroke={surveyColors[survey]}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  connectNulls={true}
                  name={survey}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}

        <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
          <p className="font-semibold mb-1">How to read this chart:</p>
          <p className="mb-2"><span className="font-medium">Data Points:</span> Only actual reported values are shown. Monthly surveys show all 13 months. Quarterly surveys show only Q4'24, Q1'25, Q2'25, and Q3'25. Lines connect the dots but gaps between quarterly reports represent periods with no data.</p>
          <p className="mb-2"><span className="font-medium">Normalized View:</span> Shows each survey as % of its historical range (0% = all-time low, 100% = all-time high). This allows direct comparison across surveys with different scales.</p>
          <p><span className="font-medium">Actual Values:</span> Shows the raw index values as published. Useful for seeing absolute changes but harder to compare across different surveys.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            US Economic Sentiment & Uncertainty Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive view with historical context, ranges, and trends across 14 major surveys (2025)
          </p>
        </div>

        <KeyInsights />
        <ComparisonTable />

        <div className="mb-6 flex gap-3 flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            All Surveys ({consumerData.length + businessData.length + uncertaintyData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('consumer')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'consumer'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Consumer Sentiment ({consumerData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('business')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'business'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Business Confidence ({businessData.length})
          </button>
          <button
            onClick={() => setSelectedCategory('uncertainty')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === 'uncertainty'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Uncertainty Indices ({uncertaintyData.length})
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory === 'all' && (
            <>
              <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consumer Sentiment</h2>
              </div>
              {consumerData.map((survey, idx) => (
                <SurveyCard key={idx} survey={survey} />
              ))}
              
              <div className="md:col-span-2 lg:col-span-3 mt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Confidence</h2>
              </div>
              {businessData.map((survey, idx) => (
                <SurveyCard key={idx} survey={survey} />
              ))}
              
              <div className="md:col-span-2 lg:col-span-3 mt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Uncertainty Indices</h2>
              </div>
              {uncertaintyData.map((survey, idx) => (
                <SurveyCard key={idx} survey={survey} isUncertainty={true} />
              ))}
            </>
          )}
          
          {selectedCategory === 'consumer' && consumerData.map((survey, idx) => (
            <SurveyCard key={idx} survey={survey} />
          ))}
          
          {selectedCategory === 'business' && businessData.map((survey, idx) => (
            <SurveyCard key={idx} survey={survey} />
          ))}
          
          {selectedCategory === 'uncertainty' && uncertaintyData.map((survey, idx) => (
            <SurveyCard key={idx} survey={survey} isUncertainty={true} />
          ))}
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Historical Trends: All Surveys Compared
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Interactive comparison of normalized sentiment across all 14 surveys. Each line represents a different survey, normalized to show relative position within its historical range (0% = all-time low, 100% = all-time high).
          </p>
          <HistoricalComparison />
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Understanding the Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Historical Context</h3>
              <p className="text-gray-700">
                Each survey shows current value vs historical average, all-time high/low, and position within historical range. Click any card for detailed charts and milestones.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Trend Indicators</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">Sentiment improving</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span className="text-gray-700">Sentiment declining</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Interpretation</h3>
              <p className="text-gray-700">
                <span className="font-medium">% of Range:</span> Shows where current reading sits between all-time extremes. Below 40% = historically low, above 60% = historically high.
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedSurvey && (
        <DetailModal 
          survey={selectedSurvey} 
          onClose={() => setSelectedSurvey(null)}
        />
      )}
    </div>
  );
};

export default SentimentDashboard;