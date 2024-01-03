import Svg, { Path, Rect, XmlProps } from 'react-native-svg'

const HamburgerSvg = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
    >
      <Rect width="24" height="2" fill="black" />
      <Rect y="12" width="24" height="2" fill="black" />
      <Rect y="6" width="13" height="2" fill="black" />
      <Rect x="18" y="6" width="6" height="2" fill="black" />
    </Svg>
  )
}

export default HamburgerSvg
