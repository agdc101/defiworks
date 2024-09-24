import React from "react";
import { Button } from "./components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/popover"

export function DashboardPopups() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
            <div className="site-status-info-inner">
                <p className="site-status" >Average strategy returns:</p>
                <p>Week: <strong></strong></p>
                <p>Month: <strong>%</strong></p>
                <p>Year: <strong>%</strong></p>
            </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default DashboardPopups;