const yearElement = document.querySelector("#year");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const homepageShell = document.querySelector(".homepage-shell");
const navLinks = document.querySelectorAll(".nav a, .logo, .hero-actions a");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageStorageKey = "hairan-homepage-language";

const translations = {
  "返回首页": "Back to Home",
  "打开导航菜单": "Open navigation menu",
  "Hairan Zhang 头像": "Portrait of Hairan Zhang",
  "主导航": "Main navigation",
  "项目页导航": "Project page navigation",
  "主页与横向扩展板块浏览": "Homepage and horizontal section browsing",
  "首页信息纵向浏览": "Vertical homepage information browsing",
  "研究方向": "Focus areas",
  "个人概览": "Profile overview",
  "相关能力": "Related competencies",
  "工作主线": "Experience Focus",
  "项目经历": "Project Experience",
  "联系方式": "Contact",
  "首页": "Home",
  "学生支持": "Student Support",
  "外教运营": "Foreign Teacher Operations",
  "申报治理": "Application & Governance",
  "Personal Homepage": "个人主页",
  "International Education & Partnership Development，关注合作办学、国际教育项目开发，以及东南亚教育资源与国内院校之间的长期合作连接。": "International Education & Partnership Development, focusing on joint education programs, international program development, and long-term cooperation between Southeast Asian education resources and domestic institutions.",
  "Joint Education Programs": "合作办学项目",
  "International Program Operations": "国际项目运营",
  "Foreign Teacher Management": "外教管理",
  "Cross-Cultural Communication": "跨文化沟通",
  "查看项目经历": "View Projects",
  "获取联系方式": "Get Contact Details",
  "Professional Focus": "专业方向",
  "International Education & Partnerships": "国际教育与院校合作",
  "聚焦跨境教育合作项目的申报、运营、管理与市场开发，连接东南亚教育资源与国内院校合作需求。": "Focused on application, operations, management, and market development for cross-border education partnership projects, connecting Southeast Asian education resources with the cooperation needs of domestic institutions.",
  "Students Landed": "学生落地支持",
  "Short-Term Teachers": "短期外教",
  "Featured Projects": "重点项目",
  "Profile": "个人简介",
  "Professional Profile": "专业简介",
  "我关注合作办学与国际教育项目的发展机会，主要面向东南亚及英语国家教育资源，推动海外院校、国内高校、学生与合作方之间建立清晰、稳定、可持续的合作关系。工作中更重视项目流程、材料逻辑、院校沟通、落地执行与长期运营，而不是停留在单一事务处理环节。": "I focus on development opportunities in joint education and international education projects, primarily working with education resources in Southeast Asia and English-speaking countries. My work supports clear, stable, and sustainable relationships among overseas institutions, domestic universities, students, and partners. I place particular emphasis on project workflows, document logic, university communication, on-site delivery, and long-term operations rather than isolated administrative tasks.",
  "我的实践经验覆盖学生赴海外学习支持、短期外教来华授课运营、合作办学机构申报材料、招生宣传、院校会议与外方代表接待。希望以务实、审慎且国际化的方式，支持国内院校拓展高质量合作渠道，并推动合作办学项目形成长期价值。": "My experience covers student overseas study support, short-term foreign teacher operations in China, application materials for joint education institutions, recruitment promotion, university meetings, and foreign representative reception. I aim to support domestic institutions in expanding high-quality partnership channels and creating long-term value for joint education programs through a practical, prudent, and international approach.",
  "Education": "教育经历",
  "教育经历": "Education",
  "本科阶段": "Undergraduate Studies",
  "苏州工学院 · Suzhou Institute of Technology": "Suzhou Institute of Technology",
  "英语专业 · Bachelor of Arts": "English Major · Bachelor of Arts",
  "本科阶段主修英语专业，系统学习高级英语、英语教学法、商务翻译、英语视听说与商务英语写作等课程，形成语言、教育与跨文化沟通复合基础。": "Majored in English as an undergraduate, with systematic coursework in Advanced English, English Teaching Methodology, Business Translation, English Listening and Speaking, and Business English Writing, forming a combined foundation in language, education, and cross-cultural communication.",
  "语言能力": "Language Proficiency",
  "Language Proficiency": "语言能力",
  "具备英语专业学习背景与专业八级等语言能力证明，可支持英文材料处理、双语沟通、商务翻译与跨文化项目协同。": "With an English major background and language qualifications including TEM-8, I can support English document handling, bilingual communication, business translation, and cross-cultural project coordination.",
  "Competencies": "核心能力",
  "核心能力": "Core Competencies",
  "Joint Education Program Operations": "合作办学项目运营",
  "Student Mobility Support": "学生流动支持",
  "Application Materials Coordination": "申报材料统筹",
  "EMGS / E-VISA Follow-up": "EMGS / E-VISA 跟进",
  "On-site Event Execution": "现场活动执行",
  "University Partnership Communication": "院校合作沟通",
  "Bilingual Education Translation": "双语教育文件翻译",
  "Team Coordination": "团队协调",
  "Contact": "联系我",
  "欢迎就合作办学、国际教育项目、外教管理、海外接待、院校合作沟通与英语教育项目方向联系我。": "Please feel free to contact me regarding joint education programs, international education projects, foreign teacher management, overseas reception, university partnership communication, and English education programs.",
  "Email: 18896733101@163.com": "邮箱：18896733101@163.com",
  "Phone: +86 188-9673-3101": "电话：+86 188-9673-3101",
  "当前重点": "Current Focus",
  "中外合作办学项目执行与院校合作支持": "Joint Education Program Execution & University Partnership Support",
  "围绕合作办学项目申报、项目运营、学生出国服务、外教来华授课、院校会议支持与外方接待持续积累一线项目经验。": "I continue to build hands-on experience across joint education program applications, project operations, student overseas services, foreign teacher teaching in China, university meeting support, and foreign representative reception.",
  "项目运营": "Project Operations",
  "学生海外学习与短期外教来华运营": "Student Overseas Study & Short-Term Foreign Teacher Operations",
  "参与学生赴马来西亚学习、短期外教来华授课、注册入学、入境指引、接机注册、住宿协调、授课监督与费用结算等完整执行环节。": "I have participated in full execution processes including student study programs in Malaysia, short-term foreign teacher teaching in China, enrollment registration, entry guidance, airport pickup and registration, accommodation coordination, teaching supervision, and expense settlement.",
  "项目申报": "Project Application",
  "合作办学机构申报材料与文件统筹": "Application Materials & Document Coordination for Joint Education Institutions",
  "参与课程大纲、师资简历、人才培养方案等核心申报材料的翻译、校对、补充、整合、装订与上传，并在项目中承担材料组长职责。": "I have worked on translation, proofreading, supplementation, integration, binding, and uploading of core application materials such as course syllabi, faculty CVs, and training plans, and have served as materials lead in project execution.",
  "会议与市场": "Meetings & Market Support",
  "院校会议、外方接待与招生宣传支持": "University Meetings, Foreign Reception & Recruitment Promotion Support",
  "支持合作办学机构揭牌仪式、联合管理委员会、外方代表接待、新生报到会、家长见面会与现场宣讲等线下活动。": "I have supported offline activities including unveiling ceremonies for joint education institutions, joint management committee meetings, foreign representative reception, freshman registration meetings, parent meetings, and on-site presentations.",
  "本科期间 / 早期经历": "Undergraduate / Early Experience",
  "English Teaching Practice · 英语教学与辅导实践": "English Teaching & Tutoring Practice",
  "早期面向小学高段、初中及口语基础薄弱学生开展英语辅导与能力提升，为后续国际教育项目沟通、学生咨询与双语材料处理奠定基础。": "Early teaching practice with upper-primary students, junior secondary students, and learners with weaker spoken English foundations built a basis for later communication in international education projects, student consultation, and bilingual document handling.",
  "Project Experience": "项目经历",
  "Student Development & Recruitment": "学生发展与招生支持",
  "学生发展与招生支持": "Student Development & Recruitment",
  "Student Mobility": "学生流动",
  "Enrollment Support": "入学支持",
  "Recruitment Communication": "招生沟通",
  "聚焦学生赴海外学习前后的材料准备、流程跟进、落地注册，以及招生宣传、学生咨询与家长沟通等前端支持工作。": "Focused on front-end support for students before and after overseas study, including document preparation, process follow-up, on-site registration, recruitment promotion, student consultation, and parent communication.",
  "2 Projects": "2 个项目",
  "Mobility": "学生流动",
  "Recruitment": "招生支持",
  "查看详情": "View Details",
  "Foreign Teacher Operations": "外教运营与项目落地",
  "外教运营与项目落地": "Foreign Teacher Operations & Project Delivery",
  "Teacher Recruitment": "外教招聘",
  "Program Operations": "项目运营",
  "围绕短期外教从招聘面试、邀请手续、行前沟通到接机、注册、授课监督和生活协调的全流程落地执行。": "Covers the full delivery process for short-term foreign teachers, from recruitment interviews, invitation procedures, and pre-departure communication to airport pickup, registration, teaching supervision, and daily-life coordination.",
  "Operations": "运营执行",
  "On-site Delivery": "现场落地",
  "Joint Program Application & Governance": "合作办学申报与院校治理",
  "合作办学申报与院校治理": "Joint Program Application & Governance",
  "覆盖合作办学机构申报材料翻译整合、院校会议支持、外方代表接待、揭牌仪式与联合管理委员会等关键节点。": "Covers key stages such as translation and integration of application materials for joint education institutions, university meeting support, foreign representative reception, unveiling ceremonies, and joint management committee meetings.",
  "3 Projects": "3 个项目",
  "Application": "申报材料",
  "Governance": "治理支持",
  "返回项目分类": "Back to Project Categories",
  "Selected Projects": "精选项目",
  "相关项目": "Related Projects",
  "这一类型聚焦学生端与招生端的项目支持能力，连接海外学习落地、学生咨询、家长沟通与现场宣传等环节。": "This category focuses on student-side and recruitment-side project support, connecting overseas study delivery, student consultation, parent communication, and on-site promotion.",
  "这一类型强调将复杂的海外学习和招生沟通流程拆解为清晰、可执行、可持续跟进的工作节点。": "This category emphasizes breaking down complex overseas study and recruitment communication processes into clear, executable, and sustainably trackable work nodes.",
  "这一类型聚焦短期外教项目从人选确认到现场教学落地的执行能力，强调流程、细节、跨文化沟通与在地协调。": "This category focuses on the delivery capabilities required for short-term foreign teacher projects, from candidate confirmation to on-site teaching implementation, with an emphasis on processes, details, cross-cultural communication, and local coordination.",
  "这一类型重点体现跨方沟通、节点跟进、现场协调、生活支持、费用结算与授课监督等综合落地能力。": "This category highlights comprehensive delivery capabilities including cross-party communication, milestone follow-up, on-site coordination, daily-life support, expense settlement, and teaching supervision.",
  "这一类型聚焦从材料逻辑到关系维护的综合项目支持能力，连接申报文件、正式会议、外方接待与后续合作推进。": "This category focuses on comprehensive project support from document logic to relationship maintenance, connecting application files, formal meetings, foreign representative reception, and follow-up cooperation.",
  "南昌理工学院 × 马来西亚亚太科技大学": "Nanchang Institute of Technology × Asia Pacific University of Technology & Innovation, Malaysia",
  "桂林理工大学 × 马来西亚多媒体大学": "Guilin University of Technology × Multimedia University, Malaysia",
  "学生赴马来西亚学习项目支持": "Support for Students Studying in Malaysia",
  "Student Mobility & Enrollment Support": "学生流动与入学支持",
  "协助完成 37 名学生赴马来西亚学习前后的全流程支持，覆盖文件审核、出行准备、注册入学与落地指导等环节。": "Assisted with full-process support for 37 students before and after studying in Malaysia, covering document review, travel preparation, enrollment registration, and on-site guidance.",
  "独立整理分步骤指导文件，协助准备护照、证件照、健康声明、学信网认证、毕业证公证等材料。": "Independently organized step-by-step guidance documents and assisted with materials such as passports, ID photos, health declarations, CHSI verification, and notarized graduation certificates.",
  "持续跟进 EMGS 文件上传、E-VISA 申请、入境流程、机场出行指引及入学前体检事项。": "Continuously followed up on EMGS document uploads, E-VISA applications, entry procedures, airport travel guidance, and pre-enrollment medical check items.",
  "37 名学生均顺利完成注册入学，实现阶段性 100% 顺利落地与入学。": "All 37 students successfully completed registration and enrollment, achieving 100% smooth arrival and enrollment for this stage.",
  "学生赴马来西亚学习落地支持": "On-site Support for Students Studying in Malaysia",
  "Student Mobility & Landing Support": "学生流动与落地支持",
  "参与南昌理工学院 37 名学生赴马来西亚亚太科技大学学习前后的手续与落地支持工作。": "Supported the procedures and on-site arrangements for 37 students from Nanchang Institute of Technology studying at Asia Pacific University of Technology & Innovation in Malaysia.",
  "跟进学生 EMGS、E-VISA 等材料提交与进度确认。": "Followed up on EMGS, E-VISA, and related document submissions and status confirmations.",
  "协助学生到校注册、接机、住宿安排及学习期间综合支持。": "Assisted with campus registration, airport pickup, accommodation arrangements, and general support during the study period.",
  "参与 APU China Office 与校方之间的沟通协调，保障学生顺利落地。": "Participated in coordination between the APU China Office and the institution to ensure smooth student arrival and settlement.",
  "昆明文理学院 × 马来西亚亚太科技大学": "Kunming University of Arts and Sciences × Asia Pacific University of Technology & Innovation, Malaysia",
  "桂林师范学院 × 韩国白石大学": "Guilin Normal College × Baekseok University, South Korea",
  "2025 届学生招生宣传支持": "Recruitment Promotion Support for the Class of 2025",
  "Recruitment Promotion Support": "招生宣传支持",
  "参与 2025 届学生招生宣传工作，包括前期全国生源联系、新生报到会支持、家长见面会参与及现场宣讲协助。": "Participated in recruitment promotion for the Class of 2025, including early-stage nationwide student source outreach, freshman registration support, parent meeting participation, and on-site presentation assistance.",
  "参与招生前端沟通与现场活动执行。": "Participated in front-end recruitment communication and on-site event execution.",
  "支持学生咨询、家长沟通与项目说明。": "Supported student consultation, parent communication, and program explanations.",
  "积累面向学生和家长介绍合作办学项目的现场沟通经验。": "Built on-site communication experience in introducing joint education programs to students and parents.",
  "招生宣传与学生咨询支持": "Recruitment Promotion & Student Consultation Support",
  "Recruitment Events & Consultation": "招生宣传与咨询",
  "参与昆明文理学院新生报道会、家长见面会及合作办学项目现场宣讲工作。": "Participated in freshman registration meetings, parent meetings, and on-site presentations for a joint education program at Kunming University of Arts and Sciences.",
  "作为 APU China Office 代表接待学生及家长咨询，协助解答项目模式、学习安排及后续流程。": "As an APU China Office representative, received inquiries from students and parents and helped explain the program model, study arrangements, and follow-up processes.",
  "配合现场宣讲和项目介绍，支持学生与家长建立对合作办学项目的基本理解。": "Supported on-site presentations and program introductions to help students and parents understand the joint education program.",
  "协助收集学生反馈与咨询重点，为后续招生沟通提供参考。": "Helped collect student feedback and key inquiry points for future recruitment communication.",
  "长春电子科技学院 × 外籍教师项目": "Changchun College of Electronic Technology × Foreign Teacher Project",
  "廊坊师范学院 × 澳大利亚堪培拉大学": "Langfang Normal University × University of Canberra, Australia",
  "学分互认项目外教管理与学生转化支持": "Foreign Teacher Management & Student Conversion Support for Credit Recognition Program",
  "Foreign Teacher Operations & Student Conversion": "外教运营与学生转化",
  "负责 2025 年秋季学期两名自聘短期外教的全流程管理，并继续推进 2026 年春季学期三名新外教管理工作。": "Managed the full process for two self-hired short-term foreign teachers in the Fall 2025 semester and continued advancing management work for three new foreign teachers in Spring 2026.",
  "覆盖外教招聘面试、邀请手续、机票引导、课表协调、住宿安排、接机、报备、进校注册与授课监督。": "Covered foreign teacher recruitment interviews, invitation procedures, flight guidance, timetable coordination, accommodation arrangements, airport pickup, reporting, campus registration, and teaching supervision.",
  "协调翻译志愿者、课件审核、生活需求远程协助、费用结算及送机等事项。": "Coordinated translation volunteers, courseware review, remote assistance for daily-life needs, expense settlement, and airport drop-off.",
  "协助驻校老师完成学生谈话，推动 5 名学生确定赴澳大利亚堪培拉大学海外学习路径。": "Assisted the on-campus teacher with student conversations and helped five students confirm an overseas study pathway to the University of Canberra in Australia.",
  "短期外教授课运营支持": "Short-Term Foreign Teacher Teaching Operations Support",
  "Foreign Teacher Operations Support": "外教运营支持",
  "参与 10 名短期外教来华授课项目的运营执行，支持外教在校教学与生活安排。": "Participated in the operational delivery of a project involving 10 short-term foreign teachers teaching in China, supporting their teaching and daily-life arrangements on campus.",
  "参与外教招聘面试、邀请手续、行前沟通、接机、注册及住宿协调等环节。": "Participated in foreign teacher recruitment interviews, invitation procedures, pre-departure communication, airport pickup, registration, and accommodation coordination.",
  "监督外教授课情况，协助处理教学期间的日常沟通与现场问题。": "Monitored foreign teachers' classroom delivery and helped handle daily communication and on-site issues during teaching.",
  "协助完成项目相关费用结算及后续沟通。": "Assisted with project-related expense settlement and follow-up communication.",
  "江苏师范大学科文学院 × 马来西亚亚太科技大学": "Jiangsu Normal University Kewen College × Asia Pacific University of Technology & Innovation, Malaysia",
  "河南工程学院 × 澳大利亚堪培拉大学": "Henan University of Engineering × University of Canberra, Australia",
  "合作办学项目短期外教运营支持": "Short-Term Foreign Teacher Operations Support for Joint Education Program",
  "Short-Term Foreign Teacher Operations": "短期外教运营",
  "参与 2026 年春季学期短期外教运营工作，项目由合作方 JDMed、IVAS 共同提供外教资源。": "Participated in short-term foreign teacher operations for the Spring 2026 semester, with foreign teacher resources jointly provided by partners JDMed and IVAS.",
  "负责后续面试、沟通协调、接机、注册及落地执行。": "Responsible for follow-up interviews, communication coordination, airport pickup, registration, and on-site delivery.",
  "项目共涉及 5 名自聘短期外教。": "The project involved five self-hired short-term foreign teachers.",
  "复用廊坊师范学院项目中沉淀的外教运营流程，保障短期授课顺利开展。": "Reused the foreign teacher operations workflow developed in the Langfang Normal University project to ensure smooth short-term teaching delivery.",
  "短期外教项目基础运营参与": "Basic Operations Support for Short-Term Foreign Teacher Project",
  "Short-Term Teacher Project Operations": "短期外教项目运营",
  "参与短期外教授课项目的基础运营支持，了解外教项目从准备到落地的执行流程。": "Participated in basic operational support for a short-term foreign teacher teaching project and gained an understanding of the delivery process from preparation to implementation.",
  "参与外教到校前后的沟通、接待和基础协调工作。": "Participated in communication, reception, and basic coordination before and after foreign teachers arrived on campus.",
  "支持外教授课期间的现场信息传递与需求反馈。": "Supported on-site information sharing and needs feedback during foreign teachers' teaching period.",
  "积累外教项目运营、院校对接和跨文化协调的一线经验。": "Built hands-on experience in foreign teacher project operations, university coordination, and cross-cultural communication.",
  "桂林理工大学 × 马来西亚亚太科技大学": "Guilin University of Technology × Asia Pacific University of Technology & Innovation, Malaysia",
  "揭牌仪式与联合管理委员会支持": "Unveiling Ceremony & Joint Management Committee Support",
  "Foreign University Representative Support": "外方院校代表支持",
  "作为外方院校国内代表，参与合作办学机构揭牌仪式及双方第一次联合管理委员会相关工作。": "As a domestic representative of the foreign institution, participated in the unveiling ceremony for a joint education institution and the first joint management committee meeting between both parties.",
  "负责会议记录与会议信息传达，协助会后沟通。": "Responsible for meeting minutes, meeting information sharing, and post-meeting communication support.",
  "参与接待 Prof. Ho Chin Kuan、Assoc. Prof. Ts. Dr. Tan Chin Ike、Assoc. Prof. Ts. Dr. Thang Ka Fei 等外方代表。": "Participated in receiving foreign representatives including Prof. Ho Chin Kuan, Assoc. Prof. Ts. Dr. Tan Chin Ike, and Assoc. Prof. Ts. Dr. Thang Ka Fei.",
  "旁听并记录第一次联合管理委员会内容，为项目后续推进提供支持。": "Observed and recorded the first joint management committee meeting to support subsequent project advancement.",
  "河南工程学院 × 马来西亚多媒体大学": "Henan University of Engineering × Multimedia University, Malaysia",
  "合作办学机构申报材料支持": "Application Materials Support for Joint Education Institution",
  "Application Materials Translation & Review": "申报材料翻译与审核",
  "参与合作办学机构申报文件的校对与翻译工作，涉及三个专业的课程大纲、师资简历、人才培养方案等核心材料。": "Participated in proofreading and translating application files for a joint education institution, covering core materials for three majors including course syllabi, faculty CVs, and training plans.",
  "支持教育类文件翻译、材料校对和专业内容整理。": "Supported translation of education documents, material proofreading, and professional content organization.",
  "初步掌握中外合作办学机构申报文件组成、材料逻辑及申报流程。": "Developed an initial understanding of document composition, material logic, and application procedures for Sino-foreign joint education institutions.",
  "围绕课程、师资与培养方案等核心材料提升双语文件处理能力。": "Improved bilingual document handling capabilities around core materials such as courses, faculty, and training plans.",
  "焦作大学 × 马来西亚亚太科技大学": "Jiaozuo University × Asia Pacific University of Technology & Innovation, Malaysia",
  "合作办学机构申报全流程参与": "Full-Process Participation in Joint Education Institution Application",
  "Materials Lead & Temporary Project Coordinator": "材料组长与临时项目协调人",
  "完整参与申报文件准备与整合流程，并担任材料组长及项目临时主管，带领 2 名员工完成全部外方文件翻译。": "Participated in the full preparation and integration process for application documents, serving as materials lead and temporary project coordinator while leading two staff members to complete all foreign-party document translations.",
  "监督并协助申报材料的补充、完善与整理，最终与焦作大学校方共同完成整合、装订与上传。": "Supervised and assisted with supplementation, refinement, and organization of application materials, ultimately completing integration, binding, and uploading together with Jiaozuo University.",
  "作为外方代表参与双方初次会议，协助签订合作谅解备忘录及机构协议书。": "Participated in the first meeting between both parties as a foreign-party representative and assisted with signing the memorandum of understanding and institutional agreement.",
  "会议结束后参与接待 Prof. Ho Chin Kuan，为双方后续合作推进提供支持。": "Participated in receiving Prof. Ho Chin Kuan after the meeting and supported follow-up cooperation between both parties."
};

