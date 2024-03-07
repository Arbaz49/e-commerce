// const Login = catchErrorAsync(async (req, res, next) => {
//     console.log("body",req.body.email)
//     const email=req.body.email;
//     const user = await UserModel.findOne({ email:email})
//     console.log("user",user)
//     if (!user) return next(new apiErrorsModel("not found", 404));
//     if (!(await user.verifyPassword(req.body.password, user.password))) {
//       return next(new apiErrorsModel("incorrect credentials", 401));
//     }
//     const token = tokenCreation(user._id);
//     const { password, ...info } = user._doc;
//     console.log(user.password);
//     res.cookie("token", token);
//     res.status(200).json({
//       message: "success",
//       data: info,
//       token,
//     });
//   });

import User from "../../../models/user";
import { connectDB } from "../../../../util";
import { tokenCreation } from "../../../../utils/tokenCreation";
export async function GET(request: Request, response: Response) {}

export async function POST(request: Request, response: Response) {
  console.log("11111111111111111111111111111111111111111111");
  await connectDB();
  const body = await request.json();
  const email = body.email;
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
  } else {
    const userPassword = body.password;
    if (userPassword !== user.password) {
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
    const token = tokenCreation(user._id);
    const { password, ...info } = user._doc;
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
  }
}
