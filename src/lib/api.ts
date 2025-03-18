interface SaveFeelingResponse {
  id: string;
  feeling: string;
  createdAt: string;
  userId: string;
}

export const feelingsApi = {
  saveFeeling: async (feeling: string): Promise<SaveFeelingResponse> => {
    const response = await fetch("/api/saveEntry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feeling }),
    });

    if (!response.ok) {
      throw new Error("Failed to save feeling");
    }

    return response.json();
  },

  getFeelings: async (): Promise<SaveFeelingResponse[]> => {
    const response = await fetch("/api/getFeelings", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to get feelings");
    }

    return response.json();
  },
};
