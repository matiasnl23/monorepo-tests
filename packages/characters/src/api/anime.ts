import { getClient } from "@matiasnl23/sdk-test-core";
import type { ApiResponse } from "@matiasnl23/sdk-test-core";
import { Character } from "../types/characters";

const api = getClient();

export const getCharacterById = (characterId: number) =>
  api.get<ApiResponse<Character>>(`characters/${characterId}`);

export const getFullCharacterById = (characterId: number) =>
  api.get<ApiResponse<Character>>(`characters/${characterId}/full`);
