import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { QUERY_API } from "@/endpoints";

export async function POST(request: NextRequest) {
  try {
      const { query, ip } = await request.json();

      if (!query) {
          return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
      }

      const payload = {
        "query": query,
        "ip": ip
      }

      const response = await axios.post(`${QUERY_API}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      if (response.status === 200) {
        return NextResponse.json(JSON.stringify(data));
      } else if (response.status === 429) {
        return NextResponse.json({ message: JSON.stringify(data) }, { status: 429 });
      }

  } catch (error) {
      // Check if the error is an Axios error and has a response  
      if (axios.isAxiosError(error) && error.response) {  
        // If it's a 429 error, send a specific response  
        if (error.response.status === 429) {  
            return NextResponse.json(error.response.data, { status: 429 });  
        }  
        // Handle other Axios errors  
        return NextResponse.json({ error: error.response.data }, { status: error.response.status });  
    }  
    // Handle unexpected errors  
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });  
  }
}