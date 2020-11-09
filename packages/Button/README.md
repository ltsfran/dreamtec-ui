# @dreamtec-ui/button

Buttons are used as triggers for actions.

## Installation

```sh
yarn add @dreamtec-ui/button
```

## Import component

```jsx
import { Button } from "@dreamtec-ui/button"
```

## Usage

```jsx
<Button>Default</Button>
```

## Variants

Set variants using ***variant*** prop.

```jsx
<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
```

## Loading

To indicate a button is loading, use the ***isLoading*** prop.

```jsx
<Button isLoading>Default</Button>
```

## Disabled

To indicate a button is disabled, use the ***isDisabled*** prop.

```jsx
<Button isDisabled>Default</Button>
```

## Size

Set sizes using ***size*** prop.

```jsx
<Button size="small">Small</Button>
<Button size="normal">Normal</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Display

To take full width of the parent element, use ***fullWidth*** prop.

```jsx
<Button fullWidth size="small">Small</Button>
```

## Custom width

Custom button width, use ***width*** prop.

```jsx
<Button width={400}>Normal 400</Button>
```