const reverseTranslations = Object.fromEntries(
  Object.entries(translations).map(([chineseText, englishText]) => [englishText, chineseText])
);

const textSelectors = [
  "a",
  "button",
  "h1",
  "h2",
  "h3",
  "p",
  "span",
  "li",
  ".date-pill"
].join(", ");

const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
const includesChinese = (text) => /[\u3400-\u9fff]/.test(text);

const getSavedLanguage = () => {
  try {
    return window.localStorage?.getItem(languageStorageKey) || "zh";
  } catch {
    return "zh";
  }
};

const saveLanguage = (language) => {
  try {
    window.localStorage?.setItem(languageStorageKey, language);
  } catch {
    return;
  }
};

const translateSource = (sourceText, language) => {
  if (language === "en") {
    return includesChinese(sourceText) ? translations[sourceText] : sourceText;
  }

  return includesChinese(sourceText) ? sourceText : translations[sourceText] || reverseTranslations[sourceText];
};

const setElementText = (element, language) => {
  if (element.id === "year" || element.closest(".portrait-ring")) {
    return;
  }

  if (element.children.length > 0 && !element.matches("button")) {
    return;
  }

  const sourceText = element.dataset.translationSource || normalizeText(element.textContent);
  const translatedText = translateSource(sourceText, language);

  if (!translatedText) {
    return;
  }

  element.dataset.translationSource = sourceText;
  element.textContent = translatedText;
};

