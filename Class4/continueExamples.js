let text = "";
// The first for loop is labeled Loop1:
Loop1:
for (let i = 0; i < 3; i++) {
text += i;
// The second for loop is labeled Loop2:
Loop2: for (let i = 10; i < 15; i++) {
if (i === 12) continue Loop2;
text += i; } }

console.log(text);