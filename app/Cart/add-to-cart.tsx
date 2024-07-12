'use client';

import Car from "@/models/Car";
import { FormDataModel } from "@/models/FormDataModel";
import { useEffect, useState, useTransition } from "react";
import { useShoppingCart } from "use-shopping-cart";

type Props = {
    data: {
        car: Car,
        formData: FormDataModel
    },
    addToCart?: () => void,
    isModalOpen: boolean
}

enum Action {
    Increment,
    Decrement
}

export default function AddToCart({data, addToCart, isModalOpen}: Props) {
    const { car, formData} = data;
    const [quantity, setQuantity] = useState(1);
    const {addItem} = useShoppingCart();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if(!isModalOpen) {
            setQuantity(1);
        }
    }, [isModalOpen]);

    const handleQuantity = (action: Action) => {
        switch(action) {
            case Action.Decrement:
                if(quantity <= 1) return;
                setQuantity(quantity - 1);
                break;
            case Action.Increment:
                if(quantity >= 10) return;
                setQuantity(quantity + 1);
                break;
        }
    }

    return (
        <div >
            <div
                className="tw-w-full tw-flex tw-flex-row tw-justify-center tw-border tw-rounded-lg">
                <button
                    data-action="decrement"
                    className="tw-w-20 tw-cursor-pointer tw-outline-none"
                    onClick={() => handleQuantity(Action.Decrement)}
                    aria-label={`Remove one ${car && car.name} from your cart`}
                >
                    <span className="tw-m-auto tw-text-base">-</span>
                </button>
                <input
                    type="number"
                    className="tw-text-center tw-w-full tw-hover tw-text-base tw-cursor-default tw-flex tw-items-center tw-outline-none tw-bg-transparent"
                    name="quantity"
                    readOnly
                    value={quantity}
                ></input>
                <button
                    data-action="increment"
                    className="tw-w-20 tw-cursor-pointer tw-outline-none tw-py-3"
                    onClick={() => handleQuantity(Action.Increment)}
                    aria-label={`Add one ${car && car.name} to your cart`}
                >
                    <span className="tw-m-auto tw-text-base">+</span>
                </button>
            </div>
            <button aria-label="Add item to cart" title="Add Item to Cart" disabled={isPending}
                className="tw-w-full tw-border tw-mt-4 tw-py-2 tw-px-8 tw-rounded-lg hover:tw-bg-black hover:tw-text-white"
                onClick={() => {
                    addItem({...car, ...formData}, { count: quantity});
                    addToCart && addToCart();
                }}><span>Add To Cart</span></button>
        </div>
    )
}