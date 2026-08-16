import struct
import zlib

BG = (11, 13, 18)
CARD = (124, 140, 255)
NOTCH = BG


def rounded_rect_dist(x, y, cx, cy, hx, hy, r):
    dx = max(abs(x - cx) - (hx - r), 0)
    dy = max(abs(y - cy) - (hy - r), 0)
    return (dx * dx + dy * dy) ** 0.5 - r


def pixel(x, y, size):
    cx = cy = size / 2
    hx = hy = size * 0.26
    r = size * 0.10

    if rounded_rect_dist(x, y, cx, cy, hx, hy, r) <= 0:
        header_top = cy - hy * 0.62
        header_bottom = cy - hy * 0.30
        header_left = cx - hx * 0.62
        header_right = cx + hx * 0.62
        if header_left <= x <= header_right and header_top <= y <= header_bottom:
            return NOTCH
        return CARD

    return BG


def make_png(path, size):
    rows = []
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            row.extend(pixel(x + 0.5, y + 0.5, size))
        rows.append(bytes(row))
    raw = b"".join(rows)

    def chunk(tag, data):
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)
    idat = zlib.compress(raw, 9)

    with open(path, "wb") as f:
        f.write(sig)
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", idat))
        f.write(chunk(b"IEND", b""))


for size, name in [(180, "icon-180.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
    make_png(f"public/icons/{name}", size)
    print(f"wrote public/icons/{name} ({size}x{size})")
