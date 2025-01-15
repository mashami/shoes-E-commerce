"use client";

import React, { useState } from "react";
import { ProductTypes } from "@/utils/types";
import { useAppContext } from "@/utils/context/AppContext";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import Card from "./Card";
import ViewItemDialog from "./ViewItemDialog";
import EditProductDialog from "./EditProductDialog";

interface MainCardProps {
  brandName: string;
  product: ProductTypes[];
  brandId: string;
}

const ITEMS_PER_PAGE = 3;

const MainComp = ({ brandName, product, brandId }: MainCardProps) => {
  const [isViewItemOpen, setIsViewItemOpen] = useState<boolean>(false);
  const { dataFilled } = useAppContext();
  const [openEditProducrDialog, setOpenEditProductDialog] =
    useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(product.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const currentItems = product.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-black">{brandName}</h1>
        <Pagination className="flex flex-col space-y-9">
          <PaginationContent className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-x-5 gap-y-12 w-full">
            {currentItems.map((productItem) => (
              <PaginationItem key={productItem.id}>
                <Card
                  openViewDialog={isViewItemOpen}
                  openEditDialog={openEditProducrDialog}
                  setOpenEditDialog={setOpenEditProductDialog}
                  setOpenViewDialog={setIsViewItemOpen}
                  brandId={brandId}
                  product={productItem}
                  brandName={brandName}
                />
              </PaginationItem>
            ))}
          </PaginationContent>
          <div className="mt-6 flex items-center justify-between">
            <PaginationPrevious
              className={cn(
                currentPage === 1
                  ? "opacity-75 hover:bg-transparent cursor-default border-none"
                  : " cursor-pointer"
              )}
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
            />

            <p className="text-center ">
              Page {currentPage} of {totalPages}
            </p>

            <PaginationNext
              className={cn(
                currentPage === totalPages
                  ? "opacity-75 hover:bg-transparent cursor-default border-none"
                  : "cursor-pointer"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            />
          </div>
        </Pagination>
      </div>

      {dataFilled && (
        <ViewItemDialog
          setOpenEditDialog={setOpenEditProductDialog}
          brandName={brandName}
          brandId={brandId}
          product={dataFilled}
          openViewDialog={isViewItemOpen}
          setOpenViewDialog={setIsViewItemOpen}
        />
      )}

      {dataFilled && (
        <EditProductDialog
          brandName={brandName}
          brandId={brandId}
          product={dataFilled}
          isEditProductOpen={openEditProducrDialog}
          setIsEditProductOpen={setOpenEditProductDialog}
        />
      )}
    </>
  );
};

export default MainComp;
