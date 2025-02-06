import { getClient } from "@matiasnl-sdk/core";
import type { ApiPaginatedResponse, ApiResponse } from "@matiasnl-sdk/core";
import {
  AnimeDetails,
  AnimeDetailsFull,
  Character,
  Episode,
} from "../types/anime";

const api = getClient();

export const getAnimeFullById = async (animeId: number) =>
  api.get<ApiResponse<AnimeDetailsFull>>(`/anime/${animeId}/full`);

export const getAnimeById = async (animeId: number) =>
  api.get<ApiResponse<AnimeDetails>>(`/anime/${animeId}`);

export const getAnimeEpisodesById = async (animeId: number) =>
  api.get<ApiPaginatedResponse<Episode[]>>(`/anime/${animeId}/episodes`);

export const getAnimeEpisodeById = async (animeId: number, episodeId: number) =>
  api.get<ApiPaginatedResponse<Episode[]>>(
    `/anime/${animeId}/episodes/${episodeId}`
  );

export const getAnimeCharactersById = async (animeId: number) =>
  api.get<ApiResponse<Character[]>>(`/anime/${animeId}/characters`);
