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
  