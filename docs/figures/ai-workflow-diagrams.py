#!/usr/bin/env python3
"""FigJam-style diagrams for the conversion-test case study (#/work/ai-workflow).

Writes four self-contained SVGs to images/ai-workflow/: the old test cycle
and the new pipeline, each in a wide (desktop) and a narrow (phone) layout.
Instrument Sans and Caveat are subset from /fonts and embedded, because an
SVG loaded through <img> can't reach the page's own @font-face rules.

Run from the repo root:  python3 docs/figures/ai-workflow-diagrams.py
Needs fontTools (pip install fonttools brotli).
"""
import base64, io, os
from xml.sax.saxutils import escape
from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "images", "ai-workflow")

# FigJam sticky palette, plus a darker dot per owner for chips and cursors.
OWNERS = {
    "cm":  {"name": "Conversion manager", "fill": "#C2E5FF", "dot": "#0D99FF"},
    "des": {"name": "Designer",           "fill": "#DCCCFF", "dot": "#9747FF"},
    "dev": {"name": "Developer",          "fill": "#FFC9A3", "dot": "#FF7A1A"},
}
INK, INK_2, MARKER = "#1E1E1E", "#4A4A4A", "#3A3A3A"


class Board:
    def __init__(self, w, h):
        self.w, self.h = w, h
        self.parts = []
        self.chars = {"sans": set(), "hand": set()}

    def add(self, s):
        self.parts.append(s)

    def text(self, x, y, s, size, font="sans", weight=400, fill=INK, anchor="start", rotate=None):
        self.chars[font].update(s)
        fam = "IS" if font == "sans" else "CV"
        rot = f' transform="rotate({rotate} {x} {y})"' if rotate else ""
        self.add(f'<text x="{x}" y="{y}" font-family="{fam}" font-size="{size}" font-weight="{weight}" '
                 f'fill="{fill}" text-anchor="{anchor}"{rot}>{escape(s)}</text>')

    def section(self, x, y, w, h, label):
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="#FFFFFF" stroke="#E3E3E3" stroke-width="1.5"/>')
        pw = 18 + len(label) * 8.6
        self.add(f'<rect x="{x}" y="{y - 38}" width="{pw}" height="28" rx="6" fill="#1E1E1E"/>')
        self.text(x + 10, y - 19, label, 15, weight=600, fill="#FFFFFF")

    def sticky(self, x, y, w, h, owner, title, body, tilt=0, ghost=False):
        o = OWNERS[owner]
        tr = f' transform="rotate({tilt} {x + w / 2} {y + h / 2})"' if tilt else ""
        self.add(f'<g{tr}>')
        self.add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="4" fill="{o["fill"]}" filter="url(#shadow)"/>')
        if not ghost:
            self.text(x + 18, y + 36, title, 21, weight=600)
            for i, line in enumerate(body):
                self.text(x + 18, y + 64 + i * 21, line, 15, fill=INK_2)
            self.chip(x + 18, y + h - 22, owner)
        self.add('</g>')

    def chip(self, x, y, owner, size=13):
        o = OWNERS[owner]
        self.add(f'<circle cx="{x + 6}" cy="{y - 4}" r="6" fill="{o["dot"]}"/>')
        self.text(x + 18, y + 1, o["name"], size, weight=500, fill=INK)

    def diamond(self, cx, cy, r, owner, lines):
        o = OWNERS[owner]
        self.add(f'<path d="M{cx} {cy - r} L{cx + r} {cy} L{cx} {cy + r} L{cx - r} {cy} Z" '
                 f'fill="{o["fill"]}" stroke="{o["dot"]}" stroke-width="2" stroke-linejoin="round" filter="url(#shadow)"/>')
        for i, (s, size, weight) in enumerate(lines):
            self.text(cx, cy - 26 + i * 27, s, size, weight=weight, anchor="middle")

    def arrow(self, d, dashed=False):
        dash = ' stroke-dasharray="7 6"' if dashed else ""
        self.add(f'<path d="{d}" fill="none" stroke="{INK}" stroke-width="2.25" stroke-linecap="round" '
                 f'stroke-linejoin="round" marker-end="url(#head)"{dash}/>')

    def pill(self, cx, cy, s, rotate=None):
        w = 22 + len(s) * 7.4
        rot = f' transform="rotate({rotate} {cx} {cy})"' if rotate else ""
        self.add(f'<g{rot}><rect x="{cx - w / 2}" y="{cy - 14}" width="{w}" height="28" rx="14" '
                 f'fill="#FFFFFF" stroke="#D0D0D0" stroke-width="1.5"/>')
        self.text(cx, cy + 5, s, 14, weight=500, anchor="middle")
        self.add('</g>')

    def scribble(self, d, width=3):
        self.add(f'<path d="{d}" fill="none" stroke="{MARKER}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"/>')

    def note(self, x, y, lines, size=28, anchor="middle", rotate=-2):
        for i, s in enumerate(lines):
            self.text(x, y + i * size * 1.0, s, size, font="hand", weight=600, fill=MARKER, anchor=anchor, rotate=rotate)

    def cursor(self, x, y, owner, label):
        o = OWNERS[owner]
        self.add(f'<path d="M{x} {y} l0 22 l6 -5.5 l4.5 9.5 l4 -1.8 l-4.4 -9.4 l8 -0.6 Z" '
                 f'fill="{o["dot"]}" stroke="#FFFFFF" stroke-width="1.5" stroke-linejoin="round"/>')
        w = 18 + len(label) * 7.6
        self.add(f'<rect x="{x + 16}" y="{y + 26}" width="{w}" height="24" rx="5" fill="{o["dot"]}"/>')
        self.text(x + 25, y + 43, label, 13, weight=600, fill="#FFFFFF")

    def legend(self, x, y, owners):
        for k in owners:
            self.chip(x, y, k, size=14)
            x += 40 + len(OWNERS[k]["name"]) * 7.8

    def render(self, title, desc):
        fonts = []
        for fam, file, key in (("IS", "instrument-sans-latin-wght-normal.woff2", "sans"),
                               ("CV", "caveat-latin-wght-normal.woff2", "hand")):
            if self.chars[key]:
                fonts.append(f'@font-face{{font-family:"{fam}";font-weight:100 900;'
                             f'src:url(data:font/woff2;base64,{subset_font(file, self.chars[key])}) format("woff2");}}')
        head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" width="{self.w}" height="{self.h}" '
                f'role="img" aria-labelledby="t d"><title id="t">{escape(title)}</title><desc id="d">{escape(desc)}</desc>'
                f'<defs><style>{"".join(fonts)}</style>'
                '<pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="1.3" fill="#D6D6D6"/></pattern>'
                '<filter id="shadow" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.14"/></filter>'
                f'<marker id="head" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="11" markerHeight="11" orient="auto-start-reverse">'
                f'<path d="M2 1.5 L10.5 6 L2 10.5" fill="none" stroke="{INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>'
                f'</defs><rect width="{self.w}" height="{self.h}" fill="#F5F5F5"/><rect width="{self.w}" height="{self.h}" fill="url(#dots)"/>')
        return head + "".join(self.parts) + "</svg>\n"


