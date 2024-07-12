import { loadStripe } from "@stripe/stripe-js";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutButton() {
    const {cartCount = 0, cartDetails, clearCart} = useShoppingCart();

    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string);

            if(!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({cartDetails}),
            });

            const {sessionId} = await checkoutResponse.json();
            clearCart();
            const stripeError = await stripe.redirectToCheckout({sessionId});

            if(stripeError) {
                console.log(stripeError);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (<button
        onClick={() => cartCount > 0 && redirectToCheckout()}
        disabled={cartCount === 0}
        className="tw-rounded-md tw-border tw-border-transparent bg-sky-900 tw-px-6 tw-py-3 tw-text-base tw-font-medium tw-text-white tw-shadow-sm tw-bg-blue-500 tw-mr-2 disabled:tw-bg-gray-600">
        Checkout
    </button>);
}