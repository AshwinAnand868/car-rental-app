import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function OpenCart() {
    return (
        <div className="tw-relative tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-2xl tw-border tw-text-black tw-transition-colors tw-bg-[#D1E8A1] dark:border-neutral-700 dark:tw-text-white tw-cursor-pointer">
            <ShoppingCartIcon className="tw-w-5 tw-h-5 tw-transition-all hover:tw-scale-110"/>
        </div>
    )
}