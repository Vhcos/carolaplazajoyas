// script/gen-qr.mjs
import QRCode from "qrcode";
import fs from "fs";

const id = "20251207001";
const url = `https://www.carolaplazajoyas.cl/c/${id}`;

fs.mkdirSync("public/qr", { recursive: true });

await QRCode.toFile(`public/qr/${id}.png`, url, {
  width: 800,
  margin: 1,
});

console.log("OK:", `public/qr/${id}.png`);
