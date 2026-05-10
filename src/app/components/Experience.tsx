
import { Radio, Timeline } from 'antd';

export default function Experience() {
  const webInfo = [
          {
            title: (<div>
              <h3>前端工程師<br/>桔豐科技股份有限公司</h3>
              <h4>九月 2023 ~ 現在・2年 9個月</h4>
            </div>),
            content: (<div>
              <h4>eSIM SaaS 管理後台</h4>
              <ul>
                <li>獨立負責 eSIM SaaS 管理後台前端架構設計與功能開發，使用 Nuxt 4 + TypeScript 建構訂單、用戶產品與設備管理模組，提升內部操作效率與系統一致性。</li>
                <li>透過 Nuxt 4 的模組化架構與 TypeScript 型別管理，提升程式碼可維護性、開發效率與大型專案擴展性。</li>
                <li>建立共用元件與流程設計，降低重複開發成本並提升後續功能擴展效率。</li>
                <li>優化 API 串接與錯誤處理流程，提升系統穩定性與維護性。</li>
                <li>開發過程中運用 AI 工具輔助技術研究與問題排查，大幅提升開發效率，平均開發工時較未使用前縮短50%，並將技術能力逐步擴展至後端系統架構。</li>
              </ul>

              <h4>eSIM App H5</h4>
              <ul>
                <li>使用 Vue3 + TypeScript 的架構，開發 App 內嵌 eSIM 購買流程及會員 H5 頁面，透過 JSBridge 實現 H5 與 App 的互動機制，完成登入資訊、流程控制與資料同步等功能串接。</li>
                <li>完成 API 串接與資料處理流程，優化錯誤處理與例外狀況機制，確保系統穩定運作。</li>
                <li>利用 AI 輔助技術研究與流程優化，提升開發效率與問題排查速度。</li>
              </ul>

              <h4>官網產品購買功能頁</h4>
              <ul>
                <li>負責官網產品購買流程開發（選購、下單、資料提交），建立完整前端交易流程。</li>
                <li>透過元件抽象化與流程優化，有效降低重複開發成本以提升開發效率。</li>
                <li>透過 AI 工具輔助邏輯規劃與開發流程，加速功能開發與問題排查效率。</li>
              </ul>

              <h4>公司內部管理系統後台</h4>
              <ul>
                <li>負責公司內部管理系統前端開發（CRUD / 篩選 / 分頁），建立模組化前端架構與共用元件設計，有效降低重複開發成本並提升開發效率與可維護性。</li>
                <li>運用 AI 工具輔助基礎元件開發與技術研究，提升整體開發與除錯效率。</li>
              </ul>
            </div>),
          },
          {
            title: (<div>
              <h3>助理工程師<br/>Snowbridge 雪喬股份有限公司</h3>
              <h4>三月 2022 ~ 八月 2023・1年 6個月</h4>
            </div>),
            content: (<div>
              <ol>
                <li>製作系統前後端建置手冊</li>
                <li>網頁UIUX設計</li>
                <li>使用React建構網頁</li>
                <li>串接API</li>
                <li>系統測試及結果紀錄</li>
                <li>透過Linux執行系統維運</li>
                <li id="projects">其他主管交代事務</li>
              </ol>
            </div>)
          }
        ]
        const mobInfo = [
          {
            content: (<div>
              <div>
              <h3>前端工程師・桔豐科技股份有限公司</h3>
              <h4 className="time">九月 2023 ~ 現在・2年 9個月</h4>
            </div>
              <h4>eSIM SaaS 管理後台</h4>
              <ul>
                <li>獨立負責 eSIM SaaS 管理後台前端架構設計與功能開發，使用 Nuxt 4 + TypeScript 建構訂單、用戶產品與設備管理模組，提升內部操作效率與系統一致性。</li>
                <li>透過 Nuxt 4 的模組化架構與 TypeScript 型別管理，提升程式碼可維護性、開發效率與大型專案擴展性。</li>
                <li>建立共用元件與流程設計，降低重複開發成本並提升後續功能擴展效率。</li>
                <li>優化 API 串接與錯誤處理流程，提升系統穩定性與維護性。</li>
                <li>開發過程中運用 AI 工具輔助技術研究與問題排查，加速功能開發與除錯流程。</li>
              </ul>

              <h4>eSIM App H5</h4>
              <ul>
                <li>使用 Vue3 + TypeScript 的架構，開發 App 內嵌 eSIM 購買流程及會員 H5 頁面，透過 JSBridge 實現 H5 與 App 的互動機制，完成登入資訊、流程控制與資料同步等功能串接。</li>
                <li>完成 API 串接與資料處理流程，優化錯誤處理與例外狀況機制，確保系統穩定運作。</li>
                <li>利用 AI 輔助技術研究與流程優化，提升開發效率與問題排查速度。</li>
              </ul>

              <h4>官網產品購買功能頁</h4>
              <ul>
                <li>負責官網產品購買流程開發（選購、下單、資料提交），建立完整前端交易流程。</li>
                <li>透過元件抽象化與流程優化，有效降低重複開發成本以提升開發效率。</li>
                <li>透過 AI 工具輔助邏輯規劃與開發流程，加速功能開發與問題排查效率。</li>
              </ul>

              <h4>公司內部管理系統後台</h4>
              <ul>
                <li>負責公司內部管理系統前端開發（CRUD / 篩選 / 分頁），建立模組化前端架構與共用元件設計，有效降低重複開發成本並提升開發效率與可維護性。</li>
                <li>運用 AI 工具輔助基礎元件開發與技術研究，提升整體開發與除錯效率。</li>
              </ul>
            </div>),
          },
          {
            content: (<div>
              <div>
              <h3>助理工程師・Snowbridge 雪喬股份有限公司</h3>
              <h4 className="time">三月 2022 ~ 八月 2023・1年 6個月</h4>
            </div>
              <ol>
                <li>製作系統前後端建置手冊</li>
                <li>網頁UIUX設計</li>
                <li>使用React建構網頁</li>
                <li>串接API</li>
                <li>系統測試及結果紀錄</li>
                <li>透過Linux執行系統維運</li>
                <li id="projects">其他主管交代事務</li>
              </ol>
            </div>)
          }
        ]

  return (
    <div className="experienceWarp">
      <h2>工作經歷</h2>
      <Timeline 
        className="experienceWeb"
        mode="start"
        titleSpan={5.5}
        items={webInfo}
      />
      <Timeline
        className="experienceMob"
        titleSpan={5.5}
        items={mobInfo}
      />
    </div>
  );
}