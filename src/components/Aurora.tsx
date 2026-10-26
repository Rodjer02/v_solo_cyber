import type { CSSProperties } from "react";

export type Blob = {
  size: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color: string;
  delay?: string;
};

/** Размытые цветные пятна с медленным hue-rotate — фон секций. */
export function Aurora({ blobs, style }: { blobs: Blob[]; style?: CSSProperties }) {
  return (
    <div className="aurora" style={style} aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="blob"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            right: b.right,
            top: b.top,
            bottom: b.bottom,
            background: b.color,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
