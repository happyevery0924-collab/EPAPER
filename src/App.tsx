/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Calendar, ChevronRight, MessageCircle, Heart, Coffee, Trophy, Star, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#FF4D26] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wider">
            <Coffee className="w-6 h-6 text-[#D4AF37]" />
            <span>CHIMEI 奇美食品</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="搜尋過往期數..." 
                className="pl-9 pr-4 py-1.5 bg-white/10 text-white placeholder-white/70 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] w-64 transition-all"
              />
              <Search className="w-4 h-4 text-white/70 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="md:hidden text-white hover:text-[#D4AF37] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://picsum.photos/seed/bakery/1920/1080" 
            alt="[奇美產品/活動示意圖]" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-[#D4AF37] text-sm font-medium mb-4 tracking-wider">
              2024 年 8 月號
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
              食安唯一 顧客第一
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md leading-relaxed">
              奇美食品通訊 - 傳遞企業最新動態與溫暖故事
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

          {/* 公司治理 */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#FF4D26] pl-4">公司治理</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 董事長的話 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border-t-4 border-t-[#D4AF37] flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://picsum.photos/seed/chairman/800/600" alt="董事長" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase mb-1">董事長的話</div>
                    <h3 className="text-2xl font-bold text-white">宋光夫 董事長</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">凝聚共識 再創新高</h4>
                  <div className="prose text-gray-600 space-y-4 mb-6 flex-1">
                    <p>勿忘初心，以奇美實業、奇菱的開創經驗勉勵大家。經營企業本身是一個持續改善的過程，沒有誰一開始就做得很好。重點就四個字”持續改善”，並落實到現實上。</p>
                    <p>每個人能自覺體認到自己的R&R，互相溝通，同心協力往前走，去克服經營環境的挑戰，讓CMF能持續獲利，成為奇美集團的驕傲。</p>
                  </div>
                  <button className="text-[#FF4D26] font-medium flex items-center text-sm hover:text-[#D93D1A] mt-auto w-fit">
                    閱讀完整內容 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* 總經理的話 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border-t-4 border-t-[#FF4D26] flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src="https://picsum.photos/seed/manager/800/600" alt="總經理" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-[#FF4D26] font-bold tracking-widest text-sm uppercase mb-1">總經理的話</div>
                    <h3 className="text-2xl font-bold text-white">宋宗龍 總經理</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">立足台灣，拓展海外</h4>
                  <div className="prose text-gray-600 space-y-4 mb-6 flex-1">
                    <p>最初2011年接手奇美食品時面臨諸多挑戰，歷經經營團隊數年的努力，導入高科技管理後，打出我們自己的口碑。2020年新冠疫情全球爆發，疫情過後，越來越多的消費者選擇購買我們商品，業績開創新高。</p>
                    <p>迎接變局與永續發展「立足台灣，拓展海外」為奇美食品重要發展策略。2020年在菲律賓設立海外工廠後，今年2024年跨足歐洲波蘭的工廠即將量產，逐步將幸福美食生產基地國際化。</p>
                  </div>
                  <button className="text-[#FF4D26] font-medium flex items-center text-sm hover:text-[#D93D1A] mt-auto w-fit">
                    閱讀完整內容 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* 2. Latest News */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#FF4D26] pl-4">公司動態</h2>
              <a href="#" className="text-[#FF4D26] hover:text-[#D93D1A] flex items-center text-sm font-medium transition-colors">
                查看全部 <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100">
                  <div className="aspect-video relative overflow-hidden bg-gray-200">
                    <img 
                      src={`https://picsum.photos/seed/food${item}/800/600`} 
                      alt="[奇美產品/活動示意圖]" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#FF4D26]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                      最新消息
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[#D4AF37] font-medium mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      2024/08
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF4D26] transition-colors">
                      {['首次發行 奇美食品永續報告書', '企業淨灘 企業社會責任的實踐', '獲首家友善癲癇城市標章企業'][item-1]}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 leading-relaxed">
                      {['公司一直以來致力於追求永續發展，並將其視為企業發展的重要使命之一。在這個不斷變化的世界中，企業不僅需要關注經濟效益...', 
                        '公司在這兩年積極投入ESG的行列，2023年度我們首度成立了奇美食品海岸巡守志工隊，透過高雄市環保局的邀約及指導...', 
                        '奇美食品公司深根台南五十餘年，長期關懷弱勢、熱心公益不遺餘力，於2023年十一月與台南市癲癇之友協會共同推動...'][item-1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 食在健康 */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#FF4D26] pl-4">食在健康</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col sm:flex-row group">
                <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto">
                  <img src="https://picsum.photos/seed/healthyfood/600/600" alt="[奇美產品/活動示意圖]" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-sm text-[#D4AF37] font-medium mb-2">健康飲食</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF4D26] transition-colors">遠離三高，飲食要重視</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">依照「我的餐盤」為大原則，利用隨手可得的測量工具，如拳頭、手掌、湯匙就可以測量，即可瞭解每餐六大類食物要吃的量...</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col sm:flex-row group">
                <div className="sm:w-2/5 relative overflow-hidden h-48 sm:h-auto">
                  <img src="https://picsum.photos/seed/fasting/600/600" alt="[奇美產品/活動示意圖]" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-sm text-[#D4AF37] font-medium mb-2">體重控制</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF4D26] transition-colors">經驗分享：168間歇性斷食</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">168間歇性斷食是指一天當中要保持16小時的空腹不能吃東西，其他連續8小時則可以進食，是目前許多民眾想要瘦身減肥的選擇...</p>
                </div>
              </div>
            </div>
          </section>

          {/* 食力學院 */}
          <section className="bg-white rounded-3xl overflow-hidden shadow-md border-t-4 border-t-[#D4AF37]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-bl from-white to-[#FDFBF7] order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-1 bg-[#FF4D26] rounded-full"></span>
                  <div className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase">食力學院</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  安全守護 廠內急救訓練
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    安全意識與技能是我們最寶貴的資產之一，公司每年定期舉辦急救訓練，以確保員工在突發狀況下能夠迅速、有效地做出應對，保障員工的生命安全和身體健康。
                  </p>
                  <p>
                    特邀請奇美醫院護理師前來教授急救人員訓練課程，包含心肺復甦（CPR）、止血處理、骨折固定等常見急救程序，更是對我們對共同安全的一種承諾。
                  </p>
                </div>
                <div className="mt-8">
                  <button className="bg-white border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition-colors shadow-sm hover:shadow-md flex items-center w-fit">
                    了解急救知識 <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <img 
                  src="https://picsum.photos/seed/firstaid/1000/1000" 
                  alt="[奇美產品/活動示意圖]" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>

          {/* 獲獎報報 */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#FF4D26] pl-4">獲獎報報</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Award 1 */}
              <div className="bg-gradient-to-br from-[#FF4D26] to-[#D93D1A] rounded-2xl p-8 text-white shadow-md relative overflow-hidden group">
                <Trophy className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="inline-block py-1 px-3 rounded-full bg-white/20 text-xs font-semibold mb-4 backdrop-blur-sm">
                    企業榮耀
                  </div>
                  <h3 className="text-2xl font-bold mb-3">第20屆台灣金根獎</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    台灣產業科技推動協會(TITA)主辦，肯定奇美食品深耕台灣53年，不斷創新傳統麵食點心，成功進軍國際市場。
                  </p>
                  <button className="text-white font-medium flex items-center text-sm hover:underline">
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Award 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <Star className="absolute -right-4 -bottom-4 w-32 h-32 text-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="inline-block py-1 px-3 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold mb-4">
                    觀光工廠
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">113年度 國際亮點觀光工廠</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    奇美食品幸福工廠榮獲經濟部評選為國際亮點觀光工廠，展現台灣美食觀光魅力與卓越的服務品質。
                  </p>
                  <button className="text-[#FF4D26] font-medium flex items-center text-sm hover:text-[#D93D1A]">
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Award 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <Award className="absolute -right-4 -bottom-4 w-32 h-32 text-[#FF4D26]/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="inline-block py-1 px-3 rounded-full bg-[#FF4D26]/10 text-[#FF4D26] text-xs font-semibold mb-4">
                    產品肯定
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2024銀髮友善食品 金饌獎</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    六級餐盒（超嫩薑汁漢堡排）榮獲 EATENDER 評選金饌獎，提供長者營養美味且易於咀嚼的友善飲食。
                  </p>
                  <button className="text-[#FF4D26] font-medium flex items-center text-sm hover:text-[#D93D1A]">
                    了解更多 <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Employee Voice */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">好康報報 員工專屬優惠</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">員工專屬優惠方案歡迎來體驗，除了有免費咖啡提供，亦能帶著您的家人與朋友共同前來幸福工廠，了解生產的流程、體驗手作烘培與風味館豐富您的五感體驗，感受幸福。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {[
                { name: '幸福工廠', dept: '員工專屬', quote: '奇美食品同仁憑識別證至幸福工廠本人每日可免費兌換美式咖啡一杯 (升級拿鐵需加價)' },
                { name: '燒包品牌形象館', dept: '親友同享', quote: '每張識別證含本人至多8位親友，優惠價NT$60，贈送精美小禮一份。' },
                { name: 'DIY課程', dept: '親友同享', quote: '每張識別證含本人至多8位親友，DIY課程85折優惠。' }
              ].map((employee, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Speech Bubble */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-t-2 border-t-[#D4AF37] relative mb-6 w-full">
                    <MessageCircle className="absolute top-4 right-4 w-5 h-5 text-[#FF4D26]/10" />
                    <p className="text-gray-600 italic leading-relaxed relative z-10">"{employee.quote}"</p>
                    {/* Bubble Tail */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                  </div>
                  {/* Avatar */}
                  <div className="flex flex-col items-center">
                    <img 
                      src={`https://picsum.photos/seed/avatar${idx}/150/150`} 
                      alt="[奇美產品/活動示意圖]" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#FF4D26] p-0.5 shadow-sm mb-2"
                      referrerPolicy="no-referrer"
                    />
                    <div className="font-bold text-gray-900">{employee.name}</div>
                    <div className="text-xs text-[#FF4D26] font-medium">{employee.dept}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* 5. Archive & Footer */}
      <footer className="bg-[#D93D1A] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-2xl tracking-wider mb-6">
                <Coffee className="w-8 h-8" />
                <span className="text-white">CHIMEI 奇美食品</span>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                致力於提供安全、美味、健康的食品，將溫暖與幸福傳遞到每一個家庭的餐桌上。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2">過往期數回顧</h4>
              <ul className="space-y-3">
                {['2024 年 8 月號 - 食安唯一 顧客第一', '2024 年 7 月號 - 永續發展', '2024 年 6 月號 - 創新突破'].map((issue, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {issue}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2">快速連結</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">員工福利專區</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">教育訓練平台</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">意見信箱</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>© 2024 奇美食品股份有限公司 Chimei Food Co., Ltd. 內部機密，請勿外流。</p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-[#D4AF37]" /> by Internal Comms Team
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

