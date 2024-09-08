import { EErrorMessages } from "@shared/enums";

export const getFetchedData = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  if (typeof url !== "string" || !url.trim()) {
    throw new Error(EErrorMessages.INVALID_URL);
  }

  const response = await fetch(url, {
    method: "GET",
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
  }

  return await response.json();
};
