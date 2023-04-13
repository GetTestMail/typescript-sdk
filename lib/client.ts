import { APIError, CreateNewRequest, CreateNewResponse, GetTestMail, Problem, WaitForMessageResponse } from "./models";

class GetTestMailClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://gettestmail.com/api') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createNew(request?: CreateNewRequest): Promise<CreateNewResponse> {
    const response = await fetch(`${this.baseUrl}/gettestmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      body: request ? JSON.stringify(request) : undefined,
    });

    if (!response.ok) {
      const problem: Problem = await response.json();
      throw new APIError(problem);
    }

    const getTestMail: GetTestMail = await response.json();
    return { getTestMail };
  }

  async waitForMessage(id: string): Promise<WaitForMessageResponse> {
    const response = await fetch(`${this.baseUrl}/gettestmail/${id}`, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
    });

    if (!response.ok) {
      const problem: Problem = await response.json();
      throw new APIError(problem);
    }

    const getTestMail: GetTestMail = await response.json();
    return { getTestMail };
  }
}


export default GetTestMailClient;