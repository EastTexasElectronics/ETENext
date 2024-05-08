import * as React from "react"
import { SVGProps, Ref, forwardRef, memo } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SvgComponent = (
  {
    title,
    titleId,
    desc,
    descId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <g className="color000000 svgShape" transform="translate(0 -1020.362)">
      <circle
        cx={16}
        cy={1036.362}
        r={16}
        fill="#2353db"
        fillRule="evenodd"
        className="color239fdb svgShape"
      />
      <path
        fill="#1d45b5"
        d="M22.197 30.734a16 16 0 0 0 1.06-.474 16 16 0 0 0 1.388-.797 16 16 0 0 0 1.3-.93 16 16 0 0 0 1.201-1.054 16 16 0 0 0 1.092-1.172 16 16 0 0 0 .967-1.272 16 16 0 0 0 .836-1.365 16 16 0 0 0 .695-1.44 16 16 0 0 0 .276-.75l-9.237-9.236-.002-.002c-.132-.13-.363-.231-.787-.242H11c-.417 0-.64.096-.771.229-.133.132-.229.355-.229.771v5c0 .208.025.366.064.488a.67.67 0 0 0 .157.27l.004.004 11.972 11.972z"
        className="color0b5ecd svgShape"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        style={{
          lineHeight: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textTransform: "none",
          blockProgression: "tb",
        }}
        transform="translate(0 1020.362)"
      />
      <path
        fill="#fff"
        d="M3 3h9.986c.424.011.655.112.787.242.133.13.227.341.227.758v5c0 .417-.094.634-.225.762-.13.128-.356.222-.775.222a.5.5 0 0 0-.012 0l-1.498.032a.52.52 0 0 0-.488.5l-.006 2.66-2.621-2.989a.507.507 0 0 0-.375-.17H4.754L3.01 9.985a.5.5 0 0 0-.01 0c-.42 0-.645-.095-.775-.222C2.095 9.634 2 9.417 2 9V4c0-.416.096-.64.229-.771C2.36 3.096 2.583 3 3 3Z"
        className="colorffffff svgShape"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textTransform: "none",
          blockProgression: "tb",
        }}
        transform="translate(8 1029.362)"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo
