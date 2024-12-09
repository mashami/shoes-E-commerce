import { MainCard } from "@/components/MainCard";
import { ShoesType } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const shoesData: ShoesType[] = [
    {
      id: uuidv4(),
      brandName: "Nike",
      product: Array.from({ length: 8 }, (_, index) => ({
        id: uuidv4(),
        name: `Nike Product ${index + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        pictures: ["/image/nike.png", "/image/nike2.png"],
        color: ["Black", "White", "Red"],
        size: [7, 8, 9, 10, 11],
      })),
    },
    {
      id: uuidv4(),
      brandName: "Adidas",
      product: Array.from({ length: 8 }, (_, index) => ({
        id: uuidv4(),
        name: `Adidas Product ${index + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        pictures: ["/image/adida.webp", "/image/adida.webp"],
        color: ["Blue", "Grey", "White"],
        size: [6, 7, 8, 9, 10],
      })),
    },
    {
      id: uuidv4(),
      brandName: "Puma",
      product: Array.from({ length: 8 }, (_, index) => ({
        id: uuidv4(),
        name: `Puma Product ${index + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        pictures: ["/image/puma.avif", "/image/puma.avif"],
        color: ["Green", "Black", "Yellow"],
        size: [8, 9, 10, 11, 12],
      })),
    },
  ];

  return (
    <div className="space-y-12">
      {shoesData.map((shoes) => (
        <MainCard
          key={shoes.id}
          brandTitle={shoes.brandName}
          product={shoes.product}
        />
      ))}
    </div>
  );
}
