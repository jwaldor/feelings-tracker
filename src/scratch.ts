// import axios from "axios";

// interface HumeConfig {
//   apiKey: string;
//   baseUrl: string;
// }

// interface HumeJob {
//   job_id: string;
//   status: "COMPLETED" | "FAILED";
//   predictions: any[];
// }

// class HumeClient {
//   private config: HumeConfig;

//   constructor(apiKey: string) {
//     this.config = {
//       apiKey,
//       baseUrl: "https://api.hume.ai/v0",
//     };
//   }

//   private formatResults(results: any[]): void {
//     results[0].results.predictions.forEach((prediction: any) => {
//       const textNumber = prediction.file;
//       const emotions =
//         prediction.models.language.grouped_predictions[0].predictions;

//       console.log(`\n=== Text ${textNumber} ===`);
//       console.log("Emotions detected:");
//       console.log(emotions);
//     });
//   }

//   async processText(texts: string[]) {
//     try {
//       const payload = {
//         models: {
//           language: {}, // Using language model for text processing
//         },
//         text: texts,
//       };

//       const url = `${this.config.baseUrl}/batch/jobs`;
//       console.log("Request URL:", url);
//       console.log("Request payload:", JSON.stringify(payload, null, 2));
//       console.log("Request headers:", {
//         "Content-Type": "application/json",
//         "X-Hume-Api-Key": "****", // masked for security
//       });

//       // Submit job
//       const response = await axios.post(url, payload, {
//         headers: {
//           "Content-Type": "application/json",
//           "X-Hume-Api-Key": this.config.apiKey,
//         },
//       });

//       const jobId = response.data.job_id;

//       // Wait for job completion
//       await this.waitForJobCompletion(jobId);

//       // Get predictions
//       const predictions = await this.getPredictions(jobId);
//       this.formatResults(predictions);
//       return predictions;
//     } catch (error) {
//       console.error("Error processing text:", error);
//       throw error;
//     }
//   }

//   private async waitForJobCompletion(
//     jobId: string,
//     maxAttempts = 10
//   ): Promise<void> {
//     for (let attempt = 0; attempt < maxAttempts; attempt++) {
//       const response = await axios.get(
//         `${this.config.baseUrl}/batch/jobs/${jobId}`,
//         {
//           headers: {
//             "X-Hume-Api-Key": this.config.apiKey,
//           },
//         }
//       );

//       const status = response.data.state.status;
//       console.log(status);

//       if (status === "COMPLETED") {
//         return;
//       }
//       if (status === "FAILED") {
//         throw new Error("Job processing failed");
//       }

//       // Wait 2 seconds before next attempt
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     }

//     throw new Error("Job timed out");
//   }

//   private async getPredictions(jobId: string): Promise<any> {
//     console.log("getting predictions", jobId);
//     const response = await axios.get(
//       `${this.config.baseUrl}/batch/jobs/${jobId}/predictions`,
//       {
//         headers: {
//           "X-Hume-Api-Key": this.config.apiKey,
//           accept: "application/json; charset=utf-8",
//         },
//       }
//     );
//     // console.log("predictions", response);
//     return response.data;
//   }
// }

// // Example usage
// async function main() {
//   const apiKey = process.env.HUME_API_KEY;
//   if (!apiKey) {
//     throw new Error("HUME_API_KEY is not set");
//   }
//   const client = new HumeClient(apiKey);

//   const texts = [
//     "I am absolutely thrilled and overjoyed with this incredible achievement! This means the world to me!",
//     "I feel devastated and heartbroken by the terrible news. I can't believe this is happening.",
//     "This makes me so angry and frustrated! How could they do this to us?!",
//     "I'm anxious and worried about tomorrow's presentation, but I'm trying to stay hopeful.",
//   ];

//   try {
//     const results = await client.processText(texts);
//     console.log("Results:", results);
//   } catch (error) {
//     console.error("Error in main:", error);
//   }
// }

// main();
