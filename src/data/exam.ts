export interface QuestionType {
    question: string,
    answer_options: string[],
    answer_key_index: number,
}

export type NullableNumber = number | null | undefined;

export type SetAnswer = (index: number, answer_index: NullableNumber) => void;

export const isFilledAnswer = (a: NullableNumber) : boolean => a === 0 || !!a;

export const dataQuestions: QuestionType[] = [
    {
        question: `Bioteknologi merupakan salah satu metode yang akhir-akhir ini dikembalikan untuk mendukung usaha pemuliaan tanaman, terutama tanamanan budidaya yang bermanfaat bagi manusia. Pilih salah satu pernyataan di bawah ini yang menunjukkan upaya pemuliaan tanaman dengan cara bioteknologi.`,
        answer_options: [
            "A. Penyilangan seksual antara dua tanaman kedelai dari varietas yang berbeda",
            "B. Perbanyakan tanaman kentang melalui kultur jaringan",
            "C. Perbanyakan tanaman mangga melalui stek",
            "D. Perbanyakan tanaman bawang melalui umbi",
        ],
        answer_key_index: 1,
    },
    {
        question: "Tumbuhan yang berumah satu adalah tumbuhan yang ...",
        answer_options: [
            "A. Bunga jantan dan bunga betina terdapat pada pohon yang berlainan",
            "B. Bunga jantan dan bunga betina terdapat pada pohon yang sama",
            "C. Bunga betina dan bunga jantan terdapat pada bunga yang berbeda",
            "D. Tidak ada jawaban yang benar",
        ],
        answer_key_index: 1,
    },
    {
        question: "Tumbuhan yang berkembang secara tidak kawin alami dengan rhizome yaitu ...",
        answer_options: [
            "A. Lengkuas, kunyit, jahe, kentang",
            "B. Jahe, kunyit, bawang, alang-alang",
            "C. Lengkuas, jahe, kunyit, alang-alang",
            "D. Kunyit, lengkuas, alang-alang, singkong",
        ],
        answer_key_index: 2,
    },
    {
        question: "Hewan dapat berkembang biak dengan bertelur (ovipar), melahirkan (vivipar) atau mengerami telurnya di dalam tubuh sampai menetas lalu dilahirkan (ovovivipar). Pilih pernyataan yang BENAR",
        answer_options: [
            "A. Laba-laba, nyamuk, buaya dan belalang adalah kelompok hewan ovipar",
            "B. Lumba-lumba, laba-laba, kelelawar dan kelinci kelompok ovovivipar",
            "C. Kelelawar, kelinci, buaya dan belalang adalah hewan vivipar",
            "D. Laba-laba, kelinci, tikus dan belalang adalah kelompok vivipar",
        ],
        answer_key_index: 0,
    },
    {
        question: "Tujuan mengembangbiakkan tanaman dengan cara okulasi adalah ...",
        answer_options: [
            "A. Memperbanyak tanaman yang tahan terhadap gangguan hama",
            "B. Mempertahankan sifat-sifat asal dari tanaman induk yang diokulasi",
            "C. Mendapatkan dua sifat unggul dari kedua pohon yang diokulasi",
            "D. Mempercepat perolehan hasil dari kedua tanaman yang diokulasi",
        ],
        answer_key_index: 2,
    },
    {
        question: "Bunga tak sempurna adalah bunga yang mempunyai ...",
        answer_options: [
            "A. Benang sari dan mahkota bunga",
            "B. Benang sari dan kelopak bunga",
            "C. Benang sari dan putik",
            "D. Putik dan mahkota bunga",
        ],
        answer_key_index: 1,
    },
    {
        question: "Bahan-bahan apakah yang diperlukan untuk fotosinstesis ?",
        answer_options: [
            "A. Glukosa dan oksigen",
            "B. Glukosa dan karbondioksida",
            "C. Air dan Oksigen",
            "D. Air dan karbondioksida",
        ],
        answer_key_index: 3,
    },
    {
        question: "Contoh hewan herbivora adalah ...",
        answer_options: [
            "A. Kambing",
            "B. Macan",
            "C. Kucing",
            "D. Anjing",
        ],
        answer_key_index: 0,
    },
    {
        question: "Salah satu keuntungan menanam pohon mangga dengan cara cangkok adalah ...",
        answer_options: [
            "A. Tidak memerlukan tanah yang subur",
            "B. Tahan terhadap hama tanaman",
            "C. Tidak memerlukan pemeliharaan",
            "D. Sifat tanaman sama dengan induknya",
        ],
        answer_key_index: 3,
    },
    {
        question: "Bagian tumbuhan yang berfungsi sebagai alat kelamin jantan adalah ...",
        answer_options: [
            "A. Putik",
            "B. Kelopak",
            "C. Benang sari",
            "D. Mahkota",
        ],
        answer_key_index: 2,
    },
];