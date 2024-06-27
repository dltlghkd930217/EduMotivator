var m = Object.defineProperty;
var u = (a, e, s) => e in a ? m(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s;
var n = (a, e, s) => u(a, typeof e != "symbol" ? e + "" : e, s);
class h {
  constructor() {
    n(this, "_mtvIndexKey", "Motivator_IndexKey");
    n(this, "_mtvTimeKey", "Motivator_TimeKey");
  }
  getCurrentMotivatorIndex(e) {
    const [s, t] = this.initializeKeys();
    if ((/* @__PURE__ */ new Date()).getTime() >= t) {
      this.setStorage(this._mtvTimeKey, this.getNextResetTime());
      const o = s + 1;
      return o < e ? (this.setStorage(this._mtvIndexKey, o), o) : (this.setStorage(this._mtvIndexKey, 0), 0);
    }
    return s;
  }
  initializeKeys() {
    let e = this.getStorage(this._mtvIndexKey), s = this.getStorage(this._mtvTimeKey);
    return e === null && (e = 0, this.setStorage(this._mtvIndexKey, 0)), s === null && (s = this.getNextResetTime(), this.setStorage(this._mtvTimeKey, s)), [e, s];
  }
  getNextResetTime() {
    const e = /* @__PURE__ */ new Date();
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime();
  }
  getStorage(e) {
    const s = localStorage.getItem(e);
    if (s)
      try {
        return JSON.parse(s);
      } catch (t) {
        return console.error("Error parsing storage value", t), null;
      }
    return null;
  }
  setStorage(e, s) {
    localStorage.setItem(e, JSON.stringify(s));
  }
}
let g = null;
function x() {
  return g === null && (g = new h()), g;
}
const i = [
  {
    index: 1,
    message: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    author: "미상"
  },
  {
    index: 2,
    message: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",
    author: "존 우든"
  },
  {
    index: 3,
    message: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
    author: "미상"
  },
  {
    index: 4,
    message: "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
    author: "짐 론"
  },
  {
    index: 5,
    message: "신뢰의 이유는 안전하거나 확실해서가 아니라, 위험을 감수할 용의가 있어서이다.",
    author: "미상"
  },
  {
    index: 6,
    message: "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
    author: "스와미 비베카난다"
  },
  {
    index: 7,
    message: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
    author: "월트 디즈니"
  },
  {
    index: 8,
    message: "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
    author: "미상"
  },
  {
    index: 9,
    message: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
    author: "미상"
  },
  {
    index: 10,
    message: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    author: "윈스턴 처칠"
  },
  {
    index: 11,
    message: "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
    author: "속담"
  },
  {
    index: 12,
    message: "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다.",
    author: "미상"
  },
  {
    index: 13,
    message: "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, 절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다.",
    author: "바입하브 샤"
  },
  {
    index: 14,
    message: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
    author: "크리스 그로서"
  },
  {
    index: 15,
    message: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
    author: "알버트 아인슈타인"
  },
  {
    index: 16,
    message: "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다.",
    author: "엘리너 루즈벨트"
  },
  {
    index: 17,
    message: "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
    author: "토마스 에디슨"
  },
  {
    index: 18,
    message: "당신이 자신의 시간을 가치있게 생각하지 않으면 남들도 마찬가지일 것이다. 시간과 재능을 막 나눠주지 말고 팔아라.",
    author: "킴 가스트"
  },
  {
    index: 19,
    message: "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다.",
    author: "데이비드 브링클리"
  },
  {
    index: 20,
    message: "당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.",
    author: "엘리너 루즈벨트"
  },
  {
    index: 21,
    message: "성공적인 삶의 비밀은 무엇을 하는 게 자신의 운명인지 찾아낸 다음 그걸 하는 것이다.",
    author: "헨리 포드"
  },
  {
    index: 22,
    message: "지옥을 겪고 있다면 계속 겪어 나가라.",
    author: "윈스턴 처칠"
  },
  {
    index: 23,
    message: "자기가 세상을 바꿀 수 있다고 생각할 정도로 미친 사람들이 세상을 바꾼다.",
    author: "미상"
  },
  {
    index: 24,
    message: "언성을 높이지 말고 논거를 강화하라.",
    author: "미상"
  },
  {
    index: 25,
    message: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
    author: "오스카 와일드"
  },
  {
    index: 26,
    message: "삶의 의미는 자신의 재능을 발견하는 것이다. 삶의 목적은 그것을 나눠주는 것이다.",
    author: "미상"
  },
  {
    index: 27,
    message: "광기와 천재성 사이의 거리는 성공으로만 측정된다.",
    author: "브루스 페어스타인"
  },
  {
    index: 29,
    message: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "존 록펠러"
  },
  {
    index: 30,
    message: "게으른 예술가가 만든 명작은 없다.",
    author: "미상"
  },
  {
    index: 31,
    message: "행복은 나비다. 당신이 쫓아다니면 늘 잡을 수 없는 곳에 있지만, 조용히 앉아 있으면 당신에게 내려앉을지도 모른다.",
    author: "나다니엘 호손"
  },
  {
    index: 32,
    message: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
    author: "알버트 아인슈타인"
  },
  {
    index: 33,
    message: "주고 기억하지 않고, 받고 잊지 않는 사람들에게 복이 있나니.",
    author: "미상"
  },
  {
    index: 34,
    message: "매일 당신을 두렵게 만드는 일을 하나씩 하라.",
    author: "미상"
  },
  {
    index: 35,
    message: "놀라운 일을 하려고 노력조차 하지 않을 거면 살아 있어서 뭐하나.",
    author: "미상"
  },
  {
    index: 36,
    message: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
    author: "롤리 다스칼"
  },
  {
    index: 37,
    message: "이 세상에 재능이 있는데 성공하지 못한 사람보다 더 흔한 건 없다.",
    author: "미상"
  },
  {
    index: 39,
    message: "당신의 문제가 문제가 아니라 당신의 반응이 문제다.",
    author: "미상"
  },
  {
    index: 40,
    message: "뭐든 할 수 있지만 모든 걸 할 수 있는 건 아니다.",
    author: "미상"
  },
  {
    index: 41,
    message: "혁신이 지도자와 추종자를 가른다.",
    author: "스티브 잡스"
  },
  {
    index: 42,
    message: "당신이 세상을 바꿀 수 없다고 말하는 사람에는 두 종류가 있다. 시도하기를 두려워하는 사람들, 당신이 성공할까 봐 두려워하는 사람들.",
    author: "레이 고포스"
  },
  {
    index: 43,
    message: "당신이 살면서 어떤 부침을 겪든 간에 생각이 당신의 기본 자산이 되어야 한다.",
    author: "APJ 칼람"
  },
  {
    index: 44,
    message: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    author: "토마스 제퍼슨"
  },
  {
    index: 45,
    message: "모든 성취의 시작점은 갈망이다.",
    author: "나폴레온 힐"
  },
  {
    index: 46,
    message: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "로버트 콜리어"
  },
  {
    index: 47,
    message: "뛰어난 걸 원하면 오늘 당장 이룰 수 있다. 지금 당장 뛰어나지 못한 일을 그만둬라.",
    author: "토마스J. 왓슨"
  },
  {
    index: 48,
    message: "모든 진보는 익숙한 영역이 아닌 곳에서 이뤄진다.",
    author: "마이클 존 보박"
  },
  {
    index: 49,
    message: "성공을 갈망할 때만 성공할 수 있고, 실패해도 상관없다고 생각할 때만 실패할 수 있다",
    author: "필리포스"
  },
  {
    index: 50,
    message: "용기는 공포에 대한 저항, 공포의 지배이지 공포의 부재가 아니다.",
    author: "마크 트웨인"
  },
  {
    index: 51,
    message: "마치지 않고 죽어도 되는 일만 내일로 미뤄라.",
    author: "파블로 피카소"
  },
  {
    index: 52,
    message: "사람들은 동기 부여는 오래가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고하는 것이다.",
    author: "지그 지글러"
  },
  {
    index: 53,
    message: "우리는 우리가 늘 생각하는 것이 된다. 그것이 가장 묘한 비밀이다.",
    author: "얼 나이팅게일"
  },
  {
    index: 54,
    message: "성공(success)이 노력(work)보다 먼저 나타나는 유일한 곳은 사전이다.",
    author: "비달 사순"
  },
  {
    index: 55,
    message: "조직을 만들어야 할 가장 좋은 이유는 의미를 만들기 위해서이다. 세상을 더 좋은 곳으로 만드는 제품이나 서비스를 만들기 위해서이다.",
    author: "가이 카와사키"
  },
  {
    index: 56,
    message: "삶에 진정한 흥미가 있고 호기심이 있는 삶을 살면 잠이 가장 중요한 것이 아니게 된다는 것을 발견했다.",
    author: "마사 스튜어트"
  },
  {
    index: 57,
    message: "당신이 눈으로 보는 것이 아니라 진짜로 발견하는 것이 무엇인가가 중요하다.",
    author: "미상"
  },
  {
    index: 58,
    message: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다.",
    author: "콜린 R. 데이비스"
  },
  {
    index: 59,
    message: "리더십의 기능은 지도자를 더 많이 만드는 것이지 추종자를 더 많이 만드는 게 아니다.",
    author: "랄프 네이더"
  },
  {
    index: 60,
    message: "성공이란 당신 자신, 당신이 하는 일, 그 일을 하는 방식을 좋아하는 것이다.",
    author: "마야 앤젤루"
  },
  {
    index: 61,
    message: "다음 세기를 바라보는 지금, 지도자들은 다른 사람들에게 힘을 주는 사람이 될 것이다.",
    author: "빌 게이츠"
  },
  {
    index: 62,
    message: "진짜 사업가는 안전망이 없는 사람이다.",
    author: "헨리 크래비스"
  },
  {
    index: 63,
    message: "애초에 처한 상황의 포로가 되기를 거부할 때 성공으로 가는 첫 발을 내딛은 것이다.",
    author: "마크케인"
  },
  {
    index: 64,
    message: "성공한 사람에겐 모멘텀이 있다. 성공할수록 더 성공하고 싶어지고, 성공할 방법을 더 많이 찾아낸다. 마찬가지로, 실패하면 자기충족적 예언이 될수도 있는 하강 경향이 생긴다.",
    author: "토니 로빈스"
  },
  {
    index: 65,
    message: "내가 강해질 용기를 낼 때, 내 힘을 내 비전을 위해 사용할 때 내가 두려워하는지 여부는점점덜 중요해진다.",
    author: "오드리 로드"
  },
  {
    index: 66,
    message: "당신이 다수의 편에 서 있다는 걸 깨닫게 될 때가 다시 생각해볼 때이다.",
    author: "마크 트웨인"
  },
  {
    index: 67,
    message: "성공한 전사는 면도날 같은 초점을 지닌 평범한 사람이다.",
    author: "브루스 리"
  },
  {
    index: 68,
    message: "실패에서부터 성공을 만들어 내라. 좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
    author: "데일 카네기"
  },
  {
    index: 69,
    message: "당신의 인생을 스스로 설계하지 않으면 다른 사람의 계획에 빠져들 가능성이 크다. 남들이 당신을 위해 계획해 놓은 것? 많지 않다.",
    author: "짐 론"
  },
  {
    index: 70,
    message: "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라.",
    author: "구르박쉬 차할"
  },
  {
    index: 71,
    message: "패배의 공포가 승리의 짜릿함보다 커지게 하지 마라.",
    author: "로버트 키요사키"
  },
  {
    index: 72,
    message: "영속적인 변화를 이루고 싶으면 당신의 문제의 크기에 집중하지 말고 당신의 크기에 집중하라!",
    author: "T. 하브 에커"
  },
  {
    index: 73,
    message: "앞을 보며 점과 점을 연결할 수는 없다. 뒤돌아볼 때만 가능하다. 그러니 당신은 미래에 언젠가 점들이 연결될 거라고 믿어야 한다. 무언가를 믿어야 한다. 당신의 직감, 운명, 삶, 카르마, 뭐든지. 이 접근법은 한 번도 나를 실망시킨 적이 없고, 내 삶의 모든 것을 이뤄내게 해주었다.",
    author: "스티브 잡스"
  },
  {
    index: 74,
    message: "성공한 사람들은 성공하지 않은 사람들이 하지 않으려는 것을 한다. 더 쉬웠으면 하고 바라지말고 내가 더 나았으면 하고 바라라.",
    author: "짐 론"
  },
  {
    index: 75,
    message: "사람들이 인생에서 실패하는 가장 큰 이유는 친구, 가족, 이웃들의 말을 듣기 때문이다.",
    author: "나폴레온 힐"
  },
  {
    index: 76,
    message: "대부분의 사람들이 결코 목표를 이루지 못하는 이유는 그들은 목표를 정의하지 않거나, 단 한번도 진지하게 그 목표가 믿을 수 있는 것, 이룰 수 있는 것이라고 생각해보지 않기 때문이다. 승리하는 사람들은 자신이 어디로 가고 있는지, 그 과정에서 어떤 일을 할 계획인지, 그 모험을 누구와 함께 할 것인지 알고 있다.",
    author: "데니스 웨이틀리"
  },
  {
    index: 77,
    message: "내 경험으로 동기란 단 하나뿐이고, 그건 갈망이다. 어떤 판단이나 원칙도 그걸 누르거나 저항할 수 없다.",
    author: "제인 스마일리"
  },
  {
    index: 78,
    message: "성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다.",
    author: "조지버나드 쇼"
  },
  {
    index: 79,
    message: "내 삶이 끝날 때 내가 내 삶의 길이만큼만 살았다는 걸 깨닫고 싶지 않다. 내 삶의 폭도 살고싶다.",
    author: "다이앤 애커먼"
  },
  {
    index: 80,
    message: "위대한 일들을 이루기 전에 스스로에게 위대한 일들을 기대해야 한다.",
    author: "마이클 조던"
  },
  {
    index: 81,
    message: "동기 부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.",
    author: "짐 륜"
  },
  {
    index: 82,
    message: "과정에서 재미를 느끼지 못하는데 성공하는 일은 거의 없다.",
    author: "데일 카네기"
  },
  {
    index: 83,
    message: "단호한 마음의 굳은 결심을 막거나 통제할 수 있는 우연, 운명, 숙명이란 없다.",
    author: "엘라 휠러 윌콕스"
  },
  {
    index: 84,
    message: "우리의 가장 큰 공포는 실패에 대한 공포가 아니라 인생에서 진정 중요하지 않은 일들에 성공하는 것에 대한 두려움이어야 한다.",
    author: "프랜시스 찬"
  },
  {
    index: 85,
    message: "만족스럽게 잠자리에 들려면 매일 아침 투지를 가지고 일어나야 한다.",
    author: "조지 로리머"
  },
  {
    index: 86,
    message: "성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다.",
    author: "마이크 가프카"
  },
  {
    index: 87,
    message: "성공이란 당신 삶의 목적을 깨닫고, 당신의 잠재력을 전부 발휘하고, 남들에게 도움이 되는 씨를 뿌리는 것이다.",
    author: "존 C. 맥스웰"
  },
  {
    index: 89,
    message: "위대한 것을 이루려면 우리는 행동할 뿐 아니라 꿈도 꾸어야 하고, 계획할 뿐 아니라 믿기도해야 한다.",
    author: "아나톨 프랑스"
  },
  {
    index: 90,
    message: "세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다.",
    author: "데일 카네기"
  },
  {
    index: 91,
    message: "성취의 크기는 목표를 이루기 위해 당신이 극복해야 했던 장애물의 크기로 잰다.",
    author: "부커 T. 워싱턴"
  },
  {
    index: 92,
    message: "진짜 어려움은 극복할 수 있다. 정복할 수 없는 것은 상상 속의 어려움들뿐이다.",
    author: "시어도어N. 베일"
  },
  {
    index: 93,
    message: "모방해서 성공하는 것보다 독창적으로 실패하는 게 더 낫다.",
    author: "허먼 멜빌"
  },
  {
    index: 94,
    message: "운은 용기를 내는 사람의 편이다",
    author: "베르길리우스"
  },
  {
    index: 95,
    message: "소인배는 불운에 길들여지고 눌린다. 그러나 위대한 사람들은 불운 위로 올라선다.",
    author: "워싱턴 어빙"
  },
  {
    index: 96,
    message: "실패는 성공을 맛내는 양념이다.",
    author: "트루먼 카포티"
  },
  {
    index: 97,
    message: "당신이 할 수 없는 일이 할 수 있는 일에 지장을 주게 하지 마라.",
    author: "존 R. 우든"
  },
  {
    index: 98,
    message: "이기기 위해서는 한 번 이상 전쟁을 치러야 할 때도 있다.",
    author: "마가렛 대처"
  },
  {
    index: 99,
    message: "인간은 자신이 원하는 만큼 위대해질 수 있다. 자신을 믿고 용기, 투지, 헌신, 경쟁력있는 추진력을 가진다면, 그리고 가치있는 것들을 위한 대가로 작은 것들을 희생할 용의가 있다면 가능하다.",
    author: "빈스 롬바디"
  },
  {
    index: 100,
    message: "준비하지 않은 자는 기회가 와도 소용없다.",
    author: "빈스 롬바디"
  },
  {
    index: 101,
    message: "허물이 있다면, 버리기를 두려워말라.",
    author: "공자"
  },
  {
    index: 102,
    message: "인생은 겸손에 대한 오랜 수업이다.",
    author: "제임스 M. 베리"
  },
  {
    index: 103,
    message: "도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다.",
    author: "조슈아 J. 마린"
  },
  {
    index: 104,
    message: "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.",
    author: "빌 게이츠"
  },
  {
    index: 105,
    message: "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.",
    author: "찰리 채플린"
  },
  {
    index: 106,
    message: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
    author: "소크라테스"
  },
  {
    index: 107,
    message: "시간 엄수는 비즈니스의 영혼이다.",
    author: "토마스 할리버튼"
  },
  {
    index: 108,
    message: "주여, 제가 이룬 것보다 항상 더 많이 갈망하게 하소서.",
    author: "미켈란젤로"
  },
  {
    index: 109,
    message: "누구나 재능은 있다. 드문 것은 그 재능이 이끄는 암흑 속으로 따라 들어갈 용기다.",
    author: "에리카 종"
  },
  {
    index: 110,
    message: "시작이 반이다.",
    author: "아리스토텔레스"
  },
  {
    index: 111,
    message: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라.",
    author: "알버트 아인슈타인"
  },
  {
    index: 112,
    message: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인"
  },
  {
    index: 113,
    message: "얼굴이 계속 햇빛을 향하도록 하라. 그러면 당신의 그림자를 볼 수 없다.",
    author: "헬렌 켈러"
  },
  {
    index: 114,
    message: "노력에 집착하라. 숙명적인 노력을.",
    author: "레오나르도 다빈치"
  },
  {
    index: 115,
    message: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
    author: "세네카"
  },
  {
    index: 116,
    message: "위험은 자신이 무엇을 하는지 모르는 데서 온다.",
    author: "워렌 버핏"
  },
  {
    index: 117,
    message: "성공은 대게 그를 좇을 겨를도 없이 바쁜 사람에게 온다",
    author: "헨리 데이비드 소로우"
  },
  {
    index: 118,
    message: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
    author: "조쉬 빌링스"
  },
  {
    index: 119,
    message: "실패하는 길은 여럿이나 성공하는 길은 오직 하나다.",
    author: "아리스토텔레스"
  },
  {
    index: 120,
    message: "천재성에는 한계가 있을 수 있지만 어리석음에는 이런 장애가 없다.",
    author: "앨버트 허버드"
  },
  {
    index: 121,
    message: "성공의 8할은 일단 출석하는 것이다.",
    author: "우디 알렌"
  },
  {
    index: 122,
    message: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료"
  },
  {
    index: 123,
    message: "멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
    author: "안나 파블로바"
  },
  {
    index: 124,
    message: "운은 계획에서 비롯된다.",
    author: "브랜치 리키"
  },
  {
    index: 125,
    message: "미래는 현재 우리가 무엇을 하는가에 달려있다.",
    author: "마하트마 간디"
  },
  {
    index: 126,
    message: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
    author: "플루타르코스"
  },
  {
    index: 127,
    message: "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
    author: "줄리아 소렐"
  },
  {
    index: 128,
    message: "시간에 대한 느긋한 태도는 본질적으로 풍요의 한 형태이다.",
    author: "보니 프리드먼"
  },
  {
    index: 129,
    message: "무얼하든 주의깊게 하라. 그리고 목표를 바라보라.",
    author: "미상"
  },
  {
    index: 130,
    message: "지성을 다하는 것이 곧 천도다.",
    author: "맹자"
  },
  {
    index: 131,
    message: "행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다.",
    author: "프랭클린 D. 루스벨트"
  },
  {
    index: 132,
    message: "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.",
    author: "조지 S. 패튼"
  },
  {
    index: 133,
    message: "품질이란 우연히 만들어지는 것이 아니라, 언제나 지적 노력의 결과이다.",
    author: "존 러스킨"
  },
  {
    index: 134,
    message: "신은 우리가 성공할 것을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
    author: "마더 테레사"
  },
  {
    index: 135,
    message: "탁월하다는 것은 아는 것만으로는 충분치 않으며, 탁월해지기 위해, 이를 발휘하기 위해 노력해야 한다.",
    author: "아리스토텔레스"
  },
  {
    index: 136,
    message: "위대한 성취를 하려면 행동하는 것뿐만 아니라, 꿈꾸는 것도 반드시 필요하다.",
    author: "아나톨 프랑스"
  },
  {
    index: 137,
    message: "어릴 적 나에겐 정말 많은 꿈이 있었고, 그 꿈의 대부분은 많은 책을 읽을 기회가 많았기 가능했다고 생각한다.",
    author: "빌 게이츠"
  },
  {
    index: 138,
    message: "이 인생에서는 마지막에 웃는 자가 가장 오래 웃는 자다.",
    author: "존 메이스필드"
  },
  {
    index: 139,
    message: "인간은 살아있기 위해 무언가에 대한 열망을 간직해야 한다.",
    author: "마가렛 딜란드"
  },
  {
    index: 140,
    message: "인류에게는 정말로 효과적인 무기가 하나있다. 바로 웃음이다.",
    author: "마크 트웨인"
  },
  {
    index: 141,
    message: "꿈은 이루어진다. 이루어질 가능성이 없었다면 애초에 자연이 우리를 꿈꾸게 하지도 않았을 것이다.",
    author: "존 업다이크"
  },
  {
    index: 142,
    message: "계산된 위험은 감수하라. 이는 단순히 무모한 것과는 완전히 다른 것이다.",
    author: "조지 S. 패튼"
  },
  {
    index: 143,
    message: "우리에게는 존재하지 않는 것들을 꿈꿀 수 있는 사람들이 필요하다.",
    author: "존 F. 케네디"
  },
  {
    index: 144,
    message: "너무 멀리 갈 위험을 감수하는 자만이 얼마나 멀리 갈 수 있는 지 알 수 있다.",
    author: "T.S. 엘리엣"
  },
  {
    index: 145,
    message: "가장 큰 위험은 위험없는 삶이다.",
    author: "스티븐 코비"
  },
  {
    index: 146,
    message: "기회는 새와 같은 것, 날아가기 전에 꼭 잡아라",
    author: "스마일즈"
  },
  {
    index: 147,
    message: "당신이 반복적으로 하는 일, 그것이 바로 당신이다. 그러므로 탁월함은 행동이 아니라 습관이다.",
    author: "아리스토텔레스"
  },
  {
    index: 148,
    message: "연금술사는 이렇게 말했다. ‘배움에는 행동을 통해 배우는 단 한가지 방법이 있을 뿐이라네’",
    author: "파울로 코엘류"
  },
  {
    index: 151,
    message: "좋은 변화를 원한다면 감사를 해보라, 당신의 인생은 엄청나게 바뀔 것이다.",
    author: "제럴드 굿"
  },
  {
    index: 152,
    message: "성실함의 잣대로 스스로를 평가하라. 그리고 관대함의 잣대로 남들을 평가할.",
    author: "존 미첼 메이슨"
  },
  {
    index: 153,
    message: "세상은 오직 성공한 자의 자랑에만 관대하다.",
    author: "존 블레이크"
  },
  {
    index: 154,
    message: "우둔함은 영원하나 무지는 고칠 수 있다.",
    author: "돈 우드"
  },
  {
    index: 155,
    message: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "앙드레 말로"
  },
  {
    index: 156,
    message: "꺼지지 않는 불길로 타올라라",
    author: "루이사 시게아"
  },
  {
    index: 157,
    message: "계단을 밟아야 계단 위에 올라 설 수 있다.",
    author: "터키 속담"
  },
  {
    index: 158,
    message: "건강은 제일의 재산이다.",
    author: "랄프 왈도 에머슨"
  },
  {
    index: 159,
    message: "오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라",
    author: "마하트마 간디"
  },
  {
    index: 160,
    message: "삶은 당신이 만드는 것이다. 이전에도 그랬고 앞으로도 그럴 것이다.",
    author: "그랜마 모세"
  },
  {
    index: 161,
    message: "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 종종 우리는 닫힌 문을 멍하니 바라보다가 우리로 향해 열린 문을 보지 못하게 된다.",
    author: "헬렌 켈러"
  },
  {
    index: 162,
    message: "실패란 성공이라는 진로를 알려주는 나침반이다.",
    author: "데니스 월트리"
  },
  {
    index: 163,
    message: "바쁜 벌은 슬퍼할 시간이 없다.",
    author: "윌리엄 블레이크"
  },
  {
    index: 164,
    message: "1분전만큼 먼 시간이 없다.",
    author: "짐 비숍"
  },
  {
    index: 165,
    message: "햇빛은 하나의 초점에 모아질때만 불꽃을 피운다.",
    author: "알렉산더 그레이엄 벨"
  },
  {
    index: 166,
    message: "잊지말자. 나는 어머니의 자부심이다. 모자라고 부족한 자식이 아니다.",
    author: "드라마 <미생> 중"
  },
  {
    index: 167,
    message: "때로는 한 순간의 결정이 인생을 바꾼다.",
    author: "나폴레온 힐"
  },
  {
    index: 168,
    message: "즐기려면 먼저 관심을 가져라",
    author: "짐 콜린스"
  },
  {
    index: 169,
    message: "1%의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹"
  },
  {
    index: 170,
    message: "경쟁자의 성공을 탐내지 마라.",
    author: "제럴딘 레이본느"
  },
  {
    index: 171,
    message: "먼저 행동으로 옮기고 나서 말하라",
    author: "스티븐 스필버그"
  },
  {
    index: 172,
    message: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author: "발타사르 그라시안"
  },
  {
    index: 174,
    message: "최고에 도달하려면 최저에서 시작하라.",
    author: "P.시루스"
  },
  {
    index: 175,
    message: "스트라이크 아웃에 대한 두려움이 게임을 못하게 하지 마라",
    author: "베이비 루스"
  },
  {
    index: 176,
    message: "인생의 세 가지는 건강, 사명 그리고 여러분이 사랑하는 사람이다.",
    author: "나발 라비칸트"
  },
  {
    index: 178,
    message: "인생을 다시 산다면 다음 번에는 더 많은 실수를 저지르리라.",
    author: "나딘 스테어"
  },
  {
    index: 179,
    message: "가난은 가난하다고 느끼는 곳에 존재한다.",
    author: "에머슨"
  }
];
class d {
  constructor() {
    n(this, "storageService");
    this.storageService = x();
  }
  // 랜덤 인덱스를 생성하는 메서드
  getRandomIndex(e) {
    return Math.floor(Math.random() * e);
  }
  // 단일 명언을 랜덤하게 가져오기
  getOne() {
    const e = this.getRandomIndex(i.length);
    return i[e];
  }
  // 모든 명언을 가져오기
  getAll() {
    return i;
  }
  // 매일 새로운 랜덤 명언을 가져오기
  getDailyMotivator() {
    const e = i.length, s = (/* @__PURE__ */ new Date()).getTime(), t = this.storageService.getStorage(this.storageService._mtvTimeKey) || 0;
    let r = this.storageService.getStorage("dailyMotivatorIndex");
    return (s >= t || r === null) && (r = this.getRandomIndex(e), this.storageService.setStorage("dailyMotivatorIndex", r), this.storageService.setStorage("nextResetTime", this.storageService.getNextResetTime())), i[r];
  }
}
const l = () => {
  let a = null;
  return a || (a = new d(), a);
}, v = l();
export {
  v as eduMotivator
};
