import { type ApiResponse, getClient } from "@matiasnl23/sdk-test-core";
import {
  Character,
  MALAnimeRelation,
  MALMangaRelation,
  MALVoiceRelation,
} from "../types/characters";

const api = getClient();

export const getCharacterById = (characterId: number) =>
  api.get<ApiResponse<Character>>(`characters/${characterId}`);

export const getFullCharacterById = (characterId: number) =>
  api.get<ApiResponse<Character>>(`characters/${characterId}/full`);

export const getCharacterAnimeById = (characterId: number) =>
  api.get<ApiResponse<MALAnimeRelation[]>>(`characters/${characterId}/anime`);

export const getCharacterMangaById = (characterId: number) =>
  api.get<ApiResponse<MALMangaRelation[]>>(`characters/${characterId}/manga`);

export const getCharacterVoiceActorsById = (characterId: number) =>
  api.get<ApiResponse<MALVoiceRelation[]>>(`characters/${characterId}/voices`);
