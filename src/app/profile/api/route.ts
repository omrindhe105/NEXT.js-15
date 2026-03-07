import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  //   const requestHeader = new Headers(request.headers);
  //   const header = requestHeader.get("Authorization");
  //   console.log(header);
  //   return new Response(header, { status: 200 });

  const headerslist = await headers();
  const headerData = headerslist.get("Authorization");
  return new Response(headerData, { status: 200 });
}

// This code defines a GET request handler for an API route in a Next.js application. It retrieves the "Authorization" header from the incoming request and returns its value in the response. The code uses the `headers` function from Next.js to access the request headers and constructs a new response with the retrieved header data.

// Two  diff methods are shown to access the headers.
//  first method create new header object from requst and then get the header value using get method of header object.
//  second method directly use headers function to get the header value.
