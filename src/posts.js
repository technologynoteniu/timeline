const posts = [{"date":"2021/02/14","tag":"cicd","title":"如何透過 ArgoRollout 來達到金絲雀部署","link":"https://www.facebook.com/technologynoteniu/posts/227319199102220"},{"date":"2021/02/12","tag":"usecases","title":"如何運行一個最便宜的K8s 叢集","link":"https://www.facebook.com/technologynoteniu/posts/225951499238990"},{"date":"2021/02/10","tag":"observability","title":"Prometheus 教學文","link":"https://www.facebook.com/technologynoteniu/posts/224611209373019"},{"date":"2021/02/08","tag":"usecases","title":"如何踏入 kubernetes 原始碼","link":"https://www.facebook.com/technologynoteniu/posts/223360019498138"},{"date":"2021/02/06","tag":"introduction","title":"Kustomize 入門介紹","link":"https://www.facebook.com/technologynoteniu/posts/222172022950271"},{"date":"2021/02/04","tag":"others","title":"DevOps 面試經驗談","link":"https://www.facebook.com/technologynoteniu/posts/220867733080700"},{"date":"2021/02/02","tag":"others","title":"軟體工程師該如何撰寫一份有價值的技術文件","link":"https://www.facebook.com/technologynoteniu/posts/219597926541014"},{"date":"2021/01/31","tag":"usecases","title":"kubectl 1.18 帶來的不相容改變","link":"https://www.facebook.com/technologynoteniu/posts/218323670001773"},{"date":"2021/01/29","tag":"network","title":"Kubernetes Pod 如何透過 CNI 獲取 IP","link":"https://www.facebook.com/technologynoteniu/posts/217032360130904"},{"date":"2021/01/27","tag":"terraform","title":"透過 Terraform 創建wordpress 的範例","link":"https://www.facebook.com/technologynoteniu/posts/215764940257646"},{"date":"2021/01/25","tag":"contaienr","title":"Docker 20.10 的改變","link":"https://www.facebook.com/technologynoteniu/posts/214479493719524"},{"date":"2021/01/23","tag":"contaienr","title":"Dockerfile 的小技巧","link":"https://www.facebook.com/technologynoteniu/posts/213107267190080"},{"date":"2021/01/21","tag":"terraform","title":"Terraform 範例介紹文","link":"https://www.facebook.com/technologynoteniu/posts/211760017324805"},{"date":"2021/01/19","tag":"introduction","title":"2020 KubeConf 介紹","link":"https://www.facebook.com/technologynoteniu/posts/210372760796864"},{"date":"2021/01/17","tag":"network","title":"Ingress 介紹文","link":"https://www.facebook.com/technologynoteniu/posts/209045874262886"},{"date":"2021/01/15","tag":"others","title":"勇敢說不，針對工作排列優先度","link":"https://www.facebook.com/technologynoteniu/posts/207776997723107"},{"date":"2021/01/14","tag":"network","title":"SDN 閒談","link":"https://www.facebook.com/technologynoteniu/posts/207099121124228"},{"date":"2021/01/13","tag":"others","title":"Rancher 針對 HCI 超融合架構所打造的 k8s 新專案","link":"https://www.facebook.com/technologynoteniu/posts/206446664522807"},{"date":"2021/01/11","tag":"others","title":"自建 Container Orchestration 平台的三兩事 https://www.facebook.com/technologynoteniu/posts/205169744650499","link":""},{"date":"2021/01/10","tag":"introduction","title":"secret 入門介紹","link":"https://www.facebook.com/technologynoteniu/posts/203831131451027"},{"date":"2021/01/08","tag":"usecases","title":"Jenkins 的一種玩法","link":"https://www.facebook.com/technologynoteniu/posts/202375511596589"},{"date":"2021/01/06","tag":"cicd","title":"git pre-commit hook 的妙用","link":"https://www.facebook.com/technologynoteniu/posts/200872581746882"},{"date":"2021/01/04","tag":"cicd","title":"helmfile 介紹","link":"https://www.facebook.com/technologynoteniu/posts/199482255219248"},{"date":"2021/01/02","tag":"terraform","title":"terraform try/can 功能談","link":"https://www.facebook.com/technologynoteniu/posts/198137098687097"},{"date":"2020/12/31","tag":"usecases","title":"自動化的準則與經驗談","link":"https://www.facebook.com/technologynoteniu/posts/196695848831222"},{"date":"2020/12/29","tag":"usecases","title":"Kubernetes 管理經驗談","link":"https://www.facebook.com/technologynoteniu/posts/195388485628625"},{"date":"2020/12/27","tag":"introduction","title":"Liveness/Readiness 介紹","link":"https://www.facebook.com/technologynoteniu/posts/194061299094677"},{"date":"2020/12/25","tag":"terraform","title":"小技巧打造更穩健的 Terraform","link":"https://www.facebook.com/technologynoteniu/posts/192175929283214"},{"date":"2020/12/24","tag":"introduction","title":"Kubernetes Job 介紹","link":"https://www.facebook.com/technologynoteniu/posts/191446296022844"},{"date":"2020/12/23","tag":"cicd","title":"微軟專案 Bedrock 分享","link":"https://www.facebook.com/technologynoteniu/posts/190725829428224"},{"date":"2020/12/22","tag":"usecases","title":"Kubernetes 內的版本管理經驗","link":"https://www.facebook.com/technologynoteniu/posts/189996906167783"},{"date":"2020/12/21","tag":"introduction","title":"Knative Serverless 方案介紹","link":"https://www.facebook.com/technologynoteniu/posts/188924539608353"},{"date":"2020/12/20","tag":"others","title":"遠傳加入 ONF","link":"https://www.facebook.com/technologynoteniu/posts/188334676334006"},{"date":"2020/12/20","tag":"others","title":"GitHub 2021 認證方式改變","link":"https://www.facebook.com/technologynoteniu/posts/188312686336205"},{"date":"2020/12/20","tag":"introduction","title":"Opetator 介紹文","link":"https://www.facebook.com/technologynoteniu/posts/188184803015660"},{"date":"2020/12/19","tag":"tool","title":"kubectl plugin 生態與工具介紹","link":"https://www.facebook.com/technologynoteniu/posts/187434636424010"},{"date":"2020/12/18","tag":"introduction","title":"service catalog 的介紹","link":"https://www.facebook.com/technologynoteniu/posts/186718283162312"},{"date":"2020/12/17","tag":"network","title":"為什麼 Linked 決定自行打造 Linkerd2-proxy 而不使用主流的 Enovy","link":"https://www.facebook.com/technologynoteniu/posts/185215013312639"},{"date":"2020/12/16","tag":"usecases","title":"如果可以重來，你會想要怎麼設計 kubernetes","link":"https://www.facebook.com/technologynoteniu/posts/184646260036181"},{"date":"2020/12/15","tag":"network","title":"kubernetes 下 vxlan 導致的 63 delay問題","link":"https://www.facebook.com/technologynoteniu/posts/183787650122042"},{"date":"2020/12/14","tag":"container","title":"如何透過安全掃描工具來提升 Container Image 的安全性","link":"https://www.facebook.com/technologynoteniu/posts/183046206862853"},{"date":"2020/12/13","tag":"others","title":"DevOps 面試時可能會問到的相關問題","link":"https://www.facebook.com/technologynoteniu/posts/182329460267861"},{"date":"2020/12/12","tag":"others","title":"JVM 應用程式效能上的部署問題","link":"https://www.facebook.com/technologynoteniu/posts/181801863653954"},{"date":"2020/12/11","tag":"introduction","title":"Stateful 的概念介紹","link":"https://www.facebook.com/technologynoteniu/posts/180810593753081"},{"date":"2020/12/11","tag":"container","title":"若不使用 Docker，可以使用什麼服務?","link":"https://www.facebook.com/technologynoteniu/posts/181027540398053"},{"date":"2020/12/10","tag":"tool","title":"2021 DevOps/SRE 可注意的工具","link":"https://www.facebook.com/technologynoteniu/posts/180100747157399"},{"date":"2020/12/9","tag":"network","title":"探討 Kubernetes 內的 timeout 問題","link":"https://www.facebook.com/technologynoteniu/posts/179351013899039"},{"date":"2020/12/9","tag":"container","title":"探討 Kubernetes x Docker x OCI 的差異","link":"https://www.facebook.com/technologynoteniu/posts/179715440529263"},{"date":"2020/12/8","tag":"others","title":"探討不同類型的架設模式","link":"https://www.facebook.com/technologynoteniu/posts/178555590645248"},{"date":"2020/12/7","tag":"tool","title":"使用 Helm Secret 於 Helm Chart 中保護你的 Secret 內容","link":"https://www.facebook.com/technologynoteniu/posts/177758844058256"},{"date":"2020/12/5","tag":"cicd","title":"使用 Flagger 幫你的應用程式導入金絲雀部署","link":"https://www.facebook.com/technologynoteniu/posts/176167600884047"},{"date":"2020/12/5","tag":"introduction","title":"探討 SLO 的設定技巧與概念","link":"https://www.facebook.com/technologynoteniu/posts/176971417470332"},{"date":"2020/12/4","tag":"terraform","title":"Terraform 於 CI/CD 來自動化你的架構修改","link":"https://www.facebook.com/technologynoteniu/posts/175367334297407"},{"date":"2020/12/3","tag":"introduction","title":"Kubernetes 1.20 逐漸移除 dockershim","link":"https://www.facebook.com/technologynoteniu/posts/173877564446384"},{"date":"2020/12/3","tag":"usecases","title":"TSMC 徵求 DevOps (Kubernetes) 人才","link":"https://www.facebook.com/technologynoteniu/posts/173262897841184"},{"date":"2020/12/2","tag":"network","title":"Flannel CNI 下潛在的 IP 重複問題","link":"https://www.facebook.com/technologynoteniu/posts/173074947859979"},{"date":"2020/12/1","tag":"network","title":"CNI Calico 安裝的選擇","link":"https://www.facebook.com/technologynoteniu/posts/172101251290682"},{"date":"2020/11/30","tag":"cicd","title":"使用 CircleCI & ArgoCD 來幫 k8s 打造 GitOps","link":"https://www.facebook.com/technologynoteniu/posts/170963384737802"},{"date":"2020/11/29","tag":"cicd","title":"使用 DORA 幫你的 DevOps 效率進行測量","link":"https://www.facebook.com/technologynoteniu/posts/170022318165242"},{"date":"2020/11/27","tag":"observability","title":"探討可觀測性的幾個重要 API","link":"https://www.facebook.com/technologynoteniu/posts/168920628275411"},{"date":"2020/11/26","tag":"cicd","title":"GitOps 中如何做好 Secret Management","link":"https://www.facebook.com/technologynoteniu/posts/168101821690625"},{"date":"2020/11/25","tag":"usecases","title":"etcd 正式從 CNCF 畢業囉","link":"https://www.facebook.com/technologynoteniu/posts/166916091809198"},{"date":"2020/11/23","tag":"network","title":"地端 LoadBalancer 解決方案: porter","link":"https://www.facebook.com/technologynoteniu/posts/165664161934391"},{"date":"2020/11/21","tag":"terraform","title":"Terraform 開發的經驗與技巧","link":"https://www.facebook.com/technologynoteniu/posts/163027828864691"},{"date":"2020/11/21","tag":"usecases","title":"Windows Node 使用經驗分享","link":"https://www.facebook.com/technologynoteniu/posts/162808032220004"},{"date":"2020/11/21","tag":"container","title":"Docker 網路模型實驗篇下","link":"https://www.facebook.com/technologynoteniu/posts/163174748849999"},{"date":"2020/11/19","tag":"introduction","title":"Service Account 介紹","link":"https://www.facebook.com/technologynoteniu/posts/162202288947245"},{"date":"2020/11/19","tag":"usecases","title":"Apple 公開宣佈內部服務將全面轉為 Kubernetes","link":"https://www.facebook.com/technologynoteniu/posts/161171765716964"},{"date":"2020/11/17","tag":"usecases","title":"lambda 團隊多年 Kubernetes 的經驗分享","link":"https://www.facebook.com/technologynoteniu/posts/159354259232048"},{"date":"2020/11/16","tag":"usecases","title":"三個加強 Kubernetes 服務穩定性的經驗","link":"https://www.facebook.com/technologynoteniu/posts/158992122601595"},{"date":"2020/11/14","tag":"network","title":"NodeLocalDNS 來避免 DNS 5 秒 Timeout","link":"https://www.facebook.com/technologynoteniu/posts/157470452753762"},{"date":"2020/11/13","tag":"usecases","title":"DNS 5 秒 Dealy 的緣由","link":"https://www.facebook.com/technologynoteniu/posts/156854169482057"},{"date":"2020/11/12","tag":"usecases","title":"Kubernetes Resource Limit/Request 誤用造成的錯誤","link":"https://www.facebook.com/technologynoteniu/posts/156240266210114"},{"date":"2020/11/11","tag":"container","title":"Container Image 的儲存挑戰","link":"https://www.facebook.com/technologynoteniu/posts/155859926248148"},{"date":"2020/11/10","tag":"network","title":"使用 Open Policy Agent 來保護 Ingress 的誤用","link":"https://www.facebook.com/technologynoteniu/posts/155472792953528"},{"date":"2020/11/9","tag":"tool","title":"幫你的 VIM 增加 Kubernetes YAML 支援","link":"https://www.facebook.com/technologynoteniu/posts/154898276344313"},{"date":"2020/11/8","tag":"tool","title":"SCP 工具的注意事項","link":"https://www.facebook.com/technologynoteniu/posts/154650336369107"},{"date":"2020/11/7","tag":"container","title":"Docker 網路模型實驗篇中","link":"https://www.facebook.com/technologynoteniu/posts/154008856433255"},{"date":"2020/11/4","tag":"observability","title":"Grafana 對 Tracing 伸出魔爪 Tempo","link":"https://www.facebook.com/technologynoteniu/posts/152229139944560"},{"date":"2020/11/5","tag":"introduction","title":"CRD 的入門介紹","link":"https://www.facebook.com/technologynoteniu/posts/152603559907118"},{"date":"2020/11/3","tag":"introduction","title":"KubeMQ 基於 Kubernetes 內的 Message Queue","link":"https://www.facebook.com/technologynoteniu/posts/151817666652374"},{"date":"2020/11/2","tag":"usecases","title":"使用 k3s Rancher Vault and ArgoCD 來實作 GitOps","link":"https://www.facebook.com/technologynoteniu/posts/151419883358819"},{"date":"2020/10/31","tag":"container","title":"Docker 網路模型實驗篇上","link":"https://www.facebook.com/technologynoteniu/posts/150668840100590"},{"date":"2020/10/30","tag":"introduction","title":"Kubernetes Ingress Stable","link":"https://www.facebook.com/technologynoteniu/posts/150231760144298"},{"date":"2020/10/26","tag":"container","title":"Docker 網路模型介紹","link":"https://www.facebook.com/technologynoteniu/posts/148314687002672"},{"date":"2020/10/25","tag":"tool","title":"本地開發 Kubernetes 的各種選擇","link":"https://www.facebook.com/technologynoteniu/posts/148233010344173"},{"date":"2020/10/24","tag":"network","title":"5G 網路與 Cloud Native 的整合範例","link":"https://www.facebook.com/technologynoteniu/posts/147867507047390"},{"date":"2020/10/23","tag":"network","title":"SO_REUSEPORT 提昇 Nginx 效能","link":"https://www.facebook.com/technologynoteniu/posts/147370013763806"},{"date":"2020/10/20","tag":"cicd","title":"GitOps 實作上的挑戰","link":"https://www.facebook.com/technologynoteniu/posts/145888253911982"},{"date":"2020/10/19","tag":"cicd","title":"GitOps 工具的選擇","link":"https://www.facebook.com/technologynoteniu/posts/145512047282936"},{"date":"2020/10/18","tag":"cicd","title":"淺談 GitOps 過往","link":"https://www.facebook.com/technologynoteniu/posts/145132500654224"},{"date":"2020/10/17","tag":"cicd","title":"什麼是 GitOps?","link":"https://www.facebook.com/technologynoteniu/posts/144729410694533"},{"date":"2020/10/17","tag":"cicd","title":"淺談 GitOps 過往","link":"https://www.facebook.com/technologynoteniu/posts/145132500654224"},{"date":"2020/10/16","tag":"cicd","title":"GitOps 到底解決了什麼問題","link":"https://www.facebook.com/technologynoteniu/posts/144275300739944"},{"date":"2020/10/15","tag":"tool","title":"HashiCrop 發表新的工具 Waypoint","link":"https://www.facebook.com/technologynoteniu/posts/143735977460543"},{"date":"2020/10/13","tag":"observability","title":"Kubernetes 可觀測性雷達報告","link":"https://www.facebook.com/technologynoteniu/posts/142819904218817"},{"date":"2020/10/12","tag":"usecases","title":"Kubernetes 多租戶實作的挑戰","link":"https://www.facebook.com/technologynoteniu/posts/142364334264374"},{"date":"2020/10/10","tag":"service-mesh","title":"Service Mesh 產品比較與介紹","link":"https://www.facebook.com/technologynoteniu/posts/141526277681513"},{"date":"2020/10/9","tag":"introduction","title":"Kubernetes manageFields 討論","link":"https://www.facebook.com/technologynoteniu/posts/141084067725734"},{"date":"2020/10/8","tag":"introduction","title":"Kubernetes 有趣 Demo 玩法","link":"https://www.facebook.com/technologynoteniu/posts/140250747809066"},{"date":"2020/10/7","tag":"introduction","title":"Rancher v2.5 Release","link":"https://www.facebook.com/technologynoteniu/posts/140250747809066"},{"date":"2020/10/5","tag":"others","title":"Java 應用程式於容器內的效能問題","link":"https://www.facebook.com/technologynoteniu/posts/139325047901636"},{"date":"2020/10/4","tag":"network","title":"Service Proxy 與 Edge Proxy 的差異性","link":"https://www.facebook.com/technologynoteniu/posts/138720374628770"},{"date":"2020/10/2","tag":"introduction","title":"CRD 與 Operator 的探討","link":"https://www.facebook.com/technologynoteniu/posts/137998188034322"},{"date":"2020/10/1","tag":"network","title":"Envoy 對於 gRPC 提供 Load Balance","link":"https://www.facebook.com/technologynoteniu/posts/137127168121424"},{"date":"2020/9/29","tag":"network","title":"gRPC 於 Kubernetes 內的 Load Balance 用法","link":"https://www.facebook.com/technologynoteniu/posts/136292751538199"},{"date":"2020/9/28","tag":"terraform","title":"Terraform Module 依賴性討論","link":"https://www.facebook.com/technologynoteniu/posts/136158074885000"},{"date":"2020/9/26","tag":"container","title":"CRI/OCI 介紹","link":"https://www.facebook.com/technologynoteniu/posts/135295241637950"},{"date":"2020/9/25","tag":"introduction","title":"100 秒快速介紹 Kubernetes","link":"https://www.facebook.com/technologynoteniu/posts/134638608370280"},{"date":"2020/9/23","tag":"introduction","title":"CPU Limit 造成的效能低落","link":"https://www.facebook.com/technologynoteniu/posts/133965865104221"},{"date":"2020/9/22","tag":"cicd","title":"CI/CD 部署策略比較","link":"https://www.facebook.com/technologynoteniu/posts/133250015175806"},{"date":"2020/9/19","tag":"container","title":"Contaienr 底層實作與 CVE 介紹","link":"https://www.facebook.com/technologynoteniu/posts/128392535661554"},{"date":"2020/9/18","tag":"network","title":"Kubernetes CNI 效能比較","link":"https://www.facebook.com/technologynoteniu/posts/126147459219395"},{"date":"2020/9/17","tag":"introduction","title":"7 個邁向 Cloud Native 的挑戰","link":"https://www.facebook.com/technologynoteniu/posts/125741595926648"},{"date":"2020/9/14","tag":"introduction","title":"Network Security Policies Using OPA","link":"https://www.facebook.com/technologynoteniu/posts/120445456456262"},{"date":"2020/9/14","tag":"introduction","title":"Service Mesh 介紹文系列一","link":"https://www.facebook.com/technologynoteniu/posts/120528776447930"},{"date":"2020/9/14","tag":"service-mesh","title":"Service Mesh 入門簡介","link":"https://www.facebook.com/technologynoteniu/posts/120528776447930"},{"date":"2020/9/14","tag":"usecases","title":"升級 EKS 1.17 to 1.18 的經驗分享","link":"https://www.facebook.com/technologynoteniu/posts/149491413551666"},{"date":"2020/9/12","tag":"cicd","title":"Kubernetes CI/CD 工具雷達報告","link":"https://www.facebook.com/technologynoteniu/posts/119347956566012"},{"date":"2020/9/11","tag":"cicd","title":"GitOps 帶來的痛點與反思","link":"https://www.facebook.com/technologynoteniu/posts/118905326610275"},{"date":"2020/9/11","tag":"cicd","title":"單體式架構 v.s 微服務架構","link":"https://www.facebook.com/technologynoteniu/posts/119240203243454"},{"date":"2020/9/10","tag":"observability","title":"觀看 logs 的工具介紹","link":"https://www.facebook.com/technologynoteniu/posts/118213933346081"},{"date":"2020/9/10","tag":"tool","title":"Kubernetes YAML Generator","link":"https://www.facebook.com/technologynoteniu/posts/118130986687709"},{"date":"2020/9/7","tag":"tool","title":"Kubectl View Allocations","link":"https://www.facebook.com/technologynoteniu/posts/116162186884589"},{"date":"2020/9/5","tag":"cicd","title":"GitOps Demo 及介紹","link":"https://www.facebook.com/technologynoteniu/posts/113756857125122"}]
