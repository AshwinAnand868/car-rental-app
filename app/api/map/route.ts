import axios from "axios";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function GET(req: NextRequest) {
    // try {
    //     const url = new URL(req.url as string)
    //     const searchParams = new URLSearchParams(url.search);
    //     const response = await axios(`${BASE_URL}/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=${searchParams.get('category')}&location=${Number(searchParams.get('lat'))},${Number(searchParams.get('lng'))}&radius=1000&key=${GOOGLE_API_KEY}`);
    //     const data = response.data;
    //     return NextResponse.json(data, {status: 200});
    // } catch (error) {
    //     return NextResponse.json({ error: error }, {status: 500});
    // }
}