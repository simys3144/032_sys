function PicWithIdol2() {
  let cam;
  let userWeight = [0.35, 0.3, 0.35];
  let announcement;

  let femaleList = ['실수','에이핑크의 박초롱', '에이핑크의 윤보미', '에이핑크의 정은지', '에이핑크의 손나은', '에이핑크의 김남주', '에이핑크의 오하영',
    '여자친구의 소원', '여자친구의 예린', '여자친구의 은하', '여자친구의 유주', '여자친구의 신비', '여자친구의 엄지',
    '트와이스의 나연', '트와이스의 정연', '트와이스의 모모', '트와이스의 사나', '트와이스의 미나', '트와이스의 지효', '트와이스의 다현',
    '트와이스의 채영', '트와이스의 쯔위',
    '아이즈원의 권은비', '아이즈원의 이채연', '아이즈원의 사쿠라', '아이즈원의 장원영', '아이즈원의 김채원', '아이즈원의 조유리',
    '아이즈원의 강혜원', '아이즈원의 히토미', '아이즈원의 김민주', '아이즈원의 최예나', '아이즈원의 나코', '아이즈원의 안유진',
    '있지(ITZY)의 예지', '있지(ITZY)의 리아', '있지(ITZY)의 류진', '있지(ITZY)의 채령', '있지(ITZY)의 유나',
    '마마무의 솔라', '마마무의 휘인', '마마무의 문별', '마마무의 화사',
    '러블리즈의 베이비소울', '러블리즈의 유지애', '러블리즈의 서지수', '러블리즈의 이미주', '러블리즈의 케이', '러블리즈의 진', '러블리즈의 류수정',
    '러블리즈의 정예인',
    '위키미키의 지수연', '위키미키의 엘리', '위키미키의 최유정', '위키미키의 김도연', '위키미키의 세이', '위키미키의 루아', '위키미키의 리나', '위키미키의 루시',
    '블랙핑크의 지수', '블랙핑크의 제니', '블랙핑크의 로제', '블랙핑크의 리사',
    '드림캐쳐의 지유', '드림캐쳐의 수아', '드림캐쳐의 시연', '드림캐쳐의 한동', '드림캐쳐의 유현', '드림캐쳐의 다미', '드림캐쳐의 가현',
    '여자아이들의 미연', '여자아이들의 민니', '여자아이들의 수진', '여자아이들의 소연', '여자아이들의 우기', '여자아이들의 슈화',
    '에이프릴의 윤채경', '에이프릴의 김채원', '에이프릴의 이나은', '에이프릴의 양예나', '에이프릴의 레이첼', '에이프릴의 이진솔',
    '오마이걸의 효정', '오마이걸의 미미', '오마이걸의 유아', '오마이걸의 승희', '오마이걸의 지호', '오마이걸의 비니', '오마이걸의 아린',
    '우주소녀의 설아', '우주소녀의 보나', '우주소녀의 루다', '우주소녀의 다원', '우주소녀의 미기', '우주소녀의 선의', '우주소녀의 엑시',
    '우주소녀의 수빈', '우주소녀의 성소', '우주소녀의 은서', '우주소녀의 여름', '우주소녀의 다영', '우주소녀의 연정',
    '레드벨벳의 아이린', '레드벨벳의 슬기', '레드벨벳의 웬디', '레드벨벳의 조이', '레드벨벳의 예리'
  ];
  let femaleData = [ [5,5,5,5,5,5, 5,5,5,5,5,5, 5,5,5,5,5, '실수1',"실수2"],
  [1, 0, 0, 1, 2, 0,  1, 1, 1, 1, 1, 1,  0, 1, 0, 0, 1, "1991.3.3. 165cm 리더 서브보컬", "다이어트 성공 여신, 맘 따뜻한 리더예요."],
  [1, 0, 1, 1, 2, 1,  1, 1, 0, 1, 1, 1,  0, 1, 0, 0, 0, "1993.8.13. 163cm 리드보컬 메인댄서","비글력 1등 장난꾸러기, 눈웃음 여신이에요."],
  [1, 1, 1, 1, 2, 1,  0, 1, 1, 1, 1, 1,  0, 1, 1, 0, 0, "1993.8.18. 163cm 메인보컬","보컬여신, 사투리가 매력적인 털털한 언니 같아요."],
  [0, 0, 1, 0, 0, 1,  1, 1, 0, 1, 1, 1,  0, 0, 1, 1, 0, "1994.2.10. 168cm 서브보컬", "레깅스 여신으로 유명해요. 많은 이들의 워너비 몸매를 가졌어요."],
  [0, 1, 1, 0, 0, 1,  1, 1, 0, 1, 1, 1,  0, 1, 0, 0, 0, "1995.4.15. 165cm리드보컬 리드댄서", "리액션 장인, 비타민 같은 존재예요."],
  [0, 0, 1, 0, 0, 1,  1, 1, 1, 1, 1, 1,  1, 1, 0, 1, 1, "1996.7.19. 169cm 서브보컬", "막내온탑, 게임과 축구를 좋아해요."],
  [0, 0, 1, 0, 0, 0,  1, 1, 0, 1, 1, 1,  0, 0, 1, 1, 1, "1995년 12월 7일 173cm 리더 서브보컬", "우월한 기럭지를 가졌고, 착해서 몰이 당하는 맏언니예요."],
  [1, 1, 1, 1, 0, 0,  1, 1, 0, 1, 1, 1,  1, 1, 0, 0, 0, "1996년 8월 19일 167cm 리드댄서 서브보컬","눈웃음과 보조개가 매력적이고, 데프콘을 업을 만큼 힘이 세대요."],
  [0, 1, 0, 1, 2, 0,  1, 1, 0, 1, 1, 1,  1, 1, 0, 1, 1, "1997년 5월 30일 163cm  리드보컬", "단발머리가 찰떡이고, 늘 몰이당하는 허당 캐릭터예요."],
  [0, 0, 1, 0, 0, 0,  0, 1, 0, 1, 1, 1,  0, 1, 1, 0, 0, "1997년 10월 4일 170cm 메인보컬", "노래도 잘하고 춤도 잘추는 사기캐지만, 알고 보면 팀에서 제일 이상한 애래요."],
  [0, 0, 1, 0, 0, 1,  1, 1, 0, 1, 1, 1,  1, 1, 0, 0, 0, "1998년 6월 3일 167cm 메인댄서, 서브보컬","시원시원한 춤선을 가졌고, 센스쟁이 입담꾼이에요."],
  [1, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1998년 8월 19일 164cm 서브보컬", "자라면서 점점 더 예뻐지는 성실한 막내 공주님이에요."],
  [1, 1, 0, 1, 1, 0,  0, 1, 1, 1, 1, 1,  0, 1, 0, 0, 0, "1995.09.22. 159cm, 리드보컬, 리드댄서", "복숭아 과즙상, 인트로 장인이에요."],
  [0, 0, 0, 1, 0, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 0, "1996.11.01. 169cm, 리드보컬",  "숏컷이 잘 어울리는 걸크러쉬 캐릭터예요."],
  [0, 0, 0, 1, 1, 0,  1, 0, 0, 1, 1, 1,  0, 0, 0, 0, 1, "1996.11.09. 162cm. 서브보컬, 메인댄서", "귀여운 한국어 발음과는 달리 무대 위에서는 춤신춤왕이에요."],
  [0, 0, 0, 1, 1, 0,  1, 1, 1, 1, 1, 1,  0, 0, 0, 0, 1, "1996.12.29. 163cm, 서브보컬", "큐티섹시, DNA에 새겨진 듯한 애교를 가지고 있어요."],
  [0, 0, 0, 1, 1, 0,  1, 1, 0, 1, 1, 1,  0, 0, 1, 1, 1, "1997.03.24. 163cm, 서브보컬, 메인댄서","고급진 미녀, 무용을 전공해서 우아한 춤선을 가지고 있어요."],
  [1, 1, 0, 1, 2, 1,  0, 1, 1, 1, 1, 1,  0, 1, 0, 0, 0, "1997.02.01. 160cm, 리더, 메인보컬", "다이어트 여신, 털털한 언니미가 매력적이에요."],
  [1, 0, 1, 1, 1, 0,  1, 1, 1, 1, 1, 1,  1, 1, 0, 0, 0, "1998.05.28. 159cm 리드래퍼, 서브보컬", "두부처럼 하얀 피부를 가진, 당찬 막내예요."],
  [0, 0, 0, 1, 0, 1,  1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 0, "1999.04.23. 159cm 메인래퍼, 서브보컬", "도톰한 입술과 매력점을 가졌고, 노잼까지도 매력이에요."],
  [0, 0, 0, 0, 0, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1999.06.14. 170cm, 서브보컬, 리드댄서","대만출신, 우월한 기럭지의 막내예요."],
  [0, 0, 0, 1, 2, 1,  1, 1, 0, 1, 1, 1,  0, 0, 0, 1, 1, "1995년 9월 27일 160cm 리더, 리드보컬, 메인댄서", "팀의 맏언니고, 걸스데이 백댄서 출신이에요."],
  [0, 0, 1, 0, 2, 0,  1, 1, 0, 1, 1, 1,  0, 0, 1, 1, 0, "2000년 1월 11일 165cm 리드보컬, 메인댄서", "우여곡절 끝에 데뷔한 여돌 댄싱퀸, 엄마 같은 언니예요."],
  [0, 0, 0, 1, 1, 0,  1, 1, 1, 1, 1, 1,  1, 1, 0, 1, 1, "1998년 3월 19일 163cm 서브보컬", "일본 출신 비주얼 센터, 갈수록 발전하는 성장캐예요."],
  [1, 1, 0, 1, 0, 0,  1, 1, 1, 1, 1, 1,  1, 0, 0, 0, 0, "2004년 8월 31일 169cm 센터, 서브보컬", "최강 기럭지의 자이언트 베이비, 30초에 윙크를 63번이나 할 수 있어요."],
  [1, 1, 0, 1, 2, 0,  1, 0, 1, 1, 1, 1,  0, 0, 0, 1, 1, "2000년 8월 1일 164cm 리드보컬", "초등학생 때 KBS 창작동요대회에 참가한 경력이 있는 음색요정이에요."],
  [1, 0, 1, 1, 1, 0,  0, 1, 1, 1, 1, 1,  0, 0, 0, 1, 1, "2001년 10월 22일 160cm 메인보컬", "피아노를 전공해서 리듬감이 탁월하고, 쭈굴미를 맡고 있어요."],
  [0, 0, 0, 0, 2, 0,  1, 1, 1, 1, 1, 1,  1, 0, 0, 1, 0, "1999년 7월 5일 163cm 리드래퍼, 서브보컬","게임과 애니를 좋아하고, 타코야키를 최대 20개까지 먹어봤대요."],
  [1, 1, 1, 1, 1, 0,  1, 1, 1, 1, 1, 1,  1, 0, 0, 1, 1, '2001년 10월 6일 158cm', "볼살이 귀여운 에너자이저예요."],
  [0, 0, 0, 0, 2, 0,  1, 1, 1, 1, 1, 1,  0, 0, 0, 0, 1, "2001년 2월 5일 166cm 서브보컬, 서브래퍼", "큰 눈과 짙은 쌍커풀을 가졌고, 착해서 늘 멤버들에게 몰이를 당해요."],
  [1, 1, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  1, 1, 0, 0, 0, "1999년 9월 29일 163cm 리드보컬, 래퍼, 리드댄서", "덕후몰이상, 친화력과 재치가 있어요."],
  [1, 1, 0, 1, 1, 0,  1, 1, 1, 1, 1, 1,  1, 0, 0, 1, 1, "2001년 6월 18일 150cm 서브보컬","일본 출신, 키가 149cm로 걸그룹 최단신이에요."],
  [1, 0, 0, 1, 0, 0,  1, 1, 1, 1, 1, 1,  1, 1, 0, 0, 1, "2003년 9월 1일 169cm 리드보컬, 리드댄서", "데뷔 전 렌즈 모델을 했고, 댕댕이 같은 귀여운 성격이에요."],
  [0, 0, 1, 0, 0, 0,  1, 1, 0, 1, 0, 1,  0, 1, 0, 1, 1, "2000.5.26. 170cm 리더 메인댄서 리드보컬 서브래퍼", "카리스마 리더, 완벽한 고양이상이에요."],
  [0, 0, 0, 1, 2, 0,  0, 1, 1, 1, 1, 1,  0, 0, 1, 1, 1, "2000.7.21. 162cm 메인보컬", "두상이 예뻐 포니테일이 잘 어울리고, 눈웃음이 매력적이에요."],
  [0, 0, 0, 0, 2, 0,  0, 0, 0, 0, 0, 1,  0, 1, 1, 1, 0, "2001.4.17. 163cm 메인래퍼 서브보컬 리드댄서","단발미녀, 서바이벌 참여 경력이 있는 실력자예요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 0, 1, 1, 1,  1, 0, 0, 1, 0, "2001.6.5. 166cm 메인댄서 서브보컬 서브래퍼","피부가 아주 하얗고, 자매가 모두 아이돌이에요."],
  [0, 0, 0, 0, 0, 0,  1, 1, 1, 1, 1, 1,  1, 1, 0, 0, 0, "2003.12.9. 172cm 서브보컬", "우월한 기럭지의 비주얼 센터, 막내다운 발랄함을 가졌어요."],
  [1, 1, 0, 1, 2, 0,  0, 1, 1, 1, 1, 0,  0, 1, 0, 0, 1, "1991년 2월 21일 163cm 리더, 보컬", "꼬부기상이고, 시원한 고음 능력자예요."],
  [1, 0, 1, 0, 1, 1,  0, 0, 1, 1, 1, 0,  0, 1, 0, 0, 0, "1995년 4월 17일 159cm 보컬, 퍼포먼스","독특한 음색, 특유의 당참과 개성이 매력적이에요."],
  [0, 0, 1, 0, 2, 0,  0, 0, 1, 0, 0, 0,  0, 1, 1, 0, 0, "1992년 12월 22일 163cm 랩, 퍼포먼스", "걸크러쉬, 랩과 보컬 모두 능력자예요."],
  [0, 0, 1, 0, 2, 1,  0, 0, 0, 0, 0, 0,  0, 1, 1, 0, 0, "1995년 7월 23일 162cm 보컬, 랩", "데뷔전부터 유명했던 실력파고, 솔직털털한 매력으로 예능도 접수했어요."],
  [1, 1, 1, 1, 1, 1,  0, 1, 1, 1, 1, 0,  0, 0, 1, 1, 0, "1992.07.06. 158cm 리더, 메인보컬", "발사이즈가 215mm로 아주 작고, 주량이 소주 5병이래요."],
  [1, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  1, 0, 0, 1, 1, "1993.05.21 163cm 서브보컬", "사격이 특기고, 레몬을 좋아해요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 0, 1, 1, 1,  0, 1, 0, 1, 0, "1994.02.11. 165cm 서브보컬, 메인댄서","명랑한 성격, 미대에 합격했었대요."],
  [0, 0, 0, 0, 2, 0,  1, 1, 0, 1, 1, 1,  0, 1, 1, 0, 0, "1994.09.23. 165cm 서브보컬, 메인댄서", "끼쟁이 비글캐릭터, 한화이글스 팬이래요."],
  [1, 1, 1, 1, 2, 0,  0, 1, 1, 1, 1, 1,  0, 0, 0, 1, 1, "1995.03.20. 162cm 메인보컬, 리드댄서","애교문화재, 가창력이 좋아요."],
  [1, 0, 1, 1, 2, 0,  0, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1996.06.12. 165cm 메인보컬", "좋아하는 사람과 청과점 운영하면서 살기가 장래희망이래요."],
  [1, 1, 1, 1, 0, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1997.11.19. 168cm 리드보컬", "기타 연주가 특기예요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1998.06.04. 166cm 서브보컬, 리드댄서", "언어 파괴자, 체육을 잘 해요."],
  [1, 0, 0, 0, 2, 0,  0, 1, 0, 1, 0, 1,  0, 0, 1, 1, 1, "1997년 4월 20일 164cm 리더, 메인보컬","피아노를 잘 치고, 농구동아리도 3년이나 했대요."],
  [0, 0, 1, 0, 2, 0,  1, 1, 0, 1, 1, 1,  0, 1, 1, 0, 1, "1998년 7월 20일 161cm 서브보컬", "특기가 태권도예요."],
  [1, 1, 1, 1, 1, 0,  1, 0, 0, 1, 0, 1,  1, 1, 0, 0, 1, "1999년 11월 12일 157cm 메인래퍼, 메인댄서","강아지 3마리를 키우고, 눈물이 많아요."],
  [0, 0, 1, 0, 0, 0,  1, 1, 0, 1, 1, 1,  1, 1, 0, 0, 0, "1999년 12월 4일 173cm  리드보컬", "우월한 기럭지의 고양이상 비주얼, 중학교 때 치어리딩 동아리 단장을 했었대요."],
  [0, 0, 0, 1, 2, 0,  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, "2000년 1월 7일 163cm 서브보컬", "유기농, 차 마시는 걸 좋아해요."],
  [1, 1, 0, 1, 2, 0,  1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, "2000년 10월 6일 166cm 서브보컬", "특기가 뽀뽀, 눈이 너무 커서 안무 연습 중에 렌즈가 종종 빠진대요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, "2001년 9월 27일 161cm 서브보컬", "한쪽 눈썹만 움직일 수 있고, 꼬깔콘을 엄청 좋아한대요."],
  [0, 0, 1, 0, 0, 0,  1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, "2002년 8월 31일 169cm 서브보컬, 리드댄서","맨손으로 사과를 쪼갤 수 있대요."],
  [1, 0, 0, 1, 1, 0,  1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, "1995.01.03. 162cm 리드보컬", "4차원 엉뚱매력을 가진 정석미녀, 눈웃음이 매력적이에요."],
  [0, 1, 1, 0, 2, 0,  1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, "1996.01.16. 163cm 메인래퍼 서브보컬", "고양이상이지만 웃을 때 무장해제되고, 랩하는 목소리가 매력적이에요."],
  [0, 0, 1, 1, 0, 0,  0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, "1997.02.11. 168cm 메인보컬 리드댄서", "음색이 매력적이고, 말투나 행동에 애교가 많아 귀여워요."],
  [0, 0, 0, 0, 0, 0,  1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, "1997.03.27. 167cm 메인댄서 리드래퍼 서브보컬","태국 출신, 얼굴이 작아 비율이 좋고, 랩이 매력적이에요."],
  [1, 1, 1, 1, 0, 0,  1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, "1994.05.17. 167cm 리더, 서브보컬, 리드댄서", "데뷔 전 고깃집 알바를 해 본 적이 있대요."],
  [0, 0, 0, 0, 2, 1,  1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, "1994.08.10. 162cm 리드래퍼 메인댄서", "손재주가 좋고, 멤버들을 엄마처럼 챙기는 역할이에요."],
  [0, 0, 0, 0, 2, 0,  0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, "1995.10.01. 166cm 메인보컬","캡틴 아메리카 덕후래요."],
  [0, 0, 1, 0, 2, 1,  1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, "1996.03.26 165cm 서브보컬","중국 출신, 귀여운 광대 탓에 별명이 호빵맨이에요."],
  [0, 0, 1, 0, 0, 0,  1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, "1997.01.07 168cm 리드보컬","독특한 정신세계, 4차원 매력이 있어요."],
  [0, 0, 0, 0, 2, 0,  1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, "1997.03.07 163cm 메인래퍼", "걸크러시와 츤데레를 맡고 있는 단발미녀예요."],
  [0, 0, 0, 1, 2, 0,  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, "1999.02.03 160cm 서브보컬 서브래퍼", "초롱초롱한 눈이 인상적인, 명랑함과 에너지 담당 멤버!"],
  [1, 0, 1, 1, 2, 0,  0, 1, 1, 1, 1, 1,  0, 0, 1, 1, 1, "1997.01.31. 164cm 메인보컬", "청순한 정석미인, 민트초코를 싫어해요."],
  [0, 0, 1, 0, 2, 0,  0, 1, 0, 1, 0, 1,  1, 1, 0, 1, 1, "1997.10.23. 164cm 메인보컬","태국 출신, 무대에선 카리스마 넘치지만 무대 아래에선 순둥이예요."],
  [0, 1, 1, 0, 2, 0,  1, 0, 1, 1, 1, 1,  0, 0, 1, 1, 1,"1998.03.09. 164cm 서브보컬, 메인댄서", "차세대 패왕색, 무대 위 눈빛연기 갑이지만 일상에선 낯을 많이 가려요."],
  [0, 0, 1, 0, 1, 0,  1, 1, 0, 0, 0, 0,  0, 0, 1, 1, 1, "1998.08.26. 157cm 리더, 메인래퍼","만능돌, 작사작곡에 프로듀싱까지 능력치 최상이에요."],
  [1, 1, 1, 1, 2, 0,  1, 1, 0, 1, 1, 1,  1, 1, 0, 0, 1, "1999.09.23. 162cm 서브보컬, 리드댄서", "중국 출신, 귀여운 외모로 입덕요정을 맡고 있어요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "2000.01.06. 161cm 서브보컬", "대만 출신, 전형적인 중화권 미인상으로 피부가 하얘서 민낯도 예뻐요."],
  [1, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, "1996년 7월 7일 161cm 서브보컬", "우여곡절 끝에 데뷔한 프로데뷔러예요."],
  [1, 1, 1, 1, 2, 0,  0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, "1997년 11월 8일 161cm 메인보컬", "엄마처럼 멤버들을 챙기는 역할이에요."],
  [1, 0, 0, 1, 1, 0,  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, "1999년 5월 5일 167cm 서브보컬","뛰어난 비주얼과 연기력으로 드라마 주연을 맡은 적도 있어요."],
  [1, 1, 0, 1, 2, 0,  1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, "2000년 5월 22일 164cm 메인댄서, 리드래퍼","볼살이 매력적인 다람쥐상, 담력이 좋아요."],
  [1, 1, 1, 1, 2, 0,  1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, "2000년 8월 28일, 165cm 메인래퍼, 서브보컬, 리드댄서","발레를 7년 배워서 춤선이 예쁘고, 보조개가 매력적이에요."],
  [1, 0, 1, 0, 0, 0,  0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, "2001년 12월 4일, 169cm 메인보컬","보니하니 하니 출신이고, 명랑한 성격이에요."],
  [1, 1, 1, 1, 1, 0,  0, 1, 1, 1, 1, 1,  0, 1, 0, 1, 0, "1994.07.28  158cm 리더 메인보컬","캔디 리더, 과즙 넘치는 다람쥐상이에요."],
  [0, 0, 1, 0, 2, 0,  1, 0, 0, 0, 0, 1,  0, 1, 0, 0, 1, "1995.05.01  163cm 메인래퍼 서브보컬 메인댄서", "반전매력 귀여운 말투를 가지고 있어요."],
  [1, 1, 1, 1, 1, 0,  1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, "1995.09.17  160cm 리드보컬 메인댄서", "귀여운 외모와는 다른 반전매력으로 뛰어난 춤실력을 자랑해요."],
  [1, 1, 1, 1, 1, 0,  0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, "1996.01.25 160cm 메인보컬", "슈스케 출신 보컬 실력자고, 당찬 매력이 있어요."],
  [0, 1, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, "1997.04.04  165cm 리드보컬, 리드댄서","선이 진한 미녀고, 팀 내 먹이사슬 최상층이에요."],
  [1, 0, 1, 1, 1, 0,  1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, "1997.09.09 161cm 서브보컬","단발미녀, 하얀 피부와 귀엽고 아담한 매력이 있어요."],
  [1, 1, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, "1999.06.18 167cm 서브보컬 리드댄서","하얀 피부에 귀여운 외모를 가진, 모든 멤버들의 사랑을 받는 막내예요."],
  [0, 0, 1, 1, 2, 0,  1, 1, 1, 1, 1, 1,  0, 0, 1, 1, 1, "1994년 12월 24일 165cm 리드보컬", "연습생 기간 10년, 흑발+앞머리+빨간립스틱이 찰떡같이 어울려요."],
  [0, 0, 0, 0, 2, 0,  1, 1, 1, 1, 1, 1,  0, 1, 0, 1, 0, "1995년 8월 19일 163cm 센터, 서브보컬, 리드댄서","그룹 내 셀카요정, 허리가 16인치래요."],
  [1, 0, 1, 1, 1, 0,  1, 1, 1, 1, 1, 1,  1, 0, 1, 1, 1, "1997년 3월 6일 156cm 서브보컬","눈웃음이 매력적인 쪼꼬미고, 혼잣말 장인이에요."],
  [1, 0, 1, 1, 0, 0,  0, 1, 1, 1, 1, 1,  0, 0, 1, 1, 1, "1997년 4월 16일 167cm 메인보컬", "파워풀한 가창력의 소유자, 편의점 음식을 좋아한대요."],
  [1, 0, 1, 1, 2, 0,  1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, "1998년 10월 15일 164cm 서브보컬, 메인댄서","중국 출신이지만 한국어를 잘 하고, 빠지는 게 없는 올라운더예요."],
  [1, 0, 0, 1, 2, 0,  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, "1995년 1월 26일 166cm 서브보컬, 리드댄서", "중국 출신, 한국어가 서투르지만 톡톡 튀는 사이다 같은 매력이 있어요."],
  [0, 0, 0, 0, 0, 0,  1, 1, 1, 1, 0, 1,  0, 0, 1, 0, 0," 1995년 11월 6일 167cm 리더, 메인래퍼", "언프리티랩스타에 출연할 정도의 실력파 랩퍼, 비주얼도 뛰어나요."],
  [1, 1, 1, 1, 1, 0,  0, 1, 1, 1, 1, 1,  1, 1, 0, 0, 1, "1996년 9월 14일 161cm 메인보컬", "동덕여대 방송연예과 15학번, 초콜릿이 밥보다 좋아요."],
  [1, 0, 0, 1, 0, 1,  1, 1, 0, 1, 1, 1,  1, 1, 0, 1, 1, "1998년 7월 15일 167cm 서브보컬, 메인댄서", "중국 출신, 바비인형 같은 비주얼을 가졌고, 아육대 리듬체조로 유명해졌어요."],
  [1, 0, 1, 1, 0, 0,  1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, "1998년 5월 27일 169cm 서브보컬","대형견 같은 성격, 멤버들에게 하도 치근덕대서 별명이 근덕이래요."],
  [0, 0, 1, 0, 1, 0,  1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, "1999년 1월 10일 161cm 서브보컬, 서브래퍼", "냄새를 잘 맡고, 스쿠버 다이빙 자격증이 있어요."],
  [1, 1, 0, 1, 1, 0,  1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, "1999년 5월 14일 161cm 리드보컬","2배속 댄스가 개인기고, 야무진 성격이에요."],
  [1, 1, 1, 1, 2, 0,  0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, "1999년 8월 3일 165cm 메인보컬", "프듀 출신 사이다보컬, 눈웃음이 매력적이에요."],
  [0, 0, 1, 0, 1, 0,  1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, "1991.03.29. 158cm 리더, 메인래퍼", "모두가 인정하는 여돌 최강 비주얼, 조용하고 낯가리는 성격이에요."],
  [0, 0, 1, 0, 2, 0,  0, 1, 0, 0, 1,  1, 1, 1, 0, 1, 1, "1994.02.10. 161cm 리드보컬, 메인댄서", "쌍커풀 없는 눈에 눈웃음이 매력적이고, 윙크를 못 한대요."],
  [0, 0, 1, 1, 1, 0,  0, 1, 1, 0, 1,  1, 1, 1, 0, 0, 1, "1994.02.21. 159cm 메인보컬", "하얀 피부와 예쁜 음색을 가졌고, 가창력이 좋아요."],
  [0, 1, 1, 1, 2, 1,  1, 1, 0, 0, 1,  1, 1, 0, 1, 0, 0, "1996.09.03. 167cm 서브보컬, 리드래퍼","자타공인 과즙상, 눈웃음이 매력적이에요."],
  [0, 1, 0, 1, 1, 1,  1, 1, 1, 1, 1,  0, 1, 1, 0, 0, 0, "1999.03.05. 159cm 서브래퍼, 서브보컬","막내온탑, 귀여운 외모에 친화력도 좋아요."]
  ];

  this.setup = function() {
    createCanvas(640, 480);
    pixelDensity(1);
    cam = createCapture(VIDEO);
    cam.hide();
    announcement = createP("키를 누르면 사진을 저-장할 수 있습니다.\n최애와 찍은 사진을 저장해보세요!\n또한 이전 화면으로 돌아가려면 화면을 클릭해주세요!")

  }

  this.draw = function() {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(cam, width/2, height/2);
    pop();
    let userResult = new Idol(this.sceneManager.users, femaleData, femaleList, femaleImgs, userWeight);
    userResult.gob();
    userResult.compare();
    userResult.extract();
    userResult.photo();

    announcement.html;

  }

  this.keyPressed = function() {
    saveCanvas('PhotoWithIdol', 'jpg');
  }

  this.mousePressed = function() {
    announcement.remove();

  clear();
  createCanvas(600,600);
  background(140, 188, 228);
  this.sceneManager.showScene(WPickMe);
  }
}