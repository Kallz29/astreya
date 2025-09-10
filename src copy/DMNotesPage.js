import React, { useState, useEffect } from "react";

const DMNotesPage = () => {
  // Ambil state dari sessionStorage jika ada
  const storedAuth = sessionStorage.getItem("dmAuthenticated") === "true";
  const storedSections = JSON.parse(sessionStorage.getItem("dmOpenSections") || "{}");

  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(storedAuth);
  const [openSections, setOpenSections] = useState(storedSections);
  const [alert, setAlert] = useState(null);

  const handleLogin = () => {
    if (password === "rawr") {
      setAuthenticated(true);
      sessionStorage.setItem("dmAuthenticated", "true");
      setAlert({ message: "Login berhasil!", type: "success" });
    } else {
      setAlert({ message: "Password salah!", type: "error" });
    }
  };

  const toggleSection = (key) => {
    setOpenSections((prev) => {
      const newState = { ...prev, [key]: !prev[key] };
      sessionStorage.setItem("dmOpenSections", JSON.stringify(newState));
      return newState;
    });
  };

  const closeAlert = () => setAlert(null);

  if (!authenticated) {
    return (
      <div className="container dmnotes-login">
        <h1>DM Notes Login</h1>
        <input
          type="password"
          placeholder="Enter DM password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        {alert && (
          <div className={`alert-popup ${alert.type}`}>
            <span>{alert.message}</span>
            <button onClick={closeAlert}>×</button>
          </div>
        )}
      </div>
    );
  }

  const sections = [
  {
    "key": "bab1",
    "title": "Bab 1: Panggilan dari Lembara",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Guild "Penjaga Fragmentasi" menerima panggilan darurat dari Arimantya Cahyamaguna (Scholar, Lembara), seorang cendekiawan terkemuka dan teman lama Alaric. Arimantya melaporkan adanya "wabah pikiran" yang menyebar, membuat penduduk menjadi agresif dan paranoid.</p>
        <strong>Misi:</strong>
        <p>Guild dikirim untuk menyelidiki. Alaric memimpin. Wabah ternyata adalah manipulasi pikiran massal, dipicu oleh frekuensi sihir gelap yang berasal dari reruntuhan kuno di bawah Lembara.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Kabut Pikiran" – sebuah energi eterik yang memanipulasi emosi negatif (kemarahan, ketakutan, paranoia) pada individu yang lemah mental.</p>
        <strong>Petunjuk:</strong>
        <p>Simbol-simbol kuno yang rusak dan coretan yang aneh muncul di dinding reruntuhan. Penduduk yang terkena wabah sering mengucapkan frasa yang sama secara berulang-ulang, yang jika disatukan, membentuk mantra yang tidak lengkap.</p>
        <strong>Penemuan:</strong>
        <p>Para PC menemukan sumber daya sihir tersembunyi yang terkontaminasi di bawah reruntuhan, memancarkan energi Malapetaka. Guild berhasil meredamnya sementara, tetapi menyadari ini hanyalah permukaan. Alaric menemukan peta yang menunjukkan potensi sumber-sumber sihir lain di seluruh Astreya.</p>
        <strong>Legenda:</strong>
        <li>Akademi Veritas (Veritas Academy): Pusat ilmu pengetahuan dan sihir.</li>
        <li>Pusat Arcane (The Arcane Hub): Bangunan kubah raksasa di tengah kota.</li>
        <li>Reruntuhan Bawah Tanah (The Undercity Ruins): Jaringan terowongan dan reruntuhan di bawah kota.</li>
        <li>Area Ladang (The Farmlands): Ladang yang mengelilingi kota.</li>
        <li>Jembatan Sinar (The Sunbeam Bridge): Jembatan utama menuju kota.</li>
      </>
    )
  },
  {
    "key": "bab2",
    "title": "Bab 2: Musim Dingin yang Membusuk (Gelvara)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Setelah meredam ancaman di Lembara, Guild menerima berita dari Jaya Volkov, yang melaporkan bahwa Malapetaka telah merusak lanskap beku Gelvara. Musim dingin menjadi lebih mematikan, makhluk es menjadi agresif, dan tanaman es mulai membusuk.</p>
        <strong>Misi:</strong>
        <p>Guild melakukan perjalanan ke Gelvara, Jaya memimpin. Mereka menemukan bahwa energi Malapetaka di sana memanipulasi elemen es, membuatnya menjadi agen kehancuran.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Es Pembusuk" – sihir gelap yang merusak struktur es dan kehidupan di dalamnya, mengubahnya menjadi agen kehancuran yang dingin.</p>
        <strong>Petunjuk:</strong>
        <p>Hewan yang terinfeksi menunjukkan pola kebusukan es yang aneh. Suara rintihan berasal dari gua-gua tempat kristal es raksasa bergetar dengan energi gelap.</p>
        <strong>Penemuan:</strong>
        <p>Di jantung gua es, para PC menemukan kristal sihir kuno yang pecah, memancarkan energi Malapetaka. Jaya mencatat simbol yang sama seperti yang ditemukan Alaric di Lembara.</p>
        <strong>Legenda:</strong>
        <li>Benteng Es (The Ice Fortress): Permukiman utama suku Frostborn.</li>
        <li>Gletser Retak (The Cracked Glacier): Gletser purba yang memiliki retakan besar, tempat Malapetaka bermanifestasi.</li>
        <li>Lembah Reruntuhan (The Ruin Valley): Reruntuhan kuno terkubur salju, terdengar bisikan aneh.</li>
        <li>Hutan Beku (The Frozen Woods): Hutan dengan makhluk es agresif.</li>
        <li>Sungai Pembeku (The Freezing River): Sungai yang membeku cepat, mengeluarkan suara rintihan aneh.</li>
      </>
    )
  },
  {
    "key": "bab3",
    "title": "Bab 3: Hutan yang Berbisik (Drenmar)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Elaria Cahyarimbun merasakan alam Drenmar dalam bahaya besar. Pepohonan besar mulai sakit, daun gugur, dan suara bisikan aneh terdengar dari dalam hutan.</p>
        <strong>Misi:</strong>
        <p>Guild pergi ke Drenmar, Elaria memimpin. Mereka menemukan bahwa Malapetaka di sini membusukkan kehidupan itu sendiri.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Penyakit Akar" – sihir gelap yang menyusup ke dalam jaringan kehidupan hutan, membusukkan pohon dan tanaman dari dalam.</p>
        <strong>Petunjuk:</strong>
        <p>Akar-akar pohon memancarkan cahaya ungu samar dan mengeluarkan cairan kental. Bisikan-bisikan itu adalah suara pikiran yang terdistorsi dari Dryad dan Spirit Hutan yang terinfeksi.</p>
        <strong>Penemuan:</strong>
        <p>Di jantung hutan yang paling tua, di bawah pohon suci yang hampir mati, mereka menemukan sebuah altar kuno yang pecah. Altar ini dulunya menyalurkan sihir kuno ke hutan, namun kini telah mengambil alih, mengubahnya menjadi titik fokus racun. Ada ukiran simbol yang sama lagi, menunjukkan upaya sistematis untuk merusak aliran sihir di setiap wilayah.</p>
        <strong>Legenda:</strong>
        <li>Perlindungan Lirien (Lirien's Sanctuary): Permukiman utama para elf Drenmar.</li>
        <li>Pohon Hati (The Heartwood Tree): Pohon suci dan tertua di Drenmar.</li>
        <li>Sungai Kehidupan (The River of Life): Sungai yang mengalir melalui Drenmar.</li>
        <li>Reruntuhan Bawah Pohon (Ruins Below the Trees): Reruntuhan kuno yang sebagian ditelan oleh akar pohon.</li>
        <li>Danau Cahaya (The Lake of Light): Danau kecil yang dulunya memancarkan cahaya.</li>
      </>
    )
  },
  {
    "key": "bab4",
    "title": "Bab 4: Lautan Gelombang Hitam (Nalarra)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Kapten Balam menghubungi Guild dari Nalarra, melaporkan lautan aneh. Air menghitam, badai petir, dan "bayangan" misterius di bawah air menenggelamkan kapal.</p>
        <strong>Misi:</strong>
        <p>Guild berlayar ke Nalarra, Balam memimpin. Mereka harus menghadapi badai sihir buatan dan makhluk-makhluk laut yang terinfeksi.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Pasang Surut Busuk" – sihir gelap yang meracuni air laut, memanipulasi cuaca, dan membangkitkan makhluk-makhluk laut yang mati atau mengubah yang hidup menjadi agresif.</p>
        <strong>Petunjuk:</strong>
        <p>Air laut di area tertentu terasa dingin yang aneh dan mengeluarkan bau busuk. Petir-petir memiliki warna ungu yang tidak wajar. Bangkai kapal-kapal yang tenggelam memiliki pola korosi aneh.</p>
        <strong>Penemuan:</strong>
        <p>Di bawah laut, di reruntuhan kuil bawah air yang tenggelam, para PC menemukan sebuah obelisk kuno yang memancarkan cahaya gelap, menarik energi Malapetaka. Balam menemukan catatan bajak laut tua yang menyebutkan "The Shadow Beneath" dan simbol yang sama.</p>
        <strong>Legenda:</strong>
        <li>Pangkalan Bajak Laut (The Pirate Haven): Permukiman utama Kapten Balam.</li>
        <li>Teluk Bayangan (The Shadow Bay): Sebuah teluk yang airnya seringkali menghitam.</li>
        <li>Kapal Hantu (The Ghost Ship): Bangkai kapal yang terdampar di pantai.</li>
        <li>Tebing Berpetir (The Lightning Cliffs): Tebing tinggi yang sering dihantam petir.</li>
        <li>Kuil yang Tenggelam (The Sunken Temple): Reruntuhan kuil kuno di bawah laut.</li>
      </>
    )
  },
  {
    "key": "bab5",
    "title": "Bab 5: Rawa yang Menangis (Hijrana)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Raja Bhaskara mengirim pesan mendesak. Rawa Hijrana dilanda kekeringan aneh, diikuti banjir bandang. Tanaman membusuk dan penyakit menyebar.</p>
        <strong>Misi:</strong>
        <p>Guild menuju Hijrana untuk menyelidiki penyebab bencana dan wabah yang tidak wajar ini.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Lumpur Wabah" – sihir gelap yang memanipulasi siklus air rawa, menyebabkan kekeringan dan banjir secara acak, serta mempercepat penyebaran penyakit.</p>
        <strong>Petunjuk:</strong>
        <p>Hewan mati dengan luka busuk aneh. Tanaman membusuk dari batang ke daun. Sebuah "denyutan" energi samar bisa dirasakan di air rawa yang paling dalam.</p>
        <strong>Penemuan:</strong>
        <p>Di tengah rawa, di sebuah gubuk tua, para PC menemukan sebuah totem kayu kuno yang terinfeksi Malapetaka. Di bawah totem, ditemukan lagi simbol Malapetaka yang kini mulai membentuk sebuah pola.</p>
        <strong>Legenda:</strong>
        <li>Desa Terapung (The Floating Village): Permukiman utama suku Lumina.</li>
        <li>Hutan Pohon Kristal (The Crystal Tree Woods): Area di mana pohon-pohon memiliki struktur kristal.</li>
        <li>Sumber Mata Air (The Spring of Life): Mata air yang dulunya memberikan kehidupan, kini mengering.</li>
        <li>Gubuk Terbengkalai (The Abandoned Hut): Gubuk tua tempat totem yang terinfeksi berada.</li>
        <li>Jalur Lumina (The Lumina Path): Jalur air yang menjadi jalan utama suku Lumina.</li>
      </>
    )
  },
  {
    "key": "bab6",
    "title": "Bab 6: Rimba yang Terluka (Shirana)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Ratu Aruna menghubungi Guild. Rimba Shirana mulai layu dan sakit, pohon obat kehilangan vitalitas, dan binatang buas menjadi agresif.</p>
        <strong>Misi:</strong>
        <p>Guild pergi ke Shirana, Aruna memimpin. Mereka menelusuri rimba berbahaya untuk menemukan sumber gangguan ini.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Busuk Rimba" – sihir gelap yang menguras vitalitas alami hutan, menyebabkan pohon dan tanaman layu, serta memanipulasi insting hewan.</p>
        <strong>Petunjuk:</strong>
        <p>Daun pohon purba menguning dan membusuk dengan cepat. Hewan yang terinfeksi memiliki mata merah menyala dan menyerang tanpa provokasi. Terdapat sebuah area di mana tanaman sama sekali tidak bisa tumbuh.</p>
        <strong>Penemuan:</strong>
        <p>Di sebuah gua tersembunyi jauh di dalam rimba, mereka menemukan mata air sihir kuno yang kini telah tercemar oleh Malapetaka. Di dinding gua, ukiran simbol Malapetaka semakin lengkap, menunjukkan sebuah ritual atau mantra sedang berlangsung.</p>
        <strong>Legenda:</strong>
        <li>Pondok Penjaga (The Keeper's Lodge): Permukiman Ratu Aruna.</li>
        <li>Reruntuhan Tersembunyi (The Hidden Ruins): Reruntuhan kuno yang ditelan hutan.</li>
        <li>Sungai Ular (The Serpent River): Sungai yang mengalir cepat, tempat binatang buas yang terinfeksi berkumpul.</li>
        <li>Gua Penyembuhan (The Healing Cave): Gua tempat mata air sihir purba yang kini tercemar berada.</li>
        <li>Pohon Raksasa (The Giant Trees): Pohon-pohon purba yang menjadi sumber obat.</li>
      </>
    )
  },
  {
    "key": "bab7",
    "title": "Bab 7: Pasir yang Berbisik (Pasvara)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Amir Zaid meminta bantuan Guild. Gurun Pasvara menjadi sangat tidak stabil. Badai pasir yang dahsyat, oase mengering, dan ilusi optik aneh membuat suku Asyrian putus asa.</p>
        <strong>Misi:</strong>
        <p>Guild melakukan perjalanan berbahaya melintasi gurun, Amir memimpin, menggunakan pengalamannya sebagai pemimpin nomaden.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Ilusi Pasir" – sihir gelap yang memanipulasi persepsi, menciptakan ilusi dan fatamorgana yang menyesatkan, serta mengeringkan sumber daya air.</p>
        <strong>Petunjuk:</strong>
        <p>Pasir di beberapa area terasa dingin yang aneh. Ilusi yang terlihat realistis, seperti oase yang tiba-tiba lenyap, menyebabkan kebingungan. Ada suara bisikan di angin gurun yang mendorong keputusasaan.</p>
        <strong>Penemuan:</strong>
        <p>Di tengah reruntuhan kota kuno yang terkubur, mereka menemukan batu rune raksasa yang dulunya berfungsi sebagai penunjuk arah dan pelindung oase. Batu ini kini memancarkan energi Malapetaka. Simbol Malapetaka di batu rune kini hampir lengkap.</p>
        <strong>Legenda:</strong>
        <li>Oase Harapan (Oasis of Hope): Oase utama suku Asyrian.</li>
        <li>Jalur Perdagangan Kuno (The Ancient Trade Route): Jalur yang sering digunakan nomaden.</li>
        <li>Reruntuhan Batu Rune (The Rune Stone Ruins): Reruntuhan kota kuno tempat batu rune terkontaminasi.</li>
        <li>Bukit Gema (The Echoing Hills): Bukit-bukit yang sering bergemuruh dengan bisikan aneh.</li>
        <li>Titik Bayangan (The Shadow Point): Area yang sering disapu badai pasir, dan terlihat ilusi aneh.</li>
      </>
    )
  },
  {
    "key": "bab8",
    "title": "Bab 8: Gunung yang Bergemuruh (Kavvara)",
    "content": (
      <>
        <strong>Pemicu Misi:</strong>
        <p>Raja Gromdin 'Tangan Besi' mengirim pesan mendesak. Gempa bumi meruntuhkan terowongan, menampakkan celah dengan cahaya ungu aneh. Mineral langka terkontaminasi, dan bisikan dari kedalaman memanggil para kurcaci.</p>
        <strong>Misi:</strong>
        <p>Guild masuk ke dalam Pegunungan Baja, Gromdin memimpin, menghadapi gangguan geologis dan mental.</p>
        <strong>Manifestasi Malapetaka:</strong>
        <p>"Pusaran Bawah Tanah" – sihir gelap yang menyebabkan gempa dan keretakan, serta merusak mineral dan memanipulasi pikiran kurcaci.</p>
        <strong>Petunjuk:</strong>
        <p>Retakan di bebatuan memancarkan cahaya ungu berdenyut. Mineral yang terkontaminasi memiliki tekstur aneh dan terasa "mati". Suara bisikan dari kedalaman terasa seperti menggoda atau mengancam.</p>
        <strong>Penemuan:</strong>
        <p>Di jantung Pegunungan Baja, mereka menemukan sebuah inti kristal raksasa yang dulunya sumber sihir kuno. Inti ini kini berdenyut dengan energi Malapetaka, menjadi sumber utama gangguan. Simbol Malapetaka di inti kristal akhirnya lengkap.</p>
        <strong>Legenda:</strong>
        <li>Gerbang Kurcaci (The Dwarf Gate): Pintu masuk utama ke permukiman Raja Gromdin.</li>
        <li>Pabrik Besi Arang (The Ironforge Works): Pabrik utama tempat kurcaci memproses mineral.</li>
        <li>Tambang Kristal (The Crystal Mines): Tambang mineral langka.</li>
        <li>Jembatan Besi (The Iron Bridge): Jembatan kokoh yang kini menunjukkan tanda-tanda korosi aneh.</li>
        <li>Jantung Pegunungan (The Mountain Heart): Gua terdalam, tempat inti kristal yang menjadi sumber Malapetaka.</li>
      </>
    )
  },
  {
    "key": "babTerakhir",
    "title": "Bab Terakhir: Titik Singgungan & Kebangkitan",
    "content": (
      <>
        <strong>Penemuan Pola:</strong>
        <p>Simbol dari semua wilayah membentuk "Segel Fragmentasi". Titik Singgungan menjadi lokasi aliran sihir bertemu.</p>
        <strong>Misi Akhir:</strong>
        <p>Guild menghadapi Malapetaka di Titik Singgungan. Harus memperbaiki Segel Fragmentasi atau menghentikan kebangkitan penuh.</p>
        <strong>Konfrontasi:</strong>
        <p>Malapetaka adalah entitas purba, ingin menyatukan aliran sihir secara korup. Guild harus menghadapi manifestasinya.</p>
        <strong>Pilihan Akhir:</strong>
        <p>Memulihkan Astreya sepenuhnya atau menciptakan keseimbangan baru. Kemenangan mungkin hanya menetralkan Malapetaka.</p>
        <strong>GM Notes (Plot Malapetaka):</strong>
        <ul>
          <li>Asal: efek samping sihir kuno terputus.</li>
          <li>Tujuan: menyatukan aliran sihir secara korup.</li>
          <li>Manifestasi: Kabut Pikiran, Es Pembusuk, Penyakit Akar, Pasang Surut Busuk, Lumpur Wabah, Busuk Rimba, Ilusi Pasir, Pusaran Bawah Tanah.</li>
          <li>Resolusi: menetralisir atau menyeimbangkan Malapetaka, meskipun Astreya berubah selamanya.</li>
        </ul>
      </>
    )
  },
  {
    "key": "plotTwist",
    "title": "Plot Twist: Pengkhianatan & Kebenaran Tersembunyi",
    "content": (
      <>
        <strong>Identitas Malapetaka:</strong>
        <p>Malapetaka ternyata alat dari entitas purba bernama <em>"Fragmentor"</em> yang menguji dunia Astreya. Ia memanfaatkan Malapetaka untuk menyatukan fragmen sihir dengan cara korup.</p>
        <strong>NPC Terdekat Terlibat:</strong>
        <p>Salah satu NPC, seperti Arimantya atau Balam, bisa saja terpengaruh Fragmentor atau menjadi pionnya. Mereka mungkin memberikan petunjuk palsu atau memicu bencana untuk menguji Guild.</p>
        <strong>Simbol Menyesatkan:</strong>
        <p>Simbol Segel Fragmentasi yang dikumpulkan sebagian adalah <em>salinan fragmentasi palsu</em>. Memperbaiki segel secara salah bisa memperparah Malapetaka atau membuka portal ke dunia lain.</p>
        <strong>Titik Singgungan Palsu:</strong>
        <p>Lokasi Titik Singgungan yang didatangi Guild mungkin bukan pusat asli. Pusat sebenarnya tersembunyi di dimensi paralel ("Dimensi Cermin Astreya").</p>
        <strong>Pilihan Moral Sulit:</strong>
        <p>Guild harus memutuskan: mengikuti petunjuk Fragmentor dan menyelamatkan sebagian Astreya, atau mencari pusat asli dengan risiko tinggi tapi potensi menyelamatkan semua wilayah.</p>
        <strong>GM Tips:</strong>
        <ul>
          <li>Buka plot twist ini secara bertahap agar suspense tetap terjaga.</li>
          <li>Gunakan NPC yang dipercaya pemain untuk menambah efek kejutan.</li>
          <li>Simbol palsu dan Titik Singgungan palsu bisa menjadi side quest tambahan.</li>
        </ul>
      </>
    )
  },
  ];
 

  return (
    <div className="dmnotes-container">
      <h1>DM Notes – Campaign Astreya</h1>
      <p>Rahasia NPC, encounter, hidden quests, dan catatan campaign.</p>

      {sections.map((sec) => (
        <div key={sec.key} className="dm-note-bab">
          <button
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "10px",
              margin: "5px 0",
              background: "#1B1833",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => toggleSection(sec.key)}
          >
            {sec.title} {openSections[sec.key] ? "▲" : "▼"}
          </button>
          {openSections[sec.key] && (
            <div
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                background: "#441752",
                marginBottom: "10px",
              }}
            >
              {sec.content}
            </div>
          )}
        </div>
      ))}

      {alert && (
        <div className={`alert-popup ${alert.type}`}>
          <span>{alert.message}</span>
          <button onClick={closeAlert}>×</button>
        </div>
      )}
    </div>
  );
};

export default DMNotesPage;