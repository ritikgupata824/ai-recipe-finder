# Accessibility Component Notes

## What I built by hand

I built three interactive React + TypeScript components from scratch:

- Modal dialog
- Tabs
- Disclosure

The components were implemented without a component library and include keyboard interaction and ARIA attributes.

## What shadcn/ui handled that my hand-built version did not

### 1. Dialog focus management and accessibility details

My hand-built modal implements basic focus trapping, Escape-to-close, and focus restoration. However, the shadcn Dialog implementation provides a more complete reusable dialog system with dedicated trigger, portal, overlay, content, title, description, and close components.

The generated source also separates the dialog structure into reusable primitives instead of keeping all behavior inside one component.

### 2. Tabs behavior and reusable primitives

My hand-built Tabs component implements Arrow Left/Right navigation, Home/End navigation, selected state, and ARIA relationships directly.

The shadcn Tabs implementation provides reusable `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent` primitives and delegates the detailed tab interaction behavior to its underlying accessibility component system.

### 3. Reusable styling and component composition

My components contain their own markup and Tailwind classes directly.

shadcn provides reusable component primitives and utility-based styling, making the generated components easier to compose and reuse across different parts of an application.

## Keyboard testing

### Modal
- Tab moves between focusable elements inside the dialog.
- Shift + Tab moves backward.
- Escape closes the dialog.
- Focus returns to the element that opened the dialog.

### Tabs
- Arrow Right moves to the next tab.
- Arrow Left moves to the previous tab.
- Home moves to the first tab.
- End moves to the last tab.
- Enter/Space can activate the focused tab.

### Disclosure
- Tab reaches the disclosure button.
- Enter or Space activates the button.
- `aria-expanded` reflects the open/closed state.

## Conclusion

Building the components manually helped me understand the ARIA roles, keyboard interaction, focus management, and state relationships that accessible component libraries provide.
