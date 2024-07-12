'use client';

import { CartItem } from "@/models/CartItem";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartItemComponent from "./cart-item";
import CheckoutButton from "./checkout";
import OpenCart from "./open-cart";

export default function CartModal() {
    const [openCart, setOpenCart] = useState<boolean>(false);
    const { cartCount, cartDetails } = useShoppingCart();
    let [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        if(cartDetails) {
            let total = 0;
            Object.values(cartDetails).map((item) => (
                total += item.price * item.quantity
            ))

            setTotalPrice(total);
        }
    }, [cartDetails])

    return (
        <>
            <button aria-label='Open cart' onClick={() => setOpenCart(true)}>
                <OpenCart />
            </button>
            <Transition.Root show={openCart} as={Fragment}>
                <Dialog as="div" className="tw-relative tw-z-[1000]" onClose={() => setOpenCart(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter='tw-ease-in-out tw-duration-500'
                        enterFrom='tw-opacity-0'
                        enterTo='tw-opacity-100'
                        leave='tw-ease-in-out tw-duration-500'
                        leaveFrom='tw-opacity-100'
                        leaveTo='tw-opacity-0'
                    >
                        <div className='tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity' />
                    </Transition.Child>

                    <div className='tw-fixed tw-inset-0 tw-overflow-hidden'>
                        <div className='tw-absolute tw-inset-0 tw-overflow-hidden'>
                            <div className='tw-pointer-events-none tw-fixed tw-inset-y-0 tw-right-0 tw-flex tw-max-w-full tw-pl-10'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700'
                                    enterFrom="tw-translate-x-full"
                                    enterTo="tw-translate-x-0"
                                    leave="tw-transform tw-transition tw-ease-in-out tw-duration-500 sm:tw-duration-700"
                                    leaveFrom="tw-translate-x-0"
                                    leaveTo="tw-translate-x-full"
                                >
                                    <Dialog.Panel className="tw-pointer-events-auto tw-w-screen tw-max-w-md">
                                        <div className="tw-flex tw-h-full tw-flex-col tw-overflow-y-scroll tw-bg-white tw-shadow-xl">
                                            <div className="tw-flex-1 tw-overflow-y-auto tw-px-4 tw-py-6 sm:tw-px-6">
                                                <div className="tw-flex tw-items-start tw-justify-between">
                                                    <Dialog.Title className="tw-text-lg tw-font-medium tw-text-gray-900">Shopping
                                                        cart</Dialog.Title>
                                                    <div className="tw-ml-3 tw-flex tw-h-7 tw-items-center">
                                                        <button
                                                            type="button"
                                                            className="tw-relative tw--m-2 tw-p-2 tw-text-gray-400 hover:tw-text-gray-500"
                                                            onClick={() => setOpenCart(false)}
                                                        >
                                                            <span className="tw-absolute tw--inset-0.5" />
                                                            <span className="tw-sr-only">Close panel</span>
                                                            <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="tw-mt-10">
                                                    <div className="tw-flow-root">
                                                        <ul role="list"
                                                            className="tw-grid tw-grid-cols-1 tw-divide-y tw-divide-gray-200">
                                                            {cartCount && cartCount > 0
                                                                ? Object.values(cartDetails ?? {}).map((item) => {
                                                                    
                                                                    return <CartItemComponent key={item.id} item={item as unknown as CartItem} />
})
                                                                : <div
                                                                    className='tw-mt-20 tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden'>
                                                                    <ShoppingCartIcon className='tw-h-16' />
                                                                    <p className='tw-mt-6 tw-text-center tw-text-2xl tw-font-bold'>Your cart is empty.</p>
                                                                </div>
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tw-border-t tw-border-gray-200 tw-px-4 tw-py-6 sm:tw-px-6">
                                                <div className='tw-flex tw-justify-between tw-text-base tw-font-medium tw-text-gray-900'>
                                                    <p>Subtotal</p>
                                                    <p>{totalPrice/100}</p>
                                                </div>
                                                <p className="tw-mt-0.5 tw-text-sm tw-text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="tw-mt-6">
                                                    <CheckoutButton />
                                                </div>
                                                <div className="tw-mt-6 tw-flex tw-justify-center tw-text-center tw-text-sm tw-text-gray-500">
                                                    <p> or
                                                        <button
                                                            type="button"
                                                            className="tw-font-medium text-sky-900 hover:text-sky-700 tw-px-2"
                                                            onClick={() => setOpenCart(false)}>
                                                            Continue Shopping <span aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}