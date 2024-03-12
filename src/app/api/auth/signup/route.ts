import User from "../../../models/user";
import {connectDB} from "../../../../util"
import bcryptjs from "bcryptjs"

export async function GET(request: Request, response: Response) {
}

export async function POST(request: Request, response: Response) {
  await connectDB()
  const body = await request.json();
  const hashedPassword=await bcryptjs.hash(body.password,8)
  const user =await User.create({...body, password:hashedPassword});
  return new Response(
    JSON.stringify({
      message: "success",
      data: user,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
      status: 201,
    }
  );
}
