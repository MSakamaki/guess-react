
export interface IContents {
  title: string;
  author: string;
  content: string;
}

export interface IResponse {
  contents: IContents[];
}
