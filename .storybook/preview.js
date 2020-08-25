import React from 'react';
import { CSSReset } from '../src/components/css-reset/css-reset';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <>
      <CSSReset />
      <Story />
    </>
  )
]
