"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMobile";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  console.log("currentPage:", currentPage);

  const handleFirstPage = () => {
    if (canGoPrevious) {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (canGoPrevious) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (canGoNext) {
      onPageChange(totalPages);
    }
  };

  if (isMobile) {
    return (
      <div className="flex items-center justify-between w-full">
        <div className="text-sm font-normal">
          {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePreviousPage}
            disabled={!canGoPrevious}
            aria-label="Go to previous page"
            className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            disabled={!canGoNext}
            aria-label="Go to next page"
            className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={handleFirstPage}
        disabled={!canGoPrevious}
        aria-label="Go to first page"
        className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handlePreviousPage}
        disabled={!canGoPrevious}
        aria-label="Go to previous page"
        className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex items-center justify-center min-w-[80px] px-4 py-2">
        {currentPage} of {totalPages}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNextPage}
        disabled={!canGoNext}
        aria-label="Go to next page"
        className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleLastPage}
        disabled={!canGoNext}
        aria-label="Go to last page"
        className="h-10 w-10 bg-[#F2F2F2] hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
