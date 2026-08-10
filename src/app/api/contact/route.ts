import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  propertyId?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const phone = body.phone?.trim();
  const propertyId = body.propertyId?.trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Le nom est requis." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères." },
      { status: 400 },
    );
  }

  // Simulation d'enregistrement (RP / démo) — brancher un CRM ou Discord webhook en prod.
  console.info("[Dynasty8 Contact]", {
    name,
    email,
    phone,
    propertyId,
    message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Demande enregistrée. Un conseiller vous recontactera.",
  });
}
