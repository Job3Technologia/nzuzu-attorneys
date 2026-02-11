import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would add the email to a mailing list
    
    console.log("Newsletter subscription received:", body);
    
    return NextResponse.json(
      { message: "Subscribed successfully (demo)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
