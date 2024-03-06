import User from "../../models/user";
import {connectDB} from "../../../util"


export async function GET(request: Request, response: Response) {
  await connectDB();
  const users = await User.find();
  return new Response(
    JSON.stringify({
      message: "success",
      total: users.length,
      data: users,
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
