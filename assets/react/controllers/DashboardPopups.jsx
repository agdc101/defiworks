import React from "react";
import { Button } from "./components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/popover"

export function DashboardPopups(props) {
  return (
    <>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Strategy Average APY's: </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="site-status-info-inner space-y-6">
                        <p className="font-light">Week APY: <strong className="font-light text-lime-400">{props.weekAvg}%</strong></p>
                        <p className="font-light">Monthly APY: <strong className="font-light text-lime-400">{props.monthAvg}%</strong></p>
                        <p className="font-light">Weekly Average APY: <strong className="font-light text-lime-400">{props.yearAvg}%</strong></p>
                    </div>
                </div>
            </PopoverContent>
            </Popover>
            <Popover>
            <PopoverTrigger asChild>
            <Button variant="outline">DeFi Works Stats: </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
            <div className="grid gap-4">
                <div className="site-status-info-inner space-y-6">
                    <p className="font-light">Total Value Locked: <strong className="font-light text-lime-400">{props.tvl ? `$${props.tvl}` : $0}</strong></p>
                    <p className="font-light">Last Yield APY: <strong className="font-light text-lime-400">{props.yieldApy ? `${Math.round(props.yieldApy * 100) / 100}%` : '4%'}</strong></p>
                    <p className="font-light">Live APY: <strong className="font-light text-lime-400">{props.liveApy ? `${Math.round(props.liveApy * 100) / 100}%` : '4%'}</strong></p>
                </div>
            </div>
            </PopoverContent>
        </Popover>
    </>
  )
}

export default DashboardPopups;