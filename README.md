# @creatable/capa-components

- React Storybook & Material-ui Boilerplate 입니다.
- 'components' 폴더에 컴포넌트를 추가하고 'stories'폴더에 story코드를 작성합니다.
- [Material-UI](https://material-ui.com/) 스타일을 Custom하여 사용하고, 원하는 컴포넌트가 없는 경우 외부 라이브러리 or 직접 생성하여 사용합니다.

#### 로컬테스트

- `yarn start`
- [localhost:6006](http://localhost:6006/)에서 테스트 할 수 있습니다.

#### 패키지 이름

- `package.json`에서 name을 사용할 이름으로 변경합니다.

#### 패키지 버전관리

- `yarn version --major`, `yarn version --minor`, `yarn version --patch`
- version: `major.minor.patch`

#### 패키지 배포

- `yarn publish --access=public`
- 패키지 빌드를 진행하고, 입력된 버전으로 배포합니다.

#### VSCode Extension

- `mdx` 파일 작업 시 `MDX silvenon.mdx` 설치하면 코드 하이라이팅 됨

#### Bug

- Storybook Canvas 탭에서 `Knobs` 안보이는 경우
- 개발자도구 > Application > Local Storage > `storybook-layout` 항목 삭제 > 브라우저 새로고침
