export interface GetTestMail {
  emailAddress: string;
  expiresAt: string;
  message?: Message;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  attachments: Attachment[];
}

export interface Attachment {
  filename: string;
  mimeType: string;
  content: string;
}

export interface Problem {
  type: string;
  title: string;
  detail: string;
  status: number;
}

export class APIError extends Error {
  type: string;
  title: string;
  detail: string;
  status: number;
  constructor(problem: Problem) {
    super(problem.detail);
    this.type = problem.type;
    this.title = problem.title;
    this.detail = problem.detail;
    this.status = problem.status;
  }
}

export type CreateNewRequest = {
  expiresAt: string;
};

export interface CreateNewResponse {
  getTestMail: GetTestMail;
}

export interface WaitForMessageResponse {
  getTestMail: GetTestMail;
}