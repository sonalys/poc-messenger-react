export interface Message {
  message: string;
  sender: string;
  created_at?: number;
  pending?: boolean;
}