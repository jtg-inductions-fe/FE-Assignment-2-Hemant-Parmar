import { MouseEvent, ReactNode } from 'react';

export type PrimaryButtonProps =
    | {
          route: string;
          content: ReactNode;
      }
    | {
          onClick: (event: MouseEvent<HTMLButtonElement>) => void;
          content: ReactNode;
      };
