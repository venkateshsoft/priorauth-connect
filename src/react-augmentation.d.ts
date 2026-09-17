import 'react';

declare module 'react' {
  interface TextareaHTMLAttributes<T> {
    list?: string;
  }
}
