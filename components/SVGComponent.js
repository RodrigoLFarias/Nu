import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SVGComponent = (props) => (
  <Svg
    width="80px"
    height="80px"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      stroke="#841584"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M22.09 88.167c-.199 3.71 0 7.504 0 11.19v35.714h19.543v-32.724c0-10.185-.072-19.261 0-21.123.34-8.835 2.704-14.587 7.108-19.305a23.315 23.315 0 0 0-1.02-.022 25.38 25.38 0 0 0-13.337 3.878 26.24 26.24 0 0 0-9.463 10.383c-1.908 3.787-2.599 7.863-2.83 12.01Z"
    />
    <Path
      stroke="#841584"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M66.894 54a24.091 24.091 0 0 0-9.915 2.015 24.613 24.613 0 0 0-8.289 5.93c14.56 0 23.984 10.162 24.512 26.334.12 3.709.16 23.578.16 23.578v23.214h19.542v-31.374c0-9.484.076-17.696-.568-23.367C90.526 64.545 81.102 54 66.894 54Zm103.019 48.833c.199-3.71 0-7.504 0-11.19V55.925H150.37v32.72c0 10.186.073 19.262 0 21.142-.343 8.827-2.707 14.595-7.111 19.313.338.015.678.022 1.021.022a25.39 25.39 0 0 0 13.335-3.877 26.245 26.245 0 0 0 9.464-10.38c1.911-3.809 2.613-7.886 2.834-12.032Z"
    />
    <Path
      stroke="#841584"
      strokeLinejoin="round"
      strokeWidth={12}
      d="M125.102 137a24.085 24.085 0 0 0 9.916-2.015 24.613 24.613 0 0 0 8.288-5.93c-14.559 0-23.983-10.159-24.512-26.334-.119-3.709-.17-12.925-.17-23.596V55.903l-19.542.022v31.378c0 9.484-.076 17.699.568 23.367 1.827 15.785 11.25 26.33 25.452 26.33Z"
    />
  </Svg>
);

export default SVGComponent;