def subset_font(file, chars):
    font = TTFont(os.path.join(ROOT, "fonts", file))
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["kern", "liga", "calt"]
    sub = subset.Subsetter(opts)
    sub.populate(text="".join(sorted(chars)) + " ")
    sub.subset(font)
    buf = io.BytesIO()
    font.flavor = "woff2"
    font.save(buf)
    return base64.b64encode(buf.getvalue()).decode()


BEFORE_TITLE = "The old conversion-test cycle"
BEFORE_DESC = ("Four steps in a loop: a conversion manager has an idea, a designer mocks it up, a developer builds it "
               "once a sprint has room, the conversion manager runs the live test, and the learnings feed the next idea. "
               "The developer step is circled as the bottleneck. Idea to live test took up to two weeks.")
AFTER_TITLE = "The new conversion-test pipeline"
AFTER_DESC = ("Five stages: the conversion manager has an idea and builds the variant in a Figma Make template, a designer "
              "QA gate checks for at least 80% brand compliance and sends weaker variants back to the template, the "
              "conversion manager runs the live test, and the designer refines winners to 100% before rollout. Every "
              "result feeds the next idea. Idea to live test takes two days at most, with no developer in the loop.")

STEPS_BEFORE = [
    ("cm",  "Idea",      ["A hypothesis worth", "testing"]),
    ("des", "Mockup",    ["Designer turns it", "into a screen"]),
    ("dev", "Build",     ["Waits for the next", "sprint with room"]),
    ("cm",  "Live test", ["Variant runs in", "Kameleoon"]),
]


