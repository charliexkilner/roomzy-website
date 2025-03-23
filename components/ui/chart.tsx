"use client"

import type * as React from "react"
import {
  Bar as BarPrimitive,
  BarChart as BarChartPrimitive,
  Line as LinePrimitive,
  LineChart as LineChartPrimitive,
  Pie as PiePrimitive,
  PieChart as PieChartPrimitive,
  Area as AreaPrimitive,
  AreaChart as AreaChartPrimitive,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts"

import { cn } from "@/lib/utils"

// Bar Chart Components
export function Bar({ className, ...props }: React.ComponentProps<typeof BarPrimitive>) {
  return <BarPrimitive className={cn("fill-primary", className)} {...props} />
}

interface BarChartProps extends React.ComponentProps<typeof BarChartPrimitive> {
  data: any[]
}

export function BarChart({ className, data, ...props }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChartPrimitive data={data} className={cn("", className)} {...props}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-sm text-muted-foreground" />
        <YAxis className="text-sm text-muted-foreground" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="value" className="fill-primary" radius={[4, 4, 0, 0]} />
      </BarChartPrimitive>
    </ResponsiveContainer>
  )
}

// Line Chart Components
export function Line({ className, ...props }: React.ComponentProps<typeof LinePrimitive>) {
  return <LinePrimitive className={cn("stroke-primary", className)} {...props} />
}

interface LineChartProps extends React.ComponentProps<typeof LineChartPrimitive> {
  data: any[]
}

export function LineChart({ className, data, ...props }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChartPrimitive data={data} className={cn("", className)} {...props}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-sm text-muted-foreground" />
        <YAxis className="text-sm text-muted-foreground" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line type="monotone" dataKey="value" className="stroke-primary" strokeWidth={2} />
      </LineChartPrimitive>
    </ResponsiveContainer>
  )
}

// Area Chart Components
export function Area({ className, ...props }: React.ComponentProps<typeof AreaPrimitive>) {
  return <AreaPrimitive className={cn("fill-primary/20 stroke-primary", className)} {...props} />
}

interface AreaChartProps extends React.ComponentProps<typeof AreaChartPrimitive> {
  data: any[]
}

export function AreaChart({ className, data, ...props }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChartPrimitive data={data} className={cn("", className)} {...props}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" />
        <XAxis dataKey="name" className="text-xs text-muted-foreground" />
        <YAxis className="text-xs text-muted-foreground" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                    <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="url(#colorValue)" />
      </AreaChartPrimitive>
    </ResponsiveContainer>
  )
}

// Pie Chart Components
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function Pie({ className, ...props }: React.ComponentProps<typeof PiePrimitive>) {
  return <PiePrimitive className={cn("", className)} {...props} />
}

interface PieChartProps extends React.ComponentProps<typeof PieChartPrimitive> {
  data: any[]
}

export function PieChart({ className, data, ...props }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChartPrimitive className={cn("", className)} {...props}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || `hsl(var(--primary))`} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                    <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
      </PieChartPrimitive>
    </ResponsiveContainer>
  )
}

// Chart Tooltip Component
interface ChartTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
  className?: string
}

export function ChartTooltip({
  active,
  payload,
  label,
  className,
  ...props
}: ChartTooltipProps & React.HTMLAttributes<HTMLDivElement>) {
  if (active && payload && payload.length) {
    return (
      <div className={cn("rounded-lg border bg-background p-2 shadow-sm", className)} {...props}>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
            <span className="font-bold text-foreground">{payload[0].value}</span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

