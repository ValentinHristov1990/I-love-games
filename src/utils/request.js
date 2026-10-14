const restUrl = "https://udwutsukejsldmwvcpik.supabase.co/rest/v1";
const authUrl = "https://udwutsukejsldmwvcpik.supabase.co/auth/v1";

async function baseRequest(
  url,
  path = "/",
  method = "GET",
  data = null,
  opts = {},
) {
  const options = {
    ...opts,
    headers: {
      ...opts.headers,
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation",
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // if ([201, 204].includes(response.status)) {
  //   return null;
  // }

  return response.json();
}

// export default async function request(
//   path = "/",
//   method = "GET",
//   data = null,
//   opts = {},
// ) {
// return baseRequest(restUrl, path, method, data, opts);
// }
export default baseRequest.bind(null, restUrl);

// export const authRequest = async (
//   path = "/",
//   method = "GET",
//   data = null,
//   opts = {},
// ) {
// return baseRequest(authUrl, path, method, data, opts);
// }

export const authRequest = baseRequest.bind(null, authUrl);
