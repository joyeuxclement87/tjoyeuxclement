# Color Migration Guide

## Old to New Color Mappings

Replace the following color classes in your components:

```
Old                          New
----------------------------------------
bg-vintage-black       →    bg-background
bg-vintage-brown       →    bg-background-alt
text-vintage-cream     →    text-text
text-vintage-sage      →    text-text-muted
bg-vintage-copper      →    bg-primary
bg-vintage-gold        →    bg-accent
bg-gradient-vintage    →    bg-gradient-primary
bg-gradient-sepia      →    bg-gradient-accent
shadow-vintage         →    shadow-primary
shadow-gold            →    shadow-accent
```

## Best Practices

1. Import themeColors from utils/theme.js
2. Use the predefined color constants
3. For dark mode, no additional classes needed - it's handled automatically

## Example Usage:

```jsx
import { themeColors } from '../utils/theme';

const MyComponent = () => (
  <div className={themeColors.mainBg}>
    <h1 className={themeColors.primaryText}>Title</h1>
    <p className={themeColors.mutedText}>Content</p>
    <button className={themeColors.primaryBtn}>Click me</button>
  </div>
);
```
