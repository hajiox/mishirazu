"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export default function PersimmonLandingPage() {
  const reviews = [
    {
      comment: "美味しくいただいております。満足しております。ありがとうございます。",
      rating: 5,
    },
    {
      comment:
        "脱核柿で種がなく食べやすい。冷やしても美味しさが増します。歯ごたえもあり、ジュワッとジューシー。高齢の柿好きの義母にも喜ばれました。",
      rating: 5,
    },
    {
      comment:
        "注文から到着まで早くて安心。商品は見た目も綺麗で、甘さ・大きさ・ジューシーさのバランスがとても良かったです。",
      rating: 4,
    },
    {
      comment: "初めてみしらず柿を購入しましたが、想像以上に美味しく感動。リピート確定です！",
      rating: 5,
    },
    {
      comment: "甘さ控えめと思いきや、追熟するうちにどんどん甘くなりました。日持ちも良く、数日に分けて楽しめました。",
      rating: 4,
    },
    {
      comment: "とても甘いしジューシーで美味しい。脱渋もしっかりされていて安心。ギフトにも使いたいと思います。",
      rating: 5,
    },
    {
      comment: "カチカチ、熟しすぎなど個体差ありましたが、総じてとても甘くて満足です。",
      rating: 5,
    },
    {
      comment: "甘くて濃い味わい。追熟して食べたらさらにとろけるような食感に。また注文したいと思います。",
      rating: 4,
    },
  ]

  const faqs = [
    {
      question: "届いた柿がまだ固いのですが？",
      answer:
        "渋みを抜いた直後はやや固めですが、室温で2〜3日置くとやわらかくなり、より甘くジューシーになります。お好みの食感でお召し上がりください。",
    },
    {
      question: "渋みを感じるのですが大丈夫ですか？",
      answer:
        "まれに渋みが残る場合があります。その際は風通しの良い場所で天日に1〜2日当てると、より美味しくお召し上がりいただけます。",
    },
    {
      question: "保存方法はどうすればいいですか？",
      answer:
        "開封前は常温で、直射日光を避けて保存してください。完熟後は冷蔵庫で保管し、できるだけ早めにお召し上がりください。",
    },
    {
      question: "種は入っていますか？",
      answer:
        "みしらず柿は基本的に種なし品種です。ただし自然由来のため、ごくまれに小さな未熟種が含まれることがあります。",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-18">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogo-LNYVZ2rTTK8D8lVCcDb4xMIDUv0P9B.jpg"
                alt="会津ブランド館"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile */}
      <section className="relative w-full block md:hidden">
        <div className="relative w-full aspect-[4/5]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E7%94%BB%E5%83%8F-ryIGXDywxnprCWJC111l20FPoEXr7A.jpg"
            alt="皇室献上の柿をご家庭で"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Hero Section - Desktop */}
      <section className="relative w-full hidden md:block bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A1%E3%82%A4%E3%83%B3%E7%94%BB%E5%83%8F-ryIGXDywxnprCWJC111l20FPoEXr7A.jpg"
              alt="皇室献上の柿をご家庭で"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight text-balance">
            皇室献上の柿をご家庭で
            <br />
            みんなが笑顔になる美味しい柿
          </h1>

          <div className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              艶やかな橙色の柿が詰まった5キロ箱（14～18玉入り）を産地直送でお届けします。柿は通年食べれるものではありません。収穫時期は10月中旬から12月上旬まで。今だけ！是非この機会にご賞味ください。会津の中でも美味しい柿の産地として知られる会津美里町産の柿です。
            </p>
          </div>
        </div>
      </section>

      {/* Product Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F-iaiG8X6s8DNnWSPVzTb5wtS2SILBUF.jpg"
                alt="会津みしらず柿5キロ箱"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge className="bg-amber-600 text-white hover:bg-amber-700 text-base px-4 py-2">限定200セット</Badge>
                <Badge className="bg-red-600 text-white hover:bg-red-700 text-base px-4 py-2">送料無料</Badge>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  3,900<span className="text-3xl md:text-4xl">円</span>
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">（税・送料込）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            会津ブランド館は安心安全のお店です。
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%89%E5%BF%83%E5%AE%89%E5%85%A8mercari-aJCUCPtqNTXL8SHaX5ARTsbQk5tOUI.png"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%89%E5%BF%83%E5%AE%89%E5%85%A8%E6%A5%BD%E5%A4%A9%E6%9C%80%E5%84%AA%E7%A7%80%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97-u9KpUdBGCTw0GhsdVYGMfLx1XeXY8F.png"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">商品の魅力</h2>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%9A%87%E5%AE%A4%E7%8C%AE%E4%B8%8A%E3%81%AE%E6%A5%B5%E4%B8%8A%E6%9F%BF-reJsXZVmH17IYNjJK0DH2JQY9t0HC1.jpg"
                  alt="皇室献上の極上柿"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">皇室献上の極上柿</h3>
                <p className="text-muted-foreground leading-relaxed">
                  会津みしらず柿は古くから会津で栽培され、毎年皇室へ献上されるほど食味が良い特産柿です。由緒正しい柿の味をぜひご家庭でご賞味ください。
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">渋抜き済みですぐ食べられる</h3>
                <p className="text-muted-foreground leading-relaxed">
                  本品は収穫後に丁寧に渋抜き処理済み。届いてすぐに甘い柿をお楽しみいただけます。少し渋みを感じる場合は天日に当てますとより美味しくご賞味いただけます。
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B8%8B%E6%8A%9C%E3%81%8D%E6%B8%88%E3%81%BF%E3%81%A7%E3%81%99%E3%81%90%E9%A3%9F%E3%81%B9%E3%82%89%E3%82%8C%E3%82%8B-FOWNZ1TmGy81raaTYdva3FVPTBbS0S.jpg"
                  alt="渋抜き済みですぐ食べられる"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A4%A7%E7%8E%89%E3%81%A7%E9%A3%9F%E3%81%B9%E3%82%84%E3%81%99%E3%81%84-QUIpiZItXXEOjq0MxAnEHmnxrMMl2r.jpg"
                  alt="大玉で食べやすい"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">大玉で食べやすい</h3>
                <p className="text-muted-foreground leading-relaxed">
                  一玉約250～300gにもなる大ぶりサイズで食べ応え十分。しかも種が少ないため食べやすく、お子様からご年配の方まで安心です。贈答用にもどうぞ。
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  上品な甘さと美肌を支える栄養がたっぷり
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  渋みを抜いた果肉はとろけるように甘く、ビタミンCは1個で1日分以上。コラーゲン生成や抗酸化作用で、美白・ハリ・むくみ対策にも嬉しい果物です。
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%8A%E5%93%81%E3%81%AA%E7%94%98%E3%81%95%E3%81%A8%E7%BE%8E%E8%82%8C%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%A0%84%E9%A4%8A%E3%81%8C%E3%81%9F%E3%81%A3%E3%81%B7%E3%82%8A-w8yQxY2EGI2iOH2CPqnB044dEfKrNa.jpg"
                  alt="上品な甘さと美肌を支える栄養がたっぷり"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aizu Region Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BC%9A%E6%B4%A5%E3%81%8C%E6%9F%BF%E3%81%AE%E4%B8%80%E5%A4%A7%E7%94%A3%E5%9C%B0%E3%81%A7%E3%81%82%E3%82%8B%E7%90%86%E7%94%B1-ozsbXAmmDUphESenAENGLzII839rW8.jpg"
                alt="会津の柿畑での収穫風景"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">会津が柿の一大産地である理由</h2>
              <p className="text-muted-foreground leading-relaxed">
                会津の柿が美味しい理由は、盆地特有の気候にあります。夏は暑く冬は厳しく冷え込むため、昼夜の寒暖差が大きく、糖度がしっかり蓄えられます。また、日照時間が長く、阿賀川流域の肥沃な土壌と適度な水分が柿の生育に最適な環境をつくります。これらの自然条件が、果肉の緻密さと上品な甘さ、豊かな風味を育むのです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Enjoy Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">美味しい食べ方</h2>

          <div className="relative aspect-video max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BE%8E%E5%91%B3%E3%81%97%E3%81%84%E9%A3%9F%E3%81%B9%E6%96%B9-6G6cqntrD0ZGhZqn4MOCsSLxeU9hm8.jpg"
              alt="柿の美味しい食べ方"
              fill
              className="object-cover"
            />
          </div>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg border-amber-200">
            <CardContent className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
                固くても美味しい、柔らかくても美味しい
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                みしらず柿は、届いてすぐならシャキッとした食感と爽やかな甘さを楽しめます。数日追熟させると、とろけるような果肉と濃厚な甘さに変化。お好みのタイミングで味の違いを堪能できます。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">お客様の声（レビュー）</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-amber-100">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/customerdansei-X6bTCfCurv2ADugV2msoCNMPkmCLEj.jpg"
                        alt={`お客様${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex text-amber-500 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">よくあるご質問（FAQ）</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-amber-50 shadow-sm border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Q{index + 1}. {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">A. {faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Hero Image */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F-iaiG8X6s8DNnWSPVzTb5wtS2SILBUF.jpg"
              alt="極上の会津みしらず柿"
              fill
              className="object-contain"
            />
          </div>
          {/* Price Display */}
          <div className="text-center mt-8">
            <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              3,900<span className="text-3xl md:text-4xl">円</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">（税・送料込）</p>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            ご購入はこちらから
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Yahoo Shopping */}
            <div className="bg-pink-100 p-4 md:p-6 rounded-lg border border-pink-200">
              <div className="text-center">
                <a
                  href="https://store.shopping.yahoo.co.jp/aizubrandhall/b08mwyx5xj.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-jrinZ1manvyKKDOvEDvi07I4ETBYXh.png"
                      alt="Yahoo!で購入"
                      width={200}
                      height={150}
                      className="object-contain mx-auto"
                    />
                  </div>
                </a>
                <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Yahoo!ショッピング</h4>
                <p className="text-xs md:text-sm text-gray-600 mb-4">
                  PayPayポイントが貯まる使えるショッピングモールはこちら
                </p>
                <p className="text-xs md:text-sm font-bold text-red-600">
                  初めて当店をご利用のお客様に300円クーポン進呈中！
                </p>
              </div>
            </div>

            {/* Rakuten */}
            <div className="bg-blue-100 p-4 md:p-6 rounded-lg border border-blue-200">
              <div className="text-center">
                <a
                  href="https://item.rakuten.co.jp/aizubrandhall/10000040/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyrakutenn-5mKHzTz3TVz5YBuatBjNlNfMYJ1p26.png"
                      alt="楽天で購入"
                      width={200}
                      height={150}
                      className="object-contain mx-auto"
                    />
                  </div>
                </a>
                <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">楽天市場</h4>
                <p className="text-xs md:text-sm text-gray-600 mb-4">
                  楽天ポイントが使える国内最大級のショッピングモールはこちら
                </p>
                <p className="text-xs md:text-sm font-bold text-red-600">
                  初めて当店をご利用のお客様に300円クーポン進呈中！
                </p>
              </div>
            </div>

            {/* Amazon */}
            <div className="bg-green-100 p-4 md:p-6 rounded-lg border border-green-200">
              <div className="text-center">
                <a
                  href="https://www.amazon.co.jp/dp/B0DMLSZ9ZP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 mx-auto max-w-xs hover:shadow-md transition-shadow">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyAmazon-8vF1vvv8WdrfZ0RivyeSapzHxJqpR2.png"
                      alt="Amazonで購入"
                      width={200}
                      height={150}
                      className="object-contain mx-auto"
                    />
                  </div>
                </a>
                <h4 className="font-bold mb-2 text-gray-900 text-sm md:text-base">Amazon</h4>
                <p className="text-xs md:text-sm text-gray-600">世界最大のショッピングモールでのお買い物はこちら</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 mb-8">
            <p className="text-lg font-bold text-foreground mb-4">
              この商品は「会津ブランド館」が製造・販売・発送を行っています。
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Store Details */}
            <div>
              <h3 className="text-xl font-bold mb-4">店舗案内</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold">会津ブランド館</span>
                </p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6-15</p>
                <p>TEL: 0242-25-1441</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-400">（年末年始はお休みさせて頂きます）</p>
              </div>
            </div>

            {/* Store Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandkan-QP9mEvcHFfTPE9MWEuCfFs38MaOSKv.jpg"
                alt="会津ブランド館の外観"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Google Map */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">店舗所在地</h3>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.234567890123!2d139.9287654321098!3d37.4951234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f85a1a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2z44CSOTY1LTAwNDQg56aP5bO25aSa5Lya5rSl5p2-5biC5LiD5pel55S677yW4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会津ブランド館の地図"
                className="absolute inset-0"
              />
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
            <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
            <p className="mt-2 text-xs">画像の一部に生成AIを使用しています</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
