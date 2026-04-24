"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";

interface Trade {
  id: string;
  instrument: string;
  direction: string;
  entryPrice: number;
  exitPrice: number | null;
  positionSize: number;
  pnl: number | null;
  rMultiple: number | null;
  openedAt: Date;
}

interface TradeLogProps {
  trades: Trade[];
}

export function TradeLogTable({ trades }: TradeLogProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-x-auto">
      <Table>
        <TableHeader className="bg-slate-800/50">
          <TableRow className="border-slate-800 hover:bg-transparent">
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Date</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Asset</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">Type</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider text-right">Entry</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider text-right">Exit</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider text-right">P&L</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider text-right">R-Mult</TableHead>
            <TableHead className="text-slate-400 font-bold uppercase text-[10px] tracking-wider text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="h-32 text-center text-slate-500 italic">
                No trades recorded in this phase yet.
              </TableCell>
            </TableRow>
          ) : (
            trades.map((trade) => (
              <TableRow key={trade.id} className="border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <TableCell className="text-slate-300 font-mono text-xs">
                  {format(new Date(trade.openedAt), "MMM dd, HH:mm")}
                </TableCell>
                <TableCell className="text-white font-bold">{trade.instrument}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`${trade.direction === "buy" ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : "text-rose-400 border-rose-500/20 bg-rose-500/5"} uppercase text-[10px]`}>
                    {trade.direction === "buy" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {trade.direction}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-slate-400 font-mono text-xs">${Number(trade.entryPrice).toLocaleString()}</TableCell>
                <TableCell className="text-right text-slate-400 font-mono text-xs">
                  {trade.exitPrice ? `$${Number(trade.exitPrice).toLocaleString()}` : "—"}
                </TableCell>
                <TableCell className={`text-right font-bold font-mono ${Number(trade.pnl || 0) >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {trade.pnl ? `${Number(trade.pnl) >= 0 ? "+" : ""}${Number(trade.pnl).toLocaleString()}` : "—"}
                </TableCell>
                <TableCell className="text-right text-indigo-400 font-mono font-bold">
                  {trade.rMultiple ? `${Number(trade.rMultiple).toFixed(2)}R` : "—"}
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={trade.exitPrice ? "secondary" : "default"} className="text-[10px] uppercase">
                    {trade.exitPrice ? "Closed" : "Active"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
