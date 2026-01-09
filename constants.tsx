import { Board, Thread } from './types'

export const BOARDS: Board[] = [
    { id: 'theory', name: '連合主義理論学習', description: '香淳思想、希節路線与八海理論的研究与交流' },
    { id: 'labor', name: '労働単位快訊', description: '各労働単位、人民工場的生産進度与労働美学分享' },
    { id: 'cyberutopia', name: '賽博烏托邦建設', description: '中央部署AI系統運作反饋与全聯網技術討論' },
    { id: 'daily', name: '群众生活随笔', description: '生活日常、衣食住行、文化娯楽' },
    { id: 'youth', name: '進歩青年之声', description: '南武青年進歩聯盟、全学連活動資訊' },
    { id: 'amino', name: '阿米諾斯友誼', description: '与阿米諾斯坦共和国的文化交流与合作' },
    { id: 'reconstruction', name: '特別管区建設', description: '南国地方与武塚地方（海実地区）的社会主義改造進程' },
]

export const MOCK_THREADS: Thread[] = [
    // --- 連合主義理論学習 板塊 ---
    {
        id: 't1',
        boardId: 'theory',
        title: '【学習心得】関于八海首相「賽博烏托邦」理論的深度思考',
        author: '進歩者001',
        lastActive: '2031-10-24 14:20',
        posts: [
            { id: 1, number: 1, author: '進歩者001', timestamp: '2031-10-24 10:00', content: '同志们好！最近我深入学习了八海首相关于中央部署系统优化的讲话。我认为人工智能与社会主义的深度融合是实现按劳分配精准化的关键' },
            { id: 2, number: 2, author: '阿南', timestamp: '2031-10-24 10:15', content: '确实如此。现在我们厂的生产计划已经完全由中央部署自动调配了，效率提升了300%！' },
            { id: 3, number: 3, author: '労働美学愛好者', timestamp: '2031-10-24 11:00', content: '效率提高的同时，我们也更应该关注“劳动美学”。劳动不仅是创造价值，更是自我实现的艺术过程' },
            { id: 4, number: 4, author: '理論哨兵', timestamp: '2031-10-24 14:20', content: '赞同楼上。八海理论的核心不仅在于技术，更在于利用技术消灭异化劳动' }
        ]
    },
    {
        id: 't5',
        boardId: 'theory',
        title: '浅析「希節路線」在争取全南武解放戦争中的物質基礎作用',
        author: '歴史研究員',
        lastActive: '2031-10-25 09:10',
        posts: [
            { id: 1, number: 1, author: '歴史研究員', timestamp: '2031-10-24 15:00', content: '如果没有2021年3月的集団特色経済改革，我们很难想象南武人民军能具备如此强大的后勤韧性' },
            { id: 2, number: 2, author: '鋼鉄意志', timestamp: '2031-10-24 15:45', content: '是的，希节同志将全面领导制贯彻到企业末梢，这才是胜利的保障' },
            { id: 3, number: 3, author: '香淳思想衛士', timestamp: '2031-10-24 16:30', content: '我们要辩证地看，希节路线是对香淳思想的实践深化' },
            { id: 4, number: 4, author: '南武史官', timestamp: '2031-10-25 09:10', content: '说得好！从计划到执行的垂直联动，彻底粉碎了旧文国伪政权的官僚主义' }
        ]
    },
    {
        id: 't6',
        boardId: 'theory',
        title: '【討論】如何理解「新共生主義」美学中的「公共奢侈」？',
        author: '建築系学生',
        lastActive: '2031-10-25 11:00',
        posts: [
            { id: 1, number: 1, author: '建築系学生', timestamp: '2031-10-25 08:00', content: '八海样式的建筑强调“公共奢侈”，我个人理解是把最好的地段、最昂贵的材料都留给食堂、图书馆和体育馆' },
            { id: 2, number: 2, author: '設計師小白', timestamp: '2031-10-25 08:30', content: '没错，个人公寓只需满足生理需求与极简主义，由于联合所有制，全城都是我们的客厅' },
            { id: 3, number: 3, author: '生活家', timestamp: '2031-10-25 09:10', content: '上次去本部都的中央图书馆，那里的陶瓷质感墙面和智能温控系统真的是最高享受' },
            { id: 4, number: 4, author: '八海美学粉丝', timestamp: '2031-10-25 11:00', content: '这就是“技术内敛”的最高境界，服务于人而不炫耀' }
        ]
    },

    // --- 労働単位快訊 板塊 ---
    {
        id: 't2',
        boardId: 'labor',
        title: '富塚県第一人民農場本月超額完成連合所有制分配指標！',
        author: '農場小張',
        lastActive: '2031-10-24 15:05',
        posts: [
            { id: 1, number: 1, author: '農場小張', timestamp: '2031-10-24 09:00', content: '报喜！在全联网智能调控下，本月我们农场的粮食产量再次突破历史新高。坚持联合主义，劳动最光荣！' },
            { id: 2, number: 2, author: '肥料專家', timestamp: '2031-10-24 10:30', content: '恭喜！听说是引进了新款的无人机蜂巢管理系统？' },
            { id: 3, number: 3, author: '農場小張', timestamp: '2031-10-24 11:15', content: '是的，中央部署实时监控土壤酸碱度，这正是人工智能服务于劳动者的体现' },
            { id: 4, number: 4, author: '奈実県労働者', timestamp: '2031-10-24 15:05', content: '我们要向富塚県的同志们学习！劳动竞胜，争取下月我们也超标！' }
        ]
    },
    {
        id: 't7',
        boardId: 'labor',
        title: '【労働美学】分享几张上阪造船廠智能车间的激光切割艺术照',
        author: '焊花浪漫',
        lastActive: '2031-10-25 10:20',
        posts: [
            { id: 1, number: 1, author: '焊花浪漫', timestamp: '2031-10-24 20:00', content: '大家看，在中央部署的控制下，激光束的运动轨迹宛如舞蹈。我们将每一个焊点都视为对共和国的忠诚' },
            { id: 2, number: 2, author: '工会攝影師', timestamp: '2031-10-24 21:00', content: '好图！这种“水晶工厂”风格的透明外壳设计真是百看不厌' },
            { id: 3, number: 3, author: '重工迷', timestamp: '2031-10-24 22:30', content: '劳动不再是灰头土脸，而是精准、整洁与力量的结合' },
            { id: 4, number: 4, author: '焊花浪漫', timestamp: '2031-10-25 10:20', content: '谢谢同志们鼓励，我会继续在劳动岗位上创作' }
        ]
    },
    {
        id: 't8',
        boardId: 'labor',
        title: '本部都服装人民工場：新批次「经典绿白」系列工装发放通知',
        author: '工厂保障中心',
        lastActive: '2031-10-25 14:00',
        posts: [
            { id: 1, number: 1, author: '工厂保障中心', timestamp: '2031-10-25 08:00', content: '针对下半年的劳动环境，我们优化了纳米涂层，不仅耐脏且透气性更佳。各劳动单位请按需申请' },
            { id: 2, number: 2, author: '一线劳动者', timestamp: '2031-10-25 09:00', content: '太好了，之前的旧款在夏天稍微有点闷热，这次改进很及时' },
            { id: 3, number: 3, author: '服装設計生', timestamp: '2031-10-25 12:45', content: '体现了八海美学中的实用性与美观高度统一' },
            { id: 4, number: 4, author: '工厂保障中心', timestamp: '2031-10-25 14:00', content: '为人民服务。各单位请在全联网后台确认分配数额' }
        ]
    },

    // --- 賽博烏托邦建設 板塊 ---
    {
        id: 't9',
        boardId: 'cyberutopia',
        title: '中央部署（CD）系統3.4版本更新日誌反饋区',
        author: '系統管理員09',
        lastActive: '2031-10-25 16:20',
        posts: [
            { id: 1, number: 1, author: '系統管理員09', timestamp: '2031-10-25 09:00', content: '本次更新优化了物流胶囊列车的调度算法。请各分拨中心同志反馈是否有延迟现象' },
            { id: 2, number: 2, author: '物流部阿強', timestamp: '2031-10-25 10:30', content: '本部都地下四层的交通流速明显提升了，响应时间缩短了5ms！' },
            { id: 3, number: 3, author: '码农志愿者', timestamp: '2031-10-25 13:00', content: '什么时候能开放更高权限的API给各个实验室？我们需要更多算力做生物建模' },
            { id: 4, number: 4, author: '系統管理員09', timestamp: '2031-10-25 16:20', content: '算力共享计划正在排队中，我们会根据联合所有制的优先级有序分配' }
        ]
    },
    {
        id: 't10',
        boardId: 'cyberutopia',
        title: '論「全聯網」数字皮膚在未来城市防護中的作用',
        author: '安全学专家',
        lastActive: '2031-10-25 17:00',
        posts: [
            { id: 1, number: 1, author: '安全学专家', timestamp: '2031-10-25 11:20', content: '全联网不仅是信息网络，更是国家的神经系统。数字皮肤可以实时显示民防和环境数据' },
            { id: 2, number: 2, author: '反諜衛士', timestamp: '2031-10-25 12:00', content: '对任何企图干扰中央部署运作的非法接入，我们都应严厉打击' },
            { id: 3, number: 3, author: '技术狂人', timestamp: '2031-10-25 14:15', content: '听说武塚国的黑客一直在尝试渗透，但在全联网的分布式防御面前毫无还手之力' },
            { id: 4, number: 4, author: '最高委技术组', timestamp: '2031-10-25 17:00', content: '联合主义的算法体系是排他是，也是最坚固的' }
        ]
    },
    {
        id: 't11',
        boardId: 'cyberutopia',
        title: '【科普】为什么说我们的AI不会导致失业？',
        author: '社会科学者',
        lastActive: '2031-10-25 18:30',
        posts: [
            { id: 1, number: 1, author: '社会科学者', timestamp: '2031-10-25 15:00', content: '在资本主义武塚国，AI是老板剥削扣薪的工具；在南武，AI解放了重复性劳动，让我们更多地投入到创造和艺术中' },
            { id: 2, number: 2, author: '快乐农夫', timestamp: '2031-10-25 15:50', content: '确实，现在我有更多时间在農場道場研习了' },
            { id: 3, number: 3, author: '進歩青年A', timestamp: '2031-10-25 16:40', content: '这就是按劳分配与技术进步的良性循环' },
            { id: 4, number: 4, author: '真理追求者', timestamp: '2031-10-25 18:30', content: 'AI不是我们的主人，而是我们实现联合主义理想的“超级助手”' }
        ]
    },

    // --- 群众生活随笔 板塊 ---
    {
        id: 't3',
        boardId: 'daily',
        title: '本部都最近新開的社会主義食堂味道不錯',
        author: '美食労働者',
        lastActive: '2031-10-24 16:30',
        posts: [
            { id: 1, number: 1, author: '美食労働者', timestamp: '2031-10-24 12:00', content: '推荐大家去第三大道的新食堂。那里的正语服务非常标准，配餐也是完全按照营养模型自动生成的' },
            { id: 2, number: 2, author: '吃貨同志', timestamp: '2031-10-24 13:45', content: '那个招牌的“香淳套餐”真的很顶！而且餐具全是陶瓷白的，看着就干净' },
            { id: 3, number: 3, author: '营养師', timestamp: '2031-10-24 14:30', content: '根据你的健康码扫描结果，食堂系统会智能调整盐分摄入，这是免费医疗保障的前置環節' },
            { id: 4, number: 4, author: '美食労働者', timestamp: '2031-10-24 16:30', content: '没错，这种“公共奢侈”感真的很带派，大家一定要去试试！' }
        ]
    },
    {
        id: 't12',
        boardId: 'daily',
        title: '分享幾张周末在南武人民公園拍攝的生態照',
        author: '自然之子',
        lastActive: '2031-10-25 13:00',
        posts: [
            { id: 1, number: 1, author: '自然之子', timestamp: '2031-10-25 10:00', content: '随着污染工业转入封闭式管理，本部都的空气质量真是太棒了。拍到了几只罕见候鸟' },
            { id: 2, number: 2, author: '本部都原住民', timestamp: '2031-10-25 10:20', content: '想起十几年前这里还是旧建筑区，现在的全绿化地貌真的像乌托邦' },
            { id: 3, number: 3, author: '林業工', timestamp: '2031-10-25 11:45', content: '这是全域共生计划的一部分，每一棵树都有全联网传感器' },
            { id: 4, number: 4, author: '自然之子', timestamp: '2031-10-25 13:00', content: '感谢建设者们的努力，让我们能享受到这种美景' }
        ]
    },
    {
        id: 't13',
        boardId: 'daily',
        title: '【娯楽】最近大火的全息舞台劇《進歩革命1999》看了吗？',
        author: '劇迷同志',
        lastActive: '2031-10-25 19:30',
        posts: [
            { id: 1, number: 1, author: '劇迷同志', timestamp: '2031-10-25 16:00', content: '这出剧在八海大剧院上映，舞美太震撼了，尤其是香淳同志在暴雨中演说的那个段落' },
            { id: 2, number: 2, author: '文艺复兴', timestamp: '2031-10-25 17:10', content: '主要还是演员的正语台词功底扎实，情感充沛' },
            { id: 3, number: 3, author: '历史票友', timestamp: '2031-10-25 18:20', content: '虽然有些艺术夸张，但确实还原了当时地下运动的艰难' },
            { id: 4, number: 4, author: '劇迷同志', timestamp: '2031-10-25 19:30', content: '准备下周带厂里的学徒们一起去二刷' }
        ]
    },

    // --- 進歩青年之声 板塊 ---
    {
        id: 't4',
        boardId: 'youth',
        title: '【招募】本部都大学青年進歩聯盟週末理論研討会',
        author: '学連主席',
        lastActive: '2031-10-24 17:00',
        posts: [
            { id: 1, number: 1, author: '学連主席', timestamp: '2031-10-24 14:00', content: '我们将讨论关于南武进步革命早期的地下运动史。欢迎广大进步青年报名参加' },
            { id: 2, number: 2, author: '青年志願者', timestamp: '2031-10-24 15:00', content: '支持！作为新一代，我们不能忘记九九建制的初心' },
            { id: 3, number: 3, author: '大一新生', timestamp: '2031-10-24 16:15', content: '请问需要提前预习《香淳文集》吗？' },
            { id: 4, number: 4, author: '学連主席', timestamp: '2031-10-24 17:00', content: '最好能看一下关于1996年联合党成立的内容，研讨会现场也会有全息资料演示' }
        ]
    },
    {
        id: 't14',
        boardId: 'youth',
        title: '关于海実地区支教志愿者选拔的情况说明',
        author: '全学宣',
        lastActive: '2031-10-25 11:30',
        posts: [
            { id: 1, number: 1, author: '全学宣', timestamp: '2031-10-25 08:30', content: '海实地区自2022年解放以来，正语推广取得了巨大进步，但基层教师仍有缺口' },
            { id: 2, number: 2, author: '热血青年', timestamp: '2031-10-25 09:20', content: '已经递交申请书！我要把先进的赛博乌托邦理念带回海实故乡' },
            { id: 3, number: 3, author: '海实孩子', timestamp: '2031-10-25 10:10', content: '感谢南武本土的哥哥姐姐们，我们的学校现在非常漂亮' },
            { id: 4, number: 4, author: '全学宣', timestamp: '2031-10-25 11:30', content: '名单将在下周一通过全联网精准推送至个人' }
        ]
    },
    {
        id: 't15',
        boardId: 'youth',
        title: '【討論】如何更好地向阿米諾斯坦青年分享南武経験？',
        author: '外事活動员',
        lastActive: '2031-10-25 21:00',
        posts: [
            { id: 1, number: 1, author: '外事活動员', timestamp: '2031-10-25 18:00', content: '阿米諾斯的青年们对我们的AI计划经济很感兴趣，大家有什么好的切入点建议吗？' },
            { id: 2, number: 2, author: '技術派青年', timestamp: '2031-10-25 19:10', content: '可以从中央部署如何优化农业滴灌技术讲起，他们那边中亚气候很需要这个' },
            { id: 3, number: 3, author: '文化大使', timestamp: '2031-10-25 20:05', content: '也可以谈谈“劳动美学”和他们的鼎真教传统美德的契合点' },
            { id: 4, number: 4, author: '外事活動员', timestamp: '2031-10-25 21:00', content: '有道理，这些点都非常有说服力。联合主义本身就是包容的' }
        ]
    },

    // --- 阿米諾斯友誼 板塊 ---
    {
        id: 't16',
        boardId: 'amino',
        title: '阿米諾斯坦共和国貿易代表团訪問本部都',
        author: '外貿局宣',
        lastActive: '2031-10-25 15:45',
        posts: [
            { id: 1, number: 1, author: '外貿局宣', timestamp: '2031-10-25 10:00', content: '哈基米总书记发来亲笔贺信，双方就石油资源与高精度生物芯片的交换达成进一步协议' },
            { id: 2, number: 2, author: 'AminoFriend', timestamp: '2031-10-25 11:30', content: '友谊地久天长！中亚的能源与南武的技术是完美的联合' },
            { id: 3, number: 3, author: '石油勘探機', timestamp: '2031-10-25 13:45', content: '我们厂正准备派遣技术组去环里海地带指导智能化采油，有人同行吗？' },
            { id: 4, number: 4, author: '外貿局宣', timestamp: '2031-10-25 15:45', content: '请在官方后台登记，这次访问是全联网统一协调的高规格协作' }
        ]
    },
    {
        id: 't17',
        boardId: 'amino',
        title: '【美食交流】阿米諾斯特色抓飯與南武海産的創意碰撞',
        author: '大厨哈桑',
        lastActive: '2031-10-26 09:00',
        posts: [
            { id: 1, number: 1, author: '大厨哈桑', timestamp: '2031-10-25 17:00', content: '我是来自阿米諾斯坦的留学生，今天在社会主义食堂试做了海鲜抓饭，欢迎大家品尝！' },
            { id: 2, number: 2, author: '南武食客', timestamp: '2031-10-25 18:20', content: '味道绝了！那种异域香料和我们的新鲜扇贝结合得非常好' },
            { id: 3, number: 3, author: '烹飪愛好者', timestamp: '2031-10-25 20:10', content: '这也是文化联合的一种体现。改天教教我怎么做？' },
            { id: 4, number: 4, author: '大厨哈桑', timestamp: '2031-10-26 09:00', content: '没问题，我会把菜谱上传到全联网的“共有文化库”' }
        ]
    },
    {
        id: 't18',
        boardId: 'amino',
        title: '关于建立 南武-阿米諾斯坦 青年社会主義論壇的倡議',
        author: '跨境交流員',
        lastActive: '2031-10-26 12:00',
        posts: [
            { id: 1, number: 1, author: '跨境交流員', timestamp: '2031-10-26 08:30', content: '我们需要一个长效机制，让两国的进步青年能实时探讨联合主义理论和技术合作' },
            { id: 2, number: 2, author: '哈奇米', timestamp: '2031-10-26 09:15', content: '支持！我们可以利用全联网实现实时语音翻译，解决语言隔阂' },
            { id: 3, number: 3, author: '翻譯官', timestamp: '2031-10-26 10:45', content: '正语与阿米诺斯语的互译大模型已经训练完成了' },
            { id: 4, number: 4, author: '跨境交流員', timestamp: '2031-10-26 12:00', content: '那就这么定了，下月开启第一届线上全会！' }
        ]
    },

    // --- 特別管区建設 板塊 ---
    {
        id: 't19',
        boardId: 'reconstruction',
        title: '海実府（舊武塚地方）：全面拆除旧貧民窟，建設生活微区',
        author: '海実工程組',
        lastActive: '2031-10-26 14:30',
        posts: [
            { id: 1, number: 1, author: '海実工程組', timestamp: '2031-10-26 09:00', content: '原武塚管辖时期的脏乱差街区正在清理，未来将规划为八海样式的亲水住宅区' },
            { id: 2, number: 2, author: '海実当地人', timestamp: '2031-10-26 10:20', content: '终于告别那种压抑的环境了！感谢南武联合党的帮助' },
            { id: 3, number: 3, author: '城市規劃師', timestamp: '2031-10-26 11:50', content: '我们将保留一部分旧废墟作为“争取解放”的纪念馆' },
            { id: 4, number: 4, author: '海実工程組', timestamp: '2031-10-26 14:30', content: '这是愈合模块化建设的第一阶段，工程进度每天都在全联网同步' }
        ]
    },
    {
        id: 't20',
        boardId: 'reconstruction',
        title: '南国地方雛塚県：首個联合主义農場正式運作',
        author: '南国建設者',
        lastActive: '2031-10-26 15:00',
        posts: [
            { id: 1, number: 1, author: '南国建設者', timestamp: '2031-10-26 10:30', content: '虽然南国还处于军管和重建并行的状态，但群众对联合所有制的接受程度极高' },
            { id: 2, number: 2, author: '南南同志', timestamp: '2031-10-26 11:45', content: '只要能过上本部都那样有保障的生活，大家干劲都很足' },
            { id: 3, number: 3, author: '理論指導員', timestamp: '2031-10-26 13:20', content: '要警惕文国伪政权的残余思潮干扰，必须加强理论宣传' },
            { id: 4, number: 4, author: '南国建設者', timestamp: '2031-10-26 15:00', content: '是的，广播站每天都在播放香淳思想讲座' }
        ]
    },
    {
        id: 't21',
        boardId: 'reconstruction',
        title: '【報道】特別管区青少年足球賽在綾華道成功舉辦',
        author: '文化体育報',
        lastActive: '2031-10-26 22:00',
        posts: [
            { id: 1, number: 1, author: '文化体育報', timestamp: '2031-10-26 18:00', content: '来自本部都与海实府的青少年们切磋球技，体现了全南武一家亲' },
            { id: 2, number: 2, author: '球場观众', timestamp: '2031-10-26 19:10', content: '海实有个小伙子踢得真不错，技术非常老练' },
            { id: 3, number: 3, author: '体育教官', timestamp: '2031-10-26 21:15', content: '体育也是通过强健体魄来更好地进行社会建设' },
            { id: 4, number: 4, author: '文化体育報', timestamp: '2031-10-26 22:00', content: '下一届比赛将在本部都奥林匹克中心举行，期待更多交流' }
        ]
    }
]