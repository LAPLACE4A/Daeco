# <24짐 센터> - <Deaco>

## 서비스 요약

**Deaco** - 대구 지역 맞춤형 놀거리 장소와 코스를 추천하고, 사용자 리뷰 기반의 커뮤니티 서비스를 제공하는 웹앱

## 주제 구분

- C타입 대구 지역 상권을 살리는데 도움을 주는 서비스

## 팀원 소개

팀명: **24짐 센터**
24학번 학우들끼리 모여 구성한 팀으로 <미사여구 어쩌고 저쩌고>

팀원:

- **정채희**: 기획 및 UI/UX 디자인 담당
- **김도현**: 프론트엔드 개발 담당
- **권영준**: 백엔드 개발 담당
- **김희우**: 데이터 분석 및 AI 모델링 담당

## 시연 영상

- [Youtube 링크](#)
- [Github Repository 링크](#) (선택 사항)

## 서비스 소개

### 서비스 개요

**대구 데일리**는 대구 지역 맞춤형 놀거리와 데일리 코스를 추천해주는 서비스입니다. AI 기반으로 사용자의 취향에 맞는 데이트 코스, 가족 나들이 코스 등을 추천하며, 지역 행사나 축제 정보까지 반영하여 더욱 풍성한 하루 계획을 제공합니다. 사용자들은 이용 후 리뷰를 남기고, 커뮤니티 기능을 통해 다른 사용자와의 상호작용도 가능합니다. 이를 통해 대구 지역 상권과 문화 행사의 활성화를 목표로 합니다.

### 타 서비스와의 차별점

1. **맞춤형 데일리 코스 추천**: AI를 활용하여 사용자의 취향에 맞는 코스를 추천하는 기능을 제공합니다. 이는 단순한 정보 제공을 넘어서, 개인화된 경험을 제공함으로써 사용자의 만족도를 높입니다.
2. **지역 행사 연계**: 대구에서 열리는 다양한 지역 행사와 축제 정보를 코스에 반영하여, 단순한 관광을 넘어 지역의 문화와 상권에 대한 깊이 있는 경험을 제공합니다.

3. **포인트 기반 보상 시스템**: 사용자가 코스를 이용하거나 리뷰를 남기면 포인트가 적립되며, 이는 제휴된 지역 상점에서 사용할 수 있습니다. 지역 상권과의 밀접한 연계를 통해 경제 활성화를 도모합니다.

### 구현 내용 및 결과물

1. **AI 맞춤형 코스 추천 시스템**

   - 사용자의 취향 및 위치를 분석해 데이트 코스, 가족 나들이 등 맞춤형 하루 코스를 추천합니다.
   - 지역 행사와 축제를 반영하여 지역 상권 및 문화 행사를 체험할 수 있는 기회를 제공합니다.

2. **리뷰 기반 커뮤니티**

   - 사용자는 데일리 코스를 이용한 후 리뷰를 남기고 다른 사용자들과 정보를 공유할 수 있습니다.
   - 리뷰에 대한 신뢰도를 기반으로 상호작용을 촉진하는 커뮤니티를 형성합니다.

3. **포인트 적립 및 사용**
   - 사용자가 코스 이용 및 리뷰 작성 시 포인트를 적립할 수 있으며, 적립된 포인트는 제휴 상점에서 사용할 수 있습니다.

### 구현 방식

- **프론트엔드**: React를 사용하여 사용자 인터페이스를 개발했습니다.
- **백엔드**: Node express 기반으로 REST API서버를 구현하였습니다, 데이터베이스는 MongoDB를 사용했습니다.
- **AI**: Tensorflow 백엔드 기반의 Keras로 AI를 훈련하고, AWS lightsail과 Django를 이용해 AI API서버를 구축하였습니다.
- **배포**: 프론트는 Vercel, 백은 Render, AI백엔드는 -를 이용하여 서버를 배포하였습니다.

## 향후 개선 혹은 발전 방안

1. **사용자 맞춤형 추천 고도화**: AI 기반의 추천 알고리즘을 지속적으로 개선하여 더 정밀한 사용자 취향 분석을 도입할 계획입니다.
2. **지역 축제 및 행사 데이터 확장**: 대구 지역의 다양한 행사 및 축제 정보를 실시간으로 반영할 수 있는 시스템을 구축하여 지역 상권과의 연계를 더욱 강화할 예정입니다.
3. **제휴 상점 확장 및 혜택 강화**: 더 많은 상점과의 제휴를 통해 사용자들에게 다양한 혜택을 제공하며, 이를 통해 상점들의 추가 고객 유입을 도모할 계획입니다.
4. **커뮤니티 기능 강화**: 사용자 간의 상호작용을 더욱 원활하게 할 수 있도록 커뮤니티 기능을 확대하고, 이를 통한 지역 사회 활성화에 기여할 것입니다.