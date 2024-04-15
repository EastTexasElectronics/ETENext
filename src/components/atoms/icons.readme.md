# `Icons.tsx` Documentation

## Overview

The `Icons.tsx` module centralizes the management of icons within your application, enabling dynamic imports and immediate access to a variety of icons from the Tabler icons library and custom SVG assets. This approach optimizes performance by only loading icons when they are needed.

### Structure

The module uses the `dynamic` function from Next.js to dynamically import icons based on usage, avoiding the need to include all icons in the main bundle. It supports both dynamically imported icons from the `@tabler/icons-react` package and static SVG imports.

### Types

- **`IconType`**: A type that maps a string key to either a dynamically loaded Tabler icon component or a string representing a path to a static SVG file.

### Icon Categories

1. **Dynamic Icons**: Icons loaded on demand using dynamic imports, which helps in reducing the initial load time of the application.
2. **Static Icons**: Direct imports of SVG files used for icons that are expected to be used frequently and can benefit from being loaded directly with the bundle.

### Using Icons in Your Application

To use an icon from this module:

1. **Import the `dynamicIcons` object** from `Icons.tsx`.
2. **Access the icon** using the key that corresponds to the icon name, such as `dynamicIcons.twitter` or `dynamicIcons.microsoftColor`.

#### Example Usage

Here's how you might use the `twitter` and `microsoftColor` icons in a React component:

```jsx
import React from 'react';
import dynamicIcons from './Icons';

const SocialIcons = () => {
  return (
    <div>
      <dynamicIcons.twitter style={{ color: 'blue', fontSize: '24px' }} />
      <img src={dynamicIcons.microsoftColor} alt="Microsoft" style={{ width: '24px', height: '24px' }} />
    </div>
  );
};

export default SocialIcons;
```

### Notes

- **Performance**: Remember that using too many dynamically loaded icons can lead to excessive network requests if not managed properly. Consider preloading certain frequently used icons if necessary.
- **Customization**: The icons imported dynamically from Tabler can be customized with standard SVG properties, such as `color` and `size`.

### Conclusion

`Icons.tsx` offers a flexible and efficient method to manage and utilize icons throughout this application, leveraging dynamic imports to improve overall performance and user experience.
