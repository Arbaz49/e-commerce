import User from "../../../models/user";
import {connectDB} from "../../../../util"


export async function GET(request: Request, response: Response) {
}

export async function POST(request: Request, response: Response) {
  console.log("11111111111111111111111111111111111111111111")
  await connectDB()
  const body = await request.json();
  const user =await User.create(body);
  console.log("user body", body);
 
  console.log("after user created");
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
