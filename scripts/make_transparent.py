import os
from PIL import Image

def process_sticker(input_path, output_path, threshold=245):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Flood fill transparency from the 4 outer edges
    visited = set()
    queue = []

    def is_bg(r, g, b):
        return r >= threshold and g >= threshold and b >= threshold

    # Seed edges
    for x in range(width):
        for y in [0, height - 1]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b) and (x, y) not in visited:
                visited.add((x, y))
                queue.append((x, y))

    for y in range(height):
        for x in [0, width - 1]:
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b) and (x, y) not in visited:
                visited.add((x, y))
                queue.append((x, y))

    while queue:
        cx, cy = queue.pop()
        pixels[cx, cy] = (0, 0, 0, 0)
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                r, g, b, a = pixels[nx, ny]
                if is_bg(r, g, b):
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    # Auto crop slightly to trim empty space
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")
    print(f"Successfully created: {output_path}")

if __name__ == "__main__":
    icons = [
        (
            r"C:\Users\dfajardo\.gemini\antigravity-ide\brain\f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff\icon_bombillo_sticker_1788531976482.jpg",
            r"c:\Users\dfajardo\OneDrive - COMISION NACIONAL DE ENERGIA\Escritorio\infantem\public\img\doodle-bombillo.png"
        ),
        (
            r"C:\Users\dfajardo\.gemini\antigravity-ide\brain\f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff\icon_lapiz_sticker_1788531991586.jpg",
            r"c:\Users\dfajardo\OneDrive - COMISION NACIONAL DE ENERGIA\Escritorio\infantem\public\img\doodle-lapiz.png"
        ),
        (
            r"C:\Users\dfajardo\.gemini\antigravity-ide\brain\f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff\icon_calendario_sticker_1788532007943.jpg",
            r"c:\Users\dfajardo\OneDrive - COMISION NACIONAL DE ENERGIA\Escritorio\infantem\public\img\doodle-calendario.png"
        ),
        (
            r"C:\Users\dfajardo\.gemini\antigravity-ide\brain\f3b453f7-c6a3-4f3e-a5bb-0a4c724244ff\icon_megafono_sticker_1788532025551.jpg",
            r"c:\Users\dfajardo\OneDrive - COMISION NACIONAL DE ENERGIA\Escritorio\infantem\public\img\doodle-megafono.png"
        )
    ]
    for inp, out in icons:
        process_sticker(inp, out)
