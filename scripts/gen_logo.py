#!/usr/bin/env python3
"""Generate the 10 Newtons dotted-sphere mark as an SVG (phyllotaxis spiral)."""
import math

# --- base palette: left dark-navy -> teal -> green (no yellow here) ---
# stops are (x_fraction, rgb) sampled left->right of the mark
BASE_STOPS = [
    (0.00, (0x0c, 0x2b, 0x35)),  # deep navy (far left)
    (0.22, (0x15, 0x4a, 0x4f)),  # dark teal
    (0.45, (0x1f, 0x83, 0x68)),  # teal-green
    (0.68, (0x3f, 0xa3, 0x6e)),  # green
    (1.00, (0x46, 0x9f, 0x6f)),  # medium green (far right)
]
# variant for dark backgrounds: lift the deep navy to a visible slate-teal
BASE_STOPS_LIGHT = [
    (0.00, (0x35, 0x6b, 0x72)),  # slate-teal (far left, visible on dark)
    (0.22, (0x2c, 0x6f, 0x6b)),
    (0.45, (0x2a, 0x90, 0x72)),
    (0.68, (0x46, 0xab, 0x73)),
    (1.00, (0x50, 0xa6, 0x74)),
]
# warm highlight that glows from the centre, slightly right & up
LIME = (0xc6, 0xd6, 0x4f)
YELLOW = (0xe3, 0xc8, 0x3c)


def lerp(a, b, t):
    return a + (b - a) * t


def lerp_rgb(c0, c1, t):
    return tuple(lerp(c0[i], c1[i], t) for i in range(3))


def base_color(xf, stops):
    xf = max(0.0, min(1.0, xf))
    for i in range(len(stops) - 1):
        x0, c0 = stops[i]
        x1, c1 = stops[i + 1]
        if x0 <= xf <= x1:
            t = (xf - x0) / (x1 - x0) if x1 > x0 else 0
            return lerp_rgb(c0, c1, t)
    return stops[-1][1]


def smoothstep(e0, e1, x):
    t = max(0.0, min(1.0, (x - e0) / (e1 - e0)))
    return t * t * (3 - 2 * t)


def dot_color(xf, dist_norm, stops):
    """Base green-gradient by x, lifted toward lime/yellow near the bright core."""
    base = base_color(xf, stops)
    # highlight strongest at the core (dist_norm 0), gone by ~0.62 of radius
    h = smoothstep(0.62, 0.04, dist_norm)
    # inner part of the glow tips into yellow, outer into lime
    warm = lerp_rgb(LIME, YELLOW, smoothstep(0.45, 0.0, dist_norm))
    r, g, b = lerp_rgb(base, warm, h)
    return f"#{round(r):02x}{round(g):02x}{round(b):02x}"


def main():
    SIZE = 200
    cx = cy = SIZE / 2
    R = 92  # outer radius of the sphere
    N = 150  # number of dots
    GOLDEN = math.pi * (3 - math.sqrt(5))  # ~137.5 deg

    # bright core sits slightly right of and above centre
    bx, by = cx + R * 0.16, cy - R * 0.06

    # geometry is identical across variants; only the palette differs
    geo = []
    for n in range(N):
        frac = (n + 0.5) / N
        r = R * math.sqrt(frac)
        theta = n * GOLDEN
        x = cx + r * math.cos(theta)
        y = cy + r * math.sin(theta)
        dr = 3.0 + 3.6 * math.sqrt(frac)
        xf = (x - (cx - R)) / (2 * R)
        dist_norm = math.hypot(x - bx, y - by) / R
        geo.append((x, y, dr, xf, dist_norm))

    def render(stops, out):
        dots = [(x, y, dr, dot_color(xf, dn, stops)) for (x, y, dr, xf, dn) in geo]
        dots.sort(key=lambda d: -d[2])  # large dots first, bright inner on top
        parts = [
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}" '
            f'role="img" aria-label="10 Newtons">'
        ]
        for x, y, dr, c in dots:
            parts.append(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{dr:.2f}" fill="{c}"/>')
        parts.append("</svg>")
        with open(out, "w") as f:
            f.write("".join(parts))
        print("wrote", out, "with", len(dots), "dots")

    render(BASE_STOPS, "public/logo-mark.svg")
    render(BASE_STOPS_LIGHT, "public/logo-mark-light.svg")


if __name__ == "__main__":
    main()
