import { type ApiResponse, getClient } from "@matiasnl23/sdk-test-core";
import type { MALGenre } from "../types";

const api = getClient();

export const getAnimeGenresById = (characterId: number) =>
  api.get<ApiResponse<MALGenre[]>>(`characters/${characterId}`);

export const getMangaGenresById = (characterId: number) =>
  api.get<ApiResponse<MALGenre[]>>(`characters/${characterId}/full`);
