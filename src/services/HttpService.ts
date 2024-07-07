export const GetCarByCarId = (url: string, id: number): Promise<Response> => {
  var request = fetch(`/api/${url}/${id}`);
  return request;
};

export const ChangeLightByCarId = (
  url: string,
  id: number,
  body: any
): Promise<Response> => {
  var request = fetch(`/api/${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return request;
};

export const GetLightsByCarId = (url: string, id: number): Promise<Response> => {
  var request = fetch(`/api/${url}/${id}`);
  return request;
};

