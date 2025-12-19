export async function fetchClient<T>(
  url: string,
  options: RequestInit & { token?: string } = {}
): Promise<T> {
  const { token, headers, ...rest } = options;

  const response = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      ...(headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized");
    }

    let message = "Error en la petición";
    try {
      const error = await response.json();
      message = error.message ?? message;
    } catch {
      //
    }

    throw new Error(message);
  }

  return response.json();
}