const updateFooter = (language) => {
  const footer = document.querySelector(".site-footer p");

  if (!footer || !yearElement) {
    return;
  }

  const year = yearElement.textContent || new Date().getFullYear();
  const suffix = language === "en"
    ? "Focused on International Education Partnerships."
    : "专注国际教育与院校合作。";
  footer.innerHTML = `© <span id="year">${year}</span> Hairan(Sam) Zhang. ${suffix}`;
};

const updateDocumentMeta = (language) => {
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";

  const title = language === "en"
    ? "Hairan(Sam) Zhang | Personal Homepage"
    : "Hairan(Sam) Zhang | 个人主页";
  document.title = title;

  const description = document.querySelector("meta[name='description']");
  if (description) {
    description.content = language === "en"
      ? "Hairan(Sam) Zhang's personal homepage, presenting professional practice in joint education programs, international education, project application, project operations, and cross-cultural communication."
      : "Hairan(Sam) Zhang 的个人主页，展示合作办学、国际教育、项目申报、项目运营与跨文化沟通方向的专业实践。";
  }
};

const updateLanguageToggle = (language) => {
  if (!languageToggle) {
    return;
  }

  languageToggle.textContent = language === "en" ? "中文" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Chinese" : "Switch to English");
  languageToggle.setAttribute("title", language === "en" ? "Switch to Chinese" : "Switch to English");
};

