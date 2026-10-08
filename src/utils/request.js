const url = "https://udwutsukejsldmwvcpik.supabase.co/rest/v1";

export default async function request(
  path = "/",
  method = "GET",
  data = null,
  opts = {},
) {
  const options = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation",
    },
    ...opts,
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // if ([201, 204].includes(response.status)) {
  //   return null;
  // }

  return response.json();
}
