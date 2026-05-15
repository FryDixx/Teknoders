(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/CustomSelect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CustomSelect({ label, value, options, onChange, placeholder = 'Seçiniz', className = '' }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomSelect.useEffect": ()=>{
            function handleClickOutside(event) {
                if (boxRef.current && !boxRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "CustomSelect.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["CustomSelect.useEffect"];
        }
    }["CustomSelect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `tk-select-wrapper ${className}`,
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontSize: '0.875rem',
                    fontWeight: 600
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/CustomSelect.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: boxRef,
                style: {
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOpen(!open),
                        style: {
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.75rem 1rem',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--surface)',
                            color: 'var(--text)',
                            fontSize: '1rem',
                            transition: 'all 0.2s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: value || placeholder
                            }, void 0, false, {
                                fileName: "[project]/app/components/CustomSelect.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                size: 16,
                                color: "var(--text-muted)"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CustomSelect.jsx",
                                lineNumber: 53,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 16,
                                color: "var(--text-muted)"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CustomSelect.jsx",
                                lineNumber: 53,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CustomSelect.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 'calc(100% + 4px)',
                            left: 0,
                            width: '100%',
                            maxHeight: '250px',
                            overflowY: 'auto',
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 50,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0.25rem'
                        },
                        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange(option);
                                    setOpen(false);
                                },
                                style: {
                                    textAlign: 'left',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.875rem',
                                    background: value === option ? 'var(--primary-soft)' : 'transparent',
                                    color: value === option ? 'var(--primary)' : 'var(--text)',
                                    transition: 'background 0.2s'
                                },
                                children: option
                            }, option, false, {
                                fileName: "[project]/app/components/CustomSelect.jsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/CustomSelect.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CustomSelect.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CustomSelect.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(CustomSelect, "E55k/749z7oFTEczBuWlNvQZcWk=");
_c = CustomSelect;
var _c;
__turbopack_context__.k.register(_c, "CustomSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data/curriculum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OSYM_2025",
    ()=>OSYM_2025,
    "curriculum",
    ()=>curriculum,
    "lessonThemes",
    ()=>lessonThemes,
    "levelThemes",
    ()=>levelThemes
]);
const curriculum = {
    LGS: {
        Matematik: [
            'Çarpanlar ve Katlar',
            'Üslü İfadeler',
            'Kareköklü İfadeler',
            'Veri Analizi',
            'Basit Olayların Olma Olasılığı',
            'Cebirsel İfadeler ve Özdeşlikler',
            'Doğrusal Denklemler',
            'Eşitsizlikler',
            'Üçgenler',
            'Eşlik ve Benzerlik',
            'Dönüşüm Geometrisi',
            'Geometrik Cisimler'
        ],
        'Fen Bilimleri': [
            'Mevsimler ve İklim',
            'DNA ve Genetik Kod',
            'Basınç',
            'Madde ve Endüstri',
            'Basit Makineler',
            'Enerji Dönüşümleri ve Çevre Bilimi',
            'Elektrik Yükleri ve Elektrik Enerjisi'
        ],
        Türkçe: [
            'Sözcükte Anlam',
            'Cümlede Anlam',
            'Paragraf',
            'Fiilimsi',
            'Cümlenin Ögeleri',
            'Yazım Kuralları',
            'Noktalama İşaretleri',
            'Metin Türleri',
            'Sözel Mantık'
        ],
        'T.C. İnkılap Tarihi': [
            'Bir Kahraman Doğuyor',
            'Milli Uyanış',
            'Milli Bir Destan',
            'Atatürkçülük ve Çağdaşlaşan Türkiye',
            'Demokratikleşme Çabaları',
            'Atatürk Dönemi Türk Dış Politikası'
        ],
        İngilizce: [
            'Friendship',
            'Teen Life',
            'In The Kitchen',
            'On The Phone',
            'The Internet',
            'Adventures',
            'Tourism',
            'Chores',
            'Science',
            'Natural Forces'
        ],
        'Din Kültürü': [
            'Kader İnancı',
            'Zekat ve Sadaka',
            'Din ve Hayat',
            'Hz. Muhammed\u2019in Örnekliği',
            'Kur\u2019an-ı Kerim ve Özellikleri'
        ]
    },
    '9. Sınıf': {
        Matematik: [
            'Sayılar',
            'Nicelikler ve Değişimler',
            'Algoritma ve Bilişim',
            'Geometrik Şekiller',
            'Eşlik ve Benzerlik',
            'İstatistiksel Araştırma Süreci',
            'Veriden Olasılığa'
        ],
        Fizik: [
            'Fizik Bilimine Giriş',
            'Madde ve Özellikleri',
            'Hareket ve Kuvvet',
            'Enerji',
            'Isı ve Sıcaklık',
            'Elektrostatik'
        ],
        Kimya: [
            'Kimya Bilimi',
            'Atom ve Periyodik Sistem',
            'Kimyasal Türler Arası Etkileşimler',
            'Maddenin Halleri',
            'Doğa ve Kimya'
        ],
        Biyoloji: [
            'Yaşam Bilimi Biyoloji',
            'Hücre',
            'Canlılar Dünyası'
        ],
        Tarih: [
            'Tarih ve Zaman',
            'İnsanlığın İlk Dönemleri',
            'Orta Çağ\u2019da Dünya',
            'İlk ve Orta Çağlarda Türk Dünyası',
            'İslam Medeniyetinin Doğuşu',
            'Türklerin İslamiyet\u2019i Kabulü'
        ],
        Coğrafya: [
            'Doğa ve İnsan',
            'Dünya\u2019nın Şekli ve Hareketleri',
            'Harita Bilgisi',
            'Atmosfer ve İklim',
            'Yer Şekilleri',
            'Nüfus ve Yerleşme'
        ],
        Edebiyat: [
            'Giriş',
            'Hikaye',
            'Şiir',
            'Masal ve Fabl',
            'Roman',
            'Tiyatro',
            'Biyografi ve Otobiyografi',
            'Mektup ve E-Posta',
            'Günlük ve Blog'
        ]
    },
    '10. Sınıf': {
        Matematik: [
            'Sayma ve Olasılık',
            'Fonksiyonlar',
            'Polinomlar',
            'İkinci Dereceden Denklemler',
            'Dörtgenler ve Çokgenler',
            'Katı Cisimler'
        ],
        Fizik: [
            'Elektrik ve Manyetizma',
            'Basınç ve Kaldırma Kuvveti',
            'Dalgalar',
            'Optik'
        ],
        Kimya: [
            'Kimyanın Temel Kanunları',
            'Karışımlar',
            'Asitler, Bazlar ve Tuzlar',
            'Kimya Her Yerde'
        ],
        Biyoloji: [
            'Hücre Bölünmeleri',
            'Kalıtım',
            'Ekosistem Ekolojisi',
            'Güncel Çevre Sorunları'
        ],
        Tarih: [
            'Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi',
            'Beylikten Devlete Osmanlı',
            'Dünya Gücü Osmanlı',
            'Osmanlı Kültür ve Medeniyeti'
        ],
        Coğrafya: [
            'Dünya\u2019nın Tektonik Oluşumu',
            'İç ve Dış Kuvvetler',
            'Su, Toprak ve Bitkiler',
            'Nüfus',
            'Göç',
            'Ekonomik Faaliyetler'
        ],
        Edebiyat: [
            'Hikaye',
            'Şiir',
            'Destan ve Efsane',
            'Roman',
            'Tiyatro',
            'Anı',
            'Haber Metni',
            'Gezi Yazısı'
        ]
    },
    '11. Sınıf Sayısal': {
        Matematik: [
            'Trigonometri',
            'Analitik Geometri',
            'Fonksiyonlarda Uygulamalar',
            'Denklem ve Eşitsizlik Sistemleri',
            'Çember ve Daire',
            'Uzay Geometri',
            'Olasılık'
        ],
        Fizik: [
            'Kuvvet ve Hareket',
            'Elektrik ve Manyetizma'
        ],
        Kimya: [
            'Modern Atom Teorisi',
            'Gazlar',
            'Sıvı Çözeltiler',
            'Kimyasal Tepkimelerde Enerji',
            'Kimyasal Tepkimelerde Hız',
            'Kimyasal Denge'
        ],
        Biyoloji: [
            'İnsan Fizyolojisi',
            'Komünite ve Popülasyon Ekolojisi'
        ]
    },
    '11. Sınıf EA/Sözel': {
        Matematik: [
            'Trigonometri',
            'Analitik Geometri',
            'Fonksiyonlarda Uygulamalar',
            'Denklem ve Eşitsizlik Sistemleri'
        ],
        Edebiyat: [
            'Edebiyat ve Toplum',
            'Şiir',
            'Hikaye',
            'Roman',
            'Tiyatro',
            'Eleştiri',
            'Mülakat',
            'Röportaj'
        ],
        Tarih: [
            'Değişen Dünya Dengeleri',
            'Değişim Çağında Avrupa ve Osmanlı',
            'Uluslararası İlişkilerde Denge Stratejisi'
        ],
        Coğrafya: [
            'Biyoçeşitlilik',
            'Ekosistem',
            'Nüfus Politikaları',
            'Şehirler',
            'Ekonomik Faaliyetler',
            'Türkiye Ekonomisi'
        ],
        Felsefe: [
            'Felsefeye Giriş',
            'Bilgi Felsefesi',
            'Varlık Felsefesi',
            'Ahlak Felsefesi',
            'Siyaset Felsefesi',
            'Din Felsefesi',
            'Bilim Felsefesi'
        ]
    },
    '12. Sınıf Sayısal': {
        Matematik: [
            'Üstel ve Logaritmik Fonksiyonlar',
            'Diziler',
            'Limit',
            'Türev',
            'İntegral',
            'Trigonometri Tekrar',
            'Analitik Geometri Tekrar'
        ],
        Fizik: [
            'Çembersel Hareket',
            'Basit Harmonik Hareket',
            'Dalga Mekaniği',
            'Atom Fiziğine Giriş',
            'Modern Fizik',
            'Modern Fiziğin Teknolojideki Uygulamaları'
        ],
        Kimya: [
            'Kimya ve Elektrik',
            'Karbon Kimyasına Giriş',
            'Organik Bileşikler',
            'Enerji Kaynakları ve Bilimsel Gelişmeler'
        ],
        Biyoloji: [
            'Genden Proteine',
            'Canlılarda Enerji Dönüşümleri',
            'Bitki Biyolojisi',
            'Canlılar ve Çevre'
        ]
    },
    '12. Sınıf EA/Sözel': {
        Matematik: [
            'Üstel ve Logaritmik Fonksiyonlar',
            'Diziler',
            'Limit',
            'Türev',
            'İntegral'
        ],
        Edebiyat: [
            'Cumhuriyet Dönemi Şiiri',
            'Cumhuriyet Dönemi Romanı',
            'Cumhuriyet Dönemi Hikayesi',
            'Dünya Edebiyatı',
            'Tiyatro',
            'Deneme',
            'Söylev'
        ],
        Tarih: [
            '20. Yüzyıl Başlarında Osmanlı',
            'Milli Mücadele',
            'Atatürkçülük',
            'İki Savaş Arasındaki Dönem',
            'II. Dünya Savaşı',
            'Soğuk Savaş',
            'Küreselleşen Dünya'
        ],
        Coğrafya: [
            'Doğal Sistemler',
            'Beşeri Sistemler',
            'Küresel Ortam',
            'Ülkeler ve Bölgeler',
            'Çevre ve Toplum'
        ],
        Felsefe: [
            'Mantık',
            'Psikoloji',
            'Sosyoloji'
        ]
    },
    TYT: {
        Türkçe: [
            'Sözcükte Anlam',
            'Cümlede Anlam',
            'Paragraf',
            'Ses Bilgisi',
            'Yazım Kuralları',
            'Noktalama İşaretleri',
            'Sözcük Türleri',
            'Cümlenin Ögeleri',
            'Anlatım Bozukluğu'
        ],
        Matematik: [
            'Temel Kavramlar',
            'Sayı Basamakları',
            'Bölme ve Bölünebilme',
            'EBOB-EKOK',
            'Rasyonel Sayılar',
            'Basit Eşitsizlikler',
            'Mutlak Değer',
            'Üslü Sayılar',
            'Köklü Sayılar',
            'Çarpanlara Ayırma',
            'Oran-Orantı',
            'Denklem Çözme',
            'Problemler',
            'Kümeler',
            'Fonksiyonlar',
            'Permütasyon-Kombinasyon',
            'Olasılık',
            'Veri-İstatistik',
            'Geometri'
        ],
        Fizik: [
            'Fizik Bilimine Giriş',
            'Madde ve Özellikleri',
            'Hareket ve Kuvvet',
            'Enerji',
            'Isı ve Sıcaklık',
            'Elektrostatik',
            'Basınç',
            'Kaldırma Kuvveti',
            'Dalgalar',
            'Optik'
        ],
        Kimya: [
            'Kimya Bilimi',
            'Atom ve Periyodik Sistem',
            'Kimyasal Türler',
            'Maddenin Halleri',
            'Karışımlar',
            'Asit-Baz-Tuz',
            'Kimya Her Yerde'
        ],
        Biyoloji: [
            'Canlıların Ortak Özellikleri',
            'Hücre',
            'Canlıların Sınıflandırılması',
            'Hücre Bölünmeleri',
            'Kalıtım',
            'Ekosistem Ekolojisi'
        ],
        'Sosyal Bilimler': [
            'Tarih',
            'Coğrafya',
            'Felsefe',
            'Din Kültürü'
        ]
    },
    'AYT Sayısal': {
        Matematik: [
            'Fonksiyonlar',
            'Polinomlar',
            'İkinci Dereceden Denklemler',
            'Parabol',
            'Trigonometri',
            'Logaritma',
            'Diziler',
            'Limit',
            'Türev',
            'İntegral',
            'Analitik Geometri',
            'Olasılık'
        ],
        Fizik: [
            'Vektörler',
            'Kuvvet ve Hareket',
            'Elektrik ve Manyetizma',
            'Çembersel Hareket',
            'Basit Harmonik Hareket',
            'Dalga Mekaniği',
            'Modern Fizik'
        ],
        Kimya: [
            'Modern Atom Teorisi',
            'Gazlar',
            'Sıvı Çözeltiler',
            'Kimyasal Tepkimelerde Enerji',
            'Kimyasal Tepkimelerde Hız',
            'Kimyasal Denge',
            'Kimya ve Elektrik',
            'Organik Kimya'
        ],
        Biyoloji: [
            'İnsan Fizyolojisi',
            'Komünite ve Popülasyon Ekolojisi',
            'Genden Proteine',
            'Canlılarda Enerji Dönüşümleri',
            'Bitki Biyolojisi',
            'Canlılar ve Çevre'
        ]
    },
    'AYT EA': {
        Matematik: [
            'Fonksiyonlar',
            'Polinomlar',
            'Parabol',
            'Trigonometri',
            'Logaritma',
            'Diziler',
            'Limit',
            'Türev',
            'İntegral',
            'Olasılık'
        ],
        'Türk Dili ve Edebiyatı': [
            'Şiir Bilgisi',
            'Edebi Akımlar',
            'Tanzimat Edebiyatı',
            'Servetifünun',
            'Fecriati',
            'Milli Edebiyat',
            'Cumhuriyet Edebiyatı',
            'Roman',
            'Hikaye',
            'Tiyatro'
        ],
        'Tarih-1': [
            'Tarih ve Zaman',
            'Türk İslam Tarihi',
            'Osmanlı Tarihi',
            'Milli Mücadele',
            'Atatürk İlkeleri',
            'Çağdaş Türk ve Dünya Tarihi'
        ],
        'Coğrafya-1': [
            'Doğal Sistemler',
            'Beşeri Sistemler',
            'Türkiye Coğrafyası',
            'Ekonomik Faaliyetler',
            'Küresel Ortam'
        ]
    },
    'AYT Sözel': {
        'Türk Dili ve Edebiyatı': [
            'Şiir Bilgisi',
            'Edebi Akımlar',
            'Tanzimat Edebiyatı',
            'Servetifünun',
            'Fecriati',
            'Milli Edebiyat',
            'Cumhuriyet Edebiyatı',
            'Roman',
            'Hikaye',
            'Tiyatro'
        ],
        Tarih: [
            'İlk Çağ Uygarlıkları',
            'Türk İslam Tarihi',
            'Osmanlı Tarihi',
            'Milli Mücadele',
            'Atatürkçülük',
            'Çağdaş Türk ve Dünya Tarihi'
        ],
        Coğrafya: [
            'Doğal Sistemler',
            'Beşeri Sistemler',
            'Ekonomik Faaliyetler',
            'Bölgeler ve Ülkeler',
            'Çevre ve Toplum'
        ],
        'Felsefe Grubu': [
            'Felsefe',
            'Psikoloji',
            'Sosyoloji',
            'Mantık'
        ],
        'Din Kültürü': [
            'İnanç',
            'İbadet',
            'Ahlak ve Değerler',
            'Din, Kültür ve Medeniyet'
        ]
    }
};
const lessonThemes = {
    Matematik: {
        accent: '#6366f1',
        soft: '#eef2ff',
        rgb: '99,102,241',
        icon: '∑'
    },
    Fizik: {
        accent: '#f59e0b',
        soft: '#fffbeb',
        rgb: '245,158,11',
        icon: '⚡'
    },
    Kimya: {
        accent: '#10b981',
        soft: '#ecfdf5',
        rgb: '16,185,129',
        icon: '🧪'
    },
    Biyoloji: {
        accent: '#22c55e',
        soft: '#f0fdf4',
        rgb: '34,197,94',
        icon: '🧬'
    },
    'Fen Bilimleri': {
        accent: '#10b981',
        soft: '#ecfdf5',
        rgb: '16,185,129',
        icon: '🔬'
    },
    Türkçe: {
        accent: '#a855f7',
        soft: '#faf5ff',
        rgb: '168,85,247',
        icon: '✍️'
    },
    'Türk Dili ve Edebiyatı': {
        accent: '#8b5cf6',
        soft: '#f5f3ff',
        rgb: '139,92,246',
        icon: '📚'
    },
    Edebiyat: {
        accent: '#8b5cf6',
        soft: '#f5f3ff',
        rgb: '139,92,246',
        icon: '📖'
    },
    Tarih: {
        accent: '#d97706',
        soft: '#fffbeb',
        rgb: '217,119,6',
        icon: '🏛️'
    },
    'Tarih-1': {
        accent: '#d97706',
        soft: '#fffbeb',
        rgb: '217,119,6',
        icon: '🏛️'
    },
    'T.C. İnkılap Tarihi': {
        accent: '#d97706',
        soft: '#fffbeb',
        rgb: '217,119,6',
        icon: '🇹🇷'
    },
    Coğrafya: {
        accent: '#0d9488',
        soft: '#f0fdfa',
        rgb: '13,148,136',
        icon: '🌍'
    },
    'Coğrafya-1': {
        accent: '#0d9488',
        soft: '#f0fdfa',
        rgb: '13,148,136',
        icon: '🗺️'
    },
    Felsefe: {
        accent: '#7c3aed',
        soft: '#f5f3ff',
        rgb: '124,58,237',
        icon: '💭'
    },
    'Felsefe Grubu': {
        accent: '#7c3aed',
        soft: '#f5f3ff',
        rgb: '124,58,237',
        icon: '🧠'
    },
    'Din Kültürü': {
        accent: '#0891b2',
        soft: '#ecfeff',
        rgb: '8,145,178',
        icon: '☪️'
    },
    'Sosyal Bilimler': {
        accent: '#b45309',
        soft: '#fffbeb',
        rgb: '180,83,9',
        icon: '🧭'
    },
    İngilizce: {
        accent: '#0ea5e9',
        soft: '#f0f9ff',
        rgb: '14,165,233',
        icon: '🌐'
    }
};
const levelThemes = {
    'Kolay anlatım': {
        color: '#22c55e',
        soft: '#f0fdf4'
    },
    'Orta seviye': {
        color: '#6366f1',
        soft: '#eef2ff'
    },
    'Sınav odaklı': {
        color: '#f59e0b',
        soft: '#fffbeb'
    },
    'Detaylı öğrenme': {
        color: '#8b5cf6',
        soft: '#f5f3ff'
    }
};
const OSYM_2025 = {
    averages: {
        tytTurkish: {
            mean: 21.243,
            sd: 7.848
        },
        tytSocial: {
            mean: 9.496,
            sd: 4.042
        },
        tytMath: {
            mean: 6.006,
            sd: 7.067
        },
        tytScience: {
            mean: 4.122,
            sd: 4.862
        },
        aytEdebiyat: {
            mean: 6.63,
            sd: 5.452
        },
        aytTarih1: {
            mean: 2.243,
            sd: 2.423
        },
        aytCografya1: {
            mean: 1.436,
            sd: 1.515
        },
        aytTarih2: {
            mean: 1.426,
            sd: 1.965
        },
        aytCografya2: {
            mean: 2.635,
            sd: 2.808
        },
        aytFelsefe: {
            mean: 1.918,
            sd: 2.372
        },
        aytDin: {
            mean: 1.473,
            sd: 1.796
        },
        aytMath: {
            mean: 6.798,
            sd: 8.12
        },
        aytPhysics: {
            mean: 2.442,
            sd: 3.313
        },
        aytChem: {
            mean: 1.758,
            sd: 3.229
        },
        aytBio: {
            mean: 2.596,
            sd: 3.227
        }
    },
    placementDistribution: {
        Sayısal: [
            [
                550,
                57
            ],
            [
                530,
                1930
            ],
            [
                510,
                7081
            ],
            [
                490,
                16140
            ],
            [
                470,
                29410
            ],
            [
                450,
                46142
            ],
            [
                430,
                65449
            ],
            [
                410,
                87117
            ],
            [
                390,
                111498
            ],
            [
                370,
                139619
            ],
            [
                350,
                174355
            ],
            [
                330,
                217778
            ],
            [
                310,
                274252
            ],
            [
                290,
                348397
            ],
            [
                270,
                449880
            ],
            [
                250,
                596635
            ],
            [
                230,
                811201
            ],
            [
                210,
                1052783
            ],
            [
                190,
                1228141
            ],
            [
                170,
                1287932
            ],
            [
                150,
                1291491
            ],
            [
                130,
                1291531
            ],
            [
                115,
                1291531
            ]
        ],
        'Eşit Ağırlık': [
            [
                550,
                4
            ],
            [
                530,
                58
            ],
            [
                510,
                261
            ],
            [
                490,
                742
            ],
            [
                470,
                1629
            ],
            [
                450,
                3422
            ],
            [
                430,
                8145
            ],
            [
                410,
                20244
            ],
            [
                390,
                42590
            ],
            [
                370,
                76959
            ],
            [
                350,
                125389
            ],
            [
                330,
                192949
            ],
            [
                310,
                287630
            ],
            [
                290,
                418975
            ],
            [
                270,
                592803
            ],
            [
                250,
                806796
            ],
            [
                230,
                1042314
            ],
            [
                210,
                1262545
            ],
            [
                190,
                1425544
            ],
            [
                170,
                1489209
            ],
            [
                150,
                1494521
            ],
            [
                130,
                1494611
            ],
            [
                115,
                1494612
            ]
        ],
        Sözel: [
            [
                550,
                1
            ],
            [
                530,
                7
            ],
            [
                510,
                26
            ],
            [
                490,
                77
            ],
            [
                470,
                254
            ],
            [
                450,
                721
            ],
            [
                430,
                1926
            ],
            [
                410,
                5036
            ],
            [
                390,
                12522
            ],
            [
                370,
                28323
            ],
            [
                350,
                57848
            ],
            [
                330,
                108894
            ],
            [
                310,
                190203
            ],
            [
                290,
                309551
            ],
            [
                270,
                468930
            ],
            [
                250,
                658973
            ],
            [
                230,
                849410
            ],
            [
                210,
                1010174
            ],
            [
                190,
                1121933
            ],
            [
                170,
                1168866
            ],
            [
                150,
                1173955
            ],
            [
                130,
                1174046
            ],
            [
                115,
                1174047
            ]
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CustomSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/curriculum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AuthProvider.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function calculateNet(correct, wrong) {
    return Number(correct || 0) - Number(wrong || 0) / 4;
}
function standardScore(net, key) {
    const stat = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSYM_2025"].averages[key];
    if (!stat || stat.sd === 0) return 50;
    return 50 + 10 * ((net - stat.mean) / stat.sd);
}
function estimateRankFromOsymDistribution(score, type) {
    const table = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSYM_2025"].placementDistribution[type] || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSYM_2025"].placementDistribution.Sayısal;
    if (score >= table[0][0]) return `İlk ${table[0][1].toLocaleString('tr-TR')}`;
    for(let i = 0; i < table.length - 1; i++){
        const [highScore, highRank] = table[i];
        const [lowScore, lowRank] = table[i + 1];
        if (score <= highScore && score >= lowScore) {
            const ratio = (highScore - score) / (highScore - lowScore);
            const estimated = Math.round(highRank + ratio * (lowRank - highRank));
            return `Yaklaşık ${estimated.toLocaleString('tr-TR')}`;
        }
    }
    const lastRank = table[table.length - 1][1];
    return `${lastRank.toLocaleString('tr-TR')}+`;
}
function Home() {
    _s();
    const { session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [grade, setGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('TYT');
    const [lesson, setLesson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Türkçe');
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Sözcükte Anlam');
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Sınav odaklı');
    const [outputType, setOutputType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Detaylı ders notu');
    const [extra, setExtra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [aiUsageInfo, setAiUsageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [scoreType, setScoreType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Sayısal');
    const [diplomaGrade, setDiplomaGrade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('80');
    const [calculatedYks, setCalculatedYks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [needsRecalculate, setNeedsRecalculate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [yksError, setYksError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [exam, setExam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tytTurkish: {
            d: '30',
            y: '10',
            max: 40
        },
        tytSocial: {
            d: '12',
            y: '4',
            max: 20
        },
        tytMath: {
            d: '22',
            y: '6',
            max: 40
        },
        tytScience: {
            d: '10',
            y: '4',
            max: 20
        },
        aytMath: {
            d: '25',
            y: '5',
            max: 40
        },
        aytPhysics: {
            d: '8',
            y: '3',
            max: 14
        },
        aytChem: {
            d: '8',
            y: '2',
            max: 13
        },
        aytBio: {
            d: '8',
            y: '2',
            max: 13
        },
        aytEdebiyat: {
            d: '16',
            y: '4',
            max: 24
        },
        aytTarih1: {
            d: '7',
            y: '2',
            max: 10
        },
        aytCografya1: {
            d: '4',
            y: '1',
            max: 6
        },
        aytTarih2: {
            d: '7',
            y: '2',
            max: 11
        },
        aytCografya2: {
            d: '7',
            y: '2',
            max: 11
        },
        aytFelsefe: {
            d: '8',
            y: '2',
            max: 12
        },
        aytDin: {
            d: '4',
            y: '1',
            max: 6
        }
    });
    const availableLessons = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][grade] || {});
    const availableTopics = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][grade]?.[lesson] || [];
    const currentLessonTheme = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessonThemes"][lesson] || {
        icon: '📘'
    };
    function markYksDirty() {
        if (calculatedYks) setNeedsRecalculate(true);
    }
    function updateExamValue(testKey, field, rawValue) {
        const cleanedValue = rawValue.replace(/\D/g, '');
        setExam((prev)=>({
                ...prev,
                [testKey]: {
                    ...prev[testKey],
                    [field]: cleanedValue
                }
            }));
        setYksError('');
        markYksDirty();
    }
    function buildYksResult() {
        const nets = {
            tytTurkish: calculateNet(exam.tytTurkish.d, exam.tytTurkish.y),
            tytSocial: calculateNet(exam.tytSocial.d, exam.tytSocial.y),
            tytMath: calculateNet(exam.tytMath.d, exam.tytMath.y),
            tytScience: calculateNet(exam.tytScience.d, exam.tytScience.y),
            aytMath: calculateNet(exam.aytMath.d, exam.aytMath.y),
            aytPhysics: calculateNet(exam.aytPhysics.d, exam.aytPhysics.y),
            aytChem: calculateNet(exam.aytChem.d, exam.aytChem.y),
            aytBio: calculateNet(exam.aytBio.d, exam.aytBio.y),
            aytEdebiyat: calculateNet(exam.aytEdebiyat.d, exam.aytEdebiyat.y),
            aytTarih1: calculateNet(exam.aytTarih1.d, exam.aytTarih1.y),
            aytCografya1: calculateNet(exam.aytCografya1.d, exam.aytCografya1.y),
            aytTarih2: calculateNet(exam.aytTarih2.d, exam.aytTarih2.y),
            aytCografya2: calculateNet(exam.aytCografya2.d, exam.aytCografya2.y),
            aytFelsefe: calculateNet(exam.aytFelsefe.d, exam.aytFelsefe.y),
            aytDin: calculateNet(exam.aytDin.d, exam.aytDin.y)
        };
        const totalTytNet = nets.tytTurkish + nets.tytSocial + nets.tytMath + nets.tytScience;
        const sayisalAytNet = nets.aytMath + nets.aytPhysics + nets.aytChem + nets.aytBio;
        const eaAytNet = nets.aytMath + nets.aytEdebiyat + nets.aytTarih1 + nets.aytCografya1;
        const sozelAytNet = nets.aytEdebiyat + nets.aytTarih1 + nets.aytCografya1 + nets.aytTarih2 + nets.aytCografya2 + nets.aytFelsefe + nets.aytDin;
        const selectedAytNet = scoreType === 'Sayısal' ? sayisalAytNet : scoreType === 'Eşit Ağırlık' ? eaAytNet : sozelAytNet;
        const obp = Number(diplomaGrade) * 0.6;
        const tytStandard = standardScore(nets.tytTurkish, 'tytTurkish') * 0.33 + standardScore(nets.tytSocial, 'tytSocial') * 0.17 + standardScore(nets.tytMath, 'tytMath') * 0.33 + standardScore(nets.tytScience, 'tytScience') * 0.17;
        const estimatedTytScore = clamp(100 + tytStandard * 4, 100, 500);
        let aytStandard = 0;
        if (scoreType === 'Sayısal') {
            aytStandard = standardScore(nets.aytMath, 'aytMath') * 0.5 + standardScore(nets.aytPhysics, 'aytPhysics') * 0.166 + standardScore(nets.aytChem, 'aytChem') * 0.167 + standardScore(nets.aytBio, 'aytBio') * 0.167;
        } else if (scoreType === 'Eşit Ağırlık') {
            aytStandard = standardScore(nets.aytMath, 'aytMath') * 0.5 + standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 + standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 + standardScore(nets.aytCografya1, 'aytCografya1') * 0.1;
        } else {
            aytStandard = standardScore(nets.aytEdebiyat, 'aytEdebiyat') * 0.3 + standardScore(nets.aytTarih1, 'aytTarih1') * 0.1 + standardScore(nets.aytCografya1, 'aytCografya1') * 0.1 + standardScore(nets.aytTarih2, 'aytTarih2') * 0.1 + standardScore(nets.aytCografya2, 'aytCografya2') * 0.1 + standardScore(nets.aytFelsefe, 'aytFelsefe') * 0.2 + standardScore(nets.aytDin, 'aytDin') * 0.1;
        }
        const estimatedRawScore = clamp(estimatedTytScore * 0.4 + (100 + aytStandard * 4) * 0.6, 100, 500);
        const estimatedPlacementScore = clamp(estimatedRawScore + obp, 100, 560);
        const estimatedRank = estimateRankFromOsymDistribution(estimatedPlacementScore, scoreType);
        return {
            nets,
            totalTytNet,
            selectedAytNet,
            obp,
            estimatedTytScore,
            estimatedRawScore,
            estimatedPlacementScore,
            estimatedRank,
            scoreType
        };
    }
    function calculateYks() {
        const diplomaNumber = Number(diplomaGrade || 0);
        if (!diplomaGrade || diplomaNumber < 50 || diplomaNumber > 100) {
            setYksError('Diploma notu 50 ile 100 arasında olmalıdır.');
            return;
        }
        setYksError('');
        setCalculatedYks(buildYksResult());
        setNeedsRecalculate(false);
    }
    async function generateNote() {
        setLoading(true);
        setAiUsageInfo('');
        try {
            const res = await fetch('/api/generate-note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.access_token || ''}`
                },
                body: JSON.stringify({
                    grade,
                    lesson,
                    topic,
                    level,
                    outputType,
                    extra
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setErrorMessage(data.error || 'Bir hata oluştu.');
                setTimeout(()=>setErrorMessage(''), 5000);
                return;
            }
            const notePayload = {
                note: data.note,
                grade,
                lesson,
                topic,
                level,
                outputType,
                createdAt: new Date().toLocaleString('tr-TR'),
                remaining: data.remaining,
                limit: data.limit
            };
            localStorage.setItem('Teknoders_last_note', JSON.stringify(notePayload));
            window.location.href = '/note';
        } catch (error) {
            setErrorMessage('Bağlantı hatası oluştu.');
        } finally{
            setLoading(false);
        }
    }
    function renderExamRow(title, testKey) {
        const test = exam[testKey];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    style: {
                        width: '120px'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    style: {
                        width: '80px'
                    },
                    type: "text",
                    inputMode: "numeric",
                    value: test.d,
                    onChange: (e)=>updateExamValue(testKey, 'd', e.target.value),
                    placeholder: "D"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    style: {
                        width: '80px'
                    },
                    type: "text",
                    inputMode: "numeric",
                    value: test.y,
                    onChange: (e)=>updateExamValue(testKey, 'y', e.target.value),
                    placeholder: "Y"
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontWeight: 700,
                        color: 'var(--primary)'
                    },
                    children: calculatedYks ? calculatedYks.nets[testKey].toFixed(2) : '-'
                }, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, testKey, true, {
            fileName: "[project]/app/page.jsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container",
        style: {
            padding: '2rem 1rem'
        },
        children: [
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '1rem',
                    background: 'var(--danger-soft)',
                    color: 'var(--danger)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem'
                },
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 199,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    textAlign: 'center',
                    marginBottom: '4rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '2.5rem',
                            fontWeight: 900,
                            marginBottom: '1rem'
                        },
                        children: "Ders notunu sınıfına ve konuna göre oluştur."
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto 2rem'
                        },
                        children: "Sınıfını, dersini ve konunu seç. Teknoders sana düzenli bir ders notu, önemli noktalar ve mini tekrar soruları hazırlasın."
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "ai-note",
                className: "card",
                style: {
                    marginBottom: '4rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.5rem',
                                    fontWeight: 800
                                },
                                children: "AI Ders Notu Oluşturucu"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-muted)'
                                },
                                children: "Sınıf, ders, konu ve seviye seç."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Sınıf / Alan",
                                value: grade,
                                options: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"]),
                                onChange: (v)=>{
                                    setGrade(v);
                                    setLesson(Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][v])[0]);
                                    setTopic(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][v][Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][v])[0]][0]);
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Ders",
                                value: lesson,
                                options: availableLessons,
                                onChange: (v)=>{
                                    setLesson(v);
                                    setTopic(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$curriculum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curriculum"][grade][v][0]);
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Konu",
                                value: topic,
                                options: availableTopics,
                                onChange: setTopic
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Seviye",
                                value: level,
                                options: [
                                    'Kolay anlatım',
                                    'Orta seviye',
                                    'Sınav odaklı',
                                    'Detaylı öğrenme'
                                ],
                                onChange: setLevel
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Çıktı türü",
                                value: outputType,
                                options: [
                                    'Detaylı ders notu',
                                    'Kısa özet',
                                    'Formül ve kavram listesi',
                                    'Yazılıya hazırlık notu',
                                    'TYT/AYT tekrar notu'
                                ],
                                onChange: setOutputType
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                },
                                children: "Ek İstek (Opsiyonel)"
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                rows: "2",
                                value: extra,
                                onChange: (e)=>setExtra(e.target.value),
                                placeholder: "Örn: Çok basit anlat, 10 soru ekle..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        onClick: generateNote,
                        disabled: loading,
                        style: {
                            marginTop: '1.5rem',
                            width: '100%'
                        },
                        children: loading ? 'Hazırlanıyor...' : 'Ders Notu Oluştur'
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tools",
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '1.5rem',
                                fontWeight: 800
                            },
                            children: "YKS Puan ve Sıralama Hesaplama"
                        }, void 0, false, {
                            fileName: "[project]/app/page.jsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CustomSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Puan Türü",
                                value: scoreType,
                                options: [
                                    'Sayısal',
                                    'Eşit Ağırlık',
                                    'Sözel'
                                ],
                                onChange: (v)=>{
                                    setScoreType(v);
                                    markYksDirty();
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            display: 'block',
                                            marginBottom: '0.5rem'
                                        },
                                        children: "Diploma Notu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: diplomaGrade,
                                        onChange: (e)=>{
                                            setDiplomaGrade(e.target.value.replace(/\D/g, ''));
                                            markYksDirty();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            marginBottom: '1rem',
                                            fontSize: '1.125rem'
                                        },
                                        children: "TYT Netleri"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.75rem'
                                        },
                                        children: [
                                            renderExamRow('Türkçe (40)', 'tytTurkish'),
                                            renderExamRow('Sosyal (20)', 'tytSocial'),
                                            renderExamRow('Matematik (40)', 'tytMath'),
                                            renderExamRow('Fen (20)', 'tytScience')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            marginBottom: '1rem',
                                            fontSize: '1.125rem'
                                        },
                                        children: "AYT Netleri"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.75rem'
                                        },
                                        children: [
                                            (scoreType === 'Sayısal' || scoreType === 'Eşit Ağırlık') && renderExamRow('Matematik (40)', 'aytMath'),
                                            scoreType === 'Sayısal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    renderExamRow('Fizik (14)', 'aytPhysics'),
                                                    renderExamRow('Kimya (13)', 'aytChem'),
                                                    renderExamRow('Biyoloji (13)', 'aytBio')
                                                ]
                                            }, void 0, true),
                                            (scoreType === 'Eşit Ağırlık' || scoreType === 'Sözel') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    renderExamRow('Edebiyat (24)', 'aytEdebiyat'),
                                                    renderExamRow('Tarih-1 (10)', 'aytTarih1'),
                                                    renderExamRow('Coğrafya-1 (6)', 'aytCografya1')
                                                ]
                                            }, void 0, true),
                                            scoreType === 'Sözel' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    renderExamRow('Tarih-2 (11)', 'aytTarih2'),
                                                    renderExamRow('Coğrafya-2 (11)', 'aytCografya2'),
                                                    renderExamRow('Felsefe (12)', 'aytFelsefe'),
                                                    renderExamRow('Din (6)', 'aytDin')
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    yksError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: 'var(--danger)',
                            marginTop: '1rem',
                            fontWeight: 600
                        },
                        children: yksError
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 291,
                        columnNumber: 22
                    }, this),
                    needsRecalculate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#f59e0b',
                            marginTop: '1rem',
                            fontWeight: 600
                        },
                        children: "Değişiklik yapıldı. Yeniden hesapla butonuna bas."
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 292,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        onClick: calculateYks,
                        style: {
                            marginTop: '1.5rem',
                            width: '100%'
                        },
                        children: "Hesapla"
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    calculatedYks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '2rem',
                            padding: '1.5rem',
                            background: 'var(--primary-soft)',
                            borderRadius: 'var(--radius-lg)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '1rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: 'var(--text-muted)'
                                        },
                                        children: "TYT Net"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 300,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 800
                                        },
                                        children: calculatedYks.totalTytNet.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 300,
                                        columnNumber: 79
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: 'var(--text-muted)'
                                        },
                                        children: "AYT Net"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 301,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 800
                                        },
                                        children: calculatedYks.selectedAytNet.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 301,
                                        columnNumber: 79
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: 'var(--text-muted)'
                                        },
                                        children: "OBP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 302,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 800
                                        },
                                        children: calculatedYks.obp.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 302,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: 'var(--text-muted)'
                                        },
                                        children: "Puan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 303,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 800,
                                            color: 'var(--primary)'
                                        },
                                        children: calculatedYks.estimatedPlacementScore.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 303,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        style: {
                                            color: 'var(--text-muted)'
                                        },
                                        children: [
                                            "Sıralama (",
                                            scoreType,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 304,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 800,
                                            color: 'var(--primary)'
                                        },
                                        children: calculatedYks.estimatedRank
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.jsx",
                                        lineNumber: 304,
                                        columnNumber: 94
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_s(Home, "iMus1E1M8527deEly66UwKBjkL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronUp
]);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_11iztr1._.js.map