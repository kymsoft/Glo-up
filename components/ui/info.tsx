import { Product } from "@/types";
import { FC } from "react";
import Currency from "./currency";
import { Button } from "./Button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex item-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />S
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button 
          className="rounded-full gap-x-2 flex items-center"
        >
            Add to Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
