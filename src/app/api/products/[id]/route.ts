import Product from "../../../models/product";
import { connectDB } from "../../../../util";
import mongoose from "mongoose";
export async function GET(request: Request, { params }: any) {
    await connectDB();
    const slug = params.id; // Assuming the slug is passed in the URL parameters
    try {
        const product = await Product.findOne({ slug });

        if (product) {
            console.log("Product found:", product);
            return new Response(
                JSON.stringify({
                    message: "success",
                    total: 1,
                    data: product,
                }),
                {
                    headers: {
                        "content-type": "application/json",
                    },
                    status: 200,
                }
            );
        } else {
            console.log("Product not found");
            return new Response(
                JSON.stringify({
                    message: "Product not found",
                }),
                {
                    headers: {
                        "content-type": "application/json",
                    },
                    status: 404,
                }
            );
        }
    } catch (error) {
        console.error("Error:", error);
        return new Response(
            JSON.stringify({
                message: "Internal server error",
            }),
            {
                headers: {
                    "content-type": "application/json",
                },
                status: 500,
            }
        );
    }
}