import { CartItem } from "@/models/CartItem";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

type Props = {
    item: CartItem
}

export default function CartItemComponent({item}: Props) {
    const {name, quantity, price} = item;
    const {removeItem} = useShoppingCart();

    const handleRemoveItem = () => {
        removeItem(item.id);
    }

    return (
        <div className="tw-flex tw-items-center tw-gap-4 tw-py-3">
            <div>
                {name} <span className="tw-text-xs">({quantity})</span>
            </div>
            <div className="tw-ml-auto">
                <p>{formatCurrencyString({value: price * quantity || 0, currency: "USD"})}</p>
            </div>
            <button
                onClick={() => handleRemoveItem()}
                className="hover:bg-emerald-50 tw-transition-colors tw-rounded-full tw-duration-500 tw-p-1"
            >
                <XMarkIcon className="tw-h-4 tw-w-4 tw-text-red-500" aria-hidden="true"/>
            </button>
        </div>
    )
}