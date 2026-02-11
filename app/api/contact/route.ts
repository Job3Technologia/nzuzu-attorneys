import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email here
    // using a service like Resend, SendGrid, or Nodemailer.
    
    console.log("Contact form submission received:", body);
    
    return NextResponse.json(
      { message: "Message sent successfully (demo)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
