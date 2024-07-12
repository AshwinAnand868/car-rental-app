import stripe from "@/config/stripe";
import { CartItem } from "@/models/CartItem";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = headers();
    const { cartDetails } = await req.json();

    const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

    const lineItems = cartDetailsArray.map((item: CartItem) => {
        return {
            price_data: {
                currency: 'USD',
                unit_amount: item.price,
                product_data: {
                    name: item.name,
                },
            },
            quantity: item.quantity
        };
    });

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/ThankYou`,
            cancel_url: `${headersList.get("origin")}/`
        });

        // create form model to be sent
        // const responseObj = await createBooking();
        return NextResponse.json({sessionId: session.id});
    } catch(err) {
        console.log("ERROR: " + err);
        return NextResponse.json({error: "Error creating checkout session!"});
    }
}