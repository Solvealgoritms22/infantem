#!/bin/bash
# Genera ilustraciones del website Infantem con estilo consistente
# Estilo base: ilustración infantil plana, paleta de la marca, fondo crema

STYLE="flat children's book illustration, soft rounded organic shapes, subtle paper grain texture, warm cream background color FFF6E9, limited palette of coral pink tangerine orange lime green sky blue and sunny yellow, playful cheerful mood, professional children's book art, no text, no words, no letters"

mkdir -p /home/z/my-project/public/img
cd /home/z/my-project/public/img

# Grupo 1 (paralelo)
z-ai image -p "joyful Dominican preschool children of different skin tones playing in a sunny kindergarten yard, one girl blowing soap bubbles, one boy running with a paper kite, one small child jumping with joy, young teacher kneeling and smiling warmly, ${STYLE}" -o "./hero-play.png" -s 1024x1024 &
z-ai image -p "cozy infant nursery room, sweet toddler stacking soft colorful blocks on a round rug while a caring teacher sits beside, soft shelves with plush toys, gentle sunlight through window, ${STYLE}" -o "./prog-maternal.png" -s 1024x1024 &
z-ai image -p "preschool children sitting in a circle on a colorful round rug, cheerful teacher pointing at a wall calendar with shapes and numbers, kids raising hands excited, classroom with low shelves and plants, ${STYLE}" -o "./prog-inicial.png" -s 1024x1024 &
z-ai image -p "first grade children proudly writing in notebooks at small wooden desks, one girl showing her notebook with a star sticker, friendly teacher helping a boy, bright happy classroom, ${STYLE}" -o "./prog-primaria.png" -s 1024x1024 &
wait

# Grupo 2 (paralelo)
z-ai image -p "outdoor summer camp for little kids, children roasting marshmallows near a small tent, pine trees and mountains behind, one kid with a explorer hat looking through binoculars, sunny day, ${STYLE}" -o "./prog-campamentos.png" -s 1024x1024 &
z-ai image -p "happy toddlers finger painting at a low table covered with paper, messy colorful paint on their hands, big smiles, jars of pink orange green and blue paint, ${STYLE}" -o "./gal-arte.png" -s 1024x1024 &
z-ai image -p "children in swim shirts playing with water on a sunny day, sprinkler splashes, one child with a yellow rubber duck, colorful buckets and water guns, pure joy, ${STYLE}" -o "./gal-agua.png" -s 1024x1024 &
z-ai image -p "curious kids doing a fun science experiment with baking soda volcano, safety glasses slightly too big, amazed faces watching colorful foam eruption, teacher guiding, ${STYLE}" -o "./gal-ciencia.png" -s 1024x1024 &
wait

# Grupo 3 (paralelo)
z-ai image -p "story time moment, teacher sitting on a tiny chair reading a big picture book to a small group of toddlers sitting on fluffy pillows, kids captivated, one hugging a teddy bear, ${STYLE}" -o "./gal-cuentos.png" -s 1024x1024 &
z-ai image -p "small birthday celebration in a classroom, one child blowing candles on a tiny cake while classmates cheer with party hats, paper garlands and balloons, ${STYLE}" -o "./gal-cumple.png" -s 1024x1024 &
z-ai image -p "kids playing on a colorful playground, one child going down a slide, another on swings, a boy climbing a small wall, green trees and shade sail above, summer afternoon, ${STYLE}" -o "./gal-juegos.png" -s 1024x1024 &
wait

echo "DONE. Files generados:"
ls -la /home/z/my-project/public/img/
