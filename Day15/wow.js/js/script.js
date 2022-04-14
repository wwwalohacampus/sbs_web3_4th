$(function() {
    // wow.js 스크롤 애니메이션 옵션 적용하기
    wow = new WOW(
      {
        boxClass:     'wow',      // 애니메이션을 적용할 요소의 class 속성
        animateClass: 'animated', // 스크롤영역에 요소가 나타났을 때, 추가할 class 속성
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    )

    // wow.js 스크롤 애니메이션 시작하기!
    wow.init();


})