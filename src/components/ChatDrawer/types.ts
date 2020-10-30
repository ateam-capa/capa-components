export interface MessageItem {
  id: string;
  avatar?: string;
  name?: string;
  createdAt: string;
  createdAtFormat: string;
  content?: string;
  file?: MessageFile;
}

export interface MessageFile {
  file_key: string;
  file_name: string;
}
