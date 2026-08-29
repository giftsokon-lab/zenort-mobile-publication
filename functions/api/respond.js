export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    if (!body.response || body.response.trim().length < 2) {
      return Response.json(
        { ok: false, error: "Response is required." },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    if (!context.env.ZENORT_DB) {
      return Response.json(
        { ok: false, error: "Database binding not configured." },
        { status: 503 }
      );
    }

    await context.env.ZENORT_DB.prepare(
      `INSERT INTO responses
       (id, response, location, sector, created_at)
       VALUES (?, ?, ?, ?, ?)`
    )
      .bind(
        id,
        body.response.trim(),
        (body.location || "").trim(),
        body.sector || "",
        createdAt
      )
      .run();

    return Response.json({
      ok: true,
      id: id
    });

  } catch (error) {
    return Response.json(
      { ok: false, error: "Unable to record response." },
      { status: 500 }
    );
  }
}
