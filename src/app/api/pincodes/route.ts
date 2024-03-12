export async function GET(request: Request, response: Response) {
    console.log("GET request",request);
    return new Response(
      JSON.stringify({
        message: "success",
        data: [400061,500217,400021,300055],
      }),
      {
        headers: {
          "content-type": "application/json",
        },
        status: 200,
      }
    );
  }