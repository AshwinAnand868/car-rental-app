import Stripe from "stripe";

if(!process.env.STRIPE_TEST_SECRET_KEY) {
    throw new Error('Stripe Secret Key is missing!');
}

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
    apiVersion: "2024-04-10"
});

export default stripe;