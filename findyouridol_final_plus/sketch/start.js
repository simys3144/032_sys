var bkImage;
var genieshow;
var genie;
var genie2;
var cautiongenie;
var appearance;
var maCover;
var waCover;
var skill;
var msCover;
var wsCover;
var personality;
var mpCover;
var wpCover;
var wholeFont;
var bodyFont;
var personality1;
var skill1;
var appearance1;
var gender;
var heart; //커서 하트이미지
var answers = [];
var vQ = [];
var tQ = [];
var pQ = [];
var wvQ = [];
var wtQ = [];
var wpQ = [];
let maleImgs = [];
let maleNum = 86 //일단 남자아이돌 총 86명
let femaleImgs = [];
let femaleNum = 106;
let s1;
let s2;


// this.preload= function()
// {
// for(let i=0; i<picnum; i++){
// imgs[i] = loadImage('maleidol'+i+'jpg');
// }

function preload() {
  bkImage = loadImage("img/start.jpg");
  genieshow = loadImage("img/showgenie.jpg");
  genie = loadImage("img/genie.png");
  genie2 = loadImage("img/thinkinggenie.png");
  cautiongenie = loadImage("img/caution.jpg");
  appearance = loadImage("img/maleAppearance.jpg");
  maCover = loadImage("img/maleAppearanceCover.jpg");
  waCover = loadImage("img/femaleAppearanceCover.jpg");
  skill = loadImage("img/maleSkill.jpg");
  msCover = loadImage("img/maleSkillCover.jpg");
  wsCover = loadImage("img/femaleSkillCover.jpg");
  personality = loadImage("img/malePersonality.jpg");
  mpCover = loadImage("img/malePersonalityCover.jpg");
  wpCover = loadImage("img/femalePersonalityCover.jpg");
  appearance1 = loadImage("img/femaleAppearance.jpg");
  skill1 = loadImage("img/femaleSkill.jpg");
  personality1 = loadImage("img/femalePersonality.jpg");
  gender = loadImage("img/choosegender.jpg");
  heart = loadImage("img/heart.png"); //하트 커서이미지
  wholeFont = loadFont("font/YanoljaR.ttf");
  bodyFont = loadFont("font/BinggraeTaom.otf");
  // textSize(14);
  s1 = loadSound('sound/a1.mp3');
  s2 = loadSound('sound/pop.mp3');

  for (let i = 1; i < maleNum + 1; i++) {
    maleImgs[i] = loadImage('img/maleidol' + i + '.jpg');
  }

  for (let i = 1; i < femaleNum + 1; i++) {
    femaleImgs[i] = loadImage('img/femaleidol' + i + '.jpg');
  }
}

