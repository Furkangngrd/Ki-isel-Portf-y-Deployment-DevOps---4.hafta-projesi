import { type NextRequest } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sanitize inputs - prevent XSS
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, "").trim().slice(0, 1000);

    const sanitizedData = {
      name: sanitize(body.name),
      email: body.email.trim().toLowerCase(),
      subject: sanitize(body.subject),
      message: sanitize(body.message),
      timestamp: new Date().toISOString(),
    };

    // Log the contact submission (in production, send email or save to DB)
    console.log("📬 New contact submission:", sanitizedData);

    return Response.json(
      { message: "Message received successfully!", data: sanitizedData },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { error: "Failed to process the request" },
      { status: 500 }
    );
  }
}
