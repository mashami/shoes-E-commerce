import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TooltipCompProps {
  children: React.ReactNode;
  content: string;
  onClick: () => void;
}

const TooltipComp = ({ children, content, onClick }: TooltipCompProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick} asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className="bg-blue-500">
          <p className="text-white">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComp;
