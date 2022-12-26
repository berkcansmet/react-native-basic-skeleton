## React Native Basic Skeleton

- [React Native Basic Skeleton](#react-native-basic-skeleton)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Examples](#examples)

### Installation

`npm install react-native-basic-skeleton`
 or
`yarn add react-native-basic-skeleton`

### Usage

1.  Import react-native-basic-skeleton:

```javascript
import BasicSkeleton from 'react-native-basic-skeleton';
```

### Props

| Name               | Type             | Default                 | Description                                                                                                                       |
| ------------------ | ---------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| visible          | bool             | **required**            | Shows the Skeleton when true                                                                                                |                                                                                     |
|loadingBackground |Array[] |**required** ["transparent", "rgba(0,0,0,0.05)", "transparent"] |Shows the Skeleton linear color|
| height | number | **required** 100|  Shows the Skeleton bones height |
| width | number | **required** 100|  Shows the Skeleton bones width  |
| duration           | number           | 1000 ms                 | Duration of one cycle of animation                                                                                                |
| style     | object           |               | The style applied to the View containing                                                                             |
|backgroundColor | string | **required** "rgba(0,0,0,0.12)" |  The style applied to the View containing color     

### Examples
**Note**: If [react-native-linear-gradient](https://github.com/software-mansion/react-native-reanimated) is not installed in the project, you need to install it.

```javascript
export default function Placeholder () {
  return (
    <BasicSkeleton
    height={200}
    width={200}
    backgroundColor="rgba(0,0,0,0.12)"
    duration={4000}
    loadingBackground={["transparent", "rgba(0,0,0,0.05)", "transparent"]}
    style={{borderRadius: 30}}
    visible={true}>
    />
  )
}
```

### Contribution
Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

