import request from "../utils/request";

export const create = async (data, accessToken) => {
  return request("/comments", "POST", data, {
    headers: {
      ...getAuthHeader(accessToken),
    },
  });
};

function getAuthHeader(accessToken) {
  return {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
}
