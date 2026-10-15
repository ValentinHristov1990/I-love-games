import request from "../utils/request";

export const getAll = (accessToken) => {
  return request("/games?order=created_at.desc", "GET", null, {
    headers: {
      ...getAuthHeader(accessToken),
    },
  });
};

export const create = (data, accessToken) => {
  return request("/games", "POST", data, {
    headers: {
      ...getAuthHeader(accessToken),
    },
  });
};

export const remove = async (gameId, accessToken) => {
  return request(`/games?id=eq.${gameId}`, "DELETE", "null", {
    headers: {
      ...getAuthHeader(accessToken),
    },
  });
};

export const update = async (gameId, data, accessToken) => {
  return request(`/games?id=eq.${gameId}`, "PUT", data, {
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
