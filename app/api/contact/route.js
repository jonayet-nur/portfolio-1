import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Use FormSubmit API for robust, zero-configuration email delivery to jonayetnur@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/jonayetnur@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New Message from Portfolio: ${name}`
      })
    });

    if (response.ok) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } else {
      const errorText = await response.text();
      console.error("FormSubmit API returned an error:", errorText);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