function setup() {
  createCanvas(bkImage.width, bkImage.height);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  vQ = ["쉽게 분위기부터 시작해 볼까요?\n어떤 쪽이 더 좋으세요?", ["냉미남", "온미남"], //VQ0
    "그렇군요.\n그럼 얼굴형은 어느 쪽이 좋을까요?", ["갸름한 얼굴형", "동글동글한 얼굴형"], //VQ1
    "그의 눈에 어떤 매력 포인트가 있을까요?", ["쌍꺼풀 있는 큰 눈", "매력적인 무쌍, 속쌍 눈"], //VQ2
    "이 면에서는요?", ["카리스마 있는 눈빛", "살살 녹는 눈웃음"], //VQ3
    "그거 좋네요.\n키는 어느정도면 좋을까요?", ["큰 키", "아담한 키", "중간 키"], //VQ4
    "마지막 외모 질문이에요.\n어떤 체형을 더 선호하세요?", ["슬림한", "건강한, 탄탄한"]
  ]; //VQ5
  tQ = ["당신의 최애의 노래 실력은...", ["뛰어났으면 좋겠다", "못 해도 괜찮다"], //TQ0
    "그러시군요.\n그렇다면 선호하는 음색은 있으신가요?", ["허스키한 음색", "맑은 음색"], //TQ1
    "이번엔 춤 실력에 대해 얘기해 보죠.", ["뛰어났으면 좋겠다", "못 해도 괜찮다"], //TQ2
    "어떤 춤선이 더 좋으세요?", ["굵고 묵직한 춤 선", "가볍고 살랑살랑한 춤 선"], //TQ3
    "랩을 잘 하면 좋을까요?", ["잘 했으면 좋겠다", "못 해도 괜찮다"], //TQ4
    "실력 부분 마지막 질문이에요.\n작사/작곡을 할 줄 아는 사람이면 좋을까요?", ["작사작곡을 하는 사람이 좋다", "못 해도 괜찮다"]
  ]; //TQ5
  pQ = ["당신의 최애는 어떤 쪽에 가까울까요?", ["형아미", "막내미"], //PQ0
    "그의 성격은...", ["진지, 차분", "장난기, 비글미"], //PQ1
    "애교 스킬은 어느 정도?", ["누르면 나오는 애교 자판기", "애교가 뭐예요..?"], //PQ2
    "그런 취향이시군요.\n그렇다면 예능감은 어느 정도?", ["예능 하드캐리 유잼 캐릭터", "노잼이어도 괜찮아"], //PQ3
    "마지막 질문이에요.\n당신의 최애는 그룹 내에서 어떤 캐릭터일까요?", ["멤버들을 놀리는", "멤버들에게 놀림당하는"]
  ] //PQ4
  wvQ = ["쉽게 분위기부터 시작해 볼까요?\n어떤 쪽이 더 좋으세요?", ["냉미녀", "온미녀"], //VQ0
    "그렇군요.\n그럼 얼굴형은 어느 쪽이 좋을까요?", ["갸름한 얼굴형", "동글동글한 얼굴형"], //VQ1
    "그의 눈에 어떤 매력 포인트가 있을까요?", ["쌍꺼풀 있는 큰 눈", "매력적인 무쌍, 속쌍 눈"], //VQ2
    "이 면에서는요?", ["카리스마 있는 눈빛", "살살 녹는 눈웃음"], //VQ3
    "그거 좋네요.\n키는 어느정도면 좋을까요?", ["큰 키", "아담한 키", "중간 키"],
    "마지막 외모 질문이에요.\n어떤 체형을 더 선호하세요?", ["슬림한", "건강한, 탄탄한"]
  ]; //VQ4
  wtQ = ["당신의 최애의 노래 실력은...", ["뛰어났으면 좋겠다", "못 해도 괜찮다"], //TQ0
    "그러시군요.\n그렇다면 선호하는 음색은 있으신가요?", ["허스키한 음색", "맑은 음색"], //TQ1
    "이번엔 춤 실력에 대해 얘기해 보죠.", ["뛰어났으면 좋겠다", "못 해도 괜찮다"], //TQ2
    "어떤 춤선이 더 좋으세요?", ["굵고 묵직한 춤 선", "가볍고 살랑살랑한 춤 선"], //TQ3
    "랩을 잘 하면 좋을까요?", ["잘 했으면 좋겠다", "못 해도 괜찮다"], //TQ4
    "실력 부분 마지막 질문이에요.\n작사/작곡을 할 줄 아는 사람이면 좋을까요?", ["작사작곡을 하는 사람이 좋다", "못 해도 괜찮다"]
  ]; //TQ5
  wpQ = ["당신의 최애는 어떤 쪽에 가까울까요?", ["언니미", "막내미"], //PQ0
    "그의 성격은...", ["진지, 차분", "장난기, 비글미"], //PQ1
    "애교 스킬은 어느 정도?", ["누르면 나오는 애교 자판기", "애교가 뭐예요..?"], //PQ2
    "그런 취향이시군요.\n그렇다면 예능감은 어느 정도?", ["예능 하드캐리 유잼 캐릭터", "노잼이어도 괜찮아"], //PQ3
    "마지막 질문이에요.\n당신의 최애는 그룹 내에서 어떤 캐릭터일까요?", ["멤버들을 놀리는", "멤버들에게 놀림당하는"]
  ] //PQ4

  var mgr = new SceneManager();
  mgr.bkImage = bkImage; // inject bkImage property
  mgr.genieshow = genieshow;
  mgr.genie = genie;
  mgr.genie2 = genie2;
  mgr.cautiongenie = cautiongenie;
  mgr.appearance = appearance;
  mgr.maCover = maCover;
  mgr.waCover = waCover;
  mgr.skill = skill;
  mgr.msCover = msCover;
  mgr.wsCover = wsCover;
  mgr.personality = personality;
  mgr.mpCover = mpCover;
  mgr.wpCover = wpCover;
  mgr.appearance1 = appearance1;
  mgr.skill1 = skill1;
  mgr.personality1 = personality1;
  mgr.gender = gender;
  mgr.users = answers;
  mgr.heart = heart; //하트 커서이미지
  mgr.vQ = vQ;
  mgr.tQ = tQ;
  mgr.pQ = pQ;
  mgr.wvQ = wvQ;
  mgr.wtQ = wtQ;
  mgr.wpQ = wpQ;
  mgr.wire();
  mgr.addScene(Intro);
  // mgr.addScene(VQ0);
  // mgr.addScene(VQ1);

  mgr.showNextScene();
}
