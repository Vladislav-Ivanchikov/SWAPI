import React from "react";

export interface IQuery {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
