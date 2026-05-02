
import { Radio, Timeline } from 'antd';

export default function Experience() {


  return (
    <div className="experienceWarp">
      <h2>工作經歷</h2>
      <Timeline 
        className="experienceWeb"
        mode="start"
        titleSpan={5.5}
        items={[
          {
            title: (<div>
              <h3>前端工程師<br/>桔豐科技股份有限公司</h3>
              <h4>九月 2023 ~ 現在・2年 9個月</h4>
            </div>),
            content: (<div>
              <h4>eSIM SaaS 管理後台</h4>
              <ul>
                <li>使用Nuxt4 + Nuxt UI + TypeScript建立 eSIM 管理後台前端架構，完成訂單、用戶與產品管理功能，提升內部操作效率與系統一致性。</li>
                <li>優化資料串接與錯誤處理流程，降低 API 呼叫冗餘並提升系統穩定性與維護性。</li>
              </ul>
              <h4>eSIM App H5</h4>
              <ul>
                <li>使用Vue3 + TypeScript 的架構，開發多個 App 內嵌 H5 頁面，優化行動端載入效能，並透過 JSBridge 實現 H5 與 App 的互動機制，提升整體使用者體驗。</li>
                <li>與後端協作完成 API 串接與資料處理，優化資料流程與錯誤處理機制，確保系統穩定運作。</li>
              </ul>
              <h4>官網產品購買功能頁</h4>
              <ul>
                <li>負責官網產品購買流程開發（選購、下單、資料提交），串接後端 API 與金流串接並錯誤處理機制，優化交易流程與使用者操作體驗，提升系統穩定性。</li>
              </ul>
              <h4>C端eSIM管理後台</h4>
              <ul>
                <li>負責 eSIM 管理後台系統開發（CRUD / 篩選 / 分頁），建立模組化前端架構與共用元件設計，有效降低重複開發成本並提升開發效率與可維護性。</li>
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
        ]}
      />
      <Timeline
        className="experienceMob"
        titleSpan={5.5}
        items={[
          {
            content: (<div>
              <div>
              <h3>前端工程師・桔豐科技股份有限公司</h3>
              <h4 className="time">九月 2023 ~ 現在・2年 9個月</h4>
            </div>
              <h4>eSIM SaaS 管理後台</h4>
              <ul>
                <li>使用Nuxt4 + Nuxt UI + TypeScript建立 eSIM 管理後台前端架構，完成訂單、用戶與產品管理功能，提升內部操作效率與系統一致性。</li>
                <li>優化資料串接與錯誤處理流程，降低 API 呼叫冗餘並提升系統穩定性與維護性。</li>
              </ul>
              <h4>eSIM App H5</h4>
              <ul>
                <li>使用Vue3 + TypeScript 的架構，開發多個 App 內嵌 H5 頁面，優化行動端載入效能，並透過 JSBridge 實現 H5 與 App 的互動機制，提升整體使用者體驗。</li>
                <li>與後端協作完成 API 串接與資料處理，優化資料流程與錯誤處理機制，確保系統穩定運作。</li>
              </ul>
              <h4>官網產品購買功能頁</h4>
              <ul>
                <li>負責官網產品購買流程開發（選購、下單、資料提交），串接後端 API 與金流串接並錯誤處理機制，優化交易流程與使用者操作體驗，提升系統穩定性。</li>
              </ul>
              <h4>C端eSIM管理後台</h4>
              <ul>
                <li>負責 eSIM 管理後台系統開發（CRUD / 篩選 / 分頁），建立模組化前端架構與共用元件設計，有效降低重複開發成本並提升開發效率與可維護性。</li>
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
        ]}
      />
    </div>
  );
}