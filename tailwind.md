# Tailwind CSS Classes Cheat Sheet (v4)

> Tailwind has thousands of possible utility classes, including generated classes based on your theme and arbitrary values. This guide covers the major class families and commonly used utilities—not literally every generated class. For the complete, searchable reference, see the [official Tailwind CSS documentation](https://tailwindcss.com/docs).

## 1. How Tailwind classes work

Use utility classes in HTML or React JSX:

```jsx
<button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
  Click me
</button>
```

- **Utility-first:** compose small classes instead of writing custom CSS rules.
- **Responsive variants:** `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- **State variants:** `hover:`, `focus:`, `active:`, `disabled:`, `visited:`.
- **Dark mode:** commonly `dark:`.
- **Arbitrary values:** `w-[350px]`, `bg-[#123456]`, `grid-cols-[1fr_2fr]`.
- **Important:** Tailwind v4 uses `@import "tailwindcss";` in CSS. Tailwind v3 uses the older `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` directives.

## 2. Layout

### Display

`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`.

### Position

`static`, `fixed`, `absolute`, `relative`, `sticky`.

### Inset / placement

`inset-0`, `inset-x-0`, `inset-y-0`, `top-0`, `right-0`, `bottom-0`, `left-0`, `start-0`, `end-0`, `top-1/2`, `left-1/2`, `inset-x-auto`, `inset-y-auto`.
Use scale values such as `top-4`, negative values such as `-top-2`, or arbitrary values such as `top-[18px]`.

### Z-index

`z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`, `-z-10`, `z-[100]`.

### Overflow

`overflow-auto`, `overflow-hidden`, `overflow-clip`, `overflow-visible`, `overflow-scroll`, `overflow-x-auto`, `overflow-y-auto`, `overflow-x-hidden`, `overflow-y-hidden`.

### Visibility

`visible`, `invisible`, `collapse`.

### Float / clear

`float-start`, `float-end`, `float-right`, `float-left`, `float-none`, `clear-start`, `clear-end`, `clear-left`, `clear-right`, `clear-both`, `clear-none`.

## 3. Flexbox

`flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse`, `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`, `flex-1`, `flex-auto`, `flex-initial`, `flex-none`, `grow`, `grow-0`, `shrink`, `shrink-0`.

### Alignment

- Main axis: `justify-normal`, `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`, `justify-stretch`.
- Cross axis: `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`.
- Self alignment: `self-auto`, `self-start`, `self-end`, `self-center`, `self-stretch`, `self-baseline`.
- Content alignment: `content-normal`, `content-center`, `content-start`, `content-end`, `content-between`, `content-around`, `content-evenly`, `content-baseline`, `content-stretch`.
- Place: `place-content-center`, `place-items-center`, `place-self-center`.

## 4. Grid

`grid-cols-1` through `grid-cols-12`, `grid-cols-none`, `grid-cols-subgrid`, `grid-rows-1` through `grid-rows-6`, `grid-rows-none`, `grid-flow-row`, `grid-flow-col`, `grid-flow-dense`, `grid-flow-row-dense`, `grid-flow-col-dense`.

### Spanning and placement

`col-auto`, `col-span-1` through `col-span-12`, `col-span-full`, `col-start-1`, `col-end-1`, `row-auto`, `row-span-1` through `row-span-6`, `row-span-full`, `row-start-1`, `row-end-1`.

### Gaps

`gap-0`, `gap-px`, `gap-0.5`, `gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-8`, `gap-10`, `gap-12`, `gap-x-4`, `gap-y-4`. Theme values and arbitrary values are also supported.

## 5. Sizing

### Width

`w-0`, `w-px`, `w-0.5`, `w-1`, `w-2`, `w-3`, `w-4`, `w-5`, `w-6`, `w-8`, `w-10`, `w-12`, `w-16`, `w-20`, `w-24`, `w-32`, `w-40`, `w-48`, `w-56`, `w-64`, `w-auto`, `w-full`, `w-screen`, `w-svw`, `w-lvw`, `w-dvw`, `w-min`, `w-max`, `w-fit`, `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, `w-3/4`.
Use the same general patterns for `min-w-*` and `max-w-*`.

### Height

`h-0`, `h-px`, `h-1`, `h-2`, `h-4`, `h-8`, `h-10`, `h-12`, `h-16`, `h-20`, `h-24`, `h-32`, `h-40`, `h-48`, `h-64`, `h-auto`, `h-full`, `h-screen`, `h-svh`, `h-lvh`, `h-dvh`, `h-min`, `h-max`, `h-fit`.
Use the same general patterns for `min-h-*` and `max-h-*`.

### Aspect ratio

`aspect-auto`, `aspect-square`, `aspect-video`, `aspect-[4/3]`.

## 6. Spacing

Tailwind spacing utilities use theme spacing values (commonly 1 unit = 0.25rem / 4px in the default scale).

### Padding

`p-0`, `p-px`, `p-0.5`, `p-1`, `p-2`, `p-3`, `p-4`, `p-5`, `p-6`, `p-8`, `p-10`, `p-12`, `p-16`, `p-20`, `p-24`, `p-32`, `px-4`, `py-4`, `pt-4`, `pr-4`, `pb-4`, `pl-4`, `ps-4`, `pe-4`.

### Margin

`m-0`, `m-px`, `m-0.5`, `m-1`, `m-2`, `m-3`, `m-4`, `m-5`, `m-6`, `m-8`, `m-10`, `m-12`, `m-auto`, `mx-auto`, `my-auto`, `mx-4`, `my-4`, `mt-4`, `mr-4`, `mb-4`, `ml-4`, `ms-4`, `me-4`.
Negative margins such as `-mt-4` are supported.

### Space between children

`space-x-2`, `space-y-4`, `space-x-reverse`, `space-y-reverse`.

## 7. Typography

### Font size

`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, `text-8xl`, `text-9xl`.

### Font weight

`font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`.

### Text alignment

`text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end`.

### Text color

`text-inherit`, `text-current`, `text-transparent`, `text-black`, `text-white`, `text-gray-500`, `text-red-500`, `text-blue-600`, `text-green-600`, `text-orange-500`. Color shades commonly range from `50` to `950`; available palettes depend on Tailwind version/theme.

### Line height / letter spacing

`leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`, `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`.

### Other typography

`italic`, `not-italic`, `uppercase`, `lowercase`, `capitalize`, `normal-case`, `underline`, `overline`, `line-through`, `no-underline`, `truncate`, `text-ellipsis`, `text-clip`, `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-line`, `break-normal`, `break-words`, `break-all`, `hyphens-auto`, `antialiased`, `subpixel-antialiased`, `align-baseline`, `align-middle`, `align-top`.

## 8. Backgrounds

### Background color

`bg-transparent`, `bg-current`, `bg-black`, `bg-white`, `bg-gray-50`, `bg-gray-100`, `bg-gray-200`, `bg-red-500`, `bg-blue-600`, `bg-green-500`, `bg-orange-500`. Palettes typically offer shades `50`–`950`.

### Background image / gradients

`bg-none`, `bg-gradient-to-r`, `bg-gradient-to-l`, `bg-gradient-to-t`, `bg-gradient-to-b`, `bg-gradient-to-br`, `bg-linear-to-r`, `bg-linear-to-br`, `from-orange-500`, `via-pink-500`, `to-purple-600`.

### Image sizing and position

`bg-cover`, `bg-contain`, `bg-auto`, `bg-center`, `bg-top`, `bg-bottom`, `bg-left`, `bg-right`, `bg-no-repeat`, `bg-repeat`, `bg-repeat-x`, `bg-repeat-y`.

## 9. Borders, rings, and outlines

### Border

`border`, `border-0`, `border-2`, `border-4`, `border-8`, `border-t`, `border-r`, `border-b`, `border-l`, `border-dashed`, `border-dotted`, `border-double`, `border-hidden`, `border-solid`.

### Border color

`border-transparent`, `border-white`, `border-gray-200`, `border-red-500`, `border-blue-500`, `border-orange-500`.

### Border radius

`rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`, `rounded-t-lg`, `rounded-b-lg`, `rounded-l-lg`, `rounded-r-lg`.

### Ring / outline

`ring`, `ring-0`, `ring-1`, `ring-2`, `ring-4`, `ring-inset`, `ring-offset-2`, `outline-none`, `outline`, `outline-2`, `outline-dashed`, `outline-offset-2`.

## 10. Effects

### Shadows

`shadow-2xs`, `shadow-xs`, `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`.

### Opacity

`opacity-0`, `opacity-5`, `opacity-10`, `opacity-20`, `opacity-25`, `opacity-30`, `opacity-40`, `opacity-50`, `opacity-60`, `opacity-70`, `opacity-75`, `opacity-80`, `opacity-90`, `opacity-95`, `opacity-100`.

### Filters

`blur-none`, `blur-sm`, `blur`, `blur-md`, `blur-lg`, `blur-xl`, `brightness-100`, `brightness-125`, `contrast-100`, `grayscale`, `invert`, `sepia`, `saturate-150`, `backdrop-blur`, `backdrop-blur-md`.

## 11. Transforms and transitions

### Transform

`scale-50`, `scale-75`, `scale-90`, `scale-95`, `scale-100`, `scale-105`, `scale-110`, `rotate-0`, `rotate-45`, `rotate-90`, `-rotate-45`, `translate-x-1`, `translate-y-1`, `-translate-y-1`, `translate-x-1/2`, `-translate-x-1/2`, `origin-center`, `origin-top`, `origin-bottom`.

### Transition

`transition`, `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`, `duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, `duration-500`, `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`, `delay-150`, `delay-300`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`, `animate-none`.

## 12. Responsive design

Prefixes apply a utility at a breakpoint and above (default breakpoints can be customized):

- `sm:` — small screens (commonly 640px and up)
- `md:` — medium screens (commonly 768px and up)
- `lg:` — large screens (commonly 1024px and up)
- `xl:` — extra-large screens (commonly 1280px and up)
- `2xl:` — very large screens (commonly 1536px and up)

Examples:

```jsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  ...
</div>

<h1 className="text-2xl md:text-4xl">Responsive heading</h1>
```

## 13. State and interaction variants

Common variants include:

- `hover:bg-blue-700`
- `focus:outline-none`
- `focus:ring-2`
- `focus-visible:ring-2`
- `active:scale-95`
- `disabled:opacity-50`
- `visited:text-purple-600`
- `checked:bg-blue-600`
- `invalid:border-red-500`
- `required:border-red-500`
- `first:rounded-t-lg`
- `last:rounded-b-lg`
- `odd:bg-gray-50`
- `even:bg-white`
- `group-hover:opacity-100`
- `peer-checked:block`
- `focus-within:border-orange-500`
- `dark:bg-gray-900`
- `motion-reduce:transition-none`
- `print:hidden`

## 14. Lists and tables

### Lists

`list-none`, `list-disc`, `list-decimal`, `list-inside`, `list-outside`.

### Table layout

`table-auto`, `table-fixed`, `border-collapse`, `border-separate`, `border-spacing-2`, `caption-top`, `caption-bottom`.

## 15. Object and image utilities

`object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down`, `object-center`, `object-top`, `object-bottom`, `object-left`, `object-right`.

## 16. Interactivity and accessibility

### Cursor

`cursor-auto`, `cursor-default`, `cursor-pointer`, `cursor-wait`, `cursor-text`, `cursor-move`, `cursor-not-allowed`, `cursor-grab`, `cursor-grabbing`.

### Selection and pointer events

`select-none`, `select-text`, `select-all`, `select-auto`, `pointer-events-none`, `pointer-events-auto`.

### Resize

`resize`, `resize-none`, `resize-x`, `resize-y`.

### Scroll behavior

`scroll-auto`, `scroll-smooth`, `scroll-mt-4`, `scroll-mt-24`, `scroll-p-4`, `snap-start`, `snap-center`, `snap-end`, `snap-x`, `snap-y`, `snap-mandatory`, `snap-proximity`.

## 17. Common form utilities

`appearance-none`, `accent-blue-600`, `caret-blue-600`, `placeholder-gray-400`, `file:mr-4`, `file:rounded-lg`, `file:border-0`, `file:bg-blue-600`, `file:px-4`, `file:py-2`, `file:text-white`.

Example:

```jsx
<input
  className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100"
  placeholder="Search restaurants..."
/>
```

## 18. Arbitrary values and important modifiers

Tailwind supports values outside the default theme:

- `w-[350px]`
- `h-[180px]`
- `top-[18px]`
- `grid-cols-[200px_1fr]`
- `text-[#123456]`
- `bg-[url('/images/hero.jpg')]`
- `shadow-[0_4px_12px_rgba(0,0,0,0.1)]`

Use sparingly; theme utilities are usually easier to maintain. Tailwind v4 supports an important modifier such as `bg-red-500!`; older versions commonly use `!bg-red-500`.

## 19. CSS properties with common Tailwind utilities

| CSS property                     | Tailwind example  |
| -------------------------------- | ----------------- |
| `display: flex`                  | `flex`            |
| `justify-content: space-between` | `justify-between` |
| `align-items: center`            | `items-center`    |
| `padding: 16px`                  | `p-4`             |
| `margin: 16px`                   | `m-4`             |
| `width: 100%`                    | `w-full`          |
| `max-width: 1280px`              | `max-w-7xl`       |
| `font-size: 24px`                | `text-2xl`        |
| `font-weight: 700`               | `font-bold`       |
| `text-align: center`             | `text-center`     |
| `border-radius: 8px`             | `rounded-lg`      |
| `box-shadow`                     | `shadow-md`       |
| `position: sticky`               | `sticky`          |
| `overflow: hidden`               | `overflow-hidden` |
| `cursor: pointer`                | `cursor-pointer`  |

## 20. Useful combinations

### Center an element

```html
<div class="flex min-h-screen items-center justify-center">...</div>
```

### Responsive card grid

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">...</div>
```

### Card with hover effect

```html
<div
  class="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
>
  ...
</div>
```

### Primary button

```html
<button
  class="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2"
>
  Submit
</button>
```

### Centered page container

```html
<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">...</main>
```

## 21. Official reference

- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Responsive design](https://tailwindcss.com/docs/responsive-design)
- [Hover, focus, and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Colors](https://tailwindcss.com/docs/colors)
- [Spacing](https://tailwindcss.com/docs/padding)

**Remember:** this is a practical cheat sheet of the main utility families and common classes. The exact set of available classes depends on your Tailwind version, theme configuration, and plugins.
