export default function GenerateQrPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Generate QR</h1>
      <p>
        หน้านี้จะใช้สร้าง session ใหม่ (ตาราง <code>sessions</code>) และ QR
        code สำหรับแต่ละโต๊ะ — รอเพิ่ม logic เชื่อมต่อ Supabase
      </p>
    </main>
  );
}
