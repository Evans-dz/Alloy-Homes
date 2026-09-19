#!/usr/bin/env python3
"""
Regenerate the Alloy Homes favicon set from the master logo.

The tab icon is the logo's house outline with the wordmark dropped — the
lockup is far too wide to survive at 16px. Strokes are dilated per output
size (optical sizing): a hairline that looks right at 192px disappears at 16.

    python3 scripts/make-icons.py
"""
from PIL import Image, ImageDraw, ImageFilter

SRC = "public/images/logos/alloy-homes-black.png"
BASALT = (0x16, 0x13, 0x0F, 255)   # --basalt
CREAM = (0xF4, 0xEF, 0xE6, 255)    # --cream
SRC_STROKE = 6.0                   # line weight in the master file, px


def house():
    """Logo alpha, cropped to close the bottom rule, wordmark band erased."""
    a = Image.open(SRC).convert("RGBA").split()[-1].crop((0, 0, 1122, 748)).copy()
    ImageDraw.Draw(a).rectangle([26, 498, 1096, 706], fill=0)
    return a


def tile(mark, size, fill, stroke, ss=8):
    box = size * ss
    sw, sh = mark.size
    mw = int(box * fill)
    mh = max(1, int(mw * sh / sw))
    m = mark.resize((mw, mh), Image.LANCZOS)
    # MaxFilter(3) fattens a stroke by 2px a pass; close the gap to target.
    grow = max(0.0, stroke * box - SRC_STROKE * (mw / sw))
    for _ in range(int(round(grow / 2))):
        m = m.filter(ImageFilter.MaxFilter(3))
    out = Image.new("RGBA", (box, box), BASALT)
    out.paste(Image.new("RGBA", (mw, mh), CREAM), ((box - mw) // 2, (box - mh) // 2), m)
    return out.resize((size, size), Image.LANCZOS)


mark = house()
# .ico carries three hand-weighted sizes so the 16px entry stays legible.
ico = [tile(mark, n, f, s) for n, f, s in ((16, 0.86, 0.070), (32, 0.84, 0.058), (48, 0.84, 0.052))]
ico[2].save("app/favicon.ico", sizes=[(48, 48), (32, 32), (16, 16)],
            append_images=ico[:2], format="ICO")
tile(mark, 192, 0.84, 0.046).save("app/icon.png")        # rel="icon" — Google reads this
tile(mark, 180, 0.82, 0.040).save("app/apple-icon.png")  # iOS home screen
print("wrote app/favicon.ico, app/icon.png, app/apple-icon.png")
