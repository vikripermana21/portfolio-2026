/**
 * @label Resolution
 * @resolution
 */
uniform vec2 u_resolution;

/**
 * @label Time
 * @time
 */
uniform float u_time;

/**
 * @label Accent
 * @color
 * @default #2B59E0
 */
uniform vec3 u_accent;

/**
 * @label Base
 * @color
 * @default #0A0A0A
 */
uniform vec3 u_base;

/**
 * @label Highlight
 * @color
 * @default #FFFFFF
 */
uniform vec3 u_hilite;

/**
 * @label Scale
 * @default 2.4
 * @range 0.5, 6
 */
uniform float u_scale;

/**
 * @label Speed
 * @default 0.28
 * @range 0, 1.5
 */
uniform float u_speed;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    v += amp * noise(p);
    p = p * 2.02 + vec2(1.7, 9.2);
    amp *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv;
  p.x *= u_resolution.x / max(u_resolution.y, 1.0);

  float t = u_time * u_speed;

  vec2 q = vec2(
    fbm(p * u_scale + t),
    fbm(p * u_scale + vec2(5.2, 1.3) - t)
  );
  vec2 r = vec2(
    fbm(p * u_scale + q * 1.8 + vec2(1.7, 9.2) + t * 0.5),
    fbm(p * u_scale + q * 1.8 + vec2(8.3, 2.8) - t * 0.4)
  );
  float f = fbm(p * u_scale + r * 2.0);

  vec3 col = mix(u_base, u_accent, smoothstep(0.18, 0.86, f));
  col = mix(col, u_hilite, pow(smoothstep(0.58, 1.0, f), 2.0) * 0.5);

  float band = smoothstep(0.0, 1.0, 1.0 - abs(f - 0.62) * 3.0);
  col += u_accent * band * 0.22;

  float grad = mix(0.75, 1.0, smoothstep(0.0, 1.0, uv.y));
  col *= grad;

  vec2 v = uv - 0.5;
  v.x *= 1.15;
  float vig = smoothstep(1.05, 0.15, length(v));
  col *= mix(0.5, 1.0, vig);

  gl_FragColor = vec4(col, 1.0);
}
