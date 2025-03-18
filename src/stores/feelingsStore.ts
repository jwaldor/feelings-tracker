import { create } from "zustand";
import { feelingsApi } from "@/lib/api";

interface Feeling {
  id: string;
  feeling: string;
  createdAt: string;
  userId: string;
}

interface FeelingsState {
  feeling: string;
  isSaving: boolean;
  feelings: Feeling[];
  isLoading: boolean;
  setFeeling: (feeling: string) => void;
  clearFeeling: () => void;
  saveFeeling: () => Promise<void>;
  fetchFeelings: () => Promise<void>;
}

export const useFeelingsStore = create<FeelingsState>((set) => ({
  feeling: "",
  isSaving: false,
  feelings: [],
  isLoading: true,
  setFeeling: (feeling: string) => set({ feeling }),
  clearFeeling: () => set({ feeling: "" }),
  saveFeeling: async () => {
    const { feeling } = useFeelingsStore.getState();
    if (!feeling.trim()) return;

    set({ isSaving: true });
    try {
      await feelingsApi.saveFeeling(feeling);
      set({ feeling: "" });
    } catch (error) {
      console.error("Error saving feeling:", error);
    } finally {
      set({ isSaving: false });
    }
  },
  fetchFeelings: async () => {
    set({ isLoading: true });
    try {
      const feelings = await feelingsApi.getFeelings();
      set({ feelings });
    } catch (error) {
      console.error("Error fetching feelings:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
