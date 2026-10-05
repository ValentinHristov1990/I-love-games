const url = "https://udwutsukejsldmwvcpik.supabase.co/rest/v1/";
const apiKey = "sb_publishable_MoEFWHnE1pEQl6iPpWaF6w_zC1sh3xp";

export default async function request(path = "/", method = "GET", data = null) {
  const options = {
    headers: {
      apiKey,
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

  if (!response) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