def before_wide():
    b = Board(1200, 720)
    b.section(40, 70, 1120, 610, "Conversion test · before")
    xs, y, w, h = [100, 370, 640, 910], 260, 200, 170
    # Tests queuing behind the build step.
    b.sticky(xs[2] + 22, y - 20, w, h, "dev", "", [], tilt=4, ghost=True)
    b.sticky(xs[2] + 11, y - 10, w, h, "dev", "", [], tilt=2, ghost=True)
    for x, (owner, title, body) in zip(xs, STEPS_BEFORE):
        b.sticky(x, y, w, h, owner, title, body)
    for a, c in zip(xs, xs[1:]):
        b.arrow(f"M{a + w + 8} {y + h / 2} H{c - 10}")
    b.arrow(f"M{xs[3] + w / 2} {y + h + 8} V590 H{xs[0] + w / 2} V{y + h + 12}", dashed=True)
    b.pill(620, 590, "learnings feed the next idea")
    # Bottleneck circle and the two-week brace.
    b.scribble(f"M{xs[2] - 30} {y + 70} C{xs[2] - 40} {y - 70}, {xs[2] + w + 70} {y - 75}, {xs[2] + w + 38} {y + 80} "
               f"C{xs[2] + w + 20} {y + h + 70}, {xs[2] - 50} {y + h + 60}, {xs[2] - 22} {y + 40}")
    b.note(xs[2] + w / 2, 520, ["the queue sets the pace"], size=30)
    b.scribble(f"M{xs[0]} 205 Q{xs[0]} 185 {xs[0] + 20} 185 H595 Q610 185 620 165 Q630 185 645 185 H{xs[3] + w - 20} Q{xs[3] + w} 185 {xs[3] + w} 205", width=2.5)
    b.note(620, 150, ["up to 2 weeks, idea to live test"], size=32, rotate=-1)
    b.cursor(1060, 612, "des", "Lisanne")
    b.legend(80, 650, ["cm", "des", "dev"])
    return b.render(BEFORE_TITLE, BEFORE_DESC)


def before_narrow():
    b = Board(680, 1120)
    b.section(24, 70, 632, 1020, "Conversion test · before")
    x, w, h, ys = 150, 290, 140, [130, 340, 550, 760]
    b.sticky(x + 22, ys[2] - 18, w, h, "dev", "", [], tilt=3, ghost=True)
    b.sticky(x + 11, ys[2] - 9, w, h, "dev", "", [], tilt=1.5, ghost=True)
    for y, (owner, title, body) in zip(ys, STEPS_BEFORE):
        b.sticky(x, y, w, h, owner, title, body)
    for a, c in zip(ys, ys[1:]):
        b.arrow(f"M{x + w / 2} {a + h + 8} V{c - 10}")
    b.arrow(f"M{x - 8} {ys[3] + h / 2} H80 V{ys[0] + h / 2} H{x - 12}", dashed=True)
    b.pill(80, (ys[0] + ys[3] + h) / 2, "learnings feed the next idea", rotate=-90)
    b.scribble(f"M{x - 25} {ys[2] + 60} C{x - 30} {ys[2] - 60}, {x + w + 60} {ys[2] - 70}, {x + w + 40} {ys[2] + 70} "
               f"C{x + w + 25} {ys[2] + h + 60}, {x - 40} {ys[2] + h + 50}, {x - 18} {ys[2] + 30}")
    b.note(560, ys[2] - 60, ["the queue", "sets the pace"], size=30, rotate=-4)
    b.note(340, 975, ["up to 2 weeks,", "idea to live test"], size=34, rotate=-2)
    b.legend(56, 1060, ["cm", "des", "dev"])
    return b.render(BEFORE_TITLE, BEFORE_DESC)


