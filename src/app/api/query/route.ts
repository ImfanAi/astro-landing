import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { QUERY_API } from "@/endpoints";

export async function POST(request: NextRequest) {
  try {
      const { query } = await request.json();
      console.log("Received query:", query);

      if (!query) {
          return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
      }

      const payload = {
        "query": query,
      }

      // Use axios to make the external API call
      const response = await axios.post(`${QUERY_API}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      // console.log("External API response:", data);

      return NextResponse.json(JSON.stringify(data));
  } catch (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json({ error: error }, { status: 500 });
  }
}