import Product from "../../models/product";
import {connectDB} from "../../../util"

export async function GET(request: Request, response: Response) {
  await connectDB();
  const {searchParams} = new URL(request.url);
  const param = searchParams.get("category");
  console.log("GET request",request);
  const products = await Product.find({category: param});
  return new Response(
    JSON.stringify({
      message: "success",
      total: products.length,
      data: products,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
      status: 200,
    }
  );
}

export async function POST(request: Request, response: Response) {
  const body = await request.json();
  console.log("POST request body", body);
  return new Response(
    JSON.stringify({
      message: "success",
      data: body,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
      status: 201,
    }
  );
}