def after_wide():
    b = Board(1320, 780)
    b.section(40, 70, 1240, 670, "Conversion test · now")
    y, w, h = 290, 190, 180
    idea, tpl, live, ref = 90, 330, 820, 1060
    gx, gy, gr = 670, y + h / 2, 112
    b.sticky(idea, y, w, h, "cm", "Idea", ["A hypothesis from", "the backlog"])
    b.sticky(tpl, y, w, h, "cm", "Template", ["Variant built in a", "Figma Make template,", "exported as HTML", "+ CSS"])
    b.diamond(gx, gy, gr, "des", [("Designer QA", 18, 600), ("min. 80%", 24, 700), ("brand compliance", 14, 500)])
    b.sticky(live, y, w, h, "cm", "Live test", ["Runs in Kameleoon,", "monitored daily"])
    b.sticky(ref, y, w, h, "des", "Refinement", ["Winners polished", "to 100% before", "rollout"])
    b.arrow(f"M{idea + w + 8} {gy} H{tpl - 10}")
    b.arrow(f"M{tpl + w + 8} {gy} H{gx - gr - 10}")
    b.arrow(f"M{gx + gr + 8} {gy} H{live - 10}")
    b.arrow(f"M{live + w + 8} {gy} H{ref - 10}")
    b.text((live + w + ref) / 2, gy - 14, "winner", 13, weight=600, anchor="middle")
    b.arrow(f"M{gx} {gy - gr - 8} V220 H{tpl + w / 2} V{y - 12}")
    b.pill(548, 220, "below 80%, back to the template")
    b.arrow(f"M{live + w / 2} {y + h + 8} V655 H{idea + w / 2} V{y + h + 12}", dashed=True)
    b.pill(500, 655, "every result feeds the next idea")
    b.scribble(f"M{tpl + w / 2 - 6} 552 Q{tpl + w / 2 - 20} 515 {tpl + w / 2 - 4} {y + h + 14}", width=2.5)
    b.scribble(f"M{tpl + w / 2 - 15} {y + h + 28} L{tpl + w / 2 - 4} {y + h + 14} L{tpl + w / 2 + 9} {y + h + 26}", width=2.5)
    b.note(tpl + w / 2 + 10, 578, ["templates: 1:1 replicas of", "our live pages"], size=26, rotate=-2)
    b.note(gx + 105, 545, ["good enough", "to learn from"], size=26, rotate=-3)
    b.scribble(f"M{idea} 185 Q{idea} 165 {idea + 20} 165 H530 Q545 165 555 145 Q565 165 580 165 H{live + w - 20} Q{live + w} 165 {live + w} 185", width=2.5)
    b.note(555, 130, ["2 days max, no developer in the loop"], size=32, rotate=-1)
    b.cursor(1110, 200, "cm", "Daniel")
    b.cursor(1140, 560, "des", "Lisanne")
    b.legend(80, 712, ["cm", "des"])
    return b.render(AFTER_TITLE, AFTER_DESC)


def after_narrow():
    b = Board(680, 1500)
    b.section(24, 70, 632, 1400, "Conversion test · now")
    x, w, h = 170, 300, 150
    cx = x + w / 2
    y_idea, y_tpl, gy, y_live, y_ref = 130, 340, 690, 920, 1150
    gr = 125
    b.sticky(x, y_idea, w, h, "cm", "Idea", ["A hypothesis from the backlog"])
    b.sticky(x, y_tpl, w, h, "cm", "Template", ["Variant built in a Figma Make", "template, exported as HTML + CSS"])
    b.diamond(cx, gy, gr, "des", [("Designer QA", 19, 600), ("min. 80%", 26, 700), ("brand compliance", 15, 500)])
    b.sticky(x, y_live, w, h, "cm", "Live test", ["Runs in Kameleoon,", "monitored daily"])
    b.sticky(x, y_ref, w, h, "des", "Refinement", ["Winners polished to 100%", "before rollout"])
    b.arrow(f"M{cx} {y_idea + h + 8} V{y_tpl - 10}")
    b.arrow(f"M{cx} {y_tpl + h + 8} V{gy - gr - 10}")
    b.arrow(f"M{cx} {gy + gr + 8} V{y_live - 10}")
    b.arrow(f"M{cx} {y_live + h + 8} V{y_ref - 10}")
    b.text(cx + 14, (y_live + h + y_ref) / 2 + 5, "winner", 14, weight=600)
    b.arrow(f"M{cx + gr + 8} {gy} H590 V{y_tpl + h / 2} H{x + w + 12}")
    b.pill(590, (gy + y_tpl + h / 2) / 2, "below 80%", rotate=90)
    b.arrow(f"M{x - 8} {y_live + h / 2} H90 V{y_idea + h / 2} H{x - 12}", dashed=True)
    b.pill(90, (y_idea + y_live + h) / 2, "every result feeds the next idea", rotate=-90)
    b.note(cx, 1370, ["2 days max,", "no developer in the loop"], size=34, rotate=-2)
    b.cursor(540, 100, "cm", "Daniel")
    b.legend(60, 1440, ["cm", "des"])
    return b.render(AFTER_TITLE, AFTER_DESC)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    for name, fn in (("test-cycle-before", before_wide), ("test-cycle-before-narrow", before_narrow),
                     ("pipeline-now", after_wide), ("pipeline-now-narrow", after_narrow)):
        path = os.path.join(OUT, name + ".svg")
        with open(path, "w") as f:
            f.write(fn())
        print(f"{path}  {os.path.getsize(path) // 1024} KB")