const updateAttributes = (language) => {
  document.querySelectorAll("[aria-label]").forEach((element) => {
    if (element === languageToggle) {
      return;
    }

    const sourceText = element.dataset.ariaSource || element.getAttribute("aria-label");
    const translatedText = translateSource(sourceText, language);

    if (translatedText) {
      element.dataset.ariaSource = sourceText;
      element.setAttribute("aria-label", translatedText);
    }
  });

  document.querySelectorAll("img[alt]").forEach((image) => {
    const sourceText = image.dataset.altSource || image.getAttribute("alt");
    const translatedText = translateSource(sourceText, language);

    if (translatedText) {
      image.dataset.altSource = sourceText;
      image.setAttribute("alt", translatedText);
    }
  });
};

const applyLanguage = (language) => {
  document.querySelectorAll(textSelectors).forEach((element) => setElementText(element, language));
  updateFooter(language);
  updateDocumentMeta(language);
  updateAttributes(language);
  updateLanguageToggle(language);
  saveLanguage(language);
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (languageToggle) {
  const savedLanguage = getSavedLanguage();
  applyLanguage(savedLanguage);

  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "en" ? "zh" : "en";
    applyLanguage(nextLanguage);
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("open");
    }
  });
}

if (homepageShell) {
  const sectionLinks = document.querySelectorAll(".nav a[href^='#']");
  const setActiveLink = (id) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      return;
    }

    link.addEventListener("click", (event) => {
      const target = document.querySelector(href);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      if (target.id === "home") {
        target.scrollTo({ top: 0, behavior: "smooth" });
      }
      history.replaceState(null, "", href);
      setActiveLink(target.id);
      window.setTimeout(() => setActiveLink(target.id), 700);
    });
  });

  const panelObserver = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (activeEntry?.target.id && activeEntry.target.id !== "home") {
        setActiveLink(activeEntry.target.id);
      }
    },
    {
      root: homepageShell,
      threshold: [0.45, 0.6, 0.75],
    }
  );

  document.querySelectorAll(".homepage-shell > section[id]").forEach((section) => {
    panelObserver.observe(section);
  });

  const homePanel = document.querySelector(".home-panel");
  const contactSection = document.querySelector("#contact");

  homePanel?.addEventListener("scroll", () => {
    if (!contactSection) {
      return;
    }

    const contactTop = contactSection.offsetTop - homePanel.scrollTop;
    const contactVisible = contactTop < homePanel.clientHeight * 0.9;

    if (contactVisible) {
      setActiveLink("contact");
    }
  });

  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);

    if (initialTarget) {
      requestAnimationFrame(() => {
        initialTarget.scrollIntoView({ block: "nearest", inline: "start" });
        setActiveLink(initialTarget.id);
      });
    }
  }
}
