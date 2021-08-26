# Annotations about the project

## Language

Project was supposed to be in TypeScript, however it was entirely in JavaScript, I migrated it partially to TypeScript.

## Dependencies

Also upgraded all the deprecated dependencies and audited all vulnerable npm dependencies.

## UI Problems

- Calibri is a microsoft font, it's licensed and can only be used for non-profit and personal usage, since it was not provided, I cannot use it, however, it's easy to change it, requiring only a few lines of code.

- Error label style is not provided.

- Provided size of the button is incompatible with the image shown.

- There are requirements for mobile compatibility, however, there are no design screens for mobile version, this can reduce the quality of the final product, because front-end developers are not designers.

- The provided design screen only contains 1 state, that is, with the error message, however, it would be nice to know the state without it, because the spacing between password input and login button are very weird without it, also the transition between no error messages and error messages changes the size of the card, and this is a bad UX. ( I will implement it in such a way that the size doesn't change ).

- There are no further details regarding the interactivity of the screen, such as hover states and mouse down states, which improves significantly the UX.

- Following the project "idea" that is, this is a real project, I would also recommend for transitional states, such as "trying to login", "loading messages", "sending message", because on local environment, it is instantaneous, however, in prod, it takes time, and these transitional states improves the UX a lot.

- Regarding the guidelines, it would be a lot more efficient for designers and front-end developers to design the UI with themes and palettes in mind, referencing colors, spacings and fonts with a predefined set of values, making it a lot easier in the future for accessibility features, such as high contrast, high / low density and dark theme.
