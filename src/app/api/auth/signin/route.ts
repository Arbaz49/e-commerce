import User from "../../../models/user";
import { connectDB } from "../../../../util";
import { tokenCreation } from "../../../../utils/tokenCreation";
import bcryptjs from "bcryptjs";

export async function GET(request: Request, response: Response) {}

export async function POST(request: Request, response: Response) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return new Response(
        JSON.stringify({
          message: "not found",
        }),
        {
          headers: {
            "content-type": "application/json",
          },
          status: 404,
        }
      );
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (passwordMatch) {
      console.log("Passwords match!");
      const token = tokenCreation(user._id);
      const { password, ...info } = user.toObject(); // Remove password from user info
      return new Response(
        JSON.stringify({
          message: "log in successfully",
          data: info,
          token,
        }),
        {
          headers: {
            "content-type": "application/json",
          },
          status: 200,
        }
      );
    } else {
      console.log("Passwords do not match!");
      return new Response(
        JSON.stringify({
          message: "password is incorrect",
        }),
        {
          headers: {
            "content-type": "application/json",
          },
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Error",
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